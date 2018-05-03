
var city_farming_num=new Array();
var option_city_farming_num=new Array();
for(var i=0;i<city_data_1_1[1].length;i++) {
    option_city_farming_num[i] = {

        tooltip: {
            trigger: 'item',

        },
        legend: [
            {
                data: series_name[1][i],
                x: '55',
                y: '0',
                textStyle: {
                    color: '#fff'
                }

            }
        ],
        calculable: true,
        grid: {
            left: 55, top: 50, width: '70%', height: '80%'
        },
        xAxis: [
            {
                type: 'value',
                show: false,

            }
        ],
        yAxis: [
            {
                type: 'category',
                show: false,

            }
        ],
        series: [
            {
                name: series_name[1][i],
                type: 'bar',
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#1be3ff'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'right',
                            formatter: '{c}'
                        }
                    },


                },


                data: city_data_1_1[1][i],

            }
        ]
    };

}
