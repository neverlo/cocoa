function initToolBar(cityName){
	var cityCom = cityComp.init(cityName,addCaseName);
	var drawCom = drawComp.init(['dynamicLine','marker','text','arrow','polygon','staticLine'],drawEvent);
	var docCom = docComp.init(['document'],drawEvent);
	var controlCom = controlComp.init(['edit','save'],drawEvent);
	var colorCom = colorComp.init();
	colorCom.setAttribute('class','toolBarColor');
	colorCom.style.display = 'none';
	var allDrawComp = T().groupComps([cityCom,drawCom,docCom,controlCom]);
	var resultComp = T().groupComps([allDrawComp,colorCom]);
	allDrawComp.setAttribute('class','toolBarDiv');
	(document.body).appendChild(resultComp);
	function drawEvent(bDatas){
		console.info(bDatas);
		var status = 'none';
		if(bDatas.status === 'selected'){
			status = 'block';
		}
		colorCom.style.display = status;
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
		caseDiv = selectComp.init('80','30',caseDatas,changeCase);
		function changeCase(cBack){
			console.info(cBack);
		}
		T(caseDiv).appendTo(controlCom);
	}
}