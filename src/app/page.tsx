import {CurrentTimezones} from "./current-timezone";
import { AppLayout } from "@/components/app-layout";

export default function Home() {
  return (
    <AppLayout>
      <CurrentTimezones />
    </AppLayout>
  );
}
