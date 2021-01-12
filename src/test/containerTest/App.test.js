// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import Enzyme, { shallow } from 'enzyme';
import App from '../../container/App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Chart Component', () => {
  test("renders", async () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toBe(true);
  })
})