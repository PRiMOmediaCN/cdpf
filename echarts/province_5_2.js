
var province_5_2 = echarts.init(document.getElementById('province_5_2'));
	option_province_5_2 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : { // 坐标轴指示器，坐标轴触发有效
                type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        grid: {
            left: 0, top: 100, width: '50%', height: '60%'
        },
        xAxis : [
            {
                show : false,
                type : 'category',

                data : ['就业扶贫需求人数', '职业技术培训', '职业介绍', '农村实用技术培训', '资金信贷扶持', '其他帮扶'],
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
                name:'就业扶贫需求人数',
                type:'bar',
                barWidth:30,

                itemStyle: {
                    normal: {
                        //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#ff5b09','#1bc2dc','#fee233','#1ee355','#1e79e3','#4809ff'
                            ];
                            return colorList[params.dataIndex]
                        },

                    }
                },
                data:province_series_data_5_2
            }
			]
	};

province_5_2.setOption(option_province_5_2);
