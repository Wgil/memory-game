import React from "react";
import { shallow } from "enzyme";

import CardContainer from "./../../containers/CardContainer";
import Card from "./../../components/Card";

describe("CardContainer", () => {
  let wrapper;
  const onClick = jest.fn();
  beforeEach(() => {
    const card = {
      id: 1,
      pair_id: 2,
      front: "#FFF",
      flipped: false,
      played: false
    };
    wrapper = shallow(<CardContainer card={card} onClick={onClick} />);
  });

  afterEach(() => {
    onClick.mockClear();
  });

  describe("props", () => {
    it("must receive a card as prop", () => {
      expect(() => {
        shallow(<CardContainer />);
      }).toThrow();
    });

    it("card must has card shape", () => {
      expect(() => {
        shallow(<CardContainer card={{}} />);
      }).toThrow();
    });

    it("must receive `onClick` prop", () => {
      const card = {
        id: 1,
        pair_id: 2,
        front: "#FFF",
        flipped: false,
        played: false
      };
      expect(() => {
        shallow(<CardContainer card={card} />);
      }).toThrow();

      it("`onClick` should be a function", () => {
        const card = {
          id: 1,
          pair_id: 2,
          front: "#FFF",
          flipped: false,
          played: false
        };
        expect(() => {
          shallow(<CardContainer card={card} onClick={1} />);
        }).toThrow();
      });
    });
  });

  it("pass flipped as false to the Card", () => {
    expect(wrapper.find(Card).props().flipped).toBeFalsy();
  });

  describe("User clicks the card", () => {
    beforeEach(() => {
      wrapper
        .find(Card)
        .first()
        .simulate("click");
    });

    it("and it calls `onClick` prop", () => {
      expect(onClick.mock.calls.length).toBe(1);
    });
  });
});
