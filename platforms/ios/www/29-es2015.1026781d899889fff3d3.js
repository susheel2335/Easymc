(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{qq66:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class u{}var o=t("pMnS"),i=t("oBZk"),a=t("ZZ/e"),r=t("s7LF"),s=t("mrSG"),d=t("h3kM");class p{constructor(n,l,t,e){this.router=n,this.Provider=l,this.storage=t,this.toastCtrl=e,this.email="",this.password="",this.status="",this.confirm_password=""}ngOnInit(){}prosesRegister(){return s.b(this,void 0,void 0,(function*(){""==this.email?(yield this.toastCtrl.create({message:"email is required",duration:3e3})).present():""==this.password?(yield this.toastCtrl.create({message:"Password is required",duration:3e3})).present():this.password!=this.confirm_password?(yield this.toastCtrl.create({message:'Password not Match!"',duration:3e3})).present():""==this.status?(yield this.toastCtrl.create({message:"status is required",duration:3e3})).present():this.Provider.postData({email:this.email,password:this.password,confirm_password:this.confirm_password,status:this.status,aksi:"register"},"login.php").subscribe(n=>s.b(this,void 0,void 0,(function*(){var l=n.msg;n.success?(this.router.navigate(["/login"]),(yield this.toastCtrl.create({message:"Register succesful",duration:3e3})).present()):(yield this.toastCtrl.create({message:l,duration:3e3})).present()})))}))}formLogin(){this.router.navigate(["/login"])}}var g=t("iInd"),b=t("xgBC"),c=e.ob({encapsulation:0,styles:[["@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);*[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}h1[_ngcontent-%COMP%]{margin:0;padding:5px 0;font-size:22px;font-weight:800!important}h2[_ngcontent-%COMP%]{margin:0;font-size:20px;font-weight:600!important}h3[_ngcontent-%COMP%]{margin:0;padding:18px 0 0;font-size:18px;font-weight:600!important}h4[_ngcontent-%COMP%]{padding:15px 0 0;font-size:16px;color:#696969}p[_ngcontent-%COMP%]{font-size:14px;color:#696969;text-align:center}h6[_ngcontent-%COMP%]{padding:10px 0 20px;font-size:14px;color:#696969;text-align:center}a[_ngcontent-%COMP%]{font-weight:600;color:#124ae5}h5[_ngcontent-%COMP%]{padding:15px 0 0;font-size:14px;color:#696969;text-align:center}.subtext[_ngcontent-%COMP%]{font-size:16px;color:#86868f}.container[_ngcontent-%COMP%]{padding:30px 20px 20px}.containers[_ngcontent-%COMP%]{padding:20px}ion-icon[_ngcontent-%COMP%]{color:#c4c4c4;padding:20px;font-size:16px}ion-input[_ngcontent-%COMP%]{--padding-bottom:15.5px;--padding-top:15.5px;font-size:16px;border-color:#fff;border-radius:25px;box-shadow:1px 1px 4px 0 rgba(55,84,170,.28);border-width:0;margin-top:20px;--padding-start:30px}.title[_ngcontent-%COMP%]{margin-top:20px;text-align:center;font-size:24px;font-weight:700}.sigup[_ngcontent-%COMP%]{margin-top:40px;height:47px;width:100%;font-size:16px;font-weight:800}.sigin-f[_ngcontent-%COMP%]{height:47px;width:48%;font-size:16px;color:#fff;border-radius:25px}.sigin-g[_ngcontent-%COMP%]{height:47px;width:48%;font-size:16px;color:#6f6f6f;border-radius:25px}ion-button[_ngcontent-%COMP%]{--border-radius:25px}.mark[_ngcontent-%COMP%]{color:#ed1d1d}ion-item[_ngcontent-%COMP%]{--inner-border-width:0px 0px 0px 0px;--padding-bottom:2px;--padding-top:2px;border-color:#fff;border-radius:25px;box-shadow:1px 1px 4px 0 rgba(55,84,170,.28);margin-top:20px;--padding-start:30px;color:#6f6f6f}ion-radio[_ngcontent-%COMP%]{--color:#999;--color-checked:#124AE5;--border-width:2px;--border-style:solid;width:20px;height:20px}@media screen and (min-width:640px){.container[_ngcontent-%COMP%]{padding:30px 80px 60px;max-width:600px;margin:50px auto;border-radius:20px}.title[_ngcontent-%COMP%]{margin-top:0;text-align:center;font-size:24px;font-weight:700}}"]],data:{}});function h(n){return e.Hb(0,[(n()(),e.qb(0,0,null,null,63,"ion-content",[],null,null,null,i.R,i.m)),e.pb(1,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(n()(),e.qb(2,0,null,0,61,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.qb(3,0,null,null,1,"h2",[["class","title"]],null,null,null,null,null)),(n()(),e.Gb(-1,null,["Let\u2019s Get Started!"])),(n()(),e.qb(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Gb(-1,null,["Create an account to Msily to get all features"])),(n()(),e.qb(7,0,null,null,6,"ion-input",[["placeholder","Email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.Cb(n,8)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Cb(n,8)._handleInputEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.email=t)&&u),u}),i.V,i.q)),e.pb(8,16384,null,0,a.Mb,[e.k],null,null),e.Db(1024,null,r.b,(function(n){return[n]}),[a.Mb]),e.pb(10,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,r.c,null,[r.e]),e.pb(12,16384,null,0,r.d,[[4,r.c]],null,null),e.pb(13,49152,null,0,a.F,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.qb(14,0,null,null,6,"ion-input",[["placeholder","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.Cb(n,15)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Cb(n,15)._handleInputEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.password=t)&&u),u}),i.V,i.q)),e.pb(15,16384,null,0,a.Mb,[e.k],null,null),e.Db(1024,null,r.b,(function(n){return[n]}),[a.Mb]),e.pb(17,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,r.c,null,[r.e]),e.pb(19,16384,null,0,r.d,[[4,r.c]],null,null),e.pb(20,49152,null,0,a.F,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.qb(21,0,null,null,6,"ion-input",[["placeholder","Confirm Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.Cb(n,22)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Cb(n,22)._handleInputEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.confirm_password=t)&&u),u}),i.V,i.q)),e.pb(22,16384,null,0,a.Mb,[e.k],null,null),e.Db(1024,null,r.b,(function(n){return[n]}),[a.Mb]),e.pb(24,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,r.c,null,[r.e]),e.pb(26,16384,null,0,r.d,[[4,r.c]],null,null),e.pb(27,49152,null,0,a.F,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.qb(28,0,null,null,28,"ion-radio-group",[["slot","primary"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.Cb(n,29)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Cb(n,29)._handleChangeEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.status=t)&&u),u}),i.Y,i.u)),e.pb(29,16384,null,0,a.Lb,[e.k],null,null),e.Db(1024,null,r.b,(function(n){return[n]}),[a.Lb]),e.pb(31,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,r.c,null,[r.e]),e.pb(33,16384,null,0,r.d,[[4,r.c]],null,null),e.pb(34,49152,null,0,a.ab,[e.h,e.k,e.x],null,null),(n()(),e.qb(35,0,null,0,3,"h4",[],null,null,null,null,null)),(n()(),e.Gb(-1,null,["Choose your field "])),(n()(),e.qb(37,0,null,null,1,"span",[["class","mark"]],null,null,null,null,null)),(n()(),e.Gb(-1,null,[" * Choose only one"])),(n()(),e.qb(39,0,null,0,8,"ion-item",[],null,null,null,i.W,i.r)),e.pb(40,49152,null,0,a.G,[e.h,e.k,e.x],null,null),(n()(),e.qb(41,0,null,0,2,"ion-label",[],null,null,null,i.X,i.s)),e.pb(42,49152,null,0,a.M,[e.h,e.k,e.x],null,null),(n()(),e.Gb(-1,0,["MC/PR/PC/Pretty"])),(n()(),e.qb(44,0,null,0,3,"ion-radio",[["checked",""],["value","y"]],null,[[null,"ionBlur"],[null,"ionSelect"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Cb(n,47)._handleBlurEvent(t.target)&&u),"ionSelect"===l&&(u=!1!==e.Cb(n,47)._handleIonSelect(t.target)&&u),u}),i.Z,i.t)),e.Db(5120,null,r.b,(function(n){return[n]}),[a.Kb]),e.pb(46,49152,null,0,a.Z,[e.h,e.k,e.x],{checked:[0,"checked"],value:[1,"value"]},null),e.pb(47,16384,null,0,a.Kb,[e.k],null,null),(n()(),e.qb(48,0,null,0,8,"ion-item",[],null,null,null,i.W,i.r)),e.pb(49,49152,null,0,a.G,[e.h,e.k,e.x],null,null),(n()(),e.qb(50,0,null,0,2,"ion-label",[],null,null,null,i.X,i.s)),e.pb(51,49152,null,0,a.M,[e.h,e.k,e.x],null,null),(n()(),e.Gb(-1,0,["Employer"])),(n()(),e.qb(53,0,null,0,3,"ion-radio",[["value","n"]],null,[[null,"ionBlur"],[null,"ionSelect"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Cb(n,56)._handleBlurEvent(t.target)&&u),"ionSelect"===l&&(u=!1!==e.Cb(n,56)._handleIonSelect(t.target)&&u),u}),i.Z,i.t)),e.Db(5120,null,r.b,(function(n){return[n]}),[a.Kb]),e.pb(55,49152,null,0,a.Z,[e.h,e.k,e.x],{value:[0,"value"]},null),e.pb(56,16384,null,0,a.Kb,[e.k],null,null),(n()(),e.qb(57,0,null,null,2,"ion-button",[["block",""],["class","sigup"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.prosesRegister()&&e),e}),i.I,i.d)),e.pb(58,49152,null,0,a.j,[e.h,e.k,e.x],null,null),(n()(),e.Gb(-1,0,["Create Account"])),(n()(),e.qb(60,0,null,null,3,"h5",[],null,null,null,null,null)),(n()(),e.Gb(-1,null,["Already have an account? "])),(n()(),e.qb(62,0,null,null,1,"a",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.formLogin()&&e),e}),null,null)),(n()(),e.Gb(-1,null,["Sign In."]))],(function(n,l){var t=l.component;n(l,10,0,t.email),n(l,13,0,"Email","text"),n(l,17,0,t.password),n(l,20,0,"password","password"),n(l,24,0,t.confirm_password),n(l,27,0,"Confirm Password","password"),n(l,31,0,t.status),n(l,46,0,"","y"),n(l,55,0,"n")}),(function(n,l){n(l,7,0,e.Cb(l,12).ngClassUntouched,e.Cb(l,12).ngClassTouched,e.Cb(l,12).ngClassPristine,e.Cb(l,12).ngClassDirty,e.Cb(l,12).ngClassValid,e.Cb(l,12).ngClassInvalid,e.Cb(l,12).ngClassPending),n(l,14,0,e.Cb(l,19).ngClassUntouched,e.Cb(l,19).ngClassTouched,e.Cb(l,19).ngClassPristine,e.Cb(l,19).ngClassDirty,e.Cb(l,19).ngClassValid,e.Cb(l,19).ngClassInvalid,e.Cb(l,19).ngClassPending),n(l,21,0,e.Cb(l,26).ngClassUntouched,e.Cb(l,26).ngClassTouched,e.Cb(l,26).ngClassPristine,e.Cb(l,26).ngClassDirty,e.Cb(l,26).ngClassValid,e.Cb(l,26).ngClassInvalid,e.Cb(l,26).ngClassPending),n(l,28,0,e.Cb(l,33).ngClassUntouched,e.Cb(l,33).ngClassTouched,e.Cb(l,33).ngClassPristine,e.Cb(l,33).ngClassDirty,e.Cb(l,33).ngClassValid,e.Cb(l,33).ngClassInvalid,e.Cb(l,33).ngClassPending)}))}function C(n){return e.Hb(0,[(n()(),e.qb(0,0,null,null,1,"app-register",[],null,null,null,h,c)),e.pb(1,114688,null,0,p,[g.m,d.a,b.b,a.Nb],null,null)],(function(n,l){n(l,1,0)}),null)}var x=e.mb("app-register",p,C,{},{},[]),f=t("SVse");class m{}t.d(l,"RegisterPageModuleNgFactory",(function(){return v}));var v=e.nb(u,[],(function(n){return e.zb([e.Ab(512,e.j,e.Y,[[8,[o.a,x]],[3,e.j],e.v]),e.Ab(4608,f.i,f.h,[e.s,[2,f.q]]),e.Ab(4608,r.g,r.g,[]),e.Ab(4608,a.b,a.b,[e.x,e.g]),e.Ab(4608,a.Gb,a.Gb,[a.b,e.j,e.p]),e.Ab(4608,a.Jb,a.Jb,[a.b,e.j,e.p]),e.Ab(1073742336,f.b,f.b,[]),e.Ab(1073742336,r.f,r.f,[]),e.Ab(1073742336,r.a,r.a,[]),e.Ab(1073742336,a.Db,a.Db,[]),e.Ab(1073742336,g.n,g.n,[[2,g.s],[2,g.m]]),e.Ab(1073742336,m,m,[]),e.Ab(1073742336,u,u,[]),e.Ab(1024,g.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);