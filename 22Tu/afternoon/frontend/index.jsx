import React from 'react';
import ReactDOM from 'react-dom';
import { ContactList } from './contact-list/contact-list.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {

  render() {
    return (
      <>
        <ContactList />
      </>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
