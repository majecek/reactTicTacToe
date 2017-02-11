import React, { Component } from "react";
import Box from "./box";

class row extends Component {

  render() {
    const boxes = this.props.rowValues.map((value, index) => {
      return <Box
        onHandleClick={() => this.props.onHandleClick(this.props.boardIndex, index)}
        value={value}
        key={index}
        rowIndex={index}/>
    });
    return (
      <div>
        {boxes}
      </div>
    )
  }

}

export default row;
