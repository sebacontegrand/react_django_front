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
    <main className="relative flex min-h-screen items-center justify-center p-24 bg-gradient-to-b from-zinc-900 to-white">
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Background image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-slate-800 font-extrabold text-4xl">Hello...</h1>
        <button
          className="m-4 bg- border border-slate-800 text-slate-800 py-2 px-4 rounded"
          onClick={handleClick}
        >
          SpaceX Missions
        </button>
        <button
          className="m-4 bg-transparent border border-slate-800 text-slate-800 py-2 px-4 rounded"
          onClick={handleLaunchesClick}
        >
          SpaceX Recipes
        </button>
      </div>
    </main>
  );
}
