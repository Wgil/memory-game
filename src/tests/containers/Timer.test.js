import React from "react";
import { shallow } from "enzyme";
import Timer from "../../containers/Timer";

jest.useFakeTimers();

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
    let FakeDateValue = 123;
    const RealDate = Date.now;
    beforeEach(() => {
      Date.now = jest.genMockFunction().mockReturnValue(FakeDateValue);
      wrapper = shallow(
        <Timer started={false} restart={false} onStop={onStop} />
      );
    });

    afterEach(() => {
      jest.clearAllTimers();
      onStop.mockClear();
      window.Date.now = RealDate;
    });

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
          expect(wrapper.state().runningSince).toBe(FakeDateValue);
        });

        it("should set a re-render interval", () => {
          expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 500);
          expect(wrapper.instance().intervalID).toBeDefined();
        });

        describe("500ms after", () => {
          FakeDateValue = 1234;
          beforeEach(() => {
            Date.now = jest.genMockFunction().mockReturnValue(FakeDateValue);
            jest.runOnlyPendingTimers();
          });

          it("should set `runningSince` state as the current date", () => {
            expect(wrapper.state().runningSince).toBe(FakeDateValue);
          });
        });

        // We should mock the renderElapsedString thing
        describe("and then it's stopped", () => {
          beforeEach(() => {
            wrapper.setProps({ started: false });
          });

          it("the interval should be cleared", () => {
            jest.runOnlyPendingTimers();
            Date.now = jest.genMockFunction().mockReturnValue(12345);
            expect(wrapper.state().runningSince).toBe(FakeDateValue);
          });

          it("`onStop` prop should be called", () => {
            expect(onStop.mock.calls.length).toBe(1);
            // expect(onStop.mock.calls[0][0]).toBe("00:00"); // WATCH OUT
          });

          describe("and then it's restarted", () => {
            beforeEach(() => {
              wrapper.setProps({ restart: true });
            });

            it("the interval should be cleared", () => {
              jest.runOnlyPendingTimers();
              Date.now = jest.genMockFunction().mockReturnValue(12345);
              expect(wrapper.state().runningSince).toBe(null);
            });

            it("`runningSince` state should be null", () => {
              expect(wrapper.state().runningSince).toBeNull();
            });
          });
        });
      });
    });
  });
});
