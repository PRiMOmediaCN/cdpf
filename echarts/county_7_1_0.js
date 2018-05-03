var county_7_1_num =new Array();
var option_county_7_1_num =new Array();
for(var i=0;i<county_series_data_7_1.length;i++) {
    option_county_7_1_num[i] = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: 70, top: '10%', width: '70%', height: '80%'
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
                show: true,
                data: county_series_name[i],
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
                        fontSize: '12'
                    },
                    interval: 0
                },
            }
        ],
        series: [
            {
                name: '得到过康复服务',
                type: 'bar',
                stack: '总量',
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#8a80a3'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'insideRight',
                            formatter: '{c}'
                        }
                    },


                },
                data: county_series_data_7_1[i][0]
            },
            {
                name: '居家托养',
                type: 'bar',
                stack: '总量',
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#71cbe6'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'insideRight',
                            formatter: '{c}'
                        }
                    },


                },
                data: county_series_data_7_1[i][1]
            }
        ]
    };

}