
var county_9_1 = echarts.init(document.getElementById('county_9_1'));

var data2 = [
    {name: '兰州市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '永登县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '皋兰县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '榆中县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '嘉峪关市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '金昌市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '金川区', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '永昌县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '白银市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '白银区', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '平川区', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '靖远县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '会宁县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '景泰县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '天水市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '清水县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '秦安县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '甘谷县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '武山县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '张家川回族自治县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '武威市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '凉州区', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '民勤县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '古浪县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '天祝藏族自治县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '张掖市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '甘州区', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '肃南裕固族自治县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '民乐县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '临泽县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '高台县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '山丹县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '平凉市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '崆峒区', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '泾川县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '灵台县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '崇信县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '华亭县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '庄浪县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '静宁县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '酒泉市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '肃州区', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '金塔县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '肃北蒙古族自治县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '阿克塞哈萨克族自治县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '玉门市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '敦煌市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '庆阳市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '西峰区', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '庆城县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '环县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '华池县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '合水县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '正宁县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '宁县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '镇原县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '定西市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '安定区', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '通渭县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '陇西县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '渭源县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '临洮县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '漳县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '岷县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '陇南市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '武都区', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '成县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '文县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '宕昌县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '康县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '西和县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '礼县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '徽县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '两当县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '临夏回族自治州', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '临夏市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '临夏县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '康乐县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '永靖县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '广河县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '和政县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '东乡族自治县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '甘南藏族自治州', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '合作市', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '临潭县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '卓尼县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '舟曲县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '迭部县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '玛曲县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '碌曲县', value: Math.floor(Math.random()*(60-1+1)+1)},
    {name: '夏河县', value: Math.floor(Math.random()*(60-1+1)+1)},

]; //  城市县区值

var geoCoordMap = {
    '兰州市':[103.82,36.07],
    '城关区':[103.83,36.05],
    '西固区':[103.62,36.1],
    '红古区':[102.87,36.33],
    '永登县':[103.27,36.73],
    '皋兰县':[103.95,36.33],
    '榆中县':[104.12,35.85],
    '嘉峪关市':[98.27,39.8],
    '金昌市':[102.18,38.5],
    '金川区':[102.18,38.5],
    '永昌县':[101.97,38.25],
    '白银市':[104.18,36.55],
    '白银区':[104.18,36.55],
    '平川区':[104.83,36.73],
    '靖远县':[104.68,36.57],
    '会宁县':[105.05,35.7],
    '景泰县':[104.07,37.15],
    '天水市':[105.72,34.58],
    '清水县':[106.13,34.75],
    '秦安县':[105.67,34.87],
    '甘谷县':[105.33,34.73],
    '武山县':[104.88,34.72],
    '张家川回族自治县':[106.22,35.0],
    '武威市':[102.63,37.93],
    '凉州区':[102.63,37.93],
    '民勤县':[103.08,38.62],
    '古浪县':[102.88,37.47],
    '天祝藏族自治县':[103.13,36.98],
    '张掖市':[100.45,38.93],
    '甘州区':[100.45,38.93],
    '肃南裕固族自治县':[99.62,38.83],
    '民乐县':[100.82,38.43],
    '临泽县':[100.17,39.13],
    '高台县':[99.82,39.38],
    '山丹县':[101.08,38.78],
    '平凉市':[106.67,35.55],
    '崆峒区':[106.67,35.55],
    '泾川县':[107.37,35.33],
    '灵台县':[107.62,35.07],
    '崇信县':[107.03,35.3],
    '华亭县':[106.65,35.22],
    '庄浪县':[106.05,35.2],
    '静宁县':[105.72,35.52],
    '酒泉市':[98.52,39.75],
    '肃州区':[98.52,39.75],
    '金塔县':[98.9,39.98],
    '肃北蒙古族自治县':[94.88,39.52],
    '阿克塞哈萨克族自治县':[94.33,39.63],
    '玉门市':[97.05,40.28],
    '敦煌市':[94.67,40.13],
    '庆阳市':[107.63,35.73],
    '西峰区':[107.63,35.73],
    '庆城县':[107.88,36.0],
    '环县':[107.3,36.58],
    '华池县':[107.98,36.47],
    '合水县':[108.02,35.82],
    '正宁县':[108.37,35.5],
    '宁县':[107.92,35.5],
    '镇原县':[107.2,35.68],
    '定西市':[104.62,35.58],
    '安定区':[104.62,35.58],
    '通渭县':[105.25,35.2],
    '陇西县':[104.63,35.0],
    '渭源县':[104.22,35.13],
    '临洮县':[103.87,35.38],
    '漳县':[103.87,35.38],
    '岷县':[104.03,34.43],
    '陇南市':[104.92,33.4],
    '武都区':[104.92,33.4],
    '成县':[105.72,33.73],
    '文县':[104.68,32.95],
    '宕昌县':[104.38,34.05],
    '康县':[105.6,33.33],
    '西和县':[105.3,34.02],
    '礼县':[105.17,34.18],
    '徽县':[106.08,33.77],
    '两当县':[106.3,33.92],
    '临夏回族自治州':[103.22,35.6],
    '临夏市':[103.22,35.6],
    '临夏县':[103.0,35.5],
    '康乐县':[103.72,35.37],
    '永靖县':[103.32,35.93],
    '广河县':[103.58,35.48],
    '和政县':[103.35,35.43],
    '东乡族自治县':[103.4,35.67],
    '甘南藏族自治州':[102.92,34.98],
    '合作市':[102.92,34.98],
    '临潭县':[103.35,34.7],
    '卓尼县':[103.5,34.58],
    '舟曲县':[104.37,33.78],
    '迭部县':[103.22,34.05],
    '玛曲县':[102.07,34.0],
    '碌曲县':[102.48,34.58],
    '夏河县':[102.52,35.2]

};   //  城市县区坐标
var convertData = function (data2) {
    var res = [];
    for (var i = 0; i < data2.length; i++) {
        var geoCoord = geoCoordMap[data2[i].name];
        if (geoCoord) {
            res.push({
                name: data2[i].name,
                value: geoCoord.concat(data2[i].value)
            });
        }
    }
    return res;
};




//存储切换的每一级地图信息
var mapStack_county_9_1 = [];
var timeFn_county_9_1 = null;
var curMap_county_9_1 = {};
//初始化地图
loadMap_county_9_1('620000', '甘肃省');
/*  各城市对应的json编号
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
 加载地图：根据地图所在省市的行政编号，
 获取对应的json地图数据，然后向echarts注册该区域的地图
 最后加载地图信息
 @params {String} mapCode:地图行政编号,for example['中国':'100000', '湖南': '430000']
 @params {String} mapName: 地图名称
 */
var option_county_9_1
function loadMap_county_9_1(mapCode, mapName) {
    $.getJSON('china-main-city/' + mapCode + '.json', function (data) {
        if (data) {
            echarts.registerMap(mapName, data);
            option_county_9_1 = {
                tooltip : {
                    trigger: 'item',
                    formatter: '{b}',
                    itemSize:'14px',
                    textStyle: {
                        color: '#000'
                    }
                },
                visualMap: {
                    min: 0,
                    max: 60,
                    show: false,
                    calculable: false,
                    color: ['#3369fe','#fe33ed','#9f45ff','#33d1fe','#00ff81','#ff0000','#1b9cff'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {
                    map: mapName,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                series: [
                    {
                        name: '',
                        mapType: mapName,//  用哪个地图
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        selectedMode : 'multiple',
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            },
                            emphasis: {
                                show: true
                            },
                            textStyle: {
                                color: "#000"
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ddb926'
                            }
                        },
                        data: convertData(data2),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                    }
                ]
            };
            county_9_1.setOption(option_county_9_1);
            curMap_county_9_1 = {
                mapCode: mapCode,
                mapName: mapName
            };
        } else {
            //alert('无法加载该地图');
        }
    });
}
