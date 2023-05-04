import{A as V}from"./aos-c913855d.js";import{O as _}from"./order-service-e39a59ce.js";import{P as g}from"./product-service-dca78bf1.js";import{_ as k,L as S,m as f,d as C,r as u,o as v,c as h,e,F as L,i as P,f as i,w as F,a as j,n as r,t as B,j as I,J as N,g as d}from"./index-2ee99502.js";import{C as A}from"./CartStore-4c27cb9f.js";import{L as y}from"./LoadingStore-7777a312.js";import"./sweetalert2.all-ba6c674c.js";const E={components:{Loading:S},data(){return{user:{},message:"",trials:[]}},methods:{...f(A,["getCart","addToCart","deleteAllItems"]),...f(y,["toggleLoading"]),async getTrial(){const l=await g.getProduct("-NPr0DGfmGC2-OvbmvL_");this.trials.push(l.product);const s=await g.getProduct("-NPr0srldDbrv_E_44ml");this.trials.push(s.product);const n=await g.getProduct("-NPrQX1CCPfvFKMpWv_O");this.trials.push(n.product)},isPhone(l){return/^(09)[0-9]{8}$/.test(l)?!0:"請輸入 09 開頭的 10 位電話號碼"},async onSubmit(l,{resetForm:s}){const n={user:{...this.user},message:this.message};await this.deleteAllItems(),await this.addToCart("-NQjv0kHAdgP4A0b1Hag"),this.toggleLoading();const p=await _.orderSubmit(n);await _.payOrder(p.order.orderId),this.toggleLoading(),s(),this.message="",this.getCart(),this.$router.push(`/orderConfirm/${p.order.orderId}`)}},computed:{...C(y,["isLoading","isDisabled"])},mounted(){this.getTrial(),V.init({})}},M={class:"bg-homeSection position-relative"},O={class:"bg-prds bg-secondary-light2"},T=e("div",{class:"bg-prdBanner position-relative",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1678512915804.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pnckhrydpMiGCh9s0c1zurOQyVc065g7p780s6vn9KzxeQexCupYBlHVAI12AhvG2jmwAwncUB6iB01ll%2BePDiFSheSvgDagP061T6iIIeexufhBtIu3vG5qwvLN9xnyE1S%2BU7dOtjYDtKSOWuYUCuj9LkMj2lOQkgplcWCsXNj2Qj0m%2Fq6JKIXN4FTqB5j8k8zNlnW2csjYqKatTzGvFenwZdSiPwffe%2FXj9B9YF7A3PE4D%2BH2M8x0IELnhmn8bF5bCY7x69pEaF5i8nmMbFqdv%2BVoEcI0FxoPIIf5n0AQOQd4u0IpWb6S%2BAveEC9tKUeW4dGNOqkEqWPSisa4mYg%3D%3D')"}},[e("div",{class:"banner-cta bg-white-opacity position-absolute"},[e("div",{class:"d-inline-block"},[e("h2",{class:"font-banner text-primary-dark"},"立即體驗")])])],-1),D={class:"container pt-3 pb-5 pt-md-5 py-lg-8"},U={class:"row justify-content-center mb-3 mb-lg-5"},q={class:"col-lg-9"},G={class:"list-unstyled"},Q={class:"w-lg-35 text-center"},z={class:"bg-shadow h-100"},W=["src","alt"],Y={class:"w-lg-65 d-flex align-items-center bg-shadow"},H={class:"p-3 p-lg-4 h-100 d-flex align-items-center bg-white-opacity"},K={class:"p-3"},X={class:"h4 text-primary-dark fw-normal mb-2"},J=["innerHTML"],Z={class:"row justify-content-center"},R={class:"col-lg-6"},$=j('<div class="card rounded-0 border-0 mb-5"><div class="card-header rounded-0 fs-4 bg-primary text-center text-primary-dark fw-normal py-2 py-lg-3"> 試用包內容物 </div><div class="card-body"><ul class="mb-0"><li>淡斑亮白精華 3m * 1瓶</li><li>深層保濕精華 3m * 1瓶</li><li>抗皺撫紋精華 3m * 1瓶</li></ul></div></div><div class="card rounded-0 border-0 mb-5"><div class="card-header rounded-0 text-center fs-4 bg-primary text-primary-dark fw-normal py-2 py-lg-3"> 申請試用包說明 </div><div class="card-body"><ul class="mb-0"><li>酌收物流費 99 元。</li><li>申請後 3 日內送達。</li><li>每人限申請一組試用包。</li></ul></div></div>',2),ee=e("h2",{class:"text-center fs-4 fw-normal border border-primary text-primary-dark bg-primary py-2 py-lg-3 mb-4"}," 申請試用包資料填寫 ",-1),se={class:"mb-3"},te=e("div",{class:"text-end"},[e("span",{class:"text-danger"},"*"),d("為必填 ")],-1),ae=e("label",{for:"name"},[d(" 姓名"),e("span",{class:"text-danger"},"*")],-1),oe={class:"mb-3"},ie=e("label",{for:"email"},[d(" Email"),e("span",{class:"text-danger"},"*")],-1),le={class:"mb-3"},re=e("label",{for:"tel"},[d(" 電話"),e("span",{class:"text-danger"},"*")],-1),de={class:"mb-3"},ne=e("label",{for:"address"},[d(" 地址"),e("span",{class:"text-danger"},"*")],-1),ce={class:"mb-3"},me=e("label",{for:"message",class:"form-label"},"留言",-1),ue=e("button",{type:"submit",class:"btn btn-primary-dark w-100"}," 馬上體驗！ ",-1);function pe(l,s,n,p,o,b){const c=u("VField"),m=u("ErrorMessage"),w=u("VForm"),x=u("Loading");return v(),h("main",null,[e("section",M,[e("div",O,[T,e("div",D,[e("div",U,[e("div",q,[e("ul",G,[(v(!0),h(L,null,P(o.trials,(t,a)=>(v(),h("li",{"data-aos":"fade-down",class:"mb-4",key:t},[e("div",{class:r(["d-lg-flex w-lg-65 bg-secondary-light p-3",{"flex-lg-row-reverse":a%2===0,"ms-auto":a%2===0}])},[e("div",Q,[e("div",z,[e("img",{class:"img-fluid object-cover w-100 h-100",src:t.imageUrl,alt:t.title},null,8,W)])]),e("div",Y,[e("div",H,[e("div",K,[e("h2",X,B(t.title),1),e("p",{class:"mb-3",innerHTML:t.content},null,8,J)])])])],2)]))),128))])])]),e("div",Z,[e("div",R,[$,e("div",null,[ee,i(w,{onSubmit:b.onSubmit},{default:F(({errors:t})=>[e("div",se,[te,ae,i(c,{id:"name",name:"姓名",type:"text",class:r(["form-control",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.user.name,"onUpdate:modelValue":s[0]||(s[0]=a=>o.user.name=a),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),i(m,{name:"姓名",class:"invalid-feedback"})]),e("div",oe,[ie,i(c,{id:"email",name:"email",type:"email",class:r(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.user.email,"onUpdate:modelValue":s[1]||(s[1]=a=>o.user.email=a)},null,8,["class","modelValue"]),i(m,{name:"email",class:"invalid-feedback"})]),e("div",le,[re,i(c,{id:"tel",name:"電話",type:"tel",class:r(["form-control",{"is-invalid":t.電話}]),placeholder:"請輸入電話",rules:b.isPhone,modelValue:o.user.tel,"onUpdate:modelValue":s[2]||(s[2]=a=>o.user.tel=a),modelModifiers:{trim:!0}},null,8,["class","rules","modelValue"]),i(m,{name:"電話",class:"invalid-feedback"})]),e("div",de,[ne,i(c,{id:"address",name:"地址",type:"text",class:r(["form-control",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.user.address,"onUpdate:modelValue":s[3]||(s[3]=a=>o.user.address=a),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),i(m,{name:"地址",class:"invalid-feedback"})]),e("div",ce,[me,I(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"5","onUpdate:modelValue":s[4]||(s[4]=a=>o.message=a)},null,512),[[N,o.message]])]),ue]),_:1},8,["onSubmit"])])])])])]),i(x,{active:l.isLoading,"onUpdate:active":s[5]||(s[5]=t=>l.isLoading=t)},null,8,["active"])])])}const we=k(E,[["render",pe]]);export{we as default};
