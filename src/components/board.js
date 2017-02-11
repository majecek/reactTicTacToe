import React, { Component } from "react";
import Row from "./row";

class Board extends Component {

  render() {
    return (
      <div>
        <Row />
        <Row />
        <Row />
      </div>
    )
  }
  // constructor(options) {
  //   super(options);
  //   this.state = {
  //     clicks: 0,
  //     boardValues: [
  //       ['-', '-', '-'],
  //       ['-', '-', '-']
  //       // ['-', '-', '-']
  //     ]
  //   };
  //   this.onBoxClick = this.onBoxClick.bind(this);
  // }
  //
  // onBoxClick(event) {
  //   console.log('onBoxClick');
  //   console.log(boardIndex);
  //   console.log(rowIndex);
  //   const newValue = this.state.boardValues[boardIndex][rowIndex] === 'X' ? '0' : 'a';
  //
  //   let boardValues = this.state.boardValues;
  //   boardValues[boardIndex][rowIndex] = newValue;
  //
  //   console.log(boardValues);
  //
  //   this.setState({
  //     boardValues,
  //     clicks: this.state.clicks + 1
  //   });
  // }
  //
  // render() {
  //   const rows = this.state.boardValues.map((row, index) => {
  //     return (
  //       <Row key={index}
  //            rowValues={row}
  //            boardIndex={index}
  //            onBoardClick={() => this.onBoxClick} />
  //     )
  //   });
  //
  //   return (
  //     <div>
  //       {rows}
  //     </div>
  //   );
  // }
}

export default Board;
