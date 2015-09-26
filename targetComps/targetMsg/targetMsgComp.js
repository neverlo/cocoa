var targetMsgComp = {
	init : function(focusId,arrChecked,deRadio,effectAreaDatas){
		var cbDatas = {
			"title" : "消息渠道：","defaultChecked" : [],
			"list" : [{"value" : "1","text" : "短信"},
	            {"value" : "2","text" : "大喇叭"},
	            {"value" : "3","text" : "LED显示屏"}
			]
		};
		//保证数据正确性,转换数值
		if(arrChecked instanceof Array){
			var tmpL = [];
			for(var key in cbDatas.list){
				if(arrChecked.indexOf(cbDatas.list[key].text) !== -1){
					tmpL.push(cbDatas.list[key].value);
				}
			}
			cbDatas.defaultChecked = tmpL;
		}
		
		var checkBoxC = checkBoxComp.init(cbDatas,cheackBoxBack);
		
		var selectDatas = {
				"title":"灾害类型：","cite":"请选择省份",'id' : 'province',"defaultCheck" : "",
				"list":[{ "value" : "1", "text" : "广东省"},
				{"value" : "2", "text" : "江苏省"},
				{"value" : "3", "text" : "辽宁省"}]
		};
		var selectDiv = selectComp.init('100',selectDatas,selectBack);
		var radioDatas = {
			"title" : "灾害等级：","name" : "warnLevel","defaultChecked" : "6",
			"list" : [{"value" : "1","text" : "红"},
				{"value" : "2","text" : "橙"},
				{"value" : "3","text" : "黄"},
				{"value" : "4","text" : "蓝"},
				{"value" : "5","text" : "白"},
				{"value" : "6","text" : "其他"}
			]
		};
		if(typeof(deRadio) === 'string'){
			for(var key in radioDatas.list){
				if(deRadio.indexOf(radioDatas.list[key].text) !== -1){
					radioDatas.defaultChecked = radioDatas.list[key].value;
					break;
				}
			}
		}
		var radioDiv = radioComp.init(radioDatas);
		var areaDiv = effectAreaComp.init(effectAreaDatas);
		
		var btnDatas = {"list":[{"value":"reset","text":"重置"},{"value":"send","text":"发送"}]}; 
		var btn = buttonComp.init(btnDatas);
		compTools.addComps(focusId,[checkBoxC,selectDiv,radioDiv,areaDiv,btn],btn,'send',sendBack);
		var cbList = cbDatas.list;
		for(var key in cbList){
			var cValue = cbList[key].value;
			if(cbDatas.defaultChecked.indexOf(cValue) !== -1){
				var defTextAreaDiv = textAreaComp.init(cbList[key].text);
				checkBoxComp.blindTo(defTextAreaDiv,cbList[key].value);
				compTools.appendTo(areaDiv,defTextAreaDiv);
			}
		}
		
		function cheackBoxBack(compDatas){
			if(compDatas.checked){
				var textDiv = textAreaComp.init(compDatas.text);
				compTools.appendTo(areaDiv,textDiv);
				checkBoxComp.blindTo(textDiv,compDatas.value);
			}else{
				if(typeof(compDatas.blindComp) !== 'undefined'){
					compTools.removeComp(compDatas.blindComp);
				}
			}
		}
	
		function selectBack(compDatas){
			var cityDatas = {};
			if(compDatas.value === '2'){
				cityDatas = {
					"cite":"请选择城市",'id' : 'city',"defaultCheck" : "",
					"list":[{ "value" : "1", "text" : "南京市"},
					{"value" : "2", "text" : "苏州市"},
					{"value" : "3", "text" : "无锡市"}]
				};
			}else if(compDatas.value === '1'){
				cityDatas = {
					"cite":"请选择城市",'id' : 'city',"defaultCheck" : "",
					"list":[{ "value" : "1", "text" : "广州市"},
					{"value" : "2", "text" : "深圳市"},
					{"value" : "3", "text" : "东莞市"}]
				};
			}else if(compDatas.value === '3'){
				cityDatas = {
					"cite":"请选择城市",'id' : 'city',"defaultCheck" : "",
					"list":[{ "value" : "1", "text" : "沈阳市"},
					{"value" : "2", "text" : "大连市"},
					{"value" : "3", "text" : "铁岭市"}]
				};
			}
			var cityDiv = selectComp.init('100',cityDatas);
			if(typeof(selectDiv.attributes.mulComp) !== 'undefined'){
				compTools.removeComps(selectDiv.attributes.compList);
			}
			compTools.insertTo(selectDiv,cityDiv);
		}
	
		function sendBack(datas){
			if(datas === 'reset'){
				loadArea();
			}else{
				targetTrackComp.initMin('trackMin');
				$('#msgMin').show();
				console.info(datas);	
			}
		}
	}
};