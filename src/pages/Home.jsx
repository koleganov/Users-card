import React from "react";
import Card from "../components/Card";

const Home = ({ items, onInfoCart }) => {
  return (
    <div className="cards">
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          gender={item.gender}
          image={
            item.gender === "male" ? "/images/man.png" : "/images/woman.jpg"
          }
          info={onInfoCart}
        />
      ))}
    </div>
  );
};

export default Home;
