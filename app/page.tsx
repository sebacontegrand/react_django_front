"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import bg from "../assets/images/bg.jpg";
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/missions");
  };
  const handleLaunchesClick = () => {
    router.push("/launches");
  };
  return (
    <main className="flex min-h-screen flex-row items-center justify-center p-24 bg-gradient-to-b from-zinc-900 to-white">
      <h1 className="text-yellow-100">Hello...</h1>
      <Button className="m-4" variant="outline" onClick={handleClick}>
        SpaceX Missions
      </Button>
      <Button className="m-4" variant="outline" onClick={handleLaunchesClick}>
        SpaceX Recipes
      </Button>
      <Image src={bg} alt="bg" objectFit="cover" quality={100} priority />
    </main>
  );
}
