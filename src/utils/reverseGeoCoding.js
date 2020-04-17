const KEY = `AIzaSyBejPpobPd1CP5i6XFXwZUQhkKoVsXdeGc`;

export default function reverseGeoCoding({ lat, long } = {}) {
  return new Promise((resolve, reject) => {
    if (!lat || !long) {
      return;
    }
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}, ${long}&key=${KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let countryName, countryCode, region;
        const locInfo = data.results[0].address_components;
        locInfo.forEach((element) => {
          if (element.types.includes("country")) {
            countryName = element.long_name;
            countryCode = element.short_name;
          }
          if (element.types.includes("administrative_area_level_1")) {
            region = element.long_name;
          }
        });
        if (countryName && countryCode && region) {
          resolve({ countryName, countryCode, region });
        } else {
          reject(new Error(`something went wrong in reverseGeoCoding`));
        }
      });
  });
}
