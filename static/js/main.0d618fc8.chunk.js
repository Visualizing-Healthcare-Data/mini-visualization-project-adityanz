(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{127:function(t,a,e){t.exports=e(137)},132:function(t,a,e){},133:function(t,a,e){t.exports=e.p+"static/media/logo.5d5d9eef.svg"},134:function(t,a,e){},136:function(t,a,e){},137:function(t,a,e){"use strict";e.r(a);var r=e(0),n=e.n(r),i=e(34),o=e.n(i),s=(e(132),e(2)),c=e(3),l=e(5),d=e(4),u=(e(133),e(134),e(1)),h=e(8),p=e.n(h),g=function(t){Object(l.a)(e,t);var a=Object(d.a)(e);function e(){return Object(s.a)(this,e),a.apply(this,arguments)}return Object(c.a)(e,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"midpoint",value:function(t){return t[0]+(t[1]-t[0])/2}},{key:"drawChart",value:function(){var t=this.props.width,a=this.props.height,e=20,r=20,n=70,i=60,o=t-i-r,s=a-e-n;u.c(p.a).then((function(t){console.log(t);var a=u.g().range([0,o]).padding(.1),c=u.h().range([s,0]);a.domain(t.map((function(t){return t.year}))),c.domain([0,u.f(t,(function(t){return t.value}))]);var l=u.i("body").append("svg").attr("width",o+i+r).attr("height",s+e+n).append("g").attr("transform","translate("+i+","+e+")");l.append("g").attr("class","x axis").attr("transform","translate(0,"+s+")").call(u.a(a)),l.append("g").attr("class","y axis").call(u.b(c)),l.selectAll("rect").data(t).enter().append("rect").attr("class","bar").attr("x",(function(t,e){return a(t.year)})).attr("y",(function(t){return c(t.value)})).attr("width",a.bandwidth()).attr("height",(function(t){return s-c(t.value)})).attr("fill","maroon");var d=a.range()[0]+(a.range()[1]-a.range()[0])/2,h=(c.range()[0],c.range()[1],c.range()[0],l.append("text").attr("class","axis-title").text("Registered Country"));h.attr("text-anchor","middle"),h.attr("x",d),h.attr("y",s+40);var p=l.append("text").attr("class","axis-title").text("Passenger Count");p.attr("x",-210),p.attr("y",-50),p.attr("dy","1.75ex"),p.attr("text-anchor","middle"),p.attr("transform","rotate(-90)")}))}},{key:"render",value:function(){return n.a.createElement("div",{id:"#"+this.props.id})}}]),e}(n.a.Component),m=function(t){Object(l.a)(e,t);var a=Object(d.a)(e);function e(){return Object(s.a)(this,e),a.apply(this,arguments)}return Object(c.a)(e,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"midpoint",value:function(t){return t[0]+(t[1]-t[0])/2}},{key:"drawChart",value:function(){var t=this.props.width,a=this.props.height,e=20,r=20,n=70,i=60,o=t-i-r,s=a-e-n;u.c(p.a).then((function(t){console.log(t);var a=u.g().range([0,o]).padding(.1),c=u.h().range([s,0]),l=u.e().x((function(t,e){return a(t.year)})).y((function(t){return c(t.value)})).curve(u.d);a.domain(t.map((function(t){return t.year}))),c.domain([0,u.f(t,(function(t){return t.value}))]);var d=u.i("body").append("svg").attr("width",o+i+r).attr("height",s+e+n).append("g").attr("transform","translate("+i+","+e+")");d.append("g").attr("class","x axis").attr("transform","translate(0,"+s+")").call(u.a(a)),d.append("g").attr("class","y axis").call(u.b(c)),d.append("path").datum(t).attr("fill","none").attr("stroke","darkblue").attr("stroke-width",4).attr("stroke-linejoin","round").attr("stroke-linecap","round").attr("d",l);var h=a.range()[0]+(a.range()[1]-a.range()[0])/2,p=(c.range()[0],c.range()[1],c.range()[0],d.append("text").attr("class","axis-title").text("Registered Country"));p.attr("text-anchor","middle"),p.attr("x",h),p.attr("y",s+40);var g=d.append("text").attr("class","axis-title").text("Passenger Count");g.attr("x",-210),g.attr("y",-50),g.attr("dy","1.75ex"),g.attr("text-anchor","middle"),g.attr("transform","rotate(-90)")}))}},{key:"render",value:function(){return n.a.createElement("div",{id:"#"+this.props.id})}}]),e}(n.a.Component),f=function(t){Object(l.a)(e,t);var a=Object(d.a)(e);function e(){return Object(s.a)(this,e),a.apply(this,arguments)}return Object(c.a)(e,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"midpoint",value:function(t){return t[0]+(t[1]-t[0])/2}},{key:"drawChart",value:function(){var t=this.props.width,a=this.props.height,e=20,r=20,n=70,i=60,o=t-i-r,s=a-e-n;u.c(p.a).then((function(t){console.log(t);var a=u.g().range([0,o]).padding(.1),c=u.h().range([s,0]);a.domain(t.map((function(t){return t.year}))),c.domain([0,u.f(t,(function(t){return t.value}))]);var l=u.i("body").append("svg").attr("width",o+i+r).attr("height",s+e+n).append("g").attr("transform","translate("+i+","+e+")");l.append("g").attr("class","x axis").attr("transform","translate(0,"+s+")").call(u.a(a)),l.append("g").attr("class","y axis").call(u.b(c)),l.append("g").selectAll("dot").data(t).enter().append("circle").attr("cx",(function(t){return a(t.year)})).attr("cy",(function(t){return c(t.value)})).attr("r",5).style("fill","darkgreen");var d=a.range()[0]+(a.range()[1]-a.range()[0])/2,h=(c.range()[0],c.range()[1],c.range()[0],l.append("text").attr("class","axis-title").text("Registered Country"));h.attr("text-anchor","middle"),h.attr("x",d),h.attr("y",s+40);var p=l.append("text").attr("class","axis-title").text("Passenger Count");p.attr("x",-210),p.attr("y",-50),p.attr("dy","1.75ex"),p.attr("text-anchor","middle"),p.attr("transform","rotate(-90)")}))}},{key:"render",value:function(){return n.a.createElement("div",{id:"#"+this.props.id})}}]),e}(n.a.Component),v=(e(136),function(t){Object(l.a)(e,t);var a=Object(d.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=a.call.apply(a,[this].concat(n))).state={width:500,height:450,id:"root"},t}return Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("section",{class:"hero is-primary is-bold"},n.a.createElement("div",{class:"hero-body"},n.a.createElement("div",{class:"container"},n.a.createElement("h1",{class:"title"},"Mini Visualizations"),n.a.createElement("h2",{class:"subtitle"},"Aditya Dixit")))),n.a.createElement("body",null,n.a.createElement("section",{class:"section"},n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"content has-text-centered"},n.a.createElement(g,{data:this.state.data,width:this.state.width,height:this.state.height}),n.a.createElement(m,{data:this.state.data,width:this.state.width,height:this.state.height}),n.a.createElement(f,{data:this.state.data,width:this.state.width,height:this.state.height})))),n.a.createElement("footer",{class:"footer"},n.a.createElement("div",{class:"content has-text-centered is-size-7"}))))}}]),e}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,a,e){t.exports=e.p+"static/media/bar.924f78c5.csv"}},[[127,1,2]]]);
//# sourceMappingURL=main.0d618fc8.chunk.js.map