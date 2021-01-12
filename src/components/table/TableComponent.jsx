import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTableData } from '../../redux/actions/TableActions';
import { Table, TableContainer, Paper } from '@material-ui/core';
import TableHeader from './tableHelper/TableHeader';
import { headCells } from './tableHelper/HeadCells';
import TableContent from './tableHelper/TableContent';

function TableComponent() {
  const dispatch = useDispatch();
  const tableData = useSelector(state => state?.getTableData?.tableData);
  const chartData = useSelector(state => state?.getChartData?.chartData);

  useEffect(() => {
    dispatch(getTableData())
  },[dispatch])
  
  return (
    <TableContainer component={Paper}>
    {
      tableData && (
        <Table aria-label="collapsible table">
          <TableHeader headCells = {headCells} />
          <TableContent rows = {tableData} charts = {chartData}/>
        </Table>
      )
    }
    </TableContainer>

  )
}

export default TableComponent;