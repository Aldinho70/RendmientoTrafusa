// Gráfica con Highcharts
class Highchart {
    initChart(data) {
        Highcharts.chart('graficaConsumo', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Consumo de Combustible'
            },
            xAxis: {
                categories: ['Inicio', 'Fin']
            },
            yAxis: {
                title: {
                    text: 'Litros (L)'
                }
            },
            series: [{
                name: 'Unidad 1',
                data: [
                    { y: (data.start_combustible), color: 'green' },
                    { y: (data.end_combustible), color: 'red' }
                ]
            }]
        });
    }
}

export default new Highchart();
