var province_7_3 = echarts.init(document.getElementById('province_7_3'));
	option_province_7_3 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : { // 坐标轴指示器，坐标轴触发有效
                type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        grid: {
            left: 13, top: 100, width: '50%', height: '60%'
        },
        xAxis : [
            {
                show : false,
                type : 'category',
                data : ['居家托养', '日间照料', '寄宿托养'],
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
        yAxis : [
            {
                show : false,
                type : 'value'
            }
        ],
        series : [
            {
                name:'甘肃省托养服务需求',
                type:'bar',
                barWidth: 20,

                itemStyle: {
                    normal: {
                        //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#1be3ff','#ff5b09','#fee233'
                            ];
                            return colorList[params.dataIndex]
                        },

                    }
                },
                data:province_series_data_7_3
            }
			]
	};

province_7_3.setOption(option_province_7_3);
