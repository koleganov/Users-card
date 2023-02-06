import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "../index.scss";

const CardInfo = ({ items, onInfoCart }) => {
  return (
    <div>
      <button className="cardInfoBtn">
        <Link to="/">Вернуться назад</Link>
      </button>
      <div className="cards">
        {items.map((item) => (
          <Card info={onInfoCart} />
        ))}
      </div>
    </div>
  );
};

export default CardInfo;
