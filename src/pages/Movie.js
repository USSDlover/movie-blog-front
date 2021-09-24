import {Link} from 'react-router-dom';
import {Component, Fragment} from 'react';

export default class Movie extends Component {
    state = {
        movie: {},
        isLoaded: false,
        error: null
    };

    componentDidMount() {
        const movieId = this.props.match.params.id;
        fetch(`http://localhost:4000/v1/movie/${movieId}`)
            .then(response => {
                if (response.status !== 200) {
                    let err = Error;
                    err.message = 'Invalid response code: ' + response.status;
                    this.setState({ error: err });
                }
                return response.json();
            })
            .then(json => {
                this.setState({
                    movie: json.movie,
                    isLoaded: true
                }, (error) => {
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
        const {isLoaded, movie, error} = this.state;

        if (movie.genre) {
            movie.genre = Object.values(movie.genre);
        } else {
            movie.genre = [];
        }

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <Fragment>
                    <Link to={'/movies'}>
                        <p className={'text-gray-800 text-lg'}>{'< Back to list'}</p>
                    </Link>
                    <br/>
                    <h2>Movie {movie.title} ({movie.year})</h2>
                    <div className={'row-auto flex justify-between'}>
                        <div>MPAA Rating: {movie.mpaa_rating}</div>
                        {
                            movie.genre.map(genre =>
                                (<div
                                    style={{'border-radius': '.5rem'}}
                                    className={'bg-blue-800 text-center p-1 text-gray-200 text-sm'}>
                                    {genre}</div>))
                        }
                    </div>
                    <hr className={'my-3'}/>
                    <table className={'table'}>
                        <tbody>
                        <tr>
                            <td><strong>Title:</strong></td>
                            <td>{movie.title}</td>
                        </tr>
                        <tr>
                            <td><strong>Description</strong></td>
                            <td>{movie.description}</td>
                        </tr>
                        <tr>
                            <td><strong>Runtime</strong></td>
                            <td>{movie.runtime}</td>
                        </tr>
                        </tbody>
                    </table>
                </Fragment>
            );
        }
    }
}
