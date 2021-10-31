import React, { Component } from "react";
import Buttons from "./Buttons";
import Input from "./Input";
// import PropTypes from "prop-types";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      login: "",
      password: "",
      remember: false,
    };

    this.state = this.initialState;
  }

  handleChange = (event) => {
    const {
      target: { name, value, type, checked },
    } = event;

    const calcValue = type === "checkbox" ? checked : value;

    this.setState({
      [name]: calcValue,
    });
  };

  handleReset = () => {
    this.setState(this.initialState);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm;
    const regexPass =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm;

    const verdictEmail = regexEmail.test(this.state.login);
    const verdictPassword = regexPass.test(this.state.password);

    if (!verdictEmail) {
      alert("Имеил должен быть: текст@текст.домен");
    }

    if (!verdictPassword) {
      alert(
        "Пароль должен иметь: одну заглавную, одну прописную буквы, одну цифру и один специальный символ"
      );
    }

    if (verdictEmail && verdictPassword) {
      console.log(
        `${this.state.login} ${this.state.password} ${this.state.remember}`
      );

      this.handleReset();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>LOGIN TO YOUR ACCOUNT</h1>

        <Input
          type="text"
          name="login"
          id="login"
          value={this.state.login}
          placeholder="Email"
          required={true}
          handleChange={this.handleChange}
        />

        <Input
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          placeholder="Password"
          required={true}
          handleChange={this.handleChange}
        />

        <Input
          type="checkbox"
          name="remember"
          id="remember"
          checked={this.state.remember}
          placeholder="Email"
          required={false}
          handleChange={this.handleChange}
          labelAfter="Remember me"
        />

        <Buttons />
      </form>
    );
  }
}

// LoginForm.propTypes = {};

export default LoginForm;
