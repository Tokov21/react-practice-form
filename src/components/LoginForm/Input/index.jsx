import React from "react";

const Input = ({
  type,
  name,
  id,
  value,
  handleChange,
  placeholder,
  labelBefore,
  labelAfter,
  required,
}) => {
  return (
    <div>
      <label htmlFor={id}>
        {labelBefore}

        <input
          type={type}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
        />

        {labelAfter}
      </label>
    </div>
  );
};

export default Input;
