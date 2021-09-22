import {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

export default class Movies extends Component {
    state = {movies: []};

    componentDidMount() {
        this.setState({
            movies: [
                {id: 1, title: 'Superman', runtime: 170},
                {id: 2, title: 'Bat woman', runtime: 150},
                {id: 3, title: 'Godfather', runtime: 140},
            ]
        })
    }

    render() {
        return (
            <Fragment>
                <h1>Movies</h1>
                <ul className={'list-disc'}>
                    {
                        this.state.movies.map((movie) => (
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
