(function(t){function e(e){for(var n,s,c=e[0],i=e[1],l=e[2],u=0,d=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},s={app:0},o={app:0},a=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-1ed069fe":"20962d3e","chunk-39eeaa81":"f2e0a3bf","chunk-0d956182":"dce6ffbc","chunk-659e51fe":"97dfc25a","chunk-3c56e5dc":"a658875d","chunk-45a859a1":"dc4fdb41"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={"chunk-1ed069fe":1,"chunk-39eeaa81":1,"chunk-0d956182":1,"chunk-659e51fe":1,"chunk-3c56e5dc":1,"chunk-45a859a1":1};s[t]?e.push(s[t]):0!==s[t]&&r[t]&&e.push(s[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-1ed069fe":"187e6468","chunk-39eeaa81":"5da38bd1","chunk-0d956182":"3d98543c","chunk-659e51fe":"2bb2c82d","chunk-3c56e5dc":"7ae27695","chunk-45a859a1":"ef900c1b"}[t]+".css",o=i.p+n,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete s[t],f.parentNode.removeChild(f),r(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,r[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1b82":function(t,e,r){"use strict";r("f498")},"1c7d":function(t,e,r){},2513:function(t,e,r){"use strict";r("99af");var n=r("d4ec"),s=r("bee2"),o=r("bc3a"),a=r.n(o),c=a.a.create({baseURL:"https://vue-express-mongdb-blog.vercel.app/api",headers:{"Content-type":"application/json"}}),i=function(){function t(){Object(n["a"])(this,t)}return Object(s["a"])(t,[{key:"getAll",value:function(t){return c.get("/posts",{params:t})}},{key:"get",value:function(t){return c.get("/posts/".concat(t))}},{key:"create",value:function(t){return c.post("/posts",t)}},{key:"update",value:function(t,e){return c.put("/posts/".concat(t),e)}},{key:"delete",value:function(t){return c.delete("/posts/".concat(t))}},{key:"deleteAll",value:function(){return c.delete("/posts")}},{key:"findByTitleOrAuthor",value:function(t){return c.get("/posts?title=".concat(t,"&author=").concat(t))}},{key:"like",value:function(t){return c.put("/post/like",t)}}]),t}();e["a"]=new i},"39c1":function(t,e,r){"use strict";r("9a45")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",dark:"",flat:""}},[r("v-app-bar-nav-icon",{staticClass:"mr-3",on:{click:function(t){t.preventDefault()}}},[r("v-img",{attrs:{src:"http://img.aruoxi.top/image/favcionx64.ico",draggable:"false"}})],1),r("v-btn",{staticStyle:{"text-decoration":"none"},attrs:{to:"/home",text:""}},[r("v-icon",[t._v("mdi-home")]),t._v(" 主页 ")],1),t.currentUser?r("v-btn",{staticStyle:{"text-decoration":"none"},attrs:{to:"/user",text:""}},[r("v-icon",[t._v("mdi-file-cog-outline")]),t._v(" 文章管理 ")],1):t._e(),r("v-spacer"),t.currentUser?r("div",[r("v-btn",{staticStyle:{"text-decoration":"none"},attrs:{to:"/profile",text:""}},[r("v-icon",[t._v("mdi-account")]),t._v(" "+t._s(t.currentUser.username)+" ")],1),r("v-btn",{staticStyle:{"text-decoration":"none"},attrs:{text:""},on:{click:function(e){return e.preventDefault(),t.logOut(e)}}},[r("v-icon",[t._v("mdi-logout-variant")]),t._v(" 登出 ")],1)],1):r("div",[r("v-btn",{staticStyle:{"text-decoration":"none"},attrs:{to:"/register",text:""}},[r("v-icon",[t._v("mdi-account-plus-outline")]),t._v(" 注册 ")],1),r("v-btn",{staticStyle:{"text-decoration":"none"},attrs:{to:"/login",text:""}},[r("v-icon",[t._v("mdi-login-variant")]),t._v(" 登录 ")],1)],1)],1),r("Message"),r("v-main",[r("router-view")],1),r("Footer")],1)},o=[],a=(r("caad"),r("2532"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-snackbar",{attrs:{top:"",text:"",color:t.color},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[t.showClose?r("v-btn",t._b({attrs:{icon:"",color:t.color},on:{click:t.close}},"v-btn",n,!1),[r("v-icon",[t._v("mdi-close")])],1):t._e()]}}]),model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("v-icon",{attrs:{dark:"",color:t.color}},[t._v(" "+t._s(t.icon)+" ")]),t._v(" "+t._s(this.$store.state.snackbar.msg)+" ")],1)}),c=[],i={data:function(){return{}},computed:{visible:{get:function(){return this.$store.state.snackbar.visible},set:function(){}},icon:{get:function(){return"success"===this.color?"mdi-check":"error"===this.color?"mdi-alert":""},set:function(){}},showClose:function(){return this.$store.state.snackbar.showClose},color:function(){return this.$store.state.snackbar.color}},methods:{close:function(){this.$store.commit("snackbar/CLOSE_SNACKBAR")}},send:function(t,e,r){this.$store.dispatch("snackbar/openSnackbar",{msg:t,color:e,timeout:r})}},l=i,u=r("2877"),d=r("6544"),f=r.n(d),p=r("8336"),v=r("132d"),m=r("2db4"),h=Object(u["a"])(l,a,c,!1,null,null,null),g=h.exports;f()(h,{VBtn:p["a"],VIcon:v["a"],VSnackbar:m["a"]});var b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{padless:""}},[r("v-card",{staticClass:"blue lighten-1 text-center",attrs:{flat:"",tile:"",width:"100%",elevation:"6",color:"#385F73"}},[r("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("a",{staticStyle:{color:"#201aec"},attrs:{href:"https://github.com/hjwforever/vue-express-mongdb-blog",target:"_blank"}},[t._v(" Vue-Express-MongoDB-BlogManage")]),t._v(" by"),r("strong",[t._v(" 18301127 HJW")])])],1)],1)},_=[],k={name:"Footer",data:function(){return{icons:["mdi-home","mdi-email","mdi-calendar","mdi-delete","mdi-thumb-up","mdi-thumb-down"]}},methods:{toHome:function(){}}},x=k,w=r("b0af"),y=r("99d9"),C=r("553a"),V=Object(u["a"])(x,b,_,!1,null,"c185a54e",null),S=V.exports;f()(V,{VCard:w["a"],VCardText:y["c"],VFooter:C["a"]});var $={name:"App",components:{Message:g,Footer:S},provide:function(){return{currentUser:this.currentUser}},data:function(){return{isRouterAlive:!0}},computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},O=$,A=(r("39c1"),r("7496")),E=r("40dc"),j=r("5bc1"),P=r("adda"),I=r("f6c4"),R=r("2fa4"),B=Object(u["a"])(O,s,o,!1,null,"835cea4a",null),U=B.exports;f()(B,{VApp:A["a"],VAppBar:E["a"],VAppBarNavIcon:j["a"],VBtn:p["a"],VIcon:v["a"],VImg:P["a"],VMain:I["a"],VSpacer:R["a"]});r("d3b7");var T=r("8c4f"),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"2",offset:"5"}},[n("v-img",{staticClass:"circle-img",attrs:{src:r("cf05"),contain:""}})],1)],1),n("v-col",{attrs:{cols:"8",offset:"2"}},[n("v-card",{staticClass:"text-center",attrs:{elevation:"20"}},[t.currentUser?n("v-col",[n("h6",{staticClass:"display-1 font-weight-bold mb-3",staticStyle:{"user-select":"none"}},[t._v(" Hello, "),n("span",{staticClass:"blue--text"},[t._v(t._s(t.currentUser.username))]),t._v(" !"),n("br"),t._v(" Welcome to "),n("a",{attrs:{href:"https://github.com/hjwforever/vue-express-mongdb-blog",target:"_blank"}},[t._v("Vue-Express-MongoDB-Blog")]),t._v(" by "),n("span",{staticClass:"font-italic"},[t._v("HJW")])])]):n("v-col",{staticClass:"m-4"},[n("h6",{staticClass:"display-1 font-weight-bold",staticStyle:{"user-select":"none"}},[t._v(" Hello !"),n("br"),t._v(" Welcome to "),n("a",{attrs:{href:"https://github.com/hjwforever/vue-express-mongdb-blog",target:"_blank"}},[t._v("Vue-Express-MongoDB-Blog")]),t._v(" by "),n("span",{staticClass:"font-italic"},[t._v("HJW")]),n("br"),n("br"),t._v(" ①普通账号(可注册), 不具有删除及修改权限:"),n("br"),n("v-chip",{attrs:{"x-large":"","text-color":"blue",label:""}},[t._v(" 用户名: test 密码:123456")]),t._v(" "),n("br"),t._v(" ②管理员账号(联系管理员注册), 具有删除及修改权限:"),n("br"),n("v-chip",{attrs:{"x-large":"","text-color":"blue",label:""}},[t._v(" 用户名: hjw 密码:123456")])],1)])],1)],1),n("v-col",{attrs:{cols:"10",offset:"1"}},[n("v-expansion-panels",{attrs:{focusable:"",popout:""}},[n("v-app-bar",{staticClass:"v-expansion-panel",attrs:{"aria-expanded":"false",src:"https://picsum.photos/2019/1080?random"}},[n("v-row",{staticClass:"text-warning",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"3"}},[n("v-card-title",[t._v(" 序号 标题 ")])],1),n("v-col",{attrs:{cols:"2"}},[n("v-card-title",[t._v(" 作者 ")])],1),n("v-col",{attrs:{cols:"7"}},[n("v-card-title",[t._v(" 内容 ")])],1)],1)],1),t._l(t.posts,(function(e,r){return n("v-expansion-panel",{key:e.id},[n("v-expansion-panel-header",{staticClass:"text-white",attrs:{color:t.colors[r%t.colors.length]},scopedSlots:t._u([{key:"default",fn:function(s){var o=s.open;return[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"3"}},[t._v(" "+t._s(r+1)+". "+t._s(e.title)+" ")]),n("v-col",{attrs:{cols:"2"}},[n("v-fade-transition",{attrs:{"leave-absolute":""}},[o?t._e():n("v-chip",{attrs:{pill:"",dark:"",color:"#52c147"}},[n("v-avatar",{attrs:{left:""}},[n("v-img",{attrs:{src:t.authorUrl(e.author)}})],1),t._v(" "+t._s(e.author)+" ")],1)],1)],1),n("v-col",{staticClass:"text--secondary",attrs:{cols:"7"}},[n("v-fade-transition",{attrs:{"leave-absolute":""}},[o?t._e():n("span",{staticClass:"text-white"},[t._v(" "+t._s(e.content.length>20?e.content.substr(0,20)+"...":e.content)+" ")])])],1)],1)]}}],null,!0)}),n("v-expansion-panel-content",{staticClass:"mt-4"},[n("PostItem",{attrs:{post:e,color:t.colors[r%t.colors.length]}})],1)],1)}))],2)],1),n("infinite-loading",{on:{infinite:t.infiniteHandler}})],1)},F=[],M=r("2909"),L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{color:t.color,dark:"",elevation:"20"}},[r("v-card-title",[t._v(t._s(t.post.title))]),r("v-card-subtitle",[t._v(" 作者: "),r("v-chip",{attrs:{pill:"",dark:"",color:"#52c147"}},[r("v-avatar",{attrs:{left:""}},[r("v-img",{attrs:{src:t.authorUrl}})],1),t._v(" "+t._s(t.post.author)+" ")],1),t._v(" "+t._s(t.post.createdAt.substr(0,10))+" "+t._s(t.post.createdAt.substr(11,8))+" "),t.post.createdAt!==t.post.updatedAt?r("span",[t._v(" 最后修改于 "+t._s(t.post.updatedAt.substr(0,10))+" "+t._s(t.post.updatedAt.substr(11,8))+" ")]):t._e()],1),r("v-col",{attrs:{cols:"6",offset:"3"}},[r("v-card-text",t._l(t.post.content.split("\n"),(function(e,n){return r("v-row",{key:n},[t._v(t._s(e))])})),1)],1),r("v-col",{attrs:{cols:"1",offset:"8"}},[r("v-card-actions",[r("v-btn",{attrs:{icon:"",tile:""},on:{click:function(e){return t.like(!1)}}},[t._v(" "+t._s(t.post.likes.length)+" "),r("v-icon",{attrs:{right:"",color:"blue"}},[t._v(" mdi-thumb-up ")])],1),r("v-btn",{attrs:{icon:"",tile:""},on:{click:function(e){return t.like(!0)}}},[r("v-icon",{attrs:{right:"",color:"purple"}},[t._v(" mdi-thumb-down ")])],1)],1)],1)],1)},D=[],H=(r("99af"),r("c975"),r("a434"),r("25f0"),r("2513")),q={name:"PostItem",props:{post:{type:Object,required:!0},color:{type:String,required:!0,default:function(){return"#1F7087"}}},methods:{like:function(t){var e=this;if(this.hasPermission()){var r={id:this.post.id,userId:this.currentUser.id,unlike:t};H["a"].like(r).then((function(r){console.log(r.data),200===r.status?(t?e.post.likes.splice(e.post.likes.indexOf(e.currentUser.id),1):e.post.likes.push(e.currentUser.id),e.$send(t?"取消点赞成功!":"点赞成功!","success",1500)):e.$send(t?"你现在没有对该文章点赞!":"你已经点过赞了!","success",1500)})).catch((function(t){console.log(t.toString())})).finally((function(){console.log("当前文章《".concat(e.post.title,"》的点赞总数为").concat(e.post.likes.length," ,列表(用户id)如下:"),e.post.likes)}))}},hasPermission:function(){return!!this.currentUser||(console.log("抱歉,请登录后再进行操作!"),this.$swal.fire({title:"抱歉,请登录后再进行操作!",icon:"error",confirmButtonText:"好吧"}),!1)}},computed:{currentUser:function(){return this.$store.state.auth.user},authorUrl:function(){return"http://img.aruoxi.top/image/".concat(this.post.author,".jpg")}}},J=q,K=r("8212"),W=r("cc20"),z=r("62ad"),Y=r("0fd9"),G=Object(u["a"])(J,L,D,!1,null,"61100ef2",null),Q=G.exports;f()(G,{VAvatar:K["a"],VBtn:p["a"],VCard:w["a"],VCardActions:y["a"],VCardSubtitle:y["b"],VCardText:y["c"],VCardTitle:y["d"],VChip:W["a"],VCol:z["a"],VIcon:v["a"],VImg:P["a"],VRow:Y["a"]});var X={name:"Home",components:{PostItem:Q},data:function(){return{page:0,size:6,posts:[],colors:["#f94144","#f3722c","#f8961e","#f9844a","#f9c74f","#90be6d","#43aa8b","#4d908e","#577590","#277da1"]}},methods:{infiniteHandler:function(t,e,r){var n=this,s={page:e||this.page,size:r||this.size};H["a"].getAll(s).then((function(e){var r,s=e.data;s.posts.length?(n.page+=1,(r=n.posts).push.apply(r,Object(M["a"])(s.posts)),t.loaded()):t.complete()}))},authorUrl:function(t){return"http://img.aruoxi.top/image/".concat(t,".jpg")}},computed:{currentUser:function(){var t=this.$store.state.auth.user;return t||this.$send("暂无发表或管理文章的权限,请登录或注册","error",1e4),t}}},Z=X,tt=(r("b8ab"),r("cd55")),et=r("49e2"),rt=r("c865"),nt=r("0393"),st=r("0789"),ot=Object(u["a"])(Z,N,F,!1,null,"68bde0ce",null),at=ot.exports;f()(ot,{VAppBar:E["a"],VAvatar:K["a"],VCard:w["a"],VCardTitle:y["d"],VChip:W["a"],VCol:z["a"],VExpansionPanel:tt["a"],VExpansionPanelContent:et["a"],VExpansionPanelHeader:rt["a"],VExpansionPanels:nt["a"],VFadeTransition:st["c"],VImg:P["a"],VRow:Y["a"]});var ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"mx-auto mt-15"},[r("v-col",{attrs:{cols:"6",offset:"3"}},[r("v-card",{attrs:{color:"#f7f7f7"}},[r("v-col",{attrs:{offset:"3","offset-sm":"5"}},[r("v-img",{staticClass:"profile-img-card",attrs:{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png","max-width":"96px"}})],1),r("v-col",{attrs:{cols:"8",offset:"1","offset-sm":"2"}},[r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{label:"username",rules:[function(t){return!!t||"请输入用户名"}],required:""},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),r("v-text-field",{attrs:{label:"password",type:"password",rules:[function(t){return!!t||"请输入密码"}],required:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),r("v-card-actions",[r("div",{staticClass:"m-auto"},[r("v-btn",{staticClass:"mr-4 mb-1",staticStyle:{"text-decoration":"none"},attrs:{small:"",color:"primary",to:"/register"}},[t._v(" 前往注册 ")]),r("v-btn",{staticClass:"mr-4 mb-1",attrs:{disabled:!t.valid,color:"success"},on:{click:t.handleLogin}},[t._v(" 登录 ")]),r("v-btn",{attrs:{small:"",color:"accent"},on:{click:t.reset}},[t._v(" 清除 ")])],1)])],1)],1)],1)],1)],1)},it=[],lt=r("d4ec"),ut=function t(e,r,n){Object(lt["a"])(this,t),this.username=e,this.email=r,this.password=n},dt={name:"Login",data:function(){return{valid:!1,user:new ut("","")}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(){var t=this;this.user.username&&this.user.password&&this.$store.dispatch("auth/login",this.user).then((function(){t.$send(t.user.username+"登录成功!","success"),t.$router.push("/user")}),(function(e){t.$send(t.user.username+"登录失败! "+e.toString(),"error")}))},reset:function(){this.$refs.form.reset()}}},ft=dt,pt=(r("1b82"),r("4bd4")),vt=r("8654"),mt=Object(u["a"])(ft,ct,it,!1,null,"27a07610",null),ht=mt.exports;f()(mt,{VBtn:p["a"],VCard:w["a"],VCardActions:y["a"],VCol:z["a"],VForm:pt["a"],VImg:P["a"],VRow:Y["a"],VTextField:vt["a"]});var gt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"mx-auto mt-15"},[r("v-col",{attrs:{cols:"6",offset:"3"}},[r("v-card",{attrs:{color:"#f7f7f7"}},[r("v-col",{attrs:{offset:"3","offset-sm":"5"}},[r("v-img",{staticClass:"profile-img-card",attrs:{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png","max-width":"96px"}})],1),r("v-row",[r("v-col",{attrs:{cols:"8",offset:"1","offset-sm":"2"}},[r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{counter:10,rules:t.usernameRules,label:"username",required:""},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),r("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),r("v-text-field",{attrs:{rules:t.passwordRules,label:"password",type:"password",required:""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),r("v-text-field",{attrs:{rules:t.rePasswordRules,label:"rePassword",type:"password",required:""},model:{value:t.rePassword,callback:function(e){t.rePassword=e},expression:"rePassword"}}),r("v-card-actions",[r("div",{staticClass:"m-auto"},[r("v-btn",{staticClass:"mr-2 mb-2",staticStyle:{"text-decoration":"none"},attrs:{small:"",color:"primary",to:"/login"}},[t._v(" 前往登录 ")]),r("v-btn",{staticClass:"mr-2",attrs:{disabled:!t.valid,color:"success"},on:{click:t.handleRegister}},[t._v(" 注册 ")]),r("v-btn",{attrs:{small:"",color:"accent"},on:{click:t.reset}},[t._v(" 清除 ")])],1)])],1)],1)],1)],1)],1)],1)},bt=[],_t={name:"Register",data:function(){var t=this;return{valid:!1,user:new ut("","",""),usernameRules:[function(t){return!!t||"请输入用户名"},function(t){return t&&t.length>=3&&t.length<=10||"用户名长度为3~10位"}],emailRules:[function(t){return!!t||"请输入邮箱"},function(t){return/.+@.+\..+/.test(t)||"邮箱格式错误"}],passwordRules:[function(t){return!!t||"请填写密码"},function(t){return t&&t.length>=6&&t.length<=18||"密码长度为6~18位"}],rePassword:"",rePasswordRules:[function(t){return!!t||"请确认密码"},function(e){return e&&e===t.user.password||"两次密码输入不一致"}]}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var t=this;this.$validator.validate().then((function(e){e&&t.$store.dispatch("auth/register",t.user).then((function(){t.$send(t.user.username+"注册成功! ","success"),t.$router.push("/user")}),(function(e){t.$send(t.user.username+"注册失败!"+e.toString(),"error")}))}))},reset:function(){this.$refs.form.reset()}}},kt=_t,xt=(r("fea2"),Object(u["a"])(kt,gt,bt,!1,null,"108040e0",null)),wt=xt.exports;f()(xt,{VBtn:p["a"],VCard:w["a"],VCardActions:y["a"],VCol:z["a"],VForm:pt["a"],VImg:P["a"],VRow:Y["a"],VTextField:vt["a"]}),n["a"].use(T["a"]);var yt=[{path:"/",name:"home",component:at},{path:"/home",component:at},{path:"/login",component:ht},{path:"/register",component:wt},{path:"/profile",name:"profile",component:function(){return r.e("chunk-3c56e5dc").then(r.bind(null,"c66d"))}},{path:"/admin",name:"admin",component:function(){return r.e("chunk-45a859a1").then(r.bind(null,"b295"))}},{path:"/mod",name:"moderator",component:function(){return r.e("chunk-1ed069fe").then(r.bind(null,"77f5"))}},{path:"/user",name:"user",component:function(){return Promise.all([r.e("chunk-39eeaa81"),r.e("chunk-0d956182"),r.e("chunk-659e51fe")]).then(r.bind(null,"9a40"))}},{path:"/",alias:"/posts",name:"posts",component:function(){return Promise.all([r.e("chunk-39eeaa81"),r.e("chunk-0d956182")]).then(r.bind(null,"807b"))}},{path:"/posts/:id",name:"posts-details",component:function(){return r.e("chunk-39eeaa81").then(r.bind(null,"9c93"))}}],Ct=new T["a"]({routes:yt});Ct.beforeEach((function(t,e,r){var n=["/login","/register","/home"],s=!n.includes(t.path),o=localStorage.getItem("user");s&&!o?r("/login"):r()}));var Vt=Ct,St=r("2f62"),$t=r("bee2"),Ot=r("bc3a"),At=r.n(Ot),Et="https://vue-express-mongdb-blog.vercel.app/api/auth/",jt=function(){function t(){Object(lt["a"])(this,t)}return Object($t["a"])(t,[{key:"login",value:function(t){return At.a.post(Et+"signin",{username:t.username,password:t.password}).then((function(t){return t.data.accessToken&&localStorage.setItem("user",JSON.stringify(t.data)),t.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(t){return At.a.post(Et+"signup",{username:t.username,email:t.email,password:t.password})}}]),t}(),Pt=new jt,It=JSON.parse(localStorage.getItem("user")),Rt=It?{status:{loggedIn:!0},user:It}:{status:{loggedIn:!1},user:null},Bt={namespaced:!0,state:Rt,actions:{login:function(t,e){var r=t.commit;return Pt.login(e).then((function(t){return r("loginSuccess",t),Promise.resolve(t)}),(function(t){return r("loginFailure"),Promise.reject(t)}))},logout:function(t){var e=t.commit;Pt.logout(),e("logout")},register:function(t,e){var r=t.commit;return Pt.register(e).then((function(t){return r("registerSuccess"),Promise.resolve(t.data)}),(function(t){return r("registerFailure"),Promise.reject(t)}))}},mutations:{loginSuccess:function(t,e){t.status.loggedIn=!0,t.user=e},loginFailure:function(t){t.status.loggedIn=!1,t.user=null},logout:function(t){t.status.loggedIn=!1,t.user=null},registerSuccess:function(t){t.status.loggedIn=!1},registerFailure:function(t){t.status.loggedIn=!1}}},Ut={namespaced:!0,state:{msg:"",color:"",visible:!1,showClose:!0,timeout:2e3},mutations:{OPEN_SNACKBAR:function(t,e){t.visible=!0,t.msg=e.msg,t.color=e.color,t.timeout=e.timeout},CLOSE_SNACKBAR:function(t){t.visible=!1},setShowClose:function(t,e){t.showClose=e},setTimeout:function(t,e){t.timeout=e}},actions:{openSnackbar:function(t,e){t.commit("OPEN_SNACKBAR",{msg:e.msg,color:e.color}),setTimeout((function(){t.commit("CLOSE_SNACKBAR")}),e.timeout||2e3)}}};n["a"].use(St["a"]);var Tt=new St["a"].Store({modules:{auth:Bt,snackbar:Ut}}),Nt=r("7bb1"),Ft=r("e166"),Mt=r.n(Ft),Lt=r("f309");n["a"].use(Lt["a"]);var Dt=new Lt["a"]({}),Ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"mx-auto"},[r("v-alert",{attrs:{text:"",color:"teal",icon:"mdi-database-settings",border:"left"}},[t._v(" 没有了, 没有了, 真的一篇文章都不剩了... ")])],1)},qt=[],Jt={name:"NoMore"},Kt=Jt,Wt=r("0798"),zt=r("a523"),Yt=Object(u["a"])(Kt,Ht,qt,!1,null,null,null),Gt=Yt.exports;f()(Yt,{VAlert:Wt["a"],VContainer:zt["a"]});var Qt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"mx-auto"},[r("v-alert",{attrs:{text:"",color:"teal",icon:"mdi-database-search",border:"left"}},[t._v(" 没有查询结果哟... ")])],1)},Xt=[],Zt={name:"NoResults"},te=Zt,ee=Object(u["a"])(te,Qt,Xt,!1,null,null,null),re=ee.exports;f()(ee,{VAlert:Wt["a"],VContainer:zt["a"]});var ne=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"mx-auto"},[r("v-alert",{attrs:{text:"",color:"error",icon:"mdi-database-alert",border:"left"}},[t._v(" 出错了, 请重试或检查错误... ")])],1)},se=[],oe={name:"Error"},ae=oe,ce=Object(u["a"])(ae,ne,se,!1,null,null,null),ie=ce.exports;f()(ce,{VAlert:Wt["a"],VContainer:zt["a"]});var le=r("5886");r("4413");n["a"].config.productionTip=!1,n["a"].use(Nt["a"]),n["a"].use(Mt.a,{props:{spinner:"waveDots"},slots:{noMore:Gt,noResults:re,error:ie}}),n["a"].use(le["default"]),n["a"].prototype.$send=g.send,new n["a"]({router:Vt,store:Tt,vuetify:Dt,render:function(t){return t(U)}}).$mount("#app")},8446:function(t,e,r){},"9a45":function(t,e,r){},b8ab:function(t,e,r){"use strict";r("1c7d")},cf05:function(t,e,r){t.exports=r.p+"img/logo.d8b57415.png"},f498:function(t,e,r){},fea2:function(t,e,r){"use strict";r("8446")}});
//# sourceMappingURL=app.70556c8a.js.map