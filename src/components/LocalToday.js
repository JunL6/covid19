import React from "react";
import useStats from "../utils/useStats";

export default function LocalToday() {
  const currentProvince = "Saskatchewan";

  const globalStatsToday = useStats(`https://covid19.mathdro.id/api/confirmed`);
  console.log(globalStatsToday);

  let data = undefined;
  if (globalStatsToday) {
    data = globalStatsToday.find(
      area => area.provinceState === currentProvince
    );
  }

  return (
    <div className="stats-display">
      <h3>{currentProvince}</h3>
      <div>Confirmed: {data ? data && data.confirmed : `loading...`}</div>
      <div>Deaths: {data ? data && data.deaths : `loading...`}</div>
    </div>
  );
}
