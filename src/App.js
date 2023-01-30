import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./index.scss";

export const arr = [
  {name: 'kostya', gender: 'male'},
  {name: 'andrey', gender: 'female'},
  {name: 'emil', gender: 'male'},
];

function App() {

  const [user, setUsers] = React.useState(0);

  const users = arr[user];
  

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home users={users}/>} />
      </Routes>
    </div>
  );
}

export default App;
