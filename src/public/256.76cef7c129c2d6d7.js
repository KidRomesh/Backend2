"use strict";(self.webpackChunkcrmsfrontend=self.webpackChunkcrmsfrontend||[]).push([[256],{9256:(Qe,V,c)=>{c.r(V),c.d(V,{EmployeesModule:()=>He});var u=c(9808),m=c(9224),f=c(7423),C=c(5245),k=c(3251),Z=c(5664),S=c(9776),F=c(7429),t=c(5e3),L=c(495),p=c(508),E=c(7579),s=(c(727),c(1159),c(3191),c(1777),c(3075)),_=c(7322),b=c(7531);let X=(()=>{class i{constructor(){this.changes=new E.x,this.calendarLabel="Calendar",this.openCalendarLabel="Open calendar",this.closeCalendarLabel="Close calendar",this.prevMonthLabel="Previous month",this.nextMonthLabel="Next month",this.prevYearLabel="Previous year",this.nextYearLabel="Next year",this.prevMultiYearLabel="Previous 24 years",this.nextMultiYearLabel="Next 24 years",this.switchToMonthViewLabel="Choose date",this.switchToMultiYearViewLabel="Choose month and year"}formatYearRange(e,a){return`${e} \u2013 ${a}`}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const ae={provide:new t.OlP("mat-datepicker-scroll-strategy"),deps:[S.aV],useFactory:function te(i){return()=>i.scrollStrategies.reposition()}};let se=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[X,ae],imports:[[u.ez,f.ot,S.U8,Z.rt,F.eL,p.BQ],L.ZD]}),i})();var B=c(1271),le=c(4834),de=c(4623),R=c(4107);let ce=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[S.U8,p.BQ,F.eL],p.BQ]}),i})();var D=c(1083),w=c(8393),T=c(4417);function he(i,n){if(1&i&&(t.TgZ(0,"div",3)(1,"mat-card",4)(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.qZA(),t.TgZ(6,"mat-card-content")(7,"div",5),t._UZ(8,"img",6),t.qZA()(),t.TgZ(9,"mat-card-actions")(10,"div")(11,"button",7)(12,"mat-icon"),t._uU(13," create"),t.qZA(),t._uU(14," Info "),t.qZA(),t.TgZ(15,"button",8)(16,"mat-icon"),t._uU(17,"delete_sweep"),t.qZA(),t._uU(18," Delete "),t.qZA()()()()()),2&i){const e=n.$implicit;t.xp6(3),t.hij(" ",e.firstName," "),t.xp6(2),t.Oqu(e.role),t.xp6(6),t.MGl("routerLink","info/",e.id,""),t.xp6(4),t.MGl("routerLink","remove/",e.id,"")}}let pe=(()=>{class i{constructor(e){this.dataservice=e,this.emps=[]}ngOnInit(){this.getEmp()}getEmp(){this.dataservice.get("getFaculty").subscribe(e=>this.emps=e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(w.U))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-emplist"]],decls:4,vars:3,consts:[[1,"container"],[1,"row"],["class","col-3",4,"ngFor","ngForOf"],[1,"col-3"],[1,"card"],[1,"content"],["src","..//..//../assets/male_av.png"],["mat-button","",2,"margin-left","0px","color","#0ea1eb",3,"routerLink"],["mat-button","",2,"margin-left","20px","color","#0ea1eb",3,"routerLink"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,he,19,4,"div",2),t.ALo(3,"keyValueFilter"),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,a.emps)))},directives:[u.sg,m.a8,m.n5,m.$j,m.dn,m.hq,f.lW,D.rH,C.Hw],pipes:[T.P],styles:["img[_ngcontent-%COMP%]{height:150px;width:150px;border-radius:50%;margin-left:20px;margin-right:20px}.card[_ngcontent-%COMP%]{margin-top:10px;width:-moz-fit-content;width:fit-content;border-radius:20px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.container[_ngcontent-%COMP%]{margin:auto}"]}),i})();function ue(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Please fill out the field."),t.qZA())}function me(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"First name should be atleast 8 Characters."),t.qZA())}function _e(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Please fill out the field."),t.qZA())}function ge(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Last name should be atleast 8 Characters."),t.qZA())}function fe(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Please fill out the field."),t.qZA())}function ve(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," User name should be atleast 8 Characters."),t.qZA())}function De(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Please fill out the field."),t.qZA())}function ye(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Phone number should be atleast 10 Numbers."),t.qZA())}function Ce(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Phone Number should be atleast 10 Numbers."),t.qZA())}function be(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Please fill out the field."),t.qZA())}function Me(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Please give a valid mail."),t.qZA())}function xe(i,n){if(1&i&&(t.TgZ(0,"mat-option",28),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.deptName),t.xp6(1),t.hij(" ",e.deptName," ")}}function Ae(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Please select the field."),t.qZA())}function we(i,n){if(1&i&&(t.TgZ(0,"mat-option",28),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.Designation),t.xp6(1),t.hij(" ",e.Designation," ")}}function ke(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Please select the field."),t.qZA())}function Se(i,n){if(1&i&&(t.TgZ(0,"mat-option",28),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.gender),t.xp6(1),t.hij(" ",e.gender," ")}}function Ee(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Please select the field."),t.qZA())}function Ie(i,n){if(1&i&&(t.TgZ(0,"mat-option",28),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.bg),t.xp6(1),t.hij(" ",e.bg," ")}}function Re(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Please select the field."),t.qZA())}function Te(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Please select the field."),t.qZA())}function Ve(i,n){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Please select the field."),t.qZA())}let Fe=(()=>{class i{constructor(e,a){this.dataservice=e,this.location=a,this.depts=[],this.roles=[],this.genders=[],this.bgs=[],this.registerForm=new s.cw({firstName:new s.NI("",[s.kI.required,s.kI.minLength(8)]),lastName:new s.NI("",[s.kI.required,s.kI.minLength(8)]),userName:new s.NI("",[s.kI.required,s.kI.minLength(8)]),phone:new s.NI("",[s.kI.required,s.kI.maxLength(10),s.kI.minLength(10)]),email:new s.NI("",s.kI.email),dept:new s.NI("",s.kI.required),role:new s.NI("",s.kI.required),gender:new s.NI("",s.kI.required),bloodgroup:new s.NI("",s.kI.required),dob:new s.NI("",s.kI.required),address:new s.NI("",s.kI.required)})}ngOnInit(){this.getDept(),this.getRoles(),this.getGender(),this.getBg()}getDept(){this.dataservice.get("getdepts",null).subscribe(e=>this.depts=e)}getRoles(){this.dataservice.get("getroles",null).subscribe(e=>this.roles=e)}getGender(){this.dataservice.get("getgender",null).subscribe(e=>this.genders=e)}getBg(){this.dataservice.get("getbg",null).subscribe(e=>this.bgs=e)}createEmp(){this.dataservice.post("addFaculty",null,this.registerForm.value).subscribe(()=>this.location.historyGo(0))}create(){this.createEmp(),console.log(this.registerForm.value)}get firstName(){return this.registerForm.get("firstName")}get lastName(){return this.registerForm.get("lastName")}get userName(){return this.registerForm.get("userName")}get phone(){return this.registerForm.get("phone")}get email(){return this.registerForm.get("email")}get dept(){return this.registerForm.get("dept")}get role(){return this.registerForm.get("role")}get gender(){return this.registerForm.get("gender")}get bloodgroup(){return this.registerForm.get("bloodgroup")}get dob(){return this.registerForm.get("dob")}get address(){return this.registerForm.get("address")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(w.U),t.Y36(u.Ye))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-empteams"]],decls:94,vars:26,consts:[[1,"container",2,"margin-top","20px"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-6"],["appearance","outline",2,"width","100%"],["for","firstName",2,"font-size","medium"],["required","","formControlName","firstName","minlength","8","id","firstName","matInput","","placeholder","John"],[4,"ngIf"],["for","lastName",2,"font-size","medium"],["required","","formControlName","lastName","minlength","8","id","lastName","matInput","","placeholder","wick"],[1,"row","justify-content-center"],["for","userName",2,"font-size","medium"],["required","","formControlName","userName","minlength","8","id","userName","matInput","","placeholder","John117"],["for","phone",2,"font-size","medium"],["required","","formControlName","phone","minlength","10","maxlength","10","id","phone","matInput","","placeholder","928457xxxx"],["for","email",2,"font-size","medium"],["required","","formControlName","email","type","email","id","email","matInput","","placeholder","abc@xyz.com"],["formControlName","dept"],[3,"value",4,"ngFor","ngForOf"],["formControlName","role"],["formControlName","gender"],["formControlName","bloodgroup"],["matInput","","type","date","required","","formControlName","dob"],["matInput","","required","","formControlName","address","placeholder","123, xyz st, abc avenue, y2k-123456"],[1,"row","justify-content-center","my-5"],[1,"col-2"],["mat-raised-button","","type","button",2,"color","#0ea1eb",3,"click"],[2,"margin-bottom","15px"],[3,"value"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return a.create()}),t.TgZ(2,"div",2)(3,"div",3)(4,"mat-form-field",4)(5,"mat-label",5),t._uU(6,"First Name"),t.qZA(),t._UZ(7,"input",6),t.YNc(8,ue,2,0,"mat-error",7),t.YNc(9,me,2,0,"mat-error",7),t.qZA()(),t.TgZ(10,"div",3)(11,"mat-form-field",4)(12,"mat-label",8),t._uU(13,"Last Name"),t.qZA(),t._UZ(14,"input",9),t.YNc(15,_e,2,0,"mat-error",7),t.YNc(16,ge,2,0,"mat-error",7),t.qZA()()(),t.TgZ(17,"div",10)(18,"div",3)(19,"mat-form-field",4)(20,"mat-label",11),t._uU(21,"User Name"),t.qZA(),t._UZ(22,"input",12),t.YNc(23,fe,2,0,"mat-error",7),t.YNc(24,ve,2,0,"mat-error",7),t.qZA()()(),t.TgZ(25,"div",2)(26,"div",3)(27,"mat-form-field",4)(28,"mat-label",13),t._uU(29,"Phone"),t.qZA(),t._UZ(30,"input",14),t.YNc(31,De,2,0,"mat-error",7),t.YNc(32,ye,2,0,"mat-error",7),t.YNc(33,Ce,2,0,"mat-error",7),t.qZA()(),t.TgZ(34,"div",3)(35,"mat-form-field",4)(36,"mat-label",15),t._uU(37,"Mail"),t.qZA(),t._UZ(38,"input",16),t.YNc(39,be,2,0,"mat-error",7),t.YNc(40,Me,2,0,"mat-error",7),t.qZA()()(),t.TgZ(41,"div",2)(42,"div",3)(43,"mat-form-field",4)(44,"mat-label"),t._uU(45,"Department"),t.qZA(),t.TgZ(46,"mat-select",17),t.YNc(47,xe,2,2,"mat-option",18),t.ALo(48,"keyValueFilter"),t.qZA(),t.YNc(49,Ae,2,0,"mat-error",7),t.qZA()(),t.TgZ(50,"div",3)(51,"mat-form-field",4)(52,"mat-label"),t._uU(53,"Roles"),t.qZA(),t.TgZ(54,"mat-select",19),t.YNc(55,we,2,2,"mat-option",18),t.ALo(56,"keyValueFilter"),t.qZA(),t.YNc(57,ke,2,0,"mat-error",7),t.qZA()()(),t.TgZ(58,"div",2)(59,"div",3)(60,"mat-form-field",4)(61,"mat-label"),t._uU(62,"Gender"),t.qZA(),t.TgZ(63,"mat-select",20),t.YNc(64,Se,2,2,"mat-option",18),t.qZA(),t.YNc(65,Ee,2,0,"mat-error",7),t.qZA()(),t.TgZ(66,"div",3)(67,"mat-form-field",4)(68,"mat-label"),t._uU(69,"BloodGroup"),t.qZA(),t.TgZ(70,"mat-select",21),t.YNc(71,Ie,2,2,"mat-option",18),t.qZA(),t.YNc(72,Re,2,0,"mat-error",7),t.qZA()()(),t.TgZ(73,"div",2)(74,"div",3)(75,"mat-form-field",4)(76,"mat-label"),t._uU(77,"Date of birth"),t.qZA(),t._UZ(78,"input",22),t.YNc(79,Te,2,0,"mat-error",7),t.qZA()()(),t.TgZ(80,"div",2)(81,"div",3)(82,"mat-form-field",4)(83,"mat-label"),t._uU(84,"Your Contact Address Here"),t.qZA(),t._UZ(85,"textarea",23),t.YNc(86,Ve,2,0,"mat-error",7),t.qZA()()(),t.TgZ(87,"div",24)(88,"div",25)(89,"button",26),t.NdJ("click",function(){return a.create()}),t.TgZ(90,"mat-icon"),t._uU(91,"done"),t.qZA(),t._uU(92," Submit "),t.qZA()()()(),t._UZ(93,"div",27),t.qZA()),2&e&&(t.xp6(1),t.Q6J("formGroup",a.registerForm),t.xp6(7),t.Q6J("ngIf",a.firstName.hasError("required")),t.xp6(1),t.Q6J("ngIf",a.firstName.hasError("minlength")),t.xp6(6),t.Q6J("ngIf",a.lastName.hasError("required")),t.xp6(1),t.Q6J("ngIf",a.lastName.hasError("minlength")),t.xp6(7),t.Q6J("ngIf",a.userName.hasError("required")),t.xp6(1),t.Q6J("ngIf",a.userName.hasError("minlength")),t.xp6(7),t.Q6J("ngIf",a.phone.hasError("required")),t.xp6(1),t.Q6J("ngIf",a.phone.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",a.phone.hasError("maxlength")),t.xp6(6),t.Q6J("ngIf",a.email.hasError("required")),t.xp6(1),t.Q6J("ngIf",a.email.hasError("email")),t.xp6(7),t.Q6J("ngForOf",t.lcZ(48,22,a.depts)),t.xp6(2),t.Q6J("ngIf",a.dept.hasError("required")),t.xp6(6),t.Q6J("ngForOf",t.lcZ(56,24,a.roles)),t.xp6(2),t.Q6J("ngIf",a.role.hasError("required")),t.xp6(7),t.Q6J("ngForOf",a.genders),t.xp6(1),t.Q6J("ngIf",a.gender.hasError("required")),t.xp6(6),t.Q6J("ngForOf",a.bgs),t.xp6(1),t.Q6J("ngIf",a.bloodgroup.hasError("required")),t.xp6(7),t.Q6J("ngIf",a.dob.hasError("required")),t.xp6(7),t.Q6J("ngIf",a.address.hasError("required")))},directives:[s._Y,s.JL,s.sg,_.KE,_.hX,s.Fj,b.Nt,s.Q7,s.JJ,s.u,s.wO,u.O5,_.TO,s.nD,R.gD,u.sg,p.ey,f.lW,C.Hw],pipes:[T.P],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-card[_ngcontent-%COMP%]{border-radius:20px}"]}),i})();function Oe(i,n){if(1&i&&(t.TgZ(0,"mat-option",26),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.Designation),t.xp6(1),t.hij(" ",e.Designation," ")}}function Ne(i,n){if(1&i&&(t.TgZ(0,"mat-option",26),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.deptName),t.xp6(1),t.hij(" ",e.deptName," ")}}function Be(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",1)(1,"h2"),t._uU(2),t.ALo(3,"uppercase"),t.qZA(),t.TgZ(4,"div")(5,"span"),t._uU(6,"Id: "),t.qZA(),t._uU(7),t.qZA(),t.TgZ(8,"div",2)(9,"div",3)(10,"div",4)(11,"mat-form-field",5)(12,"mat-label",6),t._uU(13,"First Name"),t.qZA(),t.TgZ(14,"input",7),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().emps.firstName=r}),t.qZA()()(),t.TgZ(15,"div",4)(16,"mat-form-field",5)(17,"mat-label",8),t._uU(18,"Last Name"),t.qZA(),t.TgZ(19,"input",9),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().emps.lastName=r}),t.qZA()()()(),t.TgZ(20,"div",10)(21,"div",4)(22,"mat-form-field",5)(23,"mat-label",11),t._uU(24,"User Name"),t.qZA(),t.TgZ(25,"input",12),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().emps.userName=r}),t.qZA()()()(),t.TgZ(26,"div",3)(27,"div",4)(28,"mat-form-field",5)(29,"mat-label",13),t._uU(30,"Phone"),t.qZA(),t.TgZ(31,"input",14),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().emps.phone=r}),t.qZA()()(),t.TgZ(32,"div",4)(33,"mat-form-field",5)(34,"mat-label",15),t._uU(35,"Mail"),t.qZA(),t.TgZ(36,"input",16),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().emps.email=r}),t.qZA()()()(),t.TgZ(37,"div",3)(38,"div",4)(39,"mat-form-field",5)(40,"mat-label",17),t._uU(41,"Role"),t.qZA(),t.TgZ(42,"mat-select",18),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().emps.role=r}),t.YNc(43,Oe,2,2,"mat-option",19),t.ALo(44,"keyValueFilter"),t.qZA()()(),t.TgZ(45,"div",4)(46,"mat-form-field",5)(47,"mat-label",20),t._uU(48,"Department"),t.qZA(),t.TgZ(49,"mat-select",21),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().emps.dept=r}),t.YNc(50,Ne,2,2,"mat-option",19),t.ALo(51,"keyValueFilter"),t.qZA()()()(),t.TgZ(52,"div",22)(53,"div",23)(54,"button",24),t.NdJ("click",function(){return t.CHM(e),t.oxw().save()}),t.TgZ(55,"mat-icon"),t._uU(56,"done"),t.qZA(),t._uU(57," Save "),t.qZA()(),t.TgZ(58,"div",23)(59,"button",24),t.NdJ("click",function(){return t.CHM(e),t.oxw().goBack()}),t.TgZ(60,"mat-icon"),t._uU(61,"replay"),t.qZA(),t._uU(62," back "),t.qZA()()(),t._UZ(63,"div",25),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(2),t.hij("",t.lcZ(3,11,e.emps.firstName)," Details"),t.xp6(5),t.Oqu(e.emps.id),t.xp6(7),t.Q6J("ngModel",e.emps.firstName),t.xp6(5),t.Q6J("ngModel",e.emps.lastName),t.xp6(6),t.Q6J("ngModel",e.emps.userName),t.xp6(6),t.Q6J("ngModel",e.emps.phone),t.xp6(5),t.Q6J("ngModel",e.emps.email),t.xp6(6),t.Q6J("ngModel",e.emps.role),t.xp6(1),t.Q6J("ngForOf",t.lcZ(44,13,e.roles)),t.xp6(6),t.Q6J("ngModel",e.emps.dept),t.xp6(1),t.Q6J("ngForOf",t.lcZ(51,15,e.depts))}}function Ze(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"mat-card")(1,"mat-card-title")(2,"h2"),t._uU(3),t.ALo(4,"uppercase"),t.qZA()(),t.TgZ(5,"mat-card-content")(6,"p"),t._uU(7,"Are you sure you want to delete the mentioned Faculty?"),t.qZA()(),t.TgZ(8,"mat-card-actions")(9,"button",4),t.NdJ("click",function(){return t.CHM(e),t.oxw().goBack()}),t._uU(10,"Cancel"),t.qZA(),t.TgZ(11,"button",5),t.NdJ("click",function(){return t.CHM(e),t.oxw().delete()}),t._uU(12," Delete "),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,1,e.emps.firstName))}}const Le=[{path:"",component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-employees"]],decls:6,vars:0,consts:[[2,"margin-top","2px","height","auto","width","100%"],["label","Faculty"],["label","Add"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-tab-group")(2,"mat-tab",1),t._UZ(3,"app-emplist"),t.qZA(),t.TgZ(4,"mat-tab",2),t._UZ(5,"app-empteams"),t.qZA()()())},directives:[m.a8,k.SP,k.uX,pe,Fe],styles:[""]}),i})()},{path:"info/:id",component:(()=>{class i{constructor(e,a,r){this.route=e,this.dataservice=a,this.location=r,this.depts=[],this.roles=[]}ngOnInit(){this.getEmp(),this.getDept(),this.getRoles()}getDept(){this.dataservice.get("getdepts",null).subscribe(e=>this.depts=e)}getRoles(){this.dataservice.get("getroles").subscribe(e=>this.roles=e)}getEmp(){const e=this.route.snapshot.paramMap.get("id");this.dataservice.get("empbyid",null,e).subscribe(a=>{this.emps=a})}save(){this.emps&&this.dataservice.put("updateEmp",null,this.emps).subscribe(()=>this.location.historyGo(-1))}goBack(){this.location.back()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(D.gz),t.Y36(w.U),t.Y36(u.Ye))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-info"]],decls:1,vars:1,consts:[["class","container-fluid",4,"ngIf"],[1,"container-fluid"],[1,"container",2,"margin-top","20px"],[1,"row"],[1,"col-6"],["appearance","outline",2,"width","100%"],["for","firstName",2,"font-size","medium"],["type","text","id","firstName","matInput","",3,"ngModel","ngModelChange"],["for","lastName",2,"font-size","medium"],["type","text","id","lastName","matInput","",3,"ngModel","ngModelChange"],[1,"row","justify-content-center"],["for","userName",2,"font-size","medium"],["type","text","id","userName","matInput","",3,"ngModel","ngModelChange"],["for","phone",2,"font-size","medium"],["type","text","id","phone","matInput","",3,"ngModel","ngModelChange"],["for","email",2,"font-size","medium"],["type","email","id","email","matInput","",3,"ngModel","ngModelChange"],["for","role"],["type","text","id","role",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["for","dept"],["type","text","id","dept",3,"ngModel","ngModelChange"],[1,"row","justify-content-center","my-5"],[1,"col-2"],["mat-raised-button","","type","button",2,"color","#0ea1eb",3,"click"],[2,"margin-bottom","15px"],[3,"value"]],template:function(e,a){1&e&&t.YNc(0,Be,64,17,"div",0),2&e&&t.Q6J("ngIf",a.emps)},directives:[u.O5,_.KE,_.hX,b.Nt,s.Fj,s.JJ,s.On,R.gD,u.sg,p.ey,f.lW,C.Hw],pipes:[u.gd,T.P],styles:[""]}),i})()},{path:"remove/:id",component:(()=>{class i{constructor(e,a,r,o){this.snackBar=e,this.route=a,this.dataservice=r,this.location=o}ngOnInit(){this.getEmp()}getEmp(){const e=this.route.snapshot.paramMap.get("id");this.dataservice.get("empbyid",null,e).subscribe(a=>{this.emps=a})}openSnackBar(e){this.snackBar.open(e.toString(),"",{duration:5e3})}delete(){if(this.emps){const e=this.route.snapshot.paramMap.get("id");this.dataservice.delete("deleteEmp",e).subscribe(()=>{console.log("Success")}),this.location.historyGo(-1)}this.openSnackBar("Successfully Deleted")}goBack(){this.location.back()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(B.ux),t.Y36(D.gz),t.Y36(w.U),t.Y36(u.Ye))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-remove"]],decls:4,vars:1,consts:[[1,"contianer"],[1,"row","justify-content-center","my-5"],[1,"col-lg-6"],[4,"ngIf"],["mat-button","",3,"click"],["mat-button","","type","button",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,Ze,13,3,"mat-card",3),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngIf",a.emps))},directives:[u.O5,m.a8,m.n5,m.dn,m.hq,f.lW],pipes:[u.gd],styles:[""]}),i})()}];let je=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[D.Bz.forChild(Le)],D.Bz]}),i})();var qe=c(2);let He=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[u.ez,je,qe.SharedModule,m.QW,f.ot,se,k.Nh,le.t,de.ie,C.Ps,_.lN,R.LD,b.c,s.UX,ce,B.ZX,s.u5]]}),i})()}}]);