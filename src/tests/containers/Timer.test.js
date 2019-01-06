import React from "react";
import { shallow } from "enzyme";
import Timer from "../../containers/Timer";
import VisibleTimer from "../../components/VisibleTimer";

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
      Date.now = jest.fn().mockReturnValue(FakeDateValue);
      wrapper = shallow(
        <Timer started={false} restart={false} onStop={onStop} />
      );
    });

    afterEach(() => {
      jest.clearAllTimers();
      onStop.mockClear();
      window.Date.now = RealDate;
    });

    it("should render a `VisibleTimer`", () => {
      const timer = wrapper.find(VisibleTimer);
      expect(timer.length).toBe(1);
      expect(timer.props().started).toBe(wrapper.props().started);
      expect(timer.props().time).toBe("00:00");
    });

    describe("and passed down `started` as true", () => {
      let timer;
      beforeEach(() => {
        timer = shallow(<Timer started={true} restart={false} />);
      });

      it("should set `runningSince` state as the current date", () => {
        expect(timer.state().runningSince).toBe(Date.now());
      });

      it("unmounts and clears the interval", () => {
        timer.unmount();
        expect(clearInterval).toHaveBeenCalledWith(expect.any(Number));
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
            Date.now = jest.fn().mockReturnValue(FakeDateValue);
            jest.runOnlyPendingTimers();
          });

          it("should set `runningSince` state as the current date", () => {
            expect(wrapper.state().runningSince).toBe(FakeDateValue);
          });
        });

        describe("and then it's stopped", () => {
          beforeEach(() => {
            wrapper.setProps({ started: false });
          });

          it("the interval should be cleared", () => {
            jest.runOnlyPendingTimers();
            Date.now = jest.fn().mockReturnValue(12345);
            expect(wrapper.state().runningSince).toBe(FakeDateValue);
            expect(clearInterval).toHaveBeenCalledWith(expect.any(Number));
          });

          it("`onStop` prop should be called", () => {
            expect(onStop.mock.calls.length).toBe(1);
            expect(onStop.mock.calls[0][0]).toBe("00:00");
          });

          describe("and then it's restarted", () => {
            beforeEach(() => {
              wrapper.setProps({ restart: true });
            });

            it("the interval should be cleared", () => {
              jest.runOnlyPendingTimers();
              Date.now = jest.fn().mockReturnValue(12345);
              expect(wrapper.state().runningSince).toBe(null);
              expect(clearInterval).toHaveBeenCalledWith(expect.any(Number));
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
