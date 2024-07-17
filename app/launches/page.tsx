"use client";
import RecipesForm from "@/components/Recipes/RecipesForm";
import Recipes from "@/components/Recipes/Recpies";
import { useRouter } from "next/navigation";
import React from "react";

const Launches = () => {
  const router = useRouter();
  return (
    <>
      <header>
        <h1
          onClick={() => router.push("/")}
          className="cursor-pointer text-4xl font-bold text-center text-white pb-6"
        >
          Space X-Imaginary-Recipes
        </h1>
        <RecipesForm />
      </header>
      <main>
        <div>
          <Recipes />
        </div>
      </main>
    </>
  );
};

export default Launches;
