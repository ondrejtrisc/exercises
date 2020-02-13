import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './index.html';
import { Seat } from './seat/seat.jsx';

class App extends React.Component {

  state = {
    selectedSeat: '0'
  }

  select = number => {
    this.setState({selectedSeat: number});
  };

  render = () => {

    const data = [
      {
        number: '8',
        status: 'free',
      },
      {
        number: '9',
        status: 'occupied',
      },
      {
        number: '10',
        status: 'free',
      },
      {
        number: '11',
        status: 'free',
      },
      {
        number: '12',
        status: 'occupied',
      },
      {
        number: '13',
        status: 'occupied',
      },
      {
        number: '14',
        status: 'free',
      },
      {
        number: '15',
        status: 'occupied',
      },
    ];

    let seats = data.map(seat => {
      if (seat.number === this.state.selectedSeat) {
        return (<div><Seat number={seat.number} status="selected" /></div>);
      }
      else if (seat.status === 'free') {
        return (<div onClick={() => { this.select(seat.number) }}>
          <Seat number={seat.number} status={seat.status} />
        </div>);
      }
      else {
        return (<div><Seat number={seat.number} status={seat.status} /></div>);
      }
    });
  
    return (
      <>
        <div className="carriage-row">
          {seats[0]}
          {seats[1]}
          <div className="aisle-spacer"></div>
          {seats[2]}
          {seats[3]}
        </div>
        <div className="carriage-row">
          {seats[4]}
          {seats[5]}
          <div className="aisle-spacer"></div>
          {seats[6]}
          {seats[7]}
        </div>
      </>  
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));

{/* <div className="train-carriage">
        <div className="carriage-row">
          <Seat id="s8" number="8" status="free" />
          <Seat number="9" status="occupied"/>
          <div className="aisle-spacer"></div>
          <Seat id="s10" number="10" status="free" />
          <Seat number="11" status="occupied"/>
        </div>
        <div className="train-carriage">
          <div className="carriage-row">
          <Seat number="12" status="occupied"/>
          <Seat id="s13" number="13" status="free" />
          <div className="aisle-spacer"></div>
          <Seat number="14" status="occupied"/>
          <Seat id="s15" number="15" status="free" />
          </div>
        </div>
      </div>   */}