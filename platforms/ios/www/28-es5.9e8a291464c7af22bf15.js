(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{qq66:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=function(){return function(){}}(),o=t("pMnS"),r=t("oBZk"),i=t("ZZ/e"),a=t("gIcY"),s=t("mrSG"),d=t("h3kM"),g=function(){function n(n,l,t,e){this.router=n,this.Provider=l,this.storage=t,this.toastCtrl=e,this.email="",this.password="",this.status="",this.confirm_password=""}return n.prototype.ngOnInit=function(){},n.prototype.prosesRegister=function(){return s.b(this,void 0,void 0,(function(){var n=this;return s.e(this,(function(l){switch(l.label){case 0:return""!=this.email?[3,2]:[4,this.toastCtrl.create({message:"email is required",duration:3e3})];case 1:return l.sent().present(),[3,9];case 2:return""!=this.password?[3,4]:[4,this.toastCtrl.create({message:"Password is required",duration:3e3})];case 3:return l.sent().present(),[3,9];case 4:return this.password==this.confirm_password?[3,6]:[4,this.toastCtrl.create({message:'Password not Match!"',duration:3e3})];case 5:return l.sent().present(),[3,9];case 6:return""!=this.status?[3,8]:[4,this.toastCtrl.create({message:"status is required",duration:3e3})];case 7:return l.sent().present(),[3,9];case 8:this.Provider.postData({email:this.email,password:this.password,confirm_password:this.confirm_password,status:this.status,aksi:"register"},"login.php").subscribe((function(l){return s.b(n,void 0,void 0,(function(){var n;return s.e(this,(function(t){switch(t.label){case 0:return n=l.msg,l.success?(this.router.navigate(["/login"]),[4,this.toastCtrl.create({message:"Register succesful",duration:3e3})]):[3,2];case 1:return t.sent().present(),[3,4];case 2:return[4,this.toastCtrl.create({message:n,duration:3e3})];case 3:t.sent().present(),t.label=4;case 4:return[2]}}))}))})),l.label=9;case 9:return[2]}}))}))},n.prototype.formLogin=function(){this.router.navigate(["/login"])},n}(),c=t("ZYCi"),b=t("iw74"),p=e.qb({encapsulation:0,styles:[["@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);*[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}h1[_ngcontent-%COMP%]{margin:0;padding:5px 0;font-size:22px;font-weight:800!important}h2[_ngcontent-%COMP%]{margin:0;font-size:20px;font-weight:600!important}h3[_ngcontent-%COMP%]{margin:0;padding:18px 0 0;font-size:18px;font-weight:600!important}h4[_ngcontent-%COMP%]{padding:15px 0 0;font-size:16px;color:#696969}p[_ngcontent-%COMP%]{font-size:14px;color:#696969;text-align:center}h6[_ngcontent-%COMP%]{padding:10px 0 20px;font-size:14px;color:#696969;text-align:center}a[_ngcontent-%COMP%]{font-weight:600;color:#124ae5}h5[_ngcontent-%COMP%]{padding:15px 0 0;font-size:14px;color:#696969;text-align:center}.subtext[_ngcontent-%COMP%]{font-size:16px;color:#86868f}.container[_ngcontent-%COMP%]{padding:30px 20px 20px}.containers[_ngcontent-%COMP%]{padding:20px}ion-icon[_ngcontent-%COMP%]{color:#c4c4c4;padding:20px;font-size:16px}ion-input[_ngcontent-%COMP%]{--padding-bottom:15.5px;--padding-top:15.5px;font-size:16px;border-color:#fff;border-radius:25px;box-shadow:1px 1px 4px 0 rgba(55,84,170,.28);border-width:0;margin-top:20px;--padding-start:30px}.title[_ngcontent-%COMP%]{margin-top:20px;text-align:center;font-size:24px;font-weight:700}.sigup[_ngcontent-%COMP%]{margin-top:40px;height:47px;width:100%;font-size:16px;font-weight:800}.sigin-f[_ngcontent-%COMP%]{height:47px;width:48%;font-size:16px;color:#fff;border-radius:25px}.sigin-g[_ngcontent-%COMP%]{height:47px;width:48%;font-size:16px;color:#6f6f6f;border-radius:25px}ion-button[_ngcontent-%COMP%]{--border-radius:25px}.mark[_ngcontent-%COMP%]{color:#ed1d1d}ion-item[_ngcontent-%COMP%]{--inner-border-width:0px 0px 0px 0px;--padding-bottom:2px;--padding-top:2px;border-color:#fff;border-radius:25px;box-shadow:1px 1px 4px 0 rgba(55,84,170,.28);margin-top:20px;--padding-start:30px;color:#6f6f6f}ion-radio[_ngcontent-%COMP%]{--color:#999;--color-checked:#124AE5;--border-width:2px;--border-style:solid;width:20px;height:20px}@media screen and (min-width:640px){.container[_ngcontent-%COMP%]{padding:30px 80px 60px;max-width:600px;margin:50px auto;border-radius:20px}.title[_ngcontent-%COMP%]{margin-top:0;text-align:center;font-size:24px;font-weight:700}}"]],data:{}});function h(n){return e.Jb(0,[(n()(),e.sb(0,0,null,null,63,"ion-content",[],null,null,null,r.R,r.m)),e.rb(1,49152,null,0,i.t,[e.h,e.k,e.z],null,null),(n()(),e.sb(2,0,null,0,61,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,1,"h2",[["class","title"]],null,null,null,null,null)),(n()(),e.Ib(-1,null,["Let\u2019s Get Started!"])),(n()(),e.sb(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,["Create an account to Msily to get all features"])),(n()(),e.sb(7,0,null,null,6,"ion-input",[["placeholder","Email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.Eb(n,8)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Eb(n,8)._handleInputEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.email=t)&&u),u}),r.V,r.q)),e.rb(8,16384,null,0,i.Mb,[e.k],null,null),e.Fb(1024,null,a.b,(function(n){return[n]}),[i.Mb]),e.rb(10,671744,null,0,a.e,[[8,null],[8,null],[8,null],[6,a.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,a.c,null,[a.e]),e.rb(12,16384,null,0,a.d,[[4,a.c]],null,null),e.rb(13,49152,null,0,i.F,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.sb(14,0,null,null,6,"ion-input",[["placeholder","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.Eb(n,15)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Eb(n,15)._handleInputEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.password=t)&&u),u}),r.V,r.q)),e.rb(15,16384,null,0,i.Mb,[e.k],null,null),e.Fb(1024,null,a.b,(function(n){return[n]}),[i.Mb]),e.rb(17,671744,null,0,a.e,[[8,null],[8,null],[8,null],[6,a.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,a.c,null,[a.e]),e.rb(19,16384,null,0,a.d,[[4,a.c]],null,null),e.rb(20,49152,null,0,i.F,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.sb(21,0,null,null,6,"ion-input",[["placeholder","Confirm Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.Eb(n,22)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Eb(n,22)._handleInputEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.confirm_password=t)&&u),u}),r.V,r.q)),e.rb(22,16384,null,0,i.Mb,[e.k],null,null),e.Fb(1024,null,a.b,(function(n){return[n]}),[i.Mb]),e.rb(24,671744,null,0,a.e,[[8,null],[8,null],[8,null],[6,a.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,a.c,null,[a.e]),e.rb(26,16384,null,0,a.d,[[4,a.c]],null,null),e.rb(27,49152,null,0,i.F,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),e.sb(28,0,null,null,28,"ion-radio-group",[["slot","primary"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.Eb(n,29)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Eb(n,29)._handleChangeEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.status=t)&&u),u}),r.Y,r.u)),e.rb(29,16384,null,0,i.Lb,[e.k],null,null),e.Fb(1024,null,a.b,(function(n){return[n]}),[i.Lb]),e.rb(31,671744,null,0,a.e,[[8,null],[8,null],[8,null],[6,a.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,a.c,null,[a.e]),e.rb(33,16384,null,0,a.d,[[4,a.c]],null,null),e.rb(34,49152,null,0,i.ab,[e.h,e.k,e.z],null,null),(n()(),e.sb(35,0,null,0,3,"h4",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,["Choose your field "])),(n()(),e.sb(37,0,null,null,1,"span",[["class","mark"]],null,null,null,null,null)),(n()(),e.Ib(-1,null,[" * Choose only one"])),(n()(),e.sb(39,0,null,0,8,"ion-item",[],null,null,null,r.W,r.r)),e.rb(40,49152,null,0,i.G,[e.h,e.k,e.z],null,null),(n()(),e.sb(41,0,null,0,2,"ion-label",[],null,null,null,r.X,r.s)),e.rb(42,49152,null,0,i.M,[e.h,e.k,e.z],null,null),(n()(),e.Ib(-1,0,["MC/PR/PC/Pretty"])),(n()(),e.sb(44,0,null,0,3,"ion-radio",[["checked",""],["value","y"]],null,[[null,"ionBlur"],[null,"ionSelect"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Eb(n,47)._handleBlurEvent(t.target)&&u),"ionSelect"===l&&(u=!1!==e.Eb(n,47)._handleIonSelect(t.target)&&u),u}),r.Z,r.t)),e.Fb(5120,null,a.b,(function(n){return[n]}),[i.Kb]),e.rb(46,49152,null,0,i.Z,[e.h,e.k,e.z],{checked:[0,"checked"],value:[1,"value"]},null),e.rb(47,16384,null,0,i.Kb,[e.k],null,null),(n()(),e.sb(48,0,null,0,8,"ion-item",[],null,null,null,r.W,r.r)),e.rb(49,49152,null,0,i.G,[e.h,e.k,e.z],null,null),(n()(),e.sb(50,0,null,0,2,"ion-label",[],null,null,null,r.X,r.s)),e.rb(51,49152,null,0,i.M,[e.h,e.k,e.z],null,null),(n()(),e.Ib(-1,0,["Employer"])),(n()(),e.sb(53,0,null,0,3,"ion-radio",[["value","n"]],null,[[null,"ionBlur"],[null,"ionSelect"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Eb(n,56)._handleBlurEvent(t.target)&&u),"ionSelect"===l&&(u=!1!==e.Eb(n,56)._handleIonSelect(t.target)&&u),u}),r.Z,r.t)),e.Fb(5120,null,a.b,(function(n){return[n]}),[i.Kb]),e.rb(55,49152,null,0,i.Z,[e.h,e.k,e.z],{value:[0,"value"]},null),e.rb(56,16384,null,0,i.Kb,[e.k],null,null),(n()(),e.sb(57,0,null,null,2,"ion-button",[["block",""],["class","sigup"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.prosesRegister()&&e),e}),r.I,r.d)),e.rb(58,49152,null,0,i.j,[e.h,e.k,e.z],null,null),(n()(),e.Ib(-1,0,["Create Account"])),(n()(),e.sb(60,0,null,null,3,"h5",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,["Already have an account? "])),(n()(),e.sb(62,0,null,null,1,"a",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.formLogin()&&e),e}),null,null)),(n()(),e.Ib(-1,null,["Sign In."]))],(function(n,l){var t=l.component;n(l,10,0,t.email),n(l,13,0,"Email","text"),n(l,17,0,t.password),n(l,20,0,"password","password"),n(l,24,0,t.confirm_password),n(l,27,0,"Confirm Password","password"),n(l,31,0,t.status),n(l,46,0,"","y"),n(l,55,0,"n")}),(function(n,l){n(l,7,0,e.Eb(l,12).ngClassUntouched,e.Eb(l,12).ngClassTouched,e.Eb(l,12).ngClassPristine,e.Eb(l,12).ngClassDirty,e.Eb(l,12).ngClassValid,e.Eb(l,12).ngClassInvalid,e.Eb(l,12).ngClassPending),n(l,14,0,e.Eb(l,19).ngClassUntouched,e.Eb(l,19).ngClassTouched,e.Eb(l,19).ngClassPristine,e.Eb(l,19).ngClassDirty,e.Eb(l,19).ngClassValid,e.Eb(l,19).ngClassInvalid,e.Eb(l,19).ngClassPending),n(l,21,0,e.Eb(l,26).ngClassUntouched,e.Eb(l,26).ngClassTouched,e.Eb(l,26).ngClassPristine,e.Eb(l,26).ngClassDirty,e.Eb(l,26).ngClassValid,e.Eb(l,26).ngClassInvalid,e.Eb(l,26).ngClassPending),n(l,28,0,e.Eb(l,33).ngClassUntouched,e.Eb(l,33).ngClassTouched,e.Eb(l,33).ngClassPristine,e.Eb(l,33).ngClassDirty,e.Eb(l,33).ngClassValid,e.Eb(l,33).ngClassInvalid,e.Eb(l,33).ngClassPending)}))}function C(n){return e.Jb(0,[(n()(),e.sb(0,0,null,null,1,"app-register",[],null,null,null,h,p)),e.rb(1,114688,null,0,g,[c.m,d.a,b.b,i.Nb],null,null)],(function(n,l){n(l,1,0)}),null)}var f=e.ob("app-register",g,C,{},{},[]),x=t("Ip0R"),m=function(){return function(){}}();t.d(l,"RegisterPageModuleNgFactory",(function(){return E}));var E=e.pb(u,[],(function(n){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[o.a,f]],[3,e.j],e.x]),e.Cb(4608,x.i,x.h,[e.u,[2,x.q]]),e.Cb(4608,a.g,a.g,[]),e.Cb(4608,i.b,i.b,[e.z,e.g]),e.Cb(4608,i.Gb,i.Gb,[i.b,e.j,e.q]),e.Cb(4608,i.Jb,i.Jb,[i.b,e.j,e.q]),e.Cb(1073742336,x.b,x.b,[]),e.Cb(1073742336,a.f,a.f,[]),e.Cb(1073742336,a.a,a.a,[]),e.Cb(1073742336,i.Db,i.Db,[]),e.Cb(1073742336,c.n,c.n,[[2,c.s],[2,c.m]]),e.Cb(1073742336,m,m,[]),e.Cb(1073742336,u,u,[]),e.Cb(1024,c.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);