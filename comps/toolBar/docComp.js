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
		var sLArr = [];
		var liE = document.createElement('li');
		liE.setAttribute('value','');
		liE.style.cursor = 'pointer';
		var spanO = document.createElement('span');
		spanO.style.width = '30px';
		spanO.innerHTML = '';
		var spanTh = document.createElement('span');
		spanTh.style.width = '76%';
		spanTh.style.borderRight = '0px';
		spanTh.innerHTML = '本预案暂无相关预案文档';
		liE.appendChild(spanO);
		liE.appendChild(spanTh);
		sLArr.push(liE);
		var documentLoad = scroolLoadComp.init(sLArr,8);
		parentE.appendChild(documentLoad);
		this.documentLoad = documentLoad;
		this.parentE = parentE;
		return parentE;
	},
	addListDatas : function(datas){
		// 加载可无限滚动加载的div内容框
		var scDatas = {"list":[
				{"num":"","id":"","text":"本预案暂无相关预案文档"}
		]};
		if(datas.length > 0){
			scDatas.list = datas;
		}
		var sLArr = [];
		for(var sKey in scDatas.list){
				var tempSc = scDatas.list[sKey];
				var liE = document.createElement('li');
				liE.setAttribute('value',tempSc.path);
				liE.style.cursor = 'pointer';
				var spanO = document.createElement('span');
				spanO.style.width = '30px';
				spanO.innerHTML = tempSc.num;
				var spanTh = document.createElement('span');
				spanTh.style.width = '76%';
				spanTh.style.borderRight = '0px';
				spanTh.innerHTML = tempSc.docName;
				liE.appendChild(spanO);
				liE.appendChild(spanTh);
				sLArr.push(liE);
		}
		if(typeof(this.documentLoad) !== 'undefined'){
			T(this.documentLoad).remove();
			var documentLoad = scroolLoadComp.init(sLArr,8);
			this.parentE.appendChild(documentLoad);
			this.documentLoad = documentLoad;
		}
	}
};