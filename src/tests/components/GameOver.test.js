import React from "react";
import { shallow } from "enzyme";
import GameOver from "../../components/GameOver";

describe("`GameOver`", () => {
  let wrapper;
  let onRestart;
  beforeEach(() => {
    onRestart = jest.fn();
    wrapper = shallow(<GameOver onRestart={onRestart} />);
  });

  afterEach(() => {
    onRestart.mockClear();
  });

  it("must receive `onRestart` prop", () => {
    expect(() => {
      shallow(<GameOver />);
    }).toThrow();
  });

  it("must receive a valid `onRestart` prop", () => {
    expect(() => {
      shallow(<GameOver onRestart={1} />);
    }).toThrow();
  });

  describe("The user clicks the restart button", () => {
    it("and it should call the `onRestart` prop", () => {
      wrapper.find("button").simulate("click");

      expect(onRestart.mock.calls.length).toBe(1);
    });
  });
});
