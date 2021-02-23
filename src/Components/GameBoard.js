import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Box from "./Box";
import "./GameBoard.css";

function GameBoard() {
  const [gridValues, setGridValue] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " "
  ]);
  const index = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [symbol, setSymbol] = useState("O");
  const [isWin, setIsWin] = useState(false);
  const [displayWin, setDisplayWin] = useState("");
  const [isDraw, setIsDraw] = useState(false);

  function handleReset() {
    setIsWin(false);
    setIsDraw(false);
    setGridValue([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  }

  useEffect(() => {
    if (
      (gridValues[0] === "X" &&
        gridValues[1] === "X" &&
        gridValues[2] === "X") ||
      (gridValues[0] === "O" &&
        gridValues[1] === "O" &&
        gridValues[2] === "O") ||
      (gridValues[0] === "X" &&
        gridValues[3] === "X" &&
        gridValues[6] === "X") ||
      (gridValues[0] === "O" &&
        gridValues[3] === "O" &&
        gridValues[6] === "O") ||
      (gridValues[0] === "X" &&
        gridValues[4] === "X" &&
        gridValues[8] === "X") ||
      (gridValues[0] === "O" &&
        gridValues[4] === "O" &&
        gridValues[8] === "O") ||
      (gridValues[3] === "X" &&
        gridValues[4] === "X" &&
        gridValues[5] === "X") ||
      (gridValues[3] === "O" &&
        gridValues[4] === "O" &&
        gridValues[5] === "O") ||
      (gridValues[1] === "X" &&
        gridValues[4] === "X" &&
        gridValues[7] === "X") ||
      (gridValues[1] === "O" &&
        gridValues[4] === "O" &&
        gridValues[7] === "O") ||
      (gridValues[2] === "X" &&
        gridValues[4] === "X" &&
        gridValues[6] === "X") ||
      (gridValues[2] === "O" &&
        gridValues[4] === "O" &&
        gridValues[6] === "O") ||
      (gridValues[2] === "X" &&
        gridValues[5] === "X" &&
        gridValues[8] === "X") ||
      (gridValues[2] === "O" &&
        gridValues[5] === "O" &&
        gridValues[8] === "O") ||
      (gridValues[6] === "X" &&
        gridValues[7] === "X" &&
        gridValues[8] === "X") ||
      (gridValues[6] === "O" && gridValues[7] === "O" && gridValues[8] === "O")
    ) {
      updateWin();
    } else {
      checkDraw();
    }
  });
  function checkDraw() {
    let empty = false;
    for (var i = 0; i < gridValues.length; i++) {
      if (gridValues[i] === " ") {
        empty = true;
      }
    }
    if (!empty) {
      setIsDraw(true);
    }
  }

  function updateWin() {
    setIsWin(true);
    if (isWin === true && symbol === "O") {
      setDisplayWin("Congratulations Player X has Won");
    } else if (isWin === true && symbol === "X") {
      setDisplayWin("Congratulations Player O has Won");
    }
  }
  let playAgainBtn = "";
  if (isWin) {
    playAgainBtn = (
      <Button variant="warning" onClick={handleReset}>
        Play Again
      </Button>
    );
  }
  let drawBtn = "";
  if (isDraw) {
    drawBtn = (
      <Button variant="warning" onClick={handleReset}>
        Play Again
      </Button>
    );
  }

  if (!isWin) {
    return (
      <div className="board">
        {index.map((i) => {
          return (
            <Box
              gridIndex={i}
              symbol={symbol}
              setSymbol={setSymbol}
              gridValues={gridValues}
              setGridValue={setGridValue}
            />
          );
        })}
        {drawBtn}
      </div>
    );
  } else {
    return (
      <div className="whenWin">
        <h4 className="win">{displayWin}</h4>
        {playAgainBtn}
      </div>
    );
  }
}

export default GameBoard;
