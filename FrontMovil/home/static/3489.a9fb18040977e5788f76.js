(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3489],{3489:(i,e,o)=>{"use strict";o.r(e),o.d(e,{RegisterEmpresaPageModule:()=>N});var t=o(8583),n=o(665),r=o(3083),s=o(649),a=o(639),c=o(4391),l=o(319),p=o(3575),m=o(5e3),u=o(954),Z=o(9214),d=o(4141),g=o(2061),T=o(8414),q=o(1841);function f(i,e){if(1&i&&(a.TgZ(0,"ion-select-option",27),a._uU(1),a.qZA()),2&i){const i=e.$implicit;a.s9C("value",i.idtipodocumento),a.xp6(1),a.hij(" ",i.descripcion," ")}}function A(i,e){if(1&i&&(a.TgZ(0,"ion-select-option",27),a._uU(1),a.qZA()),2&i){const i=e.$implicit;a.s9C("value",i.idtipopersona),a.xp6(1),a.hij(" ",i.descripcion,"")}}function h(i,e){if(1&i&&(a.TgZ(0,"ion-select-option",27),a._uU(1),a.qZA()),2&i){const i=e.$implicit;a.s9C("value",i.idtipoempresa),a.xp6(1),a.hij(" ",i.descripcion," ")}}function v(i,e){if(1&i&&(a.TgZ(0,"ion-select-option",27),a._uU(1),a.qZA()),2&i){const i=e.$implicit;a.s9C("value",i.idactividadeconomica),a.xp6(1),a.hij(" ",i.descripcion," ")}}function _(i,e){if(1&i&&(a.TgZ(0,"ion-select-option",27),a._uU(1),a.qZA()),2&i){const i=e.$implicit;a.s9C("value",i.idramaactividad),a.xp6(1),a.hij(" ",i.descripcion," ")}}function b(i,e){if(1&i&&(a.TgZ(0,"ion-select-option",27),a._uU(1),a.qZA()),2&i){const i=e.$implicit;a.s9C("value",i.idciudad),a.xp6(1),a.hij(" ",i.nombreciudad,"")}}function U(i,e){if(1&i&&(a.TgZ(0,"ion-select-option",27),a._uU(1),a.qZA()),2&i){const i=e.$implicit;a.s9C("value",i.idprovincia),a.xp6(1),a.hij(" ",i.nombreprovincia,"")}}function k(i,e){if(1&i&&(a.TgZ(0,"ion-select-option",27),a._uU(1),a.qZA()),2&i){const i=e.$implicit;a.s9C("value",i.idsector),a.xp6(1),a.hij(" ",i.descripcion,"")}}const x=[{path:"",component:(()=>{class i{constructor(i,e,o,t,r,s,a,c,l,p,m){this._tipodocumentoService=i,this._tipopersonaService=e,this._tipoempresaService=o,this._ramaactividadService=t,this._actividadeconomicaService=r,this._ciudadService=s,this._provinciaService=a,this._sectorService=c,this._empresaService=l,this.form=p,this.httpClient=m,this.tipopersonas=[],this.tipodocumentos=[],this.tipoempresas=[],this.ramaactividads=[],this.actividadeconomicas=[],this.ciudades=[],this.provincias=[],this.sectores=[],this.empresas=[],this.new_empresa=[],this.formEmpresa=this.form.group({tipodocumentos:["",n.kI.required],actividadeconomicas:["",n.kI.required],ramaactividads:["",n.kI.required],sectores:["",n.kI.required],provincias:["",n.kI.required],tipoempresas:["",n.kI.required],tipopersonas:["",n.kI.required],ruc_cedula:["",[n.kI.required,n.kI.minLength(10)]],razonsocial:["",[n.kI.required]],nombrecomercial:["",[n.kI.required]],calleprincipal:["",[n.kI.required]],callesecundaria:["",[n.kI.required]],mz:["",[n.kI.required]],villa:["",[n.kI.required]],referencia:["",[n.kI.required]],paginaweb:["",[n.kI.required]],ciudades:["",n.kI.required],correoelectronico:["",[n.kI.required,n.kI.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,3}$")]],celular:["",[n.kI.required,n.kI.minLength(10)]],telefonooficina:["",[n.kI.required,n.kI.minLength(10)]],contrasenia:["",[n.kI.required]]})}ngOnInit(){this._tipodocumentoService.getTipodocumentos().subscribe(i=>{this.tipodocumentos=i,console.log(i)}),this._tipopersonaService.getTipopersonas().subscribe(i=>{this.tipopersonas=i,console.log(i)}),this._tipoempresaService.getTipoempresas().subscribe(i=>{this.tipoempresas=i,console.log(i)}),this._ramaactividadService.getRamaactividads().subscribe(i=>{this.ramaactividads=i,console.log(i)}),this._actividadeconomicaService.getActividadeconomicas().subscribe(i=>{this.actividadeconomicas=i,console.log(i)}),this._ciudadService.getCiudades().subscribe(i=>{this.ciudades=i,console.log(i)}),this._provinciaService.getProvincias().subscribe(i=>{this.provincias=i,console.log(i)}),this._sectorService.getSector().subscribe(i=>{this.sectores=i,console.log(i)})}crear(){if(this.formEmpresa.invalid)return Object.values(this.formEmpresa.controls).forEach(i=>{i.markAsTouched()});console.log(this.formEmpresa.value),this.httpClient.post("https://agencialaboralproyecto.pythonanywhere.com/api/empresas/",this.formEmpresa.value).subscribe(i=>console.log(i),i=>console.log(i)),alert("USUARIO CREADO")}get errorCtr(){return this.formEmpresa.controls}}return i.\u0275fac=function(e){return new(e||i)(a.Y36(c.l),a.Y36(l.F),a.Y36(p.l),a.Y36(m.r),a.Y36(u.T),a.Y36(Z.U),a.Y36(d.s),a.Y36(g.W),a.Y36(T.P),a.Y36(n.qu),a.Y36(q.eN))},i.\u0275cmp=a.Xpm({type:i,selectors:[["app-register-empresa"]],decls:104,vars:9,consts:[["slot","start"],[3,"formGroup","ngSubmit"],["lines","full"],["position","floating"],["okText","Okay","cancelText","Dismiss","formControlName","tipodocumentos"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","ruc_cedula"],["okText","Okay","cancelText","Dismiss","formControlName","tipopersonas"],["type","text","formControlName","razonsocial"],["type","text","formControlName","nombrecomercial"],["okText","Okay","cancelText","Dismiss","formControlName","tipoempresas"],["okText","Okay","cancelText","Dismiss","formControlName","actividadeconomicas"],["okText","Okay","cancelText","Dismiss","formControlName","ramaactividads"],["okText","Okay","cancelText","Dismiss","formControlName","ciudades"],["okText","Okay","cancelText","Dismiss","formControlName","provincias"],["okText","Okay","cancelText","Dismiss","formControlName","sectores"],["type","text","formControlName","calleprincipal"],["type","text","formControlName","callesecundaria"],["type","text","formControlName","referencia"],["type","text","formControlName","mz"],["type","text","formControlName","villa"],["type","text","formControlName","celular"],["type","text","formControlName","telefonooficina"],["type","text","formControlName","paginaweb"],["type","text","formControlName","correoelectronico"],["type","password","formControlName","contrasenia"],["type","submit","color","danger","expand","block"],[3,"value"]],template:function(i,e){1&i&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",0),a._UZ(3,"ion-back-button"),a.qZA(),a.TgZ(4,"ion-title"),a._uU(5,"Registro Empresa"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"ion-content"),a.TgZ(7,"form",1),a.NdJ("ngSubmit",function(){return e.crear()}),a.TgZ(8,"ion-item",2),a.TgZ(9,"ion-label",3),a._uU(10,"Tipo de documento "),a.qZA(),a.TgZ(11,"ion-select",4),a.YNc(12,f,2,2,"ion-select-option",5),a.qZA(),a.qZA(),a.TgZ(13,"ion-item",2),a.TgZ(14,"ion-label",3),a._uU(15,"RUC/C\xe9dula"),a.qZA(),a._UZ(16,"ion-input",6),a.qZA(),a.TgZ(17,"ion-item",2),a.TgZ(18,"ion-label",3),a._uU(19,"Tipo de Persona: "),a.qZA(),a.TgZ(20,"ion-select",7),a.YNc(21,A,2,2,"ion-select-option",5),a.qZA(),a.qZA(),a.TgZ(22,"ion-item",2),a.TgZ(23,"ion-label",3),a._uU(24,"Raz\xf3n Social"),a.qZA(),a._UZ(25,"ion-input",8),a.qZA(),a.TgZ(26,"ion-item",2),a.TgZ(27,"ion-label",3),a._uU(28,"Nombre Comercial"),a.qZA(),a._UZ(29,"ion-input",9),a.qZA(),a.TgZ(30,"ion-item",2),a.TgZ(31,"ion-label",3),a._uU(32,"Tipo de Empresa: "),a.qZA(),a.TgZ(33,"ion-select",10),a.YNc(34,h,2,2,"ion-select-option",5),a.qZA(),a.qZA(),a.TgZ(35,"ion-item",2),a.TgZ(36,"ion-label",3),a._uU(37,"Actividad Economica "),a.qZA(),a.TgZ(38,"ion-select",11),a.YNc(39,v,2,2,"ion-select-option",5),a.qZA(),a.qZA(),a.TgZ(40,"ion-item",2),a.TgZ(41,"ion-label",3),a._uU(42,"Rama de Actividad "),a.qZA(),a.TgZ(43,"ion-select",12),a.YNc(44,_,2,2,"ion-select-option",5),a.qZA(),a.qZA(),a.TgZ(45,"ion-item",2),a.TgZ(46,"ion-label",3),a._uU(47,"Ciudad"),a.qZA(),a.TgZ(48,"ion-select",13),a.YNc(49,b,2,2,"ion-select-option",5),a.qZA(),a.qZA(),a.TgZ(50,"ion-item",2),a.TgZ(51,"ion-label",3),a._uU(52,"Provincia"),a.qZA(),a.TgZ(53,"ion-select",14),a.YNc(54,U,2,2,"ion-select-option",5),a.qZA(),a.qZA(),a.TgZ(55,"ion-item",2),a.TgZ(56,"ion-label",3),a._uU(57,"Sector"),a.qZA(),a.TgZ(58,"ion-select",15),a.YNc(59,k,2,2,"ion-select-option",5),a.qZA(),a.qZA(),a.TgZ(60,"ion-item",2),a.TgZ(61,"ion-label",3),a._uU(62,"Calle Principal"),a.qZA(),a._UZ(63,"ion-input",16),a.qZA(),a.TgZ(64,"ion-item",2),a.TgZ(65,"ion-label",3),a._uU(66,"Calle Secundaria"),a.qZA(),a._UZ(67,"ion-input",17),a.qZA(),a.TgZ(68,"ion-item",2),a.TgZ(69,"ion-label",3),a._uU(70,"Referencia"),a.qZA(),a._UZ(71,"ion-input",18),a.qZA(),a.TgZ(72,"ion-item",2),a.TgZ(73,"ion-label",3),a._uU(74,"Mz"),a.qZA(),a._UZ(75,"ion-input",19),a.qZA(),a.TgZ(76,"ion-item",2),a.TgZ(77,"ion-label",3),a._uU(78,"Villa"),a.qZA(),a._UZ(79,"ion-input",20),a.qZA(),a.TgZ(80,"ion-item",2),a.TgZ(81,"ion-label",3),a._uU(82,"Tel\xe9fono de Celular "),a.qZA(),a._UZ(83,"ion-input",21),a.qZA(),a.TgZ(84,"ion-item",2),a.TgZ(85,"ion-label",3),a._uU(86,"Tel\xe9fono de Oficina"),a.qZA(),a._UZ(87,"ion-input",22),a.qZA(),a.TgZ(88,"ion-item",2),a.TgZ(89,"ion-label",3),a._uU(90,"Pagina Web"),a.qZA(),a._UZ(91,"ion-input",23),a.qZA(),a.TgZ(92,"ion-item",2),a.TgZ(93,"ion-label",3),a._uU(94,"Correo"),a.qZA(),a._UZ(95,"ion-input",24),a.qZA(),a.TgZ(96,"ion-item",2),a.TgZ(97,"ion-label",3),a._uU(98,"Contrase\xf1a"),a.qZA(),a._UZ(99,"ion-input",25),a.qZA(),a.TgZ(100,"ion-row"),a.TgZ(101,"ion-col"),a.TgZ(102,"ion-button",26),a._uU(103,"Registrarse"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&i&&(a.xp6(7),a.Q6J("formGroup",e.formEmpresa),a.xp6(5),a.Q6J("ngForOf",e.tipodocumentos),a.xp6(9),a.Q6J("ngForOf",e.tipopersonas),a.xp6(13),a.Q6J("ngForOf",e.tipoempresas),a.xp6(5),a.Q6J("ngForOf",e.actividadeconomicas),a.xp6(5),a.Q6J("ngForOf",e.ramaactividads),a.xp6(5),a.Q6J("ngForOf",e.ciudades),a.xp6(5),a.Q6J("ngForOf",e.provincias),a.xp6(5),a.Q6J("ngForOf",e.sectores))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.W2,n._Y,n.JL,n.sg,r.Ie,r.Q$,r.t9,r.QI,n.JJ,n.u,t.sg,r.pK,r.j9,r.Nd,r.wI,r.YG,r.n0],styles:[""]}),i})()}];let C=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[[s.Bz.forChild(x)],s.Bz]}),i})(),N=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[[t.ez,n.u5,r.Pc,n.UX,C]]}),i})()}}]);