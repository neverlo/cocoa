/**
 * 沙盘模拟组件
 */
var modelComp = {
	init : function(templateJson){
		var tempDatas = templateJson.datas;
		var recordData = tempDatas[0];
		if(typeof(modelComp.parentE) !== 'undefined'){
			if(modelComp.parentE[recordData.blTownCode]){
				T(modelComp.parentE[recordData.blTownCode]).remove();
				delete modelComp.parentE[recordData.blTownCode];
			}
		}
			
		var parentE = document.createElement('div');
		T(parentE).setClass('animated bounceInLeft LsBox');
		
		var closeA = document.createElement('a');
		T(closeA).setClass('LsBoxClose');
		closeA.setAttribute('areaCode',recordData.blTownCode);
		parentE.appendChild(closeA);
		closeA.onclick = function(){
			var codeKey = closeA.getAttribute('areaCode');
			T(modelComp.parentE[codeKey]).remove();
			delete modelComp.parentE[codeKey];
		};
			
		var titleDiv = document.createElement('div');
		T(titleDiv).setClass('LsBox-tl');
		var titleSpan = document.createElement('span');
		titleSpan.innerHTML = '沙盘模拟';
		titleDiv.appendChild(titleSpan);
		parentE.appendChild(titleDiv);
		
		var titleUl = document.createElement('ul');
		T(titleUl).setClass('simulation-list');
		parentE.appendChild(titleUl);
		
		for(var key in tempDatas){
			var parentLi = document.createElement('li');
			T(parentLi).setClass('sl-0');
			titleUl.appendChild(parentLi);
			
			var effectDiv = document.createElement('div');
			T(effectDiv).setClass('simulation-tl');
			parentLi.appendChild(effectDiv);
			var nameSpan = document.createElement('span');
			effectDiv.appendChild(nameSpan);
			
			var label1 = document.createElement('label');
			label1.innerHTML = tempDatas[key].name;
			var label2 = document.createElement('label');
			label2.innerHTML = '影响地区';
			nameSpan.appendChild(label1);
			nameSpan.appendChild(label2);
			
			var cancelA = document.createElement('a');
			T(cancelA).setClass('simulation-btn');
			cancelA.innerHTML = '取消';
			effectDiv.appendChild(cancelA);
			//影响市县
			
			var effectUl = document.createElement('ul');
			T(effectUl).setClass('simulation-town');
			parentLi.appendChild(effectUl);
			
			var effectUlLi = document.createElement('li');
			T(effectUlLi).setClass('simulation-town-left');
			effectUl.appendChild(effectUlLi);
			
			var effectConUl = document.createElement('ul');
			effectUlLi.appendChild(effectConUl);
			
			var areaList = tempDatas[key].effectArea;
			var tempEle = document.createDocumentFragment();
			for(var aKey in areaList){
				var tempInfo = areaList[aKey];
				var eLi = document.createElement('li');
				eLi.setAttribute('areaCode',tempInfo.areaCode);
				eLi.setAttribute('areaName',tempInfo.areaName);
				var eLiSpan = document.createElement('span');
				eLiSpan.innerHTML = tempInfo.areaName;
				eLi.appendChild(eLiSpan);
				tempEle.appendChild(eLi);
			}
			effectConUl.appendChild(tempEle);
			
			var buttonLi = document.createElement('li');
			T(buttonLi).setClass('simulation-town-right');
			effectUl.appendChild(buttonLi);
			var buttonLiA1 = document.createElement('a');
			buttonLi.appendChild(buttonLiA1);
			var alabel1 = document.createElement('label');
			alabel1.innerHTML = '靶向';
			buttonLiA1.appendChild(alabel1);
			var br1 = document.createElement('br');
			buttonLiA1.appendChild(br1);
			var alabel2 = document.createElement('label');
			alabel2.innerHTML = '发布';
			buttonLiA1.appendChild(alabel2);
			
			var buttonLiA2 = document.createElement('a');
			buttonLi.appendChild(buttonLiA2);
			var alabel21 = document.createElement('label');
			alabel21.innerHTML = '调用';
			buttonLiA2.appendChild(alabel21);
			var br2 = document.createElement('br');
			buttonLiA2.appendChild(br2);
			var alabel22 = document.createElement('label');
			alabel22.innerHTML = '发布';
			buttonLiA2.appendChild(alabel22);
		}
		this.parentE = T(this.parentE).compRecord(recordData.blTownCode,parentE);
		return parentE;
	}
};