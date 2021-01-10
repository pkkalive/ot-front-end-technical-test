import GenerateActions from './actionHelper/GenerateActions';
import { GET_TABLE_DATA } from '../actionTypes/ActionTypes';
import { GET } from '../../utilities/API';

function setTableData(data){
  return GenerateActions(GET_TABLE_DATA, data)
}

export function getTableData(){
  return async (dispatch) => {
    const response = await GET();
    dispatch(setTableData(response.data));
  }
}