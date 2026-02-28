import React, { useState, useEffect } from "react";
import { MembersTable } from "./table/MembersTable";

export const ChitGroupDetail = () => {
  const [search, setSearch] = useState("");

  const [formInputs, setFormInputs] = useState({
    plan_duration: "",
    plan_date: "",
    plan_time: "",
    no_of_slots: "",
    total_value: "",
    customer_name: "",
    phone_number: "",
    place: "",
    aadhar_number: "",
    pan_number: "",
    nominee_name: "",
    nominee_phone: "",
    address: "",
    booking_refrence: "",
    refrence_name: "",
    refrence_phone_number: "",
    terms_conditions: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };



  return (
    <>
      <div className="single_batch_detail">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-3">
              <h5 className="mb-0">Monthly-Batch</h5>
              <span className="badge bg-primary-subtle text-primary-emphasis">Monthly</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-3">
              <div className="flex-grow-1">
                <div className="search-box ">
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
              <div className=" text-end">
                <button type="button" className="btn main-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <i className="bi bi-person-plus"></i>&nbsp;Add Customer
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <MembersTable search={search} />
        </div>

        <div
          className="modal  form-modal fade"
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
                <form action="">
                  <div className="billing_body">
                    <div className="group-form-detail">
                      <div className="row gy-4">
                        <div className="col-lg-6">
                          <label htmlFor="" className="form-label">
                            Plan Duration
                          </label>
                          <input
                            type="text"
                            onChange={handleInputChange}
                            value={formInputs.plan_duration}
                            className="form-control"
                            name="plan_duration"
                            placeholder="Monthly"
                            readOnly
                          />
                        </div>

                        <div className="col-lg-6">
                          <label htmlFor="" className="form-label">
                            Date & Time
                          </label>
                          <div className="d-flex gap-2">
                            <input type="date" className="form-control" onChange={handleInputChange} value={formInputs.plan_date} name="plan_date" />
                            <input type="time" className="form-control" onChange={handleInputChange} value={formInputs.plan_time} name="plan_time" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="" className="form-label">
                            No Of Slots
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={formInputs.no_of_slots}
                            onChange={handleInputChange}
                            name="no_of_slots"
                            placeholder="Ex : 1, 2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="customer-form-detail mt-4">
                      <h4 className="subtitle">Customer Details</h4>
                      <div className="mt-3">
                        <div className="row gy-4">
                          <div className="col-lg-4">
                            <label htmlFor="" className="form-label">
                              Customer Name
                            </label>
                            <input
                              type="text"
                              name="customer_name"
                              value={formInputs.customer_name}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Customer Name"
                            />
                          </div>
                          <div className="col-lg-4">
                            <label htmlFor="" className="form-label">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              name="phone_number"
                              value={formInputs.phone_number}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Phone Number"
                            />
                          </div>
                          <div className="col-lg-4">
                            <label htmlFor="" className="form-label">
                              Place
                            </label>
                            <input
                              type="text"
                              name="place"
                              value={formInputs.place}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Place"
                            />
                          </div>
                          <div className="col-lg-4">
                            <label htmlFor="" className="form-label">
                              Aadhar Number
                            </label>
                            <input
                              type="text"
                              name="aadhar_number"
                              value={formInputs.aadhar_number}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder=" Aadhar Number"
                            />
                          </div>
                          <div className="col-lg-4">
                            <label htmlFor="" className="form-label">
                              PAN Number
                            </label>
                            <input
                              type="text"
                              value={formInputs.pan_number}
                              name="pan_number"
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="PAN Number"
                            />
                          </div>

                          <div className="col-lg-4">
                            <label htmlFor="" className="form-label">
                              Nominee Name
                            </label>
                            <input
                              type="text"
                              name="nominee_name"
                              value={formInputs.nominee_name}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Nominee"
                            />
                          </div>
                          <div className="col-lg-4">
                            <label htmlFor="" className="form-label">
                              Nominee Phone
                            </label>
                            <input
                              type="text"
                              name="nominee_phone"
                              value={formInputs.nominee_phone}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Nominee Phone"
                            />
                          </div>
                          <div className="col-lg-8">
                            <label htmlFor="" className="form-label">
                              Address
                            </label>
                            <textarea
                              name="address"
                              id=""
                              value={formInputs.address}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Address"
                              rows={3}></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="payment-form-detail mt-4">
                      <div className="">
                        <div className="row gy-4">
                          <div className="col-lg-12">
                            <h4 className="subtitle pb-3">Booking Refrence Information</h4>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                onChange={handleInputChange}
                                name="booking_refrence"
                                id="inlineRadio1"
                                value={formInputs.booking_refrence}
                              />
                              <label class="form-check-label" for="inlineRadio1">
                                Agent
                              </label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                onChange={handleInputChange}
                                name="booking_refrence"
                                id="inlineRadio2"
                                value={formInputs.booking_refrence}
                              />
                              <label class="form-check-label" for="inlineRadio2">
                                Staff
                              </label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                onChange={handleInputChange}
                                name="booking_refrence"
                                id="inlineRadio3"
                                value={formInputs.booking_refrence}
                              />
                              <label class="form-check-label" for="inlineRadio3">
                                Office Walk In
                              </label>
                            </div>
                            <div className="mt-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <label htmlFor="" className="form-label">
                                    Refrence Name
                                  </label>
                                  <input
                                    type="text"
                                    name="refrence_name"
                                    value={formInputs.refrence_name}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder="Name"
                                  />
                                </div>
                                <div className="col-lg-6">
                                  <label htmlFor="" className="form-label">
                                    Phone Number
                                  </label>
                                  <input
                                    type="text"
                                    onChange={handleInputChange}
                                    value={formInputs.refrence_phone_number}
                                    name="refrence_phone_number"
                                    className="form-control"
                                    placeholder="Phone Number"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="billing_footer mt-4 border-top pt-4">
                    <div className="row gy-4 align-items-center">
                      <div className="col-lg-8">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="terms_conditions"
                            value={formInputs.terms_conditions}
                            id="radioDefault1"
                          />
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
                          <button type="submit" className="btn main-btn">
                            Create Subscription
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
