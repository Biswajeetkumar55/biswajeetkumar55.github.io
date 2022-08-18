"use strict";(self.webpackChunkfinance_management_app=self.webpackChunkfinance_management_app||[]).push([[872],{8387:(y,C,c)=>{c.d(C,{y:()=>A});var e=c(5e3),u=c(8512);let A=(()=>{class o{constructor(d){this._NgbActiveModal=d}get activeModal(){return this._NgbActiveModal}}return o.\u0275fac=function(d){return new(d||o)(e.Y36(u.Kz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-ng-modal"]],decls:13,vars:0,consts:[[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-describedby","modal-title",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(d,l){1&d&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"Status Change for User"),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return l.activeModal.dismiss("Cross click")}),e.qZA()(),e.TgZ(4,"div",3)(5,"p")(6,"strong"),e._uU(7,"Are you sure you want to change status of this User?"),e.qZA()()(),e.TgZ(8,"div",4)(9,"button",5),e.NdJ("click",function(){return l.activeModal.dismiss("cancel click")}),e._uU(10,"Cancel"),e.qZA(),e.TgZ(11,"button",6),e.NdJ("click",function(){return l.activeModal.close("Ok click")}),e._uU(12,"Ok"),e.qZA()())},encapsulation:2}),o})()},7861:(y,C,c)=>{c.d(C,{H:()=>_});var e=c(520),u=c(1581),A=c(5e3),o=c(8898);let _=(()=>{class d{constructor(r,g){this.http=r,this.messageService=g}getCaseReassign(r){const g=u.g.API_ENDPOINT+"lawfirm/caseReassign";let m=(new e.LE).set("userId",r);return this.http.request("get",g,{params:m,observe:"response",responseType:"json",withCredentials:!1})}reassignCaseToAllUser(r,g,m){return this.http.request("post",u.g.API_ENDPOINT+"lawfirm/reassignUser",{body:{header:{},body:{data:{userId:r,role:g,assignerId:m}}},observe:"response",responseType:"json",withCredentials:!1})}reassignCaseToManager(r,g){return this.http.request("post",u.g.API_ENDPOINT+"lawfirm/assign/manager",{body:{header:{},body:{data:{users:r,managedBy:g}}},observe:"response",responseType:"json",withCredentials:!1})}reassignCaseToAssociate(r,g){return this.http.request("post",u.g.API_ENDPOINT+"case/refinance/solicitor/cases",{body:{header:{},body:{data:{caseId:r,solicitorId:g}}},observe:"response",responseType:"json",withCredentials:!1})}getAllLawfirmUsers(r,g){const m=u.g.API_ENDPOINT+"lawfirm/all";let p=(new e.LE).set("id",r).set("role",g);return this.http.request("get",m,{params:p,observe:"response",responseType:"json",withCredentials:!1})}}return d.\u0275fac=function(r){return new(r||d)(A.LFG(e.eN),A.LFG(o.K))},d.\u0275prov=A.Yz7({token:d,factory:d.\u0275fac}),d})()},9369:(y,C,c)=>{c.d(C,{s:()=>o});var e=c(520),u=c(1581),A=c(5e3);let o=(()=>{class _{constructor(l){this.http=l}getUserList(){const l=u.g.API_ENDPOINT+"users";let r=(new e.LE).set("pgNo",0);return this.http.request("get",l,{params:r,observe:"response",responseType:"json",withCredentials:!1})}changeStatus(l,r){return this.http.request("post",u.g.API_ENDPOINT+"lawfirm/change/status/user",{body:{header:{},body:{data:{username:l,status:r}}},observe:"response",responseType:"json",withCredentials:!1})}resendEmail(l,r,g,m){return this.http.request("post",u.g.API_ENDPOINT+"lawfirm/pendings/user/"+l+"/sendmail",{body:{header:{},body:{data:{firmName:r,adminName:g,email:m,userId:l}}},observe:"response",responseType:"json",withCredentials:!1})}inviteUser(l,r,g,m,p){return this.http.request("post",u.g.API_ENDPOINT+"lawfirm/"+l+"/inviteuser",{body:{header:{},body:{data:{branchId:r,role:g,email:m,managedBy:p}}},observe:"response",responseType:"json",withCredentials:!1})}getManagerList(){const l=u.g.API_ENDPOINT+"lawfirm/managers";let r=(new e.LE).set("pgNo",0).set("pgSize",10);return this.http.request("get",l,{params:r,observe:"response",responseType:"json",withCredentials:!1})}}return _.\u0275fac=function(l){return new(l||_)(A.LFG(e.eN))},_.\u0275prov=A.Yz7({token:_,factory:_.\u0275fac}),_})()},8572:(y,C,c)=>{c.d(C,{l:()=>O});var e=c(5e3),u=c(5425),A=c(9369),o=c(2382),_=c(7861),d=c(72),l=c(9808);function r(n,a){1&n&&(e.TgZ(0,"div",6),e._uU(1,"No Cases Exist for Reassign"),e.qZA())}function g(n,a){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const s=a.$implicit;e.xp6(1),e.Oqu(s.caseRef)}}function m(n,a){if(1&n&&(e.TgZ(0,"option",7),e._uU(1),e.qZA()),2&n){const s=a.$implicit;e.Q6J("ngValue",s),e.xp6(1),e.AsE(" ",s.firstName," ",s.lastName," ")}}let p=(()=>{class n{constructor(s,t,i,h,f,b){this.route=s,this.branchUserService=t,this.router=i,this.formBuilder=h,this.caseAssignmentService=f,this.SpinnerService=b,this.user={},this.role="",this.userDetails={},this.userList=[],this.status="",this.associateAllCasesId=[],this.selectedUser={},this.isAssignToUser=!1}ngOnInit(){console.log("current user details-----"),console.log(this.user)}selectForUser(s,t){this.selectedUser=s,this.isAssignToUser=!0}assignCaseToUser(){this.SpinnerService.show();let s=this.selectedUser.id;"LAWFIRM_MANAGER"===this.role?this.caseAssignmentService.reassignCaseToManager([this.user.userInfo.id],this.selectedUser.username).subscribe({next:i=>{this.SpinnerService.hide(),this.changeUserStatus(),this.SpinnerService.hide()},error:i=>{this.SpinnerService.hide()}}):(this.user.cases.forEach(t=>{this.associateAllCasesId.push(t.id)}),console.log(this.associateAllCasesId),this.caseAssignmentService.reassignCaseToAssociate(this.associateAllCasesId,s).subscribe({next:t=>{this.SpinnerService.hide(),console.log(t.body.responseBody.data),this.changeUserStatus(),this.SpinnerService.hide()},error:t=>{this.SpinnerService.hide()}}))}changeUserStatus(){this.SpinnerService.show(),this.branchUserService.changeStatus(this.userDetails.username,this.status).subscribe({next:s=>{this.SpinnerService.hide(),this.router.navigate(["/lawfirm-admin/users"])},error:s=>{this.SpinnerService.hide()}})}}return n.\u0275fac=function(s){return new(s||n)(e.Y36(u.gz),e.Y36(A.s),e.Y36(u.F0),e.Y36(o.qu),e.Y36(_.H),e.Y36(d.t2))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-case-assignment-dynamic-form"]],inputs:{user:"user",role:"role",userDetails:"userDetails",userList:"userList",status:"status"},decls:13,vars:8,consts:[["class","text-danger",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"form-select","form-select-lg",3,"ngModel","ngModelChange"],["disabled","",3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[1,"text-danger"],[3,"ngValue"]],template:function(s,t){1&s&&(e.TgZ(0,"td"),e.YNc(1,r,2,0,"div",0),e.YNc(2,g,2,1,"div",1),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"select",2),e.NdJ("ngModelChange",function(h){return t.selectedUser=h})("ngModelChange",function(h){return t.selectForUser(t.selectedUser,h)}),e.TgZ(7,"option",3),e._uU(8),e.qZA(),e.YNc(9,m,2,3,"option",4),e.qZA()(),e.TgZ(10,"td")(11,"button",5),e.NdJ("click",function(){return t.assignCaseToUser()}),e._uU(12,"Confirm"),e.qZA()()),2&s&&(e.xp6(1),e.Q6J("ngIf",!(null!=t.user.cases&&t.user.cases.length)),e.xp6(1),e.Q6J("ngForOf",t.user.cases),e.xp6(2),e.Oqu(t.user.userInfo.name),e.xp6(2),e.Q6J("ngModel",t.selectedUser),e.xp6(1),e.Q6J("ngValue",null),e.xp6(1),e.Oqu("LAWFIRM_LAWYER"===t.role?"Choose Associate":"Choose Manager"),e.xp6(1),e.Q6J("ngForOf",t.userList),e.xp6(2),e.Q6J("disabled",!t.isAssignToUser))},directives:[l.O5,l.sg,o.EJ,o.JJ,o.On,o.YN,o.Kr],styles:[""]}),n})();function T(n,a){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const s=a.$implicit;e.xp6(1),e.Oqu(s)}}function Z(n,a){if(1&n&&(e.TgZ(0,"option",16),e._uU(1),e.qZA()),2&n){const s=a.$implicit;e.Q6J("value",s.id),e.xp6(1),e.AsE(" ",s.firstName," ",s.lastName," ")}}function M(n,a){if(1&n&&(e.TgZ(0,"tr")(1,"td",17),e._UZ(2,"app-case-assignment-dynamic-form",18),e.qZA()()),2&n){const s=a.$implicit,t=e.oxw(2).$implicit,i=e.oxw();e.xp6(2),e.Q6J("user",s)("role",t)("userDetails",i.user)("userList",i.managerList)("status",i.selectedStatus)}}function N(n,a){if(1&n){const s=e.EpF();e.TgZ(0,"div",7)(1,"table",8)(2,"thead",9)(3,"tr")(4,"th"),e._uU(5,"Case Reference "),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Currently Assignee"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Manager "),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Action "),e.qZA()()(),e.TgZ(12,"tbody")(13,"tr")(14,"td"),e.YNc(15,T,2,1,"div",4),e.qZA(),e.TgZ(16,"td")(17,"input",10),e.NdJ("change",function(i){return e.CHM(s),e.oxw(2).checkAssignToAllForManager(i)}),e.qZA(),e._uU(18,"Assign to All"),e.qZA(),e.TgZ(19,"td")(20,"select",11,12),e.NdJ("change",function(i){return e.CHM(s),e.oxw(2).selectForAllManager(i)}),e.TgZ(22,"option",13),e._uU(23,"Choose Manager"),e.qZA(),e.YNc(24,Z,2,3,"option",14),e.qZA()(),e.TgZ(25,"td")(26,"button",15),e.NdJ("click",function(){return e.CHM(s),e.oxw(2).assignCaseToManager()}),e._uU(27,"Confirm"),e.qZA()()(),e.YNc(28,M,3,5,"tr",4),e.qZA()()()}if(2&n){const s=e.oxw(2);e.xp6(15),e.Q6J("ngForOf",s.managerAllCases),e.xp6(9),e.Q6J("ngForOf",s.managerList),e.xp6(2),e.Q6J("disabled",!s.isAssignToAllManger),e.xp6(2),e.Q6J("ngForOf",s.userDetails.manager)}}function x(n,a){1&n&&(e.TgZ(0,"div",23),e._uU(1,"No Cases Exist for Reassign"),e.qZA())}function F(n,a){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const s=a.$implicit;e.xp6(1),e.Oqu(s)}}function I(n,a){if(1&n&&(e.TgZ(0,"option",16),e._uU(1),e.qZA()),2&n){const s=a.$implicit;e.Q6J("value",s.id),e.xp6(1),e.AsE(" ",s.firstName," ",s.lastName," ")}}function E(n,a){if(1&n&&(e.TgZ(0,"tr"),e._UZ(1,"app-case-assignment-dynamic-form",24),e.qZA()),2&n){const s=a.$implicit,t=e.oxw(2).$implicit,i=e.oxw();e.xp6(1),e.Q6J("user",s)("role",t)("userDetails",i.user)("userList",i.associateList)("status",i.selectedStatus)}}function D(n,a){if(1&n){const s=e.EpF();e.TgZ(0,"div",19)(1,"table",8)(2,"thead",9)(3,"tr")(4,"th"),e._uU(5,"Case Reference "),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Currently Assignee"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Associate "),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Action "),e.qZA()()(),e.TgZ(12,"tbody")(13,"tr")(14,"td"),e.YNc(15,x,2,0,"div",20),e.YNc(16,F,2,1,"div",4),e.qZA(),e.TgZ(17,"td")(18,"input",21),e.NdJ("change",function(i){return e.CHM(s),e.oxw(2).checkAssignToAllForAssociate(i)}),e.qZA(),e._uU(19,"Assign to All"),e.qZA(),e.TgZ(20,"td")(21,"select",22),e.NdJ("change",function(i){return e.CHM(s),e.oxw(2).selectForAllAssociate(i)}),e.TgZ(22,"option",13),e._uU(23,"Choose Associate"),e.qZA(),e.YNc(24,I,2,3,"option",14),e.qZA()(),e.TgZ(25,"td")(26,"button",15),e.NdJ("click",function(){return e.CHM(s),e.oxw(2).assignCaseToAssociate()}),e._uU(27,"Confirm"),e.qZA()()(),e.YNc(28,E,2,5,"tr",4),e.qZA()()()}if(2&n){const s=e.oxw(2);e.xp6(15),e.Q6J("ngIf",!(null!=s.associateAllCases&&s.associateAllCases.length)),e.xp6(1),e.Q6J("ngForOf",s.associateAllCases),e.xp6(8),e.Q6J("ngForOf",s.associateList),e.xp6(2),e.Q6J("disabled",!s.isAssignToAllAssociate),e.xp6(2),e.Q6J("ngForOf",s.userDetails.associate)}}function L(n,a){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,N,29,4,"div",5),e.YNc(2,D,29,5,"div",6),e.qZA()),2&n){const s=a.$implicit,t=e.oxw();e.xp6(1),e.Q6J("ngIf","LAWFIRM_MANAGER"===s&&(null==t.userDetails.manager?null:t.userDetails.manager.length)),e.xp6(1),e.Q6J("ngIf","LAWFIRM_LAWYER"===s&&(null==t.userDetails.associate?null:t.userDetails.associate.length))}}let O=(()=>{class n{constructor(s,t,i,h,f,b){this.route=s,this.branchUserService=t,this.router=i,this.formBuilder=h,this.caseAssignmentService=f,this.SpinnerService=b,this.user={},this.userDetails={},this.managerList=[],this.associateList=[],this.managerAllCases=[],this.associateAllCases=[],this.associateAllCasesId=[],this.isAssignToAllManger=!1,this.isAssignToAllAssociate=!1,this.message="",this.selectedStatus="",this.caseAssignmentForm=this.formBuilder.group({selectAssociate:[""],selectManager:[""]})}ngOnInit(){var s,t;let i=sessionStorage.getItem("currentUser");this.user=JSON.parse(i||""),this.selectedStatus=this.route.snapshot.params.selectedStatus,null===(s=this.caseAssignmentForm.get("selectAssociate"))||void 0===s||s.disable({onlySelf:!0}),null===(t=this.caseAssignmentForm.get("selectManager"))||void 0===t||t.disable({onlySelf:!0}),this.SpinnerService.show(),this.caseAssignmentService.getCaseReassign(this.user.id).subscribe({next:h=>{this.userDetails=h.body.responseBody.data,this.user.role.forEach(f=>{var b,U;"LAWFIRM_MANAGER"===f?(null===(b=this.userDetails.manager)||void 0===b?void 0:b.length)?(this.userDetails.manager.forEach(v=>{v.cases.forEach(S=>{this.managerAllCases.push(S.caseRef)})}),this.caseAssignmentService.getAllLawfirmUsers(this.user.id,f).subscribe({next:v=>{this.SpinnerService.hide(),this.managerList=v.body.responseBody.data,console.log("manager list-------------"),console.log(this.managerList),this.SpinnerService.hide()},error:v=>{this.SpinnerService.hide()}})):this.changeUserStatus():"LAWFIRM_LAWYER"===f&&((null===(U=this.userDetails.associate)||void 0===U?void 0:U.length)?(this.userDetails.associate.forEach(v=>{v.cases.forEach(S=>{this.associateAllCases.push(S.caseRef),this.associateAllCasesId.push(S.id)}),console.log(this.associateAllCasesId)}),this.caseAssignmentService.getAllLawfirmUsers(this.user.id,f).subscribe({next:v=>{this.SpinnerService.hide(),this.associateList=v.body.responseBody.data,this.SpinnerService.hide(),console.log(this.associateList)},error:v=>{this.SpinnerService.hide()}})):this.changeUserStatus())})},error:h=>{this.SpinnerService.hide()}})}checkAssignToAllForManager(s){var t,i;s.target.checked?null===(t=this.caseAssignmentForm.get("selectManager"))||void 0===t||t.enable({onlySelf:!0}):(null===(i=this.caseAssignmentForm.get("selectManager"))||void 0===i||i.disable({onlySelf:!0}),this.isAssignToAllManger=!1)}checkAssignToAllForAssociate(s){var t,i;s.target.checked?null===(t=this.caseAssignmentForm.get("selectAssociate"))||void 0===t||t.enable({onlySelf:!0}):(null===(i=this.caseAssignmentForm.get("selectAssociate"))||void 0===i||i.disable({onlySelf:!0}),this.isAssignToAllAssociate=!1)}selectForAllAssociate(s){var t;null===(t=this.caseAssignmentForm.get("selectAssociate"))||void 0===t||t.setValue(s.target.value),this.isAssignToAllAssociate=!0}selectForAllManager(s){var t;null===(t=this.caseAssignmentForm.get("selectAssociate"))||void 0===t||t.setValue(s.target.value),this.isAssignToAllManger=!0}assignCaseToAssociate(){var s;this.SpinnerService.show();let t=null===(s=this.caseAssignmentForm.get("selectAssociate"))||void 0===s?void 0:s.value;this.caseAssignmentService.reassignCaseToAssociate(this.associateAllCasesId,t).subscribe({next:i=>{this.SpinnerService.hide(),console.log(i.body.responseBody.data),this.changeUserStatus(),this.SpinnerService.hide()},error:i=>{this.SpinnerService.hide()}})}assignCaseToManager(){var s;this.SpinnerService.show();let t=null===(s=this.caseAssignmentForm.get("selectManager"))||void 0===s?void 0:s.value;this.caseAssignmentService.reassignCaseToAllUser(this.user.id,"LAWFIRM_MANAGER",t).subscribe({next:i=>{this.SpinnerService.hide(),console.log(i.body.responseBody.data),this.changeUserStatus(),this.SpinnerService.hide()},error:i=>{this.SpinnerService.hide()}})}changeUserStatus(){this.SpinnerService.show(),this.branchUserService.changeStatus(this.user.username,this.selectedStatus).subscribe({next:s=>{this.SpinnerService.hide(),this.router.navigate(["/lawfirm-admin/users"])},error:s=>{this.SpinnerService.hide()}})}}return n.\u0275fac=function(s){return new(s||n)(e.Y36(u.gz),e.Y36(A.s),e.Y36(u.F0),e.Y36(o.qu),e.Y36(_.H),e.Y36(d.t2))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-case-assignment"]],decls:6,vars:2,consts:[[1,"container"],["bdColor","rgba(51, 51, 51, 0.8)","size","medium","type","ball-circus"],[2,"color","white"],[3,"formGroup"],[4,"ngFor","ngForOf"],["class","table-responsive responsive_table",4,"ngIf"],["class","table-responsive responsive_table  mt-3",4,"ngIf"],[1,"table-responsive","responsive_table"],[1,"table","mt-4","table-striped","table-hover","table-bordered","details_table","text-center"],[1,"table-dark"],["type","checkbox",3,"change"],["formControlName","selectManager",1,"form-select","form-select-lg",3,"change"],["selectedManager",""],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[3,"value"],[2,"display","contents!important"],[3,"user","role","userDetails","userList","status"],[1,"table-responsive","responsive_table","mt-3"],["class","text-danger",4,"ngIf"],["type","checkbox",1,"form-check-input",3,"change"],["formControlName","selectAssociate",1,"form-select","form-select-lg",3,"change"],[1,"text-danger"],[2,"display","contents",3,"user","role","userDetails","userList","status"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"ngx-spinner",1)(2,"p",2),e._uU(3,"Loading "),e.qZA()(),e.TgZ(4,"form",3),e.YNc(5,L,3,2,"div",4),e.qZA()()),2&s&&(e.xp6(4),e.Q6J("formGroup",t.caseAssignmentForm),e.xp6(1),e.Q6J("ngForOf",t.user.role))},directives:[d.Ro,o._Y,o.JL,o.sg,l.sg,l.O5,o.EJ,o.JJ,o.u,o.YN,o.Kr,p],styles:[""]}),n})()}}]);