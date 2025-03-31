import Image from "next/image";
import { GTMButton } from "./components/GTMButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">Welcome to My Site</h1>
        <GTMButton href="https://connect.boomevents.org/en/organizer/2e24ee9e-6ef3-428b-a037-a5efabf8f07f">
          Click me to visit Example.com
        </GTMButton>
      </main>
    </div>
  );
}
