import "./styles.css";

function redirectTo(e) {
    e.preventDefault();
    document.location.href="https://discord.com/channels/1014299053149929473/1062175752612745266";
}

function Button(props) {

    return (
        <button className="button-login" type="button" onClick={redirectTo}> {props.button}</button>
    );
}

export default Button