import "./styles.css";

  const CardUser = ( {background, color, border, width, alignSelf, key, userContent} ) => {

  return (
    <div>
         <li className="cardUser" style={ {background, color, border, width, alignSelf} } key={key}>
              {userContent}
        </li>
    </div>
  );
};

export default CardUser;
