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

export const ChitCustomer = () => {
  const [openRow, setOpenRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");

  const [formInputs, setFormInputs] = useState({
    plan_duration: "",
    plan_date: "",
    plan_time: "",
    no_of_slots: "",
    total_value: "",
    customer_name: "",
    phone_number: "",
    place: "",
    aadhar_number: "",
    pan_number: "",
    nominee_name: "",
    nominee_phone: "",
    address: "",
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
      <div className="d-flex align-items-center gap-3 ">
        <div className="flex-grow-1">
          <div className="search-box ">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
              placeholder="Search By Name or ID..."
            />
            <i className="bi bi-search search-icon"></i>
          </div>
        </div>
        <div className=" text-end">
          <button type="button" className="btn main-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <i className="bi bi-person-plus"></i>&nbsp;Add Customer
          </button>
        </div>
      </div>
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
                Batch 01 (<small>DT-BTH-01</small>)
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="billing_body">
                  <div className="group-form-detail">
                    <div className="row gy-4">
                      <div className="col-lg-6">
                        <label htmlFor="" className="form-label">
                          Plan Duration
                        </label>
                        <input
                          type="text"
                          onChange={handleInputChange}
                          value={formInputs.plan_duration}
                          className="form-control"
                          name="plan_duration"
                          placeholder="Monthly"
                          readOnly
                        />
                      </div>

                      <div className="col-lg-6">
                        <label htmlFor="" className="form-label">
                          Date & Time
                        </label>
                        <div className="d-flex gap-2">
                          <input type="date" className="form-control" onChange={handleInputChange} value={formInputs.plan_date} name="plan_date" />
                          <input type="time" className="form-control" onChange={handleInputChange} value={formInputs.plan_time} name="plan_time" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="" className="form-label">
                          No Of Slots
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={formInputs.no_of_slots}
                          onChange={handleInputChange}
                          name="no_of_slots"
                          placeholder="Ex : 1, 2"
                        />
                      </div>
                       <div className="col-lg-6">
                        <label htmlFor="" className="form-label">
                          Max Investment Amount
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={formInputs.no_of_slots}
                          onChange={handleInputChange}
                          name="no_of_slots"
                          placeholder="Ex : 100000, 20000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="customer-form-detail mt-4">
                    <h4 className="subtitle">Customer Details</h4>
                    <div className="mt-3">
                      <div className="row gy-4">
                        <div className="col-lg-4">
                          <label htmlFor="" className="form-label">
                            Customer Name
                          </label>
                          <input
                            type="text"
                            name="customer_name"
                            value={formInputs.customer_name}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Customer Name"
                          />
                        </div>
                        <div className="col-lg-4">
                          <label htmlFor="" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phone_number"
                            value={formInputs.phone_number}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="col-lg-4">
                          <label htmlFor="" className="form-label">
                            Place
                          </label>
                          <input
                            type="text"
                            name="place"
                            value={formInputs.place}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Place"
                          />
                        </div>
                        <div className="col-lg-4">
                          <label htmlFor="" className="form-label">
                            Aadhar Number
                          </label>
                          <input
                            type="text"
                            name="aadhar_number"
                            value={formInputs.aadhar_number}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder=" Aadhar Number"
                          />
                        </div>
                        <div className="col-lg-4">
                          <label htmlFor="" className="form-label">
                            PAN Number
                          </label>
                          <input
                            type="text"
                            value={formInputs.pan_number}
                            name="pan_number"
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="PAN Number"
                          />
                        </div>

                        <div className="col-lg-4">
                          <label htmlFor="" className="form-label">
                            Nominee Name
                          </label>
                          <input
                            type="text"
                            name="nominee_name"
                            value={formInputs.nominee_name}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Nominee"
                          />
                        </div>
                        <div className="col-lg-4">
                          <label htmlFor="" className="form-label">
                            Nominee Phone
                          </label>
                          <input
                            type="text"
                            name="nominee_phone"
                            value={formInputs.nominee_phone}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Nominee Phone"
                          />
                        </div>
                        <div className="col-lg-8">
                          <label htmlFor="" className="form-label">
                            Address
                          </label>
                          <textarea
                            name="address"
                            id=""
                            value={formInputs.address}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Address"
                            rows={3}></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="payment-form-detail mt-4">
                    <div className="">
                      <div className="row gy-4">
                        <div className="col-lg-12">
                          <h4 className="subtitle pb-3">Booking Refrence Information</h4>
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
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              onChange={handleInputChange}
                              name="booking_refrence"
                              id="inlineRadio3"
                              value={formInputs.booking_refrence}
                            />
                            <label class="form-check-label" for="inlineRadio3">
                              Office Walk In
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
                          Create Subscription
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
    </>
  );
};
