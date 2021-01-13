import * as Redux from 'react-redux';
import { createStore } from 'redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableComponent from '../../../components/table/TableComponent';
import RootReducer from '../../../redux/reducers/RootReducer';

let store = createStore(RootReducer);

Enzyme.configure({adapter: new Adapter()});

const spy = jest.spyOn(Redux, 'useSelector')
spy.mockReturnValue({ username:'test' })

describe('Table Component', () => {
  test("Table Component Test Cases", () => {
    const component = shallow(<Redux.Provider store={store}><TableComponent /></Redux.Provider>)
    expect(component.exists()).toBe(true);
  })
})