var effectAreaComp = {
	init : function(jsonDatas){
		var parentDiv = document.createElement('div');
		parentDiv.setAttribute('class','influenceArea');
		if(typeof(jsonDatas.title) !== 'undefined'){
			var labelE = document.createElement('label');
			labelE.setAttribute('class','EAlabel');
			labelE.innerText = jsonDatas.title;
			parentDiv.appendChild(labelE);
		}
		var listAreaE = document.createElement('div');
		listAreaE.setAttribute('class','influenceArea-box');
		var areaUlE = document.createElement('ul');
		areaUlE.setAttribute('class','influenceArea-box-ul');
		var dataList = jsonDatas.list;
		var valueList = '';
		for(var key in dataList){
			var liE = document.createElement('li');
			liE.setAttribute('class','influenceArea-box-ul-li');
			liE.setAttribute('value',dataList[key].value);
			liE.setAttribute('text',dataList[key].text);
			valueList += dataList[key].value + ',';
			liE.onclick = function(liObj){
				if(typeof(liObj.srcElement.attributes.value) !== 'undefined'){
					var liV = liObj.srcElement.attributes.value.value;
					var recordMap = parentDiv.attributes.tempdatas.areaList;
					recordMap = recordMap.replace(liV+',','');
					parentDiv.attributes.tempdatas.areaList = recordMap;
					this.remove();
				}
			};
			var aE = document.createElement('a');
			aE.setAttribute('class','influenceArea-box-ul-li-a');
			aE.innerHTML = dataList[key].text;
			var iE = document.createElement('i');
			iE.setAttribute('class','influenceArea-box-ul-li-a-i');
			iE.setAttribute('value',dataList[key].value);
			iE.innerText = 'x';
			aE.appendChild(iE);
			liE.appendChild(aE);
			areaUlE.appendChild(liE);
		}
		listAreaE.appendChild(areaUlE);
		parentDiv.appendChild(listAreaE);
		var tempMap = {'areaList':valueList};
		parentDiv.attributes.tempdatas = tempMap;
		return parentDiv;
	}
};