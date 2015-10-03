// create a window can drag
/**
 * 生成带拖动功能的div窗口
 * jsonDatas:{"title":"窗口A","id":"one","wx":300,"wy":300};
 * 	title:窗口标题 id:窗口ID值 
 * wx:窗口弹出的像素位置X
 * wy:窗口弹出的像素位置Y
 * contentDE:内容元素DOM对象
 */
var windowDragComp = {
	init : function(jsonDatas,contentDE){
		var parentE = T().CDE('div');
		// parentE.setAttribute('id',divId);
		parentE.setAttribute('class','wdc-parent');
		parentE.style.position = 'absolute';
		parentE.style.left = jsonDatas.wx+'px';
		parentE.style.top = jsonDatas.wy+'px';
		parentE.style.width = '400px';
		parentE.style.height = '100px';
		var titleDiv = T().CDE('div');
		titleDiv.style.cursor = 'pointer';
		titleDiv.setAttribute('class','wdc-dragTitle');
		var titleSpan = T().CDE('span');
		titleSpan.innerHTML = jsonDatas.title;
		titleDiv.appendChild(titleSpan);
		var dragContentDiv = T().CDE('div');
		if(typeof(contentDE) !== 'undefined'){
			dragContentDiv.appendChild(contentDE);
		}
		dragContentDiv.style.cursor = 'default';
		parentE.appendChild(titleDiv);
		parentE.appendChild(dragContentDiv);
		document.body.appendChild(parentE);
		this.parentE = T(this.parentE).compRecord(jsonDatas.id,parentE);
		this.addDrag(titleDiv,parentE);
	},
	remove : function(){
		if(this.parentE){
			T(this.parentE).remove();
		}
	},
	addDrag : function(handle,oDrag){
		handle = handle || oDrag;
		handle.style.cursor = "move";
		handle.onmousedown = function (event){
			event = event || window.event;
			oDrag.style.zIndex = '999999';
			var disX = event.clientX - oDrag.offsetLeft;
			var disY = event.clientY - oDrag.offsetTop;
			document.onmousemove = function (devent){
				devent = devent || window.devent;
				var iL = devent.clientX - disX;
				var iT = devent.clientY - disY;
				var maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
				var maxT = document.documentElement.clientHeight - oDrag.offsetHeight;
				iL = iL <= 0 ? 0 : iL;
				iT = iT <= 0 ? 0 : iT;
				iL = iL >= maxL ? maxL : iL;
				iT = iT >= maxT ? maxT : iT;
				// iL <= 0 && (iL = 0);
				// iT <= 0 && (iT = 0);
				// iL >= maxL && (iL = maxL);
				// iT >= maxT && (iT = maxT);
				oDrag.style.left = iL + "px";
				oDrag.style.top = iT + "px";
				return false;
			};
			document.onmouseup = function (){
				document.onmousemove = null;
				document.onmouseup = null;
				oDrag.style.zIndex = '99999';
				// this.releaseCapture && this.releaseCapture();
			};
			// this.setCapture && this.setCapture();
			return false;
		};
	}
};