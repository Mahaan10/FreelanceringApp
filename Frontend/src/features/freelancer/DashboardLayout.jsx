import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import DashboardStats from "./DashboardStats";

function DashboardLayout() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <DashboardStats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
