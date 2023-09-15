import React from "react";

const ImageDetailModel = ({ setIsModelOpen }: any) => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center z-[999]">
      <div className="w-2/3 h-3/4 bg-[#27272a] relative">
        <button
          className="text-2xl absolute top-4 left-4"
          onClick={() => setIsModelOpen(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ImageDetailModel;
