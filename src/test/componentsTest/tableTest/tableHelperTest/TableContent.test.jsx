import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableContent, { Row, RenderTabelCell } from '../../../../components/table/tableHelper/TableContent';
import { expectedMockData } from '../../../reduxTest/actionsTest/TableActions.test'

Enzyme.configure({adapter: new Adapter()});

describe('TableContent Component', () => {
  test("renders", () => {
    const component = shallow(<TableContent rows = {expectedMockData}/>)
    expect(component.exists()).toBe(true);
    const wrapper = shallow(<Row key={"row.id"} row = {expectedMockData[0] } />)
    expect(wrapper.exists()).toBe(true);
    const content = shallow(<RenderTabelCell row = {expectedMockData[0] } />)
    expect(content.exists()).toBe(true);
  })
})