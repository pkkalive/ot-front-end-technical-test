import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../../components/header/Header';
import { ThemeProvider } from "@material-ui/styles";
import theme from '../../../theme/Theme';
import { render } from '@testing-library/react'; 

Enzyme.configure({adapter: new Adapter()});
describe('Header Component', () => {
  it("Header Component Test Cases", () => {
    const wrapper = shallow(<ThemeProvider theme={theme}><Header /></ThemeProvider>);
    expect(wrapper.exists()).toBe(true);
    const {debug} = render(<ThemeProvider theme={theme}><Header /></ThemeProvider>);
    debug();
  })
})