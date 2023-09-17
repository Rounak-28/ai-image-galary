"use client";

import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginBtn = () => {
  const { data: session } = useSession();

  const [showProfileModal, setShowProfileModal] = useState(false);

  //   console.log(session);

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
          <div className="modal w-56 h-28 bg-red-700 absolute -bottom-32 right-0"></div>
        )}
        {/* <span>{session?.user?.name}</span> */}
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
