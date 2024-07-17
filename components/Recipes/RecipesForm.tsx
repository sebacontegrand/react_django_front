"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "../ui/input";

import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const RoulettechForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [rocket, setRocket] = useState("");
  const [youtube, setYoutube] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("rocket", rocket);
    formData.append("youtube", youtube);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/launches/`,
      {
        method: "POST",

        body: formData,
      }
    );
    if (res.ok) {
      const data = await res.json();
      console.log("%c Line:32 🥝 data", "color:#6ec1c2", data);
      setShow(false);
      router.refresh();
    } else {
      console.error("Failed to create recipe");
    }
  };

  return (
    <div className="bg-slate-300 p-4 rounded-lg">
      {show && (
        <>
          <form onSubmit={handleSubmit}>
            <h1 className="text-black font-bold">New Mission</h1>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <Input
              type="text"
              name="name"
              placeholder="Mission title"
              className="bg-slate-400 rounded-md p-2 mb-2 block w-full"
              value={name}
              onChange={(prev) => setName(prev.target.value)}
            />
            <Input
              name="rocket"
              placeholder="Mission description"
              className="bg-slate-400 rounded-md p-2 mb-2 block w-full"
              value={rocket}
              onChange={(prev) => setRocket(prev.target.value)}
            />
            <Input
              name="youtube"
              placeholder="Mission description"
              className="bg-slate-400 rounded-md p-2 mb-2 block w-full"
              value={youtube}
              onChange={(prev) => setYoutube(prev.target.value)}
            />

            <Button
              onClick={() => {
                toast({
                  title: "Done",
                  description: "Your Recipe has been created successfully",
                });
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
            >
              Create
            </Button>
          </form>
          <button
            onClick={() => setShow(false)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </>
      )}
      {!show && (
        <Button onClick={() => setShow(true)}>Create New Recipe</Button>
      )}
    </div>
  );
};

export default RoulettechForm;
