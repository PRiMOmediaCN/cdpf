var province_11_1 = echarts.init(document.getElementById('province_11_1'));
	option_province_11_1 = {
        title:[
            {
                text: '甘肃省',
                x: 0,
                y: 10,
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#fff' ,
                    fontSize:'14'
                }
            }
        ] ,
        tooltip : {
            trigger: 'axis',
            axisPointer : { // 坐标轴指示器，坐标轴触发有效
                type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: 10, top: 100, width: '70%', height: '30%'
        },
        xAxis : [
            {
                show : false,
                type : 'category',
                data : ['助视器', '盲杖', '盲表', '盲人书写用具', '其他'],
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
                        fontSize:'8'
                    },
                    interval:0
                },
            }
        ],
        yAxis : [
            {
                show : false,
                type : 'value'
            }
        ],
        series : [
            {
                name:'甘肃省视力辅助器具需求',
                type:'bar',
                barWidth:20,
                itemStyle: {
                    normal: {
                        //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#1be3ff','#ff5b09','#fee233','#ffffff','#6ba9ff'
                            ];
                            return colorList[params.dataIndex]
                        },

                    }
                },
                data:province_series_data_11_1
            }
			]
	};

province_11_1.setOption(option_province_11_1);
