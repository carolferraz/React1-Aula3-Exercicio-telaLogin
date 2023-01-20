import "./styles.css";
import PropTypes from "prop-types";
import { useState } from "react";

  const Button = ( {addAction, button, background, color, width, alignSelf} ) => {
    const [ isHover, setIsHover] = useState(false);

    const hoverMouseEnter = () => {
      setIsHover(true);
    }
  
    const hoverMouseLeave = () => {
      setIsHover(false);
    }

  return (
    <>
      <button
        className="button-login"
        type="button"
        style={ { background: isHover ? "#6b2134" :  background , color, width, alignSelf } }
        onClick={addAction}
        onMouseEnter={hoverMouseEnter}
        onMouseLeave={hoverMouseLeave}
      >
        {button}
      </button>
    </>
  );
};

Button.propTypes = {
  addAction: PropTypes.func.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  alignSelf: PropTypes.string,
}

Button.defaultProps = {
  background: "#a13854",
  color: "#ffffffcc",
  width: "100%",
}

export default Button;
