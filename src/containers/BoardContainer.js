import React, { Component } from "react";
import PropTypes from "prop-types";

import Board from "./../components/Board";
import CardPropType from "../propTypes/CardPropType";

const MAX_FLIPPED_CARDS = 2;

class BoardContainer extends Component {
  state = {
    cards: this.props.cards,
    flippedCards: []
  };

  flipCard = card => {
    this.setState(
      prevState => ({
        cards: prevState.cards.map(c => {
          return card.id === c.id
            ? Object.assign({}, c, { flipped: !c.flipped })
            : Object.assign({}, c);
        })
      }),
      () => {
        if (!card.flipped) this.addFlippedCard(card);
        else this.clearFlippedCards();
      }
    );
  };

  flipCards = cards => cards.map(this.flipCard);

  clearFlippedCards = () => this.setState({ flippedCards: [] });

  addFlippedCard = card => {
    card = Object.assign({}, card, { flipped: true });
    this.setState(
      prevState => ({
        flippedCards: [...prevState.flippedCards, card]
      }),
      () => {
        if (this.state.flippedCards.length === MAX_FLIPPED_CARDS)
          setTimeout(this.verifyPairs, 1000);
      }
    );
  };

  verifyPairs = () => {
    this.areFlippedCardsPair()
      ? this.playCards()
      : this.flipCards(this.state.flippedCards);
  };

  playCard = card => {
    this.setState(
      prevState => ({
        cards: prevState.cards.map(c => {
          return card.id === c.id
            ? Object.assign({}, c, { played: true })
            : Object.assign({}, c);
        }),
        flippedCards: []
      }),
      this.props.onPlay
    );
  };

  playCards = () => this.state.flippedCards.map(this.playCard);

  cardCanFlip = card => {
    const { flippedCards } = this.state;
    return (
      !card.played && !card.flipped && flippedCards.length !== MAX_FLIPPED_CARDS
    );
  };

  areFlippedCardsPair = () =>
    this.state.flippedCards[0].id === this.state.flippedCards[1].pair_id;

  handleCardClick = id => {
    const card = this.state.cards.find(card => card.id === id);
    if (!this.cardCanFlip(card)) return;
    this.flipCard(card);
  };

  render() {
    return (
      <Board cards={this.state.cards} onCardClick={this.handleCardClick} />
    );
  }
}

BoardContainer.propTypes = {
  onPlay: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(CardPropType).isRequired
};

export default BoardContainer;
