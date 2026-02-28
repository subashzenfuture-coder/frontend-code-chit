import React, { useState } from "react";
import { Link } from "react-router-dom";

const Members = [
  {
    member_name: "Rajesh Kumar M",
    id: "CH-2023-001",
    date: "24 Oct 2025",
    total_amount: 500000,
    intrest_amount: "₹5,000",
    maturity_amount: "₹55,000",
  },
  {
    member_name: "Suresh Kumar R",
    id: "CH-2023-042",
    date: "5 Nov 2025",
    total_amount: 500000,
    intrest_amount: "₹5,000",
    maturity_amount: "₹55,000",
    date: "5 Nov 2025",
  },
  {
    member_name: "Karthick P",
    id: "CH-2023-015",
    date: "14 Nov 2025",
    total_amount: 500000,
    intrest_amount: "₹5,000",
    maturity_amount: "₹55,000",
  },
  {
    member_name: "Rahul Sharma",
    id: "CH-2023-055",
    date: "9 Dec 2025",
    total_amount: 500000,
    intrest_amount: "₹5,000",
    maturity_amount: "₹55,000",
  },
];

export const MembersTable = () => {
  return (
    <>
      <div className="common-table-wrapper mt-4">
        <table className="common-table table-striped">
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Inv.Date</th>
              <th>Principal</th>
              <th>Intrest / Bonus</th>
              <th>Maturity Amount</th>
            </tr>
          </thead>
          <tbody>
            {Members.map((member, index) => {
              return (
                <tr key={index}>
                  <td className="time-cell">
                    <strong> {member.member_name}</strong> <small className="d-block w-100">{member.id}</small>
                  </td>
                  <td className="time-cell">{member.date}</td>
                  <td className="time-cell">{member.total_amount}</td>
                  <td className="hours-cell text-success">{member.intrest_amount}</td>
                  <td className="hours-cell">{member.maturity_amount}</td>
                 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <nav aria-label="Page navigation example" className="mt-4">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link">
              <i class="bi bi-arrow-left"></i>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link " href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <i class="bi bi-arrow-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
