import React, { Component } from "react";
class Keypad extends Component {
  render() {
    const { numbers } = this.props;
    const numberKeys = numbers.map(number => <p key={number}>{number}</p>);
    const { operators } = this.props;
    const operatorKeys = operators.map(operator => (
      <p key={operator}>{operator}</p>
    ));
    return (
      <div className="keypad-container">
        <div className="numbers-container">{numberKeys}</div>
        <div className="operators-container">{operatorKeys}</div>
      </div>
    );
  }
}

export default Keypad;
