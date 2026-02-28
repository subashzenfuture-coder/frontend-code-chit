import React, { useState } from "react";
import { Link } from "react-router-dom";

const Batch = [
  {
    name: "100-Days-Btach",
    id: "CH-2023-001",
    enrolled: 0,
    total: 0,
    amount: "₹5,00,000",
    start_date: "-",
    end_date: "-",
    status: "Waiting",
    color: "secondary",
  },
  {
    name: "90Days-Batch",
    id: "CH-2023-042",
    enrolled: 12,
    total: 30,
    amount: "₹15,00,000",
    start_date: "28 Oct 2025",
    end_date: "5 Nov 2025",
    status: "Forming",
    color: "warning",
  },
  {
    name: "Monthly-Sept-Gold",
    id: "CH-2023-015",
    enrolled: 50,
    total: 50,
    amount: "₹25,00,000",
    start_date: "7 Nov 2025",
    end_date: "14 Nov 2025",
    status: "Completed",
    color: "danger",
  },
  {
    name: "Weekly-Batch",
    id: "CH-2023-055",
    enrolled: 22,
    total: 24,
    amount: "₹5,00,000",
    start_date: "2 Dec 2025",
    end_date: "9 Dec 2025",
    status: "Active",
    color: "success",
  },
];

export const BatchTable = () => {
  const [errors, setErrors] = useState("");

  const [formData, setFormData] = useState({
    plan_duration: "",
    max_investment: "",
    total_members: "",
  });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleErrors = () => {
    let newErrors = {};

    if (!formData.plan_duration) {
      newErrors.planDurationError = "Please Enter the Input Field";
    }


    if (!formData.max_investment) {
      newErrors.max_investment = "Please Enter the Input Field";
    }
   
    if (!formData.total_members) {
      newErrors.total_members = "Please Enter the Input Field";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <div className="text-end">
        <button className="btn main-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          + Add Plans
        </button>
      </div>
      <div className="common-table-wrapper mt-4">
        <table className="common-table table-striped">
          <thead>
            <tr>
              <th>Batch Name</th>
              <th>Enrollment</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Batch.map((batch, index) => {
              const percent = (batch.enrolled / batch.total) * 100;
              return (
                <tr key={index}>
                  <td className="time-cell">
                    <strong> {batch.name}</strong> <small className="d-block w-100">{batch.id}</small>
                  </td>
                  <td className="time-cell">
                    <div className="">
                      <small className="d-block">
                        {batch.enrolled}/{batch.total}
                      </small>
                      <div className="progress flex-grow-1" style={{ height: "8px" }}>
                        <div className={`progress-bar text-bg-${batch.color} `} style={{ width: `${percent}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="hours-cell">{batch.start_date}</td>
                  <td className="hours-cell">{batch.end_date}</td>
                  <td className="hours-cell">
                    <span className={`badge rounded-pill bg-${batch.color} bg-opacity-25 text-${batch.color}`}>{batch.status}</span>
                  </td>

                  <td className="action-buttons d-flex ">
                    <Link to="chit-group-detail" className="btn main-btn">
                      Booking Days
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
                Add New Plan
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="group-form-detail ">
                <h6 className="mb-3">Plan Detail</h6>
                <div className="row gy-4 align-items-center">
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Select Plan
                    </label>
                    <select className="form-control" name="plan_duration" value={formData.plan_duration}>
                      <option value="">16 Weeks</option>
                      <option value="">10 Months</option>
                      <option value="">90 Days</option>
                      <option value="">100 Days</option>
                    </select>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Max Investment Amount
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.max_investment}
                      onChange={handleChange}
                      name="max_investment"
                      placeholder="Ex : 100000, 200000"
                    />
                    {errors.max_investment && <small className="text-danger">{errors.max_investment}</small>}
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="" className="form-label">
                      Total Members
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.total_members}
                      onChange={handleChange}
                      name="total_member"
                      placeholder="Ex : 20 , 30"
                    />
                    {errors.installment_amount && <small className="text-danger">{errors.installment_amount}</small>}
                  </div>
                </div>
              </form>
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
