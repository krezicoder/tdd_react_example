import React, { Component } from "react";
import "../../css/Calculator.css";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: 0,
      numbers: []
    };
  }
  render() {
    return (
      <div className="calculator-container">
        <Display displayValue={this.state.displayValue} />
        <Keypad numbers={this.state.numbers} />
      </div>
    );
  }
}

export default Calculator;
