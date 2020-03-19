import React, { Component } from 'react';

class Cell extends Component {
  render () {
    return (
      <div className="cell" onClick={this.props.handle}>{this.props.symbol}</div>
    );
  }
}

export default Cell;