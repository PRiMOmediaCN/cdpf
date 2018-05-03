var city_11_3_num=new Array();
var option_city_11_3_num=new Array();
for(var i=0;i<city_data_11_3[1].length;i++) {
    option_city_11_3_num[i] = {
        title: [
            {
                text: series_name[1][i],
                x: 0,
                y: 10,
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#fff',
                    fontSize: '14'
                }
            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: 0, top: 100, width: '40%', height: '30%'
        },
        xAxis: [
            {
                show: false,
                type: 'category',
                data: ['适配助听器', '其他'],
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
                        fontSize: '8'
                    },
                    interval: 0
                },
            }
        ],
        yAxis: [
            {
                show: false,
                type: 'value'
            }
        ],
        series: [
            {
                name: '甘肃省听力辅助器具需求',
                type: 'bar',
                barWidth: 20,
                itemStyle: {
                    normal: {
                        //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#ff5b09', '#1bc2dc'
                            ];
                            return colorList[params.dataIndex]
                        },

                    }
                },
                data: city_data_11_3[1][i]
            }
        ]
    };

}
