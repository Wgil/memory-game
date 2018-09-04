import React, { Component } from "react";
import PropTypes from "prop-types";

import Card from "./../components/Card";
import CardPropType from "./../propTypes/CardPropType";

class CardContainer extends Component {
  handleClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <Card flipped={this.props.card.flipped} onClick={this.handleClick} />
    );
  }
}

CardContainer.propTypes = {
  card: CardPropType.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CardContainer;
