import React from "react";
import { shallow } from "enzyme";

import Card from "./../../components/Card";

describe("`Card`", () => {
  describe("Props", () => {
    it("must receive `onClick` prop", () => {
      expect(() => shallow(<Card />)).toThrow();
    });

    it("`onClick` must be a fn", () => {
      expect(() => shallow(<Card onClick={1} />)).toThrow();
    });

    it("must receive `flipped` prop", () => {
      const handler = () => 0;
      expect(() => shallow(<Card onClick={handler} />)).toThrow();
    });

    it("`flipped` must be bool", () => {
      const handler = () => 0;
      expect(() => shallow(<Card onClick={handler} flipped={1} />)).toThrow();
    });
  });
});
