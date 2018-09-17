import React from "react";
import { shallow } from "enzyme";

import Restart from "../../components/Restart";

describe("`Restart`", () => {
  let wrapper;
  let onRestart = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Restart onRestart={onRestart} />);
  });

  it("must receive a `onRestart` prop", () => {
    expect(() => {
      shallow(<Restart />);
    }).toThrow();
  });

  it("must receive a valid `onRestart` prop", () => {
    expect(() => {
      shallow(<Restart onRestart={1} />);
    }).toThrow();
  });

  it("should call onRestart prop", () => {
    wrapper.simulate("click");
    expect(onRestart.mock.calls.length).toBe(1);
  });
});
