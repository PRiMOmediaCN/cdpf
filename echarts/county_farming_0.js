
var county_farming_num=new Array();
var option_county_farming_num=new Array();
for(var i=0;i<county_series_data_1_1.length;i++) {
    option_county_farming_num[i] = {

        tooltip: {
            trigger: 'item',

        },
        legend: [
            {
                data: county_series_name[i],
                x: '55',
                y: '0',
                textStyle: {
                    color: '#fff'
                }

            }
        ],
        calculable: true,
        grid: {
            left: 80, top: 50, width: '65%', height: '80%'
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


                data: county_series_data_1_1[i],

            }
        ]
    };

}
