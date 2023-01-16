import "./styles.css";

function Anchor(props) {
    return (
        <a className="anchor-lost-password" target="_blank" rel="noreferrer noopener" href={props.href}>
        <p> {props.anchor}</p>
        </a>
    );
}

export default Anchor