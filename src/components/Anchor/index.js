import "./styles.css";

function Anchor(props) {
    return (
        <a href="http://google.com" className="anchor-lost-password" target="_blank" rel="noreferrer noopener">
        <p> {props.anchor}</p>
        </a>
    );
}

export default Anchor