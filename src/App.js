import GameBoard from "./Components/GameBoard";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row} from 'react-bootstrap';

import "./styles.css";

export default function App() {
  document.body.style = "background-color:blue";
  return (
    <Container className="">
      <Row className="justify-content-center"><span className='heading'>Tic Tac Toe</span></Row>
      <Row className="justify-content-center">
        <GameBoard />
      </Row>
    </Container>
  );
}
