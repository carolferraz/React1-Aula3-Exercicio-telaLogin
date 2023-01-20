import "./styles.css";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Anchor from "../../components/Anchor";
import Subtitle from "../../components/Subtitle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Login");
  const [subtitle, setSubtitle] = useState("");

  const goToHome = () => {
    navigate("/home");
  };

  const changeTitle = () => {
    if (title === "Login") {
      setTitle("É só sucesso");
    } else {
      setTitle("Login");
    }
  };

  const changeSubtitle = () => {
    setSubtitle(document.querySelector("input").value);
  };

  return (
    <div className="container">
      <div className="inner-container">
        <Title title={title} />
        <Subtitle subtitle={subtitle} />
        <Input label={"Usuário"} changeInput={changeSubtitle} />
        <Input label="Senha" hide />
        <div className="align-btn">
          <Button addAction={goToHome} button="Entrar" />
          <Button
            addAction={changeTitle}
            button="Mudar título"
            background="#ed6587"
          />
        </div>
        <Anchor href="http://google.com" anchor="Esqueceu a senha?" />
      </div>
    </div>
  );
};
export default Login;
