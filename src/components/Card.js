import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "./Card.css";

const Container = styled.div`
  background: lightgray;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #fff;
  border-radius: 5px;
  height: 200px;
  width: 200px;
`;

// TODO: Remove this line when the styled-component has covered all the styles.
/* istanbul ignore next */
const Card = props => {
  return (
    <Container
      onClick={props.onClick}
      className={props.flipped ? "card is-flipped" : "card fade"}
    >
      <div className="card__face card__face--front" />
      <div className="card__face card__face--back" />
    </Container>
  );
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired
};

export default Card;
