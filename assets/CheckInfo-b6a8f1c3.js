import{_ as j,L as N,m as v,d as y,r as a,o as b,c as g,e,F as W,i as D,t as n,j as x,G as k,f as l,w as C,g as _,a as E,D as p}from"./index-3125bab5.js";import{C as V}from"./CartStore-c0581342.js";import{S as f}from"./sweetalert2.all-9d19fef7.js";import{o as S}from"./order-service-6ecbc187.js";import{L as w}from"./LoadingStore-93f5495c.js";const U={components:{Loading:N},data(){return{user:{},message:"",couponCode:"prefect666"}},methods:{...v(w,["toggleLoading"]),...v(V,["getCart"]),useCoupon(){this.toggleLoading(),S.useCoupon(this.couponCode).then(i=>{this.toggleLoading(),i.isSuccess?(this.getCart(),f.fire({toast:!0,title:"已使用折價券！",icon:"success",timer:2e3,position:"top-end",showConfirmButton:!1})):f.fire({title:i.msg,icon:"error"})})},isPhone(i){return/^(09)[0-9]{8}$/.test(i)?!0:"請輸入 09 開頭的 10 位電話號碼"},onSubmit(i,{resetForm:t}){const h={user:{...this.user},message:this.message};this.toggleLoading(),S.orderSubmit(h).then(d=>{this.toggleLoading(),d.isSuccess?(t(),this.message="",this.getCart(),this.$router.push(`/orderConfirm/${d.order.orderId}`)):f.fire({title:d.msg,icon:"error"})})}},computed:{...y(V,["carts"]),...y(w,["isLoading"])}},P={class:"bg-homeSection"},Z={class:"bg-prds bg-white"},J=e("div",{class:"bg-prdBanner position-relative",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1677852996621.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WNOBLbEn%2B4HFspBIWLRXuJ6pxbN%2B3ijsN7Tn3ac5rK9j1iMrd21A0VrstKPZhlGdWGjscnrSJTlqJPkCJ%2FCDWL87%2BjBecMHbEgfZzvhI0OoTnz3m5pQB6kWWacJC0C03Fby%2FtZDOvZGyg4rnsWPW0hQzRTPE5COpDG8HIqaFufRUaVHS5bEBvXuEfGYNAzN3W6tphbsBTuFwFgCVwNDmKvJ9TP%2FM9XVRZSflFto45njpC8Zi4r%2B2pZuUyZyncbDcmy5XqKmbRbc72DJnB881%2FMj2G9KLeWPDih%2BEUiOJXmXfkpSFsTWPEQYWPX%2F5JtmaIZ9HW2Nx32ls%2FmlpZksqlQ%3D%3D')"}},[e("div",{class:"banner-cta bg-white-opacity position-absolute"},[e("div",{class:"d-inline-block"},[e("h2",{class:"font-banner text-primary-dark"},[_(" 立即訂購"),e("br"),_("重啟年輕煥光肌 ")])])])],-1),T={class:"container bg-white py-5"},q=E('<div class="row justify-content-center"><div class="col-lg-8"><ul class="cartlist list-unstyled d-flex justify-content-between mx-auto w-75 mb-7"><li class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark fs-5 bg-primary mb-0"> 1 </li><li class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-white fs-5 bg-primary-dark mb-0"> 2 </li><li class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark fs-5 bg-primary mb-0"> 3 </li><li class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark fs-5 bg-primary mb-0"> 4 </li></ul></div></div>',1),G={class:"row gx-5"},M={class:"col-lg-6"},z={class:"table"},I=e("thead",{class:"text-center"},[e("tr",null,[e("th",null,"品名"),e("th",null,"單價"),e("th",null,"數量/單位"),e("th",null,"小計")])],-1),X={class:"align-middle"},H={class:"d-flex align-items-center"},K={class:"ratio ratio-1x1 w-50 me-2"},O=["src","alt"],R={class:"text-end"},A={class:"text-center"},Q={class:"text-end"},Y={class:"d-flex justify-content-between px-2"},$=e("p",null,"小計：",-1),ee={class:"input-group mb-3"},se={class:"d-flex justify-content-between px-2"},te=e("p",null,"總計：",-1),oe={class:"col-lg-6"},ie={class:"mb-3"},le=e("label",{for:"email"},"姓名",-1),re={class:"mb-3"},ne=e("label",{for:"email"},"Email",-1),ae={class:"mb-3"},de=e("label",{for:"email"},"電話",-1),ce={class:"mb-3"},me=e("label",{for:"address"},"地址",-1),ue={class:"mb-3"},pe=e("label",{for:"message",class:"form-label"},"留言",-1),be=e("button",{type:"submit",class:"btn btn-primary w-100"}," 送出訂單 ",-1);function ge(i,t,h,d,o,c){const F=a("router-link"),m=a("VField"),u=a("error-message"),B=a("VForm"),L=a("loading");return b(),g("main",P,[e("section",Z,[J,e("div",T,[q,e("div",G,[e("div",M,[e("table",z,[I,e("tbody",X,[(b(!0),g(W,null,D(i.carts.carts,s=>(b(),g("tr",{key:s},[e("td",H,[e("div",K,[e("img",{src:s.product.imageUrl,alt:s.name,class:"img-fluid"},null,8,O)]),l(F,{to:`/product/${s.product.id}`},{default:C(()=>[_(n(s.product.title),1)]),_:2},1032,["to"])]),e("td",R,n(s.product.price),1),e("td",A,n(s.qty)+" "+n(s.product.unit),1),e("td",Q,n(s.final_total),1)]))),128))])]),e("div",Y,[$,e("p",null,n(i.carts.total),1)]),e("div",ee,[x(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>o.couponCode=s)},null,512),[[k,o.couponCode]]),e("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=(...s)=>c.useCoupon&&c.useCoupon(...s))}," 使用折價券 ")]),e("div",se,[te,e("p",null,n(i.carts.final_total),1)])]),e("div",oe,[l(B,{onSubmit:c.onSubmit},{default:C(({errors:s})=>[e("div",ie,[le,l(m,{id:"name",name:"姓名",type:"text",class:p(["form-control",{"is-invalid":s.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.user.name,"onUpdate:modelValue":t[2]||(t[2]=r=>o.user.name=r),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),l(u,{name:"姓名",class:"invalid-feedback"})]),e("div",re,[ne,l(m,{id:"email",name:"email",type:"email",class:p(["form-control",{"is-invalid":s.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.user.email,"onUpdate:modelValue":t[3]||(t[3]=r=>o.user.email=r)},null,8,["class","modelValue"]),l(u,{name:"email",class:"invalid-feedback"})]),e("div",ae,[de,l(m,{id:"tel",name:"電話",type:"tel",class:p(["form-control",{"is-invalid":s.電話}]),placeholder:"請輸入電話",rules:c.isPhone,modelValue:o.user.tel,"onUpdate:modelValue":t[4]||(t[4]=r=>o.user.tel=r),modelModifiers:{trim:!0}},null,8,["class","rules","modelValue"]),l(u,{name:"電話",class:"invalid-feedback"})]),e("div",ce,[me,l(m,{id:"address",name:"地址",type:"text",class:p(["form-control",{"is-invalid":s.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.user.address,"onUpdate:modelValue":t[5]||(t[5]=r=>o.user.address=r),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),l(u,{name:"地址",class:"invalid-feedback"})]),e("div",ue,[pe,x(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"5","onUpdate:modelValue":t[6]||(t[6]=r=>o.message=r)},null,512),[[k,o.message]])]),be]),_:1},8,["onSubmit"])])])]),l(L,{active:i.isLoading,"onUpdate:active":t[7]||(t[7]=s=>i.isLoading=s)},null,8,["active"])])])}const xe=j(U,[["render",ge]]);export{xe as default};
