import React, { useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import { SignOut } from "./SignOut";

const Header = () => {
  const { authData } = useAuth();
  const [signOutModal, setSignOutModal] = useState(false);
  const handleModal = () => {
    setSignOutModal((flag) => !flag);
  };
  return (
    <header className="col-span-8 flex justify-between items-center mt-4">
      <div>
        <span className="text-2xl font-extrabold">Dashboard</span>
      </div>
      <nav className="">
        <ul className="flex items-center relative gap-4">
          <li>
            <input
              type="text"
              className="py-2 px-4 rounded-2xl"
              placeholder="Search..."
            />
          </li>
          <li>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 19.25C15 20.0456 14.6839 20.8087 14.1213 21.3713C13.5587 21.9339 12.7956 22.25 12 22.25C11.2044 22.25 10.4413 21.9339 9.87869 21.3713C9.31608 20.8087 9 20.0456 9 19.25"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.58096 18.25C5.09151 18.1461 4.65878 17.8626 4.36813 17.4553C4.07748 17.048 3.95005 16.5466 4.01098 16.05L5.01098 7.93998C5.2663 6.27263 6.11508 4.75352 7.40121 3.66215C8.68734 2.57077 10.3243 1.98054 12.011 1.99998V1.99998C13.6977 1.98054 15.3346 2.57077 16.6207 3.66215C17.9069 4.75352 18.7557 6.27263 19.011 7.93998L20.011 16.05C20.0723 16.5452 19.9462 17.0454 19.6576 17.4525C19.369 17.8595 18.9386 18.144 18.451 18.25C14.2186 19.2445 9.81332 19.2445 5.58096 18.25V18.25Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li
            onClick={() => {
              handleModal();
            }}
            className=""
          >
            <img
              src={authData?.photoURL}
              className="w-8 h-8 rounded-full"
              alt=""
            />
          </li>
        </ul>
        {signOutModal && <SignOut />}
      </nav>
    </header>
  );
};

export { Header };
