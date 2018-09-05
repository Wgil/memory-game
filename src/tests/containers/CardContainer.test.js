import React from "react";
import { shallow } from "enzyme";

import CardContainer from "./../../containers/CardContainer";
import Card from "./../../components/Card";

describe("CardContainer", () => {
  let wrapper;
  beforeEach(() => {
    let card = {
      id: 1,
      sibling_id: 2,
      front: "#FFF"
    };
    wrapper = shallow(<CardContainer card={card} />);
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
  });

  it("should not be flipped", () => {
    expect(wrapper.state().flipped).toBeFalsy();
  });

  it("pass flipped state to the Card", () => {
    expect(wrapper.find(Card).props().flipped).toBeFalsy();
  });

  describe("User clicks the card", () => {
    beforeEach(() => {
      wrapper
        .find(Card)
        .first()
        .simulate("click");
    });

    it("and the card flips", () => {
      expect(wrapper.state().flipped).toBeTruthy();
      expect(wrapper.find(Card).props().flipped).toBeTruthy();
    });

    describe("and clicks the card again", () => {
      beforeEach(() => {
        wrapper
          .find(Card)
          .first()
          .simulate("click");
      });

      it("and the card flips", () => {
        expect(wrapper.state().flipped).toBeFalsy();
        expect(wrapper.find(Card).props().flipped).toBeFalsy();
      });
    });
  });
});
