//just use to test the comps code
$(function(){
	var selectDatas = {"title":"灾害类型：",
		"cite":"请选择类型",
		'id' : 'province',
		"defaultCheck" : "",
		"list":[{"text":"广东省","value":"1"},
		{"text":"福建省","value":"2"},
		{"text":"湖南省","value":"3"}]};
	var selectDiv = selectComp.init('100',selectDatas,selectBack);
	// compTools.addComps('selectComp',[selectDiv]);
	function selectBack(sBack){
		console.info(sBack);
	}
	
	var effectAreaDatas = {"title" : "影响区域：","list" : [{"text":"广东省","value":"1"},
	{"text":"福建省","value":"2"},{"text":"湖南省","value":"3"}]};
	var areaDiv = effectAreaComp.init(effectAreaDatas);
	// compTools.addComps('effectAreaComp',[areaDiv])
	
	var btnDatas = {"list":[{"value":"reset","text":"重置"},{"value":"send","text":"发送"}]}; 
	var btn = buttonComp.init(btnDatas,'tempTarget-btn');
	compTools.addComps('demo',[selectDiv,areaDiv,btn],btn,'send',sendBack);
	function sendBack(sBack){
		console.info(sBack);
	}
    windowDragComp.init(0,0);
    // mouse4MoveRainWindow('dragTitle','dragBody');
});

function mouse4MoveRainWindow(divIdName,moveDivId){
	var _move = false; //移动标记
    var _x, _y; //鼠标离控件左上角的相对位置
    var currentWW = $(document).width();
    var currentWH = $(document).height();
    var windowDivHeight = $("#"+moveDivId).height();
	var windowDivWidth = $("#"+moveDivId).width();
    $("#"+divIdName).mousedown(function(e) {
         _move = true;
//         _x = e.pageX - parseInt($("#"+moveDivId).css("left"));
         _x = e.pageX - parseInt($("#"+moveDivId).css("left"));
         _y = e.pageY - parseInt($("#"+moveDivId).css("top"));
//         $("#"+moveDivId).fadeTo(20, 0.5); //点击后开始拖动并透明显示
        //  controllerMapSiteEvent(false);
    });
     $(document).mousemove(function(e) {
         if (_move) {
             var x = e.pageX - _x; //移动时根据鼠标位置计算控件左上角的绝对位置
            var y = e.pageY - _y;
            if(x>0 && x<(currentWW-windowDivWidth) && y>0 && y<(currentWH-windowDivHeight)){
            	$("#"+moveDivId).css({ top: y, left: x }); //控件新位置
            }
        }
     }).mouseup(function() {
         _move = false;
//         $("#"+moveDivId).fadeTo("fast", 1); //松开鼠标后停止移动并恢复成不透明
        //  controllerMapSiteEvent(true);
    }).mouseout(function(){
    		if (_move) {
                var x = e.pageX - _x; //移动时根据鼠标位置计算控件左上角的绝对位置
               var y = e.pageY - _y;
               if(x>0 && x<(currentWW-windowDivWidth) && y>0 && y<(currentWH-windowDivHeight)){
               	$("#"+moveDivId).css({ top: y, left: x }); //控件新位置
               }
           }
           _move = false;
    });
}