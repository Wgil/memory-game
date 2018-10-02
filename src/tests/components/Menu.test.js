import React from "react";
import { shallow } from "enzyme";

import Menu from "../../components/Menu";
import Timer from "../../containers/Timer";
import Restart from "../../components/Restart";

describe(`Menu`, () => {
  let wrapper;
  let fakeFn = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <Menu
        onRestart={fakeFn}
        restarting={false}
        isTimerRunning={false}
        onStop={fakeFn}
      />
    );
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
