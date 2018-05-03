var city_6_4_num=new Array();
var option_city_6_4_num=new Array();
for(var i=0;i<city_data_6_4[1].length;i++) {
    option_city_6_4_num[i] = {
        title: [
            {
                text: series_name[1][i],
                x: 50,
                y: 10,
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#fff',
                    fontSize: '14'
                }
            }
        ],
        tooltip: {
            trigger: 'item',

        },
        calculable: true,
        grid: {
            left: 110, top: 40, width: '70%', height: '70%'
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
                data: ['燃油补贴', '医疗救助', '重度残疾人护理补贴', '困难残疾人生活补贴', '特困供养', '低保'],
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
                name: '社保保险人数',
                type: 'bar',
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#ff5b09'
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


                data: city_data_6_4[1][i]

            }
        ]
    };

}
