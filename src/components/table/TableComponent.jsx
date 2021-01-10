import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTableData } from '../../redux/actions/TableActions';

function TableComponent() {
  const dispatch = useDispatch();
  const tableData = useSelector(state => state?.getTableData?.tableData)

  useEffect(() => {
    dispatch(getTableData())
  },[dispatch])
  
  console.log(tableData);
  return (
    <p> Here comes the table component</p>
  )
}

export default TableComponent;