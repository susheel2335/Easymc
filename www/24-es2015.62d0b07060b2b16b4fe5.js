(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"f+ep":function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class o{}var u=t("pMnS"),s=t("oBZk"),i=t("ZZ/e"),r=t("s7LF"),a=t("mrSG"),g=t("h3kM");class p{constructor(n,l,t,e,o){this.router=n,this.Provider=l,this.storage=t,this.platform=e,this.toastCtrl=o,this.email="mc@hotmail.com",this.password="123456",this.status="n"}ngOnInit(){}prosesLogin(){return a.b(this,void 0,void 0,(function*(){""!=this.email&&""!=this.password?this.Provider.postData({email:this.email,password:this.password,status:this.status,aksi:"login"},"login.php").subscribe(n=>a.b(this,void 0,void 0,(function*(){var l=n.msg;n.success?("y"==n.result.status?(this.storage.set("session_storage",n.result),this.router.navigate(["/tabs/mc/home"]),(yield this.toastCtrl.create({message:"Login  user Succesfully.",duration:2e3})).present()):"n"==n.result.status?(this.storage.set("session_storage",n.result),this.router.navigate(["/tabbar/employer/homeem"]),(yield this.toastCtrl.create({message:"Login N user Succesfully.",duration:2e3})).present()):""==n.result.status&&(this.storage.set("session_storage",n.result),(yield this.toastCtrl.create({message:"error",duration:3e3})).present()),this.email="",this.password="",this.status="",console.log(n)):(yield this.toastCtrl.create({message:l,duration:2e3})).present()}))):(yield this.toastCtrl.create({message:"Email or Password Invalid.",duration:2e3})).present()}))}formRegister(){this.router.navigate(["/register"])}}var b=t("iInd"),c=t("xgBC"),d=e.qb({encapsulation:0,styles:[["@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);*[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}h1[_ngcontent-%COMP%]{margin:0;padding:5px 0;font-size:22px;font-weight:800!important}h2[_ngcontent-%COMP%]{margin:0;font-size:20px;font-weight:600!important}h3[_ngcontent-%COMP%]{margin:0;padding:18px 0 0;font-size:18px;font-weight:600!important}h4[_ngcontent-%COMP%]{margin:0;padding:0;font-size:16px;font-weight:600!important;float:left}.subtext[_ngcontent-%COMP%]{font-size:16px;color:#86868f}.container[_ngcontent-%COMP%]{padding:30px 20px 20px}@media screen and (min-width:640px){.container[_ngcontent-%COMP%]{padding:60px 80px;max-width:500px;margin:50px auto;border-radius:20px}}.containers[_ngcontent-%COMP%]{padding:20px}.logo[_ngcontent-%COMP%]{margin-top:40px;text-align:center}img[_ngcontent-%COMP%]{width:90px;height:90px}ion-icon[_ngcontent-%COMP%]{color:#c4c4c4;padding:20px;font-size:16px}ion-input[_ngcontent-%COMP%]{--padding-bottom:15.5px;--padding-top:15.5px;font-size:16px;border-color:#fff;border-radius:25px;box-shadow:1px 1px 4px 0 rgba(55,84,170,.28);border-width:0;margin-top:20px;--padding-start:30px}.title[_ngcontent-%COMP%]{margin-top:10px;text-align:center;font-size:24px;font-weight:700}p[_ngcontent-%COMP%]{font-size:14px;color:#696969;text-align:center}h6[_ngcontent-%COMP%]{padding:10px 0 20px;font-size:14px;color:#696969;text-align:center}a[_ngcontent-%COMP%]{font-weight:600;color:#124ae5}h5[_ngcontent-%COMP%]{padding:30px 0 0;font-size:14px;color:#696969;text-align:center}.sigin[_ngcontent-%COMP%]{margin-top:40px;height:47px;width:100%;font-size:16px;font-weight:800}.sigin-f[_ngcontent-%COMP%]{height:47px;width:48%;font-size:16px;color:#fff;border-radius:25px}.sigin-g[_ngcontent-%COMP%]{height:47px;width:48%;font-size:16px;color:#6f6f6f;border-radius:25px}ion-button[_ngcontent-%COMP%]{--border-radius:25px}"]],data:{}});function h(n){return e.Ob(0,[(n()(),e.sb(0,0,null,null,40,"ion-content",[],null,null,null,s.kb,s.m)),e.rb(1,49152,null,0,i.u,[e.h,e.k,e.x],null,null),(n()(),e.sb(2,0,null,0,38,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,1,"div",[["class","logo"]],null,null,null,null,null)),(n()(),e.sb(4,0,null,null,0,"img",[["alt","RNVm2k.png"],["border","0"],["src","https://sv1.picz.in.th/images/2020/01/06/RNVm2k.png"]],null,null,null,null,null)),(n()(),e.sb(5,0,null,null,1,"h2",[["class","title"]],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Welcome to msily"])),(n()(),e.sb(7,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["log in your existing account"])),(n()(),e.sb(9,0,null,null,6,"ion-input",[["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.Eb(n,10)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Eb(n,10)._handleInputEvent(t.target)&&o),"ngModelChange"===l&&(o=!1!==(u.email=t)&&o),o}),s.ub,s.w)),e.rb(10,16384,null,0,i.Pb,[e.k],null,null),e.Jb(1024,null,r.e,(function(n){return[n]}),[i.Pb]),e.rb(12,671744,null,0,r.h,[[8,null],[8,null],[8,null],[6,r.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Jb(2048,null,r.f,null,[r.h]),e.rb(14,16384,null,0,r.g,[[4,r.f]],null,null),e.rb(15,49152,null,0,i.G,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.sb(16,0,null,null,6,"ion-input",[["placeholder","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.Eb(n,17)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Eb(n,17)._handleInputEvent(t.target)&&o),"ngModelChange"===l&&(o=!1!==(u.password=t)&&o),o}),s.ub,s.w)),e.rb(17,16384,null,0,i.Pb,[e.k],null,null),e.Jb(1024,null,r.e,(function(n){return[n]}),[i.Pb]),e.rb(19,671744,null,0,r.h,[[8,null],[8,null],[8,null],[6,r.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Jb(2048,null,r.f,null,[r.h]),e.rb(21,16384,null,0,r.g,[[4,r.f]],null,null),e.rb(22,49152,null,0,i.G,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.sb(23,0,null,null,2,"ion-button",[["block",""],["class","sigin"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.prosesLogin()&&e),e}),s.bb,s.d)),e.rb(24,49152,null,0,i.k,[e.h,e.k,e.x],null,null),(n()(),e.Mb(-1,0,["Sign In"])),(n()(),e.sb(26,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.sb(27,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Or connect using"])),(n()(),e.sb(29,0,null,null,7,"ion-buttons",[["slot","primary"]],null,null,null,s.cb,s.e)),e.rb(30,49152,null,0,i.l,[e.h,e.k,e.x],null,null),(n()(),e.sb(31,0,null,0,2,"ion-button",[["block",""],["class","sigin-f"],["style","background: #124AE5;"]],null,null,null,s.bb,s.d)),e.rb(32,49152,null,0,i.k,[e.h,e.k,e.x],null,null),(n()(),e.Mb(-1,0,["Facebook"])),(n()(),e.sb(34,0,null,0,2,"ion-button",[["block",""],["class","sigin-g"],["style","background: #ffffff; border: 1px solid #6F6F6F;;"]],null,null,null,s.bb,s.d)),e.rb(35,49152,null,0,i.k,[e.h,e.k,e.x],null,null),(n()(),e.Mb(-1,0,["Google"])),(n()(),e.sb(37,0,null,null,3,"h5",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["New user? "])),(n()(),e.sb(39,0,null,null,1,"a",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.formRegister()&&e),e}),null,null)),(n()(),e.Mb(-1,null,[" Create an account"]))],(function(n,l){var t=l.component;n(l,12,0,t.email),n(l,15,0,"Email","email"),n(l,19,0,t.password),n(l,22,0,"password","password")}),(function(n,l){n(l,9,0,e.Eb(l,14).ngClassUntouched,e.Eb(l,14).ngClassTouched,e.Eb(l,14).ngClassPristine,e.Eb(l,14).ngClassDirty,e.Eb(l,14).ngClassValid,e.Eb(l,14).ngClassInvalid,e.Eb(l,14).ngClassPending),n(l,16,0,e.Eb(l,21).ngClassUntouched,e.Eb(l,21).ngClassTouched,e.Eb(l,21).ngClassPristine,e.Eb(l,21).ngClassDirty,e.Eb(l,21).ngClassValid,e.Eb(l,21).ngClassInvalid,e.Eb(l,21).ngClassPending)}))}function f(n){return e.Ob(0,[(n()(),e.sb(0,0,null,null,1,"app-login",[],null,null,null,h,d)),e.rb(1,114688,null,0,p,[b.m,g.a,c.b,i.Lb,i.Qb],null,null)],(function(n,l){n(l,1,0)}),null)}var m=e.ob("app-login",p,f,{},{},[]),x=t("SVse");class C{}t.d(l,"LoginPageModuleNgFactory",(function(){return M}));var M=e.pb(o,[],(function(n){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[u.a,m]],[3,e.j],e.v]),e.Cb(4608,x.l,x.k,[e.s,[2,x.z]]),e.Cb(4608,r.j,r.j,[]),e.Cb(4608,i.b,i.b,[e.x,e.g]),e.Cb(4608,i.Hb,i.Hb,[i.b,e.j,e.p]),e.Cb(4608,i.Mb,i.Mb,[i.b,e.j,e.p]),e.Cb(1073742336,x.b,x.b,[]),e.Cb(1073742336,r.i,r.i,[]),e.Cb(1073742336,r.a,r.a,[]),e.Cb(1073742336,i.Eb,i.Eb,[]),e.Cb(1073742336,b.n,b.n,[[2,b.s],[2,b.m]]),e.Cb(1073742336,C,C,[]),e.Cb(1073742336,o,o,[]),e.Cb(1024,b.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);