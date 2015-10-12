var mapComp = {
	buildMap : function(divId){
		var map = new OpenLayers.Map(divId,{controls:[]});
		this.map = map;
		var mapWms = new OpenLayers.Layer.WMS(
			'basicMap',
			'http://vmap0.tiles.osgeo.org/wms/vmap0',
			{layers:'basic'},{}
		);
		map.addControl(new OpenLayers.Control.Navigation({documentDrag: true}));
		map.addLayer(mapWms);
		map.setCenter(new OpenLayers.LonLat(120,20),5);
		this.initDrawLayer();//初始画图图层
		// this.drawPolygon();
	},
	getMap : function(){
		return this.map;
	},
	initDrawLayer : function(){
		//建立多边形承载器
		var drawLayer = new OpenLayers.Layer.Vector("toolBarDraw", {
			styleMap: new OpenLayers.StyleMap({
		        default: {
					fillColor: '${color}',
					fillOpacity:'1',
					strokeColor: 'blue',
					strokeWidth:'${size}',
					label:'${text}'
				}
		    })
		});
		this.map.addLayer(drawLayer);
		this.drawLayer = drawLayer;
	},
	drawPolygon : function(layerSize,layerColor){
		//工具默认样式
		var drawOptions =	{
				'label':'画多边形',
				'labelXOffset':'70',
				'labelYOffset':'-12',
				'strokeColor': '#FF0000',
				'strokeOpacity': 1,
				'strokeWidth': 2,
				'fillColor': '#FF0000',
				'fillOpacity': 0.5,
				'pointRadius': 6
		};
		this.layerSize = layerSize;
		this.layerColor = layerColor;
		this.initDraw(drawOptions,this.drawLayer,'Polygon');
	},
	setLayerPro : function(layerSize,layerColor){
		this.layerSize = layerSize;
		this.layerColor = layerColor;
	},
	initDraw : function(drawOptions, drawLayer, drawType){
		var map = this.getMap();
		var drawControls = {
            point: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.Point,{
				handlerOptions:drawOptions,
				featureAdded:function(obj){//完成图形后的监听事件
					console.info("finished");			
					obj.attributes={
						key:'llllll'
					};	
					// obj.layer.styleMap.styles.default.defaultStyle.label = '';
					// drawLayer.redraw();
					polygon.handlerOptions.label = '';
					dragControl.activate();
					clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
				
					var pLonLat = new OpenLayers.LonLat(obj.geometry.x,obj.geometry.y);
					var pixel = this.map.getPixelFromLonLat(pLonLat);
					//创建显示框DIV
					var contentDiv = document.createElement('div');
					contentDiv.setAttribute('id','pointText');
					contentDiv.style.width='auto';
					contentDiv.style.height='auto';
					contentDiv.style.position='absolute';
					contentDiv.style.left=pixel.x;
					contentDiv.style.top=pixel.y+25;
					contentDiv.style.zIndex="999";
					contentDiv.innerHTML="<div>输入名称<input id='textVal' type='text'><input id='textSure' type='button' value='确定'/></div>";
					document.body.appendChild(contentDiv);
					var teDiv = document.getElementById('textSure');
					if(teDiv){//为输入框添加事件
						teDiv.onclick=function(){
							var reDiv = document.getElementById('pointText');
							if(reDiv){
								var contentVal = document.getElementById('textVal').value;
								obj.attributes={
									key:contentVal
								};
								//改变标注点文本
								// obj.layer.styleMap.styles.default.defaultStyle.label = contentVal;
								// drawLayer.redraw();
								
								reDiv.parentNode.removeChild(reDiv);
							}
						};
					}
				}
			}),        
            line: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.Path,{
				handlerOptions:drawOptions,
				featureAdded:function(obj){//完成图形后的监听事件
					console.info("finished");
					polygon.handlerOptions.label = '';
					dragControl.activate();
					clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
				}
			}),       
            polygon: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.Polygon,{
				handlerOptions:drawOptions,
				featureAdded:function(obj){//完成图形后的监听事件
					console.info("finished");
					polygon.handlerOptions.label = '';
					obj.attributes = {
						'color' : mapComp.layerColor,
						'text' : '',
						'size' : mapComp.layerSize
					};
					drawLayer.redraw();
					dragControl.activate();
					clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
					// dragControl.activate();
					// clickFeatureControl.activate();
				}
			}),
			RegularPolygon: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.RegularPolygon,{
				handlerOptions:drawOptions,
				featureAdded:function(obj){//完成图形后的监听事件
					console.info("finished");
					polygon.handlerOptions.label = '';
					dragControl.activate();
					clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
				}
			})
        };
		var polygon = '';
		if(drawType === 'Polygon'){
			polygon = drawControls.polygon;
		}else if(drawType === 'LineString'){
			polygon = drawControls.line;
		}else if(drawType === 'Point'){
			polygon = drawControls.point;
		}else if(drawType === 'RegularPolygon'){
			polygon = drawControls.RegularPolygon;
		}
		
		polygon.handler.callbacks.point = function(pt){
       		console.log(pt);
	    };
		this.layerHandler = polygon;
		map.addControl(polygon);
		polygon.activate();

		// var polygon = new OpenLayers.Control.DrawFeature(drawLayer, OpenLayers.Handler.Polygon,drawOptions);
		// map.addControl(polygon);
		// polygon.activate();    
		
		//添加可拖动监听
		var dragType = 'OpenLayers.Geometry.'+drawType;
		if(drawType === 'RegularPolygon'){
			dragType = 'OpenLayers.Geometry.Polygon';
		}
		var dragControl = new OpenLayers.Control.DragFeature(drawLayer, {
		    geometryTypes: [dragType],
		    onEnter: function(obj) {
				console.info("enter");
				clickFeatureControl.activate();
				polygon.handlerOptions.label = '双击删除';
		    },
		    onLeave: function(obj) {
				console.info("out");
				polygon.handlerOptions.label = '';
		    }
		});
		this.dragControl = dragControl;
		map.addControl(dragControl);
		dragControl.activate();
		
		//增加额外监听
		var clickFeatureControl = new (OpenLayers.Class(OpenLayers.Control, {
		    initialize: function(polygon, options) {
		        OpenLayers.Control.prototype.initialize.apply(this, [options]);
		        this.layer = polygon;
		        this.handler = new OpenLayers.Handler.Feature(
		            this, polygon, {
		                dblclick: this.dbClickFeature,
						click:this.clickFeature
		            }
		        );
		    },
		    dbClickFeature: function(feature) {
				console.info("dbClick");
				drawLayer.removeFeatures([feature]);
				dragControl.deactivate();
				clickFeatureControl.activate();
				polygon.handlerOptions.label = '';
				// this.map.viewPortDiv.innerHTML='';
				// this.map.viewPortDiv.outerHTML='';
				// (this.map.getLayersByName('OpenLayers.Handler.'+drawType))[0].removeAllFeatures();
				// (this.map.getLayersByName(drawType))[0].removeAllFeatures();
		    },
			clickFeature:function(feature){
				console.info("click2");
			}
		}))(drawLayer);
		this.clickFeatureControl = clickFeatureControl;
		map.addControl(clickFeatureControl);
		clickFeatureControl.activate();
	},
	clearHander : function(){//取消作图
		this.layerHandler.deactivate();
		this.dragControl.deactivate();
		this.clickFeatureControl.deactivate();
	}
};