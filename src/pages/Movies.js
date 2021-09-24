import {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

export default class Movies extends Component {
    state = {
        movies: [],
        isLoaded: false,
        error: null
    };

    componentDidMount() {
        fetch('http://localhost:4000/v1/movies')
            .then(response => {
                console.log(response);
                if (response.status !== 200) {
                    let err = Error;
                    err.message = 'Invalid response code: ' + response.status;
                    this.setState({ error: err });
                }
                return response.json();
            })
            .then(json => {
                this.setState({
                    movies: json.movies,
                    isLoaded: true
                },  (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });
            })
            .catch(err => {
                this.setState({
                    isLoaded: true,
                    error: err
                });
            });
    }

    render() {
        const { isLoaded, movies, error } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <Fragment>
                    <h1>Movies</h1>
                    <ul className={'list-disc'}>
                        {
                            movies.map((movie) => (
                                <li className={'text-sm underline cursor-pointer mt-3'}
                                    key={movie.id}>
                                    <Link to={`/movies/${movie.id}`}>
                                        {movie.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </Fragment>
            );
        }
    }
}
