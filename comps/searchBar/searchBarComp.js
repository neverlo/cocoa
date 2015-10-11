//带选项卡的搜索栏
var searchBarComp = {
	init : function(jsonDatas,callback,hideBack){
		var parentDiv = document.createElement('div');
		this.bar = parentDiv;
		parentDiv.setAttribute('class','lanren-search-form');
		//选项卡部分
		var tabDiv = document.createElement('div');
		tabDiv.setAttribute('id','search-bd');
		tabDiv.setAttribute('class','search-bd');
		var tabUl = document.createElement('ul');
		var tempUl = document.createDocumentFragment();
		var tabList = jsonDatas.tab;
		var defaulTitle = jsonDatas.defaultSelect;
		for(var key in tabList){
			var tabLi = document.createElement('li');
			var tabTil = tabList[key].title;
			tabLi.setAttribute('value',tabTil);
			tabLi.innerHTML = tabTil;
			if(tabTil === defaulTitle){//是否选中
				tabLi.setAttribute('class','selected');
				searchBarComp.defaultWarn = tabList[key].warn;
				searchBarComp.searchType = tabList[key].value;
			}
			tempUl.appendChild(tabLi);
		}
		tabUl.appendChild(tempUl);
		tabDiv.appendChild(tabUl);
		
		//搜索框部分
		var serchDiv = document.createElement('div');
		serchDiv.setAttribute('id','search-hd');
		serchDiv.setAttribute('class','search-hd');
		var searchItem = this.createSearchBox(serchDiv);
		
		var searchButton = document.createElement('button');
		searchButton.setAttribute('class','btn-search');
		searchButton.setAttribute('varlue',jsonDatas.button);
		searchButton.innerHTML = jsonDatas.button;
		
		var backButton = null;
		if(typeof(jsonDatas.backButton) !== 'undefined'){
			backButton = document.createElement('button');
			backButton.setAttribute('class','btn-back');
			backButton.setAttribute('varlue',jsonDatas.backButton);
			backButton.innerHTML = jsonDatas.backButton;
			backButton.onclick = function(){
				T(backButton).remove();
				parentDiv.style.width = '575px';
				searchButton.style.width = '70px';
				searchButton.style.right = '3px';
				if(hideBack){
					hideBack();
				}
			};
		}
		
		tabUl.onclick = function(tabDatas){//选项切换
			tabDatas = T(tabDatas).getEventTarget();
			var tabLiList = tabUl.childNodes;
			for(var lKey in tabLiList){
				if(tabLiList[lKey].getAttribute('class') === 'selected'){
					tabLiList[lKey].setAttribute('class','');
					break;
				}
			}
			if(tabDatas.nodeName === 'LI'){
				searchBarComp.searchContent = '';//清空上一次输入的结果
				tabDatas.setAttribute('class','selected');//选中
				var currentTab = tabDatas.getAttribute('value');
				searchItem.input.value = '';
				for(var key in tabList){
					var tkTitle = tabList[key].title;
					if(tkTitle === currentTab){
						var newWarn = tabList[key].warn;
						searchBarComp.defaultWarn = newWarn;
						searchBarComp.searchType = tabList[key].value;
						searchItem.span.innerHTML = newWarn;
					}
				}   
			}
		};
		
		//搜索按钮事件
		searchButton.onclick = function(){
			if(callback){
				if(backButton){
					parentDiv.style.width = '600px';
					searchButton.style.width = '45px';
					searchButton.style.right = '50px';
					serchDiv.appendChild(backButton);
				}
				if(searchBarComp.searchContent !== ''){
					if(typeof( searchBarComp.searchContent) !== 'undefined'){
						var searchDatas = {};
						searchDatas.type = searchBarComp.searchType;
						searchDatas.value = searchBarComp.searchContent;
						return callback(searchDatas);
					}
				}
			}
		};
		
		serchDiv.appendChild(searchButton);
		
		parentDiv.appendChild(tabDiv);
		parentDiv.appendChild(serchDiv);
		return parentDiv;
	},
	createSearchBox : function(serchDiv){
		var bgDiv = document.createElement('div');
		bgDiv.setAttribute('class','search-bg');
		var searchInput = document.createElement('input');
		searchInput.setAttribute('type','text');
		searchInput.setAttribute('class','search-input');
		var searchSpan = document.createElement('span');
		searchSpan.innerHTML = searchBarComp.defaultWarn;
		searchSpan.setAttribute('class','pholder');
		searchInput.oninput = function(iText){
			iText = T(iText).getEventTarget();
			var inputValue = iText.value;
			searchBarComp.searchContent = inputValue;
			if(inputValue.length > 0){//隐藏提示文字
				searchSpan.innerHTML = '';
			}else{
				searchSpan.innerHTML = searchBarComp.defaultWarn;
			}
		};
		serchDiv.appendChild(bgDiv);
		serchDiv.appendChild(searchInput);
		serchDiv.appendChild(searchSpan);
		var searchItem = {};
		searchItem.input = searchInput;
		searchItem.span = searchSpan;
		searchBarComp.input = searchInput;
		searchBarComp.span = searchSpan;
		return searchItem;
	},
	getSearchItem : function(){
		return searchBarComp;
	},
	close : function(){
		if(typeof(this.bar) !== 'undefined'){
			T(this.bar).remove();
		}
	}
};