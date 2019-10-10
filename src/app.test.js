import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './app';

describe('TEST APP COMPONENT', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('can find Login', () => {
    const app = mount(<App />)
    expect(app.find('Login')).toBeTruthy();
  });


  it('can find LoginProvider', () => {
    const app = mount(<App />)
    expect(app.find('LoginProvider')).toBeTruthy();
  });

  it('can mount and find Runs', () => {
    const app = mount(<App />)
    expect(app.find('Runs')).toBeTruthy();
  });

  it('can mount and find GoogleMap', () => {
    const app = mount(<App />)
    expect(app.find('GoogleMap')).toBeTruthy();
  });

});
