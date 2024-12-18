import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const { createProposal, isCreating } = useCreateProposal();

  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => {
          onClose();
          reset();
        },
      }
    );
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="قیمت"
        name="price"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "قیمت ضروری است",
          minLength: {
            value: 7,
            message: "حداقل 7 کاراکتر وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="مدت زمان"
        name="duration"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "مدت زمان ضروری است",
          minLength: {
            value: 1,
            message: "حداقل 1 کاراکتر وارد کنید",
          },
        }}
        errors={errors}
      />
      <div className="!mb-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProposal;
