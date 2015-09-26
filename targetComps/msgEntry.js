$(function(){
	loadArea();
	msgTrackEvent();
});

function loadArea(){
	var areaDatas = {
		"title" : "影响区域：",
		"list" : [
			{"value":"1","text":"潭水镇"},
			{"value":"2","text":"潭水镇"},
			{"value":"3","text":"潭水镇"},
			{"value":"4","text":"潭水镇"},
			{"value":"5","text":"潭水镇"},
			{"value":"6","text":"潭水镇"},
			{"value":"7","text":"潭水镇"},
			{"value":"8","text":"潭水镇"},
			{"value":"9","text":"潭水镇"},
			{"value":"10","text":"潭水镇"},
			{"value":"11","text":"潭水镇"},
			{"value":"12","text":"潭水镇"},
			{"value":"13","text":"潭水镇"}]
	};
	compTools.clearCompsById('targetComps');
	targetMsgComp.init('targetComps',['短信','大喇叭'],'蓝',areaDatas);
}

function msgTrackEvent(){
	$('#msgMinMax').click(function(){
		compTools.clearCompsById(['trackMin']);
		$('#msgMin').hide();
		$('#msgMax').show();
		targetTrackComp.initMax('trackMax');
	});
	$('#msgMaxClose').click(function(){
		compTools.removeComp(pagingComp.getPageButton('trackMax'));
		compTools.clearCompsById(['trackMax','tragetType','tragetKind','tragetChose']);
		$('#msgMax').hide();
		targetTrackComp.clearTrackInterval();
	});
	$('#msgMinClose').click(function(){
		compTools.clearCompsById(['trackMin']);
		$('#msgMin').hide();
	});
}