var cityComp={
	init:function(cityJson,addCaseName){
		var divE = document.createElement('div');
		divE.setAttribute('class','cityBar');
		var spanE = document.createElement('span');
		spanE.innerHTML = cityJson.name;
		spanE.style.color = '#fff';
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
				console.info(imgE.getAttribute('code'));
			}
			cityDiv.style.display = cityDivStatus;
			caseDiv.style.display = cityDivStatus;
			imgE.setAttribute('status',status);
			imgE.setAttribute('src',logo);
		};
		var cityDiv = document.createElement('div');
		cityDiv.style.display = 'none';
		cityDiv.setAttribute('class','citySelect');
		
		var citySelectDiv = null;
		var townComp = null;
		var countryComp = null;
		if(cityJson.type === 'province'){
			var cityDatas = {"cite":"请选择城市",'id' : 'city',
			"list":[{"text":'广州市',"value":'440100'},
				{"text":'阳江市',"value":'441700'},
				{"text":'惠州市',"value":'440500'},
				{"text":'韶关市',"value":'440700'}
			]};
			citySelectDiv = selectComp.init('85','34',cityDatas,changeCity);
		}else if(cityJson.type === 'city'){
			var towntDatas = {"cite":"请选择县区",'id' : 'town',
			"list":[{"text":'江城区',"value":'440100'},
				{"text":'阳春县',"value":'441700'},
				{"text":'阳东县',"value":'440500'},
				{"text":'阳西县',"value":'440700'}
			]};
			citySelectDiv = selectComp.init('85','34',towntDatas,changeTown);
		}else if(cityJson.type === 'town'){
			var countrytDatas = {"cite":"请选择城镇",'id' : 'country',
			"list":[{"text":'E镇',"value":'440100'},
				{"text":'F镇',"value":'441700'},
				{"text":'G镇',"value":'440500'},
				{"text":'H镇',"value":'440700'}
			]};
			citySelectDiv = selectComp.init('108','34',countrytDatas,changeCountry);
		}
		
		function changeCity(cityBack){
			console.info(cityBack);
			var townDatas = {"cite":"请选择县区",'id' : 'town',
				"list":[{"text":'阳东县',"value":'阳东县'},
					{"text":'阳西县',"value":'阳西县'},
					{"text":'江城区',"value":'江城区'},
					{"text":'阳春县',"value":'阳春县'}
				]};
			if(townComp){
				T(townComp).remove();
				townComp = null;
			}
			if(countryComp){
				T(countryComp).remove();
				countryComp = null;
			}
			townComp = selectComp.init('85','34',townDatas,changeTown);
			cityDiv.appendChild(townComp);
		}

		function changeTown(cBack){
			console.info(cBack);
			var selectCountryDatas = {"cite":"请选择镇街",'id' : 'town',
			"list":[{"text":'A镇',"value":'A镇'},
				{"text":'B镇',"value":'B镇'},
				{"text":'C镇',"value":'C镇'},
				{"text":'D镇',"value":'D镇'}
			]};
			if(countryComp){
				T(countryComp).remove();
				countryComp = null;
			}
			countryComp = selectComp.init('108','34',selectCountryDatas,changeCountry);
			cityDiv.appendChild(countryComp);
		}
		//选择镇事件
		function changeCountry(coBack){
			console.info(coBack);
		}
		
		var caseDiv = document.createElement('div');
		caseDiv.style.display = 'none';
		caseDiv.setAttribute('class','caseShow');
		
		var caseTitleDiv = document.createElement('div');
		var titleUl = document.createElement('ul');
		var titleLi = document.createElement('li');
		var numSpan = document.createElement('span');
		numSpan.style.width = '12%';
		numSpan.innerHTML = '序号';
		var idSpan = document.createElement('span');
		idSpan.style.width = '24%';
		idSpan.innerHTML = '预案编码';
		var nameSpan = document.createElement('span');
		nameSpan.style.width = '63%';
		nameSpan.innerHTML = '预案名称';
		titleLi.appendChild(numSpan);
		titleLi.appendChild(idSpan);
		titleLi.appendChild(nameSpan);
		titleUl.appendChild(titleLi);
		caseTitleDiv.appendChild(titleUl);
		caseDiv.appendChild(caseTitleDiv);
		
		// 加载可无限滚动加载的div内容框
		var scDatas = {"list":[
			{"num":"1","id":"001","text":"测试测试测试测试测试"},
			{"num":"2","id":"002","text":"测试测试测试测试测试"},
			{"num":"3","id":"003","text":"测试测试测试测试测试"},
			{"num":"4","id":"004","text":"测试测试测试测试测试"},
			{"num":"5","id":"005","text":"测试测试测试测试测试"},
			{"num":"6","id":"006","text":"测试测试测试测试测试"},
			{"num":"7","id":"007","text":"测试测试测试测试测试"},
			{"num":"8","id":"008","text":"测试测试测试测试测试"},
			{"num":"9","id":"009","text":"测试测试测试测试测试"},
			{"num":"10","id":"010","text":"测试测试测试测试测试"},
			{"num":"11","id":"011","text":"测试测试测试测试测试"}
		]};
		var sLArr = [];
		for(var sKey in scDatas.list){
			var tempSc = scDatas.list[sKey];
			var liE = document.createElement('li');
			liE.setAttribute('value',tempSc.id);
			liE.style.cursor = 'pointer';
			var spanO = document.createElement('span');
			spanO.style.width = '39px';
			spanO.innerHTML = tempSc.num;
			var spanT = document.createElement('span');
			spanT.style.width = '78px';
			spanT.innerHTML =tempSc.id;
			var spanTh = document.createElement('span');
			spanTh.style.width = '61%';
			spanTh.style.borderRight = '0px';
			spanTh.innerHTML = tempSc.text;
			liE.appendChild(spanO);
			liE.appendChild(spanT);
			liE.appendChild(spanTh);
			sLArr.push(liE);
		}
		var caseLoad = scroolLoadComp.init(sLArr,5,addCaseName);
		caseDiv.appendChild(caseLoad);
		cityDiv.appendChild(citySelectDiv);
		
		divE.appendChild(spanE);
		divE.appendChild(imgE);
		divE.appendChild(cityDiv);
		divE.appendChild(caseDiv);
		return divE;
	}
};