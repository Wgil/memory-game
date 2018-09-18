import React from "react";
import { shallow } from "enzyme";

import Game from "../../containers/Game";
import GameOver from "../../components/GameOver";
import cards from "../../cards";
import Board from "../../components/Board";

describe("Game", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Game />);
  });

  it("Renders a `Board`", () => {
    expect(wrapper.find(Board).length).toBe(1);
  });

  it("Pass cards state to `Board` as props", () => {
    const board = wrapper.find(Board).first();
    expect(board.props().cards).toEqual(wrapper.state().cards);
  });

  it("Should not render a `GameOver` component", () => {
    expect(wrapper.find(GameOver).length).toBe(0);
  });

  it("Should has 0 cards played", () => {
    expect(wrapper.state().cardsPlayed).toBe(0);
  });

  describe("User clicks a card", () => {
    let firstClickedCardId = 1;
    beforeEach(() => {
      const board = wrapper.find(Board).first();
      board.simulate("cardClick", firstClickedCardId);
    });

    it("and the card should flip", () => {
      const cards = wrapper.state().cards.map(card => {
        return { ...card };
      });
      const clickedCard = cards.find(card => card.id === firstClickedCardId);
      clickedCard.flipped = true;
      const stateCard = wrapper
        .state()
        .cards.find(card => card.id === firstClickedCardId);

      expect(stateCard.flipped).toBeTruthy();
      expect(wrapper.state().cards).toEqual(cards);
    });

    describe("Then clicks another card", () => {
      beforeEach(() => {
        jest.useFakeTimers();
      });

      describe("and they are not pairs", () => {
        beforeEach(() => {
          const board = wrapper.find(Board).first();
          board.simulate("cardClick", 3);
        });

        it("both cards should flip back", () => {
          jest.runAllTimers();
          expect(wrapper.state().cards[0].flipped).toBeFalsy();
          expect(wrapper.state().cards[2].flipped).toBeFalsy();
        });

        it("clicks a third one immediately and should not flip", () => {
          const board = wrapper.find(Board).first();
          board.simulate("cardClick", 4);
          jest.runAllTimers();
          expect(wrapper.state().cards[3].flipped).toBeFalsy();
        });
      });

      describe("and they are pairs", () => {
        let secondClickedCardId = 2;
        beforeEach(() => {
          const board = wrapper.find(Board).first();
          board.simulate("cardClick", secondClickedCardId);
        });

        it("both cards should not be playable anymore", () => {
          jest.runAllTimers();
          const firstClickedCard = wrapper
            .state()
            .cards.find(card => card.id === firstClickedCardId);
          const secondClickedCard = wrapper
            .state()
            .cards.find(card => card.id === secondClickedCardId);

          expect(firstClickedCard.played).toBeTruthy();
          expect(secondClickedCard.played).toBeTruthy();
          expect(wrapper.state().cardsPlayed).toBe(2);
        });

        it("both cards should not be clickeable after played", () => {
          jest.runAllTimers();
          const board = wrapper.find(Board).first();
          board.simulate("cardClick", firstClickedCardId);
          board.simulate("cardClick", secondClickedCardId);

          const firstClickedCard = wrapper
            .state()
            .cards.find(card => card.id === firstClickedCardId);
          const secondClickedCard = wrapper
            .state()
            .cards.find(card => card.id === secondClickedCardId);

          expect(firstClickedCard).toBeTruthy();
          expect(secondClickedCard).toBeTruthy();
        });

        it("clicks a third one immediately and should not flip", () => {
          const board = wrapper.find(Board).first();
          board.simulate("cardClick", 4);
          jest.runAllTimers();

          const clickedCard = wrapper.state().cards.find(card => card.id === 4);
          expect(clickedCard.flipped).toBeFalsy();
        });
      });
    });

    describe("and then clicks it once again but is the only card flipped", () => {
      it("should not flip back", () => {
        const board = wrapper.find(Board).first();
        board.simulate("cardClick", 1);

        const clickedCard = wrapper.state().cards.find(card => card.id === 1);
        expect(clickedCard.flipped).toBeTruthy();
      });
    });

    describe("And there are no more cards to play", () => {
      beforeEach(() => {
        wrapper.setState({ cardsPlayed: cards.length });
      });

      it("should not render a `Board`", () => {
        expect(wrapper.find(Board).length).toBe(0);
      });

      it("should render a `GameOver` component", () => {
        expect(wrapper.find(GameOver).length).toBe(1);
      });

      describe("then user restart the game", () => {
        beforeEach(() => {
          wrapper.find(GameOver).simulate("restart");
        });

        it("should render a `Board`", () => {
          expect(wrapper.find(Board).length).toBe(1);
        });

        it("should not render a `GameOver` component", () => {
          expect(wrapper.find(GameOver).length).toBe(0);
        });
      });
    });
  });
});
