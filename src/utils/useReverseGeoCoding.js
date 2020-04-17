import { useState, useEffect } from "react";
const KEY = `AIzaSyBejPpobPd1CP5i6XFXwZUQhkKoVsXdeGc`;

export default function useReverseGeoCoding({ lat, long } = {}) {
  const [localCountry, setLocalCountry] = useState();
  const [localRegion, setLocalRegion] = useState();
  console.log(lat, long);

  console.log("LOG: start running reverseGeoCoding");

  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}, ${long}&key=${KEY}`;

  useEffect(() => {
    if (!lat || !long) {
      return;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const locInfo = data.results[0].address_components;
        locInfo.forEach((element) => {
          if (element.types.includes("country")) {
            console.log(element);
            setLocalCountry({
              code: element.short_name,
              name: element.long_name,
            });
          }
          if (element.types.includes("administrative_area_level_1")) {
            setLocalRegion(element.long_name);
          }
        });
      });
  }, [lat, long]);

  if (localCountry) {
    return {
      country: localCountry.name,
      countryCode: localCountry.code,
      region: localRegion,
    };
  }
}
