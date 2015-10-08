// 按需加载，减少页面加载的数据量
var scroolLoadComp = {
	init : function(divId,arrComps,loadLine){
		var parentDiv = T().CDE('div');
		T(parentDiv).setClass('wlc-parent');
		var ulE = T().CDE('ul');
		parentDiv.appendChild(ulE);
		T(parentDiv).autoLoad(arrComps,loadLine,arrComps.length,ulE);
		T(divId).addComps([parentDiv]);
	}
};