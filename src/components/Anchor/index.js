import "./styles.css";
import PropTypes from "prop-types";

const Anchor = ( {href, anchor} ) => {
    return (
        <a className="anchor-lost-password" target="_blank" rel="noreferrer noopener" href={href}>
        <p> {anchor}</p>
        </a>
    );
};

Anchor.propTypes = {
    href: PropTypes.string.isRequired,
    anchor: PropTypes.string.isRequired,
}

export default Anchor