import React from "react";
import { shallow } from "enzyme";
import Orientation from "../../containers/Orientation";

describe(`Orientation`, () => {
  let wrapper;
  const portrait = () => "Portrait";
  const landscape = () => "Landscape";
  window.screen.orientation = {
    type: "landscape-primary"
  };
  let map = {};

  beforeEach(() => {
    window.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    wrapper = shallow(
      <Orientation portrait={portrait} landscape={landscape} />
    );
  });

  it("should fail if no prop `portrait`", () => {
    expect(() => {
      shallow(<Orientation landscape={landscape} />);
    }).toThrow();
  });

  it("should fail if no prop `landscape`", () => {
    expect(() => {
      shallow(<Orientation portrait={portrait} />);
    }).toThrow();
  });

  describe("renders", () => {
    it("should set the state to the window orientation type", () => {
      expect(wrapper.state().type).toBe(window.screen.orientation.type);
    });

    it("should render the landscape component", () => {
      expect(wrapper.find(landscape).length).toBe(1);
      expect(wrapper.find(portrait).length).toBe(0);
    });

    describe("and rotates", () => {
      it("should change the state `type`", () => {
        window.screen.orientation = {
          type: "portrait-primary"
        };
        map.orientationchange();
        expect(wrapper.state().type).toBe("portrait-primary");
      });
    });
  });
});
