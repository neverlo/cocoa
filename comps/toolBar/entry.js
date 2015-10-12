function initToolBar(cityName){
	var cityCom = cityComp.init(cityName,addCaseName);
	var drawCom = drawComp.init(['marker','dynamicLine','text','arrow','polygon','staticLine'],drawEvent);
	var docCom = docComp.init(['document'],drawEvent);
	var controlCom = controlComp.init(['edit','save'],drawEvent);
	var colorCom = colorComp.init(colorBack);
	colorCom.setAttribute('class','toolBarColor');
	colorCom.style.display = 'none';
	var allDrawComp = T().groupComps([cityCom,drawCom,docCom,controlCom]);
	var resultComp = T().groupComps([allDrawComp,colorCom]);
	allDrawComp.setAttribute('class','toolBarDiv');
	(document.body).appendChild(resultComp);
	function drawEvent(bDatas){
		console.info(bDatas);//点击工具类型
		if(bDatas.value !== 'document' && bDatas.value !== 'edit' &&bDatas.value !== 'save'){
			//控制色板
			var status = 'none';
			if(bDatas.status === 'selected'){
				status = 'block';
			}
			colorCom.style.display = status;
			console.info(colorComp.getResultJson());//工具初始状态
		}
	}
	
	function colorBack(coDatas){
		console.info(coDatas);
	}
	var caseDiv = null;
	function addCaseName(scrollBack){
		var caseDatas = {"cite":"请选择预案",'id' : 'case','defaultCheck':'1',
			"list":[{"text":'预案A',"value":'1'},
				{"text":'预案B',"value":'2'},
				{"text":'预案C',"value":'3'},
				{"text":'预案D',"value":'4'}
			]};
		if(caseDiv){
			T(caseDiv).remove();
		}
		caseDiv = selectComp.init('80','32',caseDatas,changeCase);
		function changeCase(cBack){
			console.info(cBack);
		}
		T(caseDiv).appendTo(controlCom);
	}
}