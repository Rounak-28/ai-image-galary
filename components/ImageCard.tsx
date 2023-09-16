"use client";

import { shortenString } from "@/utils/utils";
import Image from "next/image";
import React, { useState } from "react";
import ImageDetailModel from "./ImageDetailModel";

interface ComponentProps {
  id: number;
  text: string;
}

const ImageCard = ({ id, text }: ComponentProps) => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <>
      <div
        className="bg-gray-500 m-2 relative group"
        onClick={() => setIsModelOpen(true)}
      >
        <Image
          src={`/images/${id}.png`}
          alt=""
          width={200}
          height={100}
          layout="responsive"
          className="group-hover:brightness-50 group-hover:opacity-80"
        />
        <div className="absolute bottom-0 hidden group-hover:block text-white">
          {shortenString(text, 30, 15)}
        </div>
      </div>
      {isModelOpen && <ImageDetailModel setIsModelOpen={setIsModelOpen} text={text} id={id} />}
    </>
  );
};

export default ImageCard;
