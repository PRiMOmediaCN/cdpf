var Age_group = echarts.init(document.getElementById('Age_group'));
var Marital_status = echarts.init(document.getElementById('Marital_status'));
	option_Age_group = {
		title:[{
				text: '年龄段',
				x: 13,
				y: 28,
				textStyle: {
					fontWeight: 'normal',              //标题颜色
					color: '#fff' ,
					fontSize:'14'
				}}] ,

		color: ['#45fff0'],
		tooltip : {
			trigger: 'axis',
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: 13, bottom: 20, width: '100%', height: '60%'
		},
		xAxis : [
			{
				type : 'category',
				data : ['0-5岁', '6-15岁', '16-59岁', '60岁及以上'],
				// x轴的字体样式
				axisLabel: {        
					show: true,
					textStyle: {
						color: '#fff',
						fontSize:'9'
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
				name:'数量',
				type:'bar',
				barWidth: '10',
				data:survey_data_2_1[0][0]
			}
		]
	};
	option_Marital_status = {
		
		title:[{
				text: '婚姻状况',
				x: 13,
				y: 28,
				textStyle: {  
					fontWeight: 'normal',              //标题颜色  
					color: '#fff'  ,
					fontSize:'14'  
				}}] ,
			
		color: ['#ff5230'],
		tooltip : {
			trigger: 'axis',
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: 13, bottom: 20, width: '100%', height: '60%'
		},
		xAxis : [
			{
				type : 'category',
				data : ['未婚', '已婚有配偶', '离异', '丧偶', '其他'],
				// x轴的字体样式
				axisLabel: {        
					show: true,
					textStyle: {
						color: '#fff',
						fontSize:'9'
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
				name:'数量',
				type:'bar',
				barWidth: '10',
				data:survey_data_2_2[0][0]
			}
		]
	};
	Age_group.setOption(option_Age_group);
	Marital_status.setOption(option_Marital_status);