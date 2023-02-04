import type { ActionArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";

import { makeChild } from "~/generate.server";
import { makeSimFromBody } from "~/utils";

import InheritPanel from "~/components/panels/inherit-panel";
import RandomizePanel from "~/components/panels/randomize-panel";

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
    <div className="flex justify-center gap-10">
      <InheritPanel />
      <RandomizePanel />
    </div>
  );
}
