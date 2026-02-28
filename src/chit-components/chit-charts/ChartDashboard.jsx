import React from "react";

import MonthlyCollectionsChart from "./MonthlyCollectionsChart";
import CollectionDistribution from "./CollectionDistribution";
import "./ChartDashboard.css";

export const ChartDashboard = () => {
  return (
    <>
      <div className="mt-3">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="chart-box">
              <CollectionDistribution />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="chart-box">
              <MonthlyCollectionsChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
