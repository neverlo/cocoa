/**
 * 预警信号组件
 */
var earlyComp = {
	init : function(templateJson){
		var tempDatas = templateJson.datas[0];
		if(typeof(earlyComp.parentE) !== 'undefined'){
			if(earlyComp.parentE[tempDatas.blTownCode]){
				T(earlyComp.parentE[tempDatas.blTownCode]).remove();
				delete earlyComp.parentE[tempDatas.blTownCode];
			}
		}
		var parentE = document.createElement('div');
		parentE.setAttribute('class','animated bounceInLeft LsBox');
		
		var lsBoxA = document.createElement('a');
		lsBoxA.setAttribute('class','LsBoxClose');
		lsBoxA.setAttribute('areaCode',tempDatas.blTownCode);
		parentE.appendChild(lsBoxA);
		lsBoxA.onclick = function(){
			var codeKey = lsBoxA.getAttribute('areaCode');
			T(earlyComp.parentE[codeKey]).remove();
			delete earlyComp.parentE[codeKey];
		};
			
		var lsBoxUl = document.createElement('ul');
		lsBoxUl.setAttribute('class','LsBox-con');
		parentE.appendChild(lsBoxUl);
		
		var lsBoxUlLiImg = document.createElement('li');
		lsBoxUlLiImg.setAttribute('class','LsBox-left warn-color');
		lsBoxUl.appendChild(lsBoxUlLiImg);
		
		var lsBoxUlLiImgA = document.createElement('a');
		lsBoxUlLiImgA.setAttribute('class','warn-icon');
		lsBoxUlLiImg.appendChild(lsBoxUlLiImgA);
		var lsBoxUlLiLogo = document.createElement('img');
		lsBoxUlLiLogo.setAttribute('src','<%=basePath%>/resources/img/trunk/warningIcon/small/by4.png');
		lsBoxUlLiImg.appendChild(lsBoxUlLiLogo);
		
		var lsBoxUlLiText = document.createElement('li');
		lsBoxUlLiText.setAttribute('class','LsBox-right');
		lsBoxUl.appendChild(lsBoxUlLiText);
		
		var rTestP1 = document.createElement('p');
		rTestP1.setAttribute('class','LsBox-warn-title');
		lsBoxUlLiText.appendChild(rTestP1);
		var rTestp1Label = document.createElement('label');
		rTestp1Label.innerHTML = tempDatas.name;
		rTestP1.appendChild(rTestp1Label);
		var rTestp1Span = document.createElement('span');
		rTestp1Span.innerHTML = tempDatas.warnTitle;
		rTestP1.appendChild(rTestp1Span);
		var rTestP2 = document.createElement('p');
		rTestP2.setAttribute('class','LsBox-warn-time');
		lsBoxUlLiText.appendChild(rTestP2);
		rTestP2.innerHTML = '发布时间：'+tempDatas.dateTime;
		this.parentE = T(this.parentE).compRecord(tempDatas.blTownCode,parentE);
		return parentE;
	}
};