import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CardPropType from "../propTypes/CardPropType";
import Card from "../components/Card";
import FadeIn from "./FadeIn";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-self: center;
  grid-column-start: 2;
  grid-gap: 20px;
  animation: ${FadeIn} 0.5s ease-in forwards;
`;

const Board = ({ cards, onCardClick }) => {
  return (
    <Grid>
      {cards.map(card => (
        <Card key={card.id} onClick={() => onCardClick(card.id)} {...card} />
      ))}
    </Grid>
  );
};

Board.propTypes = {
  cards: PropTypes.arrayOf(CardPropType).isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default Board;
