import React, { Component } from "react";

import Board from "./../components/Board";
import cards from "./../cards";

class BoardContainer extends Component {
  state = {
    cards: cards,
    flippedCards: []
  };

  flipCard = id => {
    this.setState(prevState => ({
      cards: prevState.cards.map(card => {
        card = Object.assign({}, card);
        if (card.id === id) {
          card.flipped = !card.flipped;
        }
        return card;
      })
    }));
  };

  flipCards = ids => ids.map(this.flipCard);

  cardCanFlip = id => {
    const card = this.state.cards.find(card => card.id === id);
    return !this.isTheOnlyCardFlipped(card);
  };

  isTheOnlyCardFlipped = card =>
    this.isAtLeastOneCardFlipped() && card.flipped ? true : false;

  isAtLeastOneCardFlipped = () =>
    this.state.cards.reduce((prev, curr) => prev || curr.flipped, false);

  checkSiblings = () => {
    const flippedCards = this.state.cards.filter(card => card.flipped);

    if (flippedCards[0].id !== flippedCards[1].sibling_id) {
      this.flipCards([flippedCards[0].id, flippedCards[1].id]);
      return;
    }
  };

  handleCardClick = id => {
    const card = this.state.cards.find(card => card.id === id);
    if (this.cardCanFlip(id)) {
      this.flipCard(id);
      this.setState(prevState => ({
        flippedCards: [...prevState.flippedCards, id]
      }));
    }

    const flippedCards = this.state.cards.filter(card => card.flipped);

    if (flippedCards.length > 1) {
      this.checkSiblings();
    }
  };

  render() {
    return (
      <Board cards={this.state.cards} onCardClick={this.handleCardClick} />
    );
  }
}

export default BoardContainer;
