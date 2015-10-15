var mapTextComp = {
	init : function(pixel){
		var textDoc = document.createElement('div');
		var textInput = document.createElement('input');
		textInput.setAttribute('type','text');
		textInput.setAttribute('class','mapTextSubInput');
		
		var subInput = document.createElement('button');
		subInput.setAttribute('type','button');
		subInput.setAttribute('class','mapTextSubButton');
		subInput.innerHTML = '确定';
		
		textDoc.appendChild(textInput);
		textDoc.appendChild(subInput);
		textDoc.style.position = 'absolute';
		textDoc.style.left = pixel.x + 'px';
		textDoc.style.top = pixel.y + 'px';
		textDoc.style.zIndex = '9999';
		textDoc.style.width = '206px';
		textDoc.style.height = '29px';
		return textDoc;
	}
};