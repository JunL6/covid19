import React, { useState } from "react";
import StatsDisplay from "./StatsDisplay";
import useStats from "../utils/useStats";

export default function CountrySelector() {
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  const countries = useStats(`https://covid19.mathdro.id/api/countries`);
  function renderCountryList(countries) {
    if (!countries) {
      return `loading...`;
    } else {
      const result = Object.entries(countries.countries).map(
        ([code, value]) => {
          return (
            <option key={code} value={value.iso3}>
              {value.name}
            </option>
          );
        }
      );
      return result;
    }
  }
  const url_selectedCountry = `https://covid19.mathdro.id/api/countries/${selectedCountryCode}`;

  return (
    <div className="panel panel-countryselector">
      <h3>Select a country to see stats</h3>
      <div>
        <select
          onChange={(e) => {
            setSelectedCountryCode(e.target.value);
          }}
        >
          {renderCountryList(countries)}
        </select>
        <span>selected country: {selectedCountryCode}</span>
      </div>
      <StatsDisplay url={url_selectedCountry} />
    </div>
  );
}
