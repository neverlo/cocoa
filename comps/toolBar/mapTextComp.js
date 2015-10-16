var mapTextComp = {
	init : function(pixel,callBack,layerText,featureId){
		var textDoc = document.createElement('div');
		if(typeof(featureId) !== 'undefined'){
			textDoc.setAttribute('layerId',featureId);
		}
		var textInput = document.createElement('input');
		textInput.setAttribute('type','text');
		textInput.setAttribute('class','mapTextSubInput');
		if(typeof(layerText) !== 'undefined'){
			textInput.value = layerText;
		}
		var subInput = document.createElement('button');
		subInput.setAttribute('type','button');
		subInput.setAttribute('class','mapTextSubButton');
		subInput.innerHTML = '确定';
		subInput.onclick = function(){
			if(callBack){
				var bDatas = {};
				bDatas.type = 'submit';
				bDatas.value = textInput.value;
				return callBack(bDatas);
			}
		};
		var imgDiv = document.createElement('div');
		var imgE = document.createElement('img');
		imgE.onclick = function(){
			if(callBack){
				var bDatas = {};
				bDatas.type = 'delete';
				bDatas.value = textDoc;
				return callBack(bDatas);
			}
		};
		imgE.setAttribute('class','textDelete');
		imgDiv.appendChild(imgE);
		imgE.setAttribute('src','data:image/png;base64,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');
		textDoc.appendChild(textInput);
		textDoc.appendChild(subInput);
		textDoc.appendChild(imgDiv);
		textDoc.style.position = 'absolute';
		textDoc.style.left = pixel.x + 'px';
		textDoc.style.top = pixel.y + 'px';
		textDoc.style.zIndex = '9999';
		textDoc.style.width = '206px';
		textDoc.style.height = '29px';
		return textDoc;
	}
};