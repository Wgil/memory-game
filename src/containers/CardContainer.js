// Cuota especial para bomba edificio dunaflor 3b
import React from "react";
import PropTypes from "prop-types";

import Card from "./../components/Card";
import CardPropType from "./../propTypes/CardPropType";

const CardContainer = ({ card, onClick }) => (
  <Card onClick={onClick} {...card} />
);

CardContainer.propTypes = {
  card: CardPropType.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CardContainer;
