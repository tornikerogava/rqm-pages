(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{39:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),o=c(12),s=c.n(o),a=c(10),r=c(45),l=c(46),d=(c(31),c(47)),j=c(26),u=c.p+"static/media/TR-04.f0cbf59f.svg",h=c(21),b=c(22),m=c(3);function f(){var e=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#73A857","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9"],t=Object(n.useState)(""),c=Object(a.a)(t,2),i=c[0],o=c[1],s=Object(n.useState)(""),f=Object(a.a)(s,2),x=f[0],O=f[1],p=Object(n.useState)(""),g=Object(a.a)(p,2),y=g[0],v=g[1],w=Object(n.useState)(""),k=Object(a.a)(w,2),C=k[0],q=k[1],I=""==y?"https://api.quotable.io/random?tags=famous-quotes":"http://api.quotable.io/random?tags=famous-quotes,".concat(y),S=""==y?"All topics":y.charAt(0).toUpperCase()+y.slice(1),B=function(){fetch("https://api.quotable.io/random?tags=".concat(y)).then((function(e){return e.json()})).then((function(t){o(t.content),O(t.author),q(e[Math.floor(Math.random()*e.length)])}))};Object(n.useEffect)(B,[]);var M='"'.concat(i,'" - ').concat(x),R='"'.concat(i,'" - ').concat(x," #QuoteMachine");return Object(m.jsxs)("div",{id:"quote-box",style:{fontFamily:"Lobster, cursive",background:C,height:"100vh",color:C,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(m.jsxs)("div",{style:{borderRadius:"1em",display:"flex",padding:"10px",flexDirection:"column",background:"white",width:"50%"},children:[Object(m.jsxs)("div",{className:"quoteBox",style:{margin:20},children:[Object(m.jsx)("div",{id:"text",children:Object(m.jsx)("p",{style:{fontSize:"3rem"},children:i})}),Object(m.jsx)("div",{id:"author",style:{fontSize:"2rem"},children:Object(m.jsxs)("p",{children:["- ",x]})})]}),Object(m.jsxs)("div",{className:"bottomRow",style:{fontFamily:"cursive",display:"flex",justifyContent:"space-between",margin:"0 1em 0.7em"},children:[Object(m.jsxs)("div",{className:"buttons",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.a.Toggle,{id:"dropdown-basic",style:{backgroundColor:C,border:"0",marginRight:"1em"},children:S}),Object(m.jsxs)(d.a.Menu,{children:[Object(m.jsx)(d.a.Item,{onClick:function(){return v("")},children:"All Topics"}),Object(m.jsx)(d.a.Item,{onClick:function(){return v("wisdom")},children:"Wisdom"}),Object(m.jsx)(d.a.Item,{onClick:function(){return v("inspirational")},children:"Inspirational"}),Object(m.jsx)(d.a.Item,{onClick:function(){return v("technology")},children:"Technology"}),Object(m.jsx)(d.a.Item,{onClick:function(){return v("friendship")},children:"Friendship"})]})]}),Object(m.jsx)(j.a,{style:{backgroundColor:C,border:"0",marginRight:"0.4em"},id:"new-quote",onClick:B,children:"Random Quote"}),Object(m.jsx)(j.a,{style:{backgroundColor:C,border:"0"},id:"famous-quote",onClick:function(){fetch(I).then((function(e){return e.json()})).then((function(t){o(t.content),O(t.author),q(e[Math.floor(Math.random()*e.length)])}))},children:"Famous Quote"})]}),Object(m.jsxs)("div",{className:"socials",children:[Object(m.jsx)(r.a,{style:{marginRight:"0.8em"},url:R,appId:21095180,children:Object(m.jsx)(h.a,{icon:b.b,size:"3x",style:{color:C}})}),Object(m.jsx)(l.a,{url:"github.com",quote:M,appId:0xc17618db684b,children:Object(m.jsx)(h.a,{icon:b.a,size:"3x",style:{color:C}})})]})]})]}),Object(m.jsx)("div",{style:{color:"white",fontFamily:"sansSerif",display:"flex",marginTop:"0.5em"},className:"credits",children:Object(m.jsx)("img",{src:u,style:{height:"1.7em",color:"white"}})}),Object(m.jsx)("a",{id:"tweet-quote",href:"twitter.com/intent/tweet"})," "]})}s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.be8145c0.chunk.js.map