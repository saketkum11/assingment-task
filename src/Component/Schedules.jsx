import React from "react";

const Schedules = () => {
  return (
    <div className="col-span-4 bg-white p-10 rounded-2xl">
      <div className="flex justify-between items-center">
        <span className="font-bold text-xl">Today Schedules</span>
        <span>See all </span>
      </div>
      <ul className="flex flex-col gap-4 mt-5">
        <li className=" border-l-4 border-green-400">
          <div className="flex flex-col items-start ml-2">
            <span className=" text-sm font-bold">
              Meeting with suppliers from Kuta Bali
            </span>
            <span>14.00-15.00</span>
            <p>at Sunset Road, Kuta, Bali</p>
          </div>
        </li>
        <li className=" border-l-4 border-blue-400">
          <div className="flex flex-col items-start ml-2">
            <span className=" text-sm font-bold">
              Check operation at Giga Factory 1
            </span>
            <span>18.00-20.00</span>
            <p>at Central Jakarta</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export { Schedules };
