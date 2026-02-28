import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChitDashboard } from "./chit-components/Chit-dashboard/ChitDashboard";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./chit-components/chit-topbar/Topbar";
import { ChitPlans } from "./chit-pages/chit-plan/ChitPlans";
import { ChitGroups } from "./chit-pages/chit-groups/ChitGroups";
import { ChitGroupDetail } from "./chit-pages/chit-groups/ChitGroupDetail";
import { ChitCollection } from "./chit-pages/chit-collection/ChitCollection";
import { ChitCollectionDetail } from "./chit-pages/chit-collection/ChitCollectionDetail";
import { WeeklyCollectionDetail } from "./chit-pages/chit-collection/WeeklyCollectionDetail";
import { CustomerReport } from "./chit-pages/chit-reports/CustomerReport";
import { ChitBatches } from "./chit-pages/chit-groups/ChitBatches";
import { CollectionBatch } from "./chit-pages/chit-collection/CollectionBatch";
import { CollectionRecord } from "./chit-pages/chit-collection/CollectionRecord";
import { ChitGroupsOutlet } from "./chit-pages/chit-groups/ChitGroupsOutlet";
import { ChitCollectionOutlet } from "./chit-pages/chit-collection/ChitCollectionOutlet";
import { ChitGroupLayout } from "./chit-pages/chit-groups/ChitGroupLayout";
import { ReportLayout } from "./chit-pages/chit-reports/ReportLayout";
import { UserDetail } from "./chit-pages/chit-reports/UserDetail";
import { AgentStaffLayout } from "./chit-pages/chit-agent-staff/AgentStaffLayout";
import { AgentStaffList } from "./chit-pages/chit-agent-staff/AgentStaffList";
import { AgentDetail } from "./chit-pages/chit-agent-staff/AgentDetail";

function ChitRoutes() {
  return (
    <>
      <Routes>
        <Route path="/chit-dashboard" element={<ChitDashboard />} />
        <Route path="/chit-plan" element={<ChitPlans />} />
        <Route path="/chit-batch" element={<ChitCollectionOutlet />}>
          <Route index element={<ChitBatches />} />
          <Route path="chit-groups" element={<ChitGroupLayout />}>
            <Route index element={<ChitGroups />} />
            <Route path="chit-group-detail" element={<ChitGroupDetail />} />
          </Route>
        </Route>
        <Route path="/agent-staff" element={<AgentStaffLayout />}>
          <Route index element={<AgentStaffList />} />
          <Route path="agent-detail" element={<AgentDetail />} />
        </Route>
        <Route path="/collection-batch" element={<CollectionBatch />} />
        <Route path="/collection-batch/chit-collection" element={<ChitCollection />} />
        <Route path="/collection-batch/chit-collection/chit-collection-detail" element={<ChitCollectionDetail />} />
        <Route path="/collection-batch/chit-collection/weekly-collection-detail" element={<WeeklyCollectionDetail />} />
        <Route path="/collection-batch/chit-collection/weekly-collection-detail/record-payment" element={<CollectionRecord />} />
        <Route path="/chit-report" element={<ReportLayout />}>
          <Route path="customer-report" element={<CustomerReport />} />
          <Route path="customer-report/user-detail" element={<UserDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default ChitRoutes;
