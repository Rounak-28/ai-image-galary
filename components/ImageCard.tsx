"use client";

import { shortenString } from "@/utils/utils";
import Image from "next/image";
import React, { useState } from "react";
import ImageDetailModel from "./ImageDetailModel";

interface ComponentProps {
  caption: string;
  image: string;
  username: string;
  userDP: string;
}

const ImageCard = ({ caption, image, username, userDP }: ComponentProps) => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <>
      <div
        className="bg-gray-500 m-2 relative group"
        onClick={() => setIsModelOpen(true)}
      >
        <Image
          src={image}
          alt=""
          width={200}
          height={100}
          layout="responsive"
          className="group-hover:brightness-50 group-hover:opacity-80"
        />
        <div className="absolute bottom-1 left-2 hidden group-hover:block text-white">
          {shortenString(caption, 30, 15)}
        </div>
      </div>
      {isModelOpen && (
        <ImageDetailModel
          setIsModelOpen={setIsModelOpen}
          caption={caption}
          image={image}
          username={username}
          userDP={userDP}
        />
      )}
    </>
  );
};

export default ImageCard;
