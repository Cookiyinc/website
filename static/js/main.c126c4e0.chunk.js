(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(4),s=n.n(o),a=(n(10),n(2)),r=n.p+"static/media/logo.13237d1f.svg",l=(n(11),n(5)),j=n.n(l),u=n(0);var d=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)(!1),s=Object(a.a)(o,2),l=s[0],d=s[1],b=Object(c.useState)(!1),h=Object(a.a)(b,2),p=h[0],f=h[1],g=Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(!1),fetch("https://emailcookiyapi.herokuapp.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})}).then((function(e){201===e.status&&d(!0),406===e.status&&f(!0)})).catch((function(e){console.log("we are here",e)}))},children:[Object(u.jsx)("img",{className:"logo",src:r,alt:"Cookiy Logo"}),Object(u.jsx)("p",{children:"Sign up for our beta!"}),Object(u.jsx)("input",{type:"text",placeholder:"Email",onChange:function(e){return i(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Join Beta!"}),p?Object(u.jsx)("div",{style:{color:"red"},children:Object(u.jsx)("span",{children:"Enter a valid email"})}):null]}),O=Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:"logo",src:r,alt:"Cookiy Logo"}),Object(u.jsx)("p",{children:"Thank you so much! You've been registered in our beta!"})]});return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"content",children:[l?O:g,Object(u.jsx)("div",{className:"confetti",children:Object(u.jsx)(j.a,{active:l,config:{angle:90,spread:360,startVelocity:40,elementCount:70,dragFriction:.12,duration:8e3,stagger:3,width:"10px",height:"10px",perspective:"500px",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]}})})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.c126c4e0.chunk.js.map