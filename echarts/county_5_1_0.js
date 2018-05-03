var county_5_1_num =new Array();
var option_county_5_1_num =new Array();
for(var i=0;i<Math.ceil(county_series_data_5_1.length/2);i++) {
    option_county_5_1_num[i] = {

        grid: {
            left: 90, top: '10%', width: '70%', height: '80%'
        },
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: {
            show: true,
            type: 'category',
            data: county_series_name[i],
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
        },

        series: [
            {
                name: '就业扶贫需要人数',
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
                data: county_series_data_5_1[i][0]
            },
            {
                name: '职业技能培训',
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
                data: county_series_data_5_1[i][1]
            },
            {
                name: '职业介绍',
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
                        var colorList = ['#fee233'];
                        return colorList[params.dataIndex]
                    },
                    lineStyle: {
                        color: '#fee233'
                    }
                }
            },
                data: county_series_data_5_1[i][2]
            },
            {
                name: '农村实用技术培训',
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
                data: county_series_data_5_1[i][3]
            },
            {
                name: '资金信贷扶持',
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
                        var colorList = ['#1e79e3'];
                        return colorList[params.dataIndex]
                    },
                    lineStyle: {
                        color: '#1e79e3'
                    }
                }
            },
                data: county_series_data_5_1[i][4]
            },
            {
                name: '其他帮扶',
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
                        var colorList = ['#4809ff'];
                        return colorList[params.dataIndex]
                    },
                    lineStyle: {
                        color: '#4809ff'
                    }
                }
            },
                data: county_series_data_5_1[i][5]
            }
        ]
    };
}