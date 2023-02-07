import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

import "../index.scss";

const Home = ({ card, onInfoCart }) => {
  return (
    <div className="cards">
      {card.map((item, index) => (
        <Link key={index} to={`/cardinfo/${item.id}`} className="linkinfo">
          <Card
            {...item}
            image={
              item.gender === "male" ? "/images/man.png" : "/images/woman.jpg"
            }
            info={onInfoCart}
          />
        </Link>
      ))}
    </div>
  );
};

export default Home;
