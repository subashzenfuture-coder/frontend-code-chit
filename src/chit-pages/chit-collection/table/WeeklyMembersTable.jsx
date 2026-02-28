import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";

const AuctionData = [
  {
    member_name: "Rajesh Kumar M",
    id: "CH-2023-001",
    phone: "9876543210",
    last_payment_date: "24 Oct 2025",
    maturity_payment: 550000,
    total_paid: 500000,
    week1: "paid",
    week2: "paid",
    week3: "paid",
    week4: "paid",
    week5: "pending",
  },
  {
    member_name: "Suresh Kumar R",
    id: "CH-2023-042",
    phone: "9876543210",
    last_payment_date: "5 Nov 2025",
    maturity_payment: 550000,
    total_paid: 480000,
    week1: "paid",
    week2: "not paid",
    week3: "paid",
    week4: "paid",
    week5: "pending",
  },
  {
    member_name: "Karthick P",
    id: "CH-2023-015",
    phone: "9876543210",
    last_payment_date: "14 Nov 2025",
    maturity_payment: 550000,
    total_paid: 670000,
    week1: "paid",
    week2: "paid",
    week3: "paid",
    week4: "not paid",
    week5: "pending",
  },
  {
    member_name: "Rahul Sharma",
    id: "CH-2023-055",
    phone: "9876543210",
    last_payment_date: "9 Dec 2025",
    maturity_payment: 550000,
    total_paid: 800000,
    week1: "paid",
    week2: "paid",
    week3: "paid",
    week4: "paid",
    week5: "pending",
  },
];

export const WeeklyMembersTable = ({ search }) => {


    const [currentPage, setCurrentPage] = useState(1);
  
    const rowsPerPage = 4;
  
    /* 🔹 STEP 1: SEARCH (full data) */
    const filteredData = AuctionData.filter((item) => item.member_name.toLowerCase().includes(search.toLowerCase()));
  
    /* 🔹 STEP 2: PAGINATION */
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  
    const startIndex = (currentPage - 1) * rowsPerPage;
  
    const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);
  
  
  
    /* 🔹 Search change ஆனா page reset */
    useEffect(() => {
      setCurrentPage(1);
    }, [search]);
  

  
    const getPages = (currentPage, totalPages) => {
      const pages = [];
  
      if (totalPages <= 4) {
        
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
        return pages;
      }
  
      pages.push(1); 
  
      if (currentPage > 3) {
        pages.push("...");
      }
  
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
  
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
  
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
  
      pages.push(totalPages); 
  
      return pages;
    };
  
    const pages = getPages(currentPage, totalPages);

  return (
    <>
      <div className="common-table-wrapper mt-4">
        <table className="common-table table-striped">
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Member Phone</th>
   
              <th>Last Pay Date</th>
              <th>Total Paid</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((member, index) => {
              return (
                <tr key={index}>
                  <td className="time-cell">
                    <strong> {member.member_name}</strong> <small className="d-block w-100">{member.id}</small>
                  </td>
                  <td className="time-cell">{member.phone}</td>
                  <td className="time-cell">{member.last_payment_date}</td>
                  <td className="time-cell">₹{member.total_paid}</td>

                  <td className="hours-cell">
                    <Link to="record-payment" className="btn main-btn">
                      Record Payment
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <nav aria-label="Page navigation example" className="mt-4">


        <ul className="pagination justify-content-center">
          {/* PREV */}
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
              <i className="bi bi-arrow-left"></i>
            </button>
          </li>

          {/* PAGE NUMBERS */}
          {pages.map((page, index) =>
            page === "..." ? (
              <li key={index} className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            ) : (
              <li key={index} className={`page-item ${currentPage === page ? "active" : ""}`}>
                <button className="page-link" onClick={() => setCurrentPage(page)}>
                  {page}
                </button>
              </li>
            ),
          )}

          {/* NEXT */}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
              <i className="bi bi-arrow-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
