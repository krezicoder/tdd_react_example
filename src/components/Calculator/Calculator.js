import React, { Component } from "react";
import "../../css/Calculator.css";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: 0,
      numbers: [],
      operators: []
    };
  }
  render() {
    return (
      <div className="calculator-container">
        <Display displayValue={this.state.displayValue} />
        <Keypad numbers={this.state.numbers} operators={this.state.operators} />
      </div>
    );
  }
}

export default Calculator;
