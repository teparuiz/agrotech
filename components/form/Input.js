import React from "react";
import style from "../../styles/input.module.css";
const Input = (props) => {
  const {
    type = "",
    name = "",
    value,
    onChange,
    placeholder = "",
    pattern = "",
    required = false,
  } = props;

  const _onChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="flex flex-col mb-4">
      <p className={style.input}>
        <b>{name}</b>
      </p>
      <input
        type={type}
        name={name}
        value={value}
        onChange={_onChange}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
      />
    </div>
  );
};

export default Input;
