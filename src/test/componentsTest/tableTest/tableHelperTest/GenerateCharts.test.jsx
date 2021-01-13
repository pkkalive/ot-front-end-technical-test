import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenerateCharts from '../../../../components/table/tableHelper/GenerateCharts';
import { BAR_CHART, SPIDER_WEB_CHART } from '../../../../redux/actionTypes/ActionTypes';

Enzyme.configure({adapter: new Adapter()});

describe('GenerateCharts Component', () => {
  test("renders", () => {
    const component = shallow(<GenerateCharts flag = {SPIDER_WEB_CHART} chartData = {[]}/>)
    expect(component.exists()).toBe(true);
    const wrapper = shallow(<GenerateCharts flag = {BAR_CHART} chartData = {[]}/>)
    expect(wrapper.exists()).toBe(true);
    const noFlagWrapper = shallow(<GenerateCharts flag = {""} chartData = {[]}/>)
    expect(noFlagWrapper.exists()).toBe(true);
  })
})