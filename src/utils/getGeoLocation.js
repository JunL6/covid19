export default function getGeoLocation() {
  return new Promise((resolve, reject) => {
    function handleSuccess(position) {
      resolve({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, (error) =>
        reject(`error: ${error}`)
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
  });
}
