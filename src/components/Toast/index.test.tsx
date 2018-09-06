import * as React from 'react';
import { shallow, render, mount } from 'enzyme';
import { Toast } from './index';
import * as renderer from 'react-test-renderer';

describe('<Toast />', () => {
  // shallow render with enzyme
  it('renders without crashing', () => {
    shallow(<Toast text="hello world" />);
  });

  // Just taste enzyme function
  it('text', () => {
    const text = 'hello world';
    const wrapper = shallow(<Toast text={text} />);
    expect(wrapper.text()).toBe(text);
    expect(wrapper.contains(text)).toBe(true);
  });

  // Snapshot Testing with Jest
  it('renders correctly', () => {
    const tree = renderer.create(<Toast text="hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // taste enzyme.render function
  it('should render correctly', () => {
    const tree = render(<Toast text="cool" />);
    expect(tree).toMatchSnapshot();
  });

  // taste shallow.find method
  it('should find', () => {
    const tree = shallow(<Toast text="cool" />);
    expect(tree.find('.toast-container').text()).toBe('cool');
  });

  // taste enzyme mount function
  it('should mount render correctly', () => {
    const wrapper = mount(<Toast text="cool" />);
    expect(() => renderer.create(wrapper[0]).toJSON()).not.toThrow();
  });
});
