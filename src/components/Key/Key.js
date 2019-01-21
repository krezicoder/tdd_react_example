import React, { Component } from "react";
import "../../css/Key.css";

class Key extends Component {
  render() {
    const { keyValue } = this.props;
    return <div className="key-continer">{keyValue}</div>;
  }
}

export default Key;
