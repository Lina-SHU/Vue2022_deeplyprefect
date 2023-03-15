import{o as g}from"./order-service-6ecbc187.js";import{S as b}from"./sweetalert2.all-9d19fef7.js";import{_ as v,L as k,m as w,d as L,r as y,o as r,c as l,e as t,F as B,i as F,t as e,f as c,w as a,g as n,a as S}from"./index-3125bab5.js";import{L as x}from"./LoadingStore-93f5495c.js";const j={components:{Loading:k},data(){return{order:{},orderId:""}},methods:{...w(x,["toggleLoading"]),getOrder(){this.toggleLoading(),this.id=this.$route.params.id,g.getOrder(this.id).then(i=>{this.toggleLoading(),i.isSuccess?this.order=i.order.order:b.fire({title:i.msg,icon:"error"})})},payOrder(){this.toggleLoading(),g.payOrder(this.id).then(i=>{this.toggleLoading(),i.isSuccess?this.$router.push(`/orderCompleted/${this.id}`):b.fire({title:i.msg,icon:"error"})})}},computed:{...L(x,["isLoading"])},mounted(){this.getOrder()}},W={class:"bg-homeSection"},C={class:"bg-prds bg-white"},N=t("div",{class:"bg-prdBanner position-relative",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1677852996621.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WNOBLbEn%2B4HFspBIWLRXuJ6pxbN%2B3ijsN7Tn3ac5rK9j1iMrd21A0VrstKPZhlGdWGjscnrSJTlqJPkCJ%2FCDWL87%2BjBecMHbEgfZzvhI0OoTnz3m5pQB6kWWacJC0C03Fby%2FtZDOvZGyg4rnsWPW0hQzRTPE5COpDG8HIqaFufRUaVHS5bEBvXuEfGYNAzN3W6tphbsBTuFwFgCVwNDmKvJ9TP%2FM9XVRZSflFto45njpC8Zi4r%2B2pZuUyZyncbDcmy5XqKmbRbc72DJnB881%2FMj2G9KLeWPDih%2BEUiOJXmXfkpSFsTWPEQYWPX%2F5JtmaIZ9HW2Nx32ls%2FmlpZksqlQ%3D%3D')"}},[t("div",{class:"banner-cta bg-white-opacity position-absolute"},[t("div",{class:"d-inline-block"},[t("h2",{class:"font-banner text-primary-dark"},[n(" 訂購完成"),t("br"),n("重啟年輕煥光肌 ")])])])],-1),O={class:"container bg-white py-5"},D=S('<div class="row justify-content-center"><div class="col-lg-8"><ul class="cartlist list-unstyled d-flex justify-content-between mx-auto w-75 mb-7"><li class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark fs-5 bg-primary mb-0"> 1 </li><li class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark fs-5 bg-primary mb-0"> 2 </li><li class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-primary-dark fs-5 bg-primary mb-0"> 3 </li><li class="position-relative border-2 border-primary-dark rounded-circle circle d-flex justify-content-center align-items-center text-white fs-5 bg-primary-dark mb-0"> 4 </li></ul></div></div>',1),E={class:"text-center mb-5"},Z={key:0,class:"fs-5 d-inline-block py-2 px-4 px-lg-7 border border-primary-dark text-primary-dark"},J={key:1,class:"fs-5 d-inline-block py-2 px-4 px-lg-7 border border-danger text-danger"},P={class:"row gx-"},T={class:"col-lg-6"},V={class:"table"},G=t("thead",{class:"text-center"},[t("tr",null,[t("th",null,"品名"),t("th",null,"單價"),t("th",null,"數量/單位"),t("th",null,"小計")])],-1),X={class:"align-middle"},z={class:"d-flex align-items-center"},I={class:"ratio ratio-1x1 w-50 me-2"},q=["src","alt"],H={class:"text-end"},K={class:"text-center"},R={class:"text-end"},U={class:"d-flex justify-content-between px-2"},A=t("p",null,"總計：",-1),M={class:"col-lg-6"},Q={class:"table"},Y=t("th",{class:"px-3 py-3"},"下單日期",-1),$={class:"px-3 py-3"},tt=t("th",{class:"px-3 py-3"},"訂單編號",-1),et={class:"px-3 py-3"},st=t("th",{class:"px-3 py-3"},"收件人姓名",-1),ot={class:"px-3 py-3"},it=t("th",{class:"px-3 py-3"},"連絡電話",-1),rt={class:"px-3 py-3"},lt=t("th",{class:"px-3 py-3"},"Email",-1),nt={class:"px-3 py-3"},ct=t("th",{class:"px-3 py-3"},"聯絡地址",-1),dt={class:"px-3 py-3"},at=t("th",{class:"px-3 py-3"},"是否付款",-1),pt={class:"px-3 py-3"};function _t(i,p,ut,mt,o,ht){var _,u,m,h;const d=y("router-link"),f=y("loading");return r(),l("main",W,[t("section",C,[N,t("div",O,[D,t("div",E,[o.order.is_paid?(r(),l("p",Z," 感謝您的訂購，以下為您的訂單 ")):(r(),l("p",J," 付款失敗！請洽客服 "))]),t("div",P,[t("div",T,[t("table",V,[G,t("tbody",X,[(r(!0),l(B,null,F(o.order.products,s=>(r(),l("tr",{key:s},[t("td",z,[t("div",I,[t("img",{src:s.product.imageUrl,alt:s.name,class:"img-fluid"},null,8,q)]),c(d,{to:`/product/${s.product.id}`},{default:a(()=>[n(e(s.product.title),1)]),_:2},1032,["to"])]),t("td",H,e(s.product.price),1),t("td",K,e(s.qty)+" "+e(s.product.unit),1),t("td",R,e(s.final_total),1)]))),128))])]),t("div",U,[A,t("p",null,e(o.order.total),1)])]),t("div",M,[t("table",Q,[t("tbody",null,[t("tr",null,[Y,t("td",$,e(o.order.create_at),1)]),t("tr",null,[tt,t("td",et,e(o.order.id),1)]),t("tr",null,[st,t("td",ot,e((_=o.order.user)==null?void 0:_.name),1)]),t("tr",null,[it,t("td",rt,e((u=o.order.user)==null?void 0:u.tel),1)]),t("tr",null,[lt,t("td",nt,e((m=o.order.user)==null?void 0:m.email),1)]),t("tr",null,[ct,t("td",dt,e((h=o.order.user)==null?void 0:h.address),1)]),t("tr",null,[at,t("td",pt,e(o.order.is_paid?"已付款":"尚未付款"),1)])])]),c(d,{to:"/productlist",class:"btn btn-primary-dark d-block w-100 mb-2"},{default:a(()=>[n(" 繼續逛逛 ")]),_:1}),c(d,{to:"/",class:"btn btn-outline-primary-dark d-block w-100"},{default:a(()=>[n(" 回首頁 ")]),_:1})])])]),c(f,{active:i.isLoading,"onUpdate:active":p[0]||(p[0]=s=>i.isLoading=s)},null,8,["active"])])])}const ft=v(j,[["render",_t]]);export{ft as default};