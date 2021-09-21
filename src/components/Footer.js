import {Component} from 'react';

export default class Footer extends Component {
    date = new Date().getFullYear();

    render() {
        return (
            <footer className={'fixed text-xs bottom-0 left-0 right-0 p-2 bg-gray-900 text-gray-300 text-center'}>
                Copyright &copy; Askme {this.date}
            </footer>
        );
    }
}