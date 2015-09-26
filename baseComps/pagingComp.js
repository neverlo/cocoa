var pagingComp = {
	init : function(focusId,arrComps,pCount){
		this.focusId = focusId;
		this.bgIndex = 0;
		this.endIndex = pCount;
		this.pCount = pCount;
		this.currPage = 1;
		this.allPage = (arrComps.length - (arrComps.length % pCount === 0 ? -pCount : arrComps.length % pCount)) % pCount;
		this.arrComps = arrComps;
		var arrL = arrComps.length;
		this.compsLength = arrL;
		if(arrL % pCount === 0){
			this.allPage = arrL/pCount;
		}else{
			this.allPage = (arrL-(arrL%pCount))/pCount+1;
		}
		pagingComp.startPage();
		var focomp = document.getElementById(focusId);
		var btn = pagingComp.pageButton();
		compTools.appendTo(focomp,btn);
		if(typeof(this.pageButton) !== 'undefined'){
			var tempRe = this.pageButton;
			tempRe[this.focusId] = btn;
			this.pageButton= tempRe;
			var pgRe = this.getPageComp;
			pgRe[this.focusId] = focomp;
			this.getPageComp= pgRe;
		}else{
			var bComps = {};
			var pgCom = {};
			bComps[this.focusId] = btn;
			pgCom[this.focusId] = focomp;
			this.pageButton = bComps;
			this.getPageComp = pgCom;
		}
	},
	startPage : function(){
		compTools.clearCompsById([this.focusId]);
		var tempArr = [];
		var tempEnd = this.endIndex;
		if(tempEnd>this.compsLength){
			tempEnd = this.compsLength;
		}
		for(var i=this.bgIndex;i<tempEnd;i++){
			this.arrComps[i].hidden = false;
			tempArr.push(this.arrComps[i]);
		}
		compTools.addComps(this.focusId,tempArr);
	},
	pageButton : function(){
		var parentE = document.createElement('div');
		parentE.style.display = 'inline-block';
		parentE.style.width = '100%';
		var countE = document.createElement('div');
		countE.style.cssFloat = 'left';
		countE.style.marginLeft = '18px';
		var ccurrPageE = document.createElement('span');
		ccurrPageE.innerText = '第1页/共'+this.allPage+'页 '+this.compsLength+'条记录';
		countE.appendChild(ccurrPageE);
		
		var pgaeE = document.createElement('div');
		pgaeE.style.cssFloat = 'left';
		pgaeE.style.cssFloat = 'right';
		pgaeE.style.marginRight = '20px';
		var prevPage = document.createElement('span');
		prevPage.innerText = '上一页';
		prevPage.style.cursor = 'pointer';
		prevPage.style.color = 'red';
		prevPage.onclick = function(){
			if(pagingComp.currPage !== 1){
				prevPage.style.color = 'black';
				nextPage.style.color = 'black';
				var bgPag = parseInt(pagingComp.bgIndex)-parseInt(pagingComp.pCount);
				var edPag = parseInt(pagingComp.endIndex)-parseInt(pagingComp.pCount);
				var currPag = parseInt(pagingComp.currPage)-parseInt('1');
				pagingComp.currPage = currPag;
				pagingComp.bgIndex = bgPag;
				pagingComp.endIndex = edPag;
				pagingComp.startPage();
				ccurrPageE.innerText = '第'+currPag+'页/共'+pagingComp.allPage+'页 '+pagingComp.compsLength+'条记录';
				if(pagingComp.currPage === 1){
					prevPage.style.color = 'red';
				}
				// trackComp.initTrackStatus(pagingComp.arrComps);
			}else{
				prevPage.style.color = 'red';
			}
		}
		var nextPage = document.createElement('span');
		nextPage.innerText = '下一页';
		nextPage.style.cursor = 'pointer';
		nextPage.onclick = function(){
			if(pagingComp.currPage !== pagingComp.allPage){
				prevPage.style.color = 'black';
				var bgPag = parseInt(pagingComp.bgIndex)+parseInt(pagingComp.pCount);
				var edPag = parseInt(pagingComp.endIndex)+parseInt(pagingComp.pCount);
				var currPag = parseInt(pagingComp.currPage)+parseInt('1');
				pagingComp.bgIndex = bgPag;
				pagingComp.endIndex = edPag;
				pagingComp.currPage = currPag;
				pagingComp.startPage();
				ccurrPageE.innerText = '第'+currPag+'页/共'+pagingComp.allPage+'页 '+pagingComp.compsLength+'条记录';
				if(pagingComp.currPage === pagingComp.allPage){
					nextPage.style.color = 'red';
				}
				// trackComp.initTrackStatus(pagingComp.arrComps);
			}else{
				prevPage.style.color = 'black';
			}
		}
		pgaeE.appendChild(prevPage);
		pgaeE.appendChild(nextPage);
		parentE.appendChild(countE);
		parentE.appendChild(pgaeE);
		return parentE;
	},
	getPageButton : function(focusId){
		return this.pageButton[focusId];
	},
	getPageComp : function(focusId){
		return this.getPageComp[focusId];
	}
};