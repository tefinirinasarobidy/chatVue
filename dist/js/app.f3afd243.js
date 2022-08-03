(function(){"use strict";var e={6136:function(e,t,s){s.d(t,{Z:function(){return m}});var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}}),e.user?a("div",{staticClass:"py-2 px-4 border-bottom d-none d-lg-block"},[a("div",{staticClass:"d-flex align-items-center py-1"},[a("div",{staticClass:"position-relative"},[e.user.active_profile?a("img",{staticClass:"rounded-circle mr-1",attrs:{src:e.pathPdp+e.user.active_profile.media.file_name,alt:"Admin",width:"40",height:"40"}}):a("img",{staticClass:"rounded-circle mr-1",attrs:{src:s(6857),alt:"avatar",width:"40",height:"40"}})]),a("div",{staticClass:"flex-grow-1 pl-3"},[a("strong",[e._v(e._s(e.user.firstname+" "+e.user.lastname))])])])]):e._e(),a("div",{staticClass:"position-relative"},[a("div",{staticClass:"chat-messages p-4"},e._l(e.allMessage,(function(t){return a("div",{key:t.id,staticClass:" pb-4",class:t.customer_id==e.id?"chat-message-right":"chat-message-left"},[a("div",[t.customer.active_profile?a("img",{staticClass:"rounded-circle mr-1",attrs:{src:e.pathPdp+t.customer.active_profile.media.file_name,width:"40",height:"40"}}):a("img",{staticClass:"rounded-circle mr-1",attrs:{src:s(6857),width:"40",height:"40"}}),a("div",{staticClass:"text-muted small text-nowrap mt-2"},[e._v("2:33 am")])]),a("div",{staticClass:"flex-shrink-1 bg-light rounded py-2 px-3 mr-3"},[t.customer_id!=e.id?a("div",{staticClass:"font-weight-bold mb-1"},[e._v(e._s(t.customer.firstname+" "+t.customer.lastname))]):e._e(),e._v(" "+e._s(t.message)+" ")])])})),0)]),a("div",{staticClass:"flex-grow-0 py-3 px-4 border-top"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Type your message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),a("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.sendMessage()}}},[e._v("Send")])])])])])])])},r=[],o=s(3709),n=s(2111),i=s(9234),l={name:"DemareMessage",props:{user:Object},data(){return{allMessage:[],id:localStorage.getItem("user"),pathPdp:o.Z.baseUrl+"images/profile/",message:""}},watch:{user:{handler(e){console.log("value",e),e.convExist&&(this.allMessage=[],window.Echo.private("conversation."+e.convExist.id).listen(".newMessage",(e=>{console.log("new message",e),e.data&&this.allMessage.push(e.data)})),this.getMessage(e.convExist))}}},methods:{getMessage(e){n.Z.getMessage(e.id).then((e=>{console.log("message",e),this.allMessage=e.data.data}))},sendMessage(){let e={talked_id:this.user.id,conversation_id:this.user.convExist?this.user.convExist.id:null,message:this.message};console.log(e),n.Z.sendMessage(e).then((e=>{console.log("res",e),this.$emit("newConv",e.data.conversation,this.user)}))}},mounted(){i.Z.configEcho(localStorage.getItem("token")),console.log("echo",i.Z)}},c=l,u=s(1001),d=(0,u.Z)(c,a,r,!1,null,"31acfda8",null),m=d.exports},6963:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"main-body"},[e.infoUser?a("div",{staticClass:"row gutters-sm"},[a("div",{staticClass:"col-md-4 mb-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex flex-column align-items-center text-center"},[e.infoUser.active_profile?a("img",{staticClass:"rounded-circle",attrs:{src:e.pathPdp+e.infoUser.active_profile.media.file_name,alt:"Admin",width:"150",height:"150"}}):a("img",{staticClass:"rounded-circle",attrs:{src:s(6857),alt:"Admin",width:"150",height:"150"}}),e.id_user==e.id_connecter?a("div",{staticClass:"logo",on:{click:function(t){return e.openFile()}}},[a("img",{attrs:{src:s(6454),alt:""}}),a("input",{ref:"picture",staticClass:"form-control d-none",attrs:{id:"picture",type:"file",accept:"image/*",name:"picture",autofocus:""},on:{change:function(t){return e.piece_jointe(t)}}})]):e._e(),a("div",{staticClass:"mt-3"},[a("h4",[e._v("John Doe")]),a("p",{staticClass:"text-secondary mb-1"},[e._v("Full Stack Developer")]),a("p",{staticClass:"text-muted font-size-sm"},[e._v("Bay Area, San Francisco, CA")]),e.id_user!=e.id_connecter?a("button",{staticClass:"btn btn-outline-primary",attrs:{"data-bs-toggle":"modal","data-bs-target":"#exampleModal"},on:{click:function(t){e.userSelected=e.infoUser}}},[e._v("Message")]):e._e()])])])]),a("DemareMessage",{attrs:{user:e.userSelected},on:{newConv:e.newConversation}})],1),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card mb-3"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"col-sm-9 text-secondary"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.infoUser.firstname,expression:"infoUser.firstname"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.infoUser.firstname},on:{input:function(t){t.target.composing||e.$set(e.infoUser,"firstname",t.target.value)}}})])]),a("hr"),a("div",{staticClass:"row"},[e._m(1),a("div",{staticClass:"col-sm-9 text-secondary"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.infoUser.lastname,expression:"infoUser.lastname"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.infoUser.lastname},on:{input:function(t){t.target.composing||e.$set(e.infoUser,"lastname",t.target.value)}}})])]),a("hr"),a("div",{staticClass:"row"},[e._m(2),a("div",{staticClass:"col-sm-9 text-secondary"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.infoUser.email,expression:"infoUser.email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.infoUser.email},on:{input:function(t){t.target.composing||e.$set(e.infoUser,"email",t.target.value)}}})])]),a("hr"),a("div",{staticClass:"row"},[e._m(3),a("div",{staticClass:"col-sm-9 text-secondary"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.infoUser.sexe,expression:"infoUser.sexe"}],staticClass:"custom-select form-control",attrs:{id:"inputGroupSelect01"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.infoUser,"sexe",t.target.multiple?s:s[0])}}},[a("option",{attrs:{value:"homme"}},[e._v("Homme")]),a("option",{attrs:{value:"femme"}},[e._v("Femme")])])])]),a("hr"),e.id_user==e.id_connecter?a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12",on:{click:function(t){return t.preventDefault(),e.edit()}}},[a("button",{staticClass:"btn btn-info ",attrs:{target:"__blank"}},[e._v("Edit")])])]):e._e()])])])]):e._e()])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-3"},[s("h6",{staticClass:"mb-0"},[e._v("First Name")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-3"},[s("h6",{staticClass:"mb-0"},[e._v("Lastname")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-3"},[s("h6",{staticClass:"mb-0"},[e._v("Email")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-3"},[s("h6",{staticClass:"mb-0"},[e._v("Sexe")])])}],o=s(3709),n=s(6592),i=s(6136),l={name:"ProfileView",props:["id"],components:{DemareMessage:i.Z},data(){return{formImg:{image:"",type:"image"},infoUser:null,pathPdp:o.Z.baseUrl+"images/profile/",id_connecter:localStorage.getItem("user"),id_params:this.$route.params.id,id_user:null,userSelected:null}},methods:{openFile(){this.$refs.picture.click()},piece_jointe(e){const t=e.target;if(t.files&&t.files[0]){var s=new FileReader;s.onload=e=>{this.formImg.image=e.target.result,this.modifPdp()},s.readAsDataURL(t.files[0])}},modifPdp(){n.Z.updatePdp(this.formImg,this.id).then((e=>{console.log(e)}))},edit(){n.Z.editInfoUser(this.infoUser,this.id).then((e=>{console.log(e)}))},newConversation(e){this.userSelected.convExist=e}},mounted(){this.id_user=this.id?this.id:this.id_params,n.Z.profile(this.id_user).then((e=>{console.log(e),this.infoUser=e.data}))}},c=l,u=s(1001),d=(0,u.Z)(c,a,r,!1,null,"08a497b6",null),m=d.exports},3709:function(e,t){t["Z"]={baseUrl:"https://back-chat-v1.herokuapp.com/",headers:{headers:{"Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}}},9234:function(e,t,s){var a=s(2602),r=s(3709);t["Z"]={configEcho:e=>{window.Pusher=s(8812),window.Echo=new a.Z({broadcaster:"pusher",key:"5a62c10d65059c1ecfdb",cluster:"eu",wsHost:"https://back-chat-v1.herokuapp.com/",wsPort:6001,disableStats:!0,forceTLS:!1,authEndpoint:r.Z.baseUrl+"api/broadcasting/auth",auth:{headers:{Authorization:"Bearer "+e}},enabledTransports:["ws"]})}}},4933:function(e,t,s){var a=s(8935),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("nav",[s("router-link",{attrs:{to:{name:"profile",params:{id:e.id}}}},[e._v("Mon Profile")]),e._v(" | "),s("router-link",{attrs:{to:"/message"}},[e._v("Message")]),e._v(" | "),s("router-link",{attrs:{to:"/liste-user"}},[e._v("Liste Utilisateru")]),e._v(" | "),s("a",{on:{click:function(t){return e.logout()}}},[e._v("logout")])],1),s("router-view",{attrs:{to:"/"}})],1)},o=[],n=s(7127),i={data(){return{token:localStorage.getItem("token"),id:localStorage.getItem("user")}},methods:{logout(){n.Z.logout().then((e=>{console.log(e),e.data&&(localStorage.removeItem("token"),this.$router.push("/login"))}))}}},l=i,c=s(1001),u=(0,c.Z)(l,r,o,!1,null,null,null),d=u.exports,m=s(2809),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("ProfileView",{attrs:{id:e.id}})],1)},p=[],v=s(6963),g={name:"HomeView",components:{ProfileView:v["default"]},data(){return{id:localStorage.getItem("user")}}},h=g,b=(0,c.Z)(h,f,p,!1,null,null,null),_=b.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"vh-100",staticStyle:{"background-color":"#508bfc"}},[s("div",{staticClass:"container py-5 h-100"},[s("div",{staticClass:"row d-flex justify-content-center align-items-center h-100"},[s("div",{staticClass:"col-12 col-md-8 col-lg-6 col-xl-5"},[s("div",{staticClass:"card shadow-2-strong",staticStyle:{"border-radius":"1rem"}},[s("div",{staticClass:"card-body p-5 text-center"},[s("h3",{staticClass:"mb-5"},[e._v("Sign in")]),s("div",{staticClass:"form-outline mb-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",id:"typeEmailX-2"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),s("label",{staticClass:"form-label",attrs:{for:"typeEmailX-2"}},[e._v("Email")])]),s("div",{staticClass:"form-outline mb-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"typePasswordX-2"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),s("label",{staticClass:"form-label",attrs:{for:"typePasswordX-2"}},[e._v("Password")])]),e._m(0),s("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.login()}}},[e._v("Login")]),s("hr",{staticClass:"my-4"}),s("router-link",{attrs:{to:"/register"}},[e._v("creer un compte ")])],1)])])])])])},y=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-check d-flex justify-content-start mb-4"},[s("input",{staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"form1Example3"}}),s("label",{staticClass:"form-check-label",attrs:{for:"form1Example3"}},[e._v(" Remember password ")])])}],w={name:"LoginView",data(){return{form:{email:"",password:""}}},methods:{login(){n.Z.login(this.form).then((e=>{console.log(e),e.data.access_token&&(localStorage.setItem("token",e.data.access_token),localStorage.setItem("user",e.data.user),this.$router.push("/"))}))}}},x=w,k=(0,c.Z)(x,C,y,!1,null,null,null),Z=k.exports;a.Z.use(m.Z);const U=[{path:"/",name:"home",component:_,meta:{isAuth:!0}},{path:"/about",name:"about",component:()=>s.e(443).then(s.bind(s,5830)),meta:{isAuth:!0}},{path:"/login",name:"login",component:Z,meta:{isAuth:!1}},{path:"/register",name:"register",component:()=>s.e(443).then(s.bind(s,3909)),meta:{isAuth:!1}},{path:"/message",name:"message",component:()=>s.e(443).then(s.bind(s,7160)),meta:{isAuth:!0}},{path:"/profile/:id",name:"profile",component:()=>s.e(443).then(s.bind(s,6963)),meta:{isAuth:!0}},{path:"/liste-user",name:"liste-user",component:()=>s.e(443).then(s.bind(s,6983)),meta:{isAuth:!0}}],E=new m.Z({mode:"history",base:"/",routes:U});E.beforeEach(((e,t,s)=>{let a=localStorage.getItem("token");e.meta.isAuth&&(console.log("rerer"),a||s("/login")),"/login"!=e.path&&"/register"!=e.path||!a||s("/"),s()}));var S=E;s(1462);a.Z.config.productionTip=!1,new a.Z({router:S,render:e=>e(d)}).$mount("#app")},2111:function(e,t,s){var a=s(8935),r=s(6166),o=s.n(r),n=s(9483),i=s(3709);a.Z.use(n.Z,o()),t["Z"]={allConversation(){return o().get(i.Z.baseUrl+"api/conversation",i.Z.headers)},getMessage(e){return o().get(i.Z.baseUrl+"api/conversation/show/"+e,i.Z.headers)},sendMessage(e){return o().post(i.Z.baseUrl+"api/conversation/send",e,i.Z.headers)}}},7127:function(e,t,s){var a=s(8935),r=s(6166),o=s.n(r),n=s(9483),i=s(3709);a.Z.use(n.Z,o()),t["Z"]={login(e){return console.log("ddde",e,i.Z.baseUrl),o().post(i.Z.baseUrl+"api/login",e)},register(e){return o().post(i.Z.baseUrl+"api/register",e)},logout(){const e=localStorage.getItem("token");return console.log("token",e),o().post(i.Z.baseUrl+"api/logout",null,{headers:{"Content-type":"application/json",Authorization:"Bearer "+e}})}}},6592:function(e,t,s){var a=s(8935),r=s(6166),o=s.n(r),n=s(9483),i=s(3709);a.Z.use(n.Z,o()),t["Z"]={profile(e){return o().get(i.Z.baseUrl+"api/profile/"+e,i.Z.headers)},updatePdp(e,t){return o().post(i.Z.baseUrl+"api/profile/update/"+t,e,i.Z.headers)},editInfoUser(e,t){return o().put(i.Z.baseUrl+"api/profile/update-info/"+t,e,i.Z.headers)},allUser(){return o().get(i.Z.baseUrl+"api/all-user",i.Z.headers)}}},6454:function(e,t,s){e.exports=s.p+"img/camera.679d6384.svg"},6857:function(e,t,s){e.exports=s.p+"img/avatar.62f5d021.png"}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.m=e,function(){s.amdO={}}(),function(){var e=[];s.O=function(t,a,r,o){if(!a){var n=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((function(e){return s.O[e](a[l])}))?a.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,a){return s.f[a](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/about.e742c104.js"}}(),function(){s.miniCssF=function(e){return"css/about.882bfcdf.css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-project:";s.l=function(a,r,o,n){if(e[a])e[a].push(r);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",t+o),i.src=a),e[a]=[r];var m=function(t,s){i.onerror=i.onload=null,clearTimeout(f);var r=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(s)})),t)return t(s)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var e=function(e,t,s,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)s();else{var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=i,r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=o,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var r=s[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){r=n[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=function(a){return new Promise((function(r,o){var n=s.miniCssF(a),i=s.p+n;if(t(n,i))return r();e(a,i,r,o)}))},r={143:0};s.f.miniCss=function(e,t){var s={443:1};r[e]?t.push(r[e]):0!==r[e]&&s[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};s.f.j=function(t,a){var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(s,a){r=e[t]=[s,a]}));a.push(r[2]=o);var n=s.p+s.u(t),i=new Error,l=function(a){if(s.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,r[1](i)}};s.l(n,l,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,n=a[0],i=a[1],l=a[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(r in i)s.o(i,r)&&(s.m[r]=i[r]);if(l)var u=l(s)}for(t&&t(a);c<n.length;c++)o=n[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},a=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(4933)}));a=s.O(a)})();
//# sourceMappingURL=app.f3afd243.js.map