import React, { Component } from "react";
import Box from "./box";

class row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      rowValues: [ '-', '-', '-']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, value) {
    console.log(`box index ${index} value ${value}`);
    let newValue = 'X';
    if (this.state.clicks % 2 === 0) {
      newValue = '0';
    }
    const rowValues = this.state.rowValues;
    rowValues[index] = newValue;
    this.setState({
      rowValues,
      clicks: this.state.clicks + 1
    })
    console.log(this.state);
  }

  render() {
    const boxes = this.state.rowValues.map((value, index) => {
      return <Box onHandleClick={this.handleClick} value={value} key={index} rowIndex={index} />
    });
    return (
      <div>
        {boxes}
      </div>
    )
  }

  // render() {
  //   const boxes = this.props.rowValues.map((value, index) => {
  //     return (
  //       <Box
  //         value={value}
  //         key={index}
  //         rowIndex={index}
  //         onRowClick={this.props.onBoardClick(this.props.boardIndex, index)}/>
  //     );
  //   });
  //
  //   return (
  //     <div>
  //       {boxes}
  //     </div>
  //   );
  // }
}

export default row;
