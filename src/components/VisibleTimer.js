/* istanbul ignore file */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  font-size: 20px;
  font-weight: 400;
  color: ${({ started }) => (started ? "red" : "#333")};
`;

const VisibleTimer = ({ started, time }) => (
  <Container started={started}>{time}</Container>
);

export default VisibleTimer;
