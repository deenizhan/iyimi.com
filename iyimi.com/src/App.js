import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/createstm" element={<HomePage />} /> */}
        {/* <Route path="/stm/:stmId" element={<Stm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
