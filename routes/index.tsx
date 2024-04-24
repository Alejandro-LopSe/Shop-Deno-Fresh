import { useSignal } from "@preact/signals";

import { Page } from "../islands/Page.tsx";

export default function Home() {
  const count = useSignal(3);
  return <Page></Page>;
}
