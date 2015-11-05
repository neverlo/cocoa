/**
 * 专题告警组件
 */
var warnComp = {
		init : function(jsondatas){
			var templateJson = {
				'name':'rainWarn',
				'alive':true,
				'datas':[{
					'imgUrl':'http://image1.png',//图片URL
					'warnTitle':'大暴雨',//提示文字
					'level':'red',//总有yellow,orange,red三级
					'name':'阳江阳西县：观测站',
					'telephone':'',
					'threshold':[50,100,180],//阈值
					'currentValue':'40',//当前雨量
					'unit':'m',//数据单位
					'lon':'120',//经度
					'lat':'23',//纬度
					'beTownName':'那龙镇',//站点所属镇名称
					'blTownCode':'441703001',//站点所属镇编码
					'dateTime':'20150101010000'
				}]
			};
			var parentE = document.createElement('div');
			parentE.setAttribute('class','LsBox');
			var closeA = document.createElement('a');
			closeA.setAttribute('class','LsBoxClose');
			parentE.appendChild(closeA);
			
			var ulBox = document.createElement('ul');
			ulBox.setAttribute('class','LsBox-con');
			parentE.appendChild(ulBox);
			var ulBoxLiL = document.createElement('li');
			ulBox.appendChild(ulBoxLiL);
			ulBoxLiL.setAttribute('class','LsBox-left');
			
			var ulBoxA = document.createElement('a');
			ulBoxLiL.appendChild(ulBoxA);
			ulBoxA.setAttribute('class','warn-icon');
			var ulBoxAImg = document.createElement('img');
			ulBoxAImg.setAttribute('src','<%=basePath%>/resources/img/trunk/now-inform-0.png');
			var ulBoxSpan = document.createElement('span');
			ulBoxSpan.innerHTML = '定位';
			ulBoxA.appendChild(ulBoxAImg);
			ulBoxA.appendChild(ulBoxSpan);
			
			var ulBoxDiv = document.createElement('div');
			ulBoxLiL.appendChild(ulBoxDiv);
			ulBoxDiv.setAttribute('class','dis-warn');
			var ulBoxDivP = document.createElement('p');
			var ulBoxDivSpan = document.createElement('span');
			ulBoxDivSpan.innerHTML = '大暴雨';
			ulBoxDivP.appendChild(ulBoxDivSpan);
			ulBoxDiv.appendChild(ulBoxDivP);
			
			var ulBoxLiR = document.createElement('li');
			ulBox.appendChild(ulBoxLiR);
			ulBoxLiR.setAttribute('class','LsBox-right');
			var ulBoxLiRP = document.createElement('p');
			ulBoxLiR.appendChild(ulBoxLiRP);
			ulBoxLiRP.setAttribute('class','LsBox-warn-title dis-warn-title');
			var ulBoxLiRPSpan = document.createElement('span');
			ulBoxLiRP.appendChild(ulBoxLiRPSpan);
			ulBoxLiRPSpan.innerHTML = '阳江阳西县：观测站';
			var ulBoxLiRPLabel = document.createElement('label');
			ulBoxLiRP.appendChild(ulBoxLiRPLabel);
			
			var ulBoxLiRDiv = document.createElement('div');
			ulBoxLiR.appendChild(ulBoxLiRDiv); 
			ulBoxLiRDiv.setAttribute('class','dis-level rain-lg');
			var ulBoxLiRDivSpan = document.createElement('span');
			ulBoxLiRDiv.appendChild(ulBoxLiRDivSpan); 
			ulBoxLiRDivSpan.innerHTML = '阈值:';
			
			var ulBoxLiRDivColor = document.createElement('div');
			ulBoxLiRDiv.appendChild(ulBoxLiRDivColor); 
			ulBoxLiRDivColor.setAttribute('class','dis-level-color');
			var ulBoxLiRDivY = document.createElement('div');
			ulBoxLiRDivColor.appendChild(ulBoxLiRDivY); 
			ulBoxLiRDivY.setAttribute('class','level-now yellow');
			ulBoxLiRDivY.style.left = '-10px';
			var ulBoxLiRDivYSp = document.createElement('span');
			ulBoxLiRDivY.appendChild(ulBoxLiRDivYSp); 
			ulBoxLiRDivYSp.innerHTML = '40';
			var ulBoxLiRDivYA = document.createElement('a');
			ulBoxLiRDivY.appendChild(ulBoxLiRDivYA); 
			
			var ulBoxLiRDivUl = document.createElement('ul');
			ulBoxLiRDivColor.appendChild(ulBoxLiRDivUl);
			var uli1 = document.createElement('li'); 
			uli1.setAttribute('class','level-0');
			var ulilabel1 = document.createElement('label');
			uli1.appendChild(ulilabel1);
			ulilabel1.innerHTML = '50';
			var uli2 = document.createElement('li'); 
			uli2.setAttribute('class','level-1');
			var ulilabel2 = document.createElement('label');
			uli2.appendChild(ulilabel2);
			ulilabel2.innerHTML = '300';
			var uli3 = document.createElement('li'); 
			uli3.setAttribute('class','level-2');
			ulBoxLiRDivUl.appendChild(uli1);
			ulBoxLiRDivUl.appendChild(uli2);
			ulBoxLiRDivUl.appendChild(uli3);
			
			var ulBoxLiRDivSpanU = document.createElement('span');
			ulBoxLiRDiv.appendChild(ulBoxLiRDivSpanU); 
			ulBoxLiRDivSpanU.innerHTML = 'mm';
			
			var buttonDiv = document.createElement('div');
			ulBoxLiR.appendChild(buttonDiv);
			buttonDiv.setAttribute('class','lg-data lga-color');
			var buttonDivMoreA = document.createElement('A');
			buttonDiv.appendChild(buttonDivMoreA);
			buttonDivMoreA.innerHTML = '详情';
			var buttonDivSendA = document.createElement('A');
			buttonDiv.appendChild(buttonDivSendA);
			buttonDivSendA.innerHTML = '发布';
			this.parentE = parentE;
			return parentE;
		},
		close : function(){
			if(T(this.parentE).alive()){
				T(this.parentE).remove();
				delete this.parentE;
			}
		}
};