"use client";

import Link from "next/link";
import React from "react";
import LoginBtn from "./LoginBtn";
import { useSession } from "next-auth/react";

const TopNavbar = () => {
  const { data: session } = useSession();

  return (
    <div className="h-14 bg-[#110f1a] text-white flex justify-center items-center space-x-6 sticky top-0 right-0 z-[999]">
      <Link href="/">
        <div className="px-2 py-2 flex justify-center">Home</div>
      </Link>
      <Link
        href={session ? "/generate" : "/api/auth/signin?callbackUrl=/generate"}
      >
        <div className="px-2 py-2 flex justify-center">Generate</div>
      </Link>
      <LoginBtn />
    </div>
  );
};

export default TopNavbar;
