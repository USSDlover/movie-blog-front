import {Link} from 'react-router-dom';
import {Component, Fragment} from 'react';

export default class Movie extends Component {
    state = {
        movie: {},
        isLoaded: false
    };

    componentDidMount() {
        const movieId = this.props.match.params.id;
        fetch(`http://localhost:4000/v1/movie/${movieId}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    movie: json.movie,
                    isLoaded: true
                })
            })
    }

    render() {
        const {isLoaded, movie} = this.state;

        if (!isLoaded) {
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
