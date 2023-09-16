import Link from "next/link";
import React from "react";

const TopNavbar = () => {
  return (
    <div className="h-14 bg-[#1b1b1d] text-white flex justify-center items-center space-x-6 sticky top-0 right-0 z-[999]">
      <Link href="/">
        <div className="px-2 py-2 flex justify-center">Home</div>
      </Link>
      <Link href="/generate">
        <div className="px-2 py-2 flex justify-center">Generate</div>
      </Link>
    </div>
  );
};

export default TopNavbar;
