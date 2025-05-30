import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";

export default function UserDashboard() {
  return (
    <>
      <DashboardNavbar></DashboardNavbar>
      <DashboardSidebar></DashboardSidebar>
      <div class="sm:ml-64 mt-14 p-4 text-black"></div>
    </>
  );
}
