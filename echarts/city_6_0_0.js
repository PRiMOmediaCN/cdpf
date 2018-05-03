var city_6_0_num=new Array();
var option_city_6_0_num=new Array();
for(var i=0;i<city_data_6_0[1].length;i++) {
    option_city_6_0_num[i] = {
        title: [
            {
                text: series_name[1][i],
                x: 15,
                y: 0,
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
            left: 170, top: 30, width: '70%', height: '80%'
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
                data: ['居民医疗保险缴费补贴人数', '参加城乡居民医疗保险人数', '享受养老保险缴费补贴人数', '参加城乡居民养老保险人数'],
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
                name: '社保保险人数',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#ff5b09', '#1bc2dc', '#ff5b09', '#1bc2dc'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'insideRight',
                            formatter: '{c}',
                            fontSize: '9'
                        }
                    },


                },


                data: city_data_6_0[1][i]

            }
        ]
    };

}
