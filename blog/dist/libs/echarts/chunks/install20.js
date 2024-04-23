import{ap as e,_ as t,E as o,P as r,G as a,aF as i,C as n,u as d,b3 as l,g as s,bx as h,aT as p,b5 as c,$ as u,p as y,ac as g,by as f,aJ as m,aK as x,S as v,h as N}from"./index.js";import{S as _}from"./Symbol.js";import{V as I,u as L,a as S,b as w}from"./roamHelper.js";import{R as T}from"./RoamController.js";import{o as b}from"./cursorHelper.js";import{T as E,w as D}from"./Tree.js";import"./labelHelper.js";import"./interactionMutex.js";import"./linkSeriesData.js";function P(e,t){var o=e.isExpand?e.children:[],r=e.parentNode.children,a=e.hierNode.i?r[e.hierNode.i-1]:null;if(o.length){!function(e){var t=e.children,o=t.length,r=0,a=0;for(;--o>=0;){var i=t[o];i.hierNode.prelim+=r,i.hierNode.modifier+=r,a+=i.hierNode.change,r+=i.hierNode.shift+a}}(e);var i=(o[0].hierNode.prelim+o[o.length-1].hierNode.prelim)/2;a?(e.hierNode.prelim=a.hierNode.prelim+t(e,a),e.hierNode.modifier=e.hierNode.prelim-i):e.hierNode.prelim=i}else a&&(e.hierNode.prelim=a.hierNode.prelim+t(e,a));e.parentNode.hierNode.defaultAncestor=function(e,t,o,r){if(t){for(var a=e,i=e,n=i.parentNode.children[0],d=t,l=a.hierNode.modifier,s=i.hierNode.modifier,h=n.hierNode.modifier,p=d.hierNode.modifier;d=A(d),i=B(i),d&&i;){a=A(a),n=B(n),a.hierNode.ancestor=e;var c=d.hierNode.prelim+p-i.hierNode.prelim-s+r(d,i);c>0&&(X(G(d,e,o),e,c),s+=c,l+=c),p+=d.hierNode.modifier,s+=i.hierNode.modifier,l+=a.hierNode.modifier,h+=n.hierNode.modifier}d&&!A(a)&&(a.hierNode.thread=d,a.hierNode.modifier+=p-l),i&&!B(n)&&(n.hierNode.thread=i,n.hierNode.modifier+=s-h,o=e)}return o}(e,a,e.parentNode.hierNode.defaultAncestor||r[0],t)}function R(e){var t=e.hierNode.prelim+e.parentNode.hierNode.modifier;e.setLayout({x:t},!0),e.hierNode.modifier+=e.parentNode.hierNode.modifier}function M(e){return arguments.length?e:Y}function C(e,t){return e-=Math.PI/2,{x:t*Math.cos(e),y:t*Math.sin(e)}}function A(e){var t=e.children;return t.length&&e.isExpand?t[t.length-1]:e.hierNode.thread}function B(e){var t=e.children;return t.length&&e.isExpand?t[0]:e.hierNode.thread}function G(e,t,o){return e.hierNode.ancestor.parentNode===t.parentNode?e.hierNode.ancestor:o}function X(e,t,o){var r=o/(t.hierNode.i-e.hierNode.i);t.hierNode.change-=r,t.hierNode.shift+=o,t.hierNode.modifier+=o,t.hierNode.prelim+=o,e.hierNode.change+=r}function Y(e,t){return e.parentNode===t.parentNode?1:2}var k=function(){this.parentPoint=[],this.childPoints=[]},z=function(e){function r(t){return e.call(this,t)||this}return t(r,e),r.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},r.prototype.getDefaultShape=function(){return new k},r.prototype.buildPath=function(e,t){var r=t.childPoints,a=r.length,i=t.parentPoint,n=r[0],d=r[a-1];if(1===a)return e.moveTo(i[0],i[1]),void e.lineTo(n[0],n[1]);var l=t.orient,s="TB"===l||"BT"===l?0:1,h=1-s,p=o(t.forkPosition,1),c=[];c[s]=i[s],c[h]=i[h]+(d[h]-i[h])*p,e.moveTo(i[0],i[1]),e.lineTo(c[0],c[1]),e.moveTo(n[0],n[1]),c[s]=n[s],e.lineTo(c[0],c[1]),c[s]=d[s],e.lineTo(c[0],c[1]),e.lineTo(d[0],d[1]);for(var u=1;u<a-1;u++){var y=r[u];e.moveTo(y[0],y[1]),c[s]=y[s],e.lineTo(c[0],c[1])}},r}(r);function O(e,t){var o=e.getItemLayout(t);return o&&!isNaN(o.x)&&!isNaN(o.y)}function V(e,t,o,r,a){var i=!o,n=e.tree.getNodeByDataIndex(t),f=n.getModel(),m=n.getVisual("style").fill,x=!1===n.isExpand&&0!==n.children.length?m:"#fff",v=e.tree.root,N=n.parentNode===v?n:n.parentNode||n,I=e.getItemGraphicEl(N.dataIndex),L=N.getLayout(),S=I?{x:I.__oldX,y:I.__oldY,rawX:I.__radialOldRawX,rawY:I.__radialOldRawY}:L,w=n.getLayout();i?((o=new _(e,t,null,{symbolInnerColor:x,useNameLabel:!0})).x=S.x,o.y=S.y):o.updateData(e,t,null,{symbolInnerColor:x,useNameLabel:!0}),o.__radialOldRawX=o.__radialRawX,o.__radialOldRawY=o.__radialRawY,o.__radialRawX=w.rawX,o.__radialRawY=w.rawY,r.add(o),e.setItemGraphicEl(t,o),o.__oldX=o.x,o.__oldY=o.y,d(o,{x:w.x,y:w.y},a);var T=o.getSymbolPath();if("radial"===a.get("layout")){var b=v.children[0],E=b.getLayout(),D=b.children.length,P=void 0,R=void 0;if(w.x===E.x&&!0===n.isExpand&&b.children.length){var M={x:(b.children[0].getLayout().x+b.children[D-1].getLayout().x)/2,y:(b.children[0].getLayout().y+b.children[D-1].getLayout().y)/2};(P=Math.atan2(M.y-E.y,M.x-E.x))<0&&(P=2*Math.PI+P),(R=M.x<E.x)&&(P-=Math.PI)}else(P=Math.atan2(w.y-E.y,w.x-E.x))<0&&(P=2*Math.PI+P),0===n.children.length||0!==n.children.length&&!1===n.isExpand?(R=w.x<E.x)&&(P-=Math.PI):(R=w.x>E.x)||(P-=Math.PI);var C=R?"left":"right",A=f.getModel("label"),B=A.get("rotate"),G=B*(Math.PI/180),X=T.getTextContent();X&&(T.setTextConfig({position:A.get("position")||C,rotation:null==B?-P:G,origin:"center"}),X.setStyle("verticalAlign","middle"))}var Y=f.get(["emphasis","focus"]),k="relative"===Y?l(n.getAncestorsIndices(),n.getDescendantIndices()):"ancestor"===Y?n.getAncestorsIndices():"descendant"===Y?n.getDescendantIndices():null;k&&(s(o).focus=k),function(e,t,o,r,a,i,n,l){var s=t.getModel(),h=e.get("edgeShape"),p=e.get("layout"),f=e.getOrient(),m=e.get(["lineStyle","curveness"]),x=e.get("edgeForkPosition"),v=s.getModel("lineStyle").getLineStyle(),N=r.__edge;if("curve"===h)t.parentNode&&t.parentNode!==o&&(N||(N=r.__edge=new c({shape:U(p,f,m,a,a)})),d(N,{shape:U(p,f,m,i,n)},e));else if("polyline"===h){if("orthogonal"!==p)throw new Error("The polyline edgeShape can only be used in orthogonal layout");if(t!==o&&t.children&&0!==t.children.length&&!0===t.isExpand){for(var _=t.children,I=[],L=0;L<_.length;L++){var S=_[L].getLayout();I.push([S.x,S.y])}N||(N=r.__edge=new z({shape:{parentPoint:[n.x,n.y],childPoints:[[n.x,n.y]],orient:f,forkPosition:x}})),d(N,{shape:{parentPoint:[n.x,n.y],childPoints:I}},e)}}N&&("polyline"!==h||t.isExpand)&&(N.useStyle(u({strokeNoScale:!0,fill:null},v)),y(N,s,"lineStyle"),g(N),l.add(N))}(a,n,v,o,S,L,w,r),o.__edge&&(o.onHoverStateChange=function(t){if("blur"!==t){var r=n.parentNode&&e.getItemGraphicEl(n.parentNode.dataIndex);r&&r.hoverState===h||p(o.__edge,t)}})}function j(e,t,o,r,a){var i=H(t.tree.root,e),n=i.source,d=i.sourceLayout,l=t.getItemGraphicEl(e.dataIndex);if(l){var s=t.getItemGraphicEl(n.dataIndex).__edge,h=l.__edge||(!1===n.isExpand||1===n.children.length?s:void 0),p=r.get("edgeShape"),c=r.get("layout"),u=r.get("orient"),y=r.get(["lineStyle","curveness"]);h&&("curve"===p?f(h,{shape:U(c,u,y,d,d),style:{opacity:0}},r,{cb:function(){o.remove(h)},removeOpt:a}):"polyline"===p&&"orthogonal"===r.get("layout")&&f(h,{shape:{parentPoint:[d.x,d.y],childPoints:[[d.x,d.y]]},style:{opacity:0}},r,{cb:function(){o.remove(h)},removeOpt:a}))}}function H(e,t){for(var o,r=t.parentNode===e?t:t.parentNode||t;null==(o=r.getLayout());)r=r.parentNode===e?r:r.parentNode||r;return{source:r,sourceLayout:o}}function Z(e,t,o,r,a){var i=e.tree.getNodeByDataIndex(t),n=H(e.tree.root,i).sourceLayout,d={duration:a.get("animationDurationUpdate"),easing:a.get("animationEasingUpdate")};f(o,{x:n.x+1,y:n.y+1},a,{cb:function(){r.remove(o),e.setItemGraphicEl(t,null)},removeOpt:d}),o.fadeOut(null,e.hostModel,{fadeLabel:!0,animation:d}),i.children.forEach((function(t){j(t,e,r,a,d)})),j(i,e,r,a,d)}function U(e,t,o,r,a){var i,n,d,l,s,h,p,c;if("radial"===e){s=r.rawX,p=r.rawY,h=a.rawX,c=a.rawY;var u=C(s,p),y=C(s,p+(c-p)*o),g=C(h,c+(p-c)*o),f=C(h,c);return{x1:u.x||0,y1:u.y||0,x2:f.x||0,y2:f.y||0,cpx1:y.x||0,cpy1:y.y||0,cpx2:g.x||0,cpy2:g.y||0}}return s=r.x,p=r.y,h=a.x,c=a.y,"LR"!==t&&"RL"!==t||(i=s+(h-s)*o,n=p,d=h+(s-h)*o,l=c),"TB"!==t&&"BT"!==t||(i=s,n=p+(c-p)*o,d=h,l=c+(p-c)*o),{x1:s,y1:p,x2:h,y2:c,cpx1:i,cpy1:n,cpx2:d,cpy2:l}}var q=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=o.type,t._mainGroup=new a,t}return t(o,e),o.prototype.init=function(e,t){this._controller=new T(t.getZr()),this._controllerHost={target:this.group},this.group.add(this._mainGroup)},o.prototype.render=function(e,t,o){var r=e.getData(),a=e.layoutInfo,i=this._mainGroup;"radial"===e.get("layout")?(i.x=a.x+a.width/2,i.y=a.y+a.height/2):(i.x=a.x,i.y=a.y),this._updateViewCoordSys(e,o),this._updateController(e,t,o);var n=this._data;r.diff(n).add((function(t){O(r,t)&&V(r,t,null,i,e)})).update((function(t,o){var a=n.getItemGraphicEl(o);O(r,t)?V(r,t,a,i,e):a&&Z(n,o,a,i,e)})).remove((function(t){var o=n.getItemGraphicEl(t);o&&Z(n,t,o,i,e)})).execute(),this._nodeScaleRatio=e.get("nodeScaleRatio"),this._updateNodeAndLinkScale(e),!0===e.get("expandAndCollapse")&&r.eachItemGraphicEl((function(t,r){t.off("click").on("click",(function(){o.dispatchAction({type:"treeExpandAndCollapse",seriesId:e.id,dataIndex:r})}))})),this._data=r},o.prototype._updateViewCoordSys=function(e,t){var o=e.getData(),r=[];o.each((function(e){var t=o.getItemLayout(e);!t||isNaN(t.x)||isNaN(t.y)||r.push([+t.x,+t.y])}));var a=[],n=[];i(r,a,n);var d=this._min,l=this._max;n[0]-a[0]==0&&(a[0]=d?d[0]:a[0]-1,n[0]=l?l[0]:n[0]+1),n[1]-a[1]==0&&(a[1]=d?d[1]:a[1]-1,n[1]=l?l[1]:n[1]+1);var s=e.coordinateSystem=new I;s.zoomLimit=e.get("scaleLimit"),s.setBoundingRect(a[0],a[1],n[0]-a[0],n[1]-a[1]),s.setCenter(e.get("center"),t),s.setZoom(e.get("zoom")),this.group.attr({x:s.x,y:s.y,scaleX:s.scaleX,scaleY:s.scaleY}),this._min=a,this._max=n},o.prototype._updateController=function(e,t,o){var r=this,a=this._controller,i=this._controllerHost,n=this.group;a.setPointerChecker((function(t,r,a){var i=n.getBoundingRect();return i.applyTransform(n.transform),i.contain(r,a)&&!b(t,o,e)})),a.enable(e.get("roam")),i.zoomLimit=e.get("scaleLimit"),i.zoom=e.coordinateSystem.getZoom(),a.off("pan").off("zoom").on("pan",(function(t){L(i,t.dx,t.dy),o.dispatchAction({seriesId:e.id,type:"treeRoam",dx:t.dx,dy:t.dy})})).on("zoom",(function(t){S(i,t.scale,t.originX,t.originY),o.dispatchAction({seriesId:e.id,type:"treeRoam",zoom:t.scale,originX:t.originX,originY:t.originY}),r._updateNodeAndLinkScale(e),o.updateLabelLayout()}))},o.prototype._updateNodeAndLinkScale=function(e){var t=e.getData(),o=this._getNodeGlobalScale(e);t.eachItemGraphicEl((function(e,t){e.setSymbolScale(o)}))},o.prototype._getNodeGlobalScale=function(e){var t=e.coordinateSystem;if("view"!==t.type)return 1;var o=this._nodeScaleRatio,r=t.scaleX||1;return((t.getZoom()-1)*o+1)/r},o.prototype.dispose=function(){this._controller&&this._controller.dispose(),this._controllerHost=null},o.prototype.remove=function(){this._mainGroup.removeAll(),this._data=null},o.type="tree",o}(n),F=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.hasSymbolVisual=!0,t.ignoreStyleOnData=!0,t}return t(o,e),o.prototype.getInitialData=function(e){var t={name:e.name,children:e.data},o=e.leaves||{},r=new m(o,this,this.ecModel),a=E.createTree(t,this,(function(e){e.wrapMethod("getItemModel",(function(e,t){var o=a.getNodeByDataIndex(t);return o&&o.children.length&&o.isExpand||(e.parentModel=r),e}))}));var i=0;a.eachNode("preorder",(function(e){e.depth>i&&(i=e.depth)}));var n=e.expandAndCollapse&&e.initialTreeDepth>=0?e.initialTreeDepth:i;return a.root.eachNode("preorder",(function(e){var t=e.hostTree.data.getRawDataItem(e.dataIndex);e.isExpand=t&&null!=t.collapsed?!t.collapsed:e.depth<=n})),a.data},o.prototype.getOrient=function(){var e=this.get("orient");return"horizontal"===e?e="LR":"vertical"===e&&(e="TB"),e},o.prototype.setZoom=function(e){this.option.zoom=e},o.prototype.setCenter=function(e){this.option.center=e},o.prototype.formatTooltip=function(e,t,o){for(var r=this.getData().tree,a=r.root.children[0],i=r.getNodeByDataIndex(e),n=i.getValue(),d=i.name;i&&i!==a;)d=i.parentNode.name+"."+d,i=i.parentNode;return x("nameValue",{name:d,value:n,noValue:isNaN(n)||null==n})},o.prototype.getDataParams=function(t){var o=e.prototype.getDataParams.apply(this,arguments),r=this.getData().tree.getNodeByDataIndex(t);return o.treeAncestors=D(r,this),o.collapsed=!r.isExpand,o},o.type="series.tree",o.layoutMode="box",o.defaultOption={z:2,coordinateSystem:"view",left:"12%",top:"12%",right:"12%",bottom:"12%",layout:"orthogonal",edgeShape:"curve",edgeForkPosition:"50%",roam:!1,nodeScaleRatio:.4,center:null,zoom:1,orient:"LR",symbol:"emptyCircle",symbolSize:7,expandAndCollapse:!0,initialTreeDepth:2,lineStyle:{color:"#ccc",width:1.5,curveness:.5},itemStyle:{color:"lightsteelblue",borderWidth:1.5},label:{show:!0},animationEasing:"linear",animationDuration:700,animationDurationUpdate:500},o}(v);function W(e,t){for(var o,r=[e];o=r.pop();)if(t(o),o.isExpand){var a=o.children;if(a.length)for(var i=a.length-1;i>=0;i--)r.push(a[i])}}function J(t,o){t.eachSeriesByType("tree",(function(t){!function(t,o){var r=function(t,o){return e(t.getBoxLayoutParams(),{width:o.getWidth(),height:o.getHeight()})}(t,o);t.layoutInfo=r;var a=t.get("layout"),i=0,n=0,d=null;"radial"===a?(i=2*Math.PI,n=Math.min(r.height,r.width)/2,d=M((function(e,t){return(e.parentNode===t.parentNode?1:2)/e.depth}))):(i=r.width,n=r.height,d=M());var l=t.getData().tree.root,s=l.children[0];if(s){!function(e){var t=e;t.hierNode={defaultAncestor:null,ancestor:t,prelim:0,modifier:0,change:0,shift:0,i:0,thread:null};for(var o,r,a=[t];o=a.pop();)if(r=o.children,o.isExpand&&r.length)for(var i=r.length-1;i>=0;i--){var n=r[i];n.hierNode={defaultAncestor:null,ancestor:n,prelim:0,modifier:0,change:0,shift:0,i:i,thread:null},a.push(n)}}(l),function(e,t,o){for(var r,a=[e],i=[];r=a.pop();)if(i.push(r),r.isExpand){var n=r.children;if(n.length)for(var d=0;d<n.length;d++)a.push(n[d])}for(;r=i.pop();)t(r,o)}(s,P,d),l.hierNode.modifier=-s.hierNode.prelim,W(s,R);var h=s,p=s,c=s;W(s,(function(e){var t=e.getLayout().x;t<h.getLayout().x&&(h=e),t>p.getLayout().x&&(p=e),e.depth>c.depth&&(c=e)}));var u=h===p?1:d(h,p)/2,y=u-h.getLayout().x,g=0,f=0,m=0,x=0;if("radial"===a)g=i/(p.getLayout().x+u+y),f=n/(c.depth-1||1),W(s,(function(e){m=(e.getLayout().x+y)*g,x=(e.depth-1)*f;var t=C(m,x);e.setLayout({x:t.x,y:t.y,rawX:m,rawY:x},!0)}));else{var v=t.getOrient();"RL"===v||"LR"===v?(f=n/(p.getLayout().x+u+y),g=i/(c.depth-1||1),W(s,(function(e){x=(e.getLayout().x+y)*f,m="LR"===v?(e.depth-1)*g:i-(e.depth-1)*g,e.setLayout({x:m,y:x},!0)}))):"TB"!==v&&"BT"!==v||(g=i/(p.getLayout().x+u+y),f=n/(c.depth-1||1),W(s,(function(e){m=(e.getLayout().x+y)*g,x="TB"===v?(e.depth-1)*f:n-(e.depth-1)*f,e.setLayout({x:m,y:x},!0)})))}}}(t,o)}))}function K(e){e.eachSeriesByType("tree",(function(e){var t=e.getData();t.tree.eachNode((function(e){var o=e.getModel().getModel("itemStyle").getItemStyle(),r=t.ensureUniqueItemVisual(e.dataIndex,"style");N(r,o)}))}))}function $(e){e.registerChartView(q),e.registerSeriesModel(F),e.registerLayout(J),e.registerVisual(K),function(e){e.registerAction({type:"treeExpandAndCollapse",event:"treeExpandAndCollapse",update:"update"},(function(e,t){t.eachComponent({mainType:"series",subType:"tree",query:e},(function(t){var o=e.dataIndex,r=t.getData().tree.getNodeByDataIndex(o);r.isExpand=!r.isExpand}))})),e.registerAction({type:"treeRoam",event:"treeRoam",update:"none"},(function(e,t,o){t.eachComponent({mainType:"series",subType:"tree",query:e},(function(t){var r=t.coordinateSystem,a=w(r,e,void 0,o);t.setCenter&&t.setCenter(a.center),t.setZoom&&t.setZoom(a.zoom)}))}))}(e)}export{$ as install};
