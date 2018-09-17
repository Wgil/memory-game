import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: grid;
  place-content: center;
  place-self: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  font-size: 55px;
  color: #ffb400cc;
  font-weight: bold;
  transition: transform 0.1s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const Restart = ({ onRestart }) => (
  <Container onClick={onRestart}>&#8635;</Container>
);

Restart.propTypes = {
  onRestart: PropTypes.func.isRequired
};

export default Restart;
