import React from "react";
import { Link } from "react-router-dom";

const customers = [
  {
    agentId: "AGT-001",
    noOfRefral: 3,
    refrence_detail:"Agent",
    lastRefral: "12-01-2026",
    agentName: "Karthik R",
    agentPhone: "9887766554",
    status: "inactive",
    color: "danger",
  },
  {
    agentId: "AGT-002",
    noOfRefral: 5,
     refrence_detail:"Staff",
    lastRefral: "21-12-2025",
    agentName: "Priya Nair",
    agentPhone: "9090909090",
    status: "active",
    color: "success",
  },
];

export const AgentStaffTable = () => {
  return (
    <div className="common-table-wrapper mt-4">
      <table className="common-table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Refrence Detail</th>
              <th>Phone Number</th>
            <th>No Of Refral</th>
            <th>Last Refral</th>
          
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((item, index) => (
            <React.Fragment key={index}>
              {/* MAIN ROW */}

              <tr key={index}>
                <td>
                  {item.agentName} <br /> <small style={{ color: "var(--main-color)" }}>({item.agentId})</small>
                </td>
                <td>{item.refrence_detail}</td>
                <td>{item.agentPhone}</td>
                <td>{item.noOfRefral}</td>
                <td>{item.lastRefral}</td>
         
                <td className="hours-cell">
                  <span className={`badge rounded-pill bg-${item.color} bg-opacity-25 text-${item.color}`}>{item.status}</span>
                </td>
                <td className="action-buttons d-flex ">
                  <Link to="agent-detail" className="btn main-btn">
                    View detail
                  </Link>

                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
