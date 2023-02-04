import { Form, useActionData } from "@remix-run/react";
import { FORM_CONSTANTS } from "~/constants/constants";

import Button from "../common/button";

import SimInput from "../sim-input";
import SimOutput from "../sim-output";
import PanelLayout from "./panel-layout";

function InheritPanel() {
  const data = useActionData();
  return (
    <Form method="post">
      <PanelLayout>
        <div className="flex">
          <input type="hidden" name="_action" value={FORM_CONSTANTS.inherit} />
          <SimInput simId={1} label="Parent 1" context="inherit" />
          <SimInput simId={2} label="Parent 2" context="inherit" />
        </div>
        <Button cyValue={`${FORM_CONSTANTS.inherit}-btn`}>Generate</Button>
        <SimOutput label="Output Sim" simData={data} context="inherit" />
      </PanelLayout>
    </Form>
  );
}

export default InheritPanel;
