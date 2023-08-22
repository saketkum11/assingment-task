import React, { useState } from "react";
import { NavModal } from "./NavModal";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleToggle = () => {
    setToggleNav((flag) => !flag);
  };
  return (
    <div className="relative flex justify-between items-center  bg-black text-white py-4 px-4 rounded-xl">
      <div>
        <span className="text-2xl font-bold">Board.</span>
      </div>

      <button
        onClick={() => {
          handleToggle();
        }}
        className="w-8 h-8 font-bold"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M20 7L4 7"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
            ></path>
            <path
              d="M20 12L4 12"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
            ></path>
            <path
              d="M20 17L4 17"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
            ></path>
          </g>
        </svg>
      </button>
      {toggleNav && <NavModal />}
    </div>
  );
};

export { Nav };
