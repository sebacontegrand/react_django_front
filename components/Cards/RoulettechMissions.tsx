/* eslint-disable @next/next/no-async-client-component */
"use client";
import { loadMissions } from "@/lib/loadMissions";
import Image from "next/image";
import { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import { useRouter } from "next/navigation";
interface Mission {
  id: string;
  image: string;
  title: string;
  description: string;
}
const RoulettechMissions = () => {
  const router = useRouter();
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const fetchedMissions = await loadMissions();
        setMissions(fetchedMissions);
      } catch (error) {
        console.error("Failed to load missions:", error);
      }
    };

    fetchMissions();
  }, []);
  const handleDelete = (deletedId: string) => {
    setMissions(missions.filter((mission) => mission.id !== deletedId));
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      {missions.map(
        (mission: {
          image: string;
          id: string;
          title: string;
          description: string;
        }) => (
          <div
            className=" flex flex-col rounded-lg shadow-md border-2 border-gray-500 p-4 m-4 justify-between"
            key={mission.id}
          >
            <DeleteButton id={mission.id} onDelete={handleDelete} />
            <Image
              className="rounded-lg w-full "
              src={mission.image}
              alt={mission.title}
              width={200}
              height={200}
            />
            <h1 className="max-w-full text-2xl font-bold text-white">
              {mission.title}
            </h1>
            <p className="text-gray-400 text-sm">{mission.description}</p>
          </div>
        )
      )}
    </div>
  );
};

export default RoulettechMissions;
