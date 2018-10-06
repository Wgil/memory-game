import React, { Component } from "react";
import PropTypes from "prop-types";

const isMobileDevice = () =>
  typeof window.orientation !== "undefined" ||
  navigator.userAgent.indexOf("IEMobile") !== -1;

const isLandscape = () => Math.abs(window.orientation) === 90;

const orientationType = () => {
  if (isMobileDevice()) {
    return isLandscape() ? "landscape-primary" : "portrait";
  } else {
    return window.screen.orientation.type;
  }
};

class Orientation extends Component {
  state = {
    type: orientationType()
  };

  componentDidMount() {
    window.addEventListener("orientationchange", () => {
      this.setState({ type: orientationType() });
    });
  }

  render() {
    const allowedDeviceOrientations = [
      "landscape-primary",
      "landscape-secondary"
    ];
    if (allowedDeviceOrientations.indexOf(this.state.type) === -1)
      return React.createElement(this.props.portrait);

    return React.createElement(this.props.landscape);
  }
}

Orientation.propTypes = {
  landscape: PropTypes.func.isRequired,
  portrait: PropTypes.func.isRequired
};

export default Orientation;
