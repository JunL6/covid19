import React from "react";
import useStats from "../utils/useStats";
import "../css/StatsDisplay.css";

function StatsDisplay({ url }) {
  const data = useStats(url);

  return (
    <div className="stats-display">
      <div>
        Confirmed:{" "}
        {data ? data.confirmed && data.confirmed.value : `loading...`}
      </div>
      <div>
        Deaths: {data ? data.confirmed && data.deaths.value : `loading...`}
      </div>
      <div>
        Recovered:{" "}
        {data ? data.confirmed && data.recovered.value : `loading...`}
      </div>
    </div>
  );
}

export default StatsDisplay;
