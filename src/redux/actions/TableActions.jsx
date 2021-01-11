import GenerateActions from './actionHelper/GenerateActions';
import { GET_TABLE_DATA, GET_CHART_DATA } from '../actionTypes/ActionTypes';
import { GET } from '../../utilities/API';

function setTableData(data){
  return GenerateActions(GET_TABLE_DATA, data)
}

function setChartData(data){
  return GenerateActions(GET_CHART_DATA, data)
}

// "association_score": {
//   "datatypes": {
//     "literature": 0.19517772984514156, 
//     "rna_expression": 0.07211524912501942,
//     "genetic_association": 0.22628011248337543,
//     "somatic_mutation": 0.0,
//     "known_drug": 0.0,
//     "animal_model": 0.0,
//     "affected_pathway": 0.5
//   },
//   "overall": 0.5827636456183956,

// literature, rna_expression, genetic_association, somatic_mutation, known_drug, animal_model, affected_pathway

export function getTableData(){
  const tableData = [], chartData = [];
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
      chartData.push(tableObj.datatypes);
      tableObj = Object.create({})
    })
    dispatch(setTableData(tableData));
    dispatch(setChartData(chartData));
  }
}