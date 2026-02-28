import React from "react";
import "./AgentStaff.css";

export const AgentDetail = () => {
  return (
    <>
      <div class="agent-card d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <div class="avatar-wrapper">SK</div>

          <div>
            <h5 class="user_name ">Suresh Kumar</h5>
            <p class="user_id">
              Agent ID: <span>DT-8829</span>
            </p>
            <div class="text d-flex gap-3 flex-wrap">
              <span>
                <i class="bi bi-telephone"></i> +91 98765 43210
              </span>
             
            </div>
          </div>
        </div>
      </div>
            <div className="d-flex gap-2 flex-wrap justify-content-md-end  mt-3 ">
        <button className="excel-btn">
          <i class="fi fi-tr-file-excel"></i>Export Excel
        </button>
        <button className="pdf-btn">
          <i class="fi fi-tr-file-pdf"></i>Pdf
        </button>
        <button className="print-btn">
          <i class="fi fi-tr-print"></i>Print
        </button>
      </div>
      <div className="common-table-wrapper mt-4">
        <table className="common-table table-striped">
          <thead className="table-dark">
            <tr>
              <th>Customer Detail</th>
              <th>Plan Detail</th>
              <th>Total Investment</th>
              <th>Status </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                Rajesh Kumar M <small className="w-100 d-block" style={{color : "var(--main-color)"}}>(CH-2023-001)</small>
              </td>
              <td>Weekly Plan</td>
              <td className="text-success">₹ 500000</td>
              <td>
                <span className="badge rounded-pill bg-danger bg-opacity-25 text-danger">completed</span>
              </td>
            </tr>
            <tr>
              <td>
                Karthick P <small className="w-100 d-block" style={{color : "var(--main-color)"}}>(CH-2023-015)</small>
              </td>
              <td>Weekly Plan</td>
              <td className="text-success">₹ 120000</td>
              <td>
                <span className="badge rounded-pill bg-success bg-opacity-25 text-success">active</span>
              </td>
            </tr>
            <tr>
              <td>
                Rahul Sharma <small className="w-100 d-block" style={{color : "var(--main-color)"}}>(CH-2023-041)</small>
              </td>
              <td>90 Days Plan</td>
              <td className="text-success">₹ 800000</td>
              <td>
                <span className="badge rounded-pill bg-success bg-opacity-25 text-success">active</span>
              </td>
            </tr>
            <tr>
              <td>
                Suresh Kumar R <small className="w-100 d-block" style={{color : "var(--main-color)"}}>(CH-2023-042)</small>
              </td>
              <td>100 Days Plan</td>
              <td className="text-success">₹ 2,20000</td>
              <td>
                <span className="badge rounded-pill bg-warning bg-opacity-25 text-warning">pending</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
