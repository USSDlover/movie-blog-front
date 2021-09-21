import {Component} from 'react';

export default class Content extends Component {
    render() {
        return (
            <div className={'flex justify-center w-full h-full text-blue-100 bg-blue-800 pt-12 pb-10'}>
                <p>This is content</p>
            </div>
        );
    }
}