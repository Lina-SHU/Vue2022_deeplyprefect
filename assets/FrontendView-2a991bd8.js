import{_ as B,o as u,c as h,a as oe,b as ie,m as ce,d as R,r as b,e,f as _,w as C,g as w,h as k,F as y,i as M,j as re,v as le,t as E,p as de,k as Ae}from"./index-ccee8868.js";import{r as fe,a as ue,b as he,c as _e,d as pe,e as me,f as ge,g as ve}from"./component-functions-8ea1ccc9.js";import{C as I}from"./CartStore-2108548f.js";import{L as be}from"./LoadingStore-e20ab4ea.js";import"./sweetalert2.all-9818e8b3.js";const Ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALLSURBVHgB7VYxTBNRGP5bWWg6kPQSO9jEgbSjdaQ4kFjTDsoiiW4FSR04l0aJLhjwJqNGButiYsqmCSx2aRPd7DECY00HYh0YSsIA7eb5vr9eubvcu/YIUAa+5KXv7l7f973//97/XmDq8XyO/tIqBWiMzhe7gnM5SAYtD4EcuC64V4PcGR7GgjRkXAoY6TcgHArR/dtpSsYTFFUUikYinuP39vdpr9WiyqZOO/W6eG7RiQWMx2KkLTzpkfLkoh2229ycgEAgmUhwA/lSsUiNP00pR2AqP2+4fYhGFHr/bJHJN358p1L5myup7L/ZVIpy96ZZRF57Jf2v1AM3EnEmXxPEH75+GZgcUcsI8nUhGg1ikEIZpCnITkzyb0XXZUPoqpj8qGNPx/O5RzR+LcZ9iJ/57581vwKQT4TPaSLTlJgYfQBjSuUyVfUaVWs1CqfviL7OwuCZqCI3rlyACL8bOXyBFWLyn1tb/A5hfzE7xyt9XfrMobfPpZBvAcBhu2N7hqlADlcX3r7phR4E2oLKxms0f7Npe3N0MEYegaC3ALvxshMpfoetZf2GSBXedQVlU5P2OY68zTtwJUSYEe5Gs+laXEC+/avO4/zAdynuhtQd4dEQ+cXAAswKCKOZ7rcCPsDqEaFTE2AlAjnczTvh6aLN2XinqSr/bjh2QD+MeAsYtT1j8lvJm7zST0svebVIiRkV1IGKaFaY54NvAQi5E4hCXluhWbEdM8LtOHDM90VRrtclq/c6EeUCxJEKAqzMuR1xMKGZaZAR4DsK2rY4lmWQegBbCsjdnSapSJdSbQUOJaC6qfsXgHwjDTPpNFdAr3LqBKKmPnjIqYJArwhI7wMAyq6m2i8kgNuFxGq24/HiQvKx6Lk1PQV0J1OEF+KUEceznyvZjkghTNnvHtFXwFnj8lp+IQQc0LAQMHaFAKOADp07jAMyrqz8A8kMU6Xp9wOgAAAAAElFTkSuQmCC",Ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEcSURBVHgB7ZS9zgFBFIbf3e+rRCGhUJAoRJRaq6Gi4RYUfnoX4C8K0WloXIAb0XMBColGqVirM2YmIX4SMWPsRDJPstkzu5s9z8w5M1a+WavihDEshOAvG5qzZ4OgpyE5I0Fzj20e6CNkQzPaBf4hSTAQQLVcQSnr8PiWQrP+9n+kBWbtLqLhMD5FqgRFx1GSnCG1AqVs7unZeruF63n8+rpANBK5Gy9WS7SnE8igZBe4R7FZKxf4BKESzIcjfn9sQNYTmVSax6wHGoM+3kVI4FXnX97t6AEvgvISuN5R6PsvCIg1pJVv1MTWjDLrdJGMxa9j37ehe7if5U9vQyNgBIyAEZA6ilViSsAE9tCFRTZUgLRYAN8he5C//hmZYkc1r+qxMgAAAABJRU5ErkJggg==",we="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGvSURBVHgB7ZaxT8JAFId/rSw0DCQwMFDjQOworuBAAokuuuDiRJToToxRNxyNJvIXGN1lYnHATVnFsYSBBAeGNmEwsFl7l5SYeIU7SqhDv4S04Zp73/X13jspd1Iu4Rs1SIhiufTsmFUZFqo+BCes2bFrMr3xj6gMnwkEfBcIuQ2kVBXFfAGJWByJeHzyfyIWwzQGpkmvX6MR/Q1MA4+NBr1yC5Cgd6dniCgKRJkITkQ1bKU3Ubm9Qfez/+d5ZgqKhcJcwd0gc21ns8wxpkAqqWLRpNc1cAv8zjkLkltRIkoY3AKRMPthh9ePd5pT54PjEggrAgIc+W93dBxcnuP64Z5LxG3OEDzy3GqhrXewk8mgtLsHURZSiMgef3pp2jJvEMXzGyCQle/n59u6ngQ27K11cXg0szoKC5BtNm01qeQqrZRpTYNX2ALj8XQBVbxQufUCmS0gXmhmChgmv0Bb17FwAZE3UG825yq3bpC5SEtmIeWOyxZrgLRk0hWdxsRzJqBnAPv7cRgYBl153a4R3X5fTGBZBGfCQOBfCAzhF5LVswWsCrnB0rGGsFaufgA2zogyJcbl7gAAAABJRU5ErkJggg==",ke={},Se={class:"bg-primary"},ye=oe('<div class="container py-45"><div class="row justify-content-center"><div class="col-md-8"><div class="row justify-content-center"><div class="col-10 col-md-6 mb-6 mb-md-0"><h3 class="fs-6 mb-3">聯絡我們</h3><ul class="list-unstyled mb-3"><li class="mb-2 d-flex"><p class="w-25 mb-0">電話</p><p class="mb-0">02-218 8965</p></li><li class="mb-2 d-flex"><p class="w-25 mb-0">E-mail</p><p class="mb-0">deeplyPrefect@gmail.com</p></li><li class="d-flex"><p class="w-25 mb-0">服務時間</p><p class="mb-0">週一至六 9:00-18:00</p></li></ul></div><div class="col-md-6 text-center"><div class="d-flex flex-column justify-content-center h-100"><ul class="list-unstyled d-flex mx-auto"><li><a href="javascript:;"><img src="'+Ee+'" alt="IG"></a></li><li class="ms-3"><a href="javascript:;"><img src="'+Ce+'" alt="facebook"></a></li><li class="ms-3"><a href="javascript:;"><img src="'+we+'" alt="youtube"></a></li></ul><p class="mb-0">© 2023 All Rights Reserved.</p></div></div></div></div></div></div>',1),Be=[ye];function Ne(s,o){return u(),h("footer",Se,Be)}const Re=B(ke,[["render",Ne]]);var V={},Ie={get exports(){return V},set exports(s){V=s}};/*!
  * Bootstrap offcanvas.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(s,o){(function(p,g){s.exports=g(fe(),ue(),he(),_e(),pe(),me(),ge(),ve())})(ie,function(p,g,S,r,l,m,a,d){const v=i=>i&&typeof i=="object"&&"default"in i?i:{default:i},O=v(g),c=v(S),Y=v(r),N=v(l),G=v(m),j=v(a),$="offcanvas",A=".bs.offcanvas",x=".data-api",P=`load${A}${x}`,H="Escape",T="show",L="showing",U="hiding",J="offcanvas-backdrop",F=".offcanvas.show",z=`show${A}`,K=`shown${A}`,Z=`hide${A}`,D=`hidePrevented${A}`,q=`hidden${A}`,W=`resize${A}`,ee=`click${A}${x}`,te=`keydown.dismiss${A}`,se='[data-bs-toggle="offcanvas"]',ae={backdrop:!0,keyboard:!0,scroll:!1},ne={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class f extends Y.default{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return ae}static get DefaultType(){return ne}static get NAME(){return $}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||c.default.trigger(this._element,z,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new O.default().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(L);const Q=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(T),this._element.classList.remove(L),c.default.trigger(this._element,K,{relatedTarget:t})};this._queueCallback(Q,this._element,!0)}hide(){if(!this._isShown||c.default.trigger(this._element,Z).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(U),this._backdrop.hide();const n=()=>{this._element.classList.remove(T,U),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new O.default().reset(),c.default.trigger(this._element,q)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){c.default.trigger(this._element,D);return}this.hide()},n=Boolean(this._config.backdrop);return new G.default({className:J,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new j.default({trapElement:this._element})}_addEventListeners(){c.default.on(this._element,te,t=>{if(t.key===H){if(!this._config.keyboard){c.default.trigger(this._element,D);return}this.hide()}})}static jQueryInterface(t){return this.each(function(){const n=f.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}return c.default.on(document,ee,se,function(i){const t=p.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),p.isDisabled(this))return;c.default.one(t,q,()=>{p.isVisible(this)&&this.focus()});const n=N.default.findOne(F);n&&n!==t&&f.getInstance(n).hide(),f.getOrCreateInstance(t).toggle(this)}),c.default.on(window,P,()=>{for(const i of N.default.find(F))f.getOrCreateInstance(i).show()}),c.default.on(window,W,()=>{for(const i of N.default.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(i).position!=="fixed"&&f.getOrCreateInstance(i).hide()}),d.enableDismissTrigger(f),p.defineJQueryPlugin(f),f})})(Ie);const Ve=V,Oe={data(){return{cartMsg:""}},methods:{...ce(I,["getCart","changeCartItem","deleteCartItem"]),openOffcanvas(){this.cartMsg.show()},closeOffcanvas(){this.cartMsg.hide()}},computed:{...R(I,["carts"]),...R(be,["isDisabled"])},mounted(){this.cartMsg=new Ve(this.$refs.cartOffcanvas),this.getCart()}},xe={ref:"cartOffcanvas",class:"offcanvas offcanvas-end",tabindex:"-1"},Te={class:"offcanvas-header"},Le={class:"offcanvas-body"},Ue={key:0},Fe=e("p",{class:"text-center"},"目前購物車是空的喔！",-1),De={key:1,class:"d-flex flex-column justify-content-between h-100"},qe={class:"table"},Qe={class:"align-middle"},Me={width:"25%"},Xe=["src","alt"],Ye={class:"input-group align-items-center"},Ge=["onUpdate:modelValue","onChange","disabled"],je=["value"],$e={class:"text-primary-dark mb-0"},Pe=["onClick"],He=e("i",{class:"bi bi-trash3 text-danger"},null,-1),Je=[He],ze={colspan:"5",class:"text-end"};function Ke(s,o,p,g,S,r){var m;const l=b("router-link");return u(),h("div",xe,[e("div",Te,[e("button",{type:"button",class:"btn-close text-reset ms-auto",onClick:o[0]||(o[0]=(...a)=>r.closeOffcanvas&&r.closeOffcanvas(...a)),"aria-label":"Close"})]),e("div",Le,[(m=s.carts.carts)!=null&&m.length?(u(),h("div",De,[e("table",qe,[e("tbody",Qe,[(u(!0),h(y,null,M(s.carts.carts,a=>(u(),h("tr",{key:a},[e("td",Me,[e("img",{src:a.product.imageUrl,alt:a.name,class:"img-fluid"},null,8,Xe)]),e("td",null,[e("div",Ye,[re(e("select",{class:"form-select","onUpdate:modelValue":d=>a.qty=d,onChange:d=>s.changeCartItem(a),disabled:s.isDisabled},[(u(),h(y,null,M(20,d=>e("option",{value:d,key:d},E(d),9,je)),64))],40,Ge),[[le,a.qty]])])]),e("td",null,[e("p",$e,E(a.product.title),1),e("p",null,E(s.$currency(a.final_total)),1)]),e("td",null,[e("a",{href:"#",onClick:k(d=>s.deleteCartItem(a.id),["prevent"])},Je,8,Pe)])]))),128))]),e("tfoot",null,[e("tr",null,[e("td",ze," 總金額： $ "+E(s.$currency(s.carts.final_total))+" 元 ",1)])])]),_(l,{to:"/checkCart",type:"button",class:"btn btn-primary d-block w-100",onClick:r.closeOffcanvas},{default:C(()=>[w(" 立即結帳 ")]),_:1},8,["onClick"])])):(u(),h("div",Ue,[Fe,_(l,{to:"/productlist",class:"btn btn-primary d-block w-100",onClick:k(r.closeOffcanvas,["prevent"])},{default:C(()=>[w("保養去")]),_:1},8,["onClick"])]))])],512)}const Ze=B(Oe,[["render",Ke]]),We="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHfSURBVHgB7ZbPbcIwFMbfIyD1UFWMwAjdoO4GbNCUAD1CJyhsADck/iidAJgAb9BuUDYol0ocStznhNAcmuDnSBwq/yQrjvRZfv78nm0Ah8PhcDjKgKZC0QnU6UfhvZzNJFyAirFSqWHcAHaA6gUuhLGDKaLdGgBi2QClnM7vTYRV4PIdjaDm9eK+UmPgoheHqmEqZwcow3An2sGavH8AjFZyGr6bjiX3E+cVDE3HmOdgluphkHSOThogfL9B7vnk3lZOF6HpOKsA5STc6g81P57YhJqn3WtAVHkEBnYOahQOMxMXclyETy3kHk/WAR4n0q1JAdQLxekivINx7qXwqzhLBGNa4hJq1aV4CrYFOh+0e0lqsCgXoKfuaKt1BJRblF95KJRwfXgGC9gHdUqcVzXvA7Qz0zkr8TnYF0mJvOJg76B+PNCZRlv7yhknZ4sBR2+fg3GBYI+WyL2XBxyxtYMa0afjZX9V54yRk8mWoy9XxV9UuWpfl7NQFsnic7IKt+d0f2FdJMnF770BehvRbfVzdd2gSQX1Ges6wQaY2FcxYvPUV5j/aIiiZuZPAJMSd7HKVu86X1dZnfoIxk+z3yElEAFtH+Lu3ANAtNuCnGzADb0fR+EOHA6Hw/F/+AGRmpX/5VDiEAAAAABJRU5ErkJggg==";const et={components:{CartOffcanvas:Ze},methods:{openOffcanvas(){this.$refs.offcanvas.openOffcanvas()}},computed:{...R(I,["cartNum"])}},X=s=>(de("data-v-c5beda65"),s=s(),Ae(),s),tt={class:"position-fixed top-0 start-0 end-0 navbar navbar-expand-lg navbar-light bg-white-opacity z-index-5 py-3"},st={class:"container-fluid"},at={class:"mb-0"},nt={class:"ms-auto"},ot=X(()=>e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1)),it={ref:"navbar",class:"collapse navbar-collapse ms-auto",id:"navbarNav"},ct={class:"navbar-nav"},rt={class:"nav-item"},lt={class:"nav-item"},dt={class:"cartNumIcon d-flex jusitfy-content-center align-items-center position-absolute bg-danger text-white rounded-circle mb-0"},At=X(()=>e("img",{src:We,alt:"購物車"},null,-1));function ft(s,o,p,g,S,r){const l=b("router-link"),m=b("CartOffcanvas");return u(),h(y,null,[e("nav",tt,[e("div",st,[e("h1",at,[_(l,{to:"/",class:"navbar-brand",href:"#"},{default:C(()=>[w("DeeplyPrefect ")]),_:1})]),e("div",nt,[ot,e("div",it,[e("ul",ct,[e("li",rt,[_(l,{to:"/productlist",class:"nav-link py-3 py-lg-0 px-4",onClick:o[0]||(o[0]=k(a=>this.$refs.navbar.classList.remove("show"),["prevent"]))},{default:C(()=>[w(" 保養去 ")]),_:1})]),e("li",lt,[_(l,{to:"/trials",class:"nav-link py-3 py-lg-0 px-4",onClick:o[1]||(o[1]=k(a=>this.$refs.navbar.classList.remove("show"),["prevent"]))},{default:C(()=>[w(" 立即體驗 ")]),_:1})])])],512)]),e("a",{href:"#",class:"position-relative",onClick:o[2]||(o[2]=k((...a)=>r.openOffcanvas&&r.openOffcanvas(...a),["prevent"]))},[e("p",dt,E(s.cartNum),1),At])])]),_(m,{ref:"offcanvas"},null,512)],64)}const ut=B(et,[["render",ft],["__scopeId","data-v-c5beda65"]]),ht={components:{HeaderView:ut,FooterView:Re}};function _t(s,o,p,g,S,r){const l=b("HeaderView"),m=b("RouterView"),a=b("FooterView");return u(),h(y,null,[_(l),_(m),_(a)],64)}const Ct=B(ht,[["render",_t]]);export{Ct as default};
