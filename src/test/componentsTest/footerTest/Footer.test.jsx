import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../../../components/footer/Footer';

Enzyme.configure({adapter: new Adapter()});

describe('Footer Component', () => {
  test("renders", () => {
    const component = shallow(<Footer />)
    expect(component.exists()).toBe(true);
  })
})