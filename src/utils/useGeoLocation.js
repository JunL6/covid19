import { useState, useEffect } from "react";
import useReverseGeoCoding from "./useReverseGeoCoding";

export default function useGeoLocation() {
  const [geoLocation, setGeoLocation] = useState();
  function handleSuccess(position) {
    console.log("run here");
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

  // if (geoLocation) {
  //   // return reverseGeoCoding(geoLocation);
  //   const location = await useReverseGeoCoding(geoLocation); //hook 不能用在判断语句里
  //   console.log(location);
  //   return geoLocation;
  // }
  console.log(geoLocation);
}
