import{_ as t,bu as o,P as n,bv as e,bw as r}from"./index.js";var i=Math.min,a=Math.max;function s(t,o){return isNaN(t)||isNaN(o)}function f(t,o,n,e,r,f,u,h,l){for(var c,v,p,d,b,y,m=n,M=0;M<e;M++){var N=o[2*m],P=o[2*m+1];if(m>=r||m<0)break;if(s(N,P)){if(l){m+=f;continue}break}if(m===n)t[f>0?"moveTo":"lineTo"](N,P),p=N,d=P;else{var g=N-c,k=P-v;if(g*g+k*k<.5){m+=f;continue}if(u>0){for(var x=m+f,w=o[2*x],C=o[2*x+1];w===N&&C===P&&M<e;)M++,m+=f,w=o[2*(x+=f)],C=o[2*x+1],g=(N=o[2*m])-c,k=(P=o[2*m+1])-v;var D=M+1;if(l)for(;s(w,C)&&D<e;)D++,w=o[2*(x+=f)],C=o[2*x+1];var S=.5,T=0,O=0,q=void 0,j=void 0;if(D>=e||s(w,C))b=N,y=P;else{T=w-c,O=C-v;var z=N-c,E=w-N,L=P-v,_=C-P,A=void 0,B=void 0;if("x"===h){var F=T>0?1:-1;b=N-F*(A=Math.abs(z))*u,y=P,q=N+F*(B=Math.abs(E))*u,j=P}else if("y"===h){var G=O>0?1:-1;b=N,y=P-G*(A=Math.abs(L))*u,q=N,j=P+G*(B=Math.abs(_))*u}else A=Math.sqrt(z*z+L*L),b=N-T*u*(1-(S=(B=Math.sqrt(E*E+_*_))/(B+A))),y=P-O*u*(1-S),j=P+O*u*S,q=i(q=N+T*u*S,a(w,N)),j=i(j,a(C,P)),q=a(q,i(w,N)),y=P-(O=(j=a(j,i(C,P)))-P)*A/B,b=i(b=N-(T=q-N)*A/B,a(c,N)),y=i(y,a(v,P)),q=N+(T=N-(b=a(b,i(c,N))))*B/A,j=P+(O=P-(y=a(y,i(v,P))))*B/A}t.bezierCurveTo(p,d,b,y,N,P),p=q,d=j}else t.lineTo(N,P)}c=N,v=P,m+=f}return M}var u=function(){this.smooth=0,this.smoothConstraint=!0},h=function(n){function i(t){var o=n.call(this,t)||this;return o.type="ec-polyline",o}return t(i,n),i.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},i.prototype.getDefaultShape=function(){return new u},i.prototype.buildPath=function(t,o){var n=o.points,e=0,r=n.length/2;if(o.connectNulls){for(;r>0&&s(n[2*r-2],n[2*r-1]);r--);for(;e<r&&s(n[2*e],n[2*e+1]);e++);}for(;e<r;)e+=f(t,n,e,r,r,1,o.smooth,o.smoothMonotone,o.connectNulls)+1},i.prototype.getPointOn=function(t,n){this.path||(this.createPathProxy(),this.buildPath(this.path,this.shape));for(var i,a,s=this.path.data,f=e.CMD,u="x"===n,h=[],l=0;l<s.length;){var c=void 0,v=void 0,p=void 0,d=void 0,b=void 0,y=void 0,m=void 0;switch(s[l++]){case f.M:i=s[l++],a=s[l++];break;case f.L:if(c=s[l++],v=s[l++],(m=u?(t-i)/(c-i):(t-a)/(v-a))<=1&&m>=0){var M=u?(v-a)*m+a:(c-i)*m+i;return u?[t,M]:[M,t]}i=c,a=v;break;case f.C:c=s[l++],v=s[l++],p=s[l++],d=s[l++],b=s[l++],y=s[l++];var N=u?o(i,c,p,b,t,h):o(a,v,d,y,t,h);if(N>0)for(var P=0;P<N;P++){var g=h[P];if(g<=1&&g>=0){M=u?r(a,v,d,y,g):r(i,c,p,b,g);return u?[t,M]:[M,t]}}i=b,a=y}}},i}(n),l=function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return t(n,o),n}(u),c=function(o){function n(t){var n=o.call(this,t)||this;return n.type="ec-polygon",n}return t(n,o),n.prototype.getDefaultShape=function(){return new l},n.prototype.buildPath=function(t,o){var n=o.points,e=o.stackedOnPoints,r=0,i=n.length/2,a=o.smoothMonotone;if(o.connectNulls){for(;i>0&&s(n[2*i-2],n[2*i-1]);i--);for(;r<i&&s(n[2*r],n[2*r+1]);r++);}for(;r<i;){var u=f(t,n,r,i,i,1,o.smooth,a,o.connectNulls);f(t,e,r+u-1,u,i,-1,o.stackedOnSmooth,a,o.connectNulls),r+=u+1,t.closePath()}},n}(n);export{h as E,c as a};