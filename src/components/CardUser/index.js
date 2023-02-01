import "./styles.css";

  const CardUser = ( {background, color, border, width, alignSelf, userContent} ) => {

  return (
    <div>
         <li className="cardUser" style={ {background, color, border, width, alignSelf} } >
              {userContent}
        </li>
    </div>
  );
};

export default CardUser;
