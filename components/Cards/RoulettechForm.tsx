"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const RoulettechForm = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [show, setShow] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    image && formData.append("image", image);

    console.log(title, description, image);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/missions/`,
      {
        method: "POST",

        body: formData,
      }
    );
    const data = await res.json();
    console.log("%c Line:32 🥝 data", "color:#6ec1c2", data);
    setShow(false);
    router.refresh();
  };
  const { toast } = useToast();
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
            <input
              type="text"
              name="title"
              placeholder="Mission title"
              className="bg-slate-400 rounded-md p-2 mb-2 block w-full"
              value={title}
              onChange={(prev) => setTitle(prev.target.value)}
            />
            <textarea
              name="description"
              placeholder="Mission description"
              className="bg-slate-400 rounded-md p-2 mb-2 block w-full"
              value={description}
              onChange={(prev) => setDescription(prev.target.value)}
            />
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
              <Label htmlFor="image">Mission Image</Label>
              <Input
                id="image"
                type="file"
                className="bg-slate-400 rounded-md p-2 mb-2 block w-full hover:bg-slate-500 cursor-pointer"
                onChange={(e) =>
                  setImage(e.target.files ? e.target.files[0] : null)
                }
              />
            </div>
            <Button
              onClick={() => {
                toast({
                  title: "Done",
                  description: "Your mission has been created successfully",
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
        <Button onClick={() => setShow(true)}>Create New Mission</Button>
      )}
    </div>
  );
};

export default RoulettechForm;
