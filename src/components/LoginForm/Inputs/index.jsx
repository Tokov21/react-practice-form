import React from "react";

const Input = (props) => {
  const { login, password, remember, handleChange } = props;

  return (
    <div>
      <label htmlFor="login">
        <input
          type="text"
          name="login"
          id="login"
          value={login}
          onChange={handleChange}
          required
          placeholder="Email"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
          required
          placeholder="Password"
        />
      </label>
      <label htmlFor="remember">
        <input
          type="checkbox"
          name="remember"
          id="remember"
          checked={remember}
          onChange={handleChange}
        />
        Remember me
      </label>
    </div>
  );
};

export default Input;
