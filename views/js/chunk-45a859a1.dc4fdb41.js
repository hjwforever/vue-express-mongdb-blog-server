(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45a859a1"],{"1f57":function(e,t,n){"use strict";var a=n("d4ec"),c=n("bee2"),r=n("bc3a"),s=n.n(r);function o(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var u="https://vue-express-mongdb-blog.vercel.app/api/test/",i=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,[{key:"getPublicContent",value:function(){return s.a.get(u+"all")}},{key:"getUserBoard",value:function(){return s.a.get(u+"user",{headers:o()})}},{key:"getModeratorBoard",value:function(){return s.a.get(u+"mod",{headers:o()})}},{key:"getAdminBoard",value:function(){return s.a.get(u+"admin",{headers:o()})}}]),e}();t["a"]=new i},"220c":function(e,t,n){},a147:function(e,t,n){"use strict";n("220c")},b295:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("header",{staticClass:"title-heading"},[n("h3",[e._v(e._s(e.content))])])])},c=[],r=(n("d3b7"),n("25f0"),n("1f57")),s={name:"Admin",components:{},data:function(){return{content:""}},mounted:function(){var e=this;r["a"].getAdminBoard().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))}},o=s,u=(n("a147"),n("2877")),i=Object(u["a"])(o,a,c,!1,null,"cffefbec",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-45a859a1.dc4fdb41.js.map