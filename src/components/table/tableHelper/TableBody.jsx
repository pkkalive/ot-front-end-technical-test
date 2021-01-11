import React, { Fragment } from 'react';
import { TableCell, TableBody, TableRow, IconButton, Collapse, Box, Grid } from '@material-ui/core';
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
    credits: {
      enabled: false
    },
    "title": {
      "text": "Associate Score vs Data Types",
      align: "left"
    },
    "yAxis":{
      "min": 0,
      title: {
        text: "Score",
        style: {
          fontWeight: "bold"
        },
      },
    },
    "xAxis": {
      "type": "category",
      "categories": ["literature", "rna_expression", "genetic_association", 
        "somatic_mutation", "known_drug", "animal_model", "affected_pathway"],
      "tickmarkPlacement": 'on',
      labels: {
        rotation: 315,
        style: {
          fontWeight: "bold",
          fontSize: 10,
        },
      },
      title: {
        text: "Data",
        style: {
          fontWeight: "bold"
        },
      },
      
    },
    legend: {
      enabled: false
    },
    colors: ["#398ac8"],
    "series": [{data: row.datatypes}]
  }

  const spiderWebOptions = {
    "chart": {
      "polar": true,
      "type": 'line'
    },
    credits: {
      enabled: false
    },
    "title": {
      "text": "Associate Score vs Data Types",
      align: "left"
    },
    
    "xAxis": {
      "categories": ["literature", "rna_expression", "genetic_association", 
        "somatic_mutation", "known_drug", "animal_model", "affected_pathway"],
      "tickmarkPlacement": 'on',
      "lineWidth": 0,
      "type": "category",
      labels: {
        style: {
          fontWeight: "bold",
          fontSize: 10,
        },
      },
    },
    "yAxis": {
      "gridLineInterpolation": 'circle',
      "lineWidth": 0,
      "min": 0
    },
    "legend": {
      "enabled": false
    },
    colors: ["#398ac8"],
    "series": [
      {
        "data": row.spiderWeb,
        "pointPlacement": 'on'
      }
    ],
  }

  return (
    <Fragment>
      <TableRow>
        <TableCell width={15}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <RemoveIcon fontSize="large"/> : <AddIcon fontSize="large"/>}
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
              <Grid container spacing={4} justify="space-around" >
                <Grid item xs={12} sm={5}>
                  <BarChart options={barOptions} />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <BarChart options={spiderWebOptions} />
                </Grid>
              </Grid>
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
        rows.slice(0, 5).map((row) => {
          return (
            <Row key={row.id} row = {row } />
          )
        })
      }
    </TableBody>
  )
}