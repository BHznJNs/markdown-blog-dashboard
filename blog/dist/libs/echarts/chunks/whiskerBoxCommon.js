import{c as t}from"./createSeriesDataSimply.js";import{e,d as a,h as i,V as s,x as o,W as n}from"./index.js";var r=function(){function r(){}return r.prototype.getInitialData=function(r,l){var u,m,p=l.getComponent("xAxis",this.get("xAxisIndex")),x=l.getComponent("yAxis",this.get("yAxisIndex")),y=p.get("type"),h=x.get("type");"category"===y?(r.layout="horizontal",u=p.getOrdinalMeta(),m=!0):"category"===h?(r.layout="vertical",u=x.getOrdinalMeta(),m=!0):r.layout=r.layout||"horizontal";var d=["x","y"],g="horizontal"===r.layout?0:1,c=this._baseAxisDim=d[g],f=d[1-g],v=[p,x],D=v[g].get("type"),A=v[1-g].get("type"),C=r.data;if(C&&m){var I=[];e(C,(function(t,e){var s;a(t)?(s=t.slice(),t.unshift(e)):a(t.value)?((s=i({},t)).value=s.value.slice(),t.value.unshift(e)):s=t,I.push(s)})),r.data=I}var M=this.defaultValueDimensions,b=[{name:c,type:s(D),ordinalMeta:u,otherDims:{tooltip:!1,itemName:0},dimsDef:["base"]},{name:f,type:s(A),dimsDef:M.slice()}];return t(this,{coordDimensions:b,dimensionsCount:M.length+1,encodeDefaulter:o(n,b,this)})},r.prototype.getBaseAxis=function(){var t=this._baseAxisDim;return this.ecModel.getComponent(t+"Axis",this.get(t+"AxisIndex")).axis},r}();export{r as W};
