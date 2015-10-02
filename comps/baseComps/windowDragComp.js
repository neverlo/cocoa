// create a window can drag
var windowDragComp = {
	init : function(divId,wx,wy){
		var parentE = CC().CDE('div');
		// parentE.setAttribute('id',divId);
		parentE.setAttribute('class','wdc-parent');
		parentE.style.position = 'absolute';
		parentE.style.left = '100px';
		parentE.style.top = '100px';
		parentE.style.width = '400px';
		parentE.style.height = '100px';
		var titleDiv = CC().CDE('div');
		titleDiv.style.cursor = 'pointer';
		titleDiv.setAttribute('class','wdc-dragTitle');
		var titleSpan = CC().CDE('span');
		titleSpan.innerHTML = '可拖动的窗口标题';
		titleDiv.appendChild(titleSpan);
		var dragContentDiv = CC().CDE('div');
		dragContentDiv.style.cursor = 'default';
		parentE.appendChild(titleDiv);
		parentE.appendChild(dragContentDiv);
		document.body.appendChild(parentE);
		this.parentE = CC(this.parentE).compRecord(divId,parentE);
		this.addDrag(titleDiv,parentE);
	},
	remove : function(){
		if(this.parentE){
			CC(this.parentE).remove();
		}
	},
	addDrag : function(titleDiv,parentE){
		var _move = false; //移动标记
		var _x, _y; //鼠标离控件左上角的相对位置
		var _nx,_ny;//新的位置
		var currentWW = document.body.scrollWidth;
		var currentWH = document.body.scrollHeight;
		var windowDivWidth = parentE.style.width;
		var windowDivHeight = parentE.style.height;
		CC(titleDiv).mousedown(function(tObj){
			_move = true;
			_x = tObj.pageX - parseInt(parentE.style.left);
			_y = tObj.pageY - parseInt(parentE.style.top);
		});
		CC(document).mousemove(function(cObj){
			if (_move){
				var _nx = cObj.pageX - _x; //移动时根据鼠标位置计算控件左上角的绝对位置
				var _ny = cObj.pageY - _y;
				var xWidth = currentWW - parseInt(windowDivWidth);
				var yHeight = currentWH - parseInt(windowDivHeight);
				if(_nx>0 && _nx<xWidth && _ny>0 && _ny<yHeight){
					parentE.style.left = _nx + 'px';
					parentE.style.top = _ny + 'px';
				}
			}
		}).mouseout(function(){
			if(_move){
				parentE.style.left = _nx + 'px';
				parentE.style.top = _ny + 'px';
			}
		}).mouseup(function(){
			_move = false;
		});
	}
};