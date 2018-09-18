import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Restart from "./Restart";
import Timer from "./Timer";
import Octicon from "react-octicon";

const Container = styled.nav`
  padding: 10px;
  grid-column-end: -1;
  justify-self: end;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  background: rgba(191, 191, 191, 0.1);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
`;

const Link = styled.a`
  display: grid;
  place-content: center;
  place-self: end;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  font-size: 25px;
  color: #333;
  text-decoration: none;
`;

const Menu = ({ onRestart, restarting }) => (
  <Container>
    <Timer />
    <Restart onRestart={onRestart} restarting={restarting} />
    <Link href="https://github.com/Wgil/memory-game" target="_BLANK">
      <Octicon name="mark-github" mega />
    </Link>
  </Container>
);

Menu.propTypes = {
  onRestart: PropTypes.func.isRequired
};

export default Menu;
