import{_,L as h,m as b,d as f,r as d,o as n,c as l,e as t,f as s,w as i,t as v,F as y,i as k,a as w,g as c}from"./index-3125bab5.js";import{S as x}from"./sweetalert2.all-9d19fef7.js";import{L as p}from"./LoadingStore-93f5495c.js";import{C as S,p as B}from"./CardComponent-12dcd1d0.js";import"./CartStore-c0581342.js";const L={components:{Loading:h,CardComponent:S},data(){return{products:[]}},methods:{...b(p,["toggleLoading"]),getProducts(){this.toggleLoading(),B.getProducts().then(o=>{this.toggleLoading(),o.isSuccess?this.products=o.products:x.fire({title:o.msg,icon:"error"})})}},computed:{...f(p,["isLoading"]),productList(){if(!this.$route.query.category)return this.products;const o=this.products.filter(r=>r.tags.includes(this.$route.query.category));return o.length?o:this.products},productTitle(){return!this.$route.query.category||!["淡斑亮白系列","深層保濕系列","頂級呵護系列","精華水","精華液","精華霜","洗顏乳"].includes(this.$route.query.category)?"全部商品":this.$route.query.category}},mounted(){this.getProducts()}},C={class:"bg-homeSection position-relative"},q={class:"bg-prds bg-white"},F=w('<div class="bg-prdBanner position-relative" style="background-image:url(&#39;https://storage.googleapis.com/vue-course-api.appspot.com/lina-vueapi/1678512915804.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=pnckhrydpMiGCh9s0c1zurOQyVc065g7p780s6vn9KzxeQexCupYBlHVAI12AhvG2jmwAwncUB6iB01ll%2BePDiFSheSvgDagP061T6iIIeexufhBtIu3vG5qwvLN9xnyE1S%2BU7dOtjYDtKSOWuYUCuj9LkMj2lOQkgplcWCsXNj2Qj0m%2Fq6JKIXN4FTqB5j8k8zNlnW2csjYqKatTzGvFenwZdSiPwffe%2FXj9B9YF7A3PE4D%2BH2M8x0IELnhmn8bF5bCY7x69pEaF5i8nmMbFqdv%2BVoEcI0FxoPIIf5n0AQOQd4u0IpWb6S%2BAveEC9tKUeW4dGNOqkEqWPSisa4mYg%3D%3D&#39;);"><div class="banner-cta bg-white-opacity position-absolute"><div class="d-inline-block"><h2 class="font-banner text-primary-dark">保養去</h2></div></div></div><div class="d-none d-lg-block bg-whiteBlock bg-white-opacity position-absolute end-0 bottom-0"></div>',2),I={class:"container bg-white position-relative z-index-3 py-5"},j={class:"row"},P={class:"col-md-3"},E={class:"list-unstyled position-sticky top-0 left-0 w-75"},N={class:"mb-45"},A=t("h3",{class:"fs-5 border-bottom text-primary-dark pb-1 mb-3"}," 全部商品 ",-1),V={class:"mb-45"},z=t("h3",{class:"fs-5 border-bottom text-primary-dark pb-1 mb-3"}," 系列商品 ",-1),D={class:"mb-4"},Y=t("h3",{class:"fs-5 border-bottom text-primary-dark pb-1 mb-3"}," 商品分類 ",-1),$={class:"col-md-9"},G={class:"row gy-4"},O={class:"fs-5 text-primary-dark mb-3"};function Q(o,r,T,W,K,u){const e=d("router-link"),m=d("CardComponent"),g=d("loading");return n(),l("main",null,[t("section",C,[t("div",q,[F,t("div",I,[t("div",j,[t("div",P,[t("ul",E,[t("li",N,[A,s(e,{to:"/productlist"},{default:i(()=>[c("全部商品")]),_:1})]),t("li",V,[z,s(e,{to:"/productlist?category=淡斑亮白系列",class:"d-block mb-3"},{default:i(()=>[c("淡斑亮白系列")]),_:1}),s(e,{to:"/productlist?category=深層保濕系列",class:"d-block mb-3"},{default:i(()=>[c("深層保濕系列")]),_:1}),s(e,{to:"/productlist?category=頂級呵護系列",class:"d-block"},{default:i(()=>[c("頂級呵護系列")]),_:1})]),t("li",D,[Y,s(e,{to:"/productlist?category=精華水",class:"d-block mb-3"},{default:i(()=>[c("精華水")]),_:1}),s(e,{to:"/productlist?category=精華液",class:"d-block mb-3"},{default:i(()=>[c("精華液")]),_:1}),s(e,{to:"/productlist?category=精華霜",class:"d-block mb-3"},{default:i(()=>[c("精華霜")]),_:1}),s(e,{to:"/productlist?category=洗顏乳",class:"d-block"},{default:i(()=>[c("洗顏乳")]),_:1})])])]),t("div",$,[t("div",G,[t("h3",O,v(u.productTitle),1),(n(!0),l(y,null,k(u.productList,a=>(n(),l("div",{class:"col-6 col-md-4 col-lg-3",key:a.id},[s(m,{prd:a},null,8,["prd"])]))),128))])])]),s(g,{active:o.isLoading,"onUpdate:active":r[0]||(r[0]=a=>o.isLoading=a)},null,8,["active"])])])])])}const Z=_(L,[["render",Q]]);export{Z as default};
