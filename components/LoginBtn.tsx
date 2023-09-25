"use client";

import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginBtn = () => {
  const { data: session } = useSession();

  const [showProfileModal, setShowProfileModal] = useState(false);

  if (session) {
    return (
      <div className="absolute right-5">
        <img
          src={session.user?.image!}
          alt=""
          className="w-10 h-10 rounded-full"
          onClick={() => setShowProfileModal(!showProfileModal)}
        />
        {showProfileModal && (
          <div className="modal w-64 h-28 bg-[#0e0821] border-[1px] border-gray-300 rounded-md absolute -bottom-32 right-0 overflow-hidden">
            <div className="h-1/2 flex items-center justify-center space-x-4 bg-[#1e1a2d]">
              <img
                src={session.user?.image!}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <span>{session?.user?.name}</span>
            </div>
            <button
              className="w-full h-1/2 hover:bg-[#3b3552] flex justify-center items-center"
              onClick={() => signOut()}
            >
              sign out
            </button>
          </div>
        )}
      </div>
    );
  }
  return (
    <>
      <button
        className="absolute right-5 bg-[#342d95] rounded-md w-28 h-10 flex justify-center items-center"
        onClick={() => signIn()}
      >
        Log In
      </button>
    </>
  );
};

export default LoginBtn;
