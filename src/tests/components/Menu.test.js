import React from "react";
import { shallow } from "enzyme";

import Menu from "../../components/Menu";
import Timer from "../../components/Timer";
import Restart from "../../components/Restart";

describe(`Menu`, () => {
  let wrapper;
  let onRestart = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Menu onRestart={onRestart} />);
  });

  it("should receive a `onRestart` prop", () => {
    expect(() => {
      shallow(<Menu />);
    }).toThrow();
  });

  it("must receive a valid `onRestart` prop", () => {
    expect(() => {
      shallow(<Menu onRestart={1} />);
    }).toThrow();
  });

  it("should render a `Timer`", () => {
    expect(wrapper.find(Timer).length).toBe(1);
  });

  it("should render a `Restart", () => {
    expect(wrapper.find(Restart).length).toBe(1);
  });
});
