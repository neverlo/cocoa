var buttonComp = {
	init : function(jsonDatas,callback){
		var btnDiv = document.createElement('div');
		btnDiv.setAttribute('class','tempTarget-btn');
		var btnDatas = jsonDatas.list;
		for(var key in btnDatas){
			var btnE = document.createElement('button');
			btnE.setAttribute('value',btnDatas[key].value);
			btnE.innerHTML = btnDatas[key].text;
			btnDiv.appendChild(btnE);
		}
		if(callback){
			btnDiv.addEventListener('click',function(iObj){
				backEvent(iObj.srcElement.attributes.value.value);
			});
			function backEvent(type){
				callback(type);
			}
		}
		return btnDiv;
	}
};