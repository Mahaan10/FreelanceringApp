import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Stat from "../../ui/Stat";

function DashboardStats({ proposals, users, projects }) {
  return (
    <div className="grid grid-cols-3 min-[0px]:max-md:grid-cols-1 gap-8">
      <Stat
        title="کاربران"
        icon={<HiUser className="w-20 h-20" />}
        color="orange"
        value={users}
      />
      <Stat
        title="درخواست ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        color="primary"
        value={proposals}
      />
      <Stat
        title="پروژه ها"
        icon={<HiCollection className="w-20 h-20" />}
        color="green"
        value={projects}
      />
    </div>
  );
}

export default DashboardStats;
