import React from "react";
import { RevenueCards, Schedules, SideNav, TopProduct } from "../server";
import { ChartCards } from "../Component/ChartCards";
const Dashboard = () => {
  return (
    <>
      <main className="grid grid-cols-10 gap-8 p-8">
        <section className="col-span-2 bg-black rounded-2xl  ">
          <SideNav />
        </section>
        <section className="col-span-8">
          <aside className="grid grid-cols-8 gap-10">
            <div className="col-span-7">
              <span>News</span>
            </div>
            <RevenueCards />
            <ChartCards />
            <TopProduct />
            <Schedules />
          </aside>
        </section>
      </main>
    </>
  );
};

export { Dashboard };
