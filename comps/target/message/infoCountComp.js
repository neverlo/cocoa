// 统计分析模块
var infoCountComp = {
    init:function(boundsPoints){
        var parentE = T().CDE('div');
        T(parentE).setClass('infoCount marTpad');
        var labE = T().CDE('label');
        parentE.appendChild(labE);
        T(labE).setClass('infoCC-lable marR10');
        labE.innerHTML = '统计分析：';
        var boxD = T().CDE('div');
        T(boxD).setClass('infoCC-box');
        var infoUl = T().CDE('ul');
        T(infoUl).setClass('infoCC-ul');
        
        var pLi = T().CDE('li');
        T(pLi).setClass('infoCC-ul-li');
        pLi.innerHTML = '责任人-';
        var pSpan = T().CDE('span');
        pSpan.style.color = 'red';
        pLi.appendChild(pSpan);
        
        var tLi = T().CDE('li');
        T(tLi).setClass('infoCC-ul-li');
        tLi.innerHTML = '大喇叭-';
        var tSpan = T().CDE('span');
        tSpan.style.color = 'red';
        tLi.appendChild(tSpan);
        
        var lLi = T().CDE('li');
        T(lLi).setClass('infoCC-ul-li');
        lLi.innerHTML = 'LED显示屏-';
        var lSpan = T().CDE('span');
        lSpan.style.color = 'red';
        lLi.appendChild(lSpan);
        
        var gLi = T().CDE('li');
        T(gLi).setClass('infoCC-ul-li');
        gLi.innerHTML = 'GDP-';
        var gSpan = T().CDE('span');
        gSpan.style.color = 'red';
        gLi.appendChild(gSpan);
        
        var poLi = T().CDE('li');
        T(poLi).setClass('infoCC-ul-li');
        poLi.innerHTML = '人口-';
        var poSpan = T().CDE('span');
        poSpan.style.color = 'red';
        poLi.appendChild(poSpan);
        
        infoUl.appendChild(pLi);
        infoUl.appendChild(tLi);
        infoUl.appendChild(lLi);
        infoUl.appendChild(gLi);
        infoUl.appendChild(poLi);
        boxD.appendChild(infoUl);
        parentE.appendChild(boxD);
        
        //更新组件数据
        var url = 'http://127.0.0.1/dss-data/poi/poi!getPoiCount.action';
        var reqDatas = {'geomtry':tempDrawPolyGon};
    	$.ajax({type:"POST",url:url,data:reqDatas,success:function(rDatas){
    		var user = typeof(rDatas.SMS_USER) === 'undefined' ? '0' : rDatas.SMS_USER;
    		var tyfon = typeof(rDatas.TYFON) === 'undefined' ? '0' : rDatas.TYFON;
    		var lcd_led = typeof(rDatas.LCD_LED) === 'undefined' ? '0' : rDatas.LCD_LED;
    		var gdp = typeof(rDatas.gdp) === 'undefined' ? '0' : rDatas.gdp;
    		var population = typeof(rDatas.population) === 'undefined' ? '0' : rDatas.population;
    		 pSpan.innerHTML = user+'人';
             tSpan.innerHTML = tyfon+'个';
             lSpan.innerHTML = lcd_led+'个';
             gSpan.innerHTML = gdp;
             poSpan.innerHTML = population+'人';
    	}});
        return parentE;
    }
};