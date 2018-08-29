import styled from 'styled-components';

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-self: center;
  grid-column-start: 2;
  grid-gap: 20px;
`;

export default Board;