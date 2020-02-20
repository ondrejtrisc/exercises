import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="game">
                <h2>{this.props.name}</h2>
                <img src={this.props.image_url} alt=""/>
                
            </div>
        );
    }
}