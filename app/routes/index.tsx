import type { ActionArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";

import { makeChild } from "~/generate.server";
import { makeSimFromBody } from "~/utils";

import InheritPanel from "~/components/inherit-panel";

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const [leftParent, rightParent] = [
    makeSimFromBody({ simId: 1, body }),
    makeSimFromBody({ simId: 2, body }),
  ];

  const offspring = makeChild({ sims: { leftParent, rightParent } });
  return json(offspring);
}

export default function Index() {
  return (
    <>
      <InheritPanel />
    </>
  );
}
