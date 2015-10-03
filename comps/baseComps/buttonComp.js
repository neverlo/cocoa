/**
 * 按钮组件，用于自动生成按钮
 * --默认绑定点击事件，回调函数返回用户当前点击的按钮
 * jsonDatas: = {"list":[{"value":"reset","text":"重置"},
 * 								{"value":"send","text":"发送"}]};
 * className:按钮的样式，定义在baseComps.css
 * callback:接收按钮状态的回调函数
 * ------example------
 * var btn = buttonComp.init(btnDatas,'tempTarget-btn');
 */
var buttonComp = {
	init : function(jsonDatas,className,callback){
		var btnDiv = T().CDE('div');
		T(btnDiv).setClass(className);
		var btnDatas = jsonDatas.list;
		for(var key in btnDatas){
			var btnE = T().CDE('button');
			btnE.setAttribute('value',btnDatas[key].value);
			btnE.innerHTML = btnDatas[key].text;
			btnDiv.appendChild(btnE);
		}
		if(callback){
			T(btnDiv).click(function(iObj){
				return callback(T(iObj).getEventTarget(iObj).attributes.value.value);
			});
		}
		return btnDiv;
	}
};