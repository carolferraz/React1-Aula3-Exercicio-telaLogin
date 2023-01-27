import "./styles.css";
import PropTypes from "prop-types";
const Input = ( {label, hide, color, borderBottom, onChange, onFocus} ) => {
  return (
    <div className="input-login">
      <label htmlFor="input-" style={ {color} } > {label}</label>
      <input name="input" style={ {color, borderBottom} } type={hide ? "password" : "text"} onChange={onChange} onFocus={onFocus}></input>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  borderBottom:  PropTypes.string,
  hide: PropTypes.bool,
}

Input.defaultProps = {
  color: "ffffffcc",
  borderBottom: "1px solid ffffffcc",
}

export default Input;
