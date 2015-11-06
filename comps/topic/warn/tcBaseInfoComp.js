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
				'dateTime':'20150101010000'
			}]
		};
		var tempDatas = templateJson.datas[0];
		
		var parentE = document.createElement('div');
		T(parentE).setClass('animated bounceInRight TyphoonInfo');
		
		var tBoxDiv = document.createElement('div');
		T(tBoxDiv).setClass('TyphoonInfo-box');
		parentE.appendChild(tBoxDiv);
		
		var tBoxDivCloseA = document.createElement('a');//关闭按钮
		T(tBoxDivCloseA).setClass('TyphoonInfoClose');
		tBoxDiv.appendChild(tBoxDivCloseA);
		
		var tBoxDivTitle = document.createElement('div');//台风名称
		var tBoxDivTitleLabel = document.createElement('label');
		var tBoxDivTitleA = document.createElement('a');
		
		var tBoxList = document.createElement('div');
		var tBoxListP1 = document.createElement('p');
		var tBoxListPLabel1 = document.createElement('label');
		var tBoxListPA1 = document.createElement('a');
		var tBoxListPLabel2 = document.createElement('label');
		
		var tBoxListP2 = document.createElement('p');
		var tBoxListPLabel2 = document.createElement('label');
		var tBoxListPA2 = document.createElement('a');
		
		var tBoxInfoList = document.createElement('div');
		var tBoxInfoListP1 = document.createElement('p');
		var tBoxInfoListP1Label = document.createElement('label');
		var tBoxInfoListP1Span = document.createElement('span');
		var tBoxInfoListP2 = document.createElement('p');
		var tBoxInfoListP2Label = document.createElement('label');
		var tBoxInfoListP2Span = document.createElement('span');
		var tBoxInfoListP3 = document.createElement('p');
		var tBoxInfoListP3Label = document.createElement('label');
		var tBoxInfoListP3Span = document.createElement('span');
		var tBoxInfoListP4 = document.createElement('p');
		var tBoxInfoListP41Label = document.createElement('label');
		var tBoxInfoListP4Span = document.createElement('span');
		
		var effectList = document.createElement('div');
		var effectListP = document.createElement('p');
		var effectListUl = document.createElement('ul');
		var tempEle = document.createDocumentFragment();
		for(var key in tempDatas.FstEffectArea){
			var cuData = tempDatas.FstEffectArea[key];
			var eLi = document.createElement('li');
			eLi.setAttribute('areaCode',cuData.areaCode);
			eLi.setAttribute('areaName',cuData.areaName);
			tempEle.appendChild(eLi);
		}
		effectListUl.appendChild(tempEle);
		var tfBtn = document.createElement('div');
		var tfBtnA1 = document.createElement('a');
		var tfBtnA2 = document.createElement('a');
		
		var tcRain = document.createElement('div');
		var tcRainP = document.createElement('p');
		tcRain.appendChild(tcRainP);
		var tcRainLabel = document.createElement('label');
		var tcRainA = document.createElement('a');
		return parentE;
	}
};