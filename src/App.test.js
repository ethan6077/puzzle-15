import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('there is no header when the app starts', () => {
  const appWrapper = shallow(<App />);
  expect(appWrapper.contains(<Header />)).toBe(false);
});

it('renders Header when the puzzle resolved', () => {
  const appWrapper = shallow(<App />);
  appWrapper.instance().changePuzzleStatus();
  expect(appWrapper.contains(<Header />)).toBe(true);
});
