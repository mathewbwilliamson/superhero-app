import React from "react";
import "./styles/main.css";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <div className="app">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
