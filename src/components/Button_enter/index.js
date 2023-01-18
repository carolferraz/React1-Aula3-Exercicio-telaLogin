import "./styles.css";

function Button(props) {
  return (
    <>
      <button
        className="button-login"
        type="button"
        onClick={props.redirecionar}
      >
        {props.button}
      </button>
    </>
  );
}

export default Button;
