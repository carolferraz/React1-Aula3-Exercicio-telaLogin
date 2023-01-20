import "./styles.css";
import PropTypes from "prop-types";
const Input = ( {label, hide, borderBottom, changeInput} ) => {
  return (
    <div className="input-login">
      <label for="input-"> {label}</label>
      <input name="input" style={ {borderBottom} } type={hide ? "password" : "text"} onChange={changeInput}></input>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  hide: PropTypes.bool,
}

Input.defaultProps = {
  borderBottom: "1px solid rgba(255, 255, 255, 0.8)",
}

export default Input;
