import React from "react";
import PropTypes from "prop-types";

import Card from "./../components/Card";
import CardPropType from "./../propTypes/CardPropType";

const CardContainer = ({ card, onClick }) => (
  <Card flipped={card.flipped} onClick={onClick} />
);

CardContainer.propTypes = {
  card: CardPropType.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CardContainer;
