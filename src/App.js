import React, { Component } from "react";

import BoardContainer from "./containers/BoardContainer";
import cards from "./cards";
import GameOver from "./components/GameOver";

class App extends Component {
  state = {
    cardsPlayed: 0,
    gameOver: false
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

  renderBoard = () => <BoardContainer onPlay={this.playCard} />;

  renderGameOver = () => <GameOver onRestart={this.restartGame} />;

  render() {
    return this.state.gameOver ? this.renderGameOver() : this.renderBoard();
  }
}

export default App;
