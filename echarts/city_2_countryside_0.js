var city_2_countryside_num=new Array();
var option_city_2_countryside_num=new Array();
for(var i=0;i<city_data_2_0[1].length;i++) {
    option_city_2_countryside_num[i] = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: 100, top: '10%', width: '70%', height: '80%'
        },
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: {
            show: true,
            type: 'category',
            data: series_name[1][i],
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
        },

        series: [
            {
                name: '建档立卡贫困人口',
                type: 'bar',
                stack: '总量',
                barWidth: 10,
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        fontSize: '9'
                    }
                }, itemStyle: {
                normal: {
                    //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                    color: function (params) {
                        // build a color map as your need.
                        var colorList = ['#ff5b09'];
                        return colorList[params.dataIndex]
                    },
                    lineStyle: {
                        color: '#ff5b09'
                    }
                }
            },
                data: city_data_2_0[1][i][0]
            },
            {
                name: '其他贫困人口',
                type: 'bar',
                stack: '总量',
                barWidth: 10,
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        fontSize: '9'
                    }
                }, itemStyle: {
                normal: {
                    //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                    color: function (params) {
                        // build a color map as your need.
                        var colorList = ['#1bc2dc'];
                        return colorList[params.dataIndex]
                    },
                    lineStyle: {
                        color: '#1bc2dc'
                    }
                }
            },
                data: city_data_2_0[1][i][1]
            },
            {
                name: '其他',
                type: 'bar',
                stack: '总量',
                barWidth: 10,
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        fontSize: '9'
                    }
                }, itemStyle: {
                normal: {
                    //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                    color: function (params) {
                        // build a color map as your need.
                        var colorList = ['#1ee355'];
                        return colorList[params.dataIndex]
                    },
                    lineStyle: {
                        color: '#1ee355'
                    }
                }
            },
                data: city_data_2_0[1][i][2]
            }
        ]
    };

}