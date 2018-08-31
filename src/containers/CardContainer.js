import React, { Component } from 'react';

import Card from './../components/Card';
import CardPropType from './../propTypes/CardPropType';

class CardContainer extends Component {
  render() {
    return (
      <Card />
    )
  }
}

CardContainer.propTypes = {
  card: CardPropType.isRequired
};

export default CardContainer;