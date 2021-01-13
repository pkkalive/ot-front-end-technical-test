// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// npm i @testing-library/jest-dom@4.2.4 @testing-library/react@9.5.0 @testing-library/user-event@7.2.1
// npm i @testing-library/jest-dom@latest @testing-library/react@latest @testing-library/user-event@latest
import Enzyme, { shallow } from 'enzyme';
import App from '../../container/App';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';

Enzyme.configure({adapter: new Adapter()});

describe('Chart Component', () => {
  test("renders", async () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toBe(true);
    const {debug} = render(<App />);
    debug();
  })
})