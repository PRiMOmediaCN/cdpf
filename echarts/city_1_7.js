var city_1_1 = echarts.init(document.getElementById('city_1_1'));
option_city_1_1 = {

    tooltip: {
        trigger: 'item',

    },
    legend:[
        {
            data:['兰州市'],
            x: '45',
            y:'0',
            textStyle: {
                color: '#fff'
            }

        }
    ],
    calculable: true,
    grid: {
        left: 50, top: 30, width: '70%', height: '60%'
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
            data: ['非农业', '农业', '全部'],
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
            name: '兰州市',
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


            data: [121212,232323,121212],

        }
    ]
};


city_1_1.setOption(option_city_1_1);
