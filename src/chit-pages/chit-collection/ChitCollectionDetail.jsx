import React from "react";
import { MembersTable } from "./table/MembersTable";

export const ChitCollectionDetail = () => {
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
            <div className="d-flex align-items-center justify-content-end">
              <div className="">
                <div className="search-box ">
                  <input type="text" className="search-input" placeholder="Search By Name or ID..." />
                  <i className="bi bi-search search-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="d-flex justify-content-end align-items-center gap-3">
            <label htmlFor="" className="form-label fs-6">
              Intrest Rate
            </label>
            <input type="text" placeholder="1%" className="form-control" style={{ width: "100px", fontSize: "14px" }} />
          </div>
          <MembersTable />
        </div>
      </div>
    </>
  );
};
