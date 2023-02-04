import { Form, useActionData } from "@remix-run/react";
import Button from "./common/button";
import SimInput from "./sim-input";
import SimOutput from "./sim-output";

function InheritPanel() {
  const data = useActionData();
  return (
    <Form method="post">
      <div className="flex flex-col items-center">
        <div className="flex">
          <input type="hidden" name="_action" value="gen_child" />
          <SimInput simId={1} label="Parent 1" />
          <SimInput simId={2} label="Parent 2" />
        </div>
        <Button>Generate</Button>
        <SimOutput label="Output Sim" simData={data} />
      </div>
    </Form>
  );
}

export default InheritPanel;
