import { useState, useEffect } from "react";

export function useGeoLocation() {
  const [geoLocation, setGeoLocation] = useState();
  function handleSuccess(position) {
    console.log(position);
    setGeoLocation({
      lat: position.coords.latitude,
      long: position.coords.longitude
    });
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleSuccess, error =>
      console.log(`error: ${error}`)
    );
  }

  return geoLocation;
}

export function useIpLocation() {
  const [ipLocation, setIpLocation] = useState(`loading...`);
  const url = `http://ip-api.com/json/`;

  useEffect(() => {
    async function getIpLocation() {
      fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err))
        .then(res => setIpLocation(res));
    }
    getIpLocation();
  }, [url]);

  return ipLocation;
}
