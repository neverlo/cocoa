var browerVComp = {
	init : function(callback){
		   var parentE = document.createElement('div');
		   parentE.setAttribute('class','version-box');
		   var titleE = document.createElement('div');
		   titleE.setAttribute('class','bvDivTitle-1');
		   var titleSpan = document.createElement('span');
		   titleSpan.innerHTML = '版本推荐';
		   var titleP = document.createElement('p');
		   titleE.appendChild(titleSpan);
		   titleE.appendChild(titleP);
		   titleP.setAttribute('class','bvclose');
		   titleP.onclick = function(){
			   browerVComp.close();
			   if(callback){
					return callback(true);
				}
		   };
		   var contentE = document.createElement('div');
		   contentE.setAttribute('class','version-con');
		   parentE.appendChild(titleE);
		   parentE.appendChild(contentE);
		   var iconE = document.createElement('div');
		   iconE.setAttribute('class','vesion-left');
		   var imgE = document.createElement('img');
		   iconE.appendChild(imgE);
		   var inDivE = document.createElement('div');
		   inDivE.setAttribute('class','vesion-right');
		    var clearDivE = document.createElement('div');
		   clearDivE.setAttribute('class','clear');
		   contentE.appendChild(iconE);
		   contentE.appendChild(inDivE);
		   contentE.appendChild(clearDivE);
		   var bpE = document.createElement('p');
		   bpE.setAttribute('class','version-title');
		   bpE.innerHTML = '浏览器版本推荐';
		   var listDivE = document.createElement('div');
		   listDivE.setAttribute('class','version-option');
		    inDivE.appendChild(bpE);
		   inDivE.appendChild(listDivE);
		   var ulE = document.createElement('ul');
		   listDivE.appendChild(ulE);
		   var liE1 = document.createElement('li');
		   liE1.innerHTML = 'IE10及以上版本';
		   var liE2 = document.createElement('li');
		   liE2.innerHTML = '火狐38.0.1及以上版本';
		   var liE3 = document.createElement('li');
		   liE3.innerHTML = '谷歌42.0.2311.152及以上版本';
		   var liE4 = document.createElement('li');
		   liE4.innerHTML = '360安全浏览器7.1.1及以上版本';
		   var liE5 = document.createElement('li');
		   liE5.innerHTML = '360极速浏览器7.5.3.318及以上版本';
		   ulE.appendChild(liE1);
		   ulE.appendChild(liE2);
		   ulE.appendChild(liE3);
		   ulE.appendChild(liE4);
		   ulE.appendChild(liE5);
		   imgE.setAttribute('src','');
		   document.body.appendChild(parentE);
		   this.parentE = parentE;
	},
	close : function(){
		if(typeof(this.parentE) !== 'undefined'){
			T(this.parentE).remove();
		}
	}
};