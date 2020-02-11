import React from 'react';
import './message.scss';

export class Message extends React.Component {
  
  state = {
    likes: 0
  }

  like = () => {
    this.setState({likes: this.state.likes+1});
  };
  
  render = () => {
    return (
      <div className={`block block--${this.props.side}`}>
        <div className={this.props.name}></div>
        <div className={`message message--${this.props.side}`}>
          {this.props.text}
        </div>
        <button onClick={this.like}>Like {this.state.likes}</button>
      </div>
    );
  };
}