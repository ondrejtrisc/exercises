import React from 'react';
import './contact.css';

export class Contact extends React.Component {
  
  state = {
    calling: false,
  }

  handleClick = () => {
    if (this.state.calling) {
      this.setState({calling: false});
    }
    else {
      this.setState({calling: true});
    }
  }
  
  render = () => {

    let contactClass = 'contact';
    if (this.state.calling) {
      contactClass += ' contact--calling';
    }

    return (
      <div className={contactClass}>
        <div className={`contact__avatar contact__avatar--${this.props.gender}`}></div>
        <div className="contact__body">
          <div className="contact__name">
            {this.props.name}
          </div>
          <div className="contact__phone">
            {this.props.number}
          </div>
        </div>
        <button className="contact__callbtn" onClick={this.handleClick}></button>
      </div>
    );
  }
};
