import React from "react";
import { AgentStaffTable } from "./table/AgentStaffTable";

export const AgentStaffList = () => {
  return (
    <div className="agent_staff">
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
            <option value="">Agent</option>
            <option value="">Staff</option>
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
      <AgentStaffTable />
    </div>
  );
};
