import {Link} from 'react-router-dom';

export default function Header(props) {

    return (
        <nav className={'flex justify-evenly bg-gray-800 bg-gradient-to-l p-2 shadow-md fixed top-0 left-0 right-0'}>
            <Link to={'/'} className={'text-blue-50 hover:text-blue-400'}>Home</Link>
            <Link to={'/movies'} className={'text-blue-50 hover:text-blue-400'}>Movies</Link>
            <Link to={'/categories'} className={'text-blue-50 hover:text-blue-400'}>Categories</Link>
        </nav>
    );
}
