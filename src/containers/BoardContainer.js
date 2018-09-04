import React, { Component } from "react";

import Board from "./../components/Board";
import cards from "./../cards";

class BoardContainer extends Component {
  state = {
    cards: cards,
    flippedCards: []
  };

  flipCard = card => {
    this.setState(prevState => ({
      cards: prevState.cards.map(stateCard => {
        stateCard = Object.assign({}, stateCard);
        if (stateCard.id === card.id) {
          stateCard.flipped = !stateCard.flipped;
          card = stateCard;
        }
        return stateCard;
      }),
      flippedCards:
        prevState.flippedCards.length > 1
          ? [Object.assign({}, card)]
          : [...this.state.flippedCards, Object.assign({}, card)]
    }));
  };

  flipCards = cards => cards.map(this.flipCard);

  playCard = card => {
    this.setState(prevState => ({
      cards: prevState.cards.map(stateCard => {
        stateCard = Object.assign({}, stateCard);
        if (stateCard.id === card.id) {
          stateCard.played = true;
        }

        return stateCard;
      }),
      flippedCards: prevState.flippedCards.filter(
        flipped => flipped.id !== card.id
      )
    }));
  };

  playCards = () => this.state.flippedCards.map(this.playCard);

  clearFlipped = card => {
    this.flipCards(this.state.flippedCards);
    this.setState(prevState => ({
      ...prevState,
      flippedCards: [Object.assign({}, card)]
    }));
  };

  cardCanFlip = card =>
    !card.played && !(this.state.flippedCards.length && card.flipped);

  checkFlippedCards = card => {
    const wrongCards =
      this.state.flippedCards[0].id !== this.state.flippedCards[1].sibling_id;
    if (wrongCards) {
      this.clearFlipped(card);
    } else {
      this.playCards();
    }
  };

  handleCardClick = id => {
    const card = this.state.cards.find(card => card.id === id);
    if (this.cardCanFlip(card)) this.flipCard(card);

    if (this.state.flippedCards.length > 1) {
      this.checkFlippedCards(card);
    }
  };

  render() {
    return (
      <Board cards={this.state.cards} onCardClick={this.handleCardClick} />
    );
  }
}

export default BoardContainer;
