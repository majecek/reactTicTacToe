import React, { Component } from "react";
import Box from "./box";

class row extends Component {

  render() {
    const boxes = this.props.rowValues.map((value, index) => {
      return (
        <Box
          value={value}
          key={index}
          rowIndex={index}
          onRowClick={this.props.onBoardClick(this.props.boardIndex, index)}/>
      );
    });

    return (
      <div>
        {boxes}
      </div>
    );
  }
}

export default row;
