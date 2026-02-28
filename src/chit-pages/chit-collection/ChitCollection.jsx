import React from "react";
import "./ChitCollection.css";
import { BatchTable } from "./table/BatchTable";

export const ChitCollection = () => {
  return (
    <div className="chit_batch">
      <h5 className="batch_title">Chit Batches</h5>

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
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Create Batch
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="plan-item-list">
                <div className="plan-item">
                  <input type="radio" class="btn-check" name="options" id="btn-check" autocomplete="off" checked />
                  <label class="btn plan-btn" for="btn-check">
                    Weekly
                  </label>
                </div>
                <div className="plan-item">
                  <input type="radio" class="btn-check" name="options" id="btn-check" autocomplete="off" />
                  <label class="btn plan-btn" for="btn-check">
                    Monthly
                  </label>
                </div>
                <div className="plan-item">
                  <input type="radio" class="btn-check" name="options" id="btn-check" autocomplete="off" />
                  <label class="btn plan-btn" for="btn-check">
                    90 Days
                  </label>
                </div>
                <div className="plan-item">
                  <input type="radio" class="btn-check" name="options" id="btn-check" autocomplete="off" />
                  <label class="btn plan-btn" for="btn-check">
                    100 Days
                  </label>
                </div>
              </div>
              <div className="customer-form-detail mt-4">
                <h4 className="subtitle">Batch Details</h4>
                <div className="mt-3">
                  <div className="row gy-4">
                    <div className="col-lg-6">
                      <label htmlFor="" className="form-label">
                        Batch Name
                      </label>
                      <input type="text" className="form-control" placeholder="Batch Name" />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="" className="form-label">
                        Batch ID
                      </label>
                      <input type="text" className="form-control" placeholder="Batch ID" readOnly />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="" className="form-label">
                        Total Batch Value
                      </label>
                      <input type="text" className="form-control" placeholder="Pool Amount" />
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
  );
};
