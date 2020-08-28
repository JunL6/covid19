import React from "react";
import { Container } from "react-bootstrap";

import StatsDisplay from "./StatsDisplay";
// import LocalStats from "./LocalStats";
import CountrySelector from "./CountrySelector";
import GeoLocationStats from "./GeoLocationStats";
import EarthStats from "./EarthStats";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const urlEarth = "https://covid19.mathdro.id/api";

const App = () => {
  return (
    <Container fluid className="app">
      Covid-19 Stats
      <div className="panel panel-earth">
        <h3>Total on Earth: </h3>
        <StatsDisplay url={urlEarth} />
        <EarthStats />
      </div>
      {/* <LocalStats /> */}
      <GeoLocationStats />
      <CountrySelector />
    </Container>
  );
};

export default App;
