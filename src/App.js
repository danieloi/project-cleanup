import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <div className="divider" />
      <div className="divider" />
      <Footer />
    </div>
  );
};

export default App;
