import "./styles.css";
import PropTypes from "prop-types";

const Title = ( {textTitle, alignSelf, borderBottom} ) => {

    return (
        <h1 className="title" style={ {alignSelf, borderBottom} } text={textTitle}> {textTitle}</h1>
    );
};

Title.propTypes = {
    textTitle: PropTypes.string,
    alignSelf: PropTypes.string,
};


export default Title