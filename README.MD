<h2>说明</h2>
<div>这是一个javascript库，与现在流行的各种框架不同的地方，在某些情况下，我并不希望写过多的html代码，然后基于html去做扩展。我希望通过完善javascript模块，使开发人员不再需要去处理各种烦锁的dom操作，更专注去处理业务的工作。</div>
<h2>example</h2>
  //初始化一个下拉框组件，并传入回调函数用于接收选择下拉项时获取返回值
  var jsonDatas = {...};
  //A:创建组件
  var selectDiv = selectComp.init('100',jsonDatas,callBack);
  //使用cocoa内的方法将组件添加到id=focusId的元素中
  cocoa.addComps(focusId,[selectDiv]);
