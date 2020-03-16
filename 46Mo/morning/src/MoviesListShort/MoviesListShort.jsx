import React from 'react';

export default class MoviesListShort extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loaded: false,
            data: []
        };

        this.url = 'http://www.laravel.test/list';
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (this.url) {
            this.setState({ 
                loading: true,
                loaded: false,
                data: []
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
            content = this.state.data.map((movie, index) => {
                return (
                    <li key={index}>
                        {movie.name}
                        <div className="rating">{movie.rating}</div>
                    </li>
                );
            });
        }
        
        return (
            <section className="top-rated">

                <h2>Top rated movies & shows</h2>
                <ul>
                    { content }
                </ul>
                
            </section>
        );
    }
}