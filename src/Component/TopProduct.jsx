import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useChart } from "../Context/ChartProvider";
ChartJS.register(ArcElement, Tooltip, Legend);
const TopProduct = () => {
  const { getCryptoCompanyData, cryptoComponayData } = useChart();
  const company = cryptoComponayData[0];

  const data = {
    labels: ["1hrs_usd ", "1day_usd", "1mnth_usd"],
    datasets: [
      {
        data: [
          company?.volume_1day_usd ?? 15,
          company?.volume_1hrs_usd ?? 66,
          company?.volume_1mth_usd ?? 88,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleData = ({ id }) => {
    getCryptoCompanyData({ id });
  };
  return (
    <section className="sm:col-span-6 md:col-span-3 lg:col-span-4 bg-white p-10 rounded-2xl">
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">Top CryptoCurrency Company</span>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="flex flex-1 justify-center w-5">
          <Doughnut data={data} />
        </div>
        <div className="flex-1 flex flex-col  gap-4">
          <button
            onClick={() => {
              handleData({ id: "BINANCE" });
            }}
            className=" flex  gap-4"
          >
            <div className="w-4 h-4 flex items-start bg-red-500 rounded-full mt-1"></div>
            <button className="flex flex-col justify-start ">
              <span className="text-sm font-bold">Binance </span>
            </button>
          </button>
          <button
            onClick={() => {
              handleData({ id: "COINBASE" });
            }}
            className=" flex  gap-4"
          >
            <div className="w-4 h-4 flex items-start bg-green-500 rounded-full mt-1"></div>
            <div className="flex flex-col justify-start ">
              <span className="text-sm font-bold">Coin Base</span>
            </div>
          </button>
          <button
            onClick={() => {
              handleData({ id: "BITSTAMP" });
            }}
            className=" flex  gap-4"
          >
            <div className="w-4 h-4 flex items-start bg-yellow-500 rounded-full mt-1"></div>
            <div className="flex flex-col justify-start ">
              <span className="text-sm font-bold">Bitstamp Ltd.</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export { TopProduct };
