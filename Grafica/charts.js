window.docReady(() => {
    createAndAddLineChart();
    createAndAddPieChart();
});

function createAndAddLineChart() {
    // chart data...
    let mesesIntervalo = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let datos = [{
        name: 'Comunicaciones',
        data: [50, 200, 120, 150, 235, 254, 250, 293, 280, 124, 102, 134]
    },
    {
        name: 'Ocio',
        data: [50, 30, 20, 15, 23, 25, 34, 29, 39, 12, 10, 13]
    },
    {
        name: 'Alimentación',
        data: [155, 132, 158, 156, 250, 135, 134, 129, 139, 112, 110, 113]
    },
    {
        name: 'Combustible',
        data: [50, 55, 60, 65, 70, 75, 80, 100, 170, 80, 85, 82]
    },
    {
        name: 'Otros',
        data: [45, 45, 49, 50, 60, 65, 62, 66, 62, 66, 70, 65]
    }];

    // Configure and put the chart in the Html document
    Highcharts.chart('containerLinea', {
        title: {
            text: ''
        },


        yAxis: {
            title: {
                text: 'Euros'
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2020'
            },
            categories: mesesIntervalo

        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                }
            }
        },

        series: datos,

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}

function createAndAddPieChart() {
    Highcharts.chart('containerTarta', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Comunicaciones',
                y: 134/407,
            },  {
                name: 'Ocio',
                y: 13/407
            },  {
                name: 'Alimentación',
                y: 113/407
            }, {
                name: 'Combustible',
                y: 82/407
            }, {
                name: 'Otros',
                y: 65/407
            }]
        }]
    });
    
}