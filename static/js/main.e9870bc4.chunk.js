(this.webpackJsonpphotos=this.webpackJsonpphotos||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/logo.6ce24c58.svg"},54:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(15),r=a.n(s),i=(a(44),a(3)),l=a(10),o=a(4),d=(a(45),a(2)),u=function(e){var t=e.setSearchText;return Object(d.jsx)("input",{className:"search",placeholder:"Search everything...",onChange:function(e){return t(e.target.value)}})};a(47);function j(e){var t=e.setSearchText;return Object(d.jsxs)("div",{className:"nav-wrap flex spaceBetween",children:[Object(d.jsxs)("div",{className:"nav-left-wrap flex itemCenter",children:[Object(d.jsxs)(l.b,{to:"/photos",className:"nav-link flex itemCenter",children:[Object(d.jsx)("img",{className:"nav-logo",src:a(53).default}),Object(d.jsx)("h1",{className:"nav-title",children:"Photos"})]}),Object(d.jsx)(l.b,{to:"/like",className:"nav-link",children:Object(d.jsx)("p",{children:"Likes"})}),Object(d.jsx)(l.b,{to:"/delete",className:"nav-link",children:Object(d.jsx)("p",{children:"Deletes"})})]}),Object(d.jsx)("div",{className:"nav-right-wrap",children:Object(d.jsx)(u,{setSearchText:t})})]})}a(54);var b=function(e){return e.enable?Object(d.jsx)("div",{className:"spinner"}):null},O=a(24),f=a(25),m=a(14),h=a.n(m),v=a(22),x=a(36),p=a.n(x),g=a(17),N={base:"https://images-api.nasa.gov",search:"/search"},w=function(){var e,t,a;return{getInstance:function(){return e||delete(e=p.a.create({baseURL:N.base,headers:{Connection:"keep-alive",Accept:"application/json","Content-Type":"application/json","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"}})).constructor,e},setToken:function(e){a=e},getToken:function(){return a},setLogout:function(e){t=e},getLogout:function(){return t}}}(),S=w.getInstance();S.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),S.interceptors.response.use(function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(204!==t.status&&205!==t.status){e.next=2;break}return e.abrupt("return",null);case 2:if(!(t.status>=200&&t.status<300)){e.next=4;break}return e.abrupt("return",t.data);case 4:return(a=new Error(t.statusText)).response=t,e.abrupt("return",Promise.reject(a));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 401===t.response.status&&Object(g.a)("Unauthorized or session expired",{position:g.a.POSITION.TOP_CENTER,type:g.a.TYPE.ERROR,toastId:"Unauthorized or session expired"}),e.abrupt("return",Promise.reject(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var k=S,y=function(e,t){var a,n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}];for(a=n.length-1;a>0&&!(e>=n[a].value);a--);return(e/n[a].value).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n[a].symbol};var I=a(23),_=a(37),E=a(38),T=(a(74),function(e){var t,a=e.item,c=e.onDelete,s=Object(n.useState)(a.like),r=Object(i.a)(s,2),l=r[0],u=r[1],j=Object(o.f)();return Object(d.jsxs)("div",{className:"card-wrap",onClick:function(){localStorage.setItem("showItem",JSON.stringify(a));var e=JSON.parse(localStorage.getItem("view")||"{}");e[a.data[0].nasa_id]=e[a.data[0].nasa_id]?e[a.data[0].nasa_id]+1:1,localStorage.setItem("view",JSON.stringify(e)),j.push("/detail")},children:[Object(d.jsxs)("div",{className:"card-info flex column spaceBetween",children:[Object(d.jsxs)("div",{className:"flex spaceBetween",children:[Object(d.jsx)("div",{onClick:function(e){var t=JSON.parse(localStorage.getItem("like")||"[]");l?t=t.filter((function(e){return e.data[0].nasa_id!==a.data[0].nasa_id})):t.push(a),localStorage.setItem("like",JSON.stringify(t)),u(!l),e.stopPropagation()},children:l?Object(d.jsx)(I.b,{className:"card-like"}):Object(d.jsx)(I.a,{className:"card-unlike"})}),Object(d.jsx)("div",{onClick:function(e){var t=JSON.parse(localStorage.getItem("delete")||"[]");t.push(a),localStorage.setItem("delete",JSON.stringify(t)),c&&c(a),e.stopPropagation()},children:Object(d.jsx)(_.a,{className:"card-remove"})})]}),Object(d.jsxs)("div",{className:"flex spaceBetween",children:[Object(d.jsx)("p",{className:"card-title flex",children:a.data[0].title}),Object(d.jsxs)("span",{className:"flex itemCenter",children:[Object(d.jsx)("p",{className:"card-view",children:y(a.view,1)}),Object(d.jsx)(E.a,{className:"card-eye"})]})]})]}),Object(d.jsx)("img",{className:"card-img",src:a&&a.links?null===(t=a.links[0])||void 0===t?void 0:t.href:void 0})]})});a(75),a(76);function D(){return Object(d.jsx)("div",{className:"no-result-wrap center",children:Object(d.jsx)("h1",{className:"no-result",children:"No results"})})}var J=function(e){var t=e.setEnable,a=e.searchText,c=Object(n.useState)([]),s=Object(i.a)(c,2),r=s[0],l=s[1],o=Object(n.useState)(1),u=Object(i.a)(o,2),j=u[0],b=u[1],m=Object(n.useState)(!1),h=Object(i.a)(m,2),v=h[0],x=h[1],p=Object(n.useState)(100),g=Object(i.a)(p,1)[0],w=Object(n.useState)(!1),S=Object(i.a)(w,2),y=S[0],I=S[1],_=function(e,t){var a=Object(n.useState)(e),c=Object(i.a)(a,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){r(e)}),t);return function(){clearTimeout(a)}}),[e]),s}(a,350),E=function(e){for(var t=Math.floor((window.innerWidth-200)/250),a=JSON.parse(localStorage.getItem("like")||"[]").map((function(e){return e.data[0].nasa_id})),n=JSON.parse(localStorage.getItem("view")||"{}"),c=JSON.parse(localStorage.getItem("delete")||"[]").map((function(e){return e.data[0].nasa_id})),s=e.filter((function(e){return!c.includes(e.data[0].nasa_id)})),i=1===j?[]:r,o=0;o<s.length;o++){var d=Object(f.a)(Object(f.a)({},s[o]),{},{like:a.includes(s[o].data[0].nasa_id),view:n[s[o].data[0].nasa_id]||0}),u=(o+j*g)%t;i[u]?i[u].push(d):i[u]=[d]}l(i),I(!0)},J=function(e){for(var t=r,a=0;a<r.length;a++)t[a]=Object(O.a)(r[a].filter((function(t){return t.data[0].nasa_id!==e.data[0].nasa_id})));l(Object(O.a)(t))},C=function(){window.innerHeight+document.documentElement.scrollTop===document.scrollingElement.scrollHeight&&(b(j+1),t&&t(!0))},P=function(){var e=Date.now();k.get(N.search,{params:{q:a||'""',page:j}}).then((function(a){var n=Date.now();setTimeout((function(){var e;E(null===a||void 0===a||null===(e=a.collection)||void 0===e?void 0:e.items),t&&t(!1),window.removeEventListener("scroll",C),window.addEventListener("scroll",C)}),2e3-(n-e))}))};return Object(n.useEffect)((function(){t&&t(!0),l([]),I(!1)}),[]),Object(n.useEffect)((function(){P()}),[j]),Object(n.useEffect)((function(){v?(I(!1),l([]),t&&t(!0),1!==j?b(1):P()):x(!0)}),[_]),r.length?Object(d.jsx)("div",{className:"home flex row center",children:r.map((function(e,t){return Object(d.jsx)("div",{key:t,children:e.map((function(e,t){return Object(d.jsx)(T,{item:e,key:t,onDelete:J})}))})}))}):y&&Object(d.jsx)(D,{})},C=a(39);a(77);function P(e){var t=e.name;return Object(d.jsx)("div",{className:"tag",children:t})}a(78);function L(e){var t,a=e.item,n=e.index,c=e.onDelete,s=Object(o.f)();return Object(d.jsxs)("div",{className:"list-wrap flex",onClick:function(){localStorage.setItem("showItem",JSON.stringify(a));var e=JSON.parse(localStorage.getItem("view")||"{}");e[a.data[0].nasa_id]=e[a.data[0].nasa_id]?e[a.data[0].nasa_id]+1:1,localStorage.setItem("view",JSON.stringify(e)),s.push("/detail")},children:[Object(d.jsxs)("div",{className:"selfCenter list-index",children:["#",n+1]}),Object(d.jsx)("img",{className:"list-img",src:a&&a.links?null===(t=a.links[0])||void 0===t?void 0:t.href:void 0,alt:""}),Object(d.jsxs)("div",{className:"list-info column",children:[Object(d.jsx)("h3",{className:"list-title",children:a.data[0].title}),Object(d.jsx)("p",{className:"list-date",children:a.data[0].date_created}),Object(d.jsx)("div",{className:"flex wrap",children:a.data[0].keywords.map((function(e,t){return Object(d.jsx)(P,{name:e,key:t})}))}),Object(d.jsx)("p",{className:"list-description",children:a.data[0].description})]}),c&&Object(d.jsx)("div",{onClick:function(e){c&&c(a),e.stopPropagation()},className:"selfCenter",children:Object(d.jsx)(C.a,{className:"list-remove"})})]})}a(79);function B(e){var t=e.setEnable,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),u=o[0],j=o[1],b=Object(n.useState)(!1),O=Object(i.a)(b,2),f=O[0],m=O[1];return Object(n.useEffect)((function(){t&&t(!0);var e=Date.now(),a=JSON.parse(localStorage.getItem("like")||"[]"),n=Date.now();setTimeout((function(){r(a),m(!0),t&&t(!1)}),1e3-(n-e))}),[]),Object(n.useEffect)((function(){var e=s||[];switch(u){case"newest":e.sort((function(e,t){return new Date(t.data[0].date_created)-new Date(e.data[0].date_created)}));break;case"lastest":e.sort((function(e,t){return new Date(e.data[0].date_created)-new Date(t.data[0].date_created)}))}j(e)}),[u]),s.length?Object(d.jsxs)("div",{className:"like",children:[Object(d.jsx)("div",{className:"flex end like-select",children:Object(d.jsxs)("select",{onChange:function(e){return j(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"None"}),Object(d.jsx)("option",{value:"newest",children:"Newest"}),Object(d.jsx)("option",{value:"lastest",children:"Lastest"})]})}),s.map((function(e,t){return Object(d.jsx)(L,{item:e,key:t,index:t})}))]}):f&&Object(d.jsx)(D,{})}a(80);function F(e){var t=e.setEnable,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),u=o[0],j=o[1],b=Object(n.useState)(!1),O=Object(i.a)(b,2),f=O[0],m=O[1],h=function(e){var t=JSON.parse(localStorage.getItem("delete")||"[]");t=t.filter((function(t){return t.data[0].nasa_id!==e.data[0].nasa_id})),localStorage.setItem("delete",JSON.stringify(t)),r(t)};return Object(n.useEffect)((function(){t&&t(!0);var e=Date.now(),a=JSON.parse(localStorage.getItem("delete")||"[]"),n=Date.now();setTimeout((function(){r(a),m(!0),t&&t(!1)}),1e3-(n-e))}),[]),Object(n.useEffect)((function(){var e=s||[];switch(u){case"newest":e.sort((function(e,t){return new Date(t.data[0].date_created)-new Date(e.data[0].date_created)}));break;case"lastest":e.sort((function(e,t){return new Date(e.data[0].date_created)-new Date(t.data[0].date_created)}))}j(e)}),[u]),s.length?Object(d.jsxs)("div",{className:"delete",children:[Object(d.jsx)("div",{className:"flex end delete-select",children:Object(d.jsxs)("select",{onChange:function(e){return j(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"None"}),Object(d.jsx)("option",{value:"newest",children:"Newest"}),Object(d.jsx)("option",{value:"lastest",children:"Lastest"})]})}),s.map((function(e,t){return Object(d.jsx)(L,{item:e,key:t,index:t,onDelete:h})}))]}):f&&Object(d.jsx)(D,{})}a(81);function R(e){var t,a,c,s,r=e.setEnable,l=Object(n.useState)({}),o=Object(i.a)(l,2),u=o[0],j=o[1],b=Object(n.useState)({}),O=Object(i.a)(b,2),f=O[0],m=O[1];return Object(n.useEffect)((function(){r&&r(!0);var e=Date.now(),t=JSON.parse(localStorage.getItem("showItem")||"{}"),a=JSON.parse(localStorage.getItem("view")||"{}");m(a);var n=Date.now();setTimeout((function(){j(t),r&&r(!1)}),1e3-(n-e))}),[]),Object(d.jsxs)("div",{className:"detail flex",children:[Object(d.jsxs)("div",{className:"detail-left flex column",children:[Object(d.jsx)("img",{className:"detail-img",src:u&&u.links?null===(t=u.links[0])||void 0===t?void 0:t.href:void 0,alt:""}),Object(d.jsx)("h3",{children:u&&u.data&&u.data[0].title})]}),Object(d.jsxs)("div",{className:"detail-right flex column",children:[Object(d.jsx)("div",{className:"flex wrap",children:u&&u.data?null===(a=u.data[0])||void 0===a||null===(c=a.keywords)||void 0===c?void 0:c.map((function(e,t){return Object(d.jsx)(P,{name:e,key:t})})):null}),Object(d.jsx)("p",{className:"detail-date",children:u&&u.data&&u.data[0].date_created}),Object(d.jsxs)("p",{className:"detail-info",children:[Object(d.jsx)("b",{children:"Nasa Id: "}),u&&u.data&&u.data[0].nasa_id]}),Object(d.jsxs)("p",{className:"detail-info",children:[Object(d.jsx)("b",{children:"Center: "}),u&&u.data&&u.data[0].center]}),Object(d.jsxs)("p",{className:"detail-info",children:[Object(d.jsx)("b",{children:"View: "}),u&&u.data&&(s=f[u.data[0].nasa_id],s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")||0)]}),Object(d.jsx)("p",{children:u&&u.data&&u.data[0].description})]})]})}a(82);var q=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),u=r[0],O=r[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(l.a,{children:[Object(d.jsx)(j,{setSearchText:O}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/like",children:Object(d.jsx)(B,{setEnable:c})}),Object(d.jsx)(o.a,{path:"/delete",children:Object(d.jsx)(F,{setEnable:c})}),Object(d.jsx)(o.a,{path:"/detail",children:Object(d.jsx)(R,{setEnable:c})}),Object(d.jsx)(o.a,{path:"/",children:Object(d.jsx)(J,{setEnable:c,searchText:u})})]})]}),Object(d.jsx)(b,{enable:a})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),U()}},[[83,1,2]]]);
//# sourceMappingURL=main.e9870bc4.chunk.js.map