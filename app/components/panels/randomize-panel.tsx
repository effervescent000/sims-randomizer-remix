import { Form, useActionData } from "@remix-run/react";
import { FORM_CONSTANTS } from "~/constants/constants";
import Button from "../common/button";
import SimInput from "../sim-input";
import SimOutput from "../sim-output";
import PanelLayout from "./panel-layout";

function RandomizePanel() {
  const data = useActionData();
  return (
    <Form method="post">
      <PanelLayout>
        <input type="hidden" name="_action" value={FORM_CONSTANTS.roll} />
        <SimInput label="Starting Sim" />
        <Button>Roll</Button>
        <SimOutput label="Output" simData={data} />
      </PanelLayout>
    </Form>
  );
}

export default RandomizePanel;