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
		        "default": {
					fillColor: '${color}',
					fillOpacity:'0.5',
					strokeColor: '${strokeColor}',
					strokeWidth:'${size}',
					label:'${text}',
					graphicWidth: '${size}',
	        		graphicHeight: '${size}',
					graphicOpacity: 1,
					externalGraphic: '${logo}',
					labelYOffset:-20
				}
		    })
		});
		this.map.addLayer(drawLayer);
		this.drawLayer = drawLayer;
		var logoList = {
			"1":{"#ed3f2b":{"logo":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABcElEQVR4AZWSA2ylURSE10awthmsbcRatI0aq3Ea1G6MRi+obdu2bdu2Ts88/ihPMj/ufHO9T1iXXSoPsPRZ0axB1or6HY12+EJeGLzMyr3t00CG2SNkkDtJn1In6X3yOD2P6ie0wwcnDR5nVT8N7SJF0zw5Nc7R57QpmeCDAy8M2zwIaCWjkhlyb5un90ljdMe3ia66VeNN7/gfYQgceGG46U38CBmXz9L39CkONAIwZ53C+7ZPozb8Jn6YwAvDq1ifBuARARxRe6euuFZpPebgrQnDPe8SR7XAXd8mzcgn8cZMNB5z8HqFYcWTkE4tgDXfVa8Z7/eCNYMDLwxf46kNv4obArCl3iSMEHNjzF+RHtfva+41q8JRhPrA533Ds3adub9bXRRTXAbh5kH4v+2tvCSO4LYK72eFPQhsFYXv+TUj6At/33bFwAlWgWYDHwW1I5imObodi8GzrOq7fk0IVuF/314KO8pKYJ3fitkALc6Dqqd/prcAAAAASUVORK5CYII="}}
		};
		this.logoList = logoList;
	},
	getDrawLayer : function(){
		return this.drawLayer;
	},
	removeLasFeature : function(){
		var featureList = this.drawLayer.features;
		this.drawLayer.removeFeatures([featureList[featureList.length-1]]);
	},
	drawPolygon : function(layerSize,layerColor){
		//工具默认样式
		var drawOptions =	{
			'freehand':false
		};
		var temporarystyle = OpenLayers.Util.applyDefaults({
			pointRadius: 6,
			label:'',
			fillColor:layerColor,
			strokeWidth: layerSize,
			labelYOffset:25,
		    strokeColor: 'blue',
		    graphicName: 'square'
		}, OpenLayers.Feature.Vector.style.temporary);
		this.layerSize = layerSize;
		this.layerColor = layerColor;
		this.drawLayer.styleMap.styles.temporary = new OpenLayers.Style(temporarystyle);
		this.initDraw(drawOptions,this.drawLayer,'Polygon','polygon');
	},
	drawPath : function(layerSize,layerColor,lineType){
		//工具默认样式
		var drawOptions =	{
			'freehand':false
		};
		var temporarystyle = OpenLayers.Util.applyDefaults({
			pointRadius: 6,
			label:'',
			fillColor:layerColor,
			strokeWidth: layerSize,
			labelYOffset:25,
		    strokeColor: 'blue',
		    graphicName: 'square'
		}, OpenLayers.Feature.Vector.style.temporary);
		this.layerSize = layerSize;
		this.layerColor = layerColor;
		this.drawLayer.styleMap.styles.temporary = new OpenLayers.Style(temporarystyle);
		this.initDraw(drawOptions,this.drawLayer,'LineString',lineType);
	},
	drawPoint : function(layerSize,layerColor){
		//工具默认样式
		var size = layerSize*15;
		var drawOptions =	{
			'graphicWidth': size,
			'graphicHeight': size,
			'pointRadius': 6
		};
		var cLogo = mapComp.getPointLogo(layerSize,layerColor);
		var temporarystyle = OpenLayers.Util.applyDefaults({
			pointRadius: 6,
			label:'',
			graphicWidth: size,
			graphicHeight: size,
			labelYOffset:25,
			graphicOpacity: 1,
			externalGraphic: cLogo
		}, OpenLayers.Feature.Vector.style.temporary);
		this.layerSize = layerSize;
		this.layerColor = layerColor;
		this.drawLayer.styleMap.styles.temporary = new OpenLayers.Style(temporarystyle);
		this.initDraw(drawOptions,this.drawLayer,'Point','point');
	},
	drawRegularPolygon : function(layerSize,layerColor,drawType){
		var sides = 0;
		if(drawType === 'RegularPolygon'){
			sides = 4;
		}else if(drawType === 'circle'){
			sides = 50;
		}
		var drawOptions =	{
			'sides':sides,
			'irregular': false
		};
		var temporarystyle = OpenLayers.Util.applyDefaults({
			pointRadius: 6,
			label:'',
			fillColor:layerColor,
			strokeWidth: layerSize,
			labelYOffset:25,
		    strokeColor: 'blue',
		    // graphicName: 'circle'
		}, OpenLayers.Feature.Vector.style.temporary);
		this.layerSize = layerSize;
		this.layerColor = layerColor;
		this.drawLayer.styleMap.styles.temporary = new OpenLayers.Style(temporarystyle);
		this.initDraw(drawOptions,this.drawLayer,'RegularPolygon','RegularPolygon');
	},
	drawArrowPolygon : function(layerSize,layerColor){
		var drawOptions =	{
			'graphicSize':'1',
			'mode': 'direction'
		};
		var temporarystyle = OpenLayers.Util.applyDefaults({
			pointRadius: 6,
			label:'',
			fillColor:layerColor,
			strokeWidth: layerSize,
			labelYOffset:25,
		    strokeColor: 'blue',
		    graphicName: 'square'
		}, OpenLayers.Feature.Vector.style.temporary);
		this.layerSize = layerSize;
		this.layerColor = layerColor;
		this.drawLayer.styleMap.styles.temporary = new OpenLayers.Style(temporarystyle);
		this.initDraw(drawOptions,this.drawLayer,'arrowPolygon','arrowPolygon');
	},
	setLayerPro : function(layerSize,layerColor){
		this.layerSize = layerSize;
		this.layerColor = layerColor;
		var changeObj = this.drawLayer.styleMap.styles.temporary.defaultStyle;
		changeObj.fillColor = layerColor;
		changeObj.strokeWidth = layerSize;
		changeObj.graphicHeight = layerSize*15;
		changeObj.graphicWidth = layerSize*15;
	},
	/**
	 * drawOptions 画笔样式
	 * drawLayer 画图图层
	 * drawType 图形类型
	 * layerType 图形属性
	 */
	initDraw : function(drawOptions, drawLayer, drawType,layerType){
		var map = this.getMap();
		var drawControls = {
            point: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.Point,{
				handlerOptions:drawOptions,
				featureAdded:function(obj){//完成图形后的监听事件
					try {
						console.info("finished");	
						var pSize = mapComp.layerSize*15;	
						var cLogo = mapComp.getPointLogo( mapComp.layerSize, mapComp.layerColor);	
						obj.attributes={
							'text':'',
							'size':pSize,
							'color':'',
							'strokeColor' : '',
							'type' : layerType,
							'logo' : cLogo
						};	
						
						drawLayer.redraw();
						mapComp.dragControl.activate();
						clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
					} catch (error) {
						
					}
				},
				callbacks : function(pObj){
					console.info("point call back");
				}
			}),        
            line: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.Path,{
				handlerOptions:drawOptions,
				featureAdded:function(obj){//完成图形后的监听事件
					console.info("finished");
					obj.attributes = {
						'color' : '',
						'text' : '',
						'size' : mapComp.layerSize,
						'strokeColor' : mapComp.layerColor,
						'type' : layerType
					};
					drawLayer.redraw();
					mapComp.dragControl.activate();
					clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
				}
			}),       
            polygon: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.Polygon,{
				handlerOptions:drawOptions,
				featureAdded:function(obj){//完成图形后的监听事件
					console.info("finished");
					obj.attributes = {
						'color' : mapComp.layerColor,
						'text' : '',
						'size' : mapComp.layerSize,
						'strokeColor' : 'blue',
						'type' : layerType
					};
					drawLayer.redraw();
					mapComp.dragControl.activate();
					clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
				}
			}),
			RegularPolygon: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.RegularPolygon,{
				handlerOptions:drawOptions,
				featureAdded:function(obj){//完成图形后的监听事件
					console.info("finished");
					obj.attributes = {
						'color' : mapComp.layerColor,
						'text' : '',
						'size' : mapComp.layerSize,
						'strokeColor' : 'blue',
						'type' : layerType
					};
					drawLayer.redraw();
					mapComp.dragControl.activate();
					clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
				}
			}),
			arrowPolygon: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.VerticePolygon,{
				handlerOptions:drawOptions,
				featureAdded:function(obj){//完成图形后的监听事件
					console.info("finished");
					obj.attributes = {
						'color' : mapComp.layerColor,
						'text' : '',
						'size' : mapComp.layerSize,
						'strokeColor' : 'blue',
						'type' : layerType
					};
					drawLayer.redraw();
					mapComp.dragControl.activate();
					clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
				}
			}),
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
		}else if(drawType === 'arrowPolygon'){
			polygon = drawControls.arrowPolygon;
		}
		
		if(drawType !== 'Point'){
			polygon.handler.callbacks.point = function(pt){
				console.log(pt);
				console.info(layerType);
			};
		}
		
		this.layerHandler = polygon;
		map.addControl(polygon);
		polygon.activate(); 
		
		//添加可拖动监听
		var dragType = 'OpenLayers.Geometry.'+drawType;
		if(drawType === 'RegularPolygon' || drawType === 'arrowPolygon'){
			dragType = 'OpenLayers.Geometry.Polygon';
		}
		var dragControl = new OpenLayers.Control.DragFeature(drawLayer, {
		    geometryTypes: [dragType],
		    onEnter: function(obj) {
				console.info("enter");
				clickFeatureControl.activate();
				mapComp.drawLayer.styleMap.styles.temporary.defaultStyle.label ='双击删除';
		    },
		    onLeave: function(obj) {
				console.info("out");
				mapComp.drawLayer.styleMap.styles.temporary.defaultStyle.label = '';
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
				mapComp.drawLayer.styleMap.styles.temporary.defaultStyle.label = '';
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
		if(typeof(this.layerHandler) !== 'undefined'){
			this.layerHandler.deactivate();
			this.dragControl.deactivate();
			this.clickFeatureControl.deactivate();
		}
	},
	changPenModel : function(status){
		console.info(this.layerHandler);
		try {
			this.layerHandler.handler.freehand = status;
		} catch (error) {
			console.info(error.message);
		}
	},
	getPointLogo : function(size,color){
		return this.logoList[size][color].logo;
	}
};

//画实心，空心箭头工具的控制器
OpenLayers.Handler.VerticePolygon = OpenLayers.Class(OpenLayers.Handler.Drag, {
    sides: 7, circleEnd1:null,  circleEnd2:null,  radius: null,
    mutiVertice:false, leftFocus:null,  mouseAction:null, rightFocus:null,
    circleRing:null, circleRing2:null, arrowRing:null,  snapAngle: null,
    mode:null, circleAngle:null, circleRadius:null, snapToggle: 'shiftKey',
    layerOptions: null,  persist: false,graphicSize:null,
    ringStart1:null, ringStart2:null, irregular: false,citeCompliant: false,
    angle: null, fixedRadius: false,  circleIn:null, circleOut:null,
    feature: null, layer: null, radius2:null,  origin: null, originchan:null,
    polygon:null,  circleCenter:null,
    
    initialize: function(control, callbacks, options) {
        if(!(options && options.layerOptions && options.layerOptions.styleMap)) {
            this.style = OpenLayers.Util.extend(OpenLayers.Feature.Vector.style['default'], {});
        }
        OpenLayers.Handler.Drag.prototype.initialize.apply(this, [control, callbacks, options]);
        this.options = (options) ? options : {};
    },
    setOptions: function (newOptions) {
        OpenLayers.Util.extend(this.options, newOptions);
        OpenLayers.Util.extend(this, newOptions);
    },
    
    activate: function() {
        var activated = false;
        if(OpenLayers.Handler.Drag.prototype.activate.apply(this, arguments)) {
            var options = OpenLayers.Util.extend({
                displayInLayerSwitcher: false,
                calculateInRange: OpenLayers.Function.True,
                wrapDateLine: this.citeCompliant
            }, this.layerOptions);
            this.layer = new OpenLayers.Layer.Vector(this.CLASS_NAME, options);
            this.map.addLayer(this.layer);
            activated = true;
        }
        return activated;
    },

    deactivate: function() {
        var deactivatedstatus = false;
        if(OpenLayers.Handler.Drag.prototype.deactivate.apply(this, arguments)) {
            if(this.dragging) {
                this.cancel();
            }
            if (this.layer.map !== null) {
                this.layer.destroy(false);
                if (this.feature) {
                    this.feature.destroy();
                }
            }
            this.layer = null;
            this.feature = null;
            deactivatedstatus = true;
        }
        return deactivatedstatus;
    },

    down: function(evt) {
    	this.layer.removeAllFeatures();
	    this.fixedRadius = !!(this.radius);
	    var maploc = this.layer.getLonLatFromViewPortPx(evt.xy); 
		    this.origin = new OpenLayers.Geometry.Point(maploc.lon, maploc.lat);
		    this.originchan = new OpenLayers.Geometry.Point(maploc.lon, maploc.lat);
		    if(!this.fixedRadius || this.irregular) {
		        this.radius = this.map.getResolution();
		    }
		    if(this.persist) {
		        this.clear();
		    }
		    this.feature = new OpenLayers.Feature.Vector();
		    this.mouseAction ='down';
		    this.createGeometry();
	    	this.callback("create", [this.origin, this.feature]);
		    this.layer.addFeatures([this.feature], {silent: true});
		    this.layer.drawFeature(this.feature, this.style);
    },

    move: function(evt) {
    	this.mouseAction='move';
        var maploc = this.layer.getLonLatFromViewPortPx(evt.xy); 
        var point = new OpenLayers.Geometry.Point(maploc.lon, maploc.lat);
       if(this.irregular) {
            var ry = Math.sqrt(2) * Math.abs(point.y - this.origin.y) / 2;
            this.radius = Math.max(this.map.getResolution() / 2, ry);
       }else if(this.fixedRadius) {
            this.origin = point;
        } else {
            var angle= this.calculateAngle(point, evt);
            this.radius = point.distanceTo(this.originchan);
            this.radius2 = point.distanceTo(this.originchan);
            this.circleAngle = angle+angle;
        }
        this.modifyGeometry();
        this.layer.drawFeature(this.feature, this.style);
    },

    up: function(evt) {
        this.finalize();
        if (this.start == this.last) {
            this.callback("done", [evt.xy]);
        }
    },

    out: function(evt) {
        this.finalize();
    },

    createGeometry: function() {
    	if(this.mode =="direction"){
	    	if(this.graphicSize ===null){
	    		this.graphicSize =0.02;
	    	}
	    	
	        this.radius=0.01;
		    var points = [];
		    var pointstartup,  pointStartdown, pointMiddleup1, pointMiddleup2, pointMiddledown,pointMiddledown2, pointEnd;
			pointstartup =new OpenLayers.Geometry.Point(this.origin.x,this.origin.y+this.graphicSize/2);
			pointStartdown = new OpenLayers.Geometry.Point(this.origin.x,this.origin.y-this.graphicSize/2);
			pointMiddleup1 = new  OpenLayers.Geometry.Point(this.origin.x+(this.radius*2/3),this.origin.y+this.graphicSize/2);
			pointMiddleup2 = new  OpenLayers.Geometry.Point(this.origin.x+(this.radius*2/3),this.origin.y+this.graphicSize/2*3);
			pointMiddledown = new OpenLayers.Geometry.Point(this.origin.x+(this.radius*2/3),this.origin.y-this.graphicSize/2);
			pointMiddledown2 = new OpenLayers.Geometry.Point(this.origin.x+(this.radius*2/3),this.origin.y-this.graphicSize/2*3);
			pointEnd = new OpenLayers.Geometry.Point(this.origin.x+this.radius,this.origin.y);
			points.push(pointstartup,pointStartdown,pointMiddledown,pointMiddledown2,pointEnd,pointMiddleup2,pointMiddleup1);
		    var ring = new OpenLayers.Geometry.LinearRing(points);
		    var polygon = new OpenLayers.Geometry.Polygon([ring]);
		    this.feature.geometry =polygon;
	    }else{
            this.circleCenter = new OpenLayers.Geometry.Point(this.originchan.x-0.04,this.originchan.y);
            this.circleRing = this.createCircleRing(this.circleCenter,this.circleCenter,this.originchan,Math.PI/3*2,0.05,15,305);
            this.circleRing2 = this.createCircleRing(this.circleCenter,this.circleCenter,this.originchan,Math.PI/3*2,0.04,15,301.5);
            //this.ringStart1 =this.circleRing[0];
            this.ringStart2 =this.circleRing2[0];
            var x1 = this.circleRing[this.circleRing.length-1].x;
            var x2 = this.circleRing2[this.circleRing2.length-1].x;
            var y1 = this.circleRing[this.circleRing.length-1].y;
            var y2=  this.circleRing2[this.circleRing2.length-1].y;
            var arrowLeft = new OpenLayers.Geometry.Point(x1+0.02*Math.cos(Math.PI/3),y1+0.02*Math.sin(Math.PI/3));
            var arrowRight =new OpenLayers.Geometry.Point(x2-0.02*Math.cos(Math.PI/3),y2-0.02*Math.sin(Math.PI/3));
            var y3 = y1>y2?y1:y2;
            var arrowEnd = new OpenLayers.Geometry.Point((x1+x2)/2,y3+0.02);
            var arrowPoint =[];
            for(var i =0;i<this.circleRing.length;i++){
                arrowPoint.push(this.circleRing[i]);
            }
            arrowPoint.push(arrowLeft,arrowEnd,arrowRight);
            for(var k=this.circleRing2.length-1;k>=0;k--){
                arrowPoint.push(this.circleRing2[k]);
            }
            var nring = new OpenLayers.Geometry.LinearRing(arrowPoint);
            this.polygon = new OpenLayers.Geometry.Polygon([nring]);
            this.feature.geometry =this.polygon;
        }
    },
    
    modifyGeometry: function() {
        var angle, point,moveRadius;
        var ring = this.feature.geometry.components[0];
        angle = this.angle;
        disAngle=Math.PI/2+angle;
        moveRadius = this.radius-0.01;
        var graSize = this.graphicSize;
        var oriPoint = this.originchan;
        this.circleAngle = 2*(angle-(Math.PI/2));
		this.circleRadius =this.radius2;
		var center =new OpenLayers.Geometry.Point(this.originchan.x-this.circleRadius,this.originchan.y);
		var center2 =new OpenLayers.Geometry.Point(this.originchan.x+this.circleRadius,this.originchan.y);
		if(this.mode=="direction"){
			redrawPolygonByMove(angle,oriPoint,ring,moveRadius,graSize,disAngle);
		}else{
			var oriAngle =angle;
			var circleRing=this.createCircleRing(center,center2,this.originchan,oriAngle,this.circleRadius+0.01,15,305);
			var circleRing2=this.createCircleRing(center,center2,this.originchan,oriAngle,this.circleRadius,15,301);
			var arrowStart = circleRing[circleRing.length-1];
			var arrowEnd = circleRing2[circleRing2.length-1];
			var arrowPoints =this.countArrow(arrowStart,arrowEnd,oriAngle);
			for(var i=0;i<ring.components.length;i++){
				point =ring.components[i];
				if(i<circleRing.length){
					point.x= circleRing[i].x;
					point.y= circleRing[i].y;
					point.clearBounds();
				}else if(i<=circleRing.length+2&&i>=circleRing.length){
					if(i==this.circleRing.length){
						point.x =arrowPoints[0].x;
						point.y =arrowPoints[0].y;
						point.clearBounds();
					}else if( i==circleRing.length+1){
						point.x =arrowPoints[1].x;
						point.y =arrowPoints[1].y;
						point.clearBounds();
					}else if (i==circleRing.length+2){
						point.x =arrowPoints[2].x;
						point.y =arrowPoints[2].y;
						point.clearBounds();
					}
				}else{
					point.x= circleRing2[ring.components.length-1-i].x;
					point.y= circleRing2[ring.components.length-1-i].y;
					point.clearBounds();
				}
			}
			this.roratePolygon(oriAngle,this.originchan);
			this.layer.drawFeature(this.feature, this.style);
         }
    		
    },
    calculateAngle: function(point, evt) {
        var alpha = Math.atan2(point.y - this.originchan.y,
                               point.x - this.originchan.x);
        if(this.snapAngle && (this.snapToggle && !evt[this.snapToggle])) {
            var snapAngleRad = (Math.PI / 180) * this.snapAngle;
            this.angle = Math.round(alpha / snapAngleRad) * snapAngleRad;
        } else {
            this.angle = alpha;
        }
    },
    
    destroyFeature: function(force) {
        if(this.layer && (force || !this.persist)) {
            this.layer.destroyFeatures();
        }
        this.point = null;
        this.line =null;
    },


    cancel: function() {
        this.callback("cancel", null);
        this.finalize();
    },

    finalize: function() {
        this.origin = null;
        this.radius = this.options.radius;
    },


    clear: function() {
        if (this.layer) {
            this.layer.renderer.clear();
            this.layer.destroyFeatures();
        }
    },
    

    callback: function (name, args) {
		        if (this.callbacks[name]) {
		        	if(this.radius2 >0.03){
		            this.callbacks[name].apply(this.control,
		                                       [this.feature.geometry.clone()]);
		        	}
		        }
        if(!this.persist && (name == "done" || name == "cancel")) {
            this.clear();
        }
        if(name=="done"){
        	this.radius2=this.options.radius2;
        }
    },
     createCircleRing:function(origin,originr,center,oriAngle,radius,sides,rotation){
    	 var angle = Math.atan2(origin.y - center.y,
                 origin.x - center.x);
	    var rotatedAngle, x, y;
	    var points = [];
	   
	    points.push(center);
	    for(var i=0; i<sides; ++i) {
	    	var an = i*((360 - rotation)/360);
	    	if(oriAngle>0&&oriAngle<Math.PI/2){
	    		rotatedAngle =  angle-(an * 2 * Math.PI / sides)+Math.PI;
		        x = originr.x -(radius * Math.cos(rotatedAngle));
		        y = originr.y - (radius * Math.sin(rotatedAngle));
		     
	    	}else if(oriAngle>Math.PI/2&&oriAngle<Math.PI){
	    	rotatedAngle =  angle+(an * 2 * Math.PI / sides)+Math.PI;
		        x = origin.x +(radius * Math.cos(rotatedAngle));
		        y = origin.y + (radius * Math.sin(rotatedAngle));
	    	}else if(oriAngle>-Math.PI&&oriAngle<-Math.PI/2){
	    		rotatedAngle =  angle-(an * 2 * Math.PI / sides)-Math.PI;
		        x = origin.x +(radius * Math.cos(rotatedAngle));
		        y = origin.y + (radius * Math.sin(rotatedAngle));
	    	}else if(oriAngle>-Math.PI/2&&oriAngle<0){
	    		rotatedAngle =  angle+(an * 2 * Math.PI / sides);
		        x = originr.x +(radius * Math.cos(rotatedAngle));
		        y = originr.y +(radius * Math.sin(rotatedAngle));
		  
	    	}
	        
	        if(i==sides-1){
	        	this.circleEnd1 = new OpenLayers.Geometry.Point(x,y);
	        }else if(i===0){
	        	this.circleEnd2 =  new OpenLayers.Geometry.Point(x,y);
	        }
	        points.push(new OpenLayers.Geometry.Point(x,y));
	    }
	    return points;
    			 
    	 },
    	 
    countArrow:function(arrowStart,arrowEnd,oriAngle){
    	var arrowSta, arrowEnd2,arrowMidl;
    	var arrowPoint =[];
    	var x1,x2,y1,y2,x3,y3;
    	if(oriAngle>0&&oriAngle<Math.PI/2){
    		x1 =arrowStart.x-0.015*Math.cos(Math.PI/3);
			y1 =arrowStart.y+0.015*Math.sin(Math.PI/3)-0.01;
			x2 =arrowEnd.x-0.015*Math.cos(Math.PI/3)-0.01*(this.circleRadius/0.25);
			y2 =arrowEnd.y-0.015*Math.sin(Math.PI/3)-0.01*(this.circleRadius/0.25);
			x3 =  (arrowStart.x>arrowEnd.x? arrowStart.x:arrowEnd.x)+0.02;
			y3 = (arrowStart.y+arrowEnd.y)/2+0.01;
    	}else if(oriAngle>Math.PI/2&&oriAngle<Math.PI){
    		x1 =arrowStart.x+0.015*Math.cos(Math.PI/3);
			y1 =arrowStart.y+0.015*Math.sin(Math.PI/3)-0.01;
			x2 =arrowEnd.x+0.015*Math.cos(Math.PI/3)+0.01*(this.circleRadius/0.25);
			y2 =arrowEnd.y-0.015*Math.sin(Math.PI/3)-0.01*(this.circleRadius/0.25);
			x3 = (arrowStart.x<arrowEnd.x? arrowStart.x:arrowEnd.x)-0.02;
			y3 =(arrowStart.y+arrowEnd.y)/2+0.01;
    	}else if(oriAngle>-Math.PI&&oriAngle<-Math.PI/2){
    		x1 =arrowStart.x+0.015*Math.cos(Math.PI/3);
			y1 =arrowStart.y-0.015*Math.sin(Math.PI/3);
			x2 =arrowEnd.x+0.015*Math.cos(Math.PI/3)+0.01*(this.circleRadius/0.25);
			y2 =arrowEnd.y+0.015*Math.sin(Math.PI/3)+0.01*(this.circleRadius/0.25);
			x3 = (arrowStart.x<arrowEnd.x? arrowStart.x:arrowEnd.x)-0.02;
			y3 = (arrowStart.y+arrowEnd.y)/2-0.01;
    	}else if(oriAngle>-Math.PI/2&&oriAngle<0){
    		x1 =arrowStart.x-0.015*Math.cos(Math.PI/3);
			y1 =arrowStart.y-0.015*Math.sin(Math.PI/3)+0.01;
			x2 =arrowEnd.x-0.015*Math.cos(Math.PI/3)-0.01*(this.circleRadius/0.25);
			y2 =arrowEnd.y+0.015*Math.sin(Math.PI/3)+0.01*(this.circleRadius/0.25);
			x3 =  (arrowStart.x>arrowEnd.x? arrowStart.x:arrowEnd.x)+0.02;
			y3 = (arrowStart.y+arrowEnd.y)/2-0.01;
    	}
    	arrowSta = new OpenLayers.Geometry.Point(x1,y1);
    	arrowEnd2 = new OpenLayers.Geometry.Point(x2,y2);
    	arrowMidl = new OpenLayers.Geometry.Point(x3,y3);
    	arrowPoint.push(arrowSta,arrowMidl,arrowEnd2);
    	return arrowPoint;
    	
    },
    
    roratePolygon:function(oriAngle,origin){
    	var ring =this.feature.geometry.components[0];
        if(oriAngle>0&&oriAngle<Math.PI/2){
            ring.rotate((oriAngle-Math.PI/2+Math.PI/6)*180/Math.PI,origin);	
        }else if(oriAngle>Math.PI/2&&oriAngle<Math.PI){
            ring.rotate((oriAngle-Math.PI/2-Math.PI/6)*180/Math.PI,origin);	
        }else if(oriAngle>-Math.PI&&oriAngle<-Math.PI/2){
            ring.rotate((oriAngle+Math.PI/2+Math.PI/6)*180/Math.PI,origin);	
        }else if(oriAngle>-Math.PI/2&&oriAngle<0){
            ring.rotate((oriAngle+Math.PI/2-Math.PI/6)*180/Math.PI,origin);
        }
    },
    CLASS_NAME: "OpenLayers.Handler.VerticePolygon"
});

function redrawPolygonByMove(angle,origin,ring,moveRadius,graSize,disAngle){
	var pointstartup, pointStartdown, pointMiddleup1, pointMiddleup2, pointMiddledown,pointMiddledown2, pointEnd;
	pointstartup =ring.components[0];
	pointstartup.x =origin.x+(graSize/2*Math.cos(disAngle));
	pointstartup.y = origin.y+(graSize/2*Math.sin(disAngle));
	pointstartup.clearBounds();
	pointStartdown = ring.components[1];
	pointStartdown.x = origin.x-(graSize/2*Math.cos(disAngle));
	pointStartdown.y = origin.y-(graSize/2*Math.sin(disAngle));
	pointStartdown.clearBounds();
	pointMiddledown = ring.components[2];
	pointMiddledown.x =origin.x+(moveRadius*2/3*Math.cos(angle))-(graSize/2*Math.cos(disAngle));
	pointMiddledown.y = origin.y+(moveRadius *2/3*Math.sin(angle))-(graSize/2*Math.sin(disAngle));
	pointMiddledown.clearBounds();
	pointMiddledown2 = ring.components[3];
	pointMiddledown2.x = origin.x+(moveRadius *2/3*Math.cos(angle))-(graSize/2*3*Math.cos(disAngle));
	pointMiddledown2.y = origin.y+(moveRadius *2/3*Math.sin(angle))-(graSize/2*3*Math.sin(disAngle));
	pointMiddledown.clearBounds();
	pointEnd =ring.components[4];
	pointEnd.x = origin.x+(moveRadius*Math.cos(angle));
	pointEnd.y = origin.y+(moveRadius *Math.sin(angle));
	pointEnd.clearBounds();
	pointMiddleup2 = ring.components[5];
	pointMiddleup2.x =origin.x+(moveRadius*2/3*Math.cos(angle))+(graSize/2*3*Math.cos(disAngle));
	pointMiddleup2.y = origin.y+(moveRadius*2/3*Math.sin(angle))+(graSize/2*3*Math.sin(disAngle));
	pointMiddleup2.clearBounds();
	pointMiddleup1 = ring.components[6];
	pointMiddleup1.x = origin.x+(moveRadius*2/3*Math.cos(angle))+(graSize/2*Math.cos(disAngle));
	pointMiddleup1.y = origin.y+(moveRadius*2/3*Math.sin(angle))+(graSize/2*Math.sin(disAngle));
	pointMiddleup1.clearBounds();
}