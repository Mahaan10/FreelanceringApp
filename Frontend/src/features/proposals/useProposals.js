import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalServis";

export default function useProposals() {
  const { isLoading, data } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposalsApi,
  });

  const { proposals } = data || {};
  return { isLoading, proposals };
}
