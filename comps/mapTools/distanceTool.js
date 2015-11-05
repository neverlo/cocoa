var distanceTool = {
	init : function(olMap){
		//建立多边形承载器
		var drawLayer = new OpenLayers.Layer.Vector("toolBarDraw", {
			styleMap: new OpenLayers.StyleMap({
		        "default": {
					fillColor: 'red',
					fillOpacity:'1',
					strokeColor: 'red',
					strokeWidth:'2',
					label:'${text}',
					graphicWidth: '12',
	        		graphicHeight: '12',
					graphicOpacity: 1,
//					externalGraphic: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAh0lEQVR4AWP4z0AQQSi8AFXRw4f/376Fss+fR1cEVaGo+N/YGKRu+/b/nJz/ExIwFN27919ODsRWVf3PwQFkgBT9+YPNOjExqGMjIyEq0BUBbYGYAUJGRkB7MRQdOwZ0B4gdGgq119gYw7pv3/57eEDcAbQXpG7+fHSTIOqAKhBsGCAhMAkjAOqCI1aTjBehAAAAAElFTkSuQmCC',
					labelYOffset:-20
				}
		    })
		});
		olMap.addLayers([drawLayer]);
		this.drawLayer = drawLayer;
		this.epsg = olMap.getProjectionObject().projCode;
		this.map = olMap;
		this.drawPath();
	},
	drawPath : function(){
		//工具默认样式
		var drawOptions =	{};
		var temporarystyle = OpenLayers.Util.applyDefaults({
			pointRadius: 6,
			label:'',
			fillColor:'red',
			strokeWidth: '2',
			labelYOffset:25,
		    strokeColor: 'red',
		    graphicName: 'circle'
		}, OpenLayers.Feature.Vector.style.temporary);
		this.drawLayer.styleMap.styles.temporary = new OpenLayers.Style(temporarystyle);
		this.initDraw(drawOptions,this.drawLayer,'LineString');
	},
	initDraw : function(drawOptions, drawLayer, drawType,layerType){
		var drawControls = {
			line: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.Path,{
				handlerOptions:drawOptions,
				callbacks : {
					point : function(cPoint){
						distanceTool.addPoint(cPoint);
						distanceTool.lineStatus = true;
						distanceTool.clickFeatureControl.deactivate();
					}
				},
				featureAdded:function(obj){//完成图形后的监听事件
					var allM = '总距离:' + (distanceTool.meter).toFixed(2) + '千米';
					obj.attributes = {
						'color' : '',
						'text' : '',
						'size' :'1',
						'strokeColor' :'red',
						'type' : 'line',
						'parent' : distanceTool.parentId
					};
					distanceTool.addCloseLogo(allM);
					drawLayer.redraw();
					distanceTool.lineStatus = false;
					delete distanceTool.meter;
					distanceTool.clickFeatureControl.activate();
				}
			})       
		};
		var polygon = '';
		if(drawType === 'LineString'){
			polygon = drawControls.line;
		}
		this.map.addControl(polygon);
		polygon.activate(); 
		this.polygon = polygon;
		
		//增加额外监听
		var clickFeatureControl = new (OpenLayers.Class(OpenLayers.Control, {
		    initialize: function(polygon,options) {
		        OpenLayers.Control.prototype.initialize.apply(this, [options]);
		        this.layer = polygon;
		        this.handler = new OpenLayers.Handler.Feature(this, polygon, {
						click:this.clickFeature
		            }
		        );
		    },
			clickFeature:function(feature){
				var fType = feature.attributes.type;
				var fParent = feature.attributes.parent;
				var reFeatures = [];
				if(fType === 'close'){
					var tempPoints = distanceTool.drawLayer.features;
					for(var key in tempPoints){
						if(tempPoints[key].attributes.parent === fParent){
							reFeatures.push(tempPoints[key]);
						}
					}
					distanceTool.drawLayer.removeFeatures(reFeatures);
				}
			}
		}))(drawLayer);
		this.clickFeatureControl = clickFeatureControl;
		map.addControl(clickFeatureControl);
//		clickFeatureControl.activate();
	},
	addCloseLogo : function(allM){
		var tempPoints = this.drawLayer.features;
		var tpLength = tempPoints.length - 2;
		var prePoints = tempPoints[tpLength];
		var point = new OpenLayers.Geometry.Point(prePoints.geometry.x,prePoints.geometry.y);
		var pointStyle = {
			'graphicWidth': '12',
    		'graphicHeight': '12',
			'graphicOpacity': 1,
			'externalGraphic': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAh0lEQVR4AWP4z0AQQSi8AFXRw4f/376Fss+fR1cEVaGo+N/YGKRu+/b/nJz/ExIwFN27919ODsRWVf3PwQFkgBT9+YPNOjExqGMjIyEq0BUBbYGYAUJGRkB7MRQdOwZ0B4gdGgq119gYw7pv3/57eEDcAbQXpG7+fHSTIOqAKhBsGCAhMAkjAOqCI1aTjBehAAAAAElFTkSuQmCC',
			'cursor' : 'pointer',
			'label' :allM,
			'labelYOffset':-20,
			'labelOutlineColor': "white",
			'labelOutlineWidth': 2,
		};
		var pointFeature = new OpenLayers.Feature.Vector(point,null, pointStyle);
		pointFeature.attributes = {
			"parent" : prePoints.attributes.parent,
			'type' : 'close'
		};
		(distanceTool.drawLayer).addFeatures([pointFeature]);
	},
	addPoint : function(pt){
		var point = new OpenLayers.Geometry.Point(pt.x,pt.y);
		var distance = '起点';
		if(distanceTool.lineStatus){
			var tempPoints = this.drawLayer.features;
			var tpLength = tempPoints.length - 1;
			if(tpLength >= 0){
				var prePoints = tempPoints[tpLength];
				pt = pt.transform(distanceTool.epsg,'EPSG:4326');
				var teLonLat = new OpenLayers.LonLat(prePoints.geometry.x,prePoints.geometry.y);
				teLonLat = teLonLat.transform(distanceTool.epsg,'EPSG:4326');
				distance = OpenLayers.Util.distVincenty({lon:pt.x,lat:pt.y},{lon:teLonLat.lon,lat:teLonLat.lat});
				distanceTool.recordPathMeter(distance);
				distance = distance.toFixed(2) + '千米';
			}
		}
		var pointStyle = { 
			fontColor: "#000",
			labelOutlineColor: "white",
			labelOutlineWidth: 2,
			labelAlign:'m',
			labelXOffset:15,
			labelYOffset:10,
			pointRadius: 4,
			fillColor:"white",
			strokeColor:"red",
			cursor : 'pointer',
			strokeWidth: 2,
			label:distance
		};
		var pointFeature = new OpenLayers.Feature.Vector(point,null, pointStyle);
		pointFeature.attributes = {
			"parent" : pt.parent.id,
			'type' : 'point'
		};
		this.parentId = pt.parent.id;
		this.drawLayer.addFeatures([pointFeature]);
	},
	remove : function(){
		if(typeof(this.polygon) !== 'undefined'){
			this.polygon.deactivate();
			this.clickFeatureControl.deactivate();
			this.map.removeLayer(this.drawLayer);
			delete this.drawLayer;
		}
	},
	recordPathMeter : function(distance){
		var tempDis = 0;
		if(typeof(distanceTool.meter) !== 'undefined'){
			tempDis = distanceTool.meter;
			distance += tempDis;
		}
		distanceTool.meter = distance;
	}
};