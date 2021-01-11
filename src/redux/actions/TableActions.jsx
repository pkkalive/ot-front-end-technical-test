import GenerateActions from './actionHelper/GenerateActions';
import { GET_TABLE_DATA } from '../actionTypes/ActionTypes';
import { GET } from '../../utilities/API';

function setTableData(data){
  return GenerateActions(GET_TABLE_DATA, data)
}

export function getTableData(){
  const tableData = [];
  let dataObj = {}
  return async (dispatch) => {
    const response = await GET();
    response.data.data.forEach((item) => {
      dataObj.symbol = item?.target?.gene_info?.symbol;
      dataObj.id = item?.target?.id;
      dataObj.name = item?.target?.gene_info.name;
      dataObj.overall = item?.association_score.overall;
      tableData.push(dataObj);
      dataObj = Object.create({})
    })
    dispatch(setTableData(tableData));
  }
}