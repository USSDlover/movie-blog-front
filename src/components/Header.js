import {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <nav className={'flex justify-evenly bg-gray-800 bg-gradient-to-l p-2 shadow-md fixed top-0 left-0 right-0'}>
                <a className={'text-blue-50 hover:text-blue-400'} href="#">Home</a>
                <a className={'text-blue-50 hover:text-blue-400'} href="#">About</a>
                <a className={'text-blue-50 hover:text-blue-400'} href="#">Contact</a>
            </nav>
        );
    }
}
