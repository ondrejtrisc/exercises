import React from 'react';
import ReactDOM from 'react-dom';
import List from './List/List.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <List
          url="http://www.cbp-exercises.test/29Th/morning/api/"
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
