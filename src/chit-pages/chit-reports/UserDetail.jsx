import React from "react";
import { Link } from "react-router-dom";

export const UserDetail = () => {
  return (
    <>
      <div className="user_detail">
        <div className="row gy-4">
          <div className="col-lg-9">
            <div className="info_box">
              <div className="row gy-4">
                <div className="col-lg-2">
                  <div className="user_icon">RK</div>
                </div>
                <div className="col-lg-10">
                  <div className="row gy-4">
                    <div className="col-lg-12">
                      <h5 className="user_name">Rajesh Kumar</h5>
                      <p className="user_id">
                        <i class="bi bi-suitcase-lg-fill"></i> Customer ID : <span>CUS-001</span>
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <div className="info_detail">
                        <h6 className="title">
                          <i class="bi bi-telephone-fill"></i>Phone Number
                        </h6>
                        <p className="text">9876543210</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="info_detail">
                        <h6 className="title">
                          <i class="bi bi-person-vcard-fill"></i>Aadhar Number
                        </h6>
                        <p className="text">654898761234</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="info_detail">
                        <h6 className="title">
                          <i class="bi bi-credit-card-2-back-fill"></i>Pan Number
                        </h6>
                        <p className="text">IBI9000678</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="info_detail">
                        <h6 className="title">
                          <i class="bi bi-person-fill"></i>Nominee Name
                        </h6>
                        <p className="text">Priya Nair</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="info_detail">
                        <h6 className="title">
                          <i class="bi bi-telephone-inbound-fill"></i>Nominee Phone Number
                        </h6>
                        <p className="text">9876501234</p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="info_detail">
                        <h6 className="title">
                          <i class="bi bi-geo-alt-fill"></i>Address
                        </h6>
                        <p className="text">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="stack_list">
              <div className="row gy-3">
                <div className="col-lg-12">
                  <div className="total_investment_box">
                    <div className="d-flex justify-content-between gap-2">
                      <div className="content">
                        <h5 className="box_text">Total Investment</h5>
                        <h4 className="box_title">18,00,000</h4>
                      </div>
                      <div className="box_icon ">
                        <div className="icon plan">
                          <i class="fi fi-tr-brand-strategy"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="stack_box">
                    <div className="d-flex justify-content-between gap-2">
                      <div className="content">
                        <h5 className="box_text">Active Batches</h5>
                        <h4 className="box_title">3 Batches</h4>
                      </div>
                      <div className="box_icon ">
                        <div className="icon batch">
                          <i class="bi bi-stack"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="stack_box">
                    <div className="d-flex justify-content-between gap-2">
                      <div className="content">
                        <h5 className="box_text">Active Plans</h5>
                        <h4 className="box_title">4 Plans</h4>
                      </div>
                      <div className="box_icon ">
                        <div className="icon plan">
                          <i class="fi fi-tr-brand-strategy"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="common-table-wrapper ">
              <table className="common-table table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Batch Detail</th>
                    <th>Plan Detail</th>
                    <th>Start Date</th>
                    <th>End / Settlement Date </th>
                    <th>Status </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Batch - 01</td>
                    <td>Weekly Plan</td>
                    <td>12.12.2025</td>
                    <td>03.03.2026</td>
                    <td>
                      <span className="badge rounded-pill bg-danger bg-opacity-25 text-danger">completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Batch - 02</td>
                    <td>Weekly Plan</td>
                    <td>12.12.2025</td>
                    <td>03.03.2026</td>
                    <td>
                      <span className="badge rounded-pill bg-success bg-opacity-25 text-success">active</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Batch - 02</td>
                    <td>90 Days Plan</td>
                    <td>12.12.2025</td>
                    <td>03.03.2026</td>
                    <td>
                      <span className="badge rounded-pill bg-success bg-opacity-25 text-success">active</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Batch - 03</td>
                    <td>Weekly Plan</td>
                    <td>12.12.2025</td>
                    <td>03.03.2026</td>
                    <td>
                      <span className="badge rounded-pill bg-warning bg-opacity-25 text-warning">pending</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="refrence_detail ">
              <h6 className="refrence_title">Refrence Detail</h6>
              <div className="d-flex  gap-3 mt-3">
                <div className="icon">
                  <i class="bi bi-headset"></i>
                </div>
                <div className="content">
                  <h5 className="box_text">Suresh</h5>
                  <h4 className="box_title">Ag - 001</h4>
                </div>
              </div>
              <div className="info_detail mt-3">
                <h6 className="title">
                  <i class="bi bi-telephone-fill"></i>Phone Number
                </h6>
                <p className="text mb-0">9876543210</p>
              </div>
              <div className="mt-3">
                <Link to="/agent-staff/agent-detail" className="btn detail-btn ">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
