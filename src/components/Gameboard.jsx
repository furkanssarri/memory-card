import { useState, useEffect } from "react";
import Gameover from "./Gameover";
import Card from "./Card";

import { useData } from "../hooks/fetch";

const Gameboard = () => {
  // const [score, setScore] = useState(0);
  // const [bestScore, setBestScore] = useState(0);
  // const [isFlipped, setisFlipped] = useState(false);
  // const [isGameOver, setisGameOver] = useState(false);
  const [data, setdata] = useState(null);

  const dataFetched = useData();

  useEffect(() => {
    if (dataFetched !== null) {
      setdata(dataFetched);
    }
  }, [dataFetched]);

  return (
    <div className="game-board">
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((item) => (
          <Card key={item.id} name={item.name} image={item.image} />
        ))}
    </div>
  );
};

export default Gameboard;
