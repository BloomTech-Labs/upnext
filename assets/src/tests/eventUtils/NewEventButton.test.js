import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from '../../components/eventUtils/NewEventButton';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<TestComponent />);
  expect(wrapper).toHaveLength(1);
});
