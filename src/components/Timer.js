/* istanbul ignore file */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  font-size: 25px;
  color: #333;
  font-weight: 400;
`;

const Timer = () => <Container>00:00</Container>;

export default Timer;
