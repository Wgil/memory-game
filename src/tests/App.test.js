import React from "react";
import { shallow } from "enzyme";

import App from "./../App";
import BoardContainer from "./../containers/BoardContainer";
import GameOver from "./../components/GameOver";
import cards from "./../cards";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("Renders a `BoardContainer`", () => {
    expect(wrapper.find(BoardContainer).length).toBe(1);
  });

  it("Should not render a `GameOver` component", () => {
    expect(wrapper.find(GameOver).length).toBe(0);
  });

  it("should have 0 cards played", () => {
    expect(wrapper.state().cardsPlayed).toBe(0);
  });

  describe("User finds a card", () => {
    beforeEach(() => {
      wrapper.find(BoardContainer).simulate("play");
    });

    it("App should increments cards played", () => {
      expect(wrapper.state().cardsPlayed).toBe(1);
    });

    describe("And there are no more cards to play", () => {
      beforeEach(() => {
        wrapper.setState({ cardsPlayed: cards.length });
      });

      it("should not render a `BoardContainer`", () => {
        expect(wrapper.find(BoardContainer).length).toBe(0);
      });

      it("should render a `GameOver` component", () => {
        expect(wrapper.find(GameOver).length).toBe(1);
      });

      describe("then user restart the game", () => {
        beforeEach(() => {
          wrapper.find(GameOver).simulate("restart");
        });

        it("should render a `BoardContainer`", () => {
          expect(wrapper.find(BoardContainer).length).toBe(1);
        });

        it("Should not render a `GameOver` component", () => {
          expect(wrapper.find(GameOver).length).toBe(0);
        });
      });
    });
  });
});
