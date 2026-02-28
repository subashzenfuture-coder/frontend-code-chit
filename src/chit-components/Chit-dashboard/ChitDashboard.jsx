import React from "react";
import "./ChitDashboard.css";
import { ChitStack } from "../chit-stack/ChitStack";
import { ChartDashboard } from "../chit-charts/ChartDashboard";

export const ChitDashboard = () => {
  return (
    <>
      <ChitStack />
      <ChartDashboard />
      {/* <div className="billing_detail mt-4">
        <div className="billing_header">
          <div className="row gy-4 align-items-center">
            <div className="col-md-6">
              <h6 className="title">
                <i class="bi bi-plus-circle"></i> New Billing Entry
              </h6>
            </div>
            <div className="col-md-6">
              <p className="text"> Batch ID : Group B - 102</p>
            </div>
          </div>
        </div>
        <div className="billing_body">
          <div className="group-form-detail">
            <div className="row gy-4">
              <div className="col-lg-4">
                <label htmlFor="" className="form-label">
                  Plan Duration
                </label>
                <select name="" className="form-select" id="">
                  <option value="">Monthly</option>
                  <option value="">Weekly</option>
                  <option value="">90 Days</option>
                  <option value="">100 Days</option>
                </select>
              </div>
              <div className="col-lg-4">
                <label htmlFor="" className="form-label">
                  Group / Batch
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-4">
                <label htmlFor="" className="form-label">
                  Date & Time
                </label>
                <div className="d-flex gap-2">
                  <input type="date" className="form-control" />
                  <input type="time" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="customer-form-detail mt-4">
            <h4 className="subtitle">Customer Details</h4>
            <div className="mt-3">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <label htmlFor="" className="form-label">
                    Full Name
                  </label>
                  <input type="text" className="form-control" placeholder="Full Name" />
                </div>
                <div className="col-lg-3">
                  <label htmlFor="" className="form-label">
                    Aadhar Number
                  </label>
                  <input type="text" className="form-control" placeholder=" Aadhar Number" />
                </div>
                <div className="col-lg-3">
                  <label htmlFor="" className="form-label">
                    PAN Number
                  </label>
                  <input type="text" className="form-control" placeholder="PAN Number" />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="" className="form-label">
                    Address
                  </label>
                  <input type="text" className="form-control" placeholder="Complete Address" />
                </div>
                <div className="col-lg-3">
                  <label htmlFor="" className="form-label">
                    Nominee Name
                  </label>
                  <input type="text" className="form-control" placeholder="Nominee" />
                </div>
                <div className="col-lg-3">
                  <label htmlFor="" className="form-label">
                    Nominee Phone
                  </label>
                  <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
              </div>
            </div>
          </div>
          <div className="payment-form-detail mt-4">
            <div className="">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <h4 className="subtitle pb-3">Payment and Refrence</h4>
                  <div className="row gy-4 ">
                    <div className="col-lg-12">
                      <label htmlFor="" className="form-label">
                        Investment Amount
                      </label>
                      <input type="text" className="form-control" placeholder="₹0.00" />
                    </div>
                    <div className="col-lg-12">
                      <label htmlFor="" className="form-label">
                        Payment Mode
                      </label>
                      <select name="" className="form-select" id="">
                        <option value="">Cash</option>
                        <option value="">UPI</option>
                        <option value="">Cheque</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <label htmlFor="" className="form-label">
                        UTR / Ref Number (for UPI/ Cheque)
                      </label>
                      <input type="text" className="form-control" placeholder="Enter Transaction ID" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4 className="subtitle pb-3">Refrences</h4>
                  <div className="row gy-4 ">
                    <div className="col-lg-12">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                        <label class="form-check-label" htmlFor="radioDefault1">
                          Agent Refrences
                        </label>
                        <small>Jhon Doe (9876543210)</small>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                        <label class="form-check-label" htmlFor="radioDefault1">
                          Staff Refrence
                        </label>
                        <small>Staff Name</small>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                        <label class="form-check-label" htmlFor="radioDefault1">
                          Office Walk In
                        </label>
                        <small>Direct Registration</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="billing_footer">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-8">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                <label class="form-check-label" for="radioDefault1">
                  I agree to the{" "}
                  <a href="" className="common">
                    Billing Terms & Conditions
                  </a>
                </label>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex gap-2 align-items-center justify-content-end">
                <button className="btn filter-btn">Discard</button>
                <button className="btn main-btn">Create Subscription</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
    </>
  );
};
