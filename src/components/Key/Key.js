import React, { Component } from "react";
import "../../css/Key.css";

class Key extends Component {
  render() {
    const { keyValue, keyType } = this.props;
    return (
      <div className={`key-container ${keyType}`}>
        <p className="key-value">{keyValue}</p>
      </div>
    );
  }
}

export default Key;
