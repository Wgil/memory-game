/* istanbul ignore file */
import React from "react";
import styled, { keyframes } from "styled-components";

import PropTypes from "prop-types";

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: grid;
  place-content: center;
  place-self: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  font-size: 40px;
  color: #ffb400cc;
  font-weight: bold;
  transition: transform 0.1s;
  cursor: pointer;

  ${({ restarting }) =>
    restarting &&
    `
    animation: ${Rotate} .3s forwards;
    `} &:hover {
    transform: scale(1.2);
  }
`;

const Restart = ({ onRestart, restarting }) => (
  <Container onClick={onRestart} restarting={restarting}>
    &#8635;
  </Container>
);

Restart.propTypes = {
  onRestart: PropTypes.func.isRequired
};

export default Restart;
