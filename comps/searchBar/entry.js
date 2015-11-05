//显示系统全局搜索栏
function showSysSearchBar(obj){
	var tools = new commonUtils(map);
	if($(obj).attr('val') === 'selected'){
		$(obj).attr('val','');
		searchBarComp.close();
		tools.clearPicMark();
		$(obj).children('i').hide();
		$(obj).removeClass('tl-li');
	}else{
		$(obj).attr('val','selected');
		$(obj).children('i').show();
		$(obj).addClass('tl-li');
		var searchDatas = {"tab":[{"title":"POI","value":"poi","warn":"请输入POI名称"},
	                  		{"title":"观测站","value":"site","warn":"请输入站点编号或名称"},
	                  		{"title":"灾害点","value":"demage","warn":"请输入灾害点名称或地址"},
	                  		{"title":"经纬度","value":"lonlat","warn":"请输入经纬度值，如：123.54;23.0...以\";\"号分隔",
	                  			"erroe":"经纬度数据格式错误"}],
	                  			"defaultSelect":"经纬度",
	                  			"button":"定位",
	                  			"backButton":"隐藏"};
		var searchComp = searchBarComp.init(searchDatas,searchBack,hideBack);
		document.body.appendChild(searchComp);
	}
	function hideBack(){
		tools.clearPicMark();
	}
	function searchBack(rDatas){
		tools.clearPicMark();
		var showInfo = '';
		var status = true;
		var item = searchBarComp.getSearchItem();
		if(rDatas.type === 'lonlat'){
			if((rDatas.value).indexOf(';') === -1){
				showInfo = '格式错误，缺少\";\"号';
			}else{
				var lonlat = (rDatas.value).split(';');
				if(lonlat.length === 2){
					if(lonlat[0] !== '' && lonlat[1] !== ''){
						if(isNaN(lonlat[0]) || isNaN(lonlat[1])){
							showInfo = '格式错误，经纬度必须为数字';
						}else if(lonlat[0]>180 || lonlat[0]<-180){
							showInfo = '格式错误，经度不正确';
						}else if(lonlat[1]>90 || lonlat[1]<-90){
							showInfo = '格式错误，纬度不正确';
						}else{
							status = false;
							var llPoint = rDatas.value.split(';');
							tools.moveMapTo('lonlat',llPoint[0],llPoint[1],map.getZoom(),true,true,'经纬度点：'+llPoint[0]+","+llPoint[1]);
						}
					}else{
						showInfo = '格式错误，经纬度不正确';
					}
				}else{
					showInfo = '格式错误，经纬度不正确';
				}
			}
			item.span.innerHTML = showInfo;
			if(status){
				item.input.value = '';
			}
		}else{
			searchRequest(rDatas,item);
		}
	}
	
	/**
	 * 搜索定位功能
	 * @param rDatas
	 */
	function searchRequest(rDatas,item){
		var searchValue = rDatas.value;
		searchValue = encodeURI(searchValue);
		var url = 'http://127.0.0.1/dss-data/poi/poi!searchSysPoint.action';
		var reqDatas = {'searchType':rDatas.type,'searchValue':searchValue};
		$.getJSON(url,reqDatas,function(bDatas){
			if(bDatas.length === 0){
				item.span.innerHTML = '无匹配结果,请使用其他关键字进行搜索定位';
			}else{
				var uData = bDatas[0];
				var type = uData.type;
				var pointTitle = uData.name;
				if(type === 'site'){
					type = '观测站：';
				}else if(type === 'demage'){
					type = '灾害点：';
				}else if(type === 'poi'){
					type = 'POI点：';
				}
				tools.moveMapTo(uData.type,uData.lon,uData.lat,map.getZoom(),true,true,type+pointTitle);
			}
		});
	}
}

