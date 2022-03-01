import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import history from "./history";

function App() {
  return (
    <>
      <Router history={history}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Signup" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
