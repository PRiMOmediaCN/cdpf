var province_9_1 = echarts.init(document.getElementById('province_9_1'));
option_province_9_1 = {

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
            data: ['文体活动中心', '商店（小卖部）', '银行网点', '学校（幼儿园）', '医院（卫生室）', '综合服务中心', '村社区数'],
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
            name: '社区数及公共建设',
            type: 'bar',
            barWidth : 20,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#3369fe','#fe33ed','#9f45ff','#33d1fe','#00ff81','#ff0000','#1b9cff'
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
            data: province_series_data_9_1,

        }
    ]
};


province_9_1.setOption(option_province_9_1);
