import React from "react";
import {
  Header,
  Nav,
  RevenueCards,
  Schedules,
  SideNav,
  TopProduct,
} from "../server";
import { ChartCards } from "../Component/ChartCards";
const Dashboard = () => {
  return (
    <>
      <main className=" p-8 gap-10 sm:grid sm:grid-cols-6 lg:grid-cols-10 ">
        <section className="hidden  lg:block lg:col-span-2 ">
          <SideNav />
        </section>
        <section className="sm:col-span-6 lg:hidden">
          <header>
            <Nav />
          </header>
        </section>
        <aside className="flex flex-col gap-4 w-full l sm:grid sm:col-span-6 sm:grid-cols-6 md:col-span-6 lg:col-span-8 lg:ml-8">
          <Header />
          <RevenueCards />
          <ChartCards />
          <section className="flex flex-col gap-4 sm:grid sm:grid-cols-6 lg:grid-cols-8 sm:col-span-6 sm:gap-4 md:col-span-6 lg:col-span-8">
            <TopProduct />
            <Schedules />
          </section>
        </aside>
      </main>
    </>
  );
};

export { Dashboard };
