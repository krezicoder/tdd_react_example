import React, { Component } from "react";
import "../../css/Calculator.css";
import Display from "../Display/Display";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: 0
    };
  }
  render() {
    return (
      <div className="calculator-container">
        <Display displayValue={this.state.displayValue} />
      </div>
    );
  }
}

export default Calculator;
