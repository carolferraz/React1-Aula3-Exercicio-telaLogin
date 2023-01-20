import "./styles.css"
import Title from "../../components/Title";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/index";

const Home = () => {
  const navigate = useNavigate();

  const backToLogin = () => {
    navigate("/");
  }

  return (
    <div className="container">
      <div className="inner-container">
          <Title title="Seja bem vinda(o), usuária(o)!" alignSelf="center" />
          <Button addAction={backToLogin} button="Voltar" width="20%" alignSelf="center"/>
      </div>
    </div>
  );
}
export default Home;
