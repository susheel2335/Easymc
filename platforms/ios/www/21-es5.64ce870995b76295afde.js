(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"6SDM":function(n,t,l){"use strict";l.r(t);var o=l("CcnG"),e=function(){return function(){}}(),u=l("pMnS"),r=l("oBZk"),i=l("ZZ/e"),b=l("mrSG"),c=function(){function n(n,t,l,o){this.actionSheetController=n,this.router=t,this.storage=l,this.toastCtrl=o}return n.prototype.ngOnInit=function(){},n.prototype.presentActionSheet=function(){var n=this;this.actionSheet=this.actionSheetController.create({header:"Freaky Jolly",buttons:[{text:"edit",role:"destructive",handler:function(){n.router.navigate(["tabs/mc/home"])}},{text:"Logout",icon:"logout",handler:function(){n.storage.clear(),n.router.navigate(["/login"])}},{text:"Cancel",role:"cancel",handler:function(){console.log("Cancel clicked")}}]}).then((function(n){n.present()}))},n.prototype.prosesLogout=function(){return b.b(this,void 0,void 0,(function(){return b.e(this,(function(n){switch(n.label){case 0:return this.storage.clear(),this.router.navigate(["/login"]),[4,this.toastCtrl.create({message:"logout succesful",duration:3e3})];case 1:return n.sent().present(),[2]}}))}))},n}(),a=l("ZYCi"),s=l("iw74"),h=o.qb({encapsulation:0,styles:[[""]],data:{}});function p(n){return o.Jb(0,[(n()(),o.sb(0,0,null,null,6,"ion-header",[],null,null,null,r.T,r.o)),o.rb(1,49152,null,0,i.A,[o.h,o.k,o.z],null,null),(n()(),o.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,r.jb,r.E)),o.rb(3,49152,null,0,i.Bb,[o.h,o.k,o.z],null,null),(n()(),o.sb(4,0,null,0,2,"ion-title",[],null,null,null,r.ib,r.D)),o.rb(5,49152,null,0,i.zb,[o.h,o.k,o.z],null,null),(n()(),o.Ib(-1,0,["bookmark"])),(n()(),o.sb(7,0,null,null,4,"ion-content",[],null,null,null,r.R,r.m)),o.rb(8,49152,null,0,i.t,[o.h,o.k,o.z],null,null),(n()(),o.sb(9,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.presentActionSheet()&&o),o}),r.I,r.d)),o.rb(10,49152,null,0,i.j,[o.h,o.k,o.z],{expand:[0,"expand"]},null),(n()(),o.Ib(-1,0,["Show Action Sheet"]))],(function(n,t){n(t,10,0,"block")}),null)}function f(n){return o.Jb(0,[(n()(),o.sb(0,0,null,null,1,"app-bookmark",[],null,null,null,p,h)),o.rb(1,114688,null,0,c,[i.a,a.m,s.b,i.Nb],null,null)],(function(n,t){n(t,1,0)}),null)}var k=o.ob("app-bookmark",c,f,{},{},[]),C=l("Ip0R"),g=l("gIcY"),d=function(){return function(){}}();l.d(t,"BookmarkPageModuleNgFactory",(function(){return m}));var m=o.pb(e,[],(function(n){return o.Bb([o.Cb(512,o.j,o.ab,[[8,[u.a,k]],[3,o.j],o.x]),o.Cb(4608,C.i,C.h,[o.u,[2,C.q]]),o.Cb(4608,g.g,g.g,[]),o.Cb(4608,i.b,i.b,[o.z,o.g]),o.Cb(4608,i.Gb,i.Gb,[i.b,o.j,o.q]),o.Cb(4608,i.Jb,i.Jb,[i.b,o.j,o.q]),o.Cb(1073742336,C.b,C.b,[]),o.Cb(1073742336,g.f,g.f,[]),o.Cb(1073742336,g.a,g.a,[]),o.Cb(1073742336,i.Db,i.Db,[]),o.Cb(1073742336,a.n,a.n,[[2,a.s],[2,a.m]]),o.Cb(1073742336,d,d,[]),o.Cb(1073742336,e,e,[]),o.Cb(1024,a.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);