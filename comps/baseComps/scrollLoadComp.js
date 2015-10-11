// 按需加载，减少页面加载的数据量
var scroolLoadComp = {
	init : function(arrComps,loadLine,scroolBack){
		var parentDiv = T().CDE('div');
		T(parentDiv).setClass('wlc-parent');
		var ulE = T().CDE('ul');
		if(scroolBack){
			ulE.onclick = function(rDatas){
				rDatas = T(rDatas).getEventTarget();
				var liId = (rDatas.parentNode).getAttribute('value');
				var result = {};
				result.id = liId;
				return scroolBack(result);
			};
		}
		
		parentDiv.appendChild(ulE);
		T(parentDiv).autoLoad(arrComps,loadLine,arrComps.length,ulE);
		// T(divId).addComps([parentDiv]);
		return parentDiv;
	}
};