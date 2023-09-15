import { shortenString } from "@/utils/utils";
import Image from "next/image";
import React from "react";

interface ComponentProps {
  id: number;
  text: string;
}

const ImageCard = ({ id, text }: ComponentProps) => {
  return (
    <div className="bg-gray-500 m-2 relative group">
      <Image
        src={`/images/${id}.png`}
        alt=""
        width={300}
        height={100}
        layout="responsive"
        className="group-hover:brightness-50 group-hover:opacity-80"
      />
      <div className="absolute bottom-0 hidden group-hover:block text-white">
        {shortenString(text, 30, 15)}
      </div>
    </div>
  );
};

export default ImageCard;
