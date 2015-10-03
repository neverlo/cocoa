// create a window can drag
var windowDragComp = {
	init : function(jsonDatas,wx,wy){
		var parentE = CC().CDE('div');
		// parentE.setAttribute('id',divId);
		parentE.setAttribute('class','wdc-parent');
		parentE.style.position = 'absolute';
		parentE.style.left = jsonDatas.wx+'px';
		parentE.style.top = jsonDatas.wy+'px';
		parentE.style.width = '400px';
		parentE.style.height = '100px';
		var titleDiv = CC().CDE('div');
		titleDiv.style.cursor = 'pointer';
		titleDiv.setAttribute('class','wdc-dragTitle');
		var titleSpan = CC().CDE('span');
		titleSpan.innerHTML = jsonDatas.title;
		titleDiv.appendChild(titleSpan);
		var dragContentDiv = CC().CDE('div');
		dragContentDiv.style.cursor = 'default';
		parentE.appendChild(titleDiv);
		parentE.appendChild(dragContentDiv);
		document.body.appendChild(parentE);
		this.parentE = CC(this.parentE).compRecord(jsonDatas.id,parentE);
		this.addDrag(titleDiv,parentE);
	},
	remove : function(){
		if(this.parentE){
			CC(this.parentE).remove();
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