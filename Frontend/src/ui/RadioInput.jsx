function RadioInput({
  label,
  value,
  register,
  name,
  id,
  validationSchema,
  watch,
  errors,
}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
        className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
