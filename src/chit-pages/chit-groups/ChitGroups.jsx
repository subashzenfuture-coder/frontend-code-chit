import React, { useState } from "react";
import "./ChitGroups.css";
import { BatchTable } from "./table/BatchTable";
import { Outlet } from "react-router-dom";

const tabs = [
  { id: "weekly", label: "Weekly", desc: "7 Days Cycle", icon: "bi bi-calendar-day" },
  { id: "monthly", label: "Monthly", desc: "30 Days Cycle", icon: "bi bi-calendar2-month" },
  { id: "90 days", label: "90 Days", desc: "Quarterly", icon: "bi bi-clock-history" },
  { id: "100 days", label: "100 Days", desc: "Long Term", icon: "bi bi-hourglass" },
];

export const ChitGroups = () => {
  const [activeTab, setActiveTab] = useState("weekly");
  return (
    <>
      <div className="chit_batch">
        <div className="d-flex align-items-center gap-3 mt-4">
          <h5 className="batch_title mb-0">Batch Plans</h5>
        </div>
        <div className="mt-4">
          <BatchTable />
        </div>

        <div
          className="modal form-modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title  fs-5" id="staticBackdropLabel">
                  Batch 01 (<small>DT-BTH-01</small>)
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* Tabs */}
                <div className="plan_tabs flex-fill">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={` ${activeTab === tab.id ? "tab_items active" : "tab_items"}`}>
                      <i className={tab.icon}></i> &nbsp;{tab.label} <small>({tab.desc})</small>
                    </button>
                  ))}
                </div>
                <div className="customer-form-detail mt-4">
                  <h4 className="subtitle">Group Details</h4>
                  <div className="mt-3">
                    <div className="row gy-4">
                      <div className="col-lg-6">
                        <label htmlFor="" className="form-label">
                          Group Name
                        </label>
                        <input type="text" className="form-control" placeholder="Group Name" />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="" className="form-label">
                          Group ID
                        </label>
                        <input type="text" className="form-control" placeholder="Group ID" readOnly />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="" className="form-label">
                          Total Group Value
                        </label>
                        <input type="text" className="form-control" placeholder="Total Amount" />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="" className="form-label">
                          Installment Amount
                        </label>
                        <input type="text" className="form-control" placeholder="Installment Amount" />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="" className="form-label">
                          Member Capacity
                        </label>
                        <input type="text" className="form-control" placeholder="Total Members" />
                      </div>

                      <div className="col-lg-6">
                        <label htmlFor="" className="form-label">
                          Batch Start Date / Time
                        </label>
                        <div className="row gy-4">
                          <div className="col-md-6">
                            <input type="date" className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <input type="time" className="form-control" />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <label htmlFor="" className="form-label">
                          Batch default Closing Date / Time
                        </label>
                        <div className="row gy-4">
                          <div className="col-md-6">
                            <input type="date" className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <input type="time" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-end">
                  <button type="button" className="btn filter-btn" data-bs-dismiss="modal">
                    Discard
                  </button>
                  <button type="button" className="btn main-btn ms-2">
                    Save Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
