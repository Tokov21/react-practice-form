import React from "react";

const Input = ({ value, handleChange, labelBefore, labelAfter, ...rest }) => {
  console.log(rest);

  return (
    <div>
      <label>
        {labelBefore}

        <input
          {...rest}
          // type={type}
          // name={name}
          // id={id}
          value={value}
          // placeholder={placeholder}
          // required={required}
          onChange={handleChange}
        />

        {labelAfter}
      </label>
    </div>
  );
};

export default Input;
