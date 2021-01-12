import { Fragment, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import GenerateCharts from '../tableHelper/GenerateCharts';
import { BAR_CHART, SPIDER_WEB_CHART } from '../../../redux/actionTypes/ActionTypes';
import { TableCell, TableBody, TableRow, IconButton, Collapse, 
  Box, Grid } from '@material-ui/core';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <TableRow>
        <TableCell width={15}>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <RemoveIcon fontSize='large'/> : <AddIcon fontSize='large'/>}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>{row.symbol}</TableCell>
        <TableCell >{row.id}</TableCell>
        <TableCell >{row.name}</TableCell>
        <TableCell >{row.overall}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Grid container spacing={4} justify='space-around' >
                <GenerateCharts flag = {BAR_CHART} chartData = {row.datatypes} />
                <GenerateCharts flag = {SPIDER_WEB_CHART} chartData = {row.spiderWeb}/>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

function TableContent (props) {
  const { rows } = props;
  return (
    <TableBody>
      {
        rows.slice(0, 5).map((row) => {
          return (
            <Row key={row.id} row = {row } />
          )
        })
      }
    </TableBody>
  )
}

export default TableContent;