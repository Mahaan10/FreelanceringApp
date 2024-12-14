import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useOwnerProjects from "../projects/useOwnerProjects";
import DashboardStats from "./DashboardStats";

function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <DashboardStats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
