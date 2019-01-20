import React, { Component } from "react";

import "./css/App.css";
import Calculator from "./components/Calculator/Calculator";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Calculator />
      </div>
    );
  }
}

export default App;
