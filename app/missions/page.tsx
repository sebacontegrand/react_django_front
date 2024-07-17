"use client";
import React from "react";
import { useRouter } from "next/navigation";
import RoulettechForm from "@/components/Cards/RoulettechForm";
import RoulettechMissions from "@/components/Cards/RoulettechMissions";

const Missions = () => {
  const router = useRouter();
  return (
    <>
      <header>
        <h1
          onClick={() => router.push("/")}
          className="cursor-pointer text-4xl font-bold text-center text-white pb-6"
        >
          Space X-Imaginary-Missions
        </h1>
        <RoulettechForm />
      </header>
      <main>
        <div>
          <RoulettechMissions />
        </div>
      </main>
    </>
  );
};

export default Missions;
