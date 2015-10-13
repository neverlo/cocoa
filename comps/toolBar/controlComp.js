var controlComp={
	init : function(logoList,backEvent){
        var jsonDatas = [{
			'title':'切换画笔模式','sTitle':'取消画笔模式','value':'pen','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAnUlEQVR4AWOgOZh2P6oeiHPI0ZgDxP+huJ4UjdFA/A+sEYEnAzEjIY1+QPwbrAETR+LT6ADEX3FonIWwGVOjIRB/wKFxDRAz49KoAsSvcGjcC8RsuDTKAPFjHBpPADEXLo3cQHwNh8ZLQCxMKHSLsETLXZCL8GtEKE4E4j9Q9ktQGBBMDGi2BUA16hKXkjD9yYMQx8TompdhGklYMwBiAQ1E1n946wAAAABJRU5ErkJggg=='
		},{
			'title':'撤销','sTitle':'撤销','value':'undo','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAi0lEQVR4AWPABmIu/GcG4v8MJAGE5k0gzeRoPA/SCMKkanwM0gTDpGj8DNeIwD+B+CWU3YVNUw4Q/4FrIIwXAzEXTHMDSJBEPB3FBSRqfg/SQ8iAaUC8H4hfo4n/xRpw+EIbyZAnOEMej+ZOqNxqvFGHQ3MmTJwczaVA/BCI2XDpI+QdP3IzTDwyHwDekBjYsibW8QAAAABJRU5ErkJggg=='
		},{
			'title':'新增预案','sTitle':'新增预案','value':'add','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAIElEQVR4AWOgCYi58P8/CI9qxqGQFEyZZjxgNKoGJQAAXkmLOVqD5tkAAAAASUVORK5CYII='
		},{
			'title':'删除当前预案','sTitle':'删除当前预案','value':'delete','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAPElEQVR4AWOgCoi58P8/CJMkj5BAYJLkERIITEiOoAH4NJJsAMGAw6eRdpqp6l+yQxqfHEWJhKLkOfAAAO/HIyhTHziTAAAAAElFTkSuQmCC'
		},{
			'title':'预案另存为','sTitle':'预案另存为','value':'save','logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAO0lEQVR4AWMo6jz7nxTMgAxAAqRiqD5GuGYkQLQBZGhGYMo1o2P6ayYCYNVMtF+BALdmPICgZgJ41GYAyb+iHtR8EtgAAAAASUVORK5CYII='
		}];
		return drawComp.createLogo(jsonDatas,logoList,backEvent);
	}	
};