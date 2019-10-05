// __tests__/app.test.js
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/app';

test('renders correctly', () => {
  const root = renderer.create(<App />);
  // const tree = renderer.create(<App />).toJSON();
  expect(root.toJSON()).toMatchSnapshot();
});
