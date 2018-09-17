import React, { Component } from "react";

import BoardContainer from "./BoardContainer";
import GameOver from "../components/GameOver";
import Menu from "./../components/Menu";
import cards from "../cards";

class App extends Component {
  state = {
    cardsPlayed: 0,
    gameOver: false
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

  playCard = () => {
    this.setState(prevState => ({
      cardsPlayed: prevState.cardsPlayed + 1
    }));
  };

  restartGame = () => {
    this.setState({ gameOver: false });
  };

  componentDidUpdate() {
    if (this.state.cardsPlayed === cards.length)
      this.setState({ gameOver: true, cardsPlayed: 0 });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.gameOver ? (
          <GameOver onRestart={this.restartGame} />
        ) : (
          <BoardContainer
            onPlay={this.playCard}
            cards={this.shuffleCards(cards)}
          />
        )}
        <Menu onRestart={this.restartGame} />
      </React.Fragment>
    );
  }
}

export default App;
