import "./styles.css";
import PropTypes from "prop-types";

const Title = ( {title, alignSelf, borderBottom} ) => {

    return (
        <h1 className="title" style={ {alignSelf, borderBottom} }> {title}</h1>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    alignSelf: PropTypes.string,
};


export default Title