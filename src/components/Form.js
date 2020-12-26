import React, { Component } from "react";
import "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    id: "",
  };
  render() {
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Enter your name please" />
        <button>Submit</button>
      </form>
    );
  }
}
export default Form;
