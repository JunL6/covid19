import React, { setState } from "react";

export default function useIpLocation() {
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
