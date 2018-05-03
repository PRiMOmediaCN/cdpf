var province_11_5 = echarts.init(document.getElementById('province_11_5'));


	option_province_11_5 = {
    title:[{
        text: '肢体残疾占比',
        x : '12%',
        y : '55%',
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
            name:'甘肃省肢体辅助器具需求2',
            type:'pie',
           // radius : [60, 90],
            //center : ['60%', '50%'],
            center:['120', '160'],
            radius: ['50%', '70%'],
            roseType : 'area',
			
            data:[
                {value:province_series_data_11_5[0], name:'轮椅'},
                {value:province_series_data_11_5[1], name:'假肢'},
                {value:province_series_data_11_5[2], name:'矫形器'},
                {value:province_series_data_11_5[3], name:'拐杖、助行器'},
                {value:province_series_data_11_5[4], name:'生活自助器具'},
                {value:province_series_data_11_5[5], name:'辅助坐卧、翻身、站立器'},
                {value:province_series_data_11_5[6], name:'其他'},
            ],
			itemStyle: {
			  normal: {
　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
				  color: function(params) {
					  // build a color map as your need.
					  var colorList = [
						'#ff5b09','#fee233','#71ff30','#26b0ff','#ffffff','#17b7ad','#b4ff85'
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
province_11_5.setOption(option_province_11_5);