var county_1_6 = echarts.init(document.getElementById('county_1_6'));
var yAxis_data=['白银市', '金昌市', '嘉峪关市', '兰州市'];
var county_series_data=[121212,232323,121212,232323]
option_county_1_6 = {

    tooltip: {
        trigger: 'item',

    },
    calculable: true,
    grid: {
        left: 50, top: 30, width: '230', height: 50*4
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
            data: yAxis_data,
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
            name: '各县',
            type: 'bar',
            barWidth : 20,
            itemStyle: {
                normal: {
                    color: function(params) {
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


            data: county_series_data,

        }
    ]
};


county_1_6.setOption(option_county_1_6);
