import React from "react";
import { shallow } from "enzyme";
import Timer from "../../containers/Timer";

describe(`Timer`, () => {
  it("shoud receive `started` prop", () => {
    expect(() => {
      shallow(<Timer restart={false} />);
    }).toThrow();
  });

  it("should receive a valid `restart` prop", () => {
    expect(() => {
      shallow(<Timer restart={1} />);
    }).toThrow();
  });

  it("should receive a valid `onStop` prop", () => {
    expect(() => {
      shallow(<Timer started={false} restart={false} onStop={true} />);
    }).toThrow();
  });

  describe("`Timer` is rendered", () => {
    let wrapper;
    let onStop = jest.fn();
    // const RealDate = Date.now;
    // Date.now = jest.genMockFunction().mockReturnValue(Date.now());
    beforeEach(() => {
      wrapper = shallow(
        <Timer started={false} restart={false} onStop={onStop} />
      );
    });

    // afterEach(() => {
    //   window.Date.now = RealDate;
    // });

    describe("and passed down `started` as true", () => {
      it("should set `runningSince` state as the current date", () => {
        const timer = shallow(<Timer started={true} restart={false} />);
        expect(timer.state().runningSince).toBe(Date.now());
      });
    });

    describe("and passed down `started` as false", () => {
      it("`runningSince` state should be null", () => {
        expect(wrapper.state().runningSince).toBeNull();
      });

      describe("and it changes to `true`", () => {
        beforeEach(() => {
          wrapper.setProps({ started: true });
        });

        it("should set `runningSince` state as the current date", () => {
          expect(wrapper.state().runningSince).toBe(Date.now());
        });

        it("should set a `intervalID`", () => {
          expect(wrapper.instance().intervalID).toBeDefined();
        });
      });
    });
  });
});
