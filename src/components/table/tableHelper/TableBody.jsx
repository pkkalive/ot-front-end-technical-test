import React, { Fragment } from 'react';
import { TableCell, TableBody, TableRow, IconButton, Collapse, Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import BarChart from '../../charts/Charts'

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const barOptions = {
    "chart": {
      "type": "column",
    },
    "title": {
      "text": "Associate Score vs Data Types"
    },
    "yAxis":{
      "visible": true,
    },
    "xAxis": {
      "type": "category",
    },
    legend: {
      enabled: false
    },
    "series": [{data: row.datatypes}]
  }

  const spiderWebOptions = {
    "chart": {
      "polar": true,
      "type": 'line'
    },
    "title": {
      "text": "Associate Score vs Data Types",
      x: -80
    },
    
    "xAxis": {
      "categories": ["literature", "rna_expression", "genetic_association", 
        "somatic_mutation", "known_drug", "animal_model", "affected_pathway"],
      "tickmarkPlacement": 'on',
      "lineWidth": 0
    },
    "yAxis": {
      "gridLineInterpolation": 'circle',
      "lineWidth": 0,
      "min": 0
    },
    "legend": {
      "enabled": false
    },
    "series": [
      {
        "data": [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
        "pointPlacement": 'on'
      }
    ],
  }

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
              <BarChart options={barOptions} />
              <BarChart options={spiderWebOptions} />
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