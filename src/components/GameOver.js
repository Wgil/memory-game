import React from "react";
import PropTypes from "prop-types";

const GameOver = ({ onRestart }) => (
  <div>
    <h2>The Game is Over</h2>
    <button onClick={onRestart}>Play again</button>
  </div>
);

GameOver.propTypes = {
  onRestart: PropTypes.func.isRequired
};

export default GameOver;
