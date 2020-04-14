import React from "react";
import StatsDisplay from "./StatsDisplay";
import LocalStats from "./LocalStats";
import CountrySelector from "./CountrySelector";
import "../css/App.css";

const App = () => {
  const urlEarth = "https://covid19.mathdro.id/api";
  return (
    <div className="app">
      App
      <div>
        <h3>Total on Earth: </h3>
        <StatsDisplay url={urlEarth} />
      </div>
      <LocalStats />
      <CountrySelector />
    </div>
  );
};

export default App;
