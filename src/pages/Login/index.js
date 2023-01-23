import "./styles.css";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Anchor from "../../components/Anchor";
// import Error from "../../components/Error";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Subtitle from "../../components/Subtitle";

const Login = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Login");
  const [showError, setShowError] = useState(false);
  const [inputColor, setInputColor ] = useState("ffffffcc");
  const [borderColor, setBorderColor ] = useState("1px solid ffffffcc");
  const [emailOfUser, setEmailOfUser] = useState();
  const [password, setPassword] = useState();
  const [users] = useState([
    {
      email: "carol@oi.com",
      password: "1234",
    },
    {
      email: "bora@paciencia.com",
      password: "oidevs",
    },
  ]);

  const goToHome = () => {
    const findUser = users.find(
      (user) => user.email === emailOfUser && user.password === password);
    
    if(findUser){
      navigate("/home");
    } else {
      setShowError(true);
      setInputColor("red");
      setBorderColor("1px solid red");
    }
  };

  const changeTitle = () => {
    if (title === "Login") {
      setTitle("É só sucesso");
    } else {
      setTitle("Login");
    }
  };

  return (
    <div className="container">
      <div className="inner-container">
        <Title title={title} />
        {/* <Subtitle subtitle={title} /> */}
        {/* Se showError for true ele avança na validação e retorna o componente indicado. Pois com o operador lógico && (AND) só segue o argumento se o primeiro elemento for true. */}
        {showError && <Subtitle subtitle="Email e/ou senha inválidos." /> }

        <Input 
        label="Email"
        value={emailOfUser}
        color={inputColor}
        borderBottom={borderColor}
        onChange= {(e) => setEmailOfUser(e.target.value)} />
        
        <Input 
        label="Senha"
        value={password}
        color={inputColor}
        borderBottom={borderColor}
        onChange= {(e) => setPassword(e.target.value)}
        hide />

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
