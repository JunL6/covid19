import React from "react";
import StatsDisplay from "./StatsDisplay";
import { useGeoLocation, useIpLocation } from "../utils/useLocation";

import useStats from "../utils/useStats";

const LocalStats = () => {
  const location = useGeoLocation();
  location && console.log(location);
  // const location = useIpLocation();

  // const countryCode = location.countryCode;
  // const province = location.regionName;
  // const localUrl = `https://covid19.mathdro.id/api/countries/${countryCode}`;

  // const globalStatsToday = useStats(`https://covid19.mathdro.id/api/confirmed`);
  // let provinceStats = undefined;
  // if (province && globalStatsToday) {
  //   provinceStats = globalStatsToday.find(
  //     region => region.provinceState === province
  //   );
  // }

  // return (
  //   <div>
  //     <div>
  //       <h3>
  //         Current country:
  //         {location.country ? ` ${location.country}` : ` loading...`}
  //       </h3>
  //       <StatsDisplay url={localUrl} />
  //     </div>
  //     <div>
  //       <h3>
  //         Current Region:
  //         {province ? ` ${province}` : ` loading...`}
  //       </h3>
  //       <div>
  //         Confirmed:{" "}
  //         {provinceStats && provinceStats.confirmed
  //           ? provinceStats.confirmed
  //           : `loading...`}
  //       </div>
  //       <div>
  //         Deaths:{" "}
  //         {provinceStats && provinceStats.deaths
  //           ? provinceStats.deaths
  //           : `loading...`}
  //       </div>
  //     </div>
  //   </div>
  // );

  return <div>location</div>;
};

export default LocalStats;
