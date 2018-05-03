var province_6_2 = echarts.init(document.getElementById('province_6_2'));


	option_province_6_2 = {
	title:[{
		text: '社会救助情况',
		x : '50%',
		y : '47%',
		textStyle: {  
			fontWeight: 'normal',              //标题颜色  
			color: '#fff' ,
			fontSize:'14' 
		}}] ,
	tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    
    series : [
        
        {
            name:'面积模式',
            type:'pie',
            radius : [60, 90],
            center : ['60%', '50%'],
            roseType : 'area',
			
            data:[
                {value:province_series_data_6_2[0], name:'享受低保人数'},
                {value:province_series_data_6_2[1], name:'享受特困供养人数'},
                {value:province_series_data_6_2[2], name:'享受医疗救助人数'},
                {value:province_series_data_6_2[3], name:'享受其他救助人数'},
                {value:province_series_data_6_2[4], name:'未享受'},
            ],
			itemStyle: {
			  normal: {
　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
				  color: function(params) {
					  // build a color map as your need.
					  var colorList = [
						'#ff5230','#fee233','#53a42e','#71ff30','#ffffff'
					  ];
					  return colorList[params.dataIndex]
				  },
				  label:{ 
                      show: true, 
                      formatter: '{d}%'
                  }, 
                  labelLine :{show:true} 
			  }
			}
			
        }
    ]
	};
province_6_2.setOption(option_province_6_2);