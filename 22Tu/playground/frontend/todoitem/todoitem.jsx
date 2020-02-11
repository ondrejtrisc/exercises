import React from 'react';
import { Toggle } from '../toggle/toggle.jsx';

export class TodoItem extends React.Component {
  render = () => {
    return (
      <>
        <Toggle />
        <p>{this.props.text}</p>
      </>
    );
  };
}