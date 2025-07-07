import { useState, useEffect } from "react";
import Gameover from "./Gameover";
import Card from "./Card";

import { useData } from "../hooks/fetch";

const Gameboard = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(score);
  const [isFlipped, setIsFlipped] = useState(new Set());
  const [isGameOver, setIsGameOver] = useState(false);
  const [data, setdata] = useState(null);

  const dataFetched = useData();

  useEffect(() => {
    if (dataFetched !== null) {
      setdata(dataFetched);
    }
  }, [dataFetched]);

  const handleFlip = (id) => {
    if (isFlipped.has(id)) {
      setIsGameOver(true);
      if (score > bestScore) {
        setBestScore(score);
      }
    } else {
      setIsFlipped(new Set(isFlipped).add(id));
      setScore((s) => s + 1);
    }
  };

  useEffect(() => {
    // TODO: remove this Effect (its only here for testing purposes)
    console.log(isGameOver);
  }, [isGameOver, isFlipped]);

  return (
    <div className="game-board">
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            onClick={() => handleFlip(item.id)}
          />
        ))}
      {isGameOver && <Gameover isGameOver={isGameOver} />}
    </div>
  );
};

export default Gameboard;
