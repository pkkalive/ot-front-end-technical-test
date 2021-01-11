import GenerateActions from './actionHelper/GenerateActions';
import { GET_TABLE_DATA } from '../actionTypes/ActionTypes';
import { GET } from '../../utilities/API';

function setTableData(data){
  return GenerateActions(GET_TABLE_DATA, data)
}

export function getTableData(){
  const tableData = [];
  let tableObj = {};
  return async (dispatch) => {
    const response = await GET();
    response.data.data.forEach((item) => {
      tableObj.symbol = item?.target?.gene_info?.symbol;
      tableObj.id = item?.target?.id;
      tableObj.name = item?.target?.gene_info.name;
      tableObj.overall = item?.association_score.overall;
      tableObj.datatypes = Object.entries(item?.association_score?.datatypes)
      .map(item => Object.assign({}, { name: item[0], y: item[1] }));
      tableData.push(tableObj);
      tableObj = Object.create({})
    })
    tableData.sort((a,b) => (b.overall > a.overall) ? 1 : ((a.overall > b.overall) ? -1 : 0)); 
    dispatch(setTableData(tableData));
  }
}