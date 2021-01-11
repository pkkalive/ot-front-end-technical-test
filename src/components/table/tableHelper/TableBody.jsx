import React, { Fragment } from 'react';
import { TableCell, TableBody, TableRow, IconButton, Collapse, Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <Fragment>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.symbol}</TableCell>
        <TableCell >{row.id}</TableCell>
        <TableCell >{row.name}</TableCell>
        <TableCell >{row.overall}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              Here goes the bar chart
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
  
}

export default function (props) {
  const { rows } = props;

  return (
    <TableBody>
      {
        rows.map((row) => {
          return (
            <Row key={row.id} row = {row} />
          )
        })
      }
    </TableBody>
  )
}