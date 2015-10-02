// create a window can drag
var windowDragComp = {
	init : function(wx,wy){
		var parentE = document.createElement('div');
		parentE.setAttribute('class','wdc-parent');
		parentE.style.position = 'absolute';
		parentE.style.left = wx;
		parentE.style.top = wy;
		parentE.style.width = '400px';
		parentE.style.height = '100px';
		var titleDiv = document.createElement('div');
		titleDiv.style.cursor = 'pointer';
		titleDiv.setAttribute('class','wdc-dragTitle');
		var titleSpan = document.createElement('span');
		titleSpan.innerHTML = '可拖动的窗口标题';
		titleDiv.appendChild(titleSpan);
		var dragContentDiv = document.createElement('div');
		dragContentDiv.style.cursor = 'default';
		parentE.appendChild(titleDiv);
		parentE.appendChild(dragContentDiv);
		document.body.appendChild(parentE);
		this.parentE = parentE;
		this.addDrag(titleDiv,parentE);
	},
	remove : function(){
		if(this.parentE){
			cocoa.removeComp(this.parentE);
		}
	},
	addDrag : function(titleE,parentE){
		var _move = false; //移动标记
		var _x, _y; //鼠标离控件左上角的相对位置
		var currentWW = document.body.scrollWidth;
		var currentWH = document.body.scrollHeight;
		var windowDivWidth = parentE.style.width;
		var windowDivHeight = parentE.style.height;
		titleE.onmousedown = function(tObj){
			_move = true;
			_x = tObj.pageX - parseInt(parentE.style.left);
			_y = tObj.pageY - parseInt(parentE.style.top);
		};
		document.body.onmousemove = function(dObj){
			if (_move){
				var x = dObj.pageX - _x; //移动时根据鼠标位置计算控件左上角的绝对位置
				var y = dObj.pageY - _y;
				var xWidth = currentWW - parseInt(windowDivWidth);
				var yHeight = currentWH - parseInt(windowDivHeight);
				if(x>0 && x<xWidth && y>0 && y<yHeight){
					parentE.style.left = x + 'px';
					parentE.style.top = y + 'px';
				}
			}
		};
		document.body.onmouseup = function(){
			_move = false;
		};
		titleE.onmouseout = function(tObj){
			console.info('out');
			if(_move){
				var x = tObj.pageX - _x;
				var y = tObj.pageY - _y;
				var xWidth = currentWW - parseInt(windowDivWidth);
				var yHeight = currentWH - parseInt(windowDivHeight);
				if(x>0 && x<xWidth && y>0 && y<yHeight){
					parentE.style.left = x + 'px';
					parentE.style.top = y + 'px';
				}
			}
			// _move = false;
		};
	}
};