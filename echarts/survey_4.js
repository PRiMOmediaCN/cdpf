var Disability_category = echarts.init(document.getElementById('Disability_category'));
var Degree_of_Education = echarts.init(document.getElementById('Degree_of_Education'));

	option_Disability_category = {
	title:[{
		text: '残疾类型',
		x : '45%',
		y : '48%',
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
            radius : [80, 110],
            center : ['50%', '50%'],
            roseType : 'radius',
			
            data:[
                {value:survey_data_4_1[0][0][0], name:'视力'},
                {value:survey_data_4_1[0][0][1], name:'听力'},
                {value:survey_data_4_1[0][0][2], name:'言语'},
                {value:survey_data_4_1[0][0][3], name:'精神'},
                {value:survey_data_4_1[0][0][4], name:'肢体'},
                {value:survey_data_4_1[0][0][5], name:'智力'},
            ],
			itemStyle: {
			  normal: {
　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
				  color: function(params) {
					  // build a color map as your need.
					  var colorList = [
						'#ff5230','#fee233','#53a42e','#71ff30','#26b0ff','#347498','#ffffff'
					  ];
					  return colorList[params.dataIndex]
				  },
				  label:{ 
                      show: true, 
                      formatter: '{b} : {d}%' 
                  }, 
                  labelLine :{show:true} 
			  }
			}
			
        }
    ]
	};
	option_Degree_of_Education = {
	title:[{
		text: '文化程度',
		x : '45%',
		y : '48%',
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
            radius : [80, 110],
            center : ['50%', '50%'],
            roseType : 'radius',
			
            data:[
                {value:survey_data_4_2[0][0][0], name:'研究生'},
                {value:survey_data_4_2[0][0][1], name:'大学本科'},
                {value:survey_data_4_2[0][0][2], name:'大学专科'},
                {value:survey_data_4_2[0][0][3], name:'高中(含中专)'},
                {value:survey_data_4_2[0][0][4], name:'初中'},
                {value:survey_data_4_2[0][0][5], name:'小学'},
                {value:survey_data_4_2[0][0][6], name:'从未上过学'},
            ],
			itemStyle: {
			  normal: {
　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
				  color: function(params) {
					  // build a color map as your need.
					  var colorList = [
						'#ff5230','#fee233','#53a42e','#71ff30','#26b0ff','#347498','#ffffff'
					  ];
					  return colorList[params.dataIndex]
				  },
				  label:{ 
                      show: true, 
                      formatter: '{b} : {d}%' 
                  }, 
                  labelLine :{show:true} 
			  }
			}
			
        }
    ]
	};
	Disability_category.setOption(option_Disability_category);
	Degree_of_Education.setOption(option_Degree_of_Education);