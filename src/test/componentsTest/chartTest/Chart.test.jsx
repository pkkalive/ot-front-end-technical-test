import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Charts from '../../../components/charts/Charts';

Enzyme.configure({adapter: new Adapter()});

describe('Chart Component', () => {
  test("renders", () => {
    const component = shallow(<Charts />)
    expect(component.exists()).toBe(true);
  })
})