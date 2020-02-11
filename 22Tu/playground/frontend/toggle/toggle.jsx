import React from 'react';
import './toggle.scss';

export class Toggle extends React.Component {
  state = {
    img: 'check'
  };

  change = () => {
    if (this.state.img === 'check') {
      this.setState({img: 'cross'});
    }
    else if (this.state.img === 'cross') {
      this.setState({img: 'question'});
    }
    else {
      this.setState({img: 'check'});
    }
  };

  render = () => {
    return (
      <div className={`picture ${this.state.img}`} onClick={this.change}></div>
    );
  };
}