import React from 'react';
import { shallow } from 'enzyme';

import CardContainer from './../../containers/CardContainer';
import Card from './../../components/Card';


describe('CardContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardContainer />
    );
  });
    
  it('Renders a `Card`', () => {
    expect(
      wrapper.contains(<Card />)
    ).toBeTruthy();
  }); 
});