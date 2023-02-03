import { Form } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/server-runtime";
import SimInput from "~/components/sim-input";

export async function action({ request }: ActionArgs) {}

export default function Index() {
  return (
    <>
      <Form>
        <div className="flex">
          <SimInput simId={1} label="Parent 1" />
          <SimInput simId={2} label="Parent 2" />
        </div>
      </Form>
    </>
  );
}
