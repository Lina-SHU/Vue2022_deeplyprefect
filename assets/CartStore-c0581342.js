import{k as g,l as r}from"./index-3125bab5.js";import{S as a}from"./sweetalert2.all-9d19fef7.js";import{L as i}from"./LoadingStore-93f5495c.js";const{VITE_URL:n,VITE_PATH:c}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"lina-vueapi",BASE_URL:"/Vue2022_week6/",MODE:"production",DEV:!1,PROD:!0},m=g("CartStore",{state:()=>({carts:[]}),getters:{cartNum:({carts:t})=>{var e;return((e=t.carts)==null?void 0:e.length)||0}},actions:{addToCart(t,e=1){const o=i(),s={product_id:t,qty:e},l=`${n}api/${c}/cart`;o.toggleDisabled(),r.post(l,{data:s}).then(()=>{o.toggleDisabled(),this.getCart(),a.fire({toast:!0,title:"已將商品加入到購物車！",icon:"success",timer:2e3,position:"top-end",showConfirmButton:!1})}).catch(d=>{a.fire({title:d.response.data.message,icon:"error"})})},getCart(){const t=i(),e=`${n}api/${c}/cart`;t.toggleDisabled(),r.get(e).then(o=>{t.toggleDisabled(),this.carts=o.data.data}).catch(o=>{a.fire({title:o.response.data.message,icon:"error"})})},changeCartItem(t){const e=i(),o=`${n}api/${c}/cart/${t.id}`;e.toggleDisabled(),r.put(o,{data:{product_id:t.product_id,qty:t.qty}}).then(()=>{e.toggleDisabled(),this.getCart()}).catch(s=>{a.fire({title:s.response.data.message,icon:"error"})})},deleteCartItem(t){const e=i(),o=`${n}api/${c}/cart/${t}`;e.toggleDisabled(),r.delete(o).then(()=>{e.toggleDisabled(),this.getCart(),a.fire({toast:!0,title:"已刪除！",icon:"success",timer:2e3,position:"top-end",showConfirmButton:!1})}).catch(s=>{a.fire({title:s.response.data.message,icon:"error"})})}}});export{m as C};