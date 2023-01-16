import "./styles.css";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Anchor from "../components/Anchor";

function Login() {
  return (
    <div className="box-login-container">
      <div className="inner-container">
        <Title title="Login" />
        <Input label="Usuário" />
        <Input label="Senha" hide />
        <Button href="" button="login" />
        <Anchor href="http://google.com" anchor="Esqueceu a senha?" />
      </div>
    </div>
  );
}
export default Login;
