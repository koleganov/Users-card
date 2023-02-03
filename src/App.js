import React from "react";
import {Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import CardInfo from "./pages/CardInfo";

import users from "./users.json";


import "./index.scss";

function App() {
  const [items, setItems] = React.useState(users);
  const [cards, setCards] = React.useState([]);

  const onInfoCart = (obj) => {
    // setCards([...cards, obj])
    console.log(obj)
  }

  return (
    <div className="wrapper">
      <Routes>
        <Route path="" element={<Home items={items} onInfoCart={onInfoCart}/>} />
        <Route path="/cardinfo" element={<CardInfo />} />
      </Routes>
    </div>
  );
}

export default App;
