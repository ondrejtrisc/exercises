import React from 'react';
import ReactDOM from 'react-dom';
import { Toggle } from './toggle/toggle.jsx';
import { TodoItem } from './todoitem/todoitem.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <TodoItem text="take out the trash" />
        <TodoItem text="buy vegetables" />
        <TodoItem text="pay the bills" />
      </>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
