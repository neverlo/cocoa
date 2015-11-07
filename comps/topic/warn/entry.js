var topicWarn = {
	init : function(){
		var parentE = document.createElement('div');
		(document.body).appendChild(parentE);
		var templateJson = {
			'name':'earlyWarningSignal',
			'alive':true,
			'datas':[{
				'imgUrl':'a.png',
				'warnTitle':'橙色雨量告警',
				'name':'阳江市阳西县',
				'beTownName':'阳江市',
				'blTownCode':'441701',
				'dateTime':'2015-01-01 01:00'
			}]
		};
		var earlyWarn = earlyComp.init(templateJson);
		parentE.appendChild(earlyWarn);
		
		var modelTemplateJson = {
			'name':'model',
			'alive':true,
			'datas':[{
				'name':'漫滩',
				'effectArea':[{'areaName':'阳西县','areaCode':'441701'},{'areaName':'阳东县','areaCode':'441702'}],
				'lon':'120',//经度
				'lat':'23',//纬度
				'mapType':'wx',//地图类型
				'caseId':'123456',//预案ID
				'beTownName':'阳江市',//模型所属镇名称
				'blTownCode':'4417',//模型所属镇编码
				'dateTime':'20150101010000'
			}]
		};
			
		var model = modelComp.init(modelTemplateJson,warnBack);
		parentE.appendChild(model);
		
		var warnTemplateJson = {
			'name':'rainWarn',
			'alive':true,
			'datas':[{
				'id':'G12345',
				'imgUrl':'http://image1.png',//图片URL
				'warnTitle':'大暴雨',//提示文字
				'level':'red',//总有yellow,orange,red三级
				'name':'阳江阳西县：观测站',
				'telephone':'',
				'threshold':[50,100,180],//阈值
				'currentValue':'40',//当前雨量
				'unit':'mm',//数据单位
				'lon':'120',//经度
				'lat':'23',//纬度
				'beTownName':'那龙镇',//站点所属镇名称
				'blTownCode':'441703001',//站点所属镇编码
				'dateTime':'20150101010000'
			}]
		};
		var rainWarn = warnComp.init(warnTemplateJson,warnBack);
		parentE.appendChild(rainWarn);
		var warnTemplateJson2 = {
			'name':'reservoirWarn',
			'alive':true,
			'datas':[{
				'id':'123',
				'imgUrl':'http://image1.png',//图片URL
				'warnTitle':'溃坝危险',//提示文字
				'level':'red',//总有yellow,orange,red三级
				'name':'阳江阳东县：上水水库',
				'telephone':'',
				'threshold':[50,100,180],//阈值
				'currentValue':'189',//当前雨量
				'unit':'m',//数据单位
				'lon':'120',//经度
				'lat':'23',//纬度
				'beTownName':'那龙镇',//站点所属镇名称
				'blTownCode':'441703002',//站点所属镇编码
				'dateTime':'20150101010000'
			}]
		};
		var rainWarn2 = warnComp.init(warnTemplateJson2,warnBack);
		parentE.appendChild(rainWarn2);
		
		function warnBack(bObj){
			console.info(bObj);
		}
		
		var tcBaseInfo = tcBaseInfoComp.init();
		parentE.appendChild(tcBaseInfo);
	}
};