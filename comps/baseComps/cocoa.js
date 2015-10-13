// 共用的方法
(function(){
	var T = window.T = function(elem){
		return T.fn.init(elem);
	};
	T.fn = T.prototype={
		elem:"",
		init:function(elem){this.elem=elem;return this;},
		mousemove:function(callback){
			this.coEvent('mousemove',callback);
			return T.fn;
		},
		mousedown:function(callback){
			this.coEvent('mousedown',callback);
			return T.fn;
		},
		mouseup:function(callback){
			this.coEvent('mouseup',callback);
			return T.fn;
		},
		mouseout:function(callback){
			this.coEvent('mouseout',callback);
			return T.fn;
		},
		mouseover:function(callback){
			this.coEvent('mouseover',callback);
			return T.fn;
		},
		click:function(callback){
			this.coEvent('click',callback);	
		},
		coEvent:function(type,callback){
			if (this.elem.addEventListener)
				this.elem.addEventListener(type, function(eObj){return callback(eObj);}, false);
			else if (this.elem.attachEvent)
				this.elem.attachEvent("on" + type, function(eObj){return callback(eObj);});
		},
		appendTo:function(parsedNode){
			T.fn.insertAdjacentElement(this.elem,'afterend',parsedNode);
		},
		insertTo : function(focusComp){
			focusComp.attributes.mulComp = true;
			if(typeof(focusComp.attributes.compList) !== 'undefined'){
				var cList = focusComp.attributes.compList;
				if(cList.indexOf(this.elem) === -1){
					cList.push(this.elem);
				}
			}else{
				var tempList = [];
				tempList.push(this.elem);
				focusComp.attributes.compList = tempList;
			}
			T.fn.insertAdjacentElement(this.elem,'beforeend',focusComp);
		},
		remove : function(){
			(this.elem).parentNode.removeChild(this.elem);
		},
		insertAdjacentElement : function(parsedNode,where,focusNode){//解决各浏览器的兼容问题
			if(where === 'beforebegin'){
				focusNode.parentNode.insertBefore(parsedNode,focusNode);
			}else if(where === 'afterbegin'){
				focusNode.insertBefore(parsedNode,focusNode.firstChild);
			}else if(where === 'beforeend'){
				focusNode.appendChild(parsedNode);
			}else if(where === 'afterend'){
				if(focusNode.nextSibling){
					focusNode.parentNode.insertBefore(parsedNode,focusNode.nextSibling);
				}else{
					focusNode.parentNode.appendChild(parsedNode);
				}
			}
		},
		getEventTarget : function(){
			var tempEle = this.elem;
			tempEle = tempEle  ? tempEle  : window.tempEle;
			return tempEle.srcElement ? tempEle.srcElement : tempEle.target;
		},
		CDE:function(etype){
			return document.createElement(etype);
		},
		setClass:function(className){
			this.elem.setAttribute('class',className);
		},
		CAT:function(){
			return this.elem.attributes;
		},
		groupComps:function(compsArr){//将多个组件组合
			var DivE = document.createElement('div');
			var tempDivE = document.createDocumentFragment();
			for(var key in compsArr){
				tempDivE.appendChild(compsArr[key]);
			}
			DivE.appendChild(tempDivE);
			return DivE;
		},
		addComps : function(compsArr,submitComp,submitVal,callback){
			var addObj = document.getElementById(this.elem);
			var cDiv = T().CDE('div');
			var tempDE = document.createDocumentFragment();
			for(var key in compsArr){
				compsArr[key].hidden = false;
				// cDiv.appendChild(compsArr[key]);
				tempDE.appendChild(compsArr[key]);
			}
			if(compsArr.length > 1){
				cDiv.appendChild(tempDE);
				addObj.appendChild(cDiv);
			}else{
				addObj.appendChild(tempDE);
			}
			if(submitComp){
				var countComp = addObj.children[0].childNodes;
				T(submitComp).click(function(iObj){
					var iObjVal = T(iObj).getEventTarget().attributes.value.value;
					if(submitVal !== '' && submitVal !== null){
						if(iObjVal === submitVal){
							var dataMap = {};
							for(var key in countComp){
								if(countComp[key] !== submitComp && key !== 'length' && key !== 'item'){
									if(typeof(countComp[key].attributes)!=='undefined'){
										if(typeof(countComp[key].attributes.mulComp) !== 'undefined'){
											var cList = countComp[key].attributes.compList;
											for(var tKey in cList){
												var tempDatas = cList[tKey].attributes.tempdatas;
												for(var tempKey in tempDatas){
													dataMap[tempKey] = tempDatas[tempKey];
												}
											}
										}
										var coDatas = countComp[key].attributes.tempdatas;
										for(var coKey in coDatas){
											dataMap[coKey] = coDatas[coKey];
										}
									}
									
								}
							}
							if(callback){
								return callback(dataMap);
							}
						}else{
							if(callback){
								return callback(iObjVal);
							}
						}
					}
				});
			}
		},
		compRecord : function(mapKey,mapValue){
			if(typeof(this.elem) !== 'undefined'){
				var tempRe = this.elem;
				tempRe[mapKey] = mapValue;
				this.elem = tempRe;
			}else{
				var compsRecord = {};
				compsRecord[mapKey] = mapValue;
				this.elem = compsRecord;
			}
			return this.elem;
		},
		clearCompsById : function(arrFoId){
			if(arrFoId instanceof Array){
				for(var key in arrFoId){
					var ocns = document.getElementById(arrFoId[key]).childNodes[0];
					if(typeof(ocns) !== 'undefined'){
						var ocnsList = ocns.childNodes;
						for(var i=ocnsList.length-1;i>=0;i--){
							ocnsList[i].hidden = true;
						}
						document.getElementById(arrFoId[key]).removeChild(ocns);
					}
				}
			}else{
				if(typeof(document.getElementById(arrFoId).childNodes[0]) !== 'undefined'){
					var singleocn = document.getElementById(arrFoId).childNodes[0].childNodes;
					for(var j=singleocn.length-1;j>=0;j--){
						singleocn[j].hidden = true;
						document.getElementById(arrFoId).removeChild(singleocn[j]);
					}
				}
			}
		},
		getCompsDataById : function(submitComp,callback){
			var idList = this.elem;
			if(submitComp){
				T(submitComp).click(function(iObj){
					var arrComps = [];
					for(var iKey in idList){
						if(typeof( document.getElementById(idList[iKey]).children[0]) !== 'undefined'){
							var curComps = document.getElementById(idList[iKey]).children[0].childNodes[0];
							arrComps.push(curComps);
						}
					}
					var dataMap = {};
					for(var key in arrComps){
						if(arrComps[key] !== submitComp && key !== 'length' && key !== 'item' && arrComps[key] !== null){
							var coDatas = arrComps[key].attributes.tempdatas;
							for(var coKey in coDatas){
								dataMap[coKey] = coDatas[coKey];
							}
						}
					}
					if(callback){
						return callback(dataMap);
					}
				});
			}
		},
		autoLoad : function(arrComps,loadLine,totalLine,ulE){//滚动条按需加载
			totalLine = totalLine < loadLine ? loadLine : totalLine;//防止总数少于每次加载数
			var firDE = document.createDocumentFragment();
			for(var i=0;i<loadLine;i++){
				if(typeof(arrComps[i]) !== 'undefined'){
					firDE.appendChild(arrComps[i]);
					if(i % 2 !== 0){
						arrComps[i].style.background = '#fff';
					}
				}
			}
			ulE.appendChild(firDE);
			this.elem.appendChild(ulE);
			var firIndex = loadLine;
			var loadBoolen = true;
			this.elem.onscroll = function(sObj){
				sObj = T(sObj).getEventTarget();
				var pdivH = sObj.clientHeight;//div高度
				var scTop = sObj.scrollTop;//距离顶部的高度
				var totalH = sObj.scrollHeight;//总高度
				if(pdivH+scTop >= totalH){
					if(loadBoolen){
						var tempDE = document.createDocumentFragment();
						var lastIndex = firIndex+loadLine;
						if(lastIndex > totalLine){
							lastIndex = totalLine;
							loadBoolen = false;
						}
						for(var i = firIndex; i<lastIndex;i++){
							tempDE.appendChild(arrComps[i]);
							if(i % 2 !== 0){
								arrComps[i].style.background = '#fff';
							}
						}
						ulE.appendChild(tempDE);
						firIndex += loadLine;
					}
				}
			};
		},
		inArray : function(arry){//判断数组是否包含
			var elem = this.elem;
			for(var i=arry.length-1; i>=0; i--){
				if(arry[i] === elem){
					return true;
				}
			}
			return false;
		}
	};
})(Window);