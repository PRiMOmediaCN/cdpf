var province_2_2 = echarts.init(document.getElementById('province_2_2'));
	option_province_2_2 = {
        title:[{
            text: '甘肃省',
            x: 10,
            y: 95,
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
				name: '建档立卡贫困户',
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
						},
						lineStyle:{
									color:'#ff5230'
						}
					}
			   },
				data: province_series_data_2_2[0]
			},
			{
				name: '疑似贫困人口',
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
				data: province_series_data_2_2[1]
			},
            {
                name: '其他',
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
                        var colorList = ['#1ee355'];
                        return colorList[params.dataIndex]
                    },
                    lineStyle:{
                        color:'#1ee355'
                    }
                }
            },
                data: province_series_data_2_2[2]
            }
		]
	};

province_2_2.setOption(option_province_2_2);