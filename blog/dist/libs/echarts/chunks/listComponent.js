import{ap as t,cU as e,bB as i,da as a,R as g}from"./index.js";function h(a,g,h){var o=g.getBoxLayoutParams(),r=g.get("padding"),d={width:h.getWidth(),height:h.getHeight()},s=t(o,d,r);e(g.get("orient"),a,g.get("itemGap"),s.width,s.height),i(a,o,d,r)}function o(t,e){var i=a(e.get("padding")),h=e.getItemStyle(["color","opacity"]);return h.fill=e.get("backgroundColor"),t=new g({shape:{x:t.x-i[3],y:t.y-i[0],width:t.width+i[1]+i[3],height:t.height+i[0]+i[2],r:e.get("borderRadius")},style:h,silent:!0,z2:-1})}export{h as l,o as m};