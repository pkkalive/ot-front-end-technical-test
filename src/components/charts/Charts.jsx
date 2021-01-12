import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts)

function Chart(props){
  const { options } = props;
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Chart;