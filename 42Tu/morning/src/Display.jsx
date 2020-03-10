import { Component } from 'react';

export class Display extends Component {

  render = () => {

    const { count } = this.props;

    return (
      count
    );
  }
}
