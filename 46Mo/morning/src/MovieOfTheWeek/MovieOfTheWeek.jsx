import React from 'react';

export default class MovieOfTheWeek extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loaded: false,
            data: null
        };

        this.url = 'http://www.laravel.test/week';
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (this.url) {
            this.setState({ 
                loading: true,
                loaded: false,
                data: null
            })

            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    this.setState({ 
                        loaded: true,
                        data: data
                    })
                })
                .finally(this.setState({
                    loading: false
                }));
        }
    }

    render() {

        let content = (
            <div className="message">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
        if (!this.state.loading && this.state.loaded) {

            content = (
                <>
                    <div className="movie">

                        <img src={this.state.data.movie.poster_url} alt={this.state.data.movie.name} />

                        <div>

                            <h3>{this.state.data.movie.name}</h3>

                            <div className="year">{this.state.data.movie.year}</div>

                            <div className="genres">
                                <span>{this.state.data.genres[0].name}</span>
                            </div>

                            <div className="starring">
                                <h4>Starring:</h4>

                                <div>
                                    <span>{this.state.data.staring[0].name}</span>
                                    <span>{this.state.data.staring[1].name}</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </>
            )
        }
        
        return (
            <section className="weekly-movie">

                <h2>Movie of the week</h2>

                { content }

            </section>
        );
    }
}