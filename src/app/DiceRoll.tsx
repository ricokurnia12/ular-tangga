"use client";
import { useState } from "react";

const DiceRoll = () => {
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);

  // Function to roll dice
  const rollDice = () => {
    const newDiceOne = Math.floor(Math.random() * 6) + 1;
    const newDiceTwo = Math.floor(Math.random() * 6) + 1;

    setDiceOne(newDiceOne);
    setDiceTwo(newDiceTwo);
  };

  return (
    <div>
      {/* Dice 1 */}
      <div className="container">
        <div id="dice1" className={`dice dice-one show-${diceOne}`}>
          <div className={`side one ${diceOne === 1 ? "show" : ""}`}>
            <div className="dot one-1"></div>
          </div>
          <div className={`side two ${diceOne === 2 ? "show" : ""}`}>
            <div className="dot two-1"></div>
            <div className="dot two-2"></div>
          </div>
          <div className={`side three ${diceOne === 3 ? "show" : ""}`}>
            <div className="dot three-1"></div>
            <div className="dot three-2"></div>
            <div className="dot three-3"></div>
          </div>
          <div className={`side four ${diceOne === 4 ? "show" : ""}`}>
            <div className="dot four-1"></div>
            <div className="dot four-2"></div>
            <div className="dot four-3"></div>
            <div className="dot four-4"></div>
          </div>
          <div className={`side five ${diceOne === 5 ? "show" : ""}`}>
            <div className="dot five-1"></div>
            <div className="dot five-2"></div>
            <div className="dot five-3"></div>
            <div className="dot five-4"></div>
            <div className="dot five-5"></div>
          </div>
          <div className={`side six ${diceOne === 6 ? "show" : ""}`}>
            <div className="dot six-1"></div>
            <div className="dot six-2"></div>
            <div className="dot six-3"></div>
            <div className="dot six-4"></div>
            <div className="dot six-5"></div>
            <div className="dot six-6"></div>
          </div>
        </div>
      </div>

      {/* Dice 2 */}
      <div className="container">
        <div id="dice2" className={`dice dice-two show-${diceTwo}`}>
          <div className={`side one ${diceTwo === 1 ? "show" : ""}`}>
            <div className="dot one-1"></div>
          </div>
          <div className={`side two ${diceTwo === 2 ? "show" : ""}`}>
            <div className="dot two-1"></div>
            <div className="dot two-2"></div>
          </div>
          <div className={`side three ${diceTwo === 3 ? "show" : ""}`}>
            <div className="dot three-1"></div>
            <div className="dot three-2"></div>
            <div className="dot three-3"></div>
          </div>
          <div className={`side four ${diceTwo === 4 ? "show" : ""}`}>
            <div className="dot four-1"></div>
            <div className="dot four-2"></div>
            <div className="dot four-3"></div>
            <div className="dot four-4"></div>
          </div>
          <div className={`side five ${diceTwo === 5 ? "show" : ""}`}>
            <div className="dot five-1"></div>
            <div className="dot five-2"></div>
            <div className="dot five-3"></div>
            <div className="dot five-4"></div>
            <div className="dot five-5"></div>
          </div>
          <div className={`side six ${diceTwo === 6 ? "show" : ""}`}>
            <div className="dot six-1"></div>
            <div className="dot six-2"></div>
            <div className="dot six-3"></div>
            <div className="dot six-4"></div>
            <div className="dot six-5"></div>
            <div className="dot six-6"></div>
          </div>
        </div>
      </div>

      {/* Roll button */}
      <div id="roll" className="roll-button">
        <button onClick={rollDice}>Roll dice!</button>
      </div>
    </div>
  );
};

export default DiceRoll;
