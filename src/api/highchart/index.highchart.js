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

   initChartLine(data) {
    const transformedData = data.map(item => [
        item.timestamp * 1000,  // Convertir timestamp a milisegundos
        item.fuel
    ]);
    console.log( transformedData );
    
    Highcharts.chart('graficaConsumo', {
        chart: {
            zoomType: 'x',  // Habilita zoom horizontal
            backgroundColor: '#ffffff',
            borderRadius: 8,
            spacing: [10, 10, 15, 10],
        },
        title: {
            text: 'Carga y Descarga de Combustible'
        },
        subtitle: {
            text: 'Arrastra en el gráfico para hacer zoom'
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: 'Hora'
            }
        },
        yAxis: {
            title: {
                text: 'Cantidad de Combustible (litros)'
            },
            min: 0
        },
        tooltip: {
            xDateFormat: '%H:%M:%S',
            shared: true,
            valueSuffix: ' litros'
        },
        legend: {
            enabled: true
        },
        exporting: {
            enabled: true  // Botón de exportar imagen, PDF, etc.
        },
        credits: {
            enabled: false  // Quitar marca de agua de Highcharts
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: true,  // Muestra puntos sobre la línea
                    radius: 3
                }
            }
        },
        series: [{
            name: 'Combustible',
            data: transformedData,
            color: '#007bff',
            lineWidth: 2
        }],
        navigator: {
            enabled: true  // Barra de navegación abajo
        },
        scrollbar: {
            enabled: true  // Scroll horizontal
        },
        rangeSelector: {
            enabled: false  // No se necesita si no usa rangos fijos
        }
    });
}

}
export default new Highchart();
