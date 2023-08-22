import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className=" bg-black fixed top-0 bottom-8 w-1/5 md:flex flex-col justify-between items-center rounded-2xl  gap-6 mt-6 p-10">
      <div className="flex flex-col">
        <h2 className="text-white text-left text-4xl" to="/">
          Board.
        </h2>
        <nav className="mt-8">
          <ul className="text-white text-left flex flex-col gap-6">
            <li className=" text-lg">
              <Link className="flex items-center gap-2">
                <i className="fa-solid fa-chart-pie"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className=" text-lg">
              <Link className="flex items-center gap-2">
                <i className="fa-solid fa-tags"></i>
                <span>Transactions</span>
              </Link>
            </li>
            <li className=" text-lg">
              <Link className="flex items-center gap-2">
                <i className="fa-regular fa-calendar"></i>
                <span>Schedules</span>
              </Link>
            </li>
            <li className=" text-lg">
              <Link className="flex items-center gap-2">
                <i className="fa-regular fa-circle-user"></i>
                <span>Users</span>
              </Link>
            </li>
            <li className=" text-lg">
              <Link className="flex items-center gap-2">
                <i className="fa-solid fa-gear"></i>
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-white mb-6">
        <ul className="text-left flex flex-col gap-4">
          <li className="text-lg">
            <Link className="flex items-center gap-2">
              <span>Help</span>
            </Link>
          </li>
          <li className="text-lg">
            <Link className="flex items-center gap-2">
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { SideNav };
