import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

function SingleProjectHeader({ project }) {
  const moveBack = useMoveBack();

  return (
    <div className="flex items-center gap-4 mb-6 flex-wrap">
      <button onClick={moveBack}>
        <HiArrowRight className="w-5 h-5 text-secondary-500" />
      </button>
      <h1 className="font-black text-secondary-700 text-xl">
        لیست درخواست های {project.title}
      </h1>
    </div>
  );
}

export default SingleProjectHeader;
