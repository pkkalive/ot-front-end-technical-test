import Chart from '../../charts/Charts';
import Grid from '@material-ui/core/Grid';
import { ChartOptions } from '../../charts/chartHelpers/ChartOptions';
import { BAR_CHART, SPIDER_WEB_CHART } from '../../../redux/actionTypes/ActionTypes';

function GenerateCharts(props) {
  const {flag, chartData} = props;
  let options = {...ChartOptions};
  options.series = [{data: chartData}]
  switch (flag) {
    case BAR_CHART: {
      options.chart =  { type: 'column'}
      options.yAxis = {
        title: {
          text: 'Score',
          style: {
            fontWeight: 'bold'
          },
        },
      }
      options.xAxis.labels.rotation = 315
      options.xAxis.title = {
        text: 'Data',
        style: {
          fontWeight: 'bold'
        },
      }
      break;
    }
    case SPIDER_WEB_CHART: {
      options.chart = { polar: true, type: 'line'}
      options.xAxis.title = ""
      options.xAxis.labels = {style: {fontWeight: 'bold',fontSize: 10}}
      options.yAxis = {gridLineInterpolation : 'circle'}
      break;
    }
    default: 
      break;
  }
  
  return (
    <Grid item xs={12} sm={5}>
      <Chart options={options}/>
    </Grid>
  )
}

export default GenerateCharts;