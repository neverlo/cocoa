var initToolBar = {
	option : {
		'restoreUrl' : 'http://127.0.0.1/dss-data/emergency/emergency!findCommandInfoByCommandId.action',
		'docUrl' : 'http://127.0.0.1/dss-data/emergency/emergency!findDocByCommandId.action'
	},
	init : function(olMap,cityInfo,saveBack){
		if(typeof(initToolBar.toolBar) === 'undefined'){
			var showColor = ['marker','dynamicLine','text','arrowPolygon','circle','regularPolygon','polygon','staticLine','distance'];
			var currentCaseId = '';//记录当前的预案ID
			var penModel = null;//记录当前画笔模式
			var currToolType = '';//记录当前使用的工具类型
//			var cityInfo = {"name":"广东省","code":"440000",'type':'province'};
			var cityCom = cityComp.init(cityInfo,addCaseName);
			var drawCom = drawComp.init(showColor,drawEvent);
			var docCom = docComp.init(['document'],drawEvent);
			var controlCom = controlComp.init(['pen','undo','delete','save'],drawEvent);
			var colorCom = colorComp.init(colorBack);
			var documentList = docComp.createList();
			documentList.style.display = 'none';
			colorCom.setAttribute('class','toolBarColor');
			colorCom.style.display = 'none';
			var allDrawComp = T().groupComps([cityCom,drawCom,docCom,controlCom]);
			var resultComp = T().groupComps([allDrawComp,colorCom,documentList]);
			allDrawComp.setAttribute('class','toolBarDiv');
			resultComp.setAttribute('class','toolBarPosition');
			(document.body).appendChild(resultComp);
			initToolBar.toolBar = resultComp;
			mapComp.initDrawLayer(olMap);
			function drawEvent(bDatas){
				var drawType = bDatas.value;
//				console.info(bDatas);//点击工具类型
				if(T(bDatas.value).inArray(showColor)){
					mapComp.clearHander();
					currToolType = drawType;
					//控制色板
					var status = 'none';
					var docListLeft = '338px';
					if(bDatas.status === 'selected'){
						status = 'block';
						docListLeft = '372px';
						var initDatas = colorComp.getResultJson();
						if(drawType === 'polygon'){
							mapComp.drawPolygon(initDatas.size,initDatas.color);
						}else if(drawType === 'circle'){
							mapComp.drawRegularPolygon(initDatas.size,initDatas.color,'circle');
						}else if(drawType === 'regularPolygon'){
							mapComp.drawRegularPolygon(initDatas.size,initDatas.color,'RegularPolygon');
						}else if(drawType === 'arrowPolygon'){
							mapComp.drawArrowPolygon(initDatas.size,initDatas.color);
						}else if(drawType === 'dynamicLine'){
							mapComp.drawPath(initDatas.size,initDatas.color,'dynamicLine');
						}else if(drawType === 'staticLine'){
							mapComp.drawPath(initDatas.size,initDatas.color,'staticLine');
						}else if(drawType === 'marker'){
							mapComp.drawPoint(initDatas.size,initDatas.color); 
						}else if(drawType === 'text'){
							mapComp.drawText(initDatas.size,initDatas.color); 
						}
					}
					if(penModel){
						mapComp.changPenModel(penModel,drawType);
					}
					documentList.style.marginLeft = docListLeft;
					colorCom.style.display = status;
//					console.info(colorComp.getResultJson());//工具初始状态
					
				}else if(drawType === 'document'){
					//控制文档面板
					var dstatus = 'none';
					if(bDatas.status === 'selected'){
						dstatus = 'block';
					}
					documentList.style.display = dstatus;
					//当前的预案ID
//					console.info(currentCaseId);
					// documentList.style.marginLeft = docListLeft;
				}else if(drawType === 'undo'){
					mapComp.removeLasFeature();
				}else if(drawType === 'pen'){//切换画笔模式
					var penStatus = false;
					if(bDatas.status === 'selected'){
						penStatus = true;
					}
					penModel = penStatus;
					mapComp.changPenModel(penStatus,currToolType);
				}else if(drawType === 'delete'){
					mapComp.removeAllFeatures();
					// mapComp.removeDrawLayer();
				}else if(drawType === 'save'){
					var layerJson = mapComp.saveAllFeature(currentCaseId);
					if(saveBack){
						return saveBack(layerJson);
					}
				}
			}
			
			function colorBack(coDatas){
				mapComp.setLayerPro(coDatas.size,coDatas.color,currToolType);
//				console.info(coDatas);
			}
			var caseDiv = null;
			function addCaseName(scrollBack){
//				console.info(scrollBack);
				currentCaseId = scrollBack.id;
				
				var reqDatas = {'commandId':currentCaseId};
				$.getJSON(initToolBar.option.restoreUrl,reqDatas,function(layerDatas){
					if(layerDatas.length > 0){
						var layerJson = JSON.parse(layerDatas[0].layerEle);
						initToolBar.restoreLayer(map, layerJson,restoreMapType);
					}
				});
				$.getJSON(initToolBar.option.docUrl,reqDatas,function(docReqDatas){//预案文档
					docComp.addListDatas(docReqDatas);
				});
				
				var caseJson = {"cite":"请选择预案",'id' : 'case','defaultCheck':currentCaseId,
					"list":[{"text":'预案A',"value":'001'},
						{"text":'预案B',"value":'002'},
						{"text":'预案C',"value":'003'},
						{"text":'预案D',"value":'004'}
					]};
				var caseDatas = {'areaCode' : scrollBack.areaCode};
				$.getJSON(cityComp.option.commandInfo,caseDatas,function(cDatas){
					caseJson.list = cDatas;
					if(caseDiv){
						T(caseDiv).remove();
						caseDiv = null;
					}
					caseDiv = selectComp.init('150','30',caseJson,changeCase);
					T(caseDiv).appendTo(controlCom);
				});
				
				function changeCase(cBack){
					currentCaseId = cBack.value;
					var reqDatas = {'commandId':currentCaseId};
					$.getJSON(initToolBar.option.restoreUrl,reqDatas,function(layerDatas){
						if(layerDatas.length > 0){
							var layerJson = JSON.parse(layerDatas[0].layerEle);
							initToolBar.restoreLayer(map, layerJson,restoreMapType);
						}
					});
					$.getJSON(initToolBar.option.docUrl,reqDatas,function(docReqDatas){
						docComp.addListDatas(docReqDatas);
					});
				}
				//切换地图
				function restoreMapType(mapJson){
					var mapType = mapJson.mapType;
					mapType = mapType === 'dt' ? 'ew' : mapType;
					showDxOrEw(mapType);//main中的切换方法
				}
			}
		}
	},
	close : function(){
		if(typeof(this.toolBar) !== 'undefined'){
			T(this.toolBar).remove();
			delete this.toolBar;
		}
		mapComp.removeDrawLayer();
	},
	restoreLayer : function(map,jsonDatas,callback){
		mapComp.restoreLayer(map,jsonDatas,callback);	
	},
	removeFeautes : function(){
		mapComp.removeAllFeatures();
	}
};