import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

function DashboardStats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-3 min-[0px]:max-md:grid-cols-1 gap-8">
      <Stat
        title="پروژه ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        color="primary"
        value={numOfProjects}
      />
      <Stat
        title="پروژه های واگذار شده"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        color="green"
        value={numOfAcceptedProjects}
      />
      <Stat
        title="درخواست ها"
        icon={<HiCollection className="w-20 h-20" />}
        color="yellow"
        value={numOfProposals}
      />
    </div>
  );
}

export default DashboardStats;
