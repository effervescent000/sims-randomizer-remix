import { useMatches } from "@remix-run/react";
import { useMemo } from "react";

import type { User } from "~/models/user.server";

const DEFAULT_REDIRECT = "/";

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */
export function safeRedirect(
  to: FormDataEntryValue | string | null | undefined,
  defaultRedirect: string = DEFAULT_REDIRECT
) {
  if (!to || typeof to !== "string") {
    return defaultRedirect;
  }

  if (!to.startsWith("/") || to.startsWith("//")) {
    return defaultRedirect;
  }

  return to;
}

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData(
  id: string
): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );
  return route?.data;
}

function isUser(user: any): user is User {
  return user && typeof user === "object" && typeof user.email === "string";
}

export function useOptionalUser(): User | undefined {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return undefined;
  }
  return data.user;
}

export function useUser(): User {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  }
  return maybeUser;
}

export function validateEmail(email: unknown): email is string {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}

export function humanizeKey(key: string) {
  return key;
}

export function randomFromWeights(options: { [key: number]: number }): number {
  const weightsArray = Object.entries(options).map(([key, value]) => ({
    id: +key,
    weight: value,
  }));
  let total = Object.values(options).reduce((acc, cur) => acc + cur, 0);
  const threshold = Math.random() * total;
  total = 0;
  for (let i = 0; i < weightsArray.length; i++) {
    total += weightsArray[i].weight;
    if (total >= threshold) return weightsArray[i].id;
  }
  const finalWeight = weightsArray.at(-1);
  if (finalWeight) return finalWeight.id;
  return -1;
}

function getAsNumberOrUndefined({
  body,
  queryString,
}: {
  body: FormData;
  queryString: string;
}) {
  const result = body.get(queryString);
  if (result) return +`${result}`;
  return undefined;
}

export function makeSimFromBody({
  simId,
  body,
}: {
  simId: number;
  body: FormData;
}) {
  const traits = body
    .getAll(`sim-${simId}.trait`)
    .filter((item) => item !== null && item !== "-1")
    .map((item) => +`${item}`);
  return {
    age: getAsNumberOrUndefined({ body, queryString: `sim-${simId}.age` }) || 0,
    toddlerTrait: getAsNumberOrUndefined({
      body,
      queryString: `sim-${simId}.toddlerTrait`,
    }),
    traits,
    aspiration: getAsNumberOrUndefined({
      body,
      queryString: `sim-${simId}.aspiration`,
    }),
    career: getAsNumberOrUndefined({
      body,
      queryString: `sim-${simId}.career`,
    }),
  };
}

export function filterOutNoTrait(traitList: number[]) {
  return traitList.filter((trait) => trait !== -1 && trait !== null);
}

export function getEnumList(e: { [key: number]: string }) {
  return Object.values(e)
    .filter((key) => !isNaN(+key))
    .map((item) => +item);
}
