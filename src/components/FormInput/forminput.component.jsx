import "./forminput.style.scss";

const FormInput = ({
  type,
  placeholder,
  onchange,
  name,
  inputRef,
  multiple,
  options,
}) => {
  if (type === "textarea") {
    return (
      <textarea
        placeholder={placeholder}
        onChange={onchange}
        name={name}
      ></textarea>
    );
  }
  if (type === "select") {
    return (
      <select onChange={onchange} name={name}>
        <option value="none" selected disabled hidden className="option">
          {" "}
          Space's Category
        </option>
        {options.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
    );
  }
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      onChange={onchange}
      name={name}
      ref={inputRef}
      multiple={multiple}
    />
  );
};

export default FormInput;
