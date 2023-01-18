import "./styles.css";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button_enter";
import Anchor from "../../components/Anchor";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/home");
  }

  return (
    <div className="box-login-container">
      <div className="inner-container">
        <Title title="Login" />
        <Input label="Usuário" />
        <Input label="Senha" hide />
        <Button redirecionar={goToHome} button="Entrar" />
        <Anchor href="http://google.com" anchor="Esqueceu a senha?" />
      </div>
    </div>
  );
}
export default Login;
