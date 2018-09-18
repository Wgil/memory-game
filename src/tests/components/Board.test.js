import React from "react";
import { shallow } from "enzyme";

import Board from "./../../components/Board";
import Card from "./../../components/Card";

describe("Board", () => {
  let wrapper;
  const onCardClick = jest.fn();
  const cards = [
    {
      id: 1,
      pair_id: 2,
      front: "1",
      flipped: false,
      played: false
    },
    {
      id: 2,
      pair_id: 1,
      front: "1",
      flipped: false,
      played: false
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<Board cards={cards} onCardClick={onCardClick} />);
  });

  afterEach(() => {
    onCardClick.mockClear();
  });

  describe("props", () => {
    it("must receive cards", () => {
      expect(() => shallow(<Board onCardClick={onCardClick} />)).toThrow();
    });

    it("cards must be an array", () => {
      expect(() =>
        shallow(<Board cards={1} onCardClick={onCardClick} />)
      ).toThrow();
    });

    it("cards must be an array of valid cards", () => {
      const cards = [42];
      expect(() =>
        shallow(<Board cards={cards} onCardClick={onCardClick} />)
      ).toThrow();
    });

    it("must receive `onCardClick` prop", () => {
      expect(() => shallow(<Board cards={cards} />)).toThrow();
    });

    it("`onCardClick` prop should be a function", () => {
      expect(() => shallow(<Board cards={cards} onCardClick={1} />)).toThrow();
    });
  });

  it("should render 2 `Card`", () => {
    expect(wrapper.find(Card).length).toBe(2);
  });

  describe("User clicks a card", () => {
    let card;
    beforeEach(() => {
      card = wrapper.find(Card).first();
      card.simulate("click");
    });

    it("and `onCardClick` prop should be called with the card ID", () => {
      const call = onCardClick.mock.calls[0];
      expect(call[0]).toBe(card.props().id);
    });
  });
});
