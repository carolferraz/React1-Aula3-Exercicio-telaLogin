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
  const [showError, setShowError] = useState(false);
  const [inputColor, setInputColor] = useState("ffffffcc");
  const [borderColor, setBorderColor] = useState("1px solid ffffffcc");

  const [emailOfUser, setEmailOfUser] = useState();
  const [password, setPassword] = useState();
  const [users] = useState([
    {
      id: 1,
      username: "Carol",
      email: "carol@oi.com",
      password: "1234",
      isExcluded: false,
    },
    {
      id: 2,
      username: "Maria",
      email: "user2@oi.com",
      password: "oidevs",
      isExcluded: false,
    },
    {
      id: 3,
      username: "Betânia",
      email: "user3@oi.com",
      password: "oidevs",
      isExcluded: false,
    },
    {
      id: 4,
      username: "Gal",
      email: "user4@oi.com",
      password: "oidevs",
      isExcluded: false,
    },
  ]);

  const goToHome = (user) => {
    const validUser = users.find(
      (user) => user.email === emailOfUser && user.password === password
    );

    user.preventDefault();

    if (validUser) {
      navigate("/home", { state: { users: users } });
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
        <Title textTitle={title} />
        {/* <Subtitle subtitle={title} /> */}
        {/* Se showError for true ele avança na validação e retorna o componente indicado. Pois com o operador lógico && (AND) só segue o argumento se o primeiro elemento for true. */}
        {showError && (
          <Subtitle
            color="red"
            subtitle="Os dados de acesso não são inválidos."
          />
        )}

        <Input
          label="Email"
          value={emailOfUser}
          color={inputColor}
          borderBottom={borderColor}
          onChange={(e) => setEmailOfUser(e.target.value)}
          onFocus={() => {
            setInputColor("ffffffcc");
            setBorderColor("1px solid ffffffcc");
          }}
        />

        <Input
          label="Senha"
          value={password}
          color={inputColor}
          borderBottom={borderColor}
          onChange={(e) => setPassword(e.target.value)}
          hide
        />

        <div className="align-btn">
          <Button
            addAction={goToHome}
            button="Entrar"
            background="#d8a1fcaa"
            border="1px solid #d8a1fc"
          />
          <Button
            addAction={changeTitle}
            button="Mudar título"
            border="1px solid #e1faa3"
          />
        </div>

        <div className="align-anchor">
          <Anchor href="" anchor="Esqueceu a senha?" />
          <Anchor href="" anchor="Faça seu cadastro." />
        </div>
      </div>
    </div>
  );
};
export default Login;
