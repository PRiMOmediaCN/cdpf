/*甘肃省城市数据*/
var gansu_city=[11111,22222,33333,44444,55555,66666,77777,88888,99999,11111,22222,33333,44444,55555];
/*甘肃省县区数据*/

/*白银市 县区  白银区","平川区","靖远县","会宁县","景泰县*/
var gansu_baiyin=[11111,22222,33333,44444,55555];

/*定西市 县区  安定区","通渭县","陇西县","渭源县","临洮县","漳县","岷县*/
var gansu_dingxi=[11111,22222,33333,44444,55555,66666,77777];

/*甘南壮族自治区 县区  合作市","临潭县","卓尼县","舟曲县","迭部县","玛曲县","碌曲县","夏河县*/
var gansu_gannan=[11111,22222,33333,44444,55555,66666,77777,88888];

/*金昌市 县区  金川区","永昌县*/
var gansu_jinchang=[77777,88888];

/*酒泉市 县区 肃州区","金塔县","瓜州县","肃北蒙古族自治县","阿克塞县","玉门市","敦煌市*/
var gansu_jiuquan=[11111,22222,33333,44444,55555,66666,77777];

/*酒泉市 县区  城关区","七里河区","西固区","安宁区","红古区","永登县","皋兰县","榆中县*/
var gansu_lanzhou=[11111,22222,33333,44444,55555,66666,77777,88888];

/*临夏回族自治州 县区  临夏市","临夏县","康乐县","永靖县","广河县","和政县","东乡族自治县","积石山县*/
var gansu_lianxia=[11111,22222,33333,44444,55555,66666,77777,88888];

/*陇南市 县区  武都区","成县","文县","宕昌县","康县","西和县","礼县","徽县","两当县*/
var gansu_longnan=[11111,22222,33333,44444,55555,66666,77777,88888,99999];

/*平凉市 县区 "崆峒区","泾川县","灵台县","崇信县","华亭县","庄浪县","静宁县"]*/
var gansu_pingliang=[11111,22222,33333,44444,55555,66666,77777];

/*庆阳市 县区  西峰区","庆城县","环县","华池县","合水县","正宁县","宁县","镇原县*/
var gansu_qingyang=[11111,22222,33333,44444,55555,66666,77777,88888];

/*天水市 县区  秦州区","麦积区","清水县","秦安县","甘谷县","武山县","张家川回族自治县*/
var gansu_tianshui=[11111,22222,33333,44444,55555,66666,77777];

/*武威市 县区   凉州区","民勤县","古浪县","天祝藏族自治县 */
var gansu_wuwei=[44444,55555,66666,77777];

/*张掖市 县区  甘州区","肃南裕固族自治县","民乐县","临泽县","高台县","山丹县*/
var gansu_zhangye=[11111,22222,33333,44444,55555,66666];



var myChart = echarts.init(document.getElementById('map_div'));
//存储切换的每一级地图信息
var mapStack = [];
var timeFn = null;
var curMap = {};
//初始化地图
loadMap('620000', '甘肃');
/**
 绑定用户切换地图区域事件
 cityMap对象存储着地图区域名称和区域的信息(name-code)
 当mapCode有值,说明可以切换到下级地图
 同时保存上级地图的编号和名称
 */
var city_names=0;
myChart.on('mapselectchanged', function(params) {
    clearTimeout(timeFn);
    //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
    timeFn = setTimeout(function(){
        var name = params.batch[0].name;

        var mapCode = cityMap[name];//mapCode  是市的编号如620900   代表酒泉市
        if (!mapCode) {
            // alert('无此区域地图显示');
            return;
        }
        loadMap(mapCode, name);
        //将上一级地图信息压入mapStack
        mapStack.push({
            mapCode: curMap.mapCode,
            mapName: curMap.mapName
        });
        // 这里是单击事件  点击进入市级地图  省级数据改为市级数据在这里操作***************************************************************
        console.log(name);// name  就是城市的名称  如：酒泉市  在这里可以通过不同的name 对应进入的城市改变数据

        //显示返回上一层按钮
        $('#close_up').show();
        //改变数据


        switch (name){
            case '白银市':
                city_names=1;
                break;
            case '定西市':
                city_names=2;
                break;
            case '甘南州':
                city_names=3;
                break;
            case '嘉峪关市':
                city_names=4;
                break;
            case '金昌市':
                city_names=5;
                break;
            case '酒泉市':
                city_names=6;
                break;
            case '兰州市':
                city_names=7;
                break;
            case '临夏州':
                city_names=8;
                break;
            case '陇南市':
                city_names=9;
                break;
            case '平凉市':
                city_names=10;
                break;
            case '庆阳市':
                city_names=11;
                break;
            case '天水市':
                city_names=12;
                break;
            case '武威市':
                city_names=13;
                break;
            case '张掖市':
                city_names=14;
                break;

        }
        //残疾人总数 男女
        option_Disabled_sum.series[0].data=survey_data_1_1[city_names][0][0];
        option_Disabled_sum.series[1].data=survey_data_1_1[city_names][0][1];
        Disabled_sum.clear();
        Disabled_sum.setOption(option_Disabled_sum,true);
        //残疾人总数   农业非农业
        option_Disabled_sum2.series[0].data=survey_data_1_2[city_names][0][0];
        option_Disabled_sum2.series[1].data=survey_data_1_2[city_names][0][1];
        Disabled_sum2.clear();
        Disabled_sum2.setOption(option_Disabled_sum2,true);
        //甘肃省全省概况
        $('#Disabled_sum_1').text(survey_data_1_1[city_names][0][0]);
        $('#Disabled_sum_2').text(survey_data_1_1[city_names][0][1]);
        $('#Disabled_sum2_1').text(survey_data_1_2[city_names][0][0]);
        $('#Disabled_sum2_2').text(survey_data_1_2[city_names][0][1]);
        //残疾人总数 年龄段
        option_Age_group.series[0].data=survey_data_2_1[city_names][0];
        Age_group.clear();
        Age_group.setOption(option_Age_group,true);
        //残疾人总数 婚姻状况
        option_Marital_status.series[0].data=survey_data_2_2[city_names][0];
        Marital_status.clear();
        Marital_status.setOption(option_Marital_status,true);

        //就读学校   普通教育机构 特殊教育机构
        option_school.series[0].data=survey_data_3_1[city_names][0];
        option_school.series[1].data=survey_data_3_2[city_names][0];
        option_school.title.text='就读学校（享受助（奖）学金：'+school_sum_1[city_names]+'人  未享受：'+school_sum_2[city_names]+'人）';
        school.clear();
        school.setOption(option_school,true);

        //残疾类型
        option_Disability_category.series[0].data=[
            {value:survey_data_4_1[city_names][0][0], name:'视力'},
            {value:survey_data_4_1[city_names][0][1], name:'听力'},
            {value:survey_data_4_1[city_names][0][2], name:'言语'},
            {value:survey_data_4_1[city_names][0][3], name:'精神'},
            {value:survey_data_4_1[city_names][0][4], name:'肢体'},
            {value:survey_data_4_1[city_names][0][5], name:'智力'},
        ];

        Disability_category.clear();
        Disability_category.setOption(option_Disability_category,true);
        //文化程度
        option_Degree_of_Education.series[0].data=[
            {value:survey_data_4_2[city_names][0][0], name:'研究生'},
            {value:survey_data_4_2[city_names][0][1], name:'大学本科'},
            {value:survey_data_4_2[city_names][0][2], name:'大学专科'},
            {value:survey_data_4_2[city_names][0][3], name:'高中(含中专)'},
            {value:survey_data_4_2[city_names][0][4], name:'初中'},
            {value:survey_data_4_2[city_names][0][5], name:'小学'},
            {value:survey_data_4_2[city_names][0][6], name:'从未上过学'},
        ];
        Degree_of_Education.clear();
        Degree_of_Education.setOption(option_Degree_of_Education,true);

    }, 250);
});
/*  各城市对应的json编号也就是mapCode的值
"兰州市": "620100",
    "嘉峪关市": "620200",
    "金昌市": "620300",
    "白银市": "620400",
    "天水市": "620500",
    "武威市": "620600",
    "张掖市": "620700",
    "平凉市": "620800",
    "酒泉市": "620900",
    "庆阳市": "621000",
    "定西市": "621100",
    "陇南市": "621200",
    "临夏回族自治州": "622900",
    "甘南藏族自治州": "623000",
*/
/**
 绑定双击事件，并加载上一级地图
 */


$('#close_up').click(function () {
    clearTimeout(timeFn);
    var map = mapStack.pop();
    if (!mapStack.length && !map) {
        //alert('已经到达最上一级地图了');
        return;
    }
    loadMap(map.mapCode, map.mapName);
    console.log(map.mapCode)
    $('#close_up').hide();
    //改变数据
    //残疾人总数 男女
    option_Disabled_sum.series[0].data=survey_data_1_1[0][0][0];
    option_Disabled_sum.series[1].data=survey_data_1_1[0][0][1];
    Disabled_sum.clear();
    Disabled_sum.setOption(option_Disabled_sum,true);
    //残疾人总数   农业非农业
    option_Disabled_sum2.series[0].data=survey_data_1_2[0][0][0];
    option_Disabled_sum2.series[1].data=survey_data_1_2[0][0][1];
    Disabled_sum2.clear();
    Disabled_sum2.setOption(option_Disabled_sum2,true);
    //甘肃省全省概况
    $('#Disabled_sum_1').text(survey_data_1_1[0][0][0]);
    $('#Disabled_sum_2').text(survey_data_1_1[0][0][1]);
    $('#Disabled_sum2_1').text(survey_data_1_2[0][0][0]);
    $('#Disabled_sum2_2').text(survey_data_1_2[0][0][1]);


    //残疾人总数 年龄段
    option_Age_group.series[0].data=survey_data_2_1[0][0];
    Age_group.clear();
    Age_group.setOption(option_Age_group,true);
    //残疾人总数 婚姻状况
    option_Marital_status.series[0].data=survey_data_2_2[0][0];
    Marital_status.clear();
    Marital_status.setOption(option_Marital_status,true);

    //就读学校   普通教育机构 特殊教育机构
    option_school.series[0].data=survey_data_3_1[0][0];
    option_school.series[1].data=survey_data_3_2[0][0];
    option_school.title.text='就读学校（享受助（奖）学金：'+school_sum_1[0]+'人  未享受：'+school_sum_2[0]+'人）';
    school.clear();
    school.setOption(option_school,true);

    //残疾类型
    option_Disability_category.series[0].data=[
        {value:survey_data_4_1[0][0][0], name:'视力'},
        {value:survey_data_4_1[0][0][1], name:'听力'},
        {value:survey_data_4_1[0][0][2], name:'言语'},
        {value:survey_data_4_1[0][0][3], name:'精神'},
        {value:survey_data_4_1[0][0][4], name:'肢体'},
        {value:survey_data_4_1[0][0][5], name:'智力'},
    ];

    Disability_category.clear();
    Disability_category.setOption(option_Disability_category,true);
    //文化程度
    option_Degree_of_Education.series[0].data=[
        {value:survey_data_4_2[0][0][0], name:'研究生'},
        {value:survey_data_4_2[0][0][1], name:'大学本科'},
        {value:survey_data_4_2[0][0][2], name:'大学专科'},
        {value:survey_data_4_2[0][0][3], name:'高中(含中专)'},
        {value:survey_data_4_2[0][0][4], name:'初中'},
        {value:survey_data_4_2[0][0][5], name:'小学'},
        {value:survey_data_4_2[0][0][6], name:'从未上过学'},
    ];
    Degree_of_Education.clear();
    Degree_of_Education.setOption(option_Degree_of_Education,true);
});

myChart.on('dblclick', function(params) {
    //当双击事件发生时，清除单击事件，仅响应双击事件
    clearTimeout(timeFn);
    var map = mapStack.pop();
    if (!mapStack.length && !map) {
        //alert('已经到达最上一级地图了');
        return;
    }
    loadMap(map.mapCode, map.mapName);
    // 这里是双击击事件  双击击返回省级级地图  市级数据改为省级数据在这里操作***************************************************************
    console.log(map.mapName);

    //隐藏返回上一层按钮

    $('#close_up').hide();

    //改变数据
    //残疾人总数 男女
    option_Disabled_sum.series[0].data=survey_data_1_1[0][0][0];
    option_Disabled_sum.series[1].data=survey_data_1_1[0][0][1];
    Disabled_sum.clear();
    Disabled_sum.setOption(option_Disabled_sum,true);
    //残疾人总数   农业非农业
    option_Disabled_sum2.series[0].data=survey_data_1_2[0][0][0];
    option_Disabled_sum2.series[1].data=survey_data_1_2[0][0][1];
    Disabled_sum2.clear();
    Disabled_sum2.setOption(option_Disabled_sum2,true);
    //甘肃省全省概况
    $('#Disabled_sum_1').text(survey_data_1_1[0][0][0]);
    $('#Disabled_sum_2').text(survey_data_1_1[0][0][1]);
    $('#Disabled_sum2_1').text(survey_data_1_2[0][0][0]);
    $('#Disabled_sum2_2').text(survey_data_1_2[0][0][1]);
    //残疾人总数 年龄段
    option_Age_group.series[0].data=survey_data_2_1[0][0];
    Age_group.clear();
    Age_group.setOption(option_Age_group,true);
    //残疾人总数 婚姻状况
    option_Marital_status.series[0].data=survey_data_2_2[0][0];
    Marital_status.clear();
    Marital_status.setOption(option_Marital_status,true);

    //就读学校   普通教育机构 特殊教育机构
    option_school.series[0].data=survey_data_3_1[0][0];
    option_school.series[1].data=survey_data_3_2[0][0];
    option_school.title.text='就读学校（享受助（奖）学金：'+school_sum_1[0]+'人  未享受：'+school_sum_2[0]+'人）';
    school.clear();
    school.setOption(option_school,true);

    //残疾类型
    option_Disability_category.series[0].data=[
        {value:survey_data_4_1[0][0][0], name:'视力'},
        {value:survey_data_4_1[0][0][1], name:'听力'},
        {value:survey_data_4_1[0][0][2], name:'言语'},
        {value:survey_data_4_1[0][0][3], name:'精神'},
        {value:survey_data_4_1[0][0][4], name:'肢体'},
        {value:survey_data_4_1[0][0][5], name:'智力'},
    ];

    Disability_category.clear();
    Disability_category.setOption(option_Disability_category,true);
    //文化程度
    option_Degree_of_Education.series[0].data=[
        {value:survey_data_4_2[0][0][0], name:'研究生'},
        {value:survey_data_4_2[0][0][1], name:'大学本科'},
        {value:survey_data_4_2[0][0][2], name:'大学专科'},
        {value:survey_data_4_2[0][0][3], name:'高中(含中专)'},
        {value:survey_data_4_2[0][0][4], name:'初中'},
        {value:survey_data_4_2[0][0][5], name:'小学'},
        {value:survey_data_4_2[0][0][6], name:'从未上过学'},
    ];
    Degree_of_Education.clear();
    Degree_of_Education.setOption(option_Degree_of_Education,true);
});
/**
 加载地图：根据地图所在省市的行政编号，
 获取对应的json地图数据，然后向echarts注册该区域的地图
 最后加载地图信息
 @params {String} mapCode:地图行政编号,for example['中国':'100000', '湖南': '430000']
 @params {String} mapName: 地图名称
 */
function loadMap(mapCode, mapName) {
    $.getJSON('china-main-city/' + mapCode + '.json', function (data) {
        if (data) {
            echarts.registerMap(mapName, data);
            var option = {
                tooltip : {
                    trigger: 'item',
                    formatter: '{b}',
                    itemSize:'14px',
                    textStyle: {
                        color: '#fff'
                    }
                },

                dataRange: {
                    x: 'left',
                    y: 'bottom',
                    splitList: [
                        {start: 80000},
                        {start: 60000, end: 80000},
                        {start: 40000, end: 60000},
                        {start: 20000, end: 40000},
                        {end: 20000}
                    ],
                    textStyle: {
                        color: '#fff'
                    },
                    color: ['#ff9100', '#ffb219', '#ffd26f', '#fff2c0', '#ffffff']
                },
                series: [
                    {
                        name: '',
                        type: 'map',
                        mapType: mapName,
                        selectedMode : 'multiple',
                        label: {
                            // show: true,
                            // position: ['50%', '50%'],
                            normal: {
                                show: true,

                            },
                            emphasis: {
                                show: true

                            },
                            textStyle: {
                                color: "#fff"
                            }
                        },
                        itemStyle: {
                            normal: {
                                //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#ff5b09'
                                    ];
                                    return colorList[params.dataIndex]
                                },

                            }
                        },
                        data:[
                            {name: '白银市',value: gansu_city[0]},
                            {name: '定西市',value: gansu_city[1]},
                            {name: '甘南州',value: gansu_city[2]},
                            {name: '嘉峪关市',value: gansu_city[3]},
                            {name: '金昌市',value: gansu_city[4]},
                            {name: '酒泉市',value: gansu_city[5]},
                            {name: '兰州市',value: gansu_city[6]},
                            {name: '临夏州',value: gansu_city[7]},
                            {name: '陇南市',value: gansu_city[8]},
                            {name: '平凉市',value: gansu_city[9]},
                            {name: '庆阳市',value: gansu_city[10]},
                            {name: '天水市',value: gansu_city[11]},
                            {name: '武威市',value: gansu_city[12]},
                            {name: '张掖市',value: gansu_city[13]},
                            //县区
                            //白银市 县区
                            {name: '白银区',value: gansu_baiyin[0]},
                            {name: '平川区',value: gansu_baiyin[1]},
                            {name: '靖远县',value: gansu_baiyin[2]},
                            {name: '会宁县',value: gansu_baiyin[3]},
                            {name: '景泰县',value: gansu_baiyin[4]},
                            //定西市 县区
                            {name: '安定区',value:  gansu_dingxi[0]},
                            {name: '通渭县',value:  gansu_dingxi[1]},
                            {name: '陇西县',value:  gansu_dingxi[2]},
                            {name: '渭源县',value:  gansu_dingxi[3]},
                            {name: '临洮县',value:  gansu_dingxi[4]},
                            {name: '漳县',value:  gansu_dingxi[5]},
                            {name: '岷县',value:  gansu_dingxi[6]},
							//甘南藏族自治州 县区
                            {name: '合作市',value:  gansu_gannan[0]},
                            {name: '临潭县',value:  gansu_gannan[1]},
                            {name: '卓尼县',value:  gansu_gannan[2]},
                            {name: '舟曲县',value:  gansu_gannan[3]},
                            {name: '迭部县',value:  gansu_gannan[4]},
                            {name: '玛曲县',value:  gansu_gannan[5]},
                            {name: '碌曲县',value:  gansu_gannan[6]},
							{name: '夏河县',value:  gansu_gannan[7]},
							//金昌市 县区
                            {name: '金川区',value:  gansu_jinchang[0]},
                            {name: '永昌县',value:  gansu_jinchang[1]},
							//酒泉市 县区
                            {name: '肃州区',value:  gansu_jiuquan[0]},
                            {name: '金塔县',value:  gansu_jiuquan[1]},
							{name: '瓜州县',value:  gansu_jiuquan[2]},
							{name: '肃北蒙古族自治县',value:  gansu_jiuquan[3]},
							{name: '阿克塞县',value:  gansu_jiuquan[4]},
							{name: '玉门市',value:  gansu_jiuquan[5]},
							{name: '敦煌市',value:  gansu_jiuquan[6]},
							//兰州市 县区
                            {name: '城关区',value:  gansu_lanzhou[0]},
                            {name: '七里河区',value:  gansu_lanzhou[1]},
							{name: '西固区',value:  gansu_lanzhou[2]},
							{name: '安宁区',value:  gansu_lanzhou[3]},
							{name: '红古区',value:  gansu_lanzhou[4]},
							{name: '永登县',value:  gansu_lanzhou[5]},
							{name: '皋兰县',value:  gansu_lanzhou[6]},
							{name: '榆中县',value:  gansu_lanzhou[7]},
							//临夏回族自治州 县区
                            {name: '临夏市',value:  gansu_lianxia[0]},
                            {name: '临夏县',value:  gansu_lianxia[1]},
							{name: '康乐县',value:  gansu_lianxia[2]},
							{name: '永靖县',value:  gansu_lianxia[3]},
							{name: '广河县',value:  gansu_lianxia[4]},
							{name: '和政县',value:  gansu_lianxia[5]},
							{name: '东乡族自治县',value:  gansu_lianxia[6]},
							{name: '积石山县',value:  gansu_lianxia[7]},
							//陇南市 县区
                            {name: '武都区',value:  gansu_longnan[0]},
                            {name: '成县',value:  gansu_longnan[1]},
							{name: '文县',value:  gansu_longnan[2]},
							{name: '宕昌县',value:  gansu_longnan[3]},
							{name: '康县',value:  gansu_longnan[4]},
							{name: '西和县',value:  gansu_longnan[5]},
							{name: '礼县',value:  gansu_longnan[6]},
							{name: '徽县',value:  gansu_longnan[7]},
							{name: '两当县',value:  gansu_longnan[8]},
							//平凉市 县区
                            {name: '崆峒区',value:  gansu_pingliang[0]},
                            {name: '泾川县',value:  gansu_pingliang[1]},
							{name: '灵台县',value:  gansu_pingliang[2]},
							{name: '崇信县',value:  gansu_pingliang[3]},
							{name: '华亭县',value:  gansu_pingliang[4]},
							{name: '庄浪县',value:  gansu_pingliang[5]},
							{name: '静宁县',value:  gansu_pingliang[6]},
							//庆阳市 县区
                            {name: '西峰区',value:  gansu_qingyang[0]},
                            {name: '庆城县',value:  gansu_qingyang[1]},
							{name: '环县',value:  gansu_qingyang[2]},
							{name: '华池县',value:  gansu_qingyang[3]},
							{name: '合水县',value:  gansu_qingyang[4]},
							{name: '正宁县',value:  gansu_qingyang[5]},
							{name: '宁县',value:  gansu_qingyang[6]},
							{name: '镇原县',value:  gansu_qingyang[7]},
							//天水市 县区
                            {name: '秦州区',value:  gansu_tianshui[0]},
                            {name: '麦积区',value:  gansu_tianshui[1]},
							{name: '清水县',value:  gansu_tianshui[2]},
							{name: '秦安县',value:  gansu_tianshui[3]},
							{name: '甘谷县',value:  gansu_tianshui[4]},
							{name: '武山县',value:  gansu_tianshui[5]},
							{name: '张家川回族自治县',value:  gansu_tianshui[6]},
							//武威市 县区
                            {name: '凉州区',value:  gansu_wuwei[0]},
                            {name: '民勤县',value:  gansu_wuwei[1]},
							{name: '古浪县',value:  gansu_wuwei[2]},
							{name: '天祝藏族自治县',value:  gansu_wuwei[3]},
							//张掖市 县区
                            {name: '甘州区',value:  gansu_zhangye[0]},
                            {name: '肃南裕固族自治县',value:  gansu_zhangye[1]},
							{name: '民乐县',value:  gansu_zhangye[2]},
							{name: '临泽县',value:  gansu_zhangye[3]},
							{name: '高台县',value:  gansu_zhangye[4]},
							{name: '山丹县',value:  gansu_zhangye[5]},
         					


        ]
                    }
                ]
            };
            myChart.setOption(option);
            curMap = {
                mapCode: mapCode,
                mapName: mapName
            };
        } else {
            //alert('无法加载该地图');
        }
    });
}
