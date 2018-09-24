import React, { Component } from "react";
import PropTypes from "prop-types";
import { renderElapsedString } from "../helpers";
import VisibleTimer from "../components/VisibleTimer";

class Timer extends Component {
  state = {
    runningSince: null
  };

  startTimer = () => {
    this.setState({ runningSince: Date.now() });
    this.intervalID = setInterval(() => this.forceUpdate(), 500);
  };

  stopTimer = () => {
    clearInterval(this.intervalID);
    this.props.onStop && this.props.onStop(this.getElapsedString());
  };

  restartTimer = () => {
    clearInterval(this.intervalID);
    this.setState({ runningSince: null });
  };

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  componentDidUpdate(prevProps) {
    const timerShouldStart = !prevProps.started && this.props.started;
    if (timerShouldStart) {
      this.startTimer();
      return;
    }

    const timerShouldStop = prevProps.started && !this.props.started;
    if (timerShouldStop) {
      this.stopTimer();
      return;
    }

    const timerShouldRestart = !prevProps.restart && this.props.restart;
    if (timerShouldRestart) {
      this.restartTimer();
      return;
    }
  }

  componentDidMount() {
    if (this.props.started) this.startTimer();
  }

  getElapsedString = () => renderElapsedString(0, this.state.runningSince);

  render() {
    return (
      <VisibleTimer
        started={this.props.started}
        time={this.getElapsedString()}
      />
    );
  }
}

Timer.propTypes = {
  started: PropTypes.bool.isRequired,
  restart: PropTypes.bool,
  onStop: PropTypes.func
};

export default Timer;
