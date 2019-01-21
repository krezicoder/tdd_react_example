import React, { Component } from "react";
class Keypad extends Component {
  render() {
    const { numbers } = this.props;
    const numberKeys = numbers.map(number => <p key={number}>{number}</p>);
    return (
      <div className="keypad-container">
        <div className="numbers-container">{numberKeys}</div>
      </div>
    );
  }
}

export default Keypad;
