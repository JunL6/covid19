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
  useEffect(() => {
    getGeoLocation()
      .then((res) => reverseGeoCoding(res))
      .then((locationInfo) => {
        console.log(locationInfo);
        setLocation(locationInfo);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        Current location:
        <span>
          {location ? location && location.countryName : `loading...`}
        </span>
        <span>{location ? location && location.region : `loading...`}</span>
      </div>
      <div>
        National stats:
        {location && <StatsDisplay url={URL_COUNTRY + location.countryCode} />}
      </div>
    </div>
  );
};

export default GeoLocationStats;
