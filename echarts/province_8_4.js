var province_8_4 = echarts.init(document.getElementById('province_8_4'));
option_province_8_4 = {

    tooltip: {
        trigger: 'item',

    },

    calculable: true,
    grid: {
        left: 10, top: 0, width: '75%', height: '80%'
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
            data: ['参加体育活动人数'],
            axisTick: {
                alignWithLabel: true
            },
            splitLine: {
                show: false,
                //  改变轴线颜色
            },
            // x轴的颜色和宽度
            axisLine:{
                show: false,
            },// x轴的字体样式
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize:'12'
                },
                interval:0
            },
        }
    ],
    series: [
        {
            name: '参加体育活动人数',
            type: 'bar',
            barWidth : 20,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#ff5b09'
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


            data: province_series_data_8_4,

        }
    ]
};


province_8_4.setOption(option_province_8_4);
