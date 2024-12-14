import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import toPersianNumbersWithComma, { toPersianNumbers } from "../../utils/toPersianNumbers";
import Stat from "../../ui/Stat";

function DashboardStats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-3 min-[0px]:max-md:grid-cols-1 gap-8">
      <Stat
        title="درخواست ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        color="primary"
        value={toPersianNumbers(numOfProposals)}
      />
      <Stat
        title="درخواست های قبول شده"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        color="green"
        value={toPersianNumbers(acceptedProposals.length)}
      />
      <Stat
        title="کیف پول"
        icon={<HiCollection className="w-20 h-20" />}
        color="orange"
        value={toPersianNumbersWithComma(balance)}
      />
    </div>
  );
}

export default DashboardStats;
