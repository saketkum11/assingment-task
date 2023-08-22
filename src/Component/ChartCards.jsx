import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useChart } from "../Context/ChartProvider";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const ChartCards = () => {
  const { chartData } = useChart();
  const company = chartData[0];

  const labels = ["volume_1day_usd", "volume_1hrs_usd", "volume_1mth_usd"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [
          company?.volume_1day_usd ?? 55,
          company?.volume_1hrs_usd ?? 66,
          company?.volume_1mth_usd ?? 88,
        ],
        backgroundColor: [
          "rgba(27, 99, 132, 0.5) ",
          "rgba(125, 99, 132, 0.5) ",
          "rgba(125, 99, 132, 0.5)",
        ],
      },
    ],
  };
  return (
    <section className="sm:col-span-6 lg:col-span-8 bg-white mt-4 rounded-3xl h-80 ">
      <Bar data={data} className="m-auto h-80" />
    </section>
  );
};

export { ChartCards };
