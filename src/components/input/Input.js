import './Input.css';

export default function Input(props) {
    return (
        <div className={`field ${props.className}`}>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.type}
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </div>
    );
}