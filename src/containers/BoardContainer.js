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
        return id === card.id
          ? Object.assign({}, card, { flipped: !card.flipped })
          : Object.assign({}, card);
      })
    }));
  };

  flipCards = cards => cards.map(card => this.flipCard(card.id));

  addFlippedCard = card => {
    card = Object.assign({}, card, { flipped: true });
    this.setState(prevState => ({
      flippedCards:
        prevState.flippedCards.length < 2
          ? [...prevState.flippedCards, card]
          : [card]
    }));
  };

  playCard = id => {
    this.setState(prevState => ({
      cards: prevState.cards.map(card => {
        return id === card.id
          ? Object.assign({}, card, { played: true })
          : Object.assign({}, card);
      })
    }));
  };

  playCards = () => this.state.flippedCards.map(card => this.playCard(card.id));

  cardCanFlip = card =>
    !card.played && !(this.state.flippedCards.length && card.flipped);

  areFlippedCardsPair = () =>
    this.state.flippedCards[0].id === this.state.flippedCards[1].sibling_id;

  verifyFlippedCards = card => {
    if (this.areFlippedCardsPair()) {
      this.playCards();
    }
    this.flipCards(this.state.flippedCards);
  };

  handleCardClick = id => {
    const card = this.state.cards.find(card => card.id === id);

    if (!this.cardCanFlip(card)) {
      return;
    }

    this.flipCard(card.id);
    this.addFlippedCard(card);

    if (this.state.flippedCards.length > 1) {
      this.verifyFlippedCards(card);
    }
  };

  render() {
    return (
      <Board cards={this.state.cards} onCardClick={this.handleCardClick} />
    );
  }
}

export default BoardContainer;
