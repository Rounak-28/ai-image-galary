import React from "react";

const Page = () => {
  return (
    <div className="bg-[#27272a] text-white w-screen h-screen flex justify-center">
      <div className="w-[80%] mt-8 space-y-3 flex flex-col items-center">
        <span className="text-gray-400">Describe your image</span>
        <input
          type="text"
          className="w-8/12 h-28 px-3 focus:outline outline-1 outline-purple-600 bg-[#35353b] rounded-md"
          placeholder="give some prompt..."
        />
      <button className="w-28 h-12 rounded-lg bg-[#352f9b] hover:bg-[#4640bb]">Generate</button>
      </div>
    </div>
  );
};

export default Page;
