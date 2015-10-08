// 统计分析模块
var infoCountComp = {
    init:function(){
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
        // pSpan.innerHTML = jsonDatas.people;
        pLi.appendChild(pSpan);
        
        var tLi = T().CDE('li');
        T(tLi).setClass('infoCC-ul-li');
        tLi.innerHTML = '大喇叭-';
        var tSpan = T().CDE('span');
        tSpan.style.color = 'red';
        // tSpan.innerHTML = jsonDatas.TYF;
        tLi.appendChild(tSpan);
        
        var lLi = T().CDE('li');
        T(lLi).setClass('infoCC-ul-li');
        lLi.innerHTML = 'LED显示屏-';
        var lSpan = T().CDE('span');
        lSpan.style.color = 'red';
        // lSpan.innerHTML = jsonDatas.LED;
        lLi.appendChild(lSpan);
        
        infoUl.appendChild(pLi);
        infoUl.appendChild(tLi);
        infoUl.appendChild(lLi);
        boxD.appendChild(infoUl);
        parentE.appendChild(boxD);
        
        //更新组件数据
        var url = 'http://127.0.0.1:8080/dss-data/poi/poi!getPoiCount.action';
        $.getJSON(url,null,function(rDatas){
            pSpan.innerHTML = rDatas.people;
            tSpan.innerHTML = rDatas.TFY;
            lSpan.innerHTML = rDatas.LED;
        });
        return parentE;
    }
};