import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CardInfo from "./pages/CardInfo";

import "./index.scss";

function App() {
  const [card, setCard] = React.useState([]);
  const [cardInfo, setCardInfo] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://gorest.co.in/public/v2/users").then((resp) => {
      const allCards = resp.data;
      setCard(allCards);
    });
  }, [setCard]);

  const onInfoCart = (obj) => {
    setCardInfo((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper">
      <Routes>
        <Route path="" element={<Home card={card} onInfoCart={onInfoCart} />} />
        <Route
          path="cardinfo/:id"
          element={<CardInfo card={cardInfo} onInfoCart={onInfoCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
