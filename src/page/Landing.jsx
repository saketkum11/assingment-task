import React from "react";
import { UserCredential } from "../Component/UserCredential";

const Landing = () => {
  return (
    <main className="">
      <div className="grid grid-cols-10 justify-center  ">
        <section className=" col-span-3  bg-black  ">
          <div className="min-h-screen flex justify-center items-center">
            <p className="text-white text-7xl font-bold my-auto">Board.</p>
          </div>
        </section>
        <section className="col-span-7  bg-slate-200 ">
          <UserCredential />
        </section>
      </div>
    </main>
  );
};

export { Landing };
