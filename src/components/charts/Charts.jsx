import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts)

export default function (props){
  const { options } = props;
  return <HighchartsReact highcharts={Highcharts} options={options} />
}