import React from 'react';

export class Term extends React.Component {
  render () {
    return (
    <>
      <h1>{this.props.name}</h1>
      <p>{this.props.definition}</p>
    </>
    );
  }
}