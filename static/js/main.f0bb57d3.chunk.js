(this.webpackJsonpphotos=this.webpackJsonpphotos||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/logo.6ce24c58.svg"},53:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(15),r=n.n(s),i=(n(43),n(5)),o=n(11),l=n(3),u=(n(44),n(2)),j=function(e){var t=e.setSearchText;return Object(u.jsx)("input",{className:"search",placeholder:"Search image",onChange:function(e){return t(e.target.value)}})};n(46);function d(e){var t=e.setSearchText;return Object(u.jsxs)("div",{className:"nav-wrap flex spaceBetween",children:[Object(u.jsxs)("div",{className:"nav-left-wrap flex itemCenter",children:[Object(u.jsxs)(o.b,{to:"/",className:"nav-link flex itemCenter",children:[Object(u.jsx)("img",{className:"nav-logo",src:n(52).default}),Object(u.jsx)("h1",{className:"nav-title",children:"Photos"})]}),Object(u.jsx)(o.b,{to:"/like",className:"nav-link",children:Object(u.jsx)("p",{className:"nav-title",children:"Likes"})}),Object(u.jsx)(o.b,{to:"/delete",className:"nav-link",children:Object(u.jsx)("p",{className:"nav-title",children:"Deletes"})})]}),Object(u.jsx)("div",{className:"nav-right-wrap",children:Object(u.jsx)(j,{setSearchText:t})})]})}n(53);var f=function(e){return e.enable?Object(u.jsx)("div",{className:"spinner"}):null},b=n(24),O=n(25),m=n(14),p=n.n(m),h=n(22),v=n(36),x=n.n(v),g=n(17),N={base:"https://images-api.nasa.gov",search:"/search"},S=function(){var e,t,n;return{getInstance:function(){return e||delete(e=x.a.create({baseURL:N.base,headers:{Connection:"keep-alive",Accept:"application/json","Content-Type":"application/json","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"}})).constructor,e},setToken:function(e){n=e},getToken:function(){return n},setLogout:function(e){t=e},getLogout:function(){return t}}}(),k=S.getInstance();k.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),k.interceptors.response.use(function(){var e=Object(h.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(204!==t.status&&205!==t.status){e.next=2;break}return e.abrupt("return",null);case 2:if(!(t.status>=200&&t.status<300)){e.next=4;break}return e.abrupt("return",t.data);case 4:return(n=new Error(t.statusText)).response=t,e.abrupt("return",Promise.reject(n));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 401===t.response.status&&Object(g.a)("Unauthorized or session expired",{position:g.a.POSITION.TOP_CENTER,type:g.a.TYPE.ERROR,toastId:"Unauthorized or session expired"}),e.abrupt("return",Promise.reject(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var w=k;var E=n(23),T=n(37),I=n(38),y=(n(73),function(e){var t,n=e.item,c=e.onDelete,s=Object(a.useState)(n.like),r=Object(i.a)(s,2),o=r[0],l=r[1];return Object(u.jsxs)("div",{className:"card-wrap",children:[Object(u.jsxs)("div",{className:"card-info flex column spaceBetween",children:[Object(u.jsxs)("div",{className:"flex spaceBetween",children:[Object(u.jsx)("div",{onClick:function(){var e=JSON.parse(localStorage.getItem("like")||"[]");o?e=e.filter((function(e){return e.data[0].nasa_id!==n.data[0].nasa_id})):e.push(n),localStorage.setItem("like",JSON.stringify(e)),l(!o)},children:o?Object(u.jsx)(E.b,{className:"card-like"}):Object(u.jsx)(E.a,{className:"card-unlike"})}),Object(u.jsx)("div",{onClick:function(){var e=JSON.parse(localStorage.getItem("delete")||"[]");e.push(n),localStorage.setItem("delete",JSON.stringify(e)),c&&c(n)},children:Object(u.jsx)(T.a,{className:"card-remove"})})]}),Object(u.jsxs)("div",{className:"flex spaceBetween",children:[Object(u.jsx)("p",{className:"card-title flex",children:n.data[0].title}),Object(u.jsxs)("span",{className:"card-view",children:["611 ",Object(u.jsx)(I.a,{})]})]})]}),Object(u.jsx)("img",{className:"card-img",src:n&&n.links?null===(t=n.links[0])||void 0===t?void 0:t.href:void 0})]})});n(74);var C=function(e){var t=e.setEnable,n=e.searchText,c=Object(a.useState)([]),s=Object(i.a)(c,2),r=s[0],o=s[1],l=Object(a.useState)(1),j=Object(i.a)(l,2),d=j[0],f=j[1],m=Object(a.useState)(!1),p=Object(i.a)(m,2),h=p[0],v=p[1],x=Object(a.useState)(100),g=Object(i.a)(x,1)[0],S=function(e,t){var n=Object(a.useState)(e),c=Object(i.a)(n,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){r(e)}),t);return function(){clearTimeout(n)}}),[e]),s}(n,350),k=function(e){for(var t=Math.floor((window.innerWidth-200)/250),n=JSON.parse(localStorage.getItem("like")||"[]").map((function(e){return e.data[0].nasa_id})),a=JSON.parse(localStorage.getItem("delete")||"[]").map((function(e){return e.data[0].nasa_id})),c=e.filter((function(e){return!a.includes(e.data[0].nasa_id)})),s=1===d?[]:r,i=0;i<c.length;i++){var l=Object(O.a)(Object(O.a)({},c[i]),{},{like:n.includes(e[i].data[0].nasa_id)}),u=(i+d*g)%t;s[u]?s[u].push(l):s[u]=[l]}o(s)},E=function(e){for(var t=r,n=0;n<r.length;n++)t[n]=Object(b.a)(r[n].filter((function(t){return t.data[0].nasa_id!==e.data[0].nasa_id})));o(Object(b.a)(t))},T=function(){window.innerHeight+document.documentElement.scrollTop===document.scrollingElement.scrollHeight&&(f(d+1),t&&t(!0))},I=function(){var e=Date.now();w.get(N.search,{params:{q:n||'""',page:d}}).then((function(n){var a=Date.now();setTimeout((function(){var e;k(null===n||void 0===n||null===(e=n.collection)||void 0===e?void 0:e.items),t&&t(!1),window.removeEventListener("scroll",T),window.addEventListener("scroll",T)}),2e3-(a-e))}))};return Object(a.useEffect)((function(){t&&t(!0),o([])}),[]),Object(a.useEffect)((function(){I()}),[d]),Object(a.useEffect)((function(){h?(o([]),t&&t(!0),1!==d?f(1):I()):v(!0)}),[S]),Object(u.jsx)("div",{className:"home flex row center",children:r.map((function(e,t){return Object(u.jsx)("div",{key:t,children:e.map((function(e,t){return Object(u.jsx)(y,{item:e,key:t,onDelete:E})}))})}))})};n(75);function D(e){var t,n=e.item;return Object(u.jsxs)("div",{className:"list-wrap flex",children:[Object(u.jsx)("img",{className:"list-img",src:n&&n.links?null===(t=n.links[0])||void 0===t?void 0:t.href:void 0,alt:""}),Object(u.jsxs)("div",{className:"list-info column",children:[Object(u.jsx)("h3",{className:"list-title",children:n.data[0].title}),Object(u.jsx)("p",{className:"list-description",children:n.data[0].description})]})]})}n(76);function J(e){var t=e.setEnable,n=Object(a.useState)([]),c=Object(i.a)(n,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){t&&t(!0);var e=Date.now(),n=JSON.parse(localStorage.getItem("like")||"[]"),a=Date.now();setTimeout((function(){r(n),t&&t(!1)}),1e3-(a-e))}),[]),Object(u.jsx)("div",{className:"like",children:s.map((function(e,t){return Object(u.jsx)(D,{item:e,key:t})}))})}n(77);function L(e){var t=e.setEnable,n=Object(a.useState)([]),c=Object(i.a)(n,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){t&&t(!0);var e=Date.now(),n=JSON.parse(localStorage.getItem("delete")||"[]"),a=Date.now();setTimeout((function(){r(n),t&&t(!1)}),1e3-(a-e))}),[]),Object(u.jsx)("div",{className:"delete",children:s.map((function(e,t){return Object(u.jsx)(D,{item:e,key:t})}))})}n(78);var P=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),j=r[0],b=r[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d,{setSearchText:b}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/like",children:Object(u.jsx)(J,{setEnable:c})}),Object(u.jsx)(l.a,{path:"/delete",children:Object(u.jsx)(L,{setEnable:c})}),Object(u.jsx)(l.a,{path:"/",children:Object(u.jsx)(C,{setEnable:c,searchText:j})})]})]}),Object(u.jsx)(f,{enable:n})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),_()}},[[79,1,2]]]);
//# sourceMappingURL=main.f0bb57d3.chunk.js.map