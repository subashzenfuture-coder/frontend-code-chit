import React from "react";
import { Link } from "react-router-dom";

export const CollectionBatch = () => {
  return (
    <div className="chit-batches">
      <div className="row gy-4">
        <div className="col-md-4 col-lg-3">
          <div className="plan-stack">
            <div className="stack-icon">
              <div className="icon icon-1">
                <i class="fi fi-tr-tally-3"></i>
              </div>
            </div>
            <div className="stack-content">
              <p className="text">Active Batches</p>
              <p className="title">12</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="plan-stack">
            <div className="stack-icon">
              <div className="icon icon-2">
                <i class="fi fi-tr-sack-dollar"></i>
              </div>
            </div>
            <div className="stack-content">
              <p className="text">Completed Batches</p>
              <p className="title">18</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="plan-stack">
            <div className="stack-icon">
              <div className="icon icon-3">
                <i class="fi fi-tr-money-bills-simple"></i>
              </div>
            </div>
            <div className="stack-content">
              <p className="text">Total Amount</p>
              <p className="title">₹6,54,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="plan-stack">
            <div className="stack-icon">
              <div className="icon icon-4">
                <i class="fi fi-tr-pending"></i>
              </div>
            </div>
            <div className="stack-content">
              <p className="text">Pending Amount</p>
              <p className="title">₹4,20,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-wrapper d-flex gap-2 align-items-center mb-3">
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
            <option value="">Pending</option>
            <option value="">Completed</option>
            <option value="">On Going</option>
          </select>
        </div>
        <div className="flex-fill">
          <div class="d-flex align-items-center justify-content-md-end gap-2  filter-calender flex-wrap ">
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
        </div>
      </div>
      <div className="row gy-2 mt-2">
        <div className="col-lg-4">
          <div className="batch-card">
            <div className="batch-header">
              <div className="row gy-4">
                <div className="col-10">
                  <h6 className="batch-title">Batch 01</h6>
                  <span className="batch-status active">Active</span>
                </div>
                <div className="col-2">
                  <div className="quick-edit dropdown">
                    <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-pencil"></i> Edit
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-trash"></i> Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="batch-body">
              <div className="d-flex gap-2 align-items-center justify-content-between">
                <h6 className="batch-subtitle">Total Collection</h6>
                <div className="batch-count">
                  <span>20,000</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="batch-enrollment">
                  <div className="d-flex gap-2 align-items-center justify-content-between">
                    <h6 className="batch-subtitle">Collections Progress</h6>
                    <div className="batch-count common">75%</div>
                  </div>
                  <div
                    className="progress mt-3"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: "6px" }}>
                    <div className="progress-bar common-bg" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Link to="chit-collection" className="btn detail-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="batch-card">
            <div className="batch-header">
              <div className="row gy-4">
                <div className="col-10">
                  <h6 className="batch-title">Batch 02</h6>
                  <span className="batch-status completed">Completed</span>
                </div>
                <div className="col-2">
                  <div className="quick-edit dropdown">
                    <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-pencil"></i> Edit
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-trash"></i> Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="batch-body">
              <div className="d-flex gap-2 align-items-center justify-content-between">
                <h6 className="batch-subtitle">Total Collection</h6>
                <div className="batch-count">
                  <span>20,000</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="batch-enrollment">
                  <div className="d-flex gap-2 align-items-center justify-content-between">
                    <h6 className="batch-subtitle">Collections Progress</h6>
                    <div className="batch-count common">75%</div>
                  </div>
                  <div
                    className="progress mt-3"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: "6px" }}>
                    <div className="progress-bar common-bg" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Link to="chit-collection" className="btn detail-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="batch-card">
            <div className="batch-header">
              <div className="row gy-4">
                <div className="col-10">
                  <h6 className="batch-title">Batch 03</h6>
                  <span className="batch-status pending">Pending</span>
                </div>
                <div className="col-2">
                  <div className="quick-edit dropdown">
                    <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-pencil"></i> Edit
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-trash"></i> Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="batch-body">
              <div className="d-flex gap-2 align-items-center justify-content-between">
                <h6 className="batch-subtitle">Total Collection</h6>
                <div className="batch-count">
                  <span>20,000</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="batch-enrollment">
                  <div className="d-flex gap-2 align-items-center justify-content-between">
                    <h6 className="batch-subtitle">Collections Progress</h6>
                    <div className="batch-count common">75%</div>
                  </div>
                  <div
                    className="progress mt-3"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: "6px" }}>
                    <div className="progress-bar common-bg" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Link to="chit-collection" className="btn detail-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="batch-card">
            <div className="batch-header">
              <div className="row gy-4">
                <div className="col-10">
                  <h6 className="batch-title">Batch 04</h6>
                  <span className="batch-status active">Active</span>
                </div>
                <div className="col-2">
                  <div className="quick-edit dropdown">
                    <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-pencil"></i> Edit
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-trash"></i> Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="batch-body">
              <div className="d-flex gap-2 align-items-center justify-content-between">
                <h6 className="batch-subtitle">Total Collection</h6>
                <div className="batch-count">
                  <span>20,000</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="batch-enrollment">
                  <div className="d-flex gap-2 align-items-center justify-content-between">
                    <h6 className="batch-subtitle">Collections Progress</h6>
                    <div className="batch-count common">75%</div>
                  </div>
                  <div
                    className="progress mt-3"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: "6px" }}>
                    <div className="progress-bar common-bg" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Link to="chit-collection" className="btn detail-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="batch-card">
            <div className="batch-header">
              <div className="row gy-4">
                <div className="col-10">
                  <h6 className="batch-title">Batch 05</h6>
                  <span className="batch-status pending">Pending</span>
                </div>
                <div className="col-2">
                  <div className="quick-edit dropdown">
                    <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-pencil"></i> Edit
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-trash"></i> Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="batch-body">
              <div className="d-flex gap-2 align-items-center justify-content-between">
                <h6 className="batch-subtitle">Total Collection</h6>
                <div className="batch-count">
                  <span>20,000</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="batch-enrollment">
                  <div className="d-flex gap-2 align-items-center justify-content-between">
                    <h6 className="batch-subtitle">Collections Progress</h6>
                    <div className="batch-count common">75%</div>
                  </div>
                  <div
                    className="progress mt-3"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: "6px" }}>
                    <div className="progress-bar common-bg" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Link to="chit-collection" className="btn detail-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
