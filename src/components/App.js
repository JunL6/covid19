import React from "react";
import { Container, Card } from "react-bootstrap";

import StatsDisplay from "./StatsDisplay";
// import LocalStats from "./LocalStats";
import CountrySelector from "./CountrySelector";
import GeoLocationStats from "./GeoLocationStats";
import EarthStats from "./EarthStats";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Container fluid className="app">
      <h2>Covid-19 Stats</h2>

      <Card className="panel">
        <EarthStats />
      </Card>
      {/* <LocalStats /> */}
      <Card className="panel">
        <GeoLocationStats />
      </Card>
      <Card className="panel">
        <CountrySelector />
      </Card>
    </Container>
  );
};

export default App;
