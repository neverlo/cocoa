var colorComp = {
	init : function(){
		var parentE = document.createElement('div');
		var styleDiv = document.createElement('div');
		styleDiv.setAttribute('class','styleChange');
		
		var sizeDiv = document.createElement('div');
		sizeDiv.setAttribute('class','sizeSelect');
		
		var sizeJson = [{
			"top":"8",
			"logo":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAHUlEQVR4AWNgqzrfCsSfQTSI8xOI/4MEYDJfQDQAYOgSrnnXsTEAAAAASUVORK5CYII="
		},{
			"top":"8",
			"logo":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAJUlEQVR42mNgqzrvCcTPoNiTAcr4D8XP0AWegwS8QAwgfgJiAwBWjyFDK4AINwAAAABJRU5ErkJggg=="
		},{
			"top":"6",
			"logo":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAPUlEQVR4AWMAAbaq82FAfAWIf0LpMJhECBD/R8dgBSCVOCSvgCR/4pD8SVBnKA7JcJijwoH4GhD/AtEwCQA3nWEED/iRXQAAAABJRU5ErkJggg=="
		}];
		var sizeUl = colorComp.createSizeLogo(sizeJson);
		sizeDiv.appendChild(sizeUl);
		styleDiv.appendChild(sizeDiv);
		
		var colorListDiv = document.createElement('div');//父级
		colorListDiv.setAttribute('class','colorList');
		
		var bigCDiv = document.createElement('div');
		bigCDiv.setAttribute('class','bigColor');
		var bigConDiv = document.createElement('div');
		bigCDiv.appendChild(bigConDiv);
		
		colorListDiv.appendChild(bigCDiv);
		
		var colorJson = {"up":['000000','6f706b','6f180e','f28837','266d28','0e37b8','6d0b62','13807f'],
						"down":['ffffff','b3b5ae','ed3f2b','968c0b','96c130','0a78c8','d523c8','1ac1ca']};
		var colorSelectDiv = document.createElement('div');
		colorSelectDiv.setAttribute('class','colorSelect');
		for(var uKey in colorJson){
			var tempUl = document.createElement('ul');
			var tempCDatas = colorJson[uKey];
			for(var lKey in tempCDatas){
				var lDLi = document.createElement('li');
				var lDiv = document.createElement('div');
				lDiv.style.backgroundColor = '#'+tempCDatas[lKey];
				lDLi.appendChild(lDiv);
				tempUl.appendChild(lDLi);
			}
			colorSelectDiv.appendChild(tempUl);
		}
		colorListDiv.appendChild(colorSelectDiv);
		styleDiv.appendChild(colorListDiv);
		parentE.appendChild(styleDiv);
		return parentE;
	},
	createSizeLogo : function(sizeJson){
		var sizeUl = document.createElement('ul');
		for(var key in sizeJson){
			var sizeOLi = document.createElement('li');
			var oLiDiv = document.createElement('div');
			var oLiImg = document.createElement('img');
			oLiImg.setAttribute('src',sizeJson[key].logo);
			sizeOLi.style.marginTop = sizeJson[key].top+'px';
			oLiDiv.appendChild(oLiImg);
			sizeOLi.appendChild(oLiDiv);
			sizeUl.appendChild(sizeOLi);
		}
		return sizeUl;
	}
};