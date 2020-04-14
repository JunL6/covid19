import { useState, useEffect } from "react";

export function useGeoLocation() {
  const [geoLocation, setGeoLocation] = useState();
  function handleSuccess(position) {
    setGeoLocation({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleSuccess, (error) =>
      console.log(`error: ${error}`)
    );
  }

  console.log(geoLocation);
  return reverseGeoCoding(geoLocation);
}

function reverseGeoCoding(location) {
  const lat = 42.714224;
  const long = -73.961452;
  let country;
  console.log("function: reverseGeoCoding");

  if (true) {
    console.log("actually executed");
    // const url= `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBejPpobPd1CP5i6XFXwZUQhkKoVsXdeGc`
    const key = `AIzaSyBejPpobPd1CP5i6XFXwZUQhkKoVsXdeGc`;

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}, ${long}&key=${key}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const locInfo = data.results[0].address_components;
        locInfo.forEach((element) => {
          if (element.types.includes("country")) {
            console.log(element);
            country = { code: element.short_name, name: element.long_name };
            console.log(country);
          }
        });
      });
  }
  console.log(country);
  return country;
}

export function useIpLocation() {
  const [ipLocation, setIpLocation] = useState(`loading...`);
  const url = `http://ip-api.com/json/`;

  useEffect(() => {
    function getIpLocation() {
      fetch(url)
        .then((res) => res.json())
        .catch((err) => console.log(err))
        .then((res) => setIpLocation(res));
    }
    getIpLocation();
  }, [url]);

  return ipLocation;
}
