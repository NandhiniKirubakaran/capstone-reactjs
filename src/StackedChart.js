import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" 
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};

const labels = ["August", "September", "October", "November", "December", "January", "Febraruy"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Task Performance",
      data: [30, 150, 50, 100, 160, 45, 80],
      borderColor: "hsl(255 95% 68%)",
      backgroundColor: "hsl(255 95% 68% / 50%)",
      lineTension: 0.2
    },
    {
      fill: true,
      label: "Overall performance",
      data: [150, 50, 100, 160, 45, 80, 20],
      borderColor: "hsl(197 100% 50%)",
      backgroundColor: "hsl(197deg 100% 50% / 50%) ",
      lineTension: 0.2
    }
  ]
};

export function StackedChart() {
  return <Line options={options} data={data} />;
}
