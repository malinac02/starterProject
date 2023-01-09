import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

const Game = () => {
  let initialBoard = [null, null, null, null, null, null, null, null, null]
  let [board, setBoard] = useState(initialBoard);
  let [stepNumber, setStepNumber] = useState(0);
  let [xIsNext, setXisNext] = useState(true);

  let winner = calculateWinner(board);

  function currentPlayer(xIsNext) {
    if (xIsNext === true) {
      return "X";
    } else {
      return "O";
    }
  }

  let player = currentPlayer(xIsNext);
  
  function handleClick(index) {
    if (winner === null && board[index] === null) {
      let boardCopy = [...board];
      boardCopy[index] = currentPlayer(xIsNext);
      setBoard(boardCopy);
      setStepNumber(stepNumber + 1);
      setXisNext(!xIsNext);
    }
  }

  function jumpToStart() {
    setBoard(initialBoard);
    setStepNumber(0);
    setXisNext(xIsNext = true);
  }

  function calculateResult(winner, player) {
    let resultString = "";
    if (winner === "X") {
      return "Winner: X";
      
    }
    if (winner === "O") {
      return "Winner: O";
    }
    if (stepNumber === 9) {
      return "Tie Game";
    }
    return "Next Player: " +player;
  }

  let result = calculateResult(winner, player)

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick}/> 
      <div className='info-wrapper'>
          <div>
            <button className="button" onClick={jumpToStart}>Go to Start</button>
          </div>
          <h3>{result}</h3>
      </div>

    </>
  );
};

export default Game;