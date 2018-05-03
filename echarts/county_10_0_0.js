var county_10_0_num =new Array();
var option_county_10_0_num =new Array();
for(var i=0;i<county_series_data_10_0.length;i++) {
    option_county_10_0_num[i] = {

        tooltip: {
            trigger: 'item',

        },
        legend: [
            {
                data: county_series_name[i],
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
                name: county_series_name[i],
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


                data: county_series_data_10_0[i],

            }
        ]
    };
}

