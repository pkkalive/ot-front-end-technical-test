import { combineReducers } from 'redux';
import { getTableData, getChartData } from './TableReducer';

export default combineReducers({
  getTableData,
  getChartData,
})