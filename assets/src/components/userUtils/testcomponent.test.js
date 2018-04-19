import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
