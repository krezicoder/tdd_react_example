import React, { Component } from "react";
import Key from "../Key/Key";
class Keypad extends Component {
  render() {
    const { numbers, operators } = this.props;
    const numberKeys = numbers.map(number => (
      <Key key={number} keyValue={number} keyType={"number-key"} />
    ));

    const operatorKeys = operators.map(operator => (
      <Key key={operator} keyValue={operator} keyType={"operator-key"} />
    ));
    return (
      <div className="keypad-container">
        <div className="numbers-container">{numberKeys}</div>
        <div className="operators-container">{operatorKeys}</div>
        <Key keyType={"submit-key"} keyValue={"="} />
      </div>
    );
  }
}

export default Keypad;
