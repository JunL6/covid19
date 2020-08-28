import React, { useState } from "react";
import { Form } from "react-bootstrap";

import StatsDisplay from "./StatsDisplay";
import useStats from "../utils/useStats";

const URL_COUNTRIES = "https://covid19.mathdro.id/api/countries";

export default function CountrySelector() {
  const [selectedCountryCode, setSelectedCountryCode] = useState("AFG");

  const countries = useStats(URL_COUNTRIES);
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
  const url_selectedCountry = URL_COUNTRIES + `/${selectedCountryCode}`;

  return (
    <div className="panel panel-countryselector">
      <Form>
        <h3>Select a country to see stats: {selectedCountryCode}</h3>
        <Form.Control
          as="select"
          style={{ maxWidth: "400px" }}
          onChange={(e) => {
            setSelectedCountryCode(e.target.value);
          }}
        >
          {renderCountryList(countries)}
        </Form.Control>
      </Form>
      <StatsDisplay url={url_selectedCountry} />
    </div>
  );
}
