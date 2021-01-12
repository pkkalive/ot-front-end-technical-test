export const ChartOptions = {
  chart: {},
  credits: {
    enabled: false
  },
  title: {
    text: 'Associate Score vs Data Types',
    align: 'left'
  },
  yAxis:{},
  xAxis: {
    type: 'category',
    categories: ['literature', 'rna_expression', 'genetic_association', 
      'somatic_mutation', 'known_drug', 'animal_model', 'affected_pathway'],
    tickmarkPlacement: 'on',
    labels: {
      
    },
  },
  legend: {
    enabled: false
  },
  colors: ['#398ac8'],
  series: []
}