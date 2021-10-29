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

    console.log(
      `${this.state.login} ${this.state.password} ${this.state.remember}`
    );

    this.handleReset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>LOGIN TO YOUR ACCOUNT</h1>
        <Inputs state={this.state} handleChange={this.handleChange} />
        <Buttons handleSubmit={this.handleSubmit} />
      </form>
    );
  }
}

// LoginForm.propTypes = {};

export default LoginForm;
