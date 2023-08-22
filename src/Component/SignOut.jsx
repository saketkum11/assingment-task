import React from "react";
import { useAuth } from "../Context/AuthProvider";

const SignOut = () => {
  const { signOutLog, authData } = useAuth();
  const handleSignout = () => {
    signOutLog();
  };
  return (
    <div className="max-w-sm absolute z-20 top-28 right-28 sm:top-24 sm:right-25 flex flex-col gap-2 bg-white p-8">
      <span>{authData?.displayName}</span>
      <span>{authData?.email}</span>
      <button
        onClick={() => handleSignout()}
        className="bg-black text-white py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export { SignOut };
