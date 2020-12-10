(this["webpackJsonpsocial-media-dashboard-with-theme-switcher"]=this["webpackJsonpsocial-media-dashboard-with-theme-switcher"]||[]).push([[0],{10:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),r=c(3),i=c.n(r);c(9);var o=function(){return Object(s.jsx)("h1",{className:"heading-primary",id:"heading-primary",children:"Social Media Dashboard"})};var l=function(){return Object(s.jsxs)("div",{className:"button-container",children:[Object(s.jsx)("p",{className:"button-text",children:"Dark Mode"}),Object(s.jsx)("button",{className:"btn btn-theme-switcher",id:"btn-theme-switcher",onClick:function(){var e=document.getElementById("btn-circle"),t=document.getElementById("btn-theme-switcher"),c=document.getElementById("heading-primary"),s=document.querySelectorAll(".main__box-grid-primary"),n=document.querySelectorAll(".main__box-grid-secondary"),a=document.querySelectorAll(".main__user-text-numbers"),r=document.querySelectorAll(".main__user-interaction-numbers");e.classList.toggle("btn-circle-active"),t.classList.toggle("btn-active"),document.body.classList.toggle("body-active"),c.classList.toggle("text-color-darkest"),a.forEach((function(e){e.classList.toggle("text-color-darkest")})),s.forEach((function(e){e.classList.toggle("bg-color-lighten"),e.classList.toggle("box-grid-active")})),n.forEach((function(e){e.classList.toggle("bg-color-lighten"),e.classList.toggle("box-grid-active")})),r.forEach((function(e){e.classList.toggle("text-color-darkest")}))},"aria-label":"Button for Theme Switch",children:Object(s.jsx)("span",{className:"btn-circle",id:"btn-circle"})})]})};var m=function(){return Object(s.jsxs)("header",{className:"header u-mb-m",children:[Object(s.jsxs)("div",{className:"header__text-container",children:[Object(s.jsx)(o,{}),Object(s.jsx)("p",{className:"header__text",children:"Total Followers: 23,004"})]}),Object(s.jsx)(l,{})]})},j=c.p+"static/media/icon-facebook.8deee3e3.svg",d=c.p+"static/media/icon-twitter.a0c5f64d.svg",b=c.p+"static/media/icon-instagram.568b5795.svg",u=c.p+"static/media/icon-youtube.cad14335.svg",g=c.p+"static/media/icon-up.359200b2.svg",x=c.p+"static/media/icon-down.0c77426d.svg";var h=function(e){return Object(s.jsxs)("div",{className:"main__user-container",children:[Object(s.jsx)("img",{src:e.logo,alt:"Facebook Logo",className:"main__user-social-media-logo"}),Object(s.jsx)("p",{className:"main__user-username",children:e.user})]})};var O=function(e){return Object(s.jsxs)("div",{className:"main__user-followers",children:[Object(s.jsx)("p",{className:"main__user-text-numbers",children:e.text}),Object(s.jsx)("p",{className:"main__user-text-followers",children:"FOLLOWERS"})]})};var _=function(e){return Object(s.jsxs)("div",{className:"main__user-rating-followers",children:[Object(s.jsx)("img",{src:e.icon,alt:"",className:"main__icon-arrow"}),Object(s.jsxs)("p",{className:"main__user-rating-per-day ".concat(e.colorClass),children:[e.perDay," Today"]})]})};var v=function(e){return Object(s.jsxs)("div",{className:"main__box-grid-primary",children:[Object(s.jsx)(h,{logo:e.logo,user:e.user}),Object(s.jsx)(O,{text:e.text}),Object(s.jsx)(_,{icon:e.icon,perDay:e.perDay,colorClass:e.colorClass})]})};var f=function(){return Object(s.jsxs)("div",{className:"main__grid-primary u-mb-m",children:[Object(s.jsx)(v,{logo:j,text:"1987",icon:g,perDay:"12",user:"#nathanf"}),Object(s.jsx)(v,{logo:d,text:"1044",icon:g,perDay:"99",user:"@nathanf"}),Object(s.jsx)(v,{logo:b,text:"11k",icon:g,perDay:"1099",user:"@realnathanf"}),Object(s.jsx)(v,{logo:u,text:"8239",icon:x,perDay:"144",user:"Nathan F.",colorClass:"red"})]})};var p=function(e){return Object(s.jsxs)("div",{className:"main__user-interaction-container",children:[Object(s.jsx)("p",{className:"main__user-interaction",children:e.text}),Object(s.jsx)("img",{src:e.logo,alt:"Social Media Logo",className:"main__user-interaction-logo"})]})};var N=function(e){return Object(s.jsxs)("div",{className:"main__user-interaction-per-day-container",children:[Object(s.jsx)("p",{className:"main__user-interaction-numbers",children:e.numbers}),Object(s.jsxs)("div",{className:"main__user-interaction-change-container",children:[Object(s.jsx)("img",{src:e.icon,alt:"Percentage Change Icon",className:"main__user-interaction-change-icon"}),Object(s.jsxs)("p",{className:"main__user-interaction-change-text ".concat(e.colorClass),children:[e.change,"%"]})]})]})};var y=function(e){return Object(s.jsxs)("div",{className:"main__box-grid-secondary",children:[Object(s.jsx)(p,{text:e.text,logo:e.logo}),Object(s.jsx)(N,{numbers:e.numbers,icon:e.icon,change:e.change,colorClass:e.colorClass})]})};var w=function(){return Object(s.jsxs)("div",{className:"main__grid-secondary",children:[Object(s.jsx)(y,{text:"Page Views",logo:j,numbers:"87",icon:g,change:"3"}),Object(s.jsx)(y,{text:"Likes",logo:j,numbers:"52",icon:x,change:"2",colorClass:"red"}),Object(s.jsx)(y,{text:"Likes",logo:b,numbers:"5462",icon:g,change:"2257"}),Object(s.jsx)(y,{text:"Profile Views",logo:b,numbers:"52K",icon:g,change:"1375"}),Object(s.jsx)(y,{text:"Retweets",logo:d,numbers:"117",icon:g,change:"303"}),Object(s.jsx)(y,{text:"Likes",logo:d,numbers:"507",icon:g,change:"553"}),Object(s.jsx)(y,{text:"Likes",logo:u,numbers:"107",icon:x,change:"19",colorClass:"red"}),Object(s.jsx)(y,{text:"Total Views",logo:u,numbers:"1407",icon:x,change:"12",colorClass:"red"})]})};var L=function(){return Object(s.jsx)("h2",{className:"heading-secondary u-mb-sm",children:"Overview - Today"})};var C=function(){return Object(s.jsxs)("main",{className:"main",children:[Object(s.jsx)(f,{}),Object(s.jsx)(L,{}),Object(s.jsx)(w,{})]})};var k=function(){return Object(s.jsxs)("div",{className:"container u-p-m",children:[Object(s.jsx)(m,{}),Object(s.jsx)(C,{})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,11)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),D()},9:function(e,t,c){}},[[10,1,2]]]);
//# sourceMappingURL=main.3ab7dc86.chunk.js.map