import { useMutation } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../services/proposalServis";
import toast from "react-hot-toast";

export default function useChangeProposalStatus() {
  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => toast.error(error?.response?.data?.message),
  });

  return { isUpdating, changeProposalStatus };
}
