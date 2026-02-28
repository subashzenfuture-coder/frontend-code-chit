import React from "react";
import { Link } from "react-router-dom";

const Batch = [
  {
    name: "100Days-Batch",
    id: "CH-2023-001",
    collection_amount: "2,00000",
    pending_amount: "3,00000",
    amount: "₹5,00,000",
    start_date: "24 Oct 2025",
    status: "Completed",
    color: "success",
  },
  {
    name: "50Days-Batch",
    id: "CH-2023-042",
    collection_amount: "8,00000",
    pending_amount: "7,00000",
    amount: "₹15,00,000",
    start_date: "28 Oct 2025",
    status: "OnGoing",
    color: "warning",
  },
  {
    name: "Monthly-Sept-Gold",
    id: "CH-2023-015",
    collection_amount: "19,00000",
    pending_amount: "6,00000",
    amount: "₹25,00,000",
    start_date: "7 Nov 2025",
    status: "Progress",
    color: "secondary",
  },
  {
    name: "Weekly-Batch",
    id: "CH-2023-055",
    collection_amount: "3,50000",
    pending_amount: "1,50000",
    amount: "₹5,00,000",
    start_date: "2 Dec 2025",
    status: "Closed",
    color: "danger",
  },
];

export const BatchTable = () => {
  return (
    <>
      <div className="common-table-wrapper mt-4">
        <table className="common-table table-striped">
          <thead>
            <tr>
              <th>Batch Name</th>
              <th>Start Date</th>
              <th>Total Batch Value</th>
              <th>Collection Value</th>
              <th>Pending Value</th>
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

                  <td className="time-cell">{batch.start_date}</td>
                  <td className="hours-cell">{batch.amount}</td>
                  <td className="hours-cell">{batch.collection_amount}</td>
                  <td className="hours-cell">{batch.pending_amount}</td>
                  <td className="hours-cell">
                    <span className={`badge rounded-pill bg-${batch.color} bg-opacity-25 text-${batch.color}`}>{batch.status}</span>
                  </td>

                  <td className="action-buttons d-flex ">
                    <Link to="weekly-collection-detail" className="btn main-btn">
                      View detail
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
