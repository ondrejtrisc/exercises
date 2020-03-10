import React, { Component } from 'react';
import './App.css';

const url = 'https://classes.codingbootcamp.cz/api/attendance/coding-bootcamp/winter-2020/2020-03-10';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      date: null,
      attendance: []
    }
  }

  async componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('data', data);
      this.setState({
        ...data,
        loading: false
      });
    }
    catch (err) {
      console.log('err', err);
    }
  };

  render() {
    console.log('state', this.state);
    const attendanceComponents = this.state.attendance.map(getAttendenceRecord);
    return (
      <div className="App">
        {this.state.loading ?
          'Loading...' :
          <AttendanceRecordsList attendanceComponents={attendanceComponents} date={this.state.date} />
        }
      </div>
    );
  }
}

export default App;

const getAttendenceRecord = item => {
  console.log('item', item);
  return (
    <div key={`attendanceRecord-${item.id}`}>
     <h4>{item.name}</h4>
      <p>{item.from ? item.from : 'Absent'}</p> 
    </div>
  );
};

const AttendanceRecordsList = props => {
  const {attendanceComponents, date} = props;
  return (
    <>
      <strong>{date}</strong>
      {attendanceComponents}
    </>
  );
}