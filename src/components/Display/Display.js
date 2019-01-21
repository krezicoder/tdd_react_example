import React, { Component } from "react";
import "../../css/Display.css";

class Display extends Component {
  render() {
    const { displayValue } = this.props;
    return <div className="display-container">{displayValue}</div>;
  }
}

export default Display;
