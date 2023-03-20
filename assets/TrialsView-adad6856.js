import{O as _}from"./order-service-96efae9b.js";import{p}from"./product-service-ca4c6e49.js";import{_ as x,L as V,m as b,d as S,r as m,o as g,c as v,e,F as C,i as k,f as l,w as L,a as F,G as r,t as I,j as P,I as j}from"./index-ccee8868.js";import{C as B}from"./CartStore-2108548f.js";import{L as f}from"./LoadingStore-e20ab4ea.js";import"./sweetalert2.all-9818e8b3.js";const N={components:{Loading:V},data(){return{user:{},message:"",trials:[]}},methods:{...b(B,["getCart","addToCart","deleteAllItems"]),...b(f,["toggleLoading"]),async getTrial(){const a=await p.getProduct("-NPr0DGfmGC2-OvbmvL_");this.trials.push(a.product);const s=await p.getProduct("-NPr0srldDbrv_E_44ml");this.trials.push(s.product);const d=await p.getProduct("-NPrQX1CCPfvFKMpWv_O");this.trials.push(d.product)},isPhone(a){return/^(09)[0-9]{8}$/.test(a)?!0:"請輸入 09 開頭的 10 位電話號碼"},async onSubmit(a,{resetForm:s}){const d={user:{...this.user},message:this.message};await this.deleteAllItems(),await this.addToCart("-NQjv0kHAdgP4A0b1Hag"),this.toggleLoading();const u=await _.orderSubmit(d);await _.payOrder(u.order.orderId),this.toggleLoading(),s(),this.message="",this.getCart(),this.$router.push(`/orderCompleted/${u.order.orderId}`)}},computed:{...S(f,["isLoading","isDisabled"])},mounted(){this.getTrial()}},A={class:"bg-homeSection position-relative"},E={class:"bg-prds bg-white"},D=e("div",{class:"bg-prdBanner position-relative",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1678512915804.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pnckhrydpMiGCh9s0c1zurOQyVc065g7p780s6vn9KzxeQexCupYBlHVAI12AhvG2jmwAwncUB6iB01ll%2BePDiFSheSvgDagP061T6iIIeexufhBtIu3vG5qwvLN9xnyE1S%2BU7dOtjYDtKSOWuYUCuj9LkMj2lOQkgplcWCsXNj2Qj0m%2Fq6JKIXN4FTqB5j8k8zNlnW2csjYqKatTzGvFenwZdSiPwffe%2FXj9B9YF7A3PE4D%2BH2M8x0IELnhmn8bF5bCY7x69pEaF5i8nmMbFqdv%2BVoEcI0FxoPIIf5n0AQOQd4u0IpWb6S%2BAveEC9tKUeW4dGNOqkEqWPSisa4mYg%3D%3D')"}},[e("div",{class:"banner-cta bg-white-opacity position-absolute"},[e("div",{class:"d-inline-block"},[e("h2",{class:"font-banner text-primary-dark"},"立即體驗")])])],-1),M={class:"container py-3 py-lg-5 py-lg-8"},O={class:"row justify-content-center mb-3 mb-lg-5"},T={class:"col-lg-10"},U={class:"list-unstyled"},q={class:"col-lg-4 text-center"},G={class:"ratio ratio-1x1"},z=["src","alt"],Q={class:"col-lg-6 d-flex align-items-center"},W={class:"p-45 px-lg-4 py-lg-0 h-100 d-flex align-items-center position-relative"},Y={class:"position-relative bg-white-opacity z-index-3 p-3"},H={class:"h4 fw-normal mb-2"},K=["innerHTML"],X={class:"row justify-content-center"},J={class:"col-lg-6"},R=F('<div class="card rounded-0 border-0 mb-5"><div class="card-header rounded-0 fs-4 bg-primary text-center fw-normal py-2 py-lg-3"> 試用包內容物 </div><div class="card-body"><ul class="mb-0"><li>淡斑亮白精華 3m * 1瓶</li><li>深層保濕精華 3m * 1瓶</li><li>抗皺撫紋精華 3m * 1瓶</li></ul></div></div><div class="card rounded-0 border-0 mb-5"><div class="card-header rounded-0 text-center fs-4 bg-primary fw-normal py-2 py-lg-3"> 申請試用包說明 </div><div class="card-body"><ul class="mb-0"><li>酌收物流費 99 元。</li><li>申請後 3 日內送達。</li><li>每人限申請一組試用包。</li></ul></div></div>',2),Z=e("h2",{class:"text-center fs-4 fw-normal border border-primary bg-primary py-2 py-lg-3 mb-4"}," 申請試用包資料填寫 ",-1),$={class:"mb-3"},ee=e("label",{for:"email"},"姓名",-1),se={class:"mb-3"},te=e("label",{for:"email"},"Email",-1),oe={class:"mb-3"},ie=e("label",{for:"email"},"電話",-1),le={class:"mb-3"},ae=e("label",{for:"address"},"地址",-1),re={class:"mb-3"},de=e("label",{for:"message",class:"form-label"},"留言",-1),ne=e("button",{type:"submit",class:"btn btn-primary-dark w-100"}," 馬上體驗！ ",-1);function ce(a,s,d,u,i,h){const n=m("VField"),c=m("error-message"),y=m("VForm"),w=m("loading");return g(),v("main",null,[e("section",A,[e("div",E,[D,e("div",M,[e("div",O,[e("div",T,[e("ul",U,[(g(!0),v(C,null,k(i.trials,(o,t)=>(g(),v("li",{class:r(["row mb-4 gx-0",{"flex-lg-row-reverse":t%2===0}]),key:o},[e("div",q,[e("div",G,[e("img",{class:"img-fluid w-100 object-cover",src:o.imageUrl,alt:o.title},null,8,z)])]),e("div",Q,[e("div",W,[e("div",{class:r(["bg-secondary position-absolute overflow-hidden",{"shadowLeft-trial":t%2===0,"shadowRight-trial":t%2!==0}])},null,2),e("div",Y,[e("h2",H,I(o.title),1),e("p",{class:"mb-3",innerHTML:o.content},null,8,K)])])])],2))),128))])])]),e("div",X,[e("div",J,[R,e("div",null,[Z,l(y,{onSubmit:h.onSubmit},{default:L(({errors:o})=>[e("div",$,[ee,l(n,{id:"name",name:"姓名",type:"text",class:r(["form-control",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:i.user.name,"onUpdate:modelValue":s[0]||(s[0]=t=>i.user.name=t),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),l(c,{name:"姓名",class:"invalid-feedback"})]),e("div",se,[te,l(n,{id:"email",name:"email",type:"email",class:r(["form-control",{"is-invalid":o.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:i.user.email,"onUpdate:modelValue":s[1]||(s[1]=t=>i.user.email=t)},null,8,["class","modelValue"]),l(c,{name:"email",class:"invalid-feedback"})]),e("div",oe,[ie,l(n,{id:"tel",name:"電話",type:"tel",class:r(["form-control",{"is-invalid":o.電話}]),placeholder:"請輸入電話",rules:h.isPhone,modelValue:i.user.tel,"onUpdate:modelValue":s[2]||(s[2]=t=>i.user.tel=t),modelModifiers:{trim:!0}},null,8,["class","rules","modelValue"]),l(c,{name:"電話",class:"invalid-feedback"})]),e("div",le,[ae,l(n,{id:"address",name:"地址",type:"text",class:r(["form-control",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:i.user.address,"onUpdate:modelValue":s[3]||(s[3]=t=>i.user.address=t),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),l(c,{name:"地址",class:"invalid-feedback"})]),e("div",re,[de,P(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"5","onUpdate:modelValue":s[4]||(s[4]=t=>i.message=t)},null,512),[[j,i.message]])]),ne]),_:1},8,["onSubmit"])])])])])]),l(w,{active:a.isLoading,"onUpdate:active":s[5]||(s[5]=o=>a.isLoading=o)},null,8,["active"])])])}const _e=x(N,[["render",ce]]);export{_e as default};