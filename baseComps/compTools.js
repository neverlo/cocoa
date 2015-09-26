var compTools={
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
				var iObjVal = iObj.srcElement.attributes.value.value;
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
						backEvent(dataMap);
					}else{
						backEvent(iObjVal);
					}
				}
			});
			if(callback){
				function backEvent(rDatas){
					callback(rDatas);
				}
			}
		}
	},
	appendTo : function(focusComp,curComp){
		focusComp.insertAdjacentElement('afterend',curComp);
	},
	removeComp : function(curComp){
		curComp.hidden = true;
		curComp.remove();
	},
	removeComps : function(arrComp){
		for(var key in arrComp){
			this.removeComp(arrComp[key]);
		}
	},
	clearComps : function(arrComps){
		for(var key in arrComps){
			this.removeComp(arrComps[key]);
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
			var ocns = document.getElementById(arrFoId).childNodes[0];
			if(typeof(ocns) !== 'undefined'){
				var ocnsList = ocns.childNodes;
				for(var i=ocnsList.length-1;i>=0;i--){
					ocnsList[i].hidden = true;
				}
				document.getElementById(arrFoId).removeChild(ocns);
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
		focusComp.insertAdjacentElement('beforeend',curComp);
	},
	resetComp : function(newComp,oldComp){
		compTools.appendTo(oldComp,newComp);
		compTools.removeComp(oldComp);
		// document.getElementById(focusId).replaceChild(oldComps.attributes.resetComp,oldComps);
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
				backEvent(dataMap);
			});
			if(callback){
				function backEvent(rDatas){
					callback(rDatas);
				}
			}
		}
	},
	blindTo : function(bComp,focusComp,blindId){
		console.info(focusComp);
		// focusComp.attributes.blindComps = bComp;
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
	}
};