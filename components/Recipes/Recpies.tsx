/* eslint-disable @next/next/no-async-client-component */
"use client";

import { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import { loadRecipes } from "@/lib/loadRecipes";

interface Recipe {
  id: string;
  name: string;
  rocket: string;
  youtube: string;
}
type RecipeListProps = {
  recipes: Recipe[];
  handleDelete: (id: string) => void;
};
const getYoutubeVideoId = (url: string): string | null => {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regex);
  return match ? match[1] : null;
};
const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const fetchedRecipes = await loadRecipes();
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error("Failed to load missions:", error);
      }
    };

    fetchRecipes();
  }, []);
  const handleDelete = (deletedId: string) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== deletedId));
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      {recipes.map((recipe) => {
        const videoId = getYoutubeVideoId(recipe.youtube);
        const embedUrl = videoId
          ? `https://www.youtube.com/embed/${videoId}`
          : null;

        return (
          <div
            className="flex flex-col rounded-lg shadow-md border-2 border-gray-500 p-4 m-4 justify-between"
            key={recipe.id}
          >
            <DeleteButton id={recipe.id} onDelete={handleDelete} />

            <h1 className="max-w-full text-2xl font-bold text-white">
              {recipe.name}
            </h1>

            {embedUrl ? (
              <iframe
                width="100%"
                height="200"
                src={`${embedUrl}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <h2 className="max-w-full text-xl font-bold text-white">
                {recipe.youtube}
              </h2>
            )}

            <p className="text-gray-400 text-sm">{recipe.rocket}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
