import "./styles.css";
import backButton from "../../assets/left-arrow2.png"

function returnButton(props) {
  return (
    <>
      <button
        className="button-comeBack"
        type="button"
        onClick={props.redirecionar}
      >
        <img src={backButton} alt="backButtonsvg"/>
      </button>
    </>
  );
}

export default returnButton;
