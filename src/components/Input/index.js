import "./styles.css";
import PropTypes from "prop-types";
const Input = ( {label, hide, color, borderBottom, onChange} ) => {
  return (
    <div className="input-login">
      <label for="input-"> {label}</label>
      <input name="input" style={ {color, borderBottom} } type={hide ? "password" : "text"} onChange={onChange}></input>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  hide: PropTypes.bool,
}

Input.defaultProps = {
  color: "ffffffcc",
  borderBottom: "1px solid ffffffcc",
}

export default Input;
