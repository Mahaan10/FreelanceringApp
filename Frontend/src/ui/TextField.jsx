function TextField({
  label,
  name,
  register,
  type = "text",
  required,
  validationSchema,
  errors,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        type={type}
        id={name}
        {...register(name, validationSchema)}
        className="textField_input"
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
