import React from 'react';
import { shallow } from 'enzyme';

import CardContainer from './../../containers/CardContainer';
import Card from './../../components/Card';


describe('CardContainer', () => {
  let wrapper;
  beforeEach(() => {
    let card = {
      id: 1,
      sibling_id: 2,
      front: '#FFF'
    }
    wrapper = shallow(
      <CardContainer card={card}/>
    );
  });

  describe('props', () => {
    it('must receive a card as prop', () => {
      expect(() => {
        shallow(<CardContainer />)
      }).toThrow();
    });

    it('card must has card shape', () => {
      expect(
        () => {
          shallow(<CardContainer card={{}} />)
        }
      ).toThrow();
    });
  })
    
  it('Renders a `Card`', () => {
    expect(
      wrapper.contains(<Card />)
    ).toBeTruthy();
  });
});