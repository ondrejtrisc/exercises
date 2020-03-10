import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      character: null,
      characterFilms: [],
      loading: true
    };
  }

  async componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const url = "https://swapi.co/api/people/1/"
      const response = await fetch(url);
      const data = await response.json();

      const filmPromises = data.films.map(async filmUrl => {
        const filmResponse = await fetch(filmUrl);
        const filmData = await filmResponse.json();
        return filmData;
      });
      const films = await Promise.all(filmPromises);
      this.setState({
        character: data,
        characterFilms: films,
        loading: false
      });      
    }
    catch (err) {
      console.log('err', err);
    }
  };

  render() {
    console.log('films', this.state.characterFilms);

    const films = this.state.characterFilms.map((film, index) => {
      return <p key={index}>{film.title} ({film.release_date.slice(0, 4)})</p>
    });

    return (
      <div className="App">
        {this.state.loading ?
          'Loading...' :
          <div>
            Name: {this.state.character.name}<br />
            Eye color: {this.state.character.eye_color}<br /><br />
            in: <br />
            {
              films
            }
          </div>
        }
      </div>
    );
  }
}

export default App;


