(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ed069fe"],{"0c5a":function(e,t,n){},"11ac":function(e,t,n){"use strict";n("0c5a")},"1f57":function(e,t,n){"use strict";var a=n("d4ec"),r=n("bee2"),c=n("bc3a"),o=n.n(c);function s(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var u="https://vue-express-mongdb-blog.vercel.app/api/test/",i=function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,[{key:"getPublicContent",value:function(){return o.a.get(u+"all")}},{key:"getUserBoard",value:function(){return o.a.get(u+"user",{headers:s()})}},{key:"getModeratorBoard",value:function(){return o.a.get(u+"mod",{headers:s()})}},{key:"getAdminBoard",value:function(){return o.a.get(u+"admin",{headers:s()})}}]),e}();t["a"]=new i},"77f5":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("header",{staticClass:"title-heading"},[n("h3",[e._v(e._s(e.content))])])])},r=[],c=(n("d3b7"),n("25f0"),n("1f57")),o={name:"Moderator",data:function(){return{content:""}},mounted:function(){var e=this;c["a"].getModeratorBoard().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))}},s=o,u=(n("11ac"),n("2877")),i=Object(u["a"])(s,a,r,!1,null,"5fb8cf64",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-1ed069fe.20962d3e.js.map