//just use to test the comps code
$(function(){
	// console.profile('加载性能测试');
	// // 加载下拉框
	// var selectDatas = {"title":"灾害类型：","cite":"请选择类型",'id' : 'province',"defaultCheck" : "",
	// 	"list":[{"text":"广东省","value":"1"},
	// 	{"text":"福建省","value":"2"},
	// 	{"text":"湖南省","value":"3"}]};
	// var selectDiv = selectComp.init('100',selectDatas,selectBack);
	// function selectBack(sBack){
	// 	console.info(sBack);
	// }
	
	// // 加载影响区域
	// var effectAreaDatas = {"title" : "影响区域：","list" : [{"text":"广东省","value":"1"},
	// {"text":"福建省","value":"2"},{"text":"湖南省","value":"3"}]};
	// var areaDiv = effectAreaComp.init(effectAreaDatas);
	
	// // 加载按钮
	// var btnDatas = {"list":[{"value":"reset","text":"重置"},{"value":"send","text":"发送"}]}; 
	// var btn = buttonComp.init(btnDatas,'tempTarget-btn');
	// T('demo').addComps([selectDiv,areaDiv,btn],btn,'send',sendBack);
	// function sendBack(sBack){
	// 	console.info(sBack);
	// }
	
	// // 加载可拖动的窗口
	// var winDatasA = {"title":"可拖动窗口A","id":"one","wx":300,"wy":400};
	// var conDEA = T().CDE('div');
	// conDEA.innerHTML = 'A的内容对象';
    // windowDragComp.init(winDatasA,conDEA);
	// // var winDatasB = {"title":"可拖动窗口B","id":"one","wx":300,"wy":200};
	// // var conDEB = T().CDE('div');
	// // conDEB.innerHTML = 'B的内容对象';
	// // windowDragComp.init(winDatasB,conDEB);
	
	// // 加载可无限滚动加载的div内容框
	// var scDatas = {"list":[
	// 		{"num":"1","text":"测试测试测试测试测试"},
	// 		{"num":"2","text":"测试测试测试测试测试"},
	// 		{"num":"3","text":"测试测试测试测试测试"},
	// 		{"num":"4","text":"测试测试测试测试测试"},
	// 		{"num":"5","text":"测试测试测试测试测试"},
	// 		{"num":"6","text":"测试测试测试测试测试"},
	// 		{"num":"7","text":"测试测试测试测试测试"},
	// 		{"num":"8","text":"测试测试测试测试测试"},
	// 		{"num":"9","text":"测试测试测试测试测试"},
	// 		{"num":"10","text":"测试测试测试测试测试"},
	// 		{"num":"11","text":"测试测试测试测试测试"},
	// 		{"num":"12","text":"测试测试测试测试测试"},
	// 		{"num":"13","text":"测试测试测试测试测试"},
	// 		{"num":"14","text":"测试测试测试测试测试"},
	// 		{"num":"15","text":"测试测试测试测试测试"},
	// 		{"num":"16","text":"测试测试测试测试测试"},
	// 		{"num":"17","text":"测试测试测试测试测试"},
	// 		{"num":"18","text":"测试测试测试测试测试"},
	// 		{"num":"19","text":"测试测试测试测试测试"},
	// 		{"num":"20","text":"测试测试测试测试测试"},
	// 		{"num":"21","text":"测试测试测试测试测试"},
	// 		{"num":"22","text":"测试测试测试测试测试"},
	// 		{"num":"23","text":"测试测试测试测试测试"},
	// 		{"num":"24","text":"测试测试测试测试测试"},
	// 		{"num":"25","text":"测试测试测试测试测试"},
	// 		{"num":"26","text":"测试测试测试测试测试"},
	// 		{"num":"27","text":"测试测试测试测试测试"},
	// 		{"num":"28","text":"测试测试测试测试测试"},
	// 		{"num":"29","text":"测试测试测试测试测试"},
	// 		{"num":"30","text":"测试测试测试测试测试"},
	// 		{"num":"31","text":"测试测试测试测试测试"},
	// 		{"num":"32","text":"测试测试测试测试测试"},
	// 		{"num":"33","text":"测试测试测试测试测试"},
	// 		{"num":"34","text":"测试测试测试测试测试"},
	// 		{"num":"35","text":"测试测试测试测试测试"},
	// 		{"num":"36","text":"测试测试测试测试测试"},
	// 		{"num":"37","text":"测试测试测试测试测试"},
	// 		{"num":"38","text":"测试测试测试测试测试"},
	// 		{"num":"39","text":"测试测试测试测试测试"},
	// 		{"num":"40","text":"测试测试测试测试测试"},
	// 		{"num":"41","text":"测试测试测试测试测试"},
	// 		{"num":"42","text":"测试测试测试测试测试"},
	// 		{"num":"43","text":"测试测试测试测试测试"}
	// 	]};
	// 	var sLArr = [];
	// 	for(var sKey in scDatas.list){
	// 		var liE = document.createElement('li');
	// 		var spanO = document.createElement('span');
	// 		spanO.innerHTML = scDatas.list[sKey].num;
	// 		var spanT = document.createElement('span');
	// 		spanT.innerHTML = scDatas.list[sKey].text;
	// 		liE.appendChild(spanO);
	// 		liE.appendChild(spanT);
	// 		sLArr.push(liE);
	// 	}
	// scroolLoadComp.init('autoLoadA',sLArr,15);
	
	// var icComp = infoCountComp.init();
	// T('count').addComps([icComp]);
	
	
	// var searchDatas = {"tab":[{"title":"POI","value":"poi","warn":"请输入POI名称"},
	// 	{"title":"观测站","value":"site","warn":"请输入站点编号或名称"},
	// 	{"title":"灾害点","value":"demage","warn":"请输入灾害点名称或地址"},
	// 	{"title":"经纬度","value":"lonlat","warn":"请输入经纬度值，如：123.54;23.0...以;号分隔",
	// 	"erroe":"经纬度数据格式错误"}],
	// 	"defaultSelect":"经纬度",
	// 	"button":"搜索","backButton":"隐藏"};
	// var searchComp = searchBarComp.init(searchDatas,searchBack,hideBack);
	// T('searchBar').addComps([searchComp]);
	// function searchBack(rDatas){
	// 	var showInfo = '';
	// 	var status = true;
	// 	if(rDatas.type === 'lonlat'){
	// 		var item = searchBarComp.getSearchItem();
	// 		if((rDatas.value).indexOf(';') === -1){
	// 			showInfo = '格式错误，缺少\";\"号';
	// 		}else{
	// 			var lonlat = (rDatas.value).split(';');
	// 			if(lonlat.length === 2){
	// 				if(lonlat[0] !== '' && lonlat[1] !== ''){
	// 					if(isNaN(lonlat[0]) || isNaN(lonlat[1])){
	// 						showInfo = '格式错误，经纬度必须为数字';
	// 					}else if(lonlat[0]>180 || lonlat[0]<-180){
	// 						showInfo = '格式错误，经度不正确';
	// 					}else if(lonlat[1]>90 || lonlat[1]<-90){
	// 						showInfo = '格式错误，纬度不正确';
	// 					}else{
	// 						status = false;
	// 						console.info(lonlat);
	// 					}
	// 				}else{
	// 					showInfo = '格式错误，经纬度不正确';
	// 				}
	// 			}else{
	// 				showInfo = '格式错误，经纬度不正确';
	// 			}
	// 		}
	// 		item.span.innerHTML = showInfo;
	// 		if(status){
	// 			item.input.value = '';
	// 		}
	// 	}else{
	// 		console.info(rDatas);
	// 	}
	// }
	// function hideBack(){
	// 	console.info('hide');
	// }
	mapComp.buildMap('map');
	initToolBar.init(mapComp.getMap(),'阳江市',saveEvent);
	function saveEvent(jsonDatas){
		console.info(JSON.stringify(jsonDatas));
		console.info(jsonDatas);
	}
	
	var jsonDatas = {"Point":[{"type":"Point","text":"起点","size":15,"color":"#ed3f2b","fsize":12,"fcolor":"#000000","geometry":"POINT(124.46044921875 31.6455078125)"}],"arrowPolygon":[{"type":"arrowPolygon","text":"","size":0.6479999999999999,"color":"#0a78c8","fsize":36,"fcolor":"#000000","geometry":"POLYGON((123.73999885165763 29.810475068240457,123.33519646084237 30.316478056759543,119.53180850290532 27.273767690409905,119.12700611209006 27.779770678928987,117.83251571934443 25.499411012975543,120.34141328453585 26.261761713371737,119.93661089372058 26.76776470189082,123.73999885165763 29.810475068240457))"}],"text":[{"type":"text","text":"进攻","size":9,"color":"#000000","fsize":"3","fcolor":"#000000","geometry":"POINT(121.38427734375 28.173828125)"},{"type":"text","text":"A队","size":9,"color":"#000000","fsize":"3","fcolor":"#000000","geometry":"POINT(132.23876953125 32.216796875)"},{"type":"text","text":"B队","size":9,"color":"#000000","fsize":"3","fcolor":"#000000","geometry":"POINT(114.39697265625 31.77734375)"}],"Polygon":[{"type":"Polygon","text":"目的地","size":"3","color":"#000000","fsize":36,"fcolor":"#ffffff","geometry":"POLYGON((118.00048828125 24.658203125,117.95654296875 24.7021484375,117.86865234375 24.7900390625,117.69287109375 25.0537109375,117.38525390625 25.3173828125,116.19873046875 25.7568359375,114.96826171875 25.9326171875,113.69384765625 25.9326171875,112.37548828125 25.888671875,111.49658203125 25.6689453125,110.70556640625 25.44921875,109.91455078125 25.009765625,109.51904296875 24.74609375,109.25537109375 24.5263671875,109.12353515625 24.2626953125,109.12353515625 24.0869140625,109.12353515625 23.9111328125,109.12353515625 23.3837890625,109.12353515625 23.1640625,109.21142578125 22.8564453125,109.25537109375 22.548828125,109.38720703125 22.2412109375,109.60693359375 21.93359375,109.82666015625 21.669921875,110.09033203125 21.3623046875,110.35400390625 21.0986328125,110.74951171875 20.8349609375,111.14501953125 20.52734375,111.62841796875 20.2197265625,112.46337890625 19.8681640625,113.21044921875 19.736328125,114.00146484375 19.560546875,114.96826171875 19.47265625,116.02294921875 19.47265625,116.90185546875 19.5166015625,117.51708984375 19.6044921875,118.00048828125 19.8681640625,118.26416015625 20.17578125,118.43994140625 20.52734375,118.57177734375 20.8349609375,118.65966796875 21.0546875,118.65966796875 21.40625,118.65966796875 21.669921875,118.65966796875 21.9775390625,118.65966796875 22.197265625,118.61572265625 22.373046875,118.61572265625 22.5927734375,118.52783203125 22.8564453125,118.43994140625 22.98828125,118.39599609375 23.2080078125,118.35205078125 23.33984375,118.35205078125 23.4716796875,118.30810546875 23.6474609375,118.26416015625 23.8671875,118.26416015625 23.9990234375,118.17626953125 24.1748046875,118.13232421875 24.2626953125,118.13232421875 24.306640625,118.13232421875 24.3505859375,118.08837890625 24.4384765625,118.08837890625 24.482421875,118.08837890625 24.5263671875,118.08837890625 24.5703125,118.00048828125 24.658203125))"}],"dynamicLinePoint":[{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(123.93310546875 35.3369140625)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(128.72314453125 29.5361328125)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(125.95458984375 24.74609375)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(123.31787109375 21.40625)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(117.91259765625 17.2314453125)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(108.50830078125 16.66015625)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(116.94580078125 33.53515625)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(120.02197265625 22.7685546875)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(129.16259765625 19.3408203125)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(132.72216796875 24.21875)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#96c130","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(119.67041015625 34.58984375)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#96c130","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(114.39697265625 28.3056640625)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#96c130","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(108.15673828125 32.5244140625)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(127.88818359375 35.6884765625)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(125.16357421875 27.294921875)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(129.38232421875 26.328125)"},{"type":"dynamicLinePoint","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"POINT(133.20556640625 17.5830078125)"}],"dynamicLine":[{"type":"dynamicLine","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"LINESTRING(123.93310546875 35.3369140625,128.72314453125 29.5361328125,125.95458984375 24.74609375,123.31787109375 21.40625,117.91259765625 17.2314453125,108.50830078125 16.66015625)"},{"type":"dynamicLine","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"LINESTRING(116.94580078125 33.53515625,120.02197265625 22.7685546875,129.16259765625 19.3408203125,132.72216796875 24.21875)"},{"type":"dynamicLine","text":"","size":"3","color":"#96c130","fsize":"","fcolor":"","cursor":"pointer","geometry":"LINESTRING(119.67041015625 34.58984375,114.39697265625 28.3056640625,108.15673828125 32.5244140625)"},{"type":"dynamicLine","text":"","size":"3","color":"#ed3f2b","fsize":"","fcolor":"","cursor":"pointer","geometry":"LINESTRING(127.88818359375 35.6884765625,125.16357421875 27.294921875,129.38232421875 26.328125,133.20556640625 17.5830078125)"}],"zoom":5,"lon":118.06640625,"lat":25.361328125,"caseId":""};
	// mapComp.restoreLayer(mapComp.getMap(),jsonDatas);
	mapComp.restoreLayer(mapComp.getMap(),jsonDatas);
});