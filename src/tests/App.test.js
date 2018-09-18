import React from "react";
import { shallow } from "enzyme";

import Game from "./../containers/Game";
import App from "../App";

describe(`App`, () => {
  it("should render a `Game`", () => {
    expect(shallow(<App />).find(Game).length).toBe(1);
  });
});
