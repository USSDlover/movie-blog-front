import {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

export default class Movies extends Component {
    state = {
        movies: [],
        isLoaded: false
    };

    componentDidMount() {
        fetch('http://localhost:4000/v1/movies')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    movies: json.movies,
                    isLoaded: true
                })
            })
    }

    render() {
        const { isLoaded, movies } = this.state;

        if (!isLoaded) {
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
