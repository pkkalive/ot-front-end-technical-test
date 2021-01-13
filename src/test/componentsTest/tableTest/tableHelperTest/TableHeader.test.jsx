import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableHeader from '../../../../components/table/tableHelper/TableHeader';
import { headCells } from '../../../../components/table/tableHelper/HeadCells';

Enzyme.configure({adapter: new Adapter()});

describe('TableHeader Component', () => {
  test("renders", () => {
    const component = shallow(<TableHeader headCells={headCells} />)
    expect(component.exists()).toBe(true);
  })
})