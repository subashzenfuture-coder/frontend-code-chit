import { useState } from "react";
import { AgentStaffTable } from "./table/AgentStaffTable";

export const AgentStaffList = () => {
  const [formInputs, setFormInputs] = useState({
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
    <div className="agent_staff">
      <div className="filter-wrapper d-flex gap-2 align-items-center mb-3">
        <div className="filter-header">
          <i class="bi bi-funnel-fill"></i>&nbsp; Filters :
        </div>
        <div className="search-item">
          <div class="search-box ">
            <input class="search-input" placeholder="Search By Name or ID..." type="text" />
            <i class="bi bi-search search-icon"></i>
          </div>
        </div>
        <div className="flex-fill">
          <select name="" id="" className="form-select">
            <option value="">Agent</option>
            <option value="">Staff</option>
          </select>
        </div>
        <div className="flex-fill">
          <div class="d-flex align-items-center justify-content-md-end gap-2  filter-calender flex-wrap ">
            <div class="d-flex align-items-center gap-2">
              <label>
                From <span class="d-none d-md-inline-block">Date</span> :
              </label>
              <input class="form-control" type="date" value="" />
            </div>
            <div class="d-flex align-items-center gap-2">
              <label>
                To <span class="d-none d-md-inline-block">Date</span> :
              </label>
              <input class="form-control" type="date" value="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" text-end">
        <button type="button" className="btn main-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <i className="bi bi-person-plus"></i>&nbsp;Add Agent / Staff
        </button>
      </div>
      <AgentStaffTable />

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
                Agent / Staff Add
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="billing_body">
                  <div className="agent-detail m">
                    <div className="">
                      <div className="row gy-4">
                        <div className="col-lg-12">
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
                        <input class="form-check-input" type="radio" name="terms_conditions" value={formInputs.terms_conditions} id="radioDefault1" />
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
                          Add
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
  );
};
