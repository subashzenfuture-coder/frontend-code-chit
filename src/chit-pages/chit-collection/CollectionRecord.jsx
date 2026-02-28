import React, { useState } from "react";

export const CollectionRecord = () => {
  const [paymentMode, setPaymentMode] = useState("cash");
  return (
    <>
      <div>
        <div className="text-end">
          <button className="btn main-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            + Add Payment
          </button>
        </div>
        <div className="common-table-wrapper mt-4">
          <table className="common-table table-striped">
            <thead>
              <tr>
                <th>Days</th>
                <th>Date</th>
                <th>Time</th>
                <th>UPI</th>
                <th>Cash</th>
                <th>Cheque</th>
                <th>Payment Amount</th>
                <th>Remarks</th>
                <th>Collection Agent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="time-cell">1</td>
                <td className="time-cell">01.02.2026</td>
                <td className="time-cell">12.01</td>
                <td className="time-cell">2000</td>
                <td className="time-cell">3000</td>
                <td className="time-cell">-</td>
                <td className="time-cell text-success">5000</td>
                <td className="time-cell text-success">
                  <i class="bi bi-check-circle-fill"></i>
                </td>
                <td className="time-cell ">Sathish</td>
              </tr>
              <tr>
                <td className="time-cell">2</td>
                <td className="time-cell">07.02.2026</td>
                <td className="time-cell">10.21</td>
                <td className="time-cell">4000</td>
                <td className="time-cell">1000</td>
                <td className="time-cell">-</td>
                <td className="time-cell text-success">5000</td>
                <td className="time-cell text-success">
                  <i class="bi bi-check-circle-fill"></i>
                </td>
                <td className="time-cell ">Arun Kumar</td>
              </tr>
              <tr>
                <td className="time-cell">3</td>
                <td className="time-cell">14.02.2026</td>
                <td className="time-cell">11.38</td>
                <td className="time-cell">-</td>
                <td className="time-cell">-</td>
                <td className="time-cell">-</td>
                <td className="time-cell text-success">-</td>
                <td className="time-cell text-danger">
                  <i class="bi bi-x-circle-fill"></i>
                </td>
                <td className="time-cell ">Vignesh</td>
              </tr>
              <tr>
                <td className="time-cell">4</td>
                <td className="time-cell">21.02.2026</td>
                <td className="time-cell">08.19</td>
                <td className="time-cell">5000</td>
                <td className="time-cell">5000</td>
                <td className="time-cell">-</td>
                <td className="time-cell text-success">10000</td>
                <td className="time-cell text-warning">
                  <i class="bi bi-exclamation-circle-fill"></i>
                </td>
                <td className="time-cell ">Karthick</td>
              </tr>
              <tr>
                <td className="time-cell">5</td>
                <td className="time-cell">28.02.2026</td>
                <td className="time-cell">10.46</td>
                <td className="time-cell">4500</td>
                <td className="time-cell">500</td>
                <td className="time-cell">-</td>
                <td className="time-cell text-success">5000</td>
                <td className="time-cell text-success">
                  <i class="bi bi-check-circle-fill"></i>
                </td>
                <td className="time-cell ">Ganesh</td>
              </tr>
            </tbody>
          </table>
        </div>
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
                Add Payment
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="payment-form-detail ">
                <div className="">
                  <div className="row gy-4">
                    <div className="col-lg-6">
                      <div className="input-field">
                        <label htmlFor="" className="form-label">
                          Collection Agent Name
                        </label>
                        <input type="text" className="form-control" placeholder="Agent Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-field">
                        <label htmlFor="" className="form-label">
                          Collection Agent Number
                        </label>
                        <input type="text" className="form-control" placeholder="Agent Phone Number" />
                      </div>
                    </div>
                    {/* <div className="col-lg-12 ">
                     <div className="row">
                      <div className="col-6">
                         <h4 className="subtitle pb-3">Active Chits</h4>
                      <div className="input-field">
                        <label htmlFor="" className="form-label">
                          Chit ID
                        </label>
                        <select name="" id="" className="form-control">
                          <option value="chit-001">Chit-001</option>
                          <option value="chit-002">Chit-002</option>
                        </select>
                      </div>
                      </div>
                     </div>
                    </div> */}
                    <div className="col-lg-6 ">
                      <h4 className="subtitle pb-3">Payment and Refrence</h4>
                      <div className="row gy-4 ">
                        <div className="col-lg-12">
                          {/* Payment Mode (Radio Card Style) */}
                          <div className="payment-mode">
                            <div className="row">
                              <div className="col-4">
                                <label className={`radio-card ${paymentMode === "cash" ? "active" : ""}`}>
                                  <input
                                    type="radio"
                                    name="payment"
                                    value="cash"
                                    checked={paymentMode === "cash"}
                                    onChange={() => setPaymentMode("cash")}
                                  />
                                  <div className="icon">
                                    <i class="bi bi-cash-coin"></i>
                                  </div>
                                  <span>CASH</span>
                                </label>
                              </div>

                              <div className="col-4">
                                <label className={`radio-card ${paymentMode === "upi" ? "active" : ""}`}>
                                  <input
                                    type="radio"
                                    name="payment"
                                    value="upi"
                                    checked={paymentMode === "upi"}
                                    onChange={() => setPaymentMode("upi")}
                                  />
                                  <div className="icon">
                                    <i class="bi bi-qr-code-scan"></i>
                                  </div>
                                  <span>UPI / QR</span>
                                </label>
                              </div>

                              <div className="col-4">
                                <label className={`radio-card ${paymentMode === "card" ? "active" : ""}`}>
                                  <input
                                    type="radio"
                                    name="payment"
                                    value="card"
                                    checked={paymentMode === "card"}
                                    onChange={() => setPaymentMode("card")}
                                  />
                                  <div className="icon">
                                    <i class="bi bi-card-heading"></i>
                                  </div>
                                  <span>CHEQUE</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <label htmlFor="" className="form-label">
                            Investment Amount
                          </label>
                          <input type="text" className="form-control" placeholder="₹0.00" />
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
                      <h4 className="subtitle pb-3">Payment Details</h4>

                      <div className="">
                        <div className="row gy-4">
                          <div className="col-lg-12">
                            <label htmlFor="" className="form-label">
                              Payment Method
                            </label>
                            <select name="" className="form-control" id="">
                              <option value="">On Payment</option>
                              <option value="">Late Payment</option>
                              <option value="">Not Payment</option>
                            </select>
                          </div>
                          <div className="col-lg-12">
                            <label htmlFor="" className="form-label">
                              Payment Date
                            </label>
                            <input type="date" className="form-control" placeholder="Name" />
                          </div>
                          <div className="col-lg-12">
                            <label htmlFor="" className="form-label">
                              Payment Time
                            </label>
                            <input type="time" className="form-control" placeholder="Phone Number" />
                          </div>
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
    </>
  );
};
