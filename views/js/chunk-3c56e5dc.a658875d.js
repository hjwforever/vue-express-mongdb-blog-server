(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c56e5dc"],{2388:function(e,r,s){},"2d41":function(e,r,s){"use strict";s("2388")},c66d:function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"container"},[s("header",{staticClass:"title-heading"},[s("h3",[s("strong",[e._v(e._s(e.currentUser.username))]),e._v(" 个人信息 ")])]),s("p",[s("strong",[e._v("Token:")]),e._v(" "+e._s(e.currentUser.accessToken.substring(0,20))+" ... "+e._s(e.currentUser.accessToken.substr(e.currentUser.accessToken.length-20))+" ")]),s("p",[s("strong",[e._v("Id:")]),e._v(" "+e._s(e.currentUser.id)+" ")]),s("p",[s("strong",[e._v("Email:")]),e._v(" "+e._s(e.currentUser.email)+" ")]),s("strong",[e._v("Authorities:")]),s("ul",e._l(e.currentUser.roles,(function(r,t){return s("li",{key:t},[e._v(e._s(r))])})),0)])},n=[],c={name:"Profile",computed:{currentUser:function(){return this.$store.state.auth.user}},mounted:function(){this.currentUser||this.$router.push("/login")}},u=c,i=(s("2d41"),s("2877")),o=Object(i["a"])(u,t,n,!1,null,"886118c4",null);r["default"]=o.exports}}]);
//# sourceMappingURL=chunk-3c56e5dc.a658875d.js.map