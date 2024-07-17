"use client";
import React from "react";
import RouletchCard from "@/components/Cards/RoulettechCard";
import sat1 from "../../assets/images/sat.jpg";
import { useRouter } from "next/navigation";
import RoulettechMissions from "@/components/Cards/RoulettechMissions";
const product = {
  id: "1",
  title: "Satellite",
  img: sat1.src,
  description: "This is it",
  counter: 0,
};

const RoulettechPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/newmission");
  };

  return (
    <>
      <header className="flex flex-col items-center justify-center text-yellow-100 p-8">
        <h1 className="text-2xl">SpaceX Launches</h1>
        <p className="text-xs">
          SpaceX has launched over 100 satellites into orbit, and has a goal of
          launching 1000 satellites into orbit by 2020.
        </p>
        <hr />
      </header>
      <main>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <RouletchCard rtech={product} />
          <RouletchCard rtech={product} />
          <RouletchCard rtech={product} />
          <RouletchCard rtech={product} />
          <RouletchCard rtech={product} />
          <RouletchCard rtech={product} />
        </div>
        <div className="flex justify-center bg-slate-900 p-4 rounded-lg mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Create New Mission
          </button>
        </div>
      </main>
    </>
  );
};

export default RoulettechPage;
