import ProposalsTable from "../features/single project/ProposalsTable";
import SingleProjectHeader from "../features/single project/SingleProjectHeader";
import useSingleProject from "../features/single project/useSingleProject";
import Loading from "../ui/Loading";

function SingleProject() {
  const { isLoading, project } = useSingleProject();

  if (isLoading) return <Loading />;

  return (
    <div>
      <SingleProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}

export default SingleProject;
