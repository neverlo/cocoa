var docComp={
	init : function(logoList,backEvent){
        var jsonDatas = [{
			'title':'展开预案文档','sTitle':'收起预案文档','value':'document','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAVUlEQVR4AWMAAb9t3/4TwuuvvwfjlhOfYhiggGTNk899vEq25tXX3v9rPP5JnFTNcNx9+tMSsjXPv/jhK4rmvY9/YcM4DUPRTCoebDYTxsPFZvprBgBg6FjHgmEKkAAAAABJRU5ErkJggg=='
		}];
		return drawComp.createLogo(jsonDatas,logoList,backEvent);
	},
	createList : function(){
		var parentE = document.createElement('div');
		parentE.setAttribute('class','documentList');
		
		// 加载可无限滚动加载的div内容框
		var scDatas = {"list":[
				{"num":"1","id":"001","text":"文档1"},
				{"num":"2","id":"002","text":"文档2"},
				{"num":"3","id":"003","text":"文档3"},
				{"num":"4","id":"004","text":"文档4"},
				{"num":"5","id":"005","text":"文档5"},
				{"num":"6","id":"006","text":"文档6"},
				{"num":"7","id":"007","text":"文档7"},
				{"num":"8","id":"008","text":"文档8"},
				{"num":"9","id":"009","text":"文档9"},
				{"num":"10","id":"010","text":"文档10"},
				{"num":"11","id":"011","text":"文档11"}
		]};
		var sLArr = [];
		for(var sKey in scDatas.list){
				var tempSc = scDatas.list[sKey];
				var liE = document.createElement('li');
				liE.setAttribute('value',tempSc.id);
				liE.style.cursor = 'pointer';
				var spanO = document.createElement('span');
				spanO.style.width = '30px';
				spanO.innerHTML = tempSc.num;
				// var spanT = document.createElement('span');
				// spanT.style.width = '78px';
				// spanT.innerHTML =tempSc.id;
				var spanTh = document.createElement('span');
				spanTh.style.width = '78%';
				spanTh.style.borderRight = '0px';
				spanTh.innerHTML = tempSc.text;
				liE.appendChild(spanO);
				// liE.appendChild(spanT);
				liE.appendChild(spanTh);
				sLArr.push(liE);
		}
		var documentLoad = scroolLoadComp.init(sLArr,8);
		parentE.appendChild(documentLoad);
		return parentE;
	}
};