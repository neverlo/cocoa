function testTrack(){
	var typeDatas = {
			"cite":"请选择类型",'id' : 'demageType',"defaultCheck" : "",
			"list":[{ "value" : "1", "text" : "渠道"},{"value" : "2", "text" : "灾害"},
			{"value" : "3", "text" : "内容"},{"value" : "4", "text" : "日期"}]
	};
	var selectDiv = selectComp.init('100',typeDatas,typeBack);
	compTools.addComps('tragetType',[selectDiv]);
	var btnDatas = {"list":[{"value":"sure","text":"确定"}]}; 
	var tcbtn = buttonComp.init(btnDatas);
	compTools.addComps('tragetChose',[tcbtn]);
	compTools.getCompsDataById(['tragetType','tragetKind'],tcbtn,btonBack);
	function btonBack(rDatas){
		console.info(rDatas);
	}
	function typeBack(rDatas){
		var tempDatas = {};
		if(rDatas.value === "1"){
			tempDatas = {"cite":"请选择内容",'id' : 'demageContent',"defaultCheck" : "",
				"list":[{ "value" : "1", "text" : "短信"},{"value" : "2", "text" : "大喇叭"},
				{"value" : "3", "text" : "LED显示屏"}]
			};
		}else if(rDatas.value === "2"){
			tempDatas = {"cite":"请选择内容",'id' : 'demageContent',"defaultCheck" : "",
				"list":[{ "value" : "1", "text" : "台风"},{"value" : "2", "text" : "红色预警"},
				{"value" : "3", "text" : "气象灾害"}]
			};
		}else{
			tempDatas = {"cite":"请选择内容",'id' : 'demageContent',"defaultCheck" : "","list":[]};
		}
		compTools.clearCompsById('tragetKind');
		var kindSelect = selectComp.init('100',tempDatas);
		compTools.addComps('tragetKind',[kindSelect]);
	}
	
	var jsonDatas1 = {"id" : "1","status" : "0","msg" : "发送中...1",
			"list":[{"text":"渠道：","value":"短信"},
				{"text":"灾害：","value":"气象灾害-台风-红色预警"},
				{"text":"内容：","value":"各单位请做好台风防灾"},
				{"text":"日期：","value":"2015-09-22"}]
		};
		var jsonDatas2 = {"id" : "2","status" : "0","msg" : "发送中...2",
			"list":[{"text":"渠道：","value":"短信"},
				{"text":"灾害：","value":"气象灾害-台风-红色预警"},
				{"text":"内容：","value":"各单位请做好台风防灾"},
				{"text":"日期：","value":"2015-09-22"}]
		};
		var jsonDatas3 = {"id" : "3","status" : "0","msg" : "发送中...3",
			"list":[{"text":"渠道：","value":"短信"},
				{"text":"灾害：","value":"气象灾害-台风-红色预警"},
				{"text":"内容：","value":"各单位请做好台风防灾"},
				{"text":"日期：","value":"2015-09-22"}]
		};
		var jsonDatas4 = {"id" : "4","status" : "0","msg" : "发送中...4",
			"list":[{"text":"渠道：","value":"短信"},
				{"text":"灾害：","value":"气象灾害-台风-红色预警"},
				{"text":"内容：","value":"各单位请做好台风防灾"},
				{"text":"日期：","value":"2015-09-22"}]
		};
		var jsonDatas5 = {"id" : "5","status" : "0","msg" : "发送中...5",
			"list":[{"text":"渠道：","value":"短信"},
				{"text":"灾害：","value":"气象灾害-台风-红色预警"},
				{"text":"内容：","value":"各单位请做好台风防灾"},
				{"text":"日期：","value":"2015-09-22"}]
		};
		var jsonDatas6 = {"id" : "6","status" : "0",	"msg" : "发送中...6",
			"list":[{"text":"渠道：","value":"短信"},
				{"text":"灾害：","value":"气象灾害-台风-红色预警"},
				{"text":"内容：","value":"各单位请做好台风防灾"},
				{"text":"日期：","value":"2015-09-22"}]
		};
		var jsonDatas7 = {"id" : "7","status" : "0","msg" : "发送中...7",
			"list":[{"text":"渠道：","value":"短信"},
				{"text":"灾害：","value":"气象灾害-台风-红色预警"},
				{"text":"内容：","value":"各单位请做好台风防灾"},
				{"text":"日期：","value":"2015-09-22"}]
		};
		var tracks = [];
		var trackmin1 = trackComp.init(jsonDatas1);
		var trackmin2 = trackComp.init(jsonDatas2);
		var trackmin3 = trackComp.init(jsonDatas3);
		var trackmin4 = trackComp.init(jsonDatas4);
		var trackmin5 = trackComp.init(jsonDatas5);
		var trackmin6 = trackComp.init(jsonDatas6);
		var trackmin7 = trackComp.init(jsonDatas7);
		compTools.addComps('trackMin',[trackmin6,trackmin7]);
		// for(var i=1; i<=6; i++){
		// 	jsonDatas.id = i+"";
		// 	jsonDatas.msg += i+"";
		// 	var trackmin = trackComp.init(jsonDatas);
		// 	tracks.push(trackmin);
		// }
		// compTools.addComps('trackMax',tracks);
		// pagingComp.init('trackMax',[trackmin1,trackmin2,trackmin3,trackmin4,trackmin5],2);
}