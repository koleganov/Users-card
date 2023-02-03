import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";


const CardInfo = () => {
  return (
    <div>
      <button className="cardInfoBtn">
        <Link to="/">Вернуться назад</Link>
      </button>
      
    </div>
  );
};

export default CardInfo;
