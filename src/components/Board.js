import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CardPropType from "../propTypes/CardPropType";
import CardContainer from "../containers/CardContainer";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-self: center;
  grid-column-start: 2;
  grid-gap: 20px;
`;

const Board = ({ cards }) => (
  <Grid>
    {cards.map(card => (
      <CardContainer key={card.id} card={card} />
    ))}
  </Grid>
);

Board.propTypes = {
  cards: PropTypes.arrayOf(CardPropType).isRequired
};

export default Board;
