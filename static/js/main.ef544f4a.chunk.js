(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(3),l=a.n(i),c=(a(14),a(2),a(4)),r=a(5),h=a(7),o=a(6),u=a(8),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).dragFlag=!1,a.handleMouseDown=function(e){a.dragFlag=!0,a.setState({y:e.screenY})},a.handleMouseUp=function(e){a.dragFlag=!1},a.handleMouseLeave=function(e){a.dragFlag=!1},a.state={value:135,x:0,y:0},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onMouseMove",value:function(e){this.dragFlag&&this.state.y>e.screenY&&this.setState({y:e.screenY,value:this.state.value>-140?this.state.value-10:this.state.value}),this.dragFlag&&this.state.y<e.screenY&&this.setState({y:e.screenY,value:this.state.value<140?this.state.value+10:this.state.value})}},{key:"render",value:function(){var e={height:this.props.size,width:this.props.size,backgroundColor:"grey",transform:"rotate(.5turn)"},t={x1:.6*Math.sin(this.state.value/180*Math.PI),y1:.6*Math.cos(this.state.value/180*Math.PI),x2:Math.sin(this.state.value/180*Math.PI),y2:Math.cos(this.state.value/180*Math.PI)};return n.a.createElement("div",{className:"knob",onMouseMove:this.onMouseMove.bind(this),style:e,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave},n.a.createElement("svg",{viewBox:"-1 -1 2 2"},n.a.createElement("circle",{cx:"0",cy:"0",r:"1",fill:"black"}),n.a.createElement("line",{className:"witnessMark",stroke:"white",strokeWidth:"5%",x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2}),n.a.createElement("circle",{cx:"0",cy:"0",r:".6",fill:"silver"}),n.a.createElement("circle",{cx:Math.sin((30+this.state.value)/180*Math.PI),cy:Math.cos((30+this.state.value)/180*Math.PI),r:".22",fill:"grey"}),n.a.createElement("circle",{cx:Math.sin((90+this.state.value)/180*Math.PI),cy:Math.cos((90+this.state.value)/180*Math.PI),r:".22",fill:"grey"}),n.a.createElement("circle",{cx:Math.sin((150+this.state.value)/180*Math.PI),cy:Math.cos((150+this.state.value)/180*Math.PI),r:".22",fill:"grey"}),n.a.createElement("circle",{cx:Math.sin((210+this.state.value)/180*Math.PI),cy:Math.cos((210+this.state.value)/180*Math.PI),r:".22",fill:"grey"}),n.a.createElement("circle",{cx:Math.sin((270+this.state.value)/180*Math.PI),cy:Math.cos((270+this.state.value)/180*Math.PI),r:".22",fill:"grey"}),n.a.createElement("circle",{cx:Math.sin((330+this.state.value)/180*Math.PI),cy:Math.cos((330+this.state.value)/180*Math.PI),r:".22",fill:"grey"})))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement("div",null,n.a.createElement(M,{size:"100px"}),n.a.createElement(M,{size:"150px"}),n.a.createElement(M,{size:"80px"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},2:function(e,t,a){},9:function(e,t,a){e.exports=a(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.ef544f4a.chunk.js.map