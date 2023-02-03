import type { ActionArgs } from "@remix-run/server-runtime";
import InheritPanel from "~/components/inherit-panel";

export async function action({ request }: ActionArgs) {}

export default function Index() {
  return (
    <>
      <InheritPanel />
    </>
  );
}
