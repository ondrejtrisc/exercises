import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      values: {
        name: '',
        email: ''
      }
    };
  }

  updateInput = fieldName => event => {

    const newValue = event.target.value;
    
    // this.setState({
    //   values: {
    //     [fieldName]: newValue
    //   }
    // });

    this.setState(prevState => { 
      return {
        ...prevState,
        values: {
          ...prevState.values,
          [fieldName]: newValue
        }
      }
    });
  };

  render() {
    return (
      <div className="App">
        My Form:
        <MyForm values={this.state.values} handleChange={this.updateInput}  />
      </div>
    );
  }
}

export default App;

class MyForm extends Component {

  render() {

    const {values, handleChange} = this.props;
    const {name, email} = values;

    return (
      <form action="">
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" value={name} onChange={handleChange('name')}/><br />
        <label htmlFor="email">Email: </label>
        <input id="email" type="text" value={email} onChange={handleChange('email')}/>
      </form>
    );
  }
}
