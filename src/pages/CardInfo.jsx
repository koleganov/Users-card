import React from "react";
import { Link, useParams } from "react-router-dom";
import "../index.scss";

const CardInfo = ({ card }) => {
  const { id } = useParams();
  const product = card.find((p) => p.id === Number(id));

  return (
    <div>
      <Link to="/">Назад</Link>
      <h2>ProductCard:</h2>
      <h3>Name: {product.name}</h3>
      <h3>Gender: {product.gender}</h3>
      <h3>ID: {product.id}</h3>
      <h3>Email: {product.email}</h3>
      <h3>Status: {product.status}</h3>
    </div>
  );
};

export default CardInfo;
