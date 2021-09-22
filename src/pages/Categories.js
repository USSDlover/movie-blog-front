import {Link, useRouteMatch} from 'react-router-dom';

export default function Categories(props) {
    const {path} = useRouteMatch();

    return (
        <ul className={'list-disc'}>
            <li className={'text-sm'}>
                <Link to={`${path}/dram`}>Dram</Link>
            </li>
        </ul>
    );
}
