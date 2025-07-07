const Gameover = ({ onRestart, score }) => {
  return (
    <>
      <div className="modal">
        <h2>GAME OVER</h2>
        <p>Your score is: {score}</p>

        <button onClick={onRestart}>Restart Game</button>
      </div>
    </>
  );
};

export default Gameover;
