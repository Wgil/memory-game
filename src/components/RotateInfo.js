/* istanbul ignore file */
import React from "react";
import styled from "styled-components";
import rotateGif from "../assets/rotate.gif";

const Container = styled.div`
  grid-column: 1 / -1;
  background: #ffb400cc;
  display: grid;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  font-size: 10px;
  text-align: center;
  color: #fff;
`;

const RotateInfo = () => (
  <Container>
    <h1>Perhaps you can try rotating your phone.</h1>
    <img src={rotateGif} alt="Please, Rotate your phone" />
  </Container>
);

export default RotateInfo;
