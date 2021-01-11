import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTableData } from '../../redux/actions/TableActions';
import { Table, TableContainer, Paper } from '@material-ui/core';
import TableHeader from './tableHelper/TableHeader';
import { headCells } from './tableHelper/HeadCells';
import TableBody from './tableHelper/TableBody';

function TableComponent() {
  const dispatch = useDispatch();
  const tableData = useSelector(state => state?.getTableData?.tableData)

  useEffect(() => {
    dispatch(getTableData())
  },[dispatch])
  
  return (
    <TableContainer component={Paper}>
    {
      tableData && (
        <Table aria-label="collapsible table">
          <TableHeader headCells = {headCells} />
          <TableBody rows = {tableData} />
        </Table>
      )
    }
      
    </TableContainer>

  )
}

export default TableComponent;