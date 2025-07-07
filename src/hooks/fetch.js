import { useState, useEffect } from "react";

export const useData = () => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    const url =
      "https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10]";
    let ignore = false;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setdata(json);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return data;
};
