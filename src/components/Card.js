import React from "react";
import PropTypes from "prop-types";
import styled, {keyframes} from "styled-components";

const fader = keyframes `
  from {
    opacity: 1.0;
  }

  to {
    opacity: 0.3;
  }
`;

const Container = styled.div `
  transform: ${props => props.flipped
  ? "rotateY(180deg)"
  : ""};

  opacity: 1;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  background: lightgrey;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #fff;
  border-radius: 5px;
  height: 200px;
  width: 200px;
`;

const Front = styled.div `
  &:hover {
    animation: ${fader} 0.5s ease-in forwards;
  }

  background: #ffb400cc;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`;

const Back = styled.div `
  display: ${props => props.flipped
  ? "block"
  : "none"};

  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  background: lightgray;
  transform: rotateY(180deg);
`;

// TODO: Remove this line when the styled-component has covered all the styles.
/* istanbul ignore next */
const Card = props => {
  return (
    <Container onClick={props.onClick} flipped={props.flipped}>
      <Front/>
      <Back flipped={props.flipped}/>
    </Container>
  );
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired
};

export default Card;
