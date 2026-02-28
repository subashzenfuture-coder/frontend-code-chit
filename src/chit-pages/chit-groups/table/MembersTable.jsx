import React, { useState, useEffect } from "react";
import { Link, Links } from "react-router-dom";

const AuctionData = [
  {
    name: "Kuralarasan M",
    id: "CH-2026-001",
    phone_number: "9876543210",
    aadhar_number: "654898761234",
    pan_number: "IBI9000678",
    address: "Akshya Nagar, Bangalore-560016",
    handler_type: "staff",
    staff_name: "Priya Nair",
    staff_phone: "9090909090",
    agent_name: null,
    agent_phone: null,
    nominee_name: "Arun Kumar",
    nominee_phone: "9876501234",
  },
  {
    name: "Ganeshan R",
    id: "CH-2026-002",
    phone_number: "9123456780",
    aadhar_number: "789456123098",
    pan_number: "ABCPD1234K",
    address: "MG Road, Bangalore-560038",
    handler_type: "agent",
    staff_name: null,
    staff_phone: null,
    agent_name: "Karthik R",
    agent_phone: "9887766554",
    nominee_name: "Sneha Reddy",
    nominee_phone: "9765401238",
  },
  {
    name: "Anitha P",
    id: "CH-2026-003",
    phone_number: "9988776655",
    aadhar_number: "456789012345",
    pan_number: "PQRSX5678L",
    address: "Anna Nagar, Chennai-600040",
    handler_type: "staff",
    staff_name: "Meena Iyer",
    staff_phone: "9345678901",
    agent_name: null,
    agent_phone: null,
    nominee_name: "Ravi Iyer",
    nominee_phone: "9955123409",
  },
  {
    name: "Srithar",
    id: "CH-2026-004",
    phone_number: "9012345678",
    aadhar_number: "321098765432",
    pan_number: "LMNOP4321Q",
    address: "Nerul, Navi Mumbai-400706",
    handler_type: "agent",
    staff_name: null,
    staff_phone: null,
    agent_name: "Karthik R",
    agent_phone: "9887766554",
    nominee_name: "Neha Sharma",
    nominee_phone: "9812345678",
  },
  {
    name: "Ramesh K",
    id: "CH-2026-005",
    phone_number: "9001122334",
    aadhar_number: "567890123456",
    pan_number: "RTYUI4567Z",
    address: "T Nagar, Chennai-600017",
    handler_type: "staff",
    staff_name: "Suresh Kumar",
    staff_phone: "9870011223",
    agent_name: null,
    agent_phone: null,
    nominee_name: "Lakshmi R",
    nominee_phone: "9090901234",
  },
  {
    name: "Suresh B",
    id: "CH-2026-006",
    phone_number: "9112233445",
    aadhar_number: "678901234567",
    pan_number: "QAZWS6789X",
    address: "Velachery, Chennai-600042",
    handler_type: "agent",
    staff_name: null,
    staff_phone: null,
    agent_name: "Arvind S",
    agent_phone: "9888899990",
    nominee_name: "Bala S",
    nominee_phone: "9345612345",
  },
  {
    name: "Priya S",
    id: "CH-2026-007",
    phone_number: "9223344556",
    aadhar_number: "789012345678",
    pan_number: "PLMKO1234D",
    address: "Whitefield, Bangalore-560066",
    handler_type: "staff",
    staff_name: "Naveen R",
    staff_phone: "9012345678",
    agent_name: null,
    agent_phone: null,
    nominee_name: "Sathish S",
    nominee_phone: "9876509876",
  },
  {
    name: "Vignesh R",
    id: "CH-2026-008",
    phone_number: "9334455667",
    aadhar_number: "890123456789",
    pan_number: "MNBVC9876L",
    address: "Tambaram, Chennai-600045",
    handler_type: "agent",
    staff_name: null,
    staff_phone: null,
    agent_name: "Karthik R",
    agent_phone: "9887766554",
    nominee_name: "Manoj R",
    nominee_phone: "9000012345",
  },
  {
    name: "Deepa K",
    id: "CH-2026-009",
    phone_number: "9445566778",
    aadhar_number: "901234567890",
    pan_number: "ZXCAS4321P",
    address: "Adyar, Chennai-600020",
    handler_type: "staff",
    staff_name: "Radha M",
    staff_phone: "9090912345",
    agent_name: null,
    agent_phone: null,
    nominee_name: "Kannan K",
    nominee_phone: "9888812345",
  },
  {
    name: "Arjun N",
    id: "CH-2026-010",
    phone_number: "9556677889",
    aadhar_number: "012345678901",
    pan_number: "ASDFG7654Q",
    address: "Hosur Road, Bangalore-560068",
    handler_type: "agent",
    staff_name: null,
    staff_phone: null,
    agent_name: "Sanjay P",
    agent_phone: "9777712345",
    nominee_name: "Rohit N",
    nominee_phone: "9666612345",
  },
];

export const MembersTable = ({ search }) => {
  const [openRow, setOpenRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 4;

  /* 🔹 STEP 1: SEARCH (full data) */
  const filteredData = AuctionData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  /* 🔹 STEP 2: PAGINATION */
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;

  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);



  /* 🔹 Search change ஆனா page reset */
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const toggleRow = (id) => {
    setOpenRow(openRow === id ? null : id);
  };

  const getPages = (currentPage, totalPages) => {
    const pages = [];

    if (totalPages <= 4) {
      // 4 அல்லது அதற்கு குறைஞ்சா
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1); // first page

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

    pages.push(totalPages); // last page

    return pages;
  };

  const pages = getPages(currentPage, totalPages);

  return (
    <>
      <div className="common-table-wrapper mt-4">
        <table className="common-table table-striped">
          <thead className="table-dark">
            <tr>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Aadhaar</th>
              <th>PAN</th>
              <th>Address</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((auction, index) => (
              <React.Fragment key={index}>
                {/* MAIN ROW */}
                <tr>
                  <td>
                    <strong className="d-block">{auction.name}</strong>
                    <span>{auction.id}</span>
                  </td>
                  <td>{auction.phone_number}</td>
                  <td>{auction.aadhar_number}</td>
                  <td>{auction.pan_number}</td>
                  <td>{auction.address}</td>
                  <td className="text-center">
                    <i
                      className={`bi btn btn-sm bg-primary-subtle text-primary ${openRow === index ? "bi-eye-slash" : "bi-eye"}`}
                      style={{
                        cursor: "pointer",
                        fontSize: "20px",
                      }}
                      onClick={() => toggleRow(index)}></i>
                  </td>
                </tr>

                {/* COLLAPSE ROW */}
                {openRow === index && (
                  <tr>
                    <td colSpan="6">
                      <div class="info-card">
                        <div class="info-grid">
                          <div>
                            <div className="d-flex gap-2">
                              <strong>Nominee Name :</strong>
                              <span>{auction.nominee_name}</span>
                            </div>
                            <div className="d-flex gap-2">
                              <strong>Nominee Phone :</strong>
                              <span>{auction.nominee_phone}</span>
                            </div>
                          </div>

                          <div>
                            <div className="d-flex gap-2">
                              <strong>Agent Name :</strong>
                              <span>{auction.agent_name}</span>
                            </div>
                            <div className="d-flex gap-2">
                              <strong>Agent Phone Number :</strong>
                              <span>{auction.phone_number}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
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
