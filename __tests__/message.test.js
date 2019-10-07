import React from 'react';
import renderer from 'react-test-renderer';
import Runs from '../src/components/runs';


describe('<Runs />', () => {
  it('is alive at application start', () => {
    const app = shallow(<Runs />);
    expect(app.find('form').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Runs />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
