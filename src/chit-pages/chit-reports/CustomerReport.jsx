import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./report.css";

const customers = [
  {
    customerId: "CUST-001",
    customerName: "Rajesh Kumar",
    noOfBatch: 3,
    activeChits: 2,
    totalInvestment: 150000,
    totalEarned: 185000,
    joiningDate: "15 Jan 2023",
    lastPayment: "12 Aug 2025",
    status: "Active",
    utr_number: "XYZC256378",
    agentName: "Karthik R",
    agentPhone: "9887766554",
  },
  {
    customerId: "CUST-002",
    customerName: "Suresh R",
    noOfBatch: 5,
    activeChits: 4,
    totalInvestment: 320000,
    totalEarned: 410000,
    joiningDate: "22 Mar 2022",
    lastPayment: "05 Aug 2025",
    status: "Active",
    utr_number: "XYZC256378",
    agentName: "Priya Nair",
    agentPhone: "9090909090",
  },
];

export const CustomerReport = () => {
  const [openRow, setOpenRow] = useState(null);

  const toggleRow = (id) => {
    setOpenRow(openRow === id ? null : id);
  };

  return (
    <>
      <div className="d-flex gap-2 flex-wrap justify-content-md-end  mt-3 mt-md-0">
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
      <div className="filter-wrapper d-flex gap-2 align-items-center">
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
            <option value="">All Batches</option>
            <option value="">Batch 01</option>
            <option value="">Batch 02</option>
          </select>
        </div>
        <div className="flex-fill">
          <select name="" id="" className="form-select">
            <option value="">All Agents</option>
            <option value="">Batch 01</option>
            <option value="">Batch 02</option>
          </select>
        </div>
        <div className="flex-fill">
          <select name="" id="" className="form-select">
            <option value="">All Chits</option>
            <option value="">Batch 01</option>
            <option value="">Batch 02</option>
          </select>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-md-end gap-2 mb-3 filter-calender flex-wrap mt-3">
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
      <div className="common-table-wrapper mt-4">
        <table className="common-table table-striped">
          <thead className="table-dark">
            <tr>
              <th>Customer Name</th>
              <th>No Of Batch</th>
              <th>Active Chits</th>
              <th>Total Investment</th>
              <th>Last Payment</th>
              <th>UTR / Ref Number (for UPI/ Cheque)</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((item, index) => (
              <React.Fragment key={index}>
                {/* MAIN ROW */}

                <tr key={index}>
                  <td>
                    {item.customerName} <br /> <small style={{ color: "var(--main-color)" }}>({item.customerId})</small>
                  </td>
                  <td>{item.noOfBatch}</td>
                  <td>{item.activeChits}</td>
                  <td className="text-success">₹{item.totalInvestment.toLocaleString()}</td>
                  <td>{item.lastPayment}</td>
                  <td>{item.utr_number}</td>
                  <td className="text-center d-flex gap-1 justify-content-center">
                    <Link to="user-detail" className="text-dark">
                      <i
                        className={`bi btn btn-sm bg-dark-subtle text-dar ${openRow === index ? "bi-eye-slash" : "bi-eye"}`}
                        style={{
                          cursor: "pointer",
                          fontSize: "12px",
                          padding: "5px 7px",
                        }}></i>
                    </Link>
                    <i className="fi  btn btn-sm fi-tr-file-excel excel-btn"></i>
                    <i className="fi  btn btn-sm fi-tr-print print-btn"></i>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

        <nav aria-label="Page navigation example" className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link">
              <i className="bi bi-arrow-left"></i>
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link " href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="bi bi-arrow-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
