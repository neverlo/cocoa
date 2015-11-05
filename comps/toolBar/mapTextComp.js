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
		var okImg = document.createElement('div');
		okImg.setAttribute('class', 'sureImgDiv');
		var subInput = document.createElement('img');
		okImg.appendChild(subInput);
//		subInput.setAttribute('type','button');
		subInput.setAttribute('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAArElEQVR4AWP4SQEY1Ywb3H1zJ21zLJDE1ExYZ/ga36jt/qGrvZH1MxCvM/1ITMgmzxWXF2PX/OHrh+8/vuPRueD8LOzOfvflXc62lLZD9XD9CJ2HETpRNMPtBOoM2+Idusmr43AjUP/9t/eQdS66MAdfaPccbQMqyj6eANTfsL8Cv06EZkz9cbuDgdrw60RoxtSfdjgarpOAZkz9QLTk4nxyUlj/sQ7sOkezJADgZzrV6RcfDgAAAABJRU5ErkJggg==');
		subInput.setAttribute('class','mapTextSubButton');
//		subInput.innerHTML = '确定';
		subInput.onclick = function(){
			if(callBack){
				var bDatas = {};
				bDatas.type = 'submit';
				bDatas.value = textInput.value;
				return callBack(bDatas);
			}
		};
		var imgDiv = document.createElement('div');
		imgDiv.setAttribute('class', 'deleteImg');
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
		imgE.setAttribute('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAt0lEQVR4AeXTQQqDMBAF0B7NIwh6gAgKgrjIRsRTiXvxRsWETqh20SofapMwpNBddecwz/mO8bL8cP0JNuOo6vo+z1aVSDUN9T2LIa9RZNJUlSX8IZPkFsc0DCzWXbc1PaU8PORHkcV+q3OLOAy2/aMo1izzJY/h23YVYmN4xJ5Wa37b3nDMBHbHfhU7zxch2NiBhVWVv//wp4Lc35PI8Sw204RDAokifPiQwCsp39LykC4+2f/8AiU4J/YIxRx+AAAAAElFTkSuQmCC');
		textDoc.appendChild(textInput);
		textDoc.appendChild(okImg);
		textDoc.appendChild(imgDiv);
		textDoc.style.position = 'absolute';
		textDoc.style.left = pixel.x + 'px';
		textDoc.style.top = pixel.y +58+ 'px';
		textDoc.style.zIndex = '9999';
		textDoc.style.width = '206px';
		textDoc.style.height = '40px';
		return textDoc;
	}
};