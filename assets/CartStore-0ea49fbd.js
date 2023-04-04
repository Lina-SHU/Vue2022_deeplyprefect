import{l as d,n as s}from"./index-f37b75d8.js";import{S as r}from"./sweetalert2.all-1dda703d.js";import{L as n}from"./LoadingStore-f942c9f6.js";const{VITE_URL:i,VITE_PATH:c}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"lina-vueapi",BASE_URL:"/Vue2022_deeplyprefect/",MODE:"production",DEV:!1,PROD:!0},h=d("CartStore",{state:()=>({carts:[]}),getters:{cartNum:({carts:t})=>{var e;return((e=t.carts)==null?void 0:e.length)||0}},actions:{async addToCart(t,e=1){try{const a=n(),o={product_id:t,qty:e},l=`${i}api/${c}/cart`;a.toggleDisabled(),await s.post(l,{data:o}),a.toggleDisabled(),this.getCart(),t!=="-NQjv0kHAdgP4A0b1Hag"&&r.fire({toast:!0,title:"已將商品加入到購物車！",icon:"success",timer:2e3,position:"top-end",showConfirmButton:!1})}catch(a){r.fire({title:a.response.data.message,icon:"error"})}},getCart(){const t=n(),e=`${i}api/${c}/cart`;t.toggleDisabled(),s.get(e).then(a=>{t.toggleDisabled(),this.carts=a.data.data}).catch(a=>{r.fire({title:a.response.data.message,icon:"error"})})},changeCartItem(t){const e=n(),a=`${i}api/${c}/cart/${t.id}`;e.toggleDisabled(),s.put(a,{data:{product_id:t.product_id,qty:t.qty}}).then(()=>{e.toggleDisabled(),this.getCart()}).catch(o=>{r.fire({title:o.response.data.message,icon:"error"})})},deleteCartItem(t){const e=n(),a=`${i}api/${c}/cart/${t}`;e.toggleDisabled(),s.delete(a).then(()=>{e.toggleDisabled(),this.getCart(),r.fire({toast:!0,title:"已刪除！",icon:"success",timer:2e3,position:"top-end",showConfirmButton:!1})}).catch(o=>{r.fire({title:o.response.data.message,icon:"error"})})},async deleteAllItems(){try{const t=`${i}api/${c}/carts`;await s.delete(t),this.getCart();return}catch{return}}}});export{h as C};
