import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Restart from "./Restart";
import Timer from "./../containers/Timer";
import Octicon from "react-octicon";

const Container = styled.div`
  padding: 5px;
  grid-column-end: -1;
  justify-self: end;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  font-size: 20px;
`;

const Link = styled.a`
  display: grid;
  place-content: center;
  place-self: end;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  font-size: 20px;
  color: #333;
  text-decoration: none;
`;

const Menu = ({ onRestart, restarting, isTimerRunning, onStop }) => (
  <Container>
    <Timer started={isTimerRunning} restart={restarting} onStop={onStop} />
    <Restart onRestart={onRestart} restarting={restarting} />
    <Link href="https://github.com/Wgil/memory-game" target="_BLANK">
      <Octicon name="mark-github" mega />
    </Link>
  </Container>
);

Menu.propTypes = {
  onRestart: PropTypes.func.isRequired
};

export default Menu;
