import React from 'react';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

export default function (props) {
  const { headCells } = props;
  return (
    <TableHead>
      <TableRow>
        {
          headCells.map(cell => (
            <TableCell key = {`${cell.label}${cell.id}`}>{cell.label}</TableCell> 
          ))
        }
      </TableRow>
    </TableHead>
  )
}