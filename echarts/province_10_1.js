var province_10_1 = echarts.init(document.getElementById('province_10_1'));
option_province_10_1 = {

    tooltip: {
        trigger: 'item',

    },
    calculable: true,
    grid: {
        left: 130, top: 20, width: '70%', height: '80%'
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
            data: ['有体育健身指导员', '组织文化体育活动', '为残疾人提供居家服务', '有日间照料机构', '社区康复站数量'],
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
            name: '村社区开展数量',
            type: 'bar',
            barWidth : 20,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#1bc2dc'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'insideRight',//柱体内部显示数值
                        position: 'right',
                        formatter: '{c}'
                    }
                },


            },


            data: province_series_data_10_1,

        }
    ]
};


province_10_1.setOption(option_province_10_1);
