/* istanbul ignore file */
import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const Disappear = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0);
  }
`;

const BACK_BACKGROUND = "#ffb400cc";

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-style: solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.5s;
  transform-style: preserve-3d;
  cursor: pointer;

  ${({ flipped }) =>
    flipped
      ? `
      border-width: 2px;
      border-color: #333;
      transform: rotateY(180deg) scale(1.05);
    `
      : `
      border-width: 2px;
      border-color: #fff;

      &:hover {
        transform: scale(1.05);
        border: 2px solid #333;
      }
    `}
  }

  ${({ played }) =>
    played &&
    `
      animation: ${Disappear} .2s ease-in forwards
    `}
`;

const Side = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const Back = styled(Side)`
  background: ${({ played }) => (!played ? BACK_BACKGROUND : "none")};
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.8;
  }
`;

const Front = styled(Side)`
  background: ${({ flipped, front }) => (flipped ? front : BACK_BACKGROUND)};
  transform: ${({ played }) => (!played ? "rotateY(180deg)" : "")};
`;

const Card = ({ onClick, flipped, front, played }) => (
  <Container onClick={onClick} flipped={flipped} front={front} played={played}>
    <Front flipped={flipped} front={front} played={played} />
    <Back played={played} />
  </Container>
);

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired,
  played: PropTypes.bool.isRequired
};

export default Card;
