import React from 'react';
import './weeklyforecast.scss';
import { DayForecast } from '../dayforecast/dayforecast.jsx';
import { forecast } from './forecast.js';

export class WeeklyForecast extends React.Component {
  render () {
    return (
      <div className="week-forecast">
        {/* <DayForecast day="Mon" img="cloudy" tempDay="18" tempNight="11" />
        <DayForecast day="Tue" img="partly-cloudy" tempDay="21" tempNight="15" />
        <DayForecast day="Wed" img="rainy" tempDay="8" tempNight="1" />
        <DayForecast day="Thu" img="snowy" tempDay="-2" tempNight="-7" />
        <DayForecast day="Fri" img="stormy-rain" tempDay="28" tempNight="21" />
        <DayForecast day="Sat" img="stormy" tempDay="35" tempNight="27" />
        <DayForecast day="Sun" img="sunny" tempDay="28" tempNight="22" /> */}
        {/* {
          [
            <DayForecast day="Mon" img="cloudy" tempDay="18" tempNight="11" />,
            <DayForecast day="Tue" img="partly-cloudy" tempDay="21" tempNight="15" />,
            <DayForecast day="Wed" img="rainy" tempDay="8" tempNight="1" />,
            <DayForecast day="Thu" img="snowy" tempDay="-2" tempNight="-7" />,
            <DayForecast day="Fri" img="stormy-rain" tempDay="28" tempNight="21" />,
            <DayForecast day="Sat" img="stormy" tempDay="35" tempNight="27" />,
            <DayForecast day="Sun" img="sunny" tempDay="28" tempNight="22" />,
          ]
        } */}
        {
          forecast.map(day => { 
            return (
              <DayForecast
                  day={day.weekday}
                  img={day.weather}
                  tempDay={day.tempDay}
                  tempNight={day.tempNight}
              />
            );
          })
        }
      </div>
    );
  }
}