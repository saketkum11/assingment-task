import React from "react";
import { Link } from "react-router-dom";

const NavModal = () => {
  return (
    <nav className=" absolute top-28  z-30 right-0 left-0 col-span-6 bg-black text-white p-4 rounded-2xl">
      <ul className="text-white text-left flex flex-col items-center gap-6">
        <li className=" text-lg">
          <Link to="/dashboard" className="flex items-center gap-2">
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
  );
};

export { NavModal };
