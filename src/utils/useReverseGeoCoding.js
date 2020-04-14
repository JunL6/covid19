import React, { useState, useEffect } from "react";

export default function useReverseGeoCoding(geoLocation) {
  console.log(geoLocation);
  // const [localCountry, setLocalCountry] = useState();
  // const [localRegion, setLocalRegion] = useState();
  console.log("function: reverseGeoCoding");

  // useEffect(() => {
  //   if (geoLocation) {
  //     const lat = geoLocation.lat;
  //     const long = geolocation.long;
  //     const key = `AIzaSyBejPpobPd1CP5i6XFXwZUQhkKoVsXdeGc`;

  //     const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}, ${long}&key=${key}`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         const locInfo = data.results[0].address_components;
  //         locInfo.forEach((element) => {
  //           if (element.types.includes("country")) {
  //             setLocalCountry({
  //               code: element.short_name,
  //               name: element.long_name,
  //             });
  //           }
  //           if (element.types.includes("administrative_area_level_1")) {
  //             setLocalRegion(element.long_name);
  //           }
  //         });
  //       });
  //   }
  // }, []);

  // if (localCountry) {
  //   return {
  //     country: localCountry.name,
  //     countryCode: localCountry.code,
  //     region: localRegion,
  //   };
  // }
}
