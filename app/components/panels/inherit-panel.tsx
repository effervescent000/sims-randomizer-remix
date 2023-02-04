import { Form, useActionData } from "@remix-run/react";

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
          <input type="hidden" name="_action" value="gen_child" />
          <SimInput simId={1} label="Parent 1" />
          <SimInput simId={2} label="Parent 2" />
        </div>
        <Button>Generate</Button>
        <SimOutput label="Output Sim" simData={data} />
      </PanelLayout>
    </Form>
  );
}

export default InheritPanel;
