import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestComponent from '../../components/eventUtils/Events';

Enzyme.configure({ adapter: new Adapter() });

describe('<Events>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestComponent />, div);
  });
});
