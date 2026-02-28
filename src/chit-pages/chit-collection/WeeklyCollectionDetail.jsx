import React, { useState } from "react";
import { WeeklyMembersTable } from "./table/WeeklyMembersTable";

export const WeeklyCollectionDetail = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="single_batch_detail">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-3">
              <h5 className="mb-0">Monthly-Batch-01</h5>
              <span className="badge bg-primary-subtle text-primary-emphasis">Monthly</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-3 justify-content-end">
              <div className="flex-fill ">
                <div className="search-box ms-auto">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                    placeholder="Search By Name or ID..."
                  />
                  <i className="bi bi-search search-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <WeeklyMembersTable search={search} />
        </div>
      </div>
    </>
  );
};
