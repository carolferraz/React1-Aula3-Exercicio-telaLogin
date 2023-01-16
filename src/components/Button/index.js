import "./styles.css";


function Button(props) {
    return (
        <a target="_blank" rel="noreferrer noopener" href={props.href}>
            <button className="button-login" type="button"> {props.button}</button>
        </a>
    );
}

export default Button