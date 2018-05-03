
var city_4_0_num=new Array();
var option_city_4_0_num=new Array();
for(var i=0;i<city_data_4_0[1].length;i++) {
    option_city_4_0_num[i] = {

        tooltip: {
            trigger: 'item',

        },
        calculable: true,
        grid: {
            left: 85, top: '10%', width: '55%', height: '80%'
        },
        xAxis: [
            {
                type: 'value',
                show: false,
                max:city_series_data_4_0_max[0]//Y轴最大值
            }
        ],
        yAxis: [
            {
                data: series_name[1][i],
                type: 'category',
                show: true,
                axisTick: {
                    alignWithLabel: true
                },
                splitLine: {
                    show: false,
                    //  改变轴线颜色
                },
                // x轴的颜色和宽度
                axisLine: {
                    show: false,
                },// x轴的字体样式
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: '10'
                    },
                    interval: 0
                },
            }
        ],
        series: [
            {
                name: series_name[1][i],
                type: 'bar',
                barWidth: 10,
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


                data: city_data_4_0[1][i],

            }
        ]
    };

}
