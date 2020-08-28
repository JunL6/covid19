import React, { useState, useEffect } from "react";
import StatsDisplay from "./StatsDisplay";
import getGeoLocation from "../utils/getGeoLocation";
// import useReverseGeoCoding from "../utils/useReverseGeoCoding";
import reverseGeoCoding from "../utils/reverseGeoCoding";
import StatsCards from "./StatsCards";

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
    <div className="m-5">
      <div>
        <h3 className="mb-2">
          Current location:{" "}
          <span>
            {location ? location && `${location.countryName}, ` : `loading...`}
          </span>
          <span>{location ? location && location.region : `loading...`}</span>
        </h3>
      </div>
      <div>
        <h5>{location ? location && `${location.countryName}` : ``}</h5>
        {location && <StatsDisplay url={URL_COUNTRY + location.countryCode} />}
      </div>
      <div>
        <h5>{location ? location && location.region : ``}</h5>
        <StatsCards
          confirmedNum={regionStat ? regionStat.confirmed : `loading...`}
          deathsNum={regionStat ? regionStat.deaths : `loading...`}
          recoveredNum={regionStat ? regionStat.recovered : `loading...`}
        />
        {/* <div>Confirmed: {regionStat ? regionStat.confirmed : `loading...`}</div>
        <div>Recovered: {regionStat ? regionStat.recovered : `loading...`}</div>
        <div>Deaths: {regionStat ? regionStat.deaths : `loading...`}</div>
        <div>
          Fatality Rate:{" "}
          {regionStat
            ? `${(regionStat.deaths / regionStat.confirmed).toFixed(3) * 100}%`
            : `loading...`}
        </div> */}
      </div>
    </div>
  );
};

export default GeoLocationStats;
