import React, { Component } from "react";
import Buttons from "./Buttons";
import Inputs from "./Inputs";
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

    if (
      regexEmail.test(this.state.login) &&
      regexPass.test(this.state.password)
    ) {
      console.log(
        `${this.state.login} ${this.state.password} ${this.state.remember}`
      );

      this.handleReset();
    }

    if (regexEmail.test(this.state.login) === false) {
      alert("Имеил должен быть: текст@текст.домен");
    }

    if (regexPass.test(this.state.password) === false) {
      alert(
        "Пароль должен иметь: одну заглавную, одну прописную буквы, одну цифру и один специальный символ"
      );
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>LOGIN TO YOUR ACCOUNT</h1>
        <Inputs state={this.state} handleChange={this.handleChange} />
        <Buttons />
      </form>
    );
  }
}

// LoginForm.propTypes = {};

export default LoginForm;
