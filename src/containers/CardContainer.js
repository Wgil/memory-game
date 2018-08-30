import React, { Component } from 'react';
import Card from './../components/Card';
import './Card.css'



class CardContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      flipped: false
    }
  }


  cardFlip = (props) => {
    //Adjust property of Flipped on the card to be true
    props.flipped = true;
    //Change State of Flipped Card, Needed in Order for CSS Transition to Work
    this.setState({flipped: true})
  }



  render() {
    return (
      <Card className={this.state.flipped ? 'flip backofCard' : 'fade'} onClick={() => this.cardFlip(this.props.card)}/>
    )
  }
}

export default CardContainer;