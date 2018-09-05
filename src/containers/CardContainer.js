import React, {Component} from "react";

import Card from "./../components/Card";
import CardPropType from "./../propTypes/CardPropType";

class CardContainer extends Component {
  state = {
    flipped: false
  };

  flip = () => {
    this.setState(prevState => {
      return {
        flipped: !prevState.flipped
      };
    });
  };

  handleClick = () => {
    this.flip();
  };

  render() {
    return <Card flipped={this.state.flipped} onClick={this.handleClick}/>;
  }
}

CardContainer.propTypes = {
  card: CardPropType.isRequired
};

export default CardContainer;
