import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CardInfo from "./pages/CardInfo";

import "./index.scss";

function App() {
  const [items, setItems] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onInfoCart = (obj) => {
    setCards(prev => [...prev, obj]);
  };

  return (
    <div className="wrapper">
      <Routes>
        <Route
          path=""
          element={<Home items={items} onInfoCart={onInfoCart} />}
        />
        <Route path="/cardinfo" element={<CardInfo items={cards} />} />
      </Routes>
    </div>
  );
}

export default App;
