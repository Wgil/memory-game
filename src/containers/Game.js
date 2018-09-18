import React, { Component } from "react";
import cards from "../cards";
import Board from "../components/Board";
import GameOver from "../components/GameOver";
import Menu from "../components/Menu";

const MAX_FLIPPED_CARDS = 2;

class GameContainer extends Component {
  state = {
    cards: [],
    flippedCards: [],
    cardsPlayed: 0,
    gameOver: false
  };

  restartGame = () => {
    this.setState({
      cards: this.shuffleCards(cards),
      cardsPlayed: 0,
      flippedCards: [],
      gameOver: false
    });
  };

  /* istanbul ignore next */
  shuffleCards = cards => {
    var currentIndex = cards.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }

    return cards;
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
    this.setState(prevState => ({
      cards: prevState.cards.map(c => {
        return card.id === c.id
          ? Object.assign({}, c, { played: true })
          : Object.assign({}, c);
      }),
      flippedCards: [],
      cardsPlayed: prevState.cardsPlayed + 1
    }));
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

  componentDidUpdate() {
    if (this.state.cardsPlayed === cards.length)
      this.setState({ gameOver: true, cardsPlayed: 0 });
  }

  componentDidMount() {
    this.setState({ cards: this.shuffleCards(cards) });
  }

  render() {
    const {
      state: { cards, gameOver },
      restartGame,
      handleCardClick
    } = this;
    return (
      <React.Fragment>
        {gameOver ? (
          <GameOver onRestart={restartGame} />
        ) : (
          <Board cards={cards} onCardClick={handleCardClick} />
        )}
        <Menu onRestart={restartGame} />
      </React.Fragment>
    );
  }
}

export default GameContainer;
