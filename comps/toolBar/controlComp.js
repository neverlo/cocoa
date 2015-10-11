var controlComp={
	init : function(logoList,backEvent){
        var jsonDatas = [{
			'title':'编辑预案图','value':'edit','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAnUlEQVR4AWOgOZh2P6oeiHPI0ZgDxP+huJ4UjdFA/A+sEYEnAzEjIY1+QPwbrAETR+LT6ADEX3FonIWwGVOjIRB/wKFxDRAz49KoAsSvcGjcC8RsuDTKAPFjHBpPADEXLo3cQHwNh8ZLQCxMKHSLsETLXZCL8GtEKE4E4j9Q9ktQGBBMDGi2BUA16hKXkjD9yYMQx8TompdhGklYMwBiAQ1E1n946wAAAABJRU5ErkJggg=='
		},{
			'title':'预案另存为','value':'save','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAO0lEQVR4AWMo6jz7nxTMgAxAAqRiqD5GuGYkQLQBZGhGYMo1o2P6ayYCYNVMtF+BALdmPICgZgJ41GYAyb+iHtR8EtgAAAAASUVORK5CYII='
		}];
		return drawComp.createLogo(jsonDatas,logoList,backEvent);
	}	
};