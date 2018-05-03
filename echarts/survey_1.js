

var Disabled_sum = echarts.init(document.getElementById('Disabled_sum'));
var Disabled_sum2 = echarts.init(document.getElementById('Disabled_sum2'));

	option_Disabled_sum = {

		title:[{
			text: '残疾人总数：'+Disabled_sum_number+'人',
			x: 13,
			y: 8,
			textStyle: {
				fontWeight: 'normal',              //标题颜色
				color: '#fff' ,
				fontSize:'14'
			}}] ,

        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: 13, top: 40, width: '90%', height: '40%'
        },
        xAxis:  {
            show : false,
            type: 'value'
        },
        yAxis: {
            show : false,
            type: 'category',
            data: ['周一']
        },
		
		series: [
		   {
				name: '男',
				type: 'bar',
				stack: '总量',
				barWidth : 10,
				label: {
					normal: {
						show: false,
						position: 'insideRight',
                        fontSize:'9'
					}
				},itemStyle: {
					 normal: {
	　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
						color: function(params) {
							// build a color map as your need.
							var colorList = ['#45fff0'];
							return colorList[params.dataIndex]
						},
						lineStyle:{
									color:'#45fff0'
						}
					}
			   },
				data:survey_data_1_1[0][0][0]
			},
			{
				name: '女',
				type: 'bar',
				stack: '总量',
				barWidth : 10,
				label: {
					normal: {
						show: false,
						position: 'insideRight',
                        fontSize:'9'
					}
				},itemStyle: {
					 normal: {
	　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
						color: function(params) {
							// build a color map as your need.
							var colorList = ['#ff5230'];
							return colorList[params.dataIndex]
						},
						lineStyle:{
									color:'#ff5230'
						}
					}
			   },
				data: survey_data_1_1[0][0][1]
			},
		]
	};
	option_Disabled_sum2 = {

        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
		grid: {
			left: 13, top: 10, width: '90%', height: '40%'
		},
		xAxis:  {
			show : false,
			type: 'value'
		},
		yAxis: {
			show : false,
			type: 'category',
			data: ['周一']
		},
		
		series: [
		   {
				name: '农业',
				type: 'bar',
				stack: '总量',
				barWidth : 10,
				label: {
					normal: {
						show: false,
						position: 'insideRight',
                        fontSize:'9'
					}
				},itemStyle: {
					 normal: {
	　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
						color: function(params) {
							// build a color map as your need.
							var colorList = ['#45fff0'];
							return colorList[params.dataIndex]
						},
						lineStyle:{
									color:'#45fff0'
						}
					}
			   },
				data: survey_data_1_2[0][0][0]
			},
			{
				name: '非农业',
				type: 'bar',
				stack: '总量',
				barWidth : 10,
				label: {
					normal: {
						show: false,
						position: 'insideRight',
                        fontSize:'9'
					}
				},itemStyle: {
					 normal: {
	　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
						color: function(params) {
							// build a color map as your need.
							var colorList = ['#ff5230'];
							return colorList[params.dataIndex]
						},
						lineStyle:{
									color:'#ff5230'
						}
					}
			   },
				data: survey_data_1_2[0][0][1]
			},
		]
	};
	Disabled_sum.setOption(option_Disabled_sum);
	Disabled_sum2.setOption(option_Disabled_sum2);