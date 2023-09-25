"use client";

import { shortenString } from "@/utils/utils";
import Image from "next/image";
import React, { useState } from "react";
import ImageDetailModel from "./ImageDetailModel";
import { AiOutlineHeart } from "react-icons/ai";

interface ComponentProps {
  caption: string;
  image: string;
  username: string;
  userDP: string;
  likeCount: number;
}

const ImageCard = ({ caption, image, username, userDP, likeCount }: ComponentProps) => {
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
        <div className="absolute top-1 right-2 hidden group-hover:block">
          <div className="flex items-center space-x-1">
            <AiOutlineHeart className="text-4xl" />
            <span>{likeCount}</span>
          </div>
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
