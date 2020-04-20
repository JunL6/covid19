import React, { useState, useEffect } from "react";
import StatsDisplay from "./StatsDisplay";
import getGeoLocation from "../utils/getGeoLocation";
// import useReverseGeoCoding from "../utils/useReverseGeoCoding";
import reverseGeoCoding from "../utils/reverseGeoCoding";
import useStats from "../utils/useStats";

const URL_COUNTRY = `https://covid19.mathdro.id/api/countries/`;
const URL_GLOBAL = `https://covid19.mathdro.id/api/confirmed`;

const GeoLocationStats = () => {
  const [location, setLocation] = useState();
  const [regionStat, setRegionStat] = useState();
  useEffect(() => {
    getGeoLocation()
      .then((res) => reverseGeoCoding(res))
      .then((locationInfo) => {
        console.log(locationInfo);
        setLocation(locationInfo);
      })
      // .then((res) => {
      //   return fetch(`https://covid19.mathdro.id/api/confirmed`);
      // })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/confirmed`)
      .then((res) => res.json())
      .then((data) => {
        if (location) {
          const stat = data.find(
            (obj) => obj.provinceState === location.region
          );
          console.log(stat);
          setRegionStat(stat);
        }
      });
  }, [location]);

  return (
    <div className="panel panel-local">
      <div>
        <h3>Current location:</h3>
        <span>
          {location ? location && `${location.countryName}, ` : `loading...`}
        </span>
        <span>{location ? location && location.region : `loading...`}</span>
      </div>
      <div>
        National stats
        {location && <StatsDisplay url={URL_COUNTRY + location.countryCode} />}
      </div>
      <div>
        Region stats
        <div>Confirmed: {regionStat ? regionStat.confirmed : `loading...`}</div>
        <div>Recovered: {regionStat ? regionStat.recovered : `loading...`}</div>
        <div>Deaths: {regionStat ? regionStat.deaths : `loading...`}</div>
        <div>
          Fatality Rate:{" "}
          {regionStat
            ? `${(regionStat.deaths / regionStat.confirmed).toFixed(3) * 100}%`
            : `loading...`}
        </div>
      </div>
    </div>
  );
};

export default GeoLocationStats;
