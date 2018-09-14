/* istanbul ignore file */
import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const scale = keyframes`
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
  border: 1px solid #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.8s;
  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "")};
  transform-style: preserve-3d;
  animation: ${({ played }) => (played ? `${scale} .2s ease-in forwards` : "")};

  &:hover {
    transform: ${({ flipped, played }) =>
      flipped || played ? "" : "scale(1.08)"};
    transition-duration: ${({ flipped, played }) =>
      flipped || played ? "" : "0.3s"};
    border: 2px solid #333;
  }
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ played }) => (!played ? BACK_BACKGROUND : "none")};
  backface-visibility: hidden;
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ flipped, front }) => (flipped ? front : BACK_BACKGROUND)};
  transform: ${({ played }) => (!played ? "rotateY(180deg)" : "")};
  backface-visibility: hidden;
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
