import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ComponentProps {
  setIsModelOpen: any;
  caption: string;
  image: string;
  username: string;
  userDP: string;
}

const ImageDetailModel = ({
  setIsModelOpen,
  caption,
  image,
  username,
  userDP,
}: ComponentProps) => {
  const [copyBtnText, setCopyBtnText] = useState("copy prompt");

  const handleCopy = () => {
    navigator.clipboard.writeText(caption);
    setCopyBtnText("copied!");
    setTimeout(() => {
      setCopyBtnText("copy prompt");
    }, 1000);
  };

  // close when escape btn click
  const handleEscPress = (event: any) => {
    if (event.key === "Escape") {
      setIsModelOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleEscPress);

    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, []);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-[999]">
      <div className="w-3/4 h-3/4 px-2 py-4 bg-[#27272a] rounded-md border-[1px] border-gray-300 relative flex">
        <button
          className="text-xl md:text-2xl lg:text-3xl font-semibold absolute top-4 right-4"
          onClick={() => setIsModelOpen(false)}
        >
          X
        </button>
        <div className="left w-full flex justify-center">
          <Image
            src={image}
            alt=""
            width={300}
            height={100}
            className="object-contain w-full"
          />
        </div>
        <div className="right h-max flex justify-center w-full">
          <div className="prompt bg-[#323238] w-[85%] min-h-[110px] p-2 rounded-md flex flex-col">
            <div className="flex items-center space-x-2 mt-1 mb-4">
              <img src={userDP} className="h-10 w-10 rounded-full" alt="" />
              <span className="text-gray-300">{username}</span>
            </div>
            <p className="text-gray-400 font-semibold my-1">Prompt</p>
            <span>{caption}</span>
            <div className="h-14 flex items-center justify-center space-x-4">
              <button
                className="w-28 h-10 rounded-md bg-[#3f3f46] hover:bg-[#7c7c85]"
                onClick={handleCopy}
              >
                {copyBtnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailModel;
