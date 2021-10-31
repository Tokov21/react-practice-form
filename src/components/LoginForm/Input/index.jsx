import React from "react";

const Input = ({ value, handleChange, labelBefore, labelAfter, ...rest }) => {
  return (
    <div>
      <label>
        {labelBefore}

        <input value={value} onChange={handleChange} {...rest} />

        {labelAfter}
      </label>
    </div>
  );
};

export default Input;
