import React, { Component } from 'react';
import './CounterButton.css';

export class CounterButton extends Component {

  render = () => {

    const { value, handleClick } = this.props;

    return (
      <button onClick={handleClick}>{value}</button>
    );
  }
}