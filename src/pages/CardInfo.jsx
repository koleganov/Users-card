import React from "react";
import { Link, useParams } from "react-router-dom";

import "../index.scss";

const CardInfo = ({ card }) => {
  const { id } = useParams();
  const item = card.find((p) => p.id === Number(id));

  return (
    <div className="infoBlock">
      <Link className="infoBlock_link" to="/">
        <button className="infoBlock_link-btn">
          Назад
        </button>
      </Link>
      <div className="cardInfo">
        <img
          className="cardInfo_img"
          src={item.gender === "male" ? "/images/man.png" : "/images/woman.jpg"}
          alt="avatar"
        />
        <div className="cardInfo_text">
          <h1>Name: {item.name}</h1>
          <h4>Gender: {item.gender}</h4>
          <h4>ID: {item.id}</h4>
          <h4>Email: {item.email}</h4>
          <h4>Status: {item.status}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
