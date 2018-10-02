import React, { Component } from "react";
import PropTypes from "prop-types";

class Orientation extends Component {
  state = {
    type: ""
  };

  componentDidMount() {
    window.addEventListener("orientationchange", () => {
      this.setState({ type: window.screen.orientation.type });
    });
    this.setState({ type: window.screen.orientation.type });
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
