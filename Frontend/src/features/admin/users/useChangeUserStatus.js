import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUserStatusApi } from "../../../services/authService";

export default function useChangeUserStatus() {
  const { isPending, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => toast.error(error?.response?.data?.message),
  });

  return { isPending, changeUserStatus };
}
