import "./styles.css";
import Title from "../../components/Title";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../components/Button/index";
import CardUser from "../../components/CardUser";
import Subtitle from "../../components/Subtitle";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { users } = location.state;
  const [counter, setCounter] = useState(0);
  const [usersToLocalStorage, setUsersToLocalStorage] = useState([]);

  const backToLogin = () => {
    navigate("/");
  };

  const add = () => {
    if (!users[counter]) {
      return;
    }
    setUsersToLocalStorage((prev) => [...prev, users[counter]]);
    setCounter(counter + 1);
  };

  const remove = () => {
    //recupera do localStorage
    const userListLocalStorage = JSON.parse(localStorage.getItem("users"));

    if (counter <= 0) {
      return
    }
    else {
      setCounter(counter - 1);
      userListLocalStorage.pop();
      setUsersToLocalStorage(userListLocalStorage);
    }
  };

  useEffect(() => {
    //armazena no localStorage
    const saveToLocalStorage = JSON.stringify(usersToLocalStorage);
    localStorage.setItem("users", saveToLocalStorage);

    return () => {
      localStorage.clear();
    };
  }, [usersToLocalStorage]);

  return (
    <div className="container">
      <div className="inner-container">
        <Title textTitle="Seja bem vinda(o), usuária(o)!" alignSelf="center" />

        <Subtitle
          alignSelf="center"
          subtitle="Clique nos botões para adicionar ou remover usuários na tela:"
        />

        <div className="align-btn">
          <Button
            onClick={add}
            button="+"
            background="#d8a1fcaa"
            border="1px solid #d8a1fc"
            width="7%"
            padding="7px 0px"
            alignSelf="center"
          />
          <Button
            onClick={remove}
            button="-"
            background="#d8a1fcaa"
            border="1px solid #d8a1fc"
            width="7%"
            padding="7px 0px"
            alignSelf="center"
          />
        </div>

        <ul>
          {usersToLocalStorage.map((user) => (
            <CardUser key={user.id} userContent={user.username} />
          ))}
        </ul>

        <Title textTitle={counter} alignSelf="center" />

        <Button
          onClick={backToLogin}
          button="Voltar"
          background="#d8a1fcaa"
          border="1px solid #d8a1fc"
          width="20%"
          alignSelf="center"
        />
      </div>
    </div>
  );
};
export default Home;
