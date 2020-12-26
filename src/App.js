import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form />
      </>
    );
  }
}

export default App;
