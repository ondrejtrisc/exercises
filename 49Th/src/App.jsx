import React, { Component } from 'react';
import './App.css';
import Cell from './Cell.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symbols: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      player: 'x',
      ended: false
    };
  }

  handleClick(player, n, m) {
    return () => {

      if (this.state.symbols[n][m] === '' && !this.state.ended) {

        let newSymbols = this.state.symbols;
        newSymbols[n][m] = player;
        this.setState({
          symbols:newSymbols
        });

        if ( (player === newSymbols[0][0] && player === newSymbols[0][1] && player === newSymbols[0][2])
          || (player === newSymbols[1][0] && player === newSymbols[1][1] && player === newSymbols[1][2])
          || (player === newSymbols[2][0] && player === newSymbols[2][1] && player === newSymbols[2][2])
          || (player === newSymbols[0][0] && player === newSymbols[1][0] && player === newSymbols[2][0])
          || (player === newSymbols[0][1] && player === newSymbols[1][1] && player === newSymbols[2][1])
          || (player === newSymbols[0][2] && player === newSymbols[1][2] && player === newSymbols[2][2])
          || (player === newSymbols[0][0] && player === newSymbols[1][1] && player === newSymbols[2][2])
          || (player === newSymbols[0][2] && player === newSymbols[1][1] && player === newSymbols[2][0])
        )
        {
          alert(player + ' has won');
          this.setState({
            ended: true
          })
        }
  
        if (player === 'x') {
          this.setState({
            player: 'o'
          });
        }
        else {
          this.setState({
            player: 'x'
          });
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="board">
          <Cell className="cell" key="1" symbol={this.state.symbols[0][0]} handle={this.handleClick(this.state.player, 0, 0)}/>
          <Cell className="cell" key="2" symbol={this.state.symbols[0][1]} handle={this.handleClick(this.state.player, 0, 1)}/>
          <Cell className="cell" key="3" symbol={this.state.symbols[0][2]} handle={this.handleClick(this.state.player, 0, 2)}/>
          <Cell className="cell" key="4" symbol={this.state.symbols[1][0]} handle={this.handleClick(this.state.player, 1, 0)}/>
          <Cell className="cell" key="5" symbol={this.state.symbols[1][1]} handle={this.handleClick(this.state.player, 1, 1)}/>
          <Cell className="cell" key="6" symbol={this.state.symbols[1][2]} handle={this.handleClick(this.state.player, 1, 2)}/>
          <Cell className="cell" key="7" symbol={this.state.symbols[2][0]} handle={this.handleClick(this.state.player, 2, 0)}/>
          <Cell className="cell" key="8" symbol={this.state.symbols[2][1]} handle={this.handleClick(this.state.player, 2, 1)}/>
          <Cell className="cell" key="9" symbol={this.state.symbols[2][2]} handle={this.handleClick(this.state.player, 2, 2)}/>
        </div>
      </div>
    );
  }
}

export default App;
