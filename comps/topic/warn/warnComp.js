/**
 * 专题告警组件
 */
var warnComp = {
		init : function(templateJson,callBack){
			var tempDatas = templateJson.datas[0];
			
			var parentE = document.createElement('div');
			
			if(typeof(warnComp.parentE) !== 'undefined'){
				if(warnComp.parentE[tempDatas.blTownCode]){
					T(warnComp.parentE[tempDatas.blTownCode]).remove();
					delete warnComp.parentE[tempDatas.blTownCode];
					T(parentE).setClass('animated bounceIn LsBox');
				}else{
					T(parentE).setClass('animated bounceInLeft LsBox');
				}
			}else{
				T(parentE).setClass('animated bounceInLeft LsBox');
			}
			
			var closeA = document.createElement('a');
			closeA.setAttribute('class','LsBoxClose');
			closeA.setAttribute('areaCode',tempDatas.blTownCode);
			parentE.appendChild(closeA);
			closeA.onclick = function(){
				var codeKey = closeA.getAttribute('areaCode');
				T(warnComp.parentE[codeKey]).remove();
				delete warnComp.parentE[codeKey];
			};
			
			var ulBox = document.createElement('ul');
			ulBox.setAttribute('class','LsBox-con');
			parentE.appendChild(ulBox);
			var ulBoxLiL = document.createElement('li');
			ulBox.appendChild(ulBoxLiL);
			ulBoxLiL.setAttribute('class','LsBox-left');
			
			var ulBoxA = document.createElement('a');
			ulBoxA.setAttribute('lon',tempDatas.lon);
			ulBoxLiL.appendChild(ulBoxA);
			ulBoxA.setAttribute('class','warn-icon');
			var ulBoxAImg = document.createElement('img');
			ulBoxAImg.setAttribute('src','<%=basePath%>/resources/img/trunk/now-inform-0.png');
			var ulBoxSpan = document.createElement('span');
			ulBoxSpan.innerHTML = '定位';
			ulBoxA.appendChild(ulBoxAImg);
			ulBoxA.appendChild(ulBoxSpan);
			if(callBack){
				ulBoxA.onclick = function(){
					var uObj = {};
					uObj.name = templateJson.name;
					uObj.id = tempDatas.id;
					uObj.areaCode = tempDatas.blTownCode;
					uObj.lon = tempDatas.lon;
					uObj.lat = tempDatas.lat;
					return callBack(uObj);
				};
			}
			
			var ulBoxDiv = document.createElement('div');
			ulBoxLiL.appendChild(ulBoxDiv);
			ulBoxDiv.setAttribute('class','dis-warn');
			var ulBoxDivP = document.createElement('p');
			var ulBoxDivSpan = document.createElement('span');
			ulBoxDivSpan.innerHTML = tempDatas.warnTitle;
			ulBoxDivP.appendChild(ulBoxDivSpan);
			ulBoxDiv.appendChild(ulBoxDivP);
			
			var ulBoxLiR = document.createElement('li');
			ulBox.appendChild(ulBoxLiR);
			ulBoxLiR.setAttribute('class','LsBox-right');
			var ulBoxLiRP = document.createElement('p');
			ulBoxLiR.appendChild(ulBoxLiRP);
			ulBoxLiRP.setAttribute('class','LsBox-warn-title dis-warn-title');
			var ulBoxLiRPSpan = document.createElement('span');
			ulBoxLiRP.appendChild(ulBoxLiRPSpan);
			ulBoxLiRPSpan.innerHTML = tempDatas.name;
			var ulBoxLiRPLabel = document.createElement('label');
			ulBoxLiRP.appendChild(ulBoxLiRPLabel);
			
			var ulBoxLiRDiv = document.createElement('div');
			ulBoxLiR.appendChild(ulBoxLiRDiv); 
			ulBoxLiRDiv.setAttribute('class','dis-level rain-lg');
			var ulBoxLiRDivSpan = document.createElement('span');
			ulBoxLiRDiv.appendChild(ulBoxLiRDivSpan); 
			ulBoxLiRDivSpan.innerHTML = '阈值:';
			
			var ulBoxLiRDivColor = document.createElement('div');
			ulBoxLiRDiv.appendChild(ulBoxLiRDivColor); 
			ulBoxLiRDivColor.setAttribute('class','dis-level-color');
			var ulBoxLiRDivY = document.createElement('div');
			ulBoxLiRDivColor.appendChild(ulBoxLiRDivY); 
			ulBoxLiRDivY.setAttribute('class','level-now yellow');
			ulBoxLiRDivY.style.left = '-10px';
			var ulBoxLiRDivYSp = document.createElement('span');
			ulBoxLiRDivY.appendChild(ulBoxLiRDivYSp); 
			ulBoxLiRDivYSp.innerHTML = tempDatas.currentValue;
			var ulBoxLiRDivYA = document.createElement('a');
			ulBoxLiRDivY.appendChild(ulBoxLiRDivYA); 
			
			var ulBoxLiRDivUl = document.createElement('ul');
			ulBoxLiRDivColor.appendChild(ulBoxLiRDivUl);
			var uli1 = document.createElement('li'); 
			uli1.setAttribute('class','level-0');
			var ulilabel1 = document.createElement('label');
			uli1.appendChild(ulilabel1);
			ulilabel1.innerHTML = '50';
			var uli2 = document.createElement('li'); 
			uli2.setAttribute('class','level-1');
			var ulilabel2 = document.createElement('label');
			uli2.appendChild(ulilabel2);
			ulilabel2.innerHTML = '300';
			var uli3 = document.createElement('li'); 
			uli3.setAttribute('class','level-2');
			ulBoxLiRDivUl.appendChild(uli1);
			ulBoxLiRDivUl.appendChild(uli2);
			ulBoxLiRDivUl.appendChild(uli3);
			
			var ulBoxLiRDivSpanU = document.createElement('span');
			ulBoxLiRDiv.appendChild(ulBoxLiRDivSpanU); 
			ulBoxLiRDivSpanU.innerHTML = tempDatas.unit;
			
			var buttonDiv = document.createElement('div');
			ulBoxLiR.appendChild(buttonDiv);
			buttonDiv.setAttribute('class','lg-data lga-color');
			var buttonDivMoreA = document.createElement('A');
			buttonDiv.appendChild(buttonDivMoreA);
			buttonDivMoreA.innerHTML = '详情';
			var buttonDivSendA = document.createElement('A');
			buttonDiv.appendChild(buttonDivSendA);
			buttonDivSendA.innerHTML = '发布';
			this.parentE = T(this.parentE).compRecord(tempDatas.blTownCode,parentE);
			return parentE;
		}
};