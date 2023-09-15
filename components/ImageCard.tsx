import { shortenString } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const ImageCard = ({ id }: any) => {
  let text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate assumenda praesentium temporibus asperiores perspiciatis exercitationem inventore quod incidunt quam odit non ullam, perferendis dicta dolores ea officia deleniti nostrum.";

  return (
    <div className="bg-gray-500 m-2  relative group">
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
