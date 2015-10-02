var cocoa={
	addComps : function(cDivId,compsArr,submitComp,submitVal,callback){
		var cDiv = document.createElement('div');
		for(var key in compsArr){
			compsArr[key].hidden = false;
			cDiv.appendChild(compsArr[key]);
		}
		document.getElementById(cDivId).appendChild(cDiv);
		
		if(submitComp){
			var countComp = document.getElementById(cDivId).children[0].childNodes;
			submitComp.addEventListener('click',function(iObj){
				var iObjVal = cocoa.getEventTarget(iObj).attributes.value.value;
				if(submitVal !== '' && submitVal !== null){
					if(iObjVal === submitVal){
						var dataMap = {};
						for(var key in countComp){
							if(countComp[key] !== submitComp && key !== 'length' && key !== 'item'){
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
	appendTo : function(focusComp,curComp){
		cocoa.insertAdjacentElement(curComp,'afterend',focusComp);
	},
	removeComp : function(curComp){
		curComp.hidden = true;
		curComp.parentNode.removeChild(curComp);
	},
	removeComps : function(arrComp){
		for(var key in arrComp){
			this.removeComp(arrComp[key]);
		}
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
	insertTo : function(focusComp,curComp){
		focusComp.attributes.mulComp = true;
		if(typeof(focusComp.attributes.compList) !== 'undefined'){
			var cList = focusComp.attributes.compList;
			if(cList.indexOf(curComp) === -1){
				cList.push(curComp);
			}
		}else{
			var tempList = [];
			tempList.push(curComp);
			focusComp.attributes.compList = tempList;
		}
		cocoa.insertAdjacentElement(curComp,'beforeend',focusComp);
	},
	resetComp : function(newComp,oldComp){
		cocoa.appendTo(oldComp,newComp);
		cocoa.removeComp(oldComp);
	},
	getCompsDataById : function(compsId,submitComp,callback){
		if(submitComp){
			submitComp.addEventListener('click',function(iObj){
				var arrComps = [];
				for(var iKey in compsId){
					if(typeof( document.getElementById(compsId[iKey]).children[0]) !== 'undefined'){
						var curComps = document.getElementById(compsId[iKey]).children[0].childNodes[0];
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
					callback(dataMap);
				}
			});
		}
	},
	blindTo : function(bComp,focusComp,blindId){
		console.info(focusComp);
	},
	compRecord : function(compPro,mapKey,mapValue){
		if(typeof(compPro) !== 'undefined'){
			var tempRe = compPro;
			tempRe[mapKey] = mapValue;
			compPro = tempRe;
		}else{
			var compsRecord = {};
			compsRecord[mapKey] = mapValue;
			compPro = compsRecord;
		}
		return compPro;
	},
	getEventTarget : function(cEvent){
		cEvent = cEvent ? cEvent : window.cEvent;
        return cEvent.srcElement ? cEvent.srcElement : cEvent.target;
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
	}
};