import type { ActionArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";

import { FORM_CONSTANTS } from "~/constants/constants";

import { makeChild, rollSim } from "~/generate.server";
import { makeSimFromBody } from "~/utils";

import InheritPanel from "~/components/panels/inherit-panel";
import RandomizePanel from "~/components/panels/randomize-panel";

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const action = body.get("_action");

  if (action === FORM_CONSTANTS.inherit) {
    const [leftParent, rightParent] = [
      makeSimFromBody({ simId: 1, body }),
      makeSimFromBody({ simId: 2, body }),
    ];

    const offspring = makeChild({ sims: { leftParent, rightParent } });
    return json(offspring);
  }

  if (action === FORM_CONSTANTS.roll) {
    const sim = makeSimFromBody({ simId: 1, body });
    const rolledSim = rollSim({ sim });
    return json(rolledSim);
  }

  return null;
}

export default function Index() {
  return (
    <div className="flex justify-center gap-10">
      <InheritPanel />
      <RandomizePanel />
    </div>
  );
}
