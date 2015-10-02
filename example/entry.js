//just use to test the comps code
$(function(){
	var selectDatas = {"title":"灾害类型：",
		"cite":"请选择类型",
		'id' : 'province',
		"defaultCheck" : "",
		"list":[{"text":"广东省","value":"1"},
		{"text":"福建省","value":"2"},
		{"text":"湖南省","value":"3"}]};
		console.profile('性能分析一');
	var selectDiv = selectComp.init('100',selectDatas,selectBack);
	console.profileEnd();
	function selectBack(sBack){
		console.info(sBack);
	}
	
	var effectAreaDatas = {"title" : "影响区域：","list" : [{"text":"广东省","value":"1"},
	{"text":"福建省","value":"2"},{"text":"湖南省","value":"3"}]};
	var areaDiv = effectAreaComp.init(effectAreaDatas);
	
	var btnDatas = {"list":[{"value":"reset","text":"重置"},{"value":"send","text":"发送"}]}; 
	var btn = buttonComp.init(btnDatas,'tempTarget-btn');
	CC('demo').addComps([selectDiv,areaDiv,btn],btn,'send',sendBack);
	function sendBack(sBack){
		console.info(sBack);
	}
    windowDragComp.init(0,0);
});