import React from "react";
import { shallow } from "enzyme";
import GameOver from "../../components/GameOver";
import Restart from "../../components/Restart";
import Timer from "../../containers/Timer";

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

  // it("should render a `Timer`", () => {
  //   expect(wrapper.find(Timer).length).toBe(1);
  // });

  it("should render a `Restart`", () => {
    expect(wrapper.find(Restart).length).toBe(1);
  });
});
