import React, { Component } from 'react';
import Board from './../components/Board';
import CardContainer from './CardContainer';
import cards from './../cards';

class BoardContainer extends Component {
  render() {
    return (
      <Board>
        { cards.map(card => <CardContainer key={card.id} card={card} />) }
      </Board>
    )
  }
}

export default BoardContainer;