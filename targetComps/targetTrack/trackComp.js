var trackComp = {
	init : function(jsonDatas){
		var parentE = document.createElement('div');
		parentE.hidden = true;
		parentE.setAttribute('class','inforTracking-box');
		var ulE = document.createElement('ul');
		var dataList = jsonDatas.list;
		var tempInVal = {};
		for(var key in dataList){
			var liE = document.createElement('li');
			liE.innerText = dataList[key].text;
			var spanE = document.createElement('span');
			spanE.innerText = dataList[key].value;
			liE.appendChild(spanE);
			if(dataList[key].text === '日期：'){
				var statusE = document.createElement('span');
				statusE.style.color = 'red';
				liE.appendChild(statusE);
				
				var intervals = {};
				tempInVal[jsonDatas.id] = parentE;
				parentE.belongsChild = statusE;
				statusE.attributes.msg = jsonDatas.msg;
				statusE.attributes.msgId = jsonDatas.id;
				statusE.attributes.status = jsonDatas.status;
				this.compsRecord = compTools.compRecord(this.compsRecord,jsonDatas.id,parentE);
			}
			ulE.appendChild(liE);
		}
		if(typeof(this.intervals) !== 'undefined'){
			clearInterval(this.intervals);
		}
		var parInterval = setInterval(function(){
			for(var bKey in trackComp.compsRecord){
				if(!trackComp.compsRecord[bKey].hidden){
					var comspChild = trackComp.compsRecord[bKey].belongsChild;
					if(comspChild.attributes.status === '0'){
						console.info(comspChild.attributes.msg);
						comspChild.innerText = comspChild.attributes.msg;
					}
				}
			}
		},2000);
		parentE.appendChild(ulE);
		this.intervals = parInterval;
		return parentE;
	},
	initTrackStatus : function(reqArrComps){
		for(var bKey in reqArrComps){
				console.info(!reqArrComps[bKey].hidden);
		}
		trackComp.compsRecord = reqArrComps;
	},
	clearTrackInterval : function(){
		clearInterval(this.intervals);
	}
};