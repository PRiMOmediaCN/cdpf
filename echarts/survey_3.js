
var school = echarts.init(document.getElementById('school'));

	option_school = {
		title:
			{
				text: '就读学校（享受助（奖）学金：'+school_sum_1[0]+'人  未享受：'+school_sum_2[0]+'人）',
				x: 13,
				y: 0,
				textStyle: {
					fontWeight: 'normal',              //标题颜色
					color: '#fff' ,
					fontSize:'14'
				}
			}
		 ,

		grid: {
			left: '20%', top: '25%', width: '80%', height: '75%'
		},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
		xAxis:  {
			show : false,
			type: 'value'
		},
		yAxis: {
			show : true,
			type: 'category',
			data: ['本科及以上','大学专科','高中','初中','小学','学前'],
			// x轴的字体样式
			axisLabel: {        
				show: true,
				textStyle: {
					color: '#fff',
					fontSize:'12'
				},
				interval:0
			},
			// 控制网格线是否显示
			splitLine: {
				show: false, 
				//  改变轴线颜色                          
			},
			// x轴的颜色和宽度
			axisLine:{
				show: false, 
			}
		},
		
		series: [
		   {
				name: '普通教育机构',
				type: 'bar',
				stack: '总量',
				barWidth : 20,
				label: {
					normal: {
						show: false,
						position: 'insideRight'
					}
				},itemStyle: {
					 normal: {
	　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
						color: function(params) {
							// build a color map as your need.
							var colorList = ['#45fff0'];
							return colorList[params.dataIndex]
						}
					}
			   },
				data: survey_data_3_1[0][0]
			},
			{
				name: '特殊教育机构',
				type: 'bar',
				stack: '总量',
				barWidth : 20,
				label: {
					normal: {
						show: false,
						position: 'insideRight'
					}
				},itemStyle: {
					 normal: {
	　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
						color: function(params) {
							// build a color map as your need.
							var colorList = ['#ff5230'];
							return colorList[params.dataIndex]
						}
					}
			   },
				data: survey_data_3_2[0][0]
			},
		]
	};

	school.setOption(option_school);
