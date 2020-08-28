import { useState, useEffect } from "react";

export default function useStats(url) {
  const [stats, setStats] = useState();

  useEffect(() => {
    if (!url) {
      return;
    }
    async function fetchData() {
      const data = await fetch(url).then(
        (res) => res.json(),
        (reason) => console.log(reason)
      );

      setStats(data);
    }

    fetchData();
  }, [url]);

  console.log(stats);
  return stats;
}
