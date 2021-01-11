import { GET_TABLE_DATA, GET_CHART_DATA } from '../actionTypes/ActionTypes';
import { initialState } from '../initialState/InitialState';

export function getTableData (state = initialState.tableData, action = null){
  if (action.type === GET_TABLE_DATA){
    return {
      ...state,
      tableData: action.payload
    }
  } else {
    return state;
  }
}

export function getChartData (state = initialState.chartData, action = null){
  if (action.type === GET_CHART_DATA){
    return {
      ...state,
      chartData: action.payload
    }
  } else {
    return state;
  }
}