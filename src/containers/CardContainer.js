import React, { Component } from "react";

import Card from "./../components/Card";
import CardPropType from "./../propTypes/CardPropType";
import "./Card.css";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false
    };
  }

  flip = props => {
    //Adjust property of Flipped on the card to be true
    props.flipped = !props.flipped;
    //Change State of Flipped Card, Needed in Order for CSS Transition to Work
    this.setState(prevState => {
      return { flipped: !prevState.flipped };
    });
  };

  render() {
    return (
      <Card
        className={this.state.flipped ? "card is-flipped" : "card fade"}
        onClick={() => this.flip(this.props.card)}
      >
        <div className="card__face card__face--front" />
        <div className="card__face card__face--back" />
      </Card>
    );
  }
}

CardContainer.propTypes = {
  card: CardPropType.isRequired
};

export default CardContainer;
