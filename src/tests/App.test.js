import React from 'react';
import { shallow } from 'enzyme';

import App from './../App';
import BoardContainer from './../containers/BoardContainer';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('Renders a `BoardContainer`', () => {
    expect(
      wrapper.contains(<BoardContainer />)
    ).toBeTruthy();
  });
});