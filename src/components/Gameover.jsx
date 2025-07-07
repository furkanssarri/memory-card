const Gameover = ({ isGameOver }) => {
  const gameOverMessage = "Game Over";

  return <div>{isGameOver && gameOverMessage}</div>;
};

export default Gameover;
