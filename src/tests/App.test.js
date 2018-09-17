import React from "react";
import { shallow } from "enzyme";

import GameContainer from "./../containers/GameContainer";
import App from "../App";

describe(`App`, () => {
  it("should render a `GameContainer`", () => {
    expect(shallow(<App />).find(GameContainer).length).toBe(1);
  });
});
