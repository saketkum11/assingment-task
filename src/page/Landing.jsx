import React from "react";
import { UserCredential } from "../Component/UserCredential";

const Landing = () => {
  return (
    <main className="">
      <div className="grid grid-cols-10 justify-center  min-h-screen">
        <section className=" col-span-3  bg-black  ">
          <div className="">
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
