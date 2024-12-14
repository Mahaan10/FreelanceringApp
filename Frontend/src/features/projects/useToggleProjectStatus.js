import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatusApi } from "../../services/projectServis";
import toast from "react-hot-toast";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();

  const { isPendong: isUpdating, mutate: toggleStatus } = useMutation({
    mutationFn: toggleProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isUpdating, toggleStatus };
}
