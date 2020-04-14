import reverseGeoCoding from "./useReverseGeoCoding";

export default function getGeoLocation() {
  let geoLocation = undefined;
  function handleSuccess(position) {
    geoLocation = {
      lat: position.coords.latitude,
      long: position.coords.longitude,
    };
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleSuccess, (error) =>
      console.log(`error: ${error}`)
    );
  }

  console.log("function: getGeoLocation");
  console.log(geolocation);
  return geoLocation;
}
