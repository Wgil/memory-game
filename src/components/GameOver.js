import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Restart from "./Restart";
import FadeIn from "./FadeIn";

const Container = styled.div`
  display: grid;
  place-items: center;
  place-self: center;
  grid-column-end: 3;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 50px;
  background: rgba(191, 191, 191, 0.1);
  border: 1px solid #ccc;
  color: #333;
  animation: ${FadeIn} 0.5s ease-in forwards;
`;

const GameOver = ({ onRestart, restarting, score }) => (
  <Container>
    <h1>Congratulations!</h1>
    {score && <p>{score}</p>}
    <Restart onRestart={onRestart} restarting={restarting} />
  </Container>
);

GameOver.propTypes = {
  onRestart: PropTypes.func.isRequired
};

export default GameOver;
