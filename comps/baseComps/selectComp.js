/**
 * 使用div模拟的下拉框组件
 * divWidth:下拉框的宽度
 * jsonDatas:= {"title":"灾害类型：", "cite":"请选择类型", 'id' : 'type',
      "defaultCheck" : "",
      "list":[{"text":"显示的值","value":"值对应的属性值"}]};
 *    title:标签名称   cite:默认显示的文字 defaultCheck：默认选中项，对应value值
 * callBack:用户选择下拉框内容时触发的回调函数，返回当前选中项数据
 * ------example------
 * var selectDiv = selectComp.init('100',jsonDatas,callBack);
 * CC(focusId).addComps([selectDiv]);
 * ps:focusId : 需要将组件添加到的div的id值
 */
var selectComp = {
      init : function(divWidth,jsonDatas,callBack){
            var divNWidth = parseInt(divWidth) + 36;
            var ulWidth = parseInt(divWidth) + 34;
            var divE = CC().CDE('div');
            divE.style.width = divNWidth + 'px';
            divE.style.position = 'relative';
            divE.style.zIndex = '10000';
            divE.style.margin = '0';
            divE.style.padding = '0';
            divE.style.fontSize = '13px';
            var citeE = CC().CDE('cite');
            citeE.innerHTML = jsonDatas.cite;
            citeE.style.width = divWidth + 'px';
            citeE.style.height = '24px';
            citeE.style.lineHeight = '24px';
            citeE.style.display = 'block';
            citeE.style.color = '#807a62';
            citeE.style.cursor = 'pointer';
            citeE.style.fontStyle = 'normal';
            citeE.style.paddingLeft = '4px';
            citeE.style.paddingRight = '30px';
            citeE.style.border ='1px solid #333';
            citeE.style.overflowX = 'hidden';
            citeE.style.background = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAMAAABcOc2zAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAJUExURXt7e3p6ev////MnDfwAAAADdFJOU///ANfKDUEAAAAiSURBVHjaYmBCAwzUEWCAACQVyHyIFgYGRjQzGCiyFiDAAI3WAWIk9jYnAAAAAElFTkSuQmCC) no-repeat right center';
            var ulE = CC().CDE('ul');
            ulE.style.maxHeight = '193px';
            ulE.style.overflowY = 'scroll';
            citeE.onclick = function(ce){
                  ce.stopPropagation(ce);
                  if(ulE.style.display === 'none'){
                        ulE.style.display = 'block';
                  }else{
                        ulE.style.display = 'none';
                  }
            };
            document.body.onclick = function(dObj){
                  ulE.style.display = 'none';
            };
            ulE.style.margin ='-1px 0px 0px';
            ulE.style.padding = '0px';
            ulE.style.fontSize = '13px';
            ulE.style.width = ulWidth + 'px';
            ulE.style.border = '1px solid #333333';
            ulE.style.position = 'absolute';
            ulE.style.zIndex = '20000';
            ulE.style.display = 'none';
            ulE.style.backgroundColor = '#ffffff'; 
            var listDatas = jsonDatas.list;
            var defaultValue = '';
            var defaultText = '';
            for(var key in listDatas){
                  var liE = CC().CDE('li');
                  liE.style.height = '24px';
                  liE.style.lineHeight = '24px';
                  liE.style.listStyle = 'none';
                  liE.style.margin = '0px';
                  liE.style.padding = '0px';
                  liE.style.fontSize = '13px';
                  liE.style.width = '100%';
                  var liAE = CC().CDE('span');
                  liAE.setAttribute('value',listDatas[key].value);
                  liAE.innerHTML = listDatas[key].text;
                  liAE.style.background = '#fff';
                  liAE.style.display = 'block';
                  liAE.style.height = '24px';
                  liAE.style.color = '#333';
                  liAE.style.textDecoration = 'none';
                  liAE.style.paddingLeft = '10px';
                  liAE.style.paddingRight = '10px';
                  liE.appendChild(liAE);
                  ulE.appendChild(liE);
                  if(typeof(jsonDatas.defaultCheck) !== 'undefined'){
                        if(jsonDatas.defaultCheck !== ''){
                              if(jsonDatas.defaultCheck === listDatas[key].value){
                              citeE.innerHTML = listDatas[key].text;
                              defaultValue = listDatas[key].value;
                              defaultText = listDatas[key].text;
                        }
                        } 
                  }
            }
            CC(ulE).mouseover(function(uObj){
                  var targetObj = CC(uObj).getEventTarget();
                  if(targetObj.nodeName === 'SPAN'){
                        targetObj.style.background = '#ccc';
                  }
            }).mouseout(function(uObj){
                  var targetObj = CC(uObj).getEventTarget();
                  if(targetObj.nodeName === 'SPAN'){
                        targetObj.style.background = '#fff';
                  }
            }).click(function(uObj){
                  var nodeName = CC(uObj).getEventTarget().nodeName;
                  if(nodeName === 'SPAN'){
                        ulE.style.display = 'none';
                        var aValue = CC(uObj.target).CAT().value.value;
                        var aText = uObj.target.innerHTML;
                        citeE.innerHTML = aText;
                        var rDatas = {
                              'value' : aValue,
                              'text' : aText
                        };
                        var nObj = new Object({});
                        nObj.id = jsonDatas.id;
                        nObj.value = aValue;
                        nObj.text = aText;
                        CC(divE).CAT().tempdatas = CC(CC(divE).CAT().tempdatas).compRecord('select'+jsonDatas.id,nObj);
                        if(callBack){
                              return callBack(rDatas);
                        }
                  } 
            });
            var initObj = new Object({});
            var mapId = 'select'+jsonDatas.id;
            initObj.id = jsonDatas.id;
            initObj.value = defaultValue;
            initObj.text = defaultText;
            divE.appendChild(citeE);
            divE.appendChild(ulE);
            if(typeof(jsonDatas.title) !== 'undefined'){
                  var titDiv = CC().CDE('div');
                  CC(titDiv).setClass('marTpad');
                  titDiv.style.display = 'inline-block';
                  var labelE = CC().CDE('label');
                  CC(labelE).setClass('marR10');
                  labelE.style.float = 'left';
                  labelE.innerHTML = jsonDatas.title;
                  divE.style.float = 'left';
                  titDiv.appendChild(labelE);
                  titDiv.appendChild(divE);
                  divE = titDiv;
            }else{
                  divE.style.float = 'left';
            }
            CC(divE).CAT().tempdatas = CC(CC(divE).CAT().tempdatas).compRecord(mapId,initObj);
            return divE;
      }
};