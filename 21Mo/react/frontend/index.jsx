import React from 'react';
import ReactDOM from 'react-dom';
import { Term } from './term/term.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Term name="Antidisestablishmentarianism" definition="A political position that developed in 19th-century Britain in opposition to Liberal proposals for the disestablishment of the Church of England—meaning the removal of the Anglican Church's status as the state church of England, Ireland, and Wales. The establishment was maintained in England, but in Ireland, the Church of Ireland (Anglican) was disestablished in 1871. In Wales, four Church of England dioceses were disestablished in 1920 and became the Church in Wales." />
        <Term name="Disestablishmentarianism" definition="The opposite of antidisestablishmentarianism." />
      </>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
