#introduce#
这是一个`javascript`库，与现在流行的各种框架不同的地方，在某些情况下，我并不希望写过多的`html`代码，然后基于`html`去做扩展。我希望通过完善`javascript`模块，使开发人员不再需要去处理各种烦锁的dom操作，更专注去处理业务的工作。
#example#
```js
//初始化一个下拉框组件，并传入回调函数用于接收选择下拉项时获取返回值
var jsonDatas = {...};
//A:创建组件
var selectDiv = selectComp.init('100',jsonDatas,callBack);
//使用cocoa内的方法将组件添加到id=focusId的元素中
cocoa.addComps(focusId,[selectDiv]);
```
