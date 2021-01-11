import * as types from '../../../redux/actionTypes/ActionTypes';
import * as reducer from '../../../redux/reducers/TableReducer';

describe ('Table Reducers', () => {
  it ('Table Reducer Test Cases', () => {
    expect(reducer.getTableData(undefined, {})).toEqual([]);
    expect(reducer.getTableData({}, {
      type: types.GET_TABLE_DATA,
      payload: [{data: 'items'}]
    })).toEqual({tableData: [{data: 'items'}]});
  })
})