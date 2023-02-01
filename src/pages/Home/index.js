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
  const [ counter, setCounter ] = useState(0);
  const [ usersToLocalStorage, setUsersToLocalStorage] = useState([]);

  const backToLogin = () => {
    navigate("/");
  };
  
  //armazena no localStorage
  const saveToLocalStorage = JSON.stringify(usersToLocalStorage);
  localStorage.setItem("users", saveToLocalStorage);
  
  //recupera do localStorage
  const getFromLocalStorage = localStorage.getItem("users")
  const userListLocalStorage = JSON.parse(getFromLocalStorage)

  const add = ()=>{ 
    if (counter < users.length - 1 ) {
    setCounter(counter + 1) }
    console.log("add:" + counter + userListLocalStorage + users[counter])
  };

  const remove = ()=>{ 
    if (counter < userListLocalStorage.length) {
      setCounter(counter - 1) 
      userListLocalStorage.pop()
      setUsersToLocalStorage(userListLocalStorage)
      localStorage.setItem("users", userListLocalStorage);
    }};
  
    
    useEffect(() => {
        setUsersToLocalStorage((prev)=>[...prev, users[counter]])

    }, [counter, users]);
  
    useEffect(()=> {
      return () => {
        console.log('desmontar')
        localStorage.clear()
      };
    }, [])

    
    
    
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
            addAction={add}
            button="+"
            background="#d8a1fcaa"
            border="1px solid #d8a1fc"
            width="7%"
            padding="7px 0px"
            alignSelf="center"
          />
          <Button
            addAction={remove}
            button="-"
            background="#d8a1fcaa"
            border="1px solid #d8a1fc"
            width="7%"
            padding="7px 0px"
            alignSelf="center"
          />
        </div>

        <ul>
          {userListLocalStorage.map((user) => (
            <CardUser key={user.id} userContent={user.username} />
          ))}
        </ul>
         
          <Title textTitle={counter}
          alignSelf="center" />

        <Button
          addAction={backToLogin}
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
