import { useForm } from "react-hook-form";
import RHFSelect from "../../../ui/RHFSelect";
import Loading from "../../../ui/Loading";
import { useQueryClient } from "@tanstack/react-query";
import useChangeUserStatus from "./useChangeUserStatus";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { isPending, changeUserStatus } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["users", userId],
          });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="تغییر وضعیت"
          register={register}
          options={options}
        />
        <div className="!mt-8">
          {isPending ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeUserStatus;
