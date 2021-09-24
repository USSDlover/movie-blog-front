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

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <Fragment>
                    <Link to={'/movies'}>
                        🔙
                    </Link>
                    <br/>
                    <h2>Movie detail</h2>
                    <table>
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
