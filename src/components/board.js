import React, { Component } from "react";
import Row from "./row";

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      boardValues: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(boardIndex, rowIndex) {
    // console.log(`box boardIndex ${boardIndex} rowIndex ${rowIndex} value ${value}`);
    let newValue = 'X';
    if (this.state.clicks % 2 === 0) {
      newValue = '0';
    }
    const boardValues = this.state.boardValues;
    boardValues[boardIndex][rowIndex] = newValue;
    this.setState({
      boardValues,
      clicks: this.state.clicks + 1
    });
    // console.log(this.state);
  }

  render() {
    const boards = this.state.boardValues.map((rows, index) => {
      return <Row rowValues={rows} boardIndex={index} key={index} onHandleClick={this.handleClick}/>
    });

    return (
      <div>
        {boards}
      </div>
    )

  }

}

export default Board;
