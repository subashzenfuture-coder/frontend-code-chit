import React, { useState } from "react";
import "./ChitGroups.css";
import { Link } from "react-router-dom";

export const ChitBatches = () => {

  const [search , setSearch] = useState("")


 

  return (
    <>
      <div className="chit-batches">
        <div className="text-end mb-3">
          <button className="btn main-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <i className="bi bi-plus-circle"></i>&nbsp;Create New Batch
          </button>
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
              <option value="">Closed</option>
              <option value="">Open</option>
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
        <div className="row gy-4 ">
          <div className="col-lg-4">
            <div className="batch-card">
              <div className="batch-header">
                <div className="row gy-4">
                  <div className="col-10">
                    <h6 className="batch-title">Batch 01</h6>
                    <span className="batch-status close">Closed</span>
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
                  <h6 className="batch-subtitle">Total Plans</h6>
                  <div className="batch-count">
                    <span>4</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="batch-enrollment">
                    <div className="d-flex gap-2 align-items-center justify-content-between">
                      <h6 className="batch-subtitle">Active Members</h6>
                      <div className="batch-count common">32</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <Link to="chit-groups" className="btn detail-btn w-100">
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
                    <span className="batch-status close">Closed</span>
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
                  <h6 className="batch-subtitle">Total Plans</h6>
                  <div className="batch-count">
                    <span>4</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="batch-enrollment">
                    <div className="d-flex gap-2 align-items-center justify-content-between">
                      <h6 className="batch-subtitle">Active Members</h6>
                      <div className="batch-count common">32</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <Link to="chit-groups" className="btn detail-btn w-100">
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
                    <span className="batch-status close">Closed</span>
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
                  <h6 className="batch-subtitle">Total Plans</h6>
                  <div className="batch-count">
                    <span>4</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="batch-enrollment">
                    <div className="d-flex gap-2 align-items-center justify-content-between">
                      <h6 className="batch-subtitle">Active Members</h6>
                      <div className="batch-count common">32</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <Link to="chit-groups" className="btn detail-btn w-100">
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
                    <span className="batch-status close">Closed</span>
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
                  <h6 className="batch-subtitle">Total Plans</h6>
                  <div className="batch-count">
                    <span>4</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="batch-enrollment">
                    <div className="d-flex gap-2 align-items-center justify-content-between">
                      <h6 className="batch-subtitle">Active Members</h6>
                      <div className="batch-count common">32</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <Link to="chit-groups" className="btn detail-btn w-100">
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
                    <span className="batch-status open">Open</span>
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
                  <h6 className="batch-subtitle">Total Plans</h6>
                  <div className="batch-count">
                    <span>4</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="batch-enrollment">
                    <div className="d-flex gap-2 align-items-center justify-content-between">
                      <h6 className="batch-subtitle">Active Members</h6>
                      <div className="batch-count common">32</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <Link to="chit-groups" className="btn detail-btn w-100">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal form-modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div className="modal-dialog modal_form modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Create Batch
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body form_content">
              <div className="customer-form-detail ">
                <h4 className="subtitle">Batch Details</h4>
                <div className="mt-3">
                  <div className="row gy-4">
                    <div className="col-lg-6">
                      <label htmlFor="" className="form-label">
                        Batch Name
                      </label>
                      <input type="text" className="form-control" placeholder="Batch Name" />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="" className="form-label">
                        Batch ID
                      </label>
                      <input type="text" className="form-control" placeholder="Batch ID" readOnly />
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="" className="form-label">
                        Batch Start Date / Time
                      </label>
                      <div className="row gy-4">
                        <div className="col-md-6">
                          <input type="date" className="form-control" />
                        </div>
                        <div className="col-md-6">
                          <input type="time" className="form-control" />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="" className="form-label">
                        Batch default Closing Date / Time
                      </label>
                      <div className="row gy-4">
                        <div className="col-md-6">
                          <input type="date" className="form-control" readOnly/>
                        </div>
                        <div className="col-md-6">
                          <input type="time" className="form-control" readOnly/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
