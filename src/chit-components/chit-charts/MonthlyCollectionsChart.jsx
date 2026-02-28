import React from "react";
import Chart from "react-apexcharts";

const MonthlyCollectionsChart = () => {
  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "40%",
      },
    },
    colors: ["#10b981", "#ddd"],
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yaxis: {
      labels: {
        formatter: (val) => `₹${val}k`,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    grid: {
      borderColor: "#f1f5f9",
    },
    title: {
      text: "Monthly Collections vs Targets",
      style: {
        fontSize: "16px",
        fontWeight: "500",
        color : "#000"
      },
    },
  };

  const series = [
    {
      name: "Collections",
      data: [820, 900, 1050, 1120, 1250, 1180],
    },
    {
      name: "Target",
      data: [880, 880, 1000, 1100, 1200, 1200],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default MonthlyCollectionsChart;
