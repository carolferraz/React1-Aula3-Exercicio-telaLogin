import "./styles.css";
import PropTypes from "prop-types";

const Subtitle = ( {subtitle, color, alignSelf, borderBottom} ) => {
    if (subtitle === ""){
        borderBottom = "none";
    }

    return (
        <h2 className="subtitle" style={ {color, alignSelf, borderBottom} } text={subtitle}> {subtitle}</h2>
    );
};

Subtitle.propTypes = {
    subtitle: PropTypes.string,
};

export default Subtitle