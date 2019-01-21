import React, { Component } from "react";
import "../../css/Calculator.css";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

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
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
