var colorComp = {
	init : function(backEvent){
		// var resultJson = {};
		colorComp.resultJson = {};
		var parentE = document.createElement('div');
		var styleDiv = document.createElement('div');
		styleDiv.setAttribute('class','styleChange');
		
		var sizeDiv = document.createElement('div');
		sizeDiv.setAttribute('class','sizeSelect');
		
		var sizeJson = {"defaultCheck":"1","list":[{
			"value":"1",
			"top":"0",
			"logo":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAJ0lEQVR4AWMYDGAUsFWdbwXizyCaHM0/gfg/yABybf4CsXngwSgAAFoCEq7RbnUNAAAAAElFTkSuQmCC"
		},{
			"value":"3",
			"top":"0",
			"logo":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAMElEQVR4AWMYDGAUsFWd9wTiZ1DsSZJmqKb/UPyMEs3PSdXsBdIExE9AbCqExCgAAChRIUNxN8UfAAAAAElFTkSuQmCC"
		},{
			"value":"5",
			"top":"0",
			"logo":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAQ0lEQVR4AWOAgFHAVnU+DIivAPFPKB1GrMYQIP6PjokyAGQTDs1XiNH8E4fmnzS3ORSH5nBiAy0ciK8B8S8QjdA4CgAnWmEE6X3rEwAAAABJRU5ErkJggg=="
		}]};
		colorComp.resultJson.size = sizeJson.defaultCheck;
		var sizeUl = colorComp.createSizeLogo(sizeJson);
		sizeUl.onclick = function(sDatas){
			sDatas = T(sDatas).getEventTarget();
			var tempNodeName = sDatas.nodeName;
			var parentLi = null;
			if(tempNodeName === 'IMG'){
				parentLi = sDatas.parentNode.parentNode;
			}else if(tempNodeName === 'DIV'){
				parentLi = sDatas.parentNode;
			}else if(tempNodeName === 'LI'){
				parentLi = sDatas;
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
			if(parentLi.getAttribute('status') === ''){
				status = 'selected';
				backLogo = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAd0lEQVR4AWMAgZ6uLg0gngjEb4H4PwX4HdQcDZjB6kD8E4jzgFiIgQIA1C8IMgdqnjxIYAIQ56MrpNCSciDuYIAGhRCVDRcCmQti/GegPgCbO2o4Mhg1fNTwUcNHDadpeU6rmqgMiDvR61BBKtahCui1/ztq1v4AmPX5xpLTW40AAAAASUVORK5CYII=) no-repeat 2px 3px';
			}
			parentLi.setAttribute('status',status);
			parentLi.style.background = backLogo;
			// var bJson = {};
			// bJson.status = status === '' ? 'unselected' : 'selected';
			// bJson.value = parentLi.getAttribute('value');
			colorComp.resultJson.size = parentLi.getAttribute('value');
			if(backEvent){
				return backEvent(colorComp.resultJson);
			}
			// console.info(bJson);
		};
		sizeDiv.appendChild(sizeUl);
		styleDiv.appendChild(sizeDiv);
		
		var colorListDiv = document.createElement('div');//父级
		colorListDiv.setAttribute('class','colorList');
		
		var bigCDiv = document.createElement('div');
		bigCDiv.setAttribute('class','bigColor');
		bigCDiv.style.backgroundColor = '#ed3f2b';
		colorComp.resultJson.color = '#ed3f2b';
		var bigConDiv = document.createElement('div');
		bigCDiv.appendChild(bigConDiv);
		
		colorListDiv.appendChild(bigCDiv);
		
		var colorJson = {"up":['000000','6f706b','6f180e','f28837','266d28','0e37b8','6d0b62','13807f'],
						"down":['ffffff','b3b5ae','ed3f2b','ebde37','96c130','0a78c8','d523c8','1ac1ca']};
		var colorSelectDiv = document.createElement('div');
		colorSelectDiv.setAttribute('class','colorSelect');
		for(var uKey in colorJson){
			var tempUl = document.createElement('ul');
			var tempCDatas = colorJson[uKey];
			for(var lKey in tempCDatas){
				var lDLi = document.createElement('li');
				var lDiv = document.createElement('div');
				lDiv.style.backgroundColor = '#'+tempCDatas[lKey];
				lDiv.style.cursor = 'pointer';
				lDiv.setAttribute('value','#'+tempCDatas[lKey]);
				lDLi.appendChild(lDiv);
				tempUl.appendChild(lDLi);
			}
			colorSelectDiv.appendChild(tempUl);
		}
		
		colorSelectDiv.onclick = function(crDatas){
			crDatas = T(crDatas).getEventTarget();
			if(crDatas.nodeName === 'DIV'){
				var colorValue = crDatas.getAttribute('value');
				bigCDiv.style.backgroundColor = colorValue;
				colorComp.resultJson.color = colorValue;
				if(backEvent){
					return backEvent(colorComp.resultJson);
				}
			}
		};
		colorListDiv.appendChild(colorSelectDiv);
		styleDiv.appendChild(colorListDiv);
		parentE.appendChild(styleDiv);
		return parentE;
	},
	createSizeLogo : function(sizeJson){
		var sizeUl = document.createElement('ul');
		var uDatas = sizeJson.list;
		for(var key in uDatas){
			var tempDatas = uDatas[key];
			var sizeOLi = document.createElement('li');
			var oLiDiv = document.createElement('div');
			var oLiImg = document.createElement('img');
			oLiImg.setAttribute('src',tempDatas.logo);
			sizeOLi.style.marginTop = tempDatas.top+'px';
			sizeOLi.style.cursor = 'pointer';
			sizeOLi.setAttribute('value',tempDatas.value);
			sizeOLi.setAttribute('status','');
			if(tempDatas.value === sizeJson.defaultCheck){
				sizeOLi.setAttribute('status','selected');
				sizeOLi.style.background = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAd0lEQVR4AWMAgZ6uLg0gngjEb4H4PwX4HdQcDZjB6kD8E4jzgFiIgQIA1C8IMgdqnjxIYAIQ56MrpNCSciDuYIAGhRCVDRcCmQti/GegPgCbO2o4Mhg1fNTwUcNHDadpeU6rmqgMiDvR61BBKtahCui1/ztq1v4AmPX5xpLTW40AAAAASUVORK5CYII=) no-repeat 2px 3px';
			}
			oLiDiv.appendChild(oLiImg);
			sizeOLi.appendChild(oLiDiv);
			sizeUl.appendChild(sizeOLi);
		}
		return sizeUl;
	},
	getResultJson : function(){
		return colorComp.resultJson;
	}
};