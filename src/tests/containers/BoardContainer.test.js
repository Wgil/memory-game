import React from 'react';
import { shallow } from 'enzyme';

import BoardContainer from './../../containers/BoardContainer';
import Board from './../../components/Board';
import cards from './../../cards';

describe('BoardContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <BoardContainer />
    );
  });
    
  it('Renders a `Board`', () => {
    expect(
      wrapper.find(Board).length
    ).toBe(1);
  });

  it('Pass cards to `Board` as props', () => {
    const renderedBoard = wrapper.find(Board).first();
    expect(
      renderedBoard.props().cards
    ).toEqual(cards);
  });
});