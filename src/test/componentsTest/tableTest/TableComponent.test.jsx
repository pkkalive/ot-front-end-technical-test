import React from 'react';
import thunk from 'redux-thunk';
import * as Redux from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import TableComponent from '../../../components/table/TableComponent';
import { expectedMockData } from '../../reduxTest/actionsTest/TableActions.test';

Enzyme.configure({adapter: new Adapter()});
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Table Component', () => {
  let useEffect;
  let wrapper;
  const store = mockStore(expectedMockData);
  let mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => Promise.resolve(expectedMockData));
  };
  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    wrapper = shallow(<Redux.Provider store={store}><TableComponent /></Redux.Provider>);
  });
  test("Table Component Test Cases", () => {
    const component = shallow(<Redux.Provider store={store}><TableComponent /></Redux.Provider>)
    expect(component.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
    const {debug} = render(<Redux.Provider store={store}><TableComponent /></Redux.Provider>);
    debug();
  })
})