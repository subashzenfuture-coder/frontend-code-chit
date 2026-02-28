import React from "react";
import Chart from "react-apexcharts";

const CollectionDistribution = () => {
  const options = {
    chart: {
      type: "donut"
    },
    labels: ["Monthly A", "Weekly Elite", "90 Day Plan" , "100 Day Plan"],
    colors: ["#2563eb", "#10b981", "#8b5cf6" , "#0088c9"],
    legend: {
      position: "bottom"
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%"
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: "Collection Distribution",
      style: {
        fontSize: "16px",
        fontWeight: "500",
        color : "#000"
      }
    }
  };

  const series = [38, 30, 20 ,12 ];

  return <Chart options={options} series={series} type="donut" height={350} />;
};

export default CollectionDistribution;
