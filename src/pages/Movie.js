import {Link} from 'react-router-dom';
import {Component, Fragment} from 'react';

export default class Movie extends Component {
    state = {movie: {}};

    componentDidMount() {
        this.setState({
            movie: {
                id: this.props.match.params.id,
                title: 'Some movie',
                runtime: 150
            }
        })
    }

    render() {
        return (
            <Fragment>
                <Link to={'/movies'}>
                    🔙
                </Link>
                <br/>
                <h2>Movie detail for id: {this.state.movie.id}</h2>
                <table>
                    <tbody>
                    <tr>
                        <td><strong>Title:</strong></td>
                        <td>{this.state.movie.title}</td>
                    </tr>
                    <tr>
                        <td><strong>Runtime</strong></td>
                        <td>{this.state.movie.runtime}</td>
                    </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}
