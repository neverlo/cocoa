var radioComp = {
	init : function(jsonDatas,callback){
		var radioDiv = document.createElement('div');
		if(typeof(jsonDatas.title) !== 'undefined'){
			var labelE = document.createElement('label');
			labelE.innerText = jsonDatas.title;
			radioDiv.appendChild(labelE);
		}
		var listDatas = jsonDatas.list;
		var defMap = {};
		for(var key in listDatas){
			var rValue = listDatas[key].value;
			var rText = listDatas[key].text;
			var radioInput = document.createElement('input');
			if(rValue === jsonDatas.defaultChecked){
				radioInput.setAttribute('checked','checked');
				defMap.value = rValue;
				defMap.text = rText;
			}
			radioInput.setAttribute('type','radio');
			radioInput.setAttribute('name',jsonDatas.name);
			radioInput.setAttribute('value',rValue);
			radioInput.setAttribute('text',rText);
			var tSpan = document.createElement('span');
			tSpan.innerHTML = rText;
			radioDiv.appendChild(radioInput);
			radioDiv.appendChild(tSpan);
		}
		radioDiv.addEventListener('click',function(iObj){
			var nodeName = iObj.srcElement.nodeName;
			if(nodeName === 'INPUT'){
				defMap.value = iObj.srcElement.attributes.value.value;
				defMap.text = iObj.srcElement.attributes.text.value;
				var callDatas = {"radio":defMap};
				radioDiv.attributes.tempdatas = callDatas;
				if(callback){
					backEvent(callDatas);
				}
			}
		});
		function backEvent(callDatas){
			callback(callDatas);
		}
		var defDatas = {"radio":defMap};
		radioDiv.attributes.tempdatas = defDatas;
		return radioDiv;
		// document.getElementById('demoRadio').appendChild(radioDiv);
	}
};