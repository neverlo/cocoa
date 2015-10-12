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
	initToolBar('阳江市');
});