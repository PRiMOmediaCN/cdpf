var province_5_1 = echarts.init(document.getElementById('province_5_1'));
option_province_5_1 = {

    tooltip: {
        trigger: 'item',

    },
    calculable: true,
    grid: {
        left: 100, top: 20, width: '75%', height: '80%'
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
            data: ['未就业', '已就业'],
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
            name: '适龄儿童人数',
            type: 'bar',
            barWidth : 20,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#1bc2dc','#ff5b09'
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


            data:province_series_data_5_1,

        }
    ]
};


province_5_1.setOption(option_province_5_1);
