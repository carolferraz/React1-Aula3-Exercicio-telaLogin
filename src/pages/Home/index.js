import "./styles.css";
import Title from "../../components/Title";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Button/index";
import CardUser from "../../components/CardUser";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { usersList } = location.state;

  const backToLogin = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="inner-container">
        <Title textTitle="Seja bem vinda(o), usuária(o)!" alignSelf="center" />
        <Button
          addAction={backToLogin}
          button="Voltar"
          background="#d8a1fcaa"
          border="1px solid #d8a1fc"
          width="20%"
          alignSelf="center"
        />
        <ul>
          {usersList.map((user) => (
            <CardUser key={user.id} userContent={user.email} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Home;
