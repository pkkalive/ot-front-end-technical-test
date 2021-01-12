import { useEffect, lazy, Suspense } from 'react';
import { messages } from '../../utilities/Constants';
import { headCells } from './tableHelper/HeadCells';
import { useDispatch, useSelector } from 'react-redux';
import { getTableData } from '../../redux/actions/TableActions';
import { Table, TableContainer, Paper } from '@material-ui/core';


const TableHeader = lazy(()=> import('./tableHelper/TableHeader'));
const TableContent = lazy(()=> import('./tableHelper/TableContent'));

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
        <Suspense fallback={<h6>{messages.loadingTable}</h6>}>
          <Table aria-label="collapsible table">
            <TableHeader headCells = {headCells} />
            <TableContent rows = {tableData} charts = {chartData}/>
          </Table>
        </Suspense>
      )
    }
    </TableContainer>

  )
}

export default TableComponent;