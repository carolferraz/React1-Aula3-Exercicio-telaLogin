import "./styles.css"
import Title from "../../components/Title";
import { useNavigate } from "react-router-dom";
import ReturnButton from "../../components/Button_comeBack/index";

function Home() {
  const navigate = useNavigate();

  function backToLogin(){
    navigate("/");
  }

  return (
    <div className="container">
        <nav className="navbar">
            <ReturnButton redirecionar={backToLogin}/>
            <Title title="Seja bem vinda(o), usuária(o)!" />
        </nav>
    </div>
  );
}
export default Home;
