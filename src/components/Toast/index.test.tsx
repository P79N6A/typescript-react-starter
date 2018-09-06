import * as React from 'react';
import { shallow } from 'enzyme';
import { Toast } from './index';
import * as renderer from 'react-test-renderer';

describe('<Toast />', () => {
  // shallow render with enzyme
  it('renders without crashing', () => {
    shallow(<Toast text="hello world" />);
  });

  // Just teast enzyme function
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
});
