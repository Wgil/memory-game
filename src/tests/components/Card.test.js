import React from "react";
import { shallow } from "enzyme";

import Card from "./../../components/Card";

describe("`Card`", () => {
  describe("Props", () => {
    it("must receive `onClick` prop", () => {
      expect(() => shallow(<Card played={false} flipped={false} />)).toThrow();
    });

    it("`onClick` must be a fn", () => {
      expect(() =>
        shallow(<Card onClick={1} played={false} flipped={false} />)
      ).toThrow();
    });

    it("must receive `flipped` prop", () => {
      const handler = () => 0;
      expect(() =>
        shallow(<Card onClick={handler} played={false} />)
      ).toThrow();
    });

    it("`flipped` must be bool", () => {
      const handler = () => 0;
      expect(() =>
        shallow(<Card onClick={handler} flipped={1} played={false} />)
      ).toThrow();
    });

    it("must receive `played` prop", () => {
      const handler = () => 0;
      expect(() =>
        shallow(<Card onClick={handler} flipped={false} />)
      ).toThrow();
    });

    it("`played` must be bool", () => {
      const handler = () => 0;
      expect(() =>
        shallow(<Card onClick={handler} flipped={false} played={1} />)
      ).toThrow();
    });
  });
});
