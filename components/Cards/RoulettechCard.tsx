"use client";
import React from "react";
import noImage from "@/assets/images/no-image.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import useProduct from "@/hooks/useProduct";

interface Props {
  rtech: RoulettechCardProps;
}
interface RoulettechCardProps {
  id: string;
  title: string;
  img: string;
  description: string;
  counter?: number;
}
export const ProductImg = ({ img = "" }) => {
  return (
    <Image
      src={img ? img : noImage}
      alt=""
      className="w-full h-full p-2 rounded-lg"
      width={300}
      height={300}
    />
  );
};
const Roulettech = ({ rtech }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <>
      <main className="flex flex-col items-center justify-center p-4 bg-gray-800 text-yellow-100 rounded-lg shadow-lg w-64 h-64">
        <ProductImg img={rtech?.img} />
        <h1 className="text-l">{rtech?.title}</h1>
        <p className="text-xs">{rtech?.description}</p>
        <div className="flex flex-row justify-center items-center w-1/3 h-1/3">
          Print Copy:
          <Button
            className="m-4"
            variant="secondary"
            onClick={() => increaseBy(-1)}
          >
            -
          </Button>
          <div>{counter}</div>
          <Button
            className="m-4"
            variant="secondary"
            onClick={() => increaseBy(1)}
          >
            +
          </Button>
        </div>
      </main>
    </>
  );
};

export default Roulettech;
