function showTargetMessage(){
	loadTargetMsg();
	msgTrackEvent();
}

function loadTargetMsg(){
	var areaDatas = {"title" : "影响区域：","list" : ""};
	var url = "http://127.0.0.1/dss-data/gisInfo/gis-info!getTownListByGemotry.action";
	var reqDatas = {'geomtry':tempDrawPolyGon};
	$.ajax({type:"POST",url:url,data:reqDatas,success:function(rDatas){
		areaDatas.list = rDatas;
		T().clearCompsById(['yjddDiv']);
		targetMsgComp.init('yjddDiv',['短信','大喇叭'],'其他',areaDatas);
	}});
}

function msgTrackEvent(){
	//防止多次绑定
	$('#msgMinMax').unbind();
	$('#msgMaxClose').unbind();
	$('#msgMinClose').unbind();
	$('#msgMinMax').click(function(){
		T().clearCompsById(['trackMin']);
		$('#msgMin').hide();
		$('#msgMax').show();
		targetTrackComp.initMax('trackMax');
	});
	$('#msgMaxClose').click(function(){
		T().clearCompsById(['tragetType','tragetKind','tragetChose']);
		$('#msgMax').hide();
		targetTrackComp.clearTrackInterval();
	});
	$('#msgMinClose').click(function(){
		T().clearCompsById(['trackMin']);
		$('#msgMin').hide();
		targetTrackComp.clearTrackInterval();
	});
	mouse4MoveRainWindow("msgMaxTitle","msgMax");//添加窗口拖动事件
}

//只显示大的信息追踪窗口
function showTrackInfo(){
	$('#msgMaxClose').unbind();
	$('#msgMax').show();
	targetTrackComp.initMax('trackMax');
	$('#msgMaxClose').click(function(){
		T().clearCompsById(['tragetType','tragetKind','tragetChose']);
		$('#msgMax').hide();
		targetTrackComp.clearTrackInterval();
	});
	mouse4MoveRainWindow("msgMaxTitle","msgMax");//添加窗口拖动事件
}