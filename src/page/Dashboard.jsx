import React from "react";
import {
  Header,
  RevenueCards,
  Schedules,
  SideNav,
  TopProduct,
} from "../server";
import { ChartCards } from "../Component/ChartCards";
const Dashboard = () => {
  return (
    <>
      <main className="grid grid-cols-10 gap-10 p-8">
        <section className="col-span-2 bg-black rounded-2xl  ">
          <SideNav />
        </section>
        <section className="col-span-8 ">
          <aside className="grid grid-cols-8 gap-6">
            <Header />
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
