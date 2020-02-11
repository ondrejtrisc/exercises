import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './index.html';
import { WeeklyForecast } from './weeklyforecast/weeklyforecast.jsx';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Weekly Weather Forecast</h1>
        <WeeklyForecast />
      </>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
