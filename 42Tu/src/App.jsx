import React, { Component } from 'react';
import './App.css';
import { Display } from './Display.jsx';
import { CounterButton } from './CounterButton.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 5
    };
  }

  incrementCount = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        count: prevState.count + 1,
      }
    });
  }

  decrementCount = () => {
    this.setState(prevState => {

      if (prevState.count !== 0) {
        return {
          ...prevState,
          count: prevState.count - 1,
        }
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="button"><CounterButton value="-" handleClick={this.decrementCount} /></div>
        <Display count={this.state.count} />
        <div className="button"><CounterButton value="+" handleClick={this.incrementCount} /></div>
      </div>
    );
  }
}

export default App;
