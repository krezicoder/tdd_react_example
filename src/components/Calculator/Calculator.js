import React, { Component } from "react";
import "../../css/Calculator.css";
import Display from "../Display/Display";

class Calculator extends Component {
  render() {
    return (
      <div className="calculator-container">
        <Display />
      </div>
    );
  }
}

export default Calculator;
