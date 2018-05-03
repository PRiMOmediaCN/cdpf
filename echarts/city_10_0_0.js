var city_10_0_num=new Array();
var option_city_10_0_num=new Array();
for(var i=0;i<city_data_10_0[1].length;i++) {
    option_city_10_0_num[i] = {

        tooltip: {
            trigger: 'item',

        },
        legend: [
            {
                data: series_name[1][i],
                x: '0',
                y: '0',
                textStyle: {
                    color: '#fff'
                }

            }
        ],
        grid: {
            left: 0, top: 45, width: '70%', height: '85%'
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
                name:series_name[1][i],
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


                data: city_data_10_0[1][i],

            }
        ]
    };

}