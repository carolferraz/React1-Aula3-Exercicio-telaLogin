import "./styles.css";
import PropTypes from "prop-types";

const Subtitle = ( {subtitle, borderBottom} ) => {
    if (subtitle === ""){
        borderBottom = "none";
    }

    return (
        <h2 className="subtitle" style={ {borderBottom} }> {subtitle}</h2>
    );
};

Subtitle.propTypes = {
    subtitle: PropTypes.string.isRequired,
};

export default Subtitle