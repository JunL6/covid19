import React from "react";
import StatsDisplay from "./StatsDisplay";
import LocalStats from "./LocalStats";
import CountrySelector from "./CountrySelector";
import GeoLocationStats from "./GeoLocationStats";
import EarthStats from "./EarthStats";
import "../css/App.css";

const urlEarth = "https://covid19.mathdro.id/api";

const App = () => {
  return (
    <div className="app">
      Covid-19 Stats
      <div className="panel panel-earth">
        <h3>Total on Earth: </h3>
        <StatsDisplay url={urlEarth} />
        <EarthStats />
      </div>
      {/* <LocalStats /> */}
      <GeoLocationStats />
      <CountrySelector />
    </div>
  );
};

export default App;
