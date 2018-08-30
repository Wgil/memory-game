import React from 'react';
import { shallow } from 'enzyme';

import Board from './../../components/Board';
import CardContainer from './../../containers/CardContainer';

describe('Board', () => {

  describe('props', () => {
    it('must receive cards', () => {
        expect(
          () => shallow(<Board />)
        ).toThrow();
    });
  
    it('cards must be an array', () => {
      expect(
        () => shallow(<Board cards={1} />)
      ).toThrow();
    });
  
    it('cards must an array of valid cards', () => {
      const cards = [42];
      expect(
        () => shallow(<Board cards={cards} />)
      ).toThrow();
    });
  });

  it('should have 2 `CardContainer`', () => {
    const cards = [
      {
        "id": 1,
        "sibling_id": 2,
        "front": "1"
      },
      {
        "id": 2,
        "sibling_id": 1,
        "front": "1"
      }
    ];
    const board = shallow(<Board cards={cards} />);
    cards.map(card => {
        expect(
          board.contains(<CardContainer key={card.id} card={card}/>)
        ).toBeTruthy();
    });
  });
});