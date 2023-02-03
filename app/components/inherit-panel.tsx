import { Form } from "@remix-run/react";
import SimInput from "./sim-input";

function InheritPanel() {
  return (
    <Form>
      <div className="flex">
        <input type="hidden" name="_action" value="gen_child" />
        <SimInput simId={1} label="Parent 1" />
        <SimInput simId={2} label="Parent 2" />
      </div>
      <button type="submit">Generate</button>
    </Form>
  );
}

export default InheritPanel;
