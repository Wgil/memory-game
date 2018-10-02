import React from "react";
import { shallow } from "enzyme";

import Orientation from "./../containers/Orientation";
import App from "../App";
import Game from "../containers/Game";
import RotateInfo from "../components/RotateInfo";

describe(`App`, () => {
  it("should render a `Orientation`", () => {
    expect(shallow(<App />).find(Orientation).length).toBe(1);
  });

  it("should pass a `Game` as landscape prop", () => {
    expect(
      shallow(<App />)
        .find(Orientation)
        .props().landscape
    ).toBe(Game);
  });

  it("should pass a `RotateInfo` as protrait prop", () => {
    expect(
      shallow(<App />)
        .find(Orientation)
        .props().portrait
    ).toBe(RotateInfo);
  });
});
