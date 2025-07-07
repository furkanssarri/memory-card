import { useState, useEffect } from "react";
import Gameover from "./Gameover";
import Card from "./Card";

import { useData } from "../hooks/fetch";
import { getShuffled } from "../hooks/sort";

const Gameboard = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(score);
  const [isFlipped, setIsFlipped] = useState(new Set());
  const [isGameOver, setIsGameOver] = useState(false);
  const [data, setData] = useState(null);

  const dataFetched = useData();

  useEffect(() => {
    if (dataFetched !== null) {
      setData(dataFetched);
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
      const shuffledData = getShuffled(data);
      setData(shuffledData);
      setScore((s) => s + 1);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setIsFlipped(new Set());
    setIsGameOver(false);
    const shuffledData = getShuffled(data);
    setData(shuffledData);
  };

  return (
    <>
      <header>
        <h1>Memory Card</h1>
        <div className="scoreboard">
          <p>Score: {score}</p>
          <p>Best score: {bestScore}</p>
        </div>
      </header>
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
        {isGameOver && <Gameover onRestart={handleRestart} score={score} />}
      </div>
    </>
  );
};

export default Gameboard;
