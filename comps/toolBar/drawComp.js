var drawComp = {
	init : function(logoList,backEvent){
		var jsonDatas = [{
			'title':'标注工具','sTitle':'取消标注','value':'marker','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABcElEQVR4AZWSA2ylURSE10awthmsbcRatI0aq3Ea1G6MRi+obdu2bdu2Ts88/ihPMj/ufHO9T1iXXSoPsPRZ0axB1or6HY12+EJeGLzMyr3t00CG2SNkkDtJn1In6X3yOD2P6ie0wwcnDR5nVT8N7SJF0zw5Nc7R57QpmeCDAy8M2zwIaCWjkhlyb5un90ljdMe3ia66VeNN7/gfYQgceGG46U38CBmXz9L39CkONAIwZ53C+7ZPozb8Jn6YwAvDq1ifBuARARxRe6euuFZpPebgrQnDPe8SR7XAXd8mzcgn8cZMNB5z8HqFYcWTkE4tgDXfVa8Z7/eCNYMDLwxf46kNv4obArCl3iSMEHNjzF+RHtfva+41q8JRhPrA533Ds3adub9bXRRTXAbh5kH4v+2tvCSO4LYK72eFPQhsFYXv+TUj6At/33bFwAlWgWYDHwW1I5imObodi8GzrOq7fk0IVuF/314KO8pKYJ3fitkALc6Dqqd/prcAAAAASUVORK5CYII='
		},{
			'title':'画动态线','sTitle':'取消画线','value':'dynamicLine','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA10lEQVR42s3SMQsBYRzHcYNE1BkMN0jehM3uFVi4xSA2i0VkkRLKorwGk9F2k80iZcFCWcRwIZvzHZ7h6d9zm8FTn7q7b7+urgv9z3E2fhZbeCiLZmONJ2qm8Qi+chatozXPNC7CVxaiFfBRzTWNk7jihLhoMVxQh2Uad9HCCnnRGhgEfawEjkiigrnWItjDDho30VfXcdyRVvdVTIOGURyQ0p7N0EMYO2TkyIKDMSai5XDDDEvTG134SsnQPa0XZXxpsS22sg9lrOGNLeyAP+6hejb0q/MFHusAONrezFEAAAAASUVORK5CYII='
		},{
			'title':'添加文字','sTitle':'取消添加文字','value':'text','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAsklEQVR4AWPABWIu/LcE4v9AbIVLDT7NG6CaN5CqUROI/4I0Q2ktUjTPAWtE4LnEapQE4p9A/AeIs0A0lC9JjOYuqG39UP5EKL+LkEZ+IH4PxI+BmBcqxgPED6HiAvg0l0BtCUIS4wXiaKh4KS6NbED8DKQIF4bKs2HTnARWQBgnoWtkAuKrIEwgTK5CMROyoD/U1AYCmuuh6vyRBY9ABbUIaNaCqjsKFkD3Ex69mGopAQAQ3AhcUBXFegAAAABJRU5ErkJggg=='
		},{
			'title':'画箭头','sTitle':'取消画箭头','value':'arrowPolygon','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAaklEQVR4AWOgGYi58P8/LkyRARS5gFiNMUD8B1MzYY0JMI3oBhDSmArEf5E0xiJ7AZ/GTCD+B1IEpRPRwwCXxlw0jSnEBk4xWBNCYxaxGsvRQjSfWI01aBqLSEkEDUgaK2DipBpQx0AvAADQsNM8Yuz3HgAAAABJRU5ErkJggg=='
		},{
			'title':'画圆形','sTitle':'取消画圆形','value':'circle','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAmklEQVR4AWOgOoi58J8RiDuAeCsQq5CikRmI5wLxfyj+CcTtQMxDSCMnEG8Ea8LEz4A4EuQqbBoFgPgASCEBfASIDZE1SgDxBZAkkfgFsubzIEES8BZkzZNI1FyPrFkFiP+SoNkTPcA2kKBZFF2zA5Ea7+KK53NEaF6JS3McEZqLYOpZ0PSvAOJGKPsJFD8H4kcgGsq/TJUMBABfU4nUIZMyzQAAAABJRU5ErkJggg=='
		},{
			'title':'画矩形','sTitle':'取消画矩形','value':'regularPolygon','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAmklEQVR4AWOgOoi58J8RiDuAeCsQq5CikRmI5wLxfyj+CcTtQMxDSCMnEG8Ea8LEz4A4EuQqbBoFgPgASCEBfASIDZE1SgDxBZAkkfgFsubzIEES8BZkzZNI1FyPrFkFiP+SoNkTPcA2kKBZFF2zA5Ea7+KK53NEaF6JS3McEZqLYOpZ0PSvAOJGKPsJFD8H4kcgGsq/TJUMBABfU4nUIZMyzQAAAABJRU5ErkJggg=='
		},{
			'title':'画多边形','sTitle':'取消画多边形','value':'polygon','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAmklEQVR4AWOgOoi58J8RiDuAeCsQq5CikRmI5wLxfyj+CcTtQMxDSCMnEG8Ea8LEz4A4EuQqbBoFgPgASCEBfASIDZE1SgDxBZAkkfgFsubzIEES8BZkzZNI1FyPrFkFiP+SoNkTPcA2kKBZFF2zA5Ea7+KK53NEaF6JS3McEZqLYOpZ0PSvAOJGKPsJFD8H4kcgGsq/TJUMBABfU4nUIZMyzQAAAABJRU5ErkJggg=='
		},{
			'title':'画静态线','sTitle':'取消画线','value':'staticLine','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAu0lEQVR4Ac3MoQrCYBhG4QUFm0sKljWD2MQqVq/AaJUFgzdhsNpkQRDEbBJhRcSmCM4LELNgcTpQPeEPQ96ZN3hg3w7vrPQ87vFTxRR2Qm9hlDTe4govoZ8wV8FBhDbuolfwQEmNfSzN+w3uT1/BV8MiIjjm9nCO9bzpZTVeYBO7C3ijbu4JDmpoq79yB1gjixBNNZ5hJ7538MIQFzXM4Ykap+qh6V0VxwjMqfoeETIqDtD4M+6hb6Xq+QJq9rw22/ol4AAAAABJRU5ErkJggg=='
		}];
		// var parentE = document.createElement('div');
		var drawCom = drawComp.createLogo(jsonDatas,logoList,backEvent);
		// var colorChange = colorComp.init();
		// parentE.appendChild(drawCom);
		// parentE.appendChild(colorChange);
		return drawComp.createLogo(jsonDatas,logoList,backEvent);
	},
	createLogo:function(jsonDatas,logoList,backEvent){
		var parentE = document.createElement('div');
		var divE = document.createElement('div');
		divE.setAttribute('class','toolBar');
		var ulE = document.createElement('ul');
		var tempUl = document.createDocumentFragment();
		for(var lKey in logoList){
			var lName = logoList[lKey];
			for(var key in jsonDatas){
				var tempDa = jsonDatas[key];
				if(tempDa.value === lName){
					var liE = document.createElement('li');
					liE.setAttribute('title',tempDa.title);
					liE.setAttribute('value',tempDa.value);
					liE.setAttribute('unSelectTitle',tempDa.title);
					liE.setAttribute('selectTitle',tempDa.sTitle);
					liE.setAttribute('status','');
					var liDivE = document.createElement('div');
					var liImgE = document.createElement('img');
					liImgE.setAttribute('src',tempDa.logo);
					liDivE.appendChild(liImgE);
					liE.appendChild(liDivE);
					tempUl.appendChild(liE);
				}
			}
		}
		ulE.appendChild(tempUl);
		ulE.onclick = function(rDatas){
			rDatas = T(rDatas).getEventTarget();
			var tempNodeName = rDatas.nodeName;
			var parentLi = null;
			if(tempNodeName === 'IMG'){
				parentLi = rDatas.parentNode.parentNode;
			}else if(tempNodeName === 'DIV'){
				parentLi = rDatas.parentNode;
			}else if(tempNodeName === 'LI'){
				parentLi = rDatas;
			}
			
			var allLi = this.childNodes;
			for(var key in allLi){
				var tempLi = allLi[key];
				if(tempLi.nodeName === 'LI' && (allLi[key].getAttribute('value')!==parentLi.getAttribute('value'))){
					var tempAttr = (allLi[key]).getAttribute('status');
					if(tempAttr !== ''){
						allLi[key].setAttribute('status','');
						allLi[key].style.background = '';
					}
				}
			}
			
			var status = '';
			var backLogo = '';
			var showTitle = parentLi.getAttribute('unSelectTitle');
			var logoValue = parentLi.getAttribute('value');
			if(parentLi.getAttribute('status') === '' && logoValue !=='undo' && logoValue !=='add' && logoValue !=='delete' && logoValue !=='save'){
				status = 'selected';
				backLogo = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAJ0lEQVR4AWNQN7D/TyvMACZoAEYNHzV81HAKwajho4aPGj5qOK0wAFbmizmDuR5+AAAAAElFTkSuQmCC) no-repeat 2px 3px';
				showTitle = parentLi.getAttribute('selectTitle');
			}
			parentLi.setAttribute('status',status);
			parentLi.setAttribute('title',showTitle);
			parentLi.style.background = backLogo;
			var bJson = {};
			bJson.status = status === '' ? 'unselected' : 'selected';
			bJson.value = parentLi.getAttribute('value');
			if(backEvent){
				return backEvent(bJson);
			}
			
		};
		divE.appendChild(ulE);
		return divE;
	}
};