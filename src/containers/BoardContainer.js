import React, { Component } from "react";

import Board from "./../components/Board";
import cards from "./../cards";

class BoardContainer extends Component {
  render() {
    return <Board cards={cards} />;
  }
}

export default BoardContainer;
