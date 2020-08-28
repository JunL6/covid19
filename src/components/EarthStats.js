import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const urlEarthDaily = "https://covid19.mathdro.id/api/daily";

const options = {
  title: "New Cases on Earth",
  hAxis: { title: "Date" },
  vAxis: { title: "Number" },
  backgroundColor: "#f7f7f7",
  // legend: "none",
};
const data = [
  ["Age", "Weight"],
  [8, 12],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [6.5, 7],
];

// const earthDailyStats = [["Date", "Confirmed", "Deaths", "New cases"]];

export default function EarthStats() {
  const [earthDailyStats, setEarthDailyStats] = useState();

  useEffect(() => {
    const statsArray = [
      [
        "Date",
        // { type: "date", label: "Day" },
        // "Confirmed",
        // "Deaths",
        "New cases",
      ],
    ];
    fetch(urlEarthDaily)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.map((obj) => {
          statsArray.push([
            obj.reportDate,
            // obj.confirmed.total,
            // obj.deaths.total,
            obj.deltaConfirmed,
          ]);
        });
        // console.log(statsArray);
        setEarthDailyStats(statsArray);
      });
  }, []);

  return (
    <div>
      <Chart
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={earthDailyStats}
        options={options}
        width="100%"
        height="400px"
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
}
