(this.webpackJsonphow2usleep=this.webpackJsonphow2usleep||[]).push([[0],{121:function(e,t,a){e.exports=a.p+"static/media/logo512.df180eb6.png"},128:function(e,t,a){e.exports=a(279)},133:function(e,t,a){},134:function(e,t,a){},209:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(118),o=a.n(l),i=(a(133),a(13)),c=a(14),s=a(16),m=a(15),d=a(17),u=(a(134),a(119)),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={chartData:e.chartData},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"chart"},r.a.createElement(u.a,{data:this.state.chartData,height:400,width:10,options:{responsive:!0,maintainAspectRatio:!1,title:{display:this.props.displayTitle,text:this.props.title,fontSize:20,fontColor:"#ac0000"},legend:{display:this.props.displayLegend,position:this.props.legendPosition},layout:{padding:{top:5,left:15,right:15,bottom:15}}}}))}}]),t}(n.Component);h.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"bottom"};var p=h,b=a(121),g=a.n(b),E=a(122),f=a(34),v=a.n(f),y=(a(209),a(39)),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"demoFromHTML",value:function(){var e=new E("l","pt"),t={background:"white",height:500,width:1500},a=new Image;e.setProperties({title:"Relat\xf3rio do Sono",subject:"Relat\xf3rio do Sono",author:"How2uSleep",keywords:"apneia,hipopneia,sono"}),e.setTextColor("#ac0000"),e.setFontSize(32),e.text(20,30,"Relat\xf3rio do Sono"),e.setDrawColor("#ac0000"),e.setLineWidth(1.5),e.line(20,35,700,35),e.addPage(),e.setFontSize(16),e.text(20,20,"Batimentos Card\xedacos");var n=document.getElementsByClassName("divPrint")[0];v.a.toPng(n,t).then((function(n){a.src=n,e.addImage(a,"JPEG",0,150,700,400),e.addPage(),e.text(20,20,"Esfor\xe7o Respirat\xf3rio");var r=document.getElementsByClassName("divPrint1")[0];v.a.toPng(r,t).then((function(n){a.src=n,e.addImage(a,"JPEG",0,150,700,400),e.addPage(),e.text(20,20,"Satura\xe7\xe3o de Oxig\xeanio");var r=document.getElementsByClassName("divPrint2")[0];v.a.toPng(r,t).then((function(n){a.src=n,e.addImage(a,"JPEG",0,150,700,400),e.addPage(),e.text(20,20,"Fluxo Nasal");var r=document.getElementsByClassName("divPrint3")[0];v.a.toPng(r,t).then((function(n){a.src=n,e.addImage(a,"JPEG",0,150,700,400),e.addPage(),e.text(20,20,"Ru\xeddo");var r=document.getElementsByClassName("divPrint4")[0];v.a.toPng(r,t).then((function(t){a.src=t,e.addImage(a,"JPEG",0,150,700,400),e.save("Relatorio.pdf")}))}))}))}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App-header"},r.a.createElement("ul",{className:"menuBar"},r.a.createElement(y.b,{to:"/"},r.a.createElement("li",{className:"itemLeft"},r.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}))),r.a.createElement("li",{className:"itemLeft"},r.a.createElement("h3",{className:"mainTitle"},"How2uSleep")),r.a.createElement("li",{className:"itemRight"},r.a.createElement(y.b,{to:"/Sobre"},r.a.createElement("button",null,"Sobre"))),r.a.createElement("li",{className:"itemRight"},r.a.createElement("button",{className:"Sobre",onClick:function(){return console.log("Relatorio")||e.demoFromHTML()}},"Relat\xf3rio"))))}}]),t}(n.Component),C=a(76),P=a.n(C),D=a(124),O=a(127),S=a(78),j=(a(277),function(){return r.a.createElement("div",{className:"app"},r.a.createElement("h1",{style:{color:"rgb(172, 0, 0)"}}," Relat\xf3rio"),r.a.createElement(O.a,{initialValues:{email:""},onSubmit:function(){var e=Object(D.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:alert(JSON.stringify(t,null,2));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),validationSchema:S.object().shape({email:S.string().email().required("Required")})},(function(e){var t=e.values,a=e.touched,n=e.errors,l=e.isSubmitting,o=e.handleChange,i=e.handleBlur,c=e.handleSubmit;return r.a.createElement("form",{onSubmit:c},r.a.createElement("label",{htmlFor:"name",style:{color:"rgb(172, 0, 0)"}},"Nome Completo"),r.a.createElement("input",{name:"name",type:"string",placeholder:"Nome Completo",value:t.name,onChange:o,onBlur:i,className:n.name&&a.name&&"error"}),r.a.createElement("label",{htmlFor:"email",style:{display:"block",color:"rgb(172, 0, 0)"}},"Email"),r.a.createElement("input",{id:"email",placeholder:"Email",type:"text",value:t.email,onChange:o,onBlur:i,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email),r.a.createElement("button",{className:"SubmitButton",type:"submit",disabled:l},"Enviar"))})))}),w=[1,2,3,4,5,6,7,8,9,10,11],k=[1,20,3,50,100,50,7,80,10,40,120],x=[1,20,3,50,100,50,7,80,10,40,120],R=[1,20,3,50,100,50,7,80,10,40,120],B=[1,20,3,50,100,50,7,80,10,40,120],F=[1,20,3,50,100,50,7,80,10,40,120],L={width:900,height:400,margin:"auto"},J=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={chartData1:{},chartData2:{},chartData3:{},chartData4:{},chartData5:{},mydata:[]},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.getChartData()}},{key:"getChartData",value:function(){this.setState({chartData1:{labels:w,datasets:[{label:"Batimentos Card\xedacos",data:k,fill:!0,borderColor:"#ac0000",backgroundColor:["rgba(172, 0, 0,0.2)"]}]},chartData2:{labels:w,datasets:[{label:"Esfor\xe7o Respirat\xf3rio",data:x,fill:!0,borderColor:"#ac0000",backgroundColor:["rgba(172, 0, 0,0.2)"]}]},chartData3:{labels:w,datasets:[{label:"Satura\xe7\xe3o de Oxig\xeanio",data:R,fill:!0,borderColor:"#ac0000",backgroundColor:["rgba(172, 0, 0,0.2)"]}]},chartData4:{labels:w,datasets:[{label:"Fluxo Nasal",data:B,fill:!0,borderColor:"#ac0000",backgroundColor:["rgba(172, 0, 0,0.2)"]}]},chartData5:{labels:w,datasets:[{label:"Ru\xeddo",data:F,fill:!0,borderColor:"#ac0000",backgroundColor:["rgba(172, 0, 0,0.2)"]}]}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement("ul",{className:"menuBar"},r.a.createElement("li",{className:"itemLeft"},r.a.createElement("div",{id:"pdf",className:"divPrint",style:L},r.a.createElement(p,{chartData:this.state.chartData1,title:"Batimentos Card\xedacos"}))),r.a.createElement("li",{className:"itemRight"},r.a.createElement("div",{className:"divPrint1",style:L},r.a.createElement(p,{chartData:this.state.chartData2,title:"Esfor\xe7o Respirat\xf3rio"}))),r.a.createElement("li",{className:"itemLeft"},r.a.createElement("div",{className:"divPrint2",style:L},r.a.createElement(p,{chartData:this.state.chartData3,title:"Satura\xe7\xe3o de Oxig\xeanio"}))),r.a.createElement("li",{className:"itemRight"},r.a.createElement("div",{className:"divPrint3",style:L},r.a.createElement(p,{chartData:this.state.chartData4,title:"Fluxo Nasal"})))),r.a.createElement("div",{className:"divPrint4",style:L},r.a.createElement(p,{chartData:this.state.chartData5,title:"Ru\xeddo"})),r.a.createElement("div",{className:"divPrint5",style:L},r.a.createElement(j,null)))}}]),t}(n.Component),T=(a(278),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(N,null)),r.a.createElement("div",{id:"sobreDiv"},r.a.createElement("h1",{id:"sobreTitle"},"Sobre")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(18);o.a.render(r.a.createElement(y.a,null,r.a.createElement(I.c,null,r.a.createElement(I.a,{path:"/",exact:!0,component:J}),r.a.createElement(I.a,{path:"/Sobre",component:T}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[128,1,2]]]);
//# sourceMappingURL=main.2b963e44.chunk.js.map