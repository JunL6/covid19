import React from "react";

import EarthChart from "./EarthChart";
import StatsDisplay from "./StatsDisplay";
import useStats from "../utils/useStats";

const urlEarth = "https://covid19.mathdro.id/api";

export default function EarthStats() {
  return (
    <div className="m-5">
      <h3>Total on Earth</h3>
      <StatsDisplay url={urlEarth} />
      <EarthChart />
    </div>
  );
}
