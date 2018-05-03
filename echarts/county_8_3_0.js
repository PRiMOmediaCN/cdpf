
for(var i=Math.ceil(county_series_data_8_2.length/2);i<county_series_data_8_2.length;i++) {
    option_county_8_2_num[i] = {

        tooltip: {
            trigger: 'item',

        },
        calculable: true,
        grid: {
            left: 70, top: '10%', width: '55%', height: '80%'
        },
        xAxis: [
            {
                type: 'value',
                show: false,
                max: county_series_data_8_2_max[0]//Y轴最大值
            }
        ],
        yAxis: [
            {
                type: 'category',

                show: true,
                data: county_series_name[i],//这里1 3 5 等奇数城市
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
                name: county_series_name[i],
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


                data: county_series_data_8_2[i],

            }
        ]
    };

}
