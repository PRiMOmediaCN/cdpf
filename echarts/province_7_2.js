var province_7_2 = echarts.init(document.getElementById('province_7_2'));
	option_province_7_2 = {
        title:[{
            text: '甘肃省',
            x: 10,
            y: 110,
            textStyle: {
                fontWeight: 'normal',              //标题颜色
                color: '#fff' ,
                fontSize:'14'
            }}] ,

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}"
        },
		grid: {
			left: 100, top: 50, width: '50%', height: '50%'
		},
		xAxis:  {
			show : false,
			type: 'value'
		},
		yAxis: {
			show : false,
			type: 'category',

		},
		
		series: [
		   {
				name: '得到过康复服务',
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
							var colorList = ['#8980a2'];
							return colorList[params.dataIndex]
						},
						lineStyle:{
									color:'#8980a2'
						}
					}
			   },
				data:province_series_data_7_2[0]
			},
			{
				name: '居家托养',
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
							var colorList = ['#1bc2dc'];
							return colorList[params.dataIndex]
						},
						lineStyle:{
									color:'#1bc2dc'
						}
					}
			   },
				data: province_series_data_7_2[1]
			},
		]
	};

province_7_2.setOption(option_province_7_2);