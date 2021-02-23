import React from "react";
import "./Box.css";

function Box(props) {
  function handleClick(ind) {
    if (props.gridValues[ind] === " ") {
      console.log("here");
      if (props.symbol !== "X") {
        console.log("now here");
        props.setSymbol("X");
      } else if (props.symbol !== "O") {
        props.setSymbol("O");
      }

      props.setGridValue((prevValues) => {
        const newValues = prevValues.slice();
        newValues[ind] = props.symbol;
        return newValues;
      });
    }
  }

  return (
    <div
      key={props.gridIndex}
      onClick={() => handleClick(props.gridIndex)}
      className="box"
    >
      <span className="xo">{props.gridValues[props.gridIndex]}</span>
    </div>
  );
}
export default Box;
