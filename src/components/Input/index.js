import "./styles.css";

function Input(props) {
  return (
    <div className="input-login">
      <label for="input-"> {props.label}</label>
      <input name="input" type={props.hide ? "password" : "text"}></input>
    </div>
  );
}

export default Input;
