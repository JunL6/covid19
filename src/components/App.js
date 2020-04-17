import React from "react";
import StatsDisplay from "./StatsDisplay";
import LocalStats from "./LocalStats";
import CountrySelector from "./CountrySelector";
import GeoLocationStats from "./GeoLocationStats";
import "../css/App.css";

const urlEarth = "https://covid19.mathdro.id/api";

const App = () => {
  return (
    <div className="app">
      Covid-19 Stats
      <div>
        <h3>Total on Earth: </h3>
        <StatsDisplay url={urlEarth} />
      </div>
      {/* <LocalStats /> */}
      <GeoLocationStats />
      <CountrySelector />
    </div>
  );
};

export default App;
