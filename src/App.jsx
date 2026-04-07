import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lgn" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
