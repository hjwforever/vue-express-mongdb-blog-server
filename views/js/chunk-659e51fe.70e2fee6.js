(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-659e51fe"],{"1f57":function(e,t,n){"use strict";var a=n("d4ec"),s=n("bee2"),o=n("bc3a"),r=n.n(o);function c(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var u="http://localhost:8080/api/test/",i=function(){function e(){Object(a["a"])(this,e)}return Object(s["a"])(e,[{key:"getPublicContent",value:function(){return r.a.get(u+"all")}},{key:"getUserBoard",value:function(){return r.a.get(u+"user",{headers:c()})}},{key:"getModeratorBoard",value:function(){return r.a.get(u+"mod",{headers:c()})}},{key:"getAdminBoard",value:function(){return r.a.get(u+"admin",{headers:c()})}}]),e}();t["a"]=new i},"2c84":function(e,t,n){"use strict";n("790f")},"790f":function(e,t,n){},"9a40":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex"},[n("header",{staticClass:"title-heading"},[n("h3",[e._v(e._s(e.content))])]),n("PostsList")],1)},s=[],o=(n("d3b7"),n("25f0"),n("1f57")),r=n("807b"),c={name:"User",components:{PostsList:r["default"]},data:function(){return{content:""}},mounted:function(){var e=this;o["a"].getUserBoard().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))}},u=c,i=(n("2c84"),n("2877")),f=Object(i["a"])(u,a,s,!1,null,"55a036f0",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-659e51fe.70e2fee6.js.map