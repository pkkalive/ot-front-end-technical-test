import React, { Fragment } from 'react';
import { TableCell, TableBody, TableRow, IconButton, Collapse, Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/core/styles';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

export default function (props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  return (
    <TableBody>
      {
        row.map((item, index) => {
          return (
            <Fragment key={index}>
              <TableRow className={classes.root} border={1}>
                <TableCell>
                  <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                    {open ? <RemoveIcon /> : <AddIcon />}
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{item.symbol}</TableCell>
                <TableCell >{item.id}</TableCell>
                <TableCell >{item.name}</TableCell>
                <TableCell >{item.overall}</TableCell>
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
        })
      }
      
    </TableBody>
  )
}