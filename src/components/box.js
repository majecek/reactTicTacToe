import React, { Component } from "react";

class Box extends Component {

  render() {
    return (
      <button
        className="box"
        onClick={() => this.props.onHandleClick(this.props.rowIndex)}>
        {this.props.value}
      </button>
    );
  }

}

export default Box;
