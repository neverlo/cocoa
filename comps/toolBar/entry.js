function initToolBar(cityName){
	var currentCaseId = '';//记录当前的预案ID
	var cityInfo = {"name":"阳春县","code":"440000",'type':'town'};
	var cityCom = cityComp.init(cityInfo,addCaseName);
	var drawCom = drawComp.init(['marker','dynamicLine','text','arrow','polygon','staticLine'],drawEvent);
	var docCom = docComp.init(['document'],drawEvent);
	var controlCom = controlComp.init(['undo','add','delete','save'],drawEvent);
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
	function drawEvent(bDatas){
		var drawType = bDatas.value;
		console.info(bDatas);//点击工具类型
		console.info(mapComp.getDrawLayer());
		
		if(bDatas.value !== 'document' && bDatas.value !== 'add' && bDatas.value !== 'save' && bDatas.value !== 'delete' && bDatas.value !== 'undo'){
			mapComp.clearHander();
			//控制色板
			var status = 'none';
			var docListLeft = '245px';
			if(bDatas.status === 'selected'){
				status = 'block';
				docListLeft = '304px';
				var initDatas = colorComp.getResultJson();
				if(drawType === 'polygon'){
					mapComp.drawPolygon(initDatas.size,initDatas.color);
				}else if(drawType === 'dynamicLine'){
					mapComp.drawDynamicPath(initDatas.size,initDatas.color);
				}
			}
			documentList.style.marginLeft = docListLeft;
			colorCom.style.display = status;
			console.info(colorComp.getResultJson());//工具初始状态
			
		}else if(bDatas.value === 'document'){
			//控制文档面板
			var dstatus = 'none';
			if(bDatas.status === 'selected'){
				dstatus = 'block';
			}
			documentList.style.display = dstatus;
			//当前的预案ID
			console.info(currentCaseId);
			// documentList.style.marginLeft = docListLeft;
		}else if(bDatas.value === 'undo'){
			mapComp.removeLasFeature();
		}
	}
	
	function colorBack(coDatas){
		mapComp.setLayerPro(coDatas.size,coDatas.color);
		console.info(coDatas);
	}
	var caseDiv = null;
	function addCaseName(scrollBack){
		console.info(scrollBack);
		currentCaseId = scrollBack.id;
		var caseDatas = {"cite":"请选择预案",'id' : 'case','defaultCheck':'1',
			"list":[{"text":'预案A',"value":'001'},
				{"text":'预案B',"value":'002'},
				{"text":'预案C',"value":'003'},
				{"text":'预案D',"value":'004'}
			]};
		if(caseDiv){
			T(caseDiv).remove();
		}
		caseDiv = selectComp.init('150','32',caseDatas,changeCase);
		function changeCase(cBack){
			currentCaseId = cBack.value;
			console.info(cBack);
		}
		T(caseDiv).appendTo(controlCom);
	}
}