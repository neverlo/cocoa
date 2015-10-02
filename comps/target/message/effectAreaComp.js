var effectAreaComp = {
	init : function(jsonDatas){
		var parentDiv = document.createElement('div');
		CC(parentDiv).setClass('influenceArea marTpad');
		if(typeof(jsonDatas.title) !== 'undefined'){
			var labelE = document.createElement('label');
			CC(labelE).setClass('EAlabel marR10');
			labelE.innerHTML = jsonDatas.title;
			parentDiv.appendChild(labelE);
		}
		var listAreaE = document.createElement('div');
		CC(listAreaE).setClass('influenceArea-box');
		var areaUlE = document.createElement('ul');
		CC(areaUlE).setClass('influenceArea-box-ul');
		var dataList = jsonDatas.list;
		var valueList = '';
		for(var key in dataList){
			var liE = document.createElement('li');
			CC(liE).setClass('influenceArea-box-ul-li');
			liE.setAttribute('value',dataList[key].value);
			liE.setAttribute('text',dataList[key].text);
			valueList += dataList[key].value + ',';
			var aE = document.createElement('a');
			CC(aE).setClass('influenceArea-box-ul-li-a');
			aE.innerHTML = dataList[key].text;
			var iE = document.createElement('i');
			CC(iE).setClass('influenceArea-box-ul-li-a-i');
			iE.setAttribute('value',dataList[key].value);
			iE.innerHTML = 'x';
			aE.appendChild(iE);
			liE.appendChild(aE);
			areaUlE.appendChild(liE);
		}
		CC(areaUlE).click(function(ulObj){
			var targetObj = CC(ulObj).getEventTarget();
			if(targetObj.nodeName === 'I'){
				var focusObj = targetObj.parentElement.parentElement;
				if(typeof(focusObj.attributes.value) !== 'undefined'){
					var liV = focusObj.attributes.value.value;
					var recordMap = parentDiv.attributes.tempdatas.areaList;
					recordMap = recordMap.replace(liV+',','');
					parentDiv.attributes.tempdatas.areaList = recordMap;
					CC(focusObj).remove();
				}
			}
		});
		listAreaE.appendChild(areaUlE);
		parentDiv.appendChild(listAreaE);
		var tempMap = {'areaList':valueList};
		parentDiv.attributes.tempdatas = tempMap;
		return parentDiv;
	}
};