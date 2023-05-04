import{S as a}from"./sweetalert2.all-ba6c674c.js";import{M as y,p as $}from"./modal-56572188.js";import{_ as w,r as h,o as f,c as b,e,t as r,f as i,w as D,n as _,j as k,M as E,F as T,i as x}from"./index-2ee99502.js";import"./component-functions-3fbf66c8.js";const{VITE_URL:C,VITE_PATH:v}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"lina-vueapi",BASE_URL:"/Vue2022_deeplyprefect/",MODE:"production",DEV:!1,PROD:!0},P={props:["tempCoupon"],data(){return{editMsg:"",temp:{},date:""}},methods:{openModal(){this.editMsg.show()},closeModal(){this.editMsg.hide()},editCoupon(){if(this.temp.percent>100){a.fire({title:"優惠券折扣不得大於 100 ！",icon:"warning"});return}if(this.temp.percent<0){a.fire({title:"優惠券折扣不得小於 0 ！",icon:"warning"});return}if(new Date(this.date)<new Date){a.fire({title:"到期日需大於今日",icon:"warning"});return}let s=`${C}api/${v}/admin/coupon/${this.temp.id}`,t="put";this.temp.id||(s=`${C}api/${v}/admin/coupon`,t="post"),this.temp.due_date=Math.floor(new Date(this.date)/1e3),this.$http[t](s,{data:this.temp}).then(()=>{this.$emit("getCoupons"),this.closeModal(),this.temp.id?a.fire({toast:!0,title:"編輯優惠券成功！",icon:"success",timer:2e3,position:"top-end",showConfirmButton:!1}):a.fire({toast:!0,title:"新增優惠券成功！",icon:"success",timer:2e3,position:"top-end",showConfirmButton:!1}),this.temp={}}).catch(l=>{a.fire({title:l.response.data.message,icon:"error"})})}},watch:{tempCoupon(){this.temp={...this.tempCoupon},this.temp.is_enabled=this.temp.is_enabled||0,this.temp.due_date?this.date=`${new Date(this.temp.due_date*1e3).getFullYear()}-${("0"+(new Date(this.temp.due_date*1e3).getMonth()+1)).slice(-2)}-${("0"+new Date(this.temp.due_date*1e3).getDate()).slice(-2)}`:this.date=""}},mounted(){this.editMsg=new y(this.$refs.editCouponModal)}},L={class:"modal",ref:"editCouponModal"},U={class:"modal-dialog modal-dialog-centered"},B={class:"modal-content"},I={class:"modal-header"},R={class:"modal-title fs-5"},A=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),S={class:"modal-body"},F={class:"mb-3"},H=e("label",{for:"couponName",class:"form-label"},"名稱",-1),O={class:"mb-3"},q=e("label",{for:"couponCode",class:"form-label"},"代碼",-1),G={class:"mb-3"},N=e("label",{for:"couponDiscount",class:"form-label"},"折扣數",-1),j={class:"mb-3"},z=e("label",{for:"couponDate",class:"form-label"},"到期日",-1),Y={class:"mb-3"},J={class:"form-check"},K=e("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Q={class:"text-end"},W=e("button",{type:"button",class:"btn btn-outline-primary-dark","data-bs-dismiss":"modal"}," 取消 ",-1),X={type:"submit",class:"btn btn-primary-dark ms-3"};function Z(s,t,l,g,o,c){const u=h("VField"),p=h("ErrorMessage"),n=h("VForm");return f(),b("div",L,[e("div",U,[e("div",B,[e("div",I,[e("h2",R,r(o.temp.id?"編輯":"新增")+"優惠券 ",1),A]),e("div",S,[i(n,{onSubmit:c.editCoupon},{default:D(({errors:m})=>[e("div",F,[H,i(u,{type:"text",class:_(["form-control",{"is-invalid":m.名稱}]),id:"couponName",modelValue:o.temp.title,"onUpdate:modelValue":t[0]||(t[0]=d=>o.temp.title=d),name:"名稱",rules:"required"},null,8,["modelValue","class"]),i(p,{name:"名稱",class:"invalid-feedback"})]),e("div",O,[q,i(u,{type:"text",class:_(["form-control",{"is-invalid":m.代碼}]),id:"couponCode",modelValue:o.temp.code,"onUpdate:modelValue":t[1]||(t[1]=d=>o.temp.code=d),modelModifiers:{trim:!0},name:"代碼",rules:"required"},null,8,["modelValue","class"]),i(p,{name:"代碼",class:"invalid-feedback"})]),e("div",G,[N,i(u,{type:"number",class:_(["form-control",{"is-invalid":m.折扣數}]),id:"couponDiscount",modelValue:o.temp.percent,"onUpdate:modelValue":t[2]||(t[2]=d=>o.temp.percent=d),modelModifiers:{number:!0},max:"100",name:"折扣數",rules:"required"},null,8,["modelValue","class"]),i(p,{name:"折扣數",class:"invalid-feedback"})]),e("div",j,[z,i(u,{type:"date",class:_(["form-control",{"is-invalid":m.到期日}]),id:"couponDate",modelValue:o.date,"onUpdate:modelValue":t[3]||(t[3]=d=>o.date=d),name:"到期日",rules:"required"},null,8,["modelValue","class"]),i(p,{name:"到期日",class:"invalid-feedback"})]),e("div",Y,[e("div",J,[k(e("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=d=>o.temp.is_enabled=d),name:"是否啟用"},null,512),[[E,o.temp.is_enabled]]),K])]),e("div",Q,[W,e("button",X,r(o.temp.id?"編輯":"新增"),1)])]),_:1},8,["onSubmit"])])])])],512)}const ee=w(P,[["render",Z]]),{VITE_URL:V,VITE_PATH:M}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"lina-vueapi",BASE_URL:"/Vue2022_deeplyprefect/",MODE:"production",DEV:!1,PROD:!0},te={components:{pagination:$,editModal:ee},data(){return{couponList:[],pages:{},tempCoupon:{},currentPage:1}},methods:{getCurrentPage(s){this.currentPage=s,this.getOrders(this.currentPage)},getCoupons(s=1){const t=`${V}api/${M}/admin/coupons?page=${s}`;this.$http.get(t).then(l=>{this.couponList=l.data.coupons,this.pages=l.data.pagination}).catch(l=>{a.fire({title:l.response.data.message,icon:"error"})})},deleteCoupon(s){const t=`${V}api/${M}/admin/coupon/${s}`;a.fire({title:"確認是否刪除此優惠券？",showCancelButton:!0,confirmButtonText:"刪除",cancelButtonText:"取消"}).then(l=>{l.isConfirmed&&this.$http.delete(t).then(()=>{this.getCoupons(),a.fire({toast:!0,title:"已刪除優惠券",icon:"success",timer:2e3,showConfirmButton:!1})}).catch(g=>{a.fire({title:g.response.data.message,icon:"error"})})})},openModal(s,t){s==="edit"?this.tempCoupon={...t}:s==="new"&&(this.tempCoupon={}),this.$refs.editMsg.openModal()}},mounted(){this.getCoupons()}},oe={class:"container py-5"},se={class:"row justify-content-center"},ne={class:"col-lg-10"},ie=e("h1",{class:"fs-5 mb-3"},"優惠券管理",-1),le={class:"text-end"},ae={class:"table"},de=e("thead",null,[e("tr",null,[e("th",null,"優惠券名稱"),e("th",null,"優惠券代碼"),e("th",null,"折扣數"),e("th",null,"到期日"),e("th",null,"是否啟用"),e("th")])],-1),ce=["onClick"],re=["onClick"];function ue(s,t,l,g,o,c){const u=h("pagination"),p=h("editModal");return f(),b("div",oe,[e("div",se,[e("div",ne,[ie,e("div",le,[e("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=n=>c.openModal("new"))}," 建立新的優惠券 ")]),e("table",ae,[de,e("tbody",null,[(f(!0),b(T,null,x(o.couponList,n=>(f(),b("tr",{key:n.id},[e("td",null,r(n.title),1),e("td",null,r(n.code),1),e("td",null,r(n.percent),1),e("td",null,r(new Date(n.due_date*1e3).toLocaleDateString()),1),e("td",null,r(n.is_enabled?"是":"否"),1),e("td",null,[e("button",{type:"button",class:"btn btn-sm btn-primary",onClick:m=>c.openModal("edit",n)}," 編輯 ",8,ce),e("button",{type:"button",class:"btn btn-sm btn-outline-danger ms-1",onClick:m=>c.deleteCoupon(n.id)}," 刪除 ",8,re)])]))),128))])]),i(u,{class:"mt-2",pages:o.pages,onGetCurrentPage:c.getCurrentPage},null,8,["pages","onGetCurrentPage"])])]),i(p,{ref:"editMsg","temp-coupon":o.tempCoupon,onGetCoupons:c.getCoupons},null,8,["temp-coupon","onGetCoupons"])])}const fe=w(te,[["render",ue]]);export{fe as default};