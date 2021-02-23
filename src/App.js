import GameBoard from "./Components/GameBoard";

import "./styles.css";

export default function App() {
  document.body.style = "background-color:blue";
  return (
    <div className="main">
      <h3 className="heading">Tic Tac Toe</h3>
      <div className="mainBoard">
        <GameBoard />
      </div>
    </div>
  );
}
