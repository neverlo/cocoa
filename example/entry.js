//just use to test the comps code
$(function(){
	var selectDatas = {"title":"灾害类型：",
		"cite":"请选择类型",
		'id' : 'province',
		"defaultCheck" : "",
		"list":[{"text":"广东省","value":"1"},
		{"text":"福建省","value":"2"},
		{"text":"湖南省","value":"3"}]};
        console.profile('one');
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
	cocoa.addComps('demo',[selectDiv,areaDiv,btn],btn,'send',sendBack);
	function sendBack(sBack){
		console.info(sBack);
	}
    windowDragComp.init(0,0);
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
         _x = e.pageX - parseInt($("#"+moveDivId).css("left"));
         _y = e.pageY - parseInt($("#"+moveDivId).css("top"));
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