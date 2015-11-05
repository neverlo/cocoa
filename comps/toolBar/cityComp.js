var cityComp={
	option:{
		'areaUrl' : 'http://127.0.0.1/dss-data/emergency/emergency!findNameByAreaCode.action',
		'commandInfo' : 'http://127.0.0.1/dss-data/emergency/emergency!findCommandInfoByAreaCode.action'
	},
	init:function(cityJson,addCaseName){
		var citySelectDiv = null;
		var townComp = null;
		var countryComp = null;
		
		var divE = document.createElement('div');
		divE.setAttribute('class','cityBar');
		var spanE = document.createElement('span');
		spanE.innerHTML = cityJson.name;
		spanE.style.color = '#807a62';
		spanE.style.paddingLeft = '5px';
		var imgE = document.createElement('img');
		imgE.style.cursor = 'pointer';
		imgE.setAttribute('status','');
		imgE.setAttribute('code',cityJson.code);
		imgE.setAttribute('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAHCAYAAADTcMcaAAAAWklEQVR4AWNQ0DD+CMT/gfggAx4Akoeq+wgT+A4VmIJDwxSo/HdkQV0g/guVKEfTUA4Sh8rrQkQxNf4DsZHE/qFrQNcYgmRqCJLtIRiKcTjnH6ZzCWv8jUsDAExWM9Gq2hrlAAAAAElFTkSuQmCC');
		imgE.onclick = function(){
			var status = '';
			var cityDivStatus = 'none';
			var logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAHCAYAAADTcMcaAAAAWklEQVR4AWNQ0DD+CMT/gfggAx4Akoeq+wgT+A4VmIJDwxSo/HdkQV0g/guVKEfTUA4Sh8rrQkQxNf4DsZHE/qFrQNcYgmRqCJLtIRiKcTjnH6ZzCWv8jUsDAExWM9Gq2hrlAAAAAElFTkSuQmCC';
			if(imgE.getAttribute('status') === ''){
				status = 'selected';
				logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAHCAYAAADTcMcaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACiSURBVChTY2bAAhQ0jMsFRKQOAPGvD2+eH4UKwwGGJpAGINUBxIxA7ArU+ANdIxOUBgOghhAgBdLwD4jDoHQHVBwO4JqAErpAaiUQ/wdigwc3zq4B0VD+Sqg8GIA1QQUuQPmVQA2XQeJQuhIqfgGmEWbTKSAGsacCFXaCRaAAyp8KxCB5kDoGRqDuj0CaD4gPARXYgwSxAaC6g0DKjoGB4RMAyr41T/QiwF4AAAAASUVORK5CYII=';
				cityDivStatus = 'block';
				//展开才输出当前地区编码
//				console.info(imgE.getAttribute('code'));
				addCaseDiv(imgE.getAttribute('code'));
				if(townComp !== null){
					T(townComp).remove();
					townComp = null;
				}
				if(countryComp !== null){
					T(countryComp).remove();
					countryComp = null;
				}
				if(citySelectDiv !== null){
					T(citySelectDiv).remove();
				}
				if(cityJson.type === 'province'){
					var cityDatas = {"cite":"请选择城市",'id' : 'city',"list":''};
					var url = cityComp.option.areaUrl;
					var reqData = {"areaCode":cityJson.code};
					$.getJSON(url,reqData,function(bDatas){
						cityDatas.list = bDatas;
						citySelectDiv = selectComp.init('85','34',cityDatas,changeCity);
						cityDiv.appendChild(citySelectDiv);
					});
				}else if(cityJson.type === 'city'){
					var towntDatas = {"cite":"请选择县区",'id' : 'county',"list":''};
					var url = cityComp.option.areaUrl;
					var reqData = {"areaCode":cityJson.code};
					$.getJSON(url,reqData,function(bDatas){
						towntDatas.list = bDatas;
						citySelectDiv = selectComp.init('130','34',towntDatas,changeTown);
						cityDiv.appendChild(citySelectDiv);
					});
				}else if(cityJson.type === 'county'){
					var countrytDatas = {"cite":"请选择城镇",'id' : 'town',"list":''};
					var url = cityComp.option.areaUrl;
					var reqData = {"areaCode":cityJson.code};
					$.getJSON(url,reqData,function(bDatas){
						countrytDatas.list = bDatas;
						citySelectDiv = selectComp.init('151','34',countrytDatas,changeCountry);
						cityDiv.appendChild(citySelectDiv);
					});
				}
			}
			cityDiv.style.display = cityDivStatus;
			caseDiv.style.display = cityDivStatus;
			imgE.setAttribute('status',status);
			imgE.setAttribute('src',logo);
		};
		var cityDiv = document.createElement('div');
		cityDiv.style.display = 'none';
		cityDiv.setAttribute('class','citySelect');
		
		function changeCity(cityBack){
//			console.info(cityBack);
			addCaseDiv(cityBack.value);
			if(townComp !== null){
				T(townComp).remove();
				townComp = null;
			}
			if(countryComp !== null){
				T(countryComp).remove();
				countryComp = null;
			}
			var townDatas = {"cite":"请选择县区",'id' : 'county',"list":''};
			var url = cityComp.option.areaUrl;
			var reqData = {"areaCode":cityBack.value};
			$.getJSON(url,reqData,function(bDatas){
				townDatas.list = bDatas;
				townComp = selectComp.init('130','34',townDatas,changeTown);
				cityDiv.appendChild(townComp);
			});
		}

		function changeTown(cBack){
//			console.info(cBack);
			addCaseDiv(cBack.value);
			if(countryComp){
				T(countryComp).remove();
				countryComp = null;
			}
			var selectCountryDatas = {"cite":"请选择镇街",'id' : 'town',"list":''};
			var url = cityComp.option.areaUrl;
			var reqData = {"areaCode":cBack.value};
			$.getJSON(url,reqData,function(bDatas){
				selectCountryDatas.list = bDatas;
				countryComp = selectComp.init('151','34',selectCountryDatas,changeCountry);
				cityDiv.appendChild(countryComp);
			});
		}
		//选择镇事件
		function changeCountry(coBack){
//			console.info(coBack);
			addCaseDiv(coBack.value);
		}
		
		var caseDiv = document.createElement('div');
		caseDiv.style.display = 'none';
		caseDiv.setAttribute('class','caseShow');
		
		var caseTitleDiv = document.createElement('div');
		var titleUl = document.createElement('ul');
		var titleLi = document.createElement('li');
		var numSpan = document.createElement('span');
		numSpan.style.width = '40px';
		numSpan.innerHTML = '序号';
		var idSpan = document.createElement('span');
		idSpan.style.width = '110px';
		idSpan.innerHTML = '预案编码';
		var nameSpan = document.createElement('span');
		nameSpan.style.width = '58%';
		nameSpan.innerHTML = '预案名称';
		titleLi.appendChild(numSpan);
		titleLi.appendChild(idSpan);
		titleLi.appendChild(nameSpan);
		titleUl.appendChild(titleLi);
		caseTitleDiv.appendChild(titleUl);
		caseDiv.appendChild(caseTitleDiv);
		
		var caseLoad = null;
		function addCaseDiv(tempCode){
			var reqDatas = {'areaCode':tempCode};
			$.getJSON(cityComp.option.commandInfo,reqDatas,function(cDatas){
				if(caseLoad !== null){
					T(caseLoad).remove();
				}
				// 加载可无限滚动加载的div内容框
				var scDatas = {"list":''};
				scDatas.list = cDatas;
				var sLArr = [];
				for(var sKey in scDatas.list){
					var tempSc = scDatas.list[sKey];
					var liE = document.createElement('li');
					liE.setAttribute('value',tempSc.value);
					liE.setAttribute('areaCode', tempCode);
					liE.style.cursor = 'pointer';
					var spanO = document.createElement('span');
					spanO.style.width = '40px';
					spanO.innerHTML = tempSc.num;
					var spanT = document.createElement('span');
					spanT.style.width = '110px';
					spanT.innerHTML =tempSc.commandCode;
					var spanTh = document.createElement('span');
					spanTh.style.width = '58%';
					spanTh.style.borderRight = '0px';
					spanTh.innerHTML = tempSc.text;
					liE.appendChild(spanO);
					liE.appendChild(spanT);
					liE.appendChild(spanTh);
					sLArr.push(liE);
				}
				if(sLArr.length > 0){
					caseLoad = scroolLoadComp.init(sLArr,5,addCaseName);
				}else{
					var emptyLi = document.createElement('li');
					emptyLi.setAttribute('value','');
					emptyLi.style.cursor = 'pointer';
					var spanO = document.createElement('span');
					spanO.style.width = '40px';
					spanO.innerHTML = '';
					var spanT = document.createElement('span');
					spanT.style.width = '110px';
					spanT.innerHTML = '当前地区暂无预案';
					var spanTh = document.createElement('span');
					spanTh.style.width = '58%';
					spanTh.style.borderRight = '0px';
					spanTh.innerHTML = '';
					emptyLi.appendChild(spanO);
					emptyLi.appendChild(spanT);
					emptyLi.appendChild(spanTh);
					sLArr.push(emptyLi);
					caseLoad = scroolLoadComp.init(sLArr,1);
				}
				caseDiv.appendChild(caseLoad);
			});
		}
//		cityDiv.appendChild(citySelectDiv);
		divE.appendChild(spanE);
		divE.appendChild(imgE);
		divE.appendChild(cityDiv);
		divE.appendChild(caseDiv);
		return divE;
	}
};


