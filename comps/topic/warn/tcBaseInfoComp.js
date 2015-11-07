/**
 * 台风基本信息组件
 */
var tcBaseInfoComp = {
	init : function(){
		var templateJson = {
			'name':'tc',
			'alive':true,
			'datas':[{
				'name':'彩虹',//台风名称
				'arriveTime':'2个小时',//到达时间
				'distance':'293km',//距离
				'windSpeed':'32m/s',//中心风力 m/s
				'windPressure':'580pa',//中心风压
				'Location':'120,23',//中心经纬度
				'windPower':'10级',//风力 10级
				'FstEffectArea':[{"areaName":"阳西县","areaCode":"441701"},{"areaName":"阳西县","areaCode":"441701"}],
				'avgRain':'30',//平均雨量
				'maxRain':'150',//最高雨量
				'beTownName':'那龙镇',//站点所属镇名称
				'blTownCode':'441703002',//站点所属镇编码
				'dateTime':'20150101010000'
			}]
		};
		var tempDatas = templateJson.datas[0];
		
		var parentE = document.createElement('div');
		if(typeof(tcBaseInfoComp.parentE) !== 'undefined'){
			if(tcBaseInfoComp.parentE[tempDatas.blTownCode]){
				T(tcBaseInfoComp.parentE[tempDatas.blTownCode]).remove();
				delete tcBaseInfoComp.parentE[tempDatas.blTownCode];
				T(parentE).setClass('TyphoonInfo');
			}else{
				T(parentE).setClass('animated bounceInRight TyphoonInfo');
			}
		}else{
			T(parentE).setClass('animated bounceInRight TyphoonInfo');
		}
		
		var tBoxDiv = document.createElement('div');
		T(tBoxDiv).setClass('TyphoonInfo-box');
		parentE.appendChild(tBoxDiv);
		
		var tBoxDivCloseA = document.createElement('a');//关闭按钮
		T(tBoxDivCloseA).setClass('TyphoonInfoClose');
		tBoxDivCloseA.setAttribute('areaCode',tempDatas.blTownCode);
		tBoxDiv.appendChild(tBoxDivCloseA);
		tBoxDivCloseA.onclick = function(){
			var codeKey = tBoxDivCloseA.getAttribute('areaCode');
			T(tcBaseInfoComp.parentE[codeKey]).remove();
			delete tcBaseInfoComp.parentE[codeKey];
		};
		
		var tBoxDivTitle = document.createElement('div');//台风名称
		T(tBoxDivTitle).setClass('TyphoonInfo-title TyphoonInfo-p');
		tBoxDiv.appendChild(tBoxDivTitle);
		var tBoxDivTitleLabel = document.createElement('label');
		tBoxDivTitleLabel.innerHTML = '台风：';
		tBoxDivTitle.appendChild(tBoxDivTitleLabel);
		var tBoxDivTitleA = document.createElement('a');
		tBoxDivTitleA.innerHTML = '彩虹';
		tBoxDivTitle.appendChild(tBoxDivTitleA);
		
		var tBoxList = document.createElement('div');
		T(tBoxList).setClass('TyphoonInfo-list');
		tBoxDiv.appendChild(tBoxList);
		var tBoxListP1 = document.createElement('p');
		T(tBoxListP1).setClass('TyphoonInfo-p');
		tBoxList.appendChild(tBoxListP1);
		var tBoxListPLabel1 = document.createElement('label');
		tBoxListP1.appendChild(tBoxListPLabel1);
		tBoxListPLabel1.innerHTML = '预计';
		var tBoxListPA1 = document.createElement('a');
		tBoxListP1.appendChild(tBoxListPA1);
		tBoxListPA1.innerHTML = '2小时';
		var tBoxListPLabel2 = document.createElement('label');
		tBoxListP1.appendChild(tBoxListPLabel2);
		tBoxListPLabel2.innerHTML = '后到达我市';
		
		var tBoxListP2 = document.createElement('p');
		T(tBoxListP2).setClass('TyphoonInfo-p');
		tBoxList.appendChild(tBoxListP2);
		var tBoxListPLabel3 = document.createElement('label');
		tBoxListPLabel3.innerHTML = '距离我市：';
		tBoxListP2.appendChild(tBoxListPLabel3);
		var tBoxListPA2 = document.createElement('a');
		tBoxListPA2.innerHTML = '235km';
		tBoxListP2.appendChild(tBoxListPA2);
		
		var tBoxInfoList = document.createElement('div');
		T(tBoxInfoList).setClass('TyphoonInfo-list');
		tBoxDiv.appendChild(tBoxInfoList);
		var tBoxInfoListP1 = document.createElement('p');
		T(tBoxInfoListP1).setClass('TyphoonInfo-p TyphoonInfo-p-1');
		tBoxInfoList.appendChild(tBoxInfoListP1);
		var tBoxInfoListP1Label = document.createElement('label');
		tBoxInfoListP1.appendChild(tBoxInfoListP1Label);
		tBoxInfoListP1Label.innerHTML = '中心风力：';
		var tBoxInfoListP1Span = document.createElement('span');
		tBoxInfoListP1.appendChild(tBoxInfoListP1Span);
		tBoxInfoListP1Span.innerHTML = '32m/s';
		
		var tBoxInfoListP2 = document.createElement('p');
		T(tBoxInfoListP2).setClass('TyphoonInfo-p TyphoonInfo-p-1');
		tBoxInfoList.appendChild(tBoxInfoListP2);
		var tBoxInfoListP2Label = document.createElement('label');
		tBoxInfoListP2.appendChild(tBoxInfoListP2Label);
		tBoxInfoListP2Label.innerHTML = '中心气压：';
		var tBoxInfoListP2Span = document.createElement('span');
		tBoxInfoListP2.appendChild(tBoxInfoListP2Span);
		tBoxInfoListP2Span.innerHTML = '980pa';
		
		var tBoxInfoListP3 = document.createElement('p');
		T(tBoxInfoListP3).setClass('TyphoonInfo-p TyphoonInfo-p-1');
		tBoxInfoList.appendChild(tBoxInfoListP3);
		var tBoxInfoListP3Label = document.createElement('label');
		tBoxInfoListP3.appendChild(tBoxInfoListP3Label);
		tBoxInfoListP3Label.innerHTML = '中心位置：';
		var tBoxInfoListP3Span = document.createElement('span');
		tBoxInfoListP3.appendChild(tBoxInfoListP3Span);
		tBoxInfoListP3Span.innerHTML = '154.9,29.5';
		
		var tBoxInfoListP4 = document.createElement('p');
		T(tBoxInfoListP4).setClass('TyphoonInfo-p TyphoonInfo-p-1');
		tBoxInfoList.appendChild(tBoxInfoListP4);
		var tBoxInfoListP41Label = document.createElement('label');
		tBoxInfoListP4.appendChild(tBoxInfoListP41Label);
		tBoxInfoListP41Label.innerHTML = '最大风力：';
		var tBoxInfoListP4Span = document.createElement('span');
		tBoxInfoListP4.appendChild(tBoxInfoListP4Span);
		tBoxInfoListP4Span.innerHTML = '10级';
		
		var effectList = document.createElement('div');
		T(effectList).setClass('TyphoonInfo-list');
		effectList.style.paddingBottom = '0px';
		tBoxDiv.appendChild(effectList);
		var effectListP = document.createElement('p');
		T(effectListP).setClass('TyphoonInfo-p');
		effectListP.innerHTML = '预计24小时可能影响';
		effectList.appendChild(effectListP);
		var effectListUl = document.createElement('ul');
		effectList.appendChild(effectListUl);
		var tempEle = document.createDocumentFragment();
		for(var key in tempDatas.FstEffectArea){
			var cuData = tempDatas.FstEffectArea[key];
			var eLi = document.createElement('li');
			eLi.setAttribute('areaCode',cuData.areaCode);
			eLi.setAttribute('areaName',cuData.areaName);
			eLi.innerHTML = cuData.areaName;
			tempEle.appendChild(eLi);
		}
		effectListUl.appendChild(tempEle);
		
		var tfBtn = document.createElement('div');
		T(tfBtn).setClass('TyphoonInfo-btn');
		effectList.appendChild(tfBtn);
		var tfBtnA1 = document.createElement('a');
		tfBtnA1.innerHTML = '详情';
		tfBtn.appendChild(tfBtnA1);
		var tfBtnA2 = document.createElement('a');
		tfBtnA2.innerHTML = '发布';
		tfBtn.appendChild(tfBtnA2);
		
		var tcRain = document.createElement('div');
		T(tfBtn).setClass('TyphoonInfo-list');
		tBoxDiv.appendChild(tcRain);
		var tcRainP = document.createElement('p');
		T(tcRainP).setClass('TyphoonInfo-p');
		tcRain.appendChild(tcRainP);
		var tcRainLabel = document.createElement('label');
		tcRainLabel.innerHTML = '我市平均降雨：';
		tcRainP.appendChild(tcRainLabel);
		var tcRainA = document.createElement('a');
		tcRainA.innerHTML = '235mm';
		tcRainP.appendChild(tcRainA);
		this.parentE = T(this.parentE).compRecord(tempDatas.blTownCode,parentE);
		return parentE;
	}
};