import { useState } from "react";
import "./DieRoll.css";

export default function DieRoll() {
  // Initial dice roll values
  const [roll, setRoll] = useState(Math.floor(Math.random() * 6) + 1);
  const [reroll, setReroll] = useState(Math.floor(Math.random() * 6) + 1);

  const [rollover, setRollover] = useState(Math.floor(Math.random() * 6) + 1);
  const [rerollover, setRerollover] = useState(Math.floor(Math.random() * 6) + 1);

  const [gameOver, setGameOver] = useState(false); // Game over state to disable buttons

  // Determine the winners based on updated rolls
  const isWinner = roll === reroll;
  const isWinner2 = rollover === rerollover;

  const getRoll1 = () => {
    const newRoll1 = Math.floor(Math.random() * 6) + 1;
    const newRoll2 = Math.floor(Math.random() * 6) + 1;
    setRoll(newRoll1);
    setReroll(newRoll2);
    if (newRoll1 === newRoll2 || rollover === rerollover) {
      setGameOver(true);
    }
  };

  const getRoll2 = () => {
    const newReRoll1 = Math.floor(Math.random() * 6) + 1;
    const newReRoll2 = Math.floor(Math.random() * 6) + 1;
    setRollover(newReRoll1);
    setRerollover(newReRoll2);
    if (newReRoll1 === newReRoll2 || roll === reroll) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setRoll(3);
    setReroll(1);
    setRollover(1);
    setRerollover(6);
    setGameOver(false); // Reset the game
  };

  return (
    <div className="DieRoll">
        <section>
        <div className="p1">
        <h1 style={{ color: isWinner ? "red" : "white" }}>PLAYER 1</h1>
        <div className="score">
          <h2 style={{ color: isWinner ? "red" : "white" }}>DIE 1: {roll}</h2>
          <h2 style={{ color: isWinner ? "red" : "white" }}>DIE 2: {reroll}</h2>
        </div>
        <button onClick={getRoll1} disabled={gameOver}>ROLL DIE</button>
        {isWinner && <h3 style={{ color: "white" }}>YOU WON!!! :)</h3>}
        {isWinner && <h4 style={{ color: "white" }}>CONGRATULATIONS</h4>}
        {!isWinner && gameOver && <h3 style={{ color: "red" }}>YOU LOST! TRY AGAIN</h3>}
      </div>

      <div className="p2">
        <h1 style={{ color: isWinner2 ? "red" : "white" }}>PLAYER 2</h1>
        <div className="score">
          <h2 style={{ color: isWinner2 ? "red" : "white" }}>DIE 1: {rollover}</h2>
          <h2 style={{ color: isWinner2 ? "red" : "white" }}>DIE 2: {rerollover}</h2>
        </div>
        <button onClick={getRoll2} disabled={gameOver}>ROLL DIE</button>
        {isWinner2 && <h3 style={{ color: "white" }}>YOU WON!!! :)</h3>}
        {isWinner2 && <h4 style={{ color: "white" }}>CONGRATULATIONS</h4>}
        {!isWinner2 && gameOver && <h3 style={{ color: "red" }}>OOPS YOU LOST! :( TRY AGAIN</h3>}
      </div>
        </section>

      {gameOver && (
        <div className="reset">
          <button onClick={resetGame}>PLAY AGAIN!!!</button>
        </div>
      )}
    </div>
  );
}
