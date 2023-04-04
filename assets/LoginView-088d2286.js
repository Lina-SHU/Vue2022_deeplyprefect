import{S as p}from"./sweetalert2.all-1dda703d.js";import{_,r as i,o as f,c as h,e as s,f as o,w as V,H as c}from"./index-f37b75d8.js";const{VITE_URL:v}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"lina-vueapi",BASE_URL:"/Vue2022_deeplyprefect/",MODE:"production",DEV:!1,PROD:!0},b={data(){return{user:{}}},methods:{login(){const l=`${v}admin/signin`;this.$http.post(l,this.user).then(e=>{document.cookie=`PToken=${e.data.token}; expires=${new Date(e.data.expired)}; path=/`,this.$router.push("/admin/products")}).catch(e=>{p.fire({title:e.response.data.message,icon:"error"})})}}},g={class:"container py-5"},w={class:"row justify-content-center"},k={class:"col-md-6 col-lg-4"},x=s("h2",{class:"fs-4 mb-3"},"後台管理平台",-1),y={class:"form-floating mb-3"},E=s("label",{for:"email"},"帳號",-1),S={class:"form-floating mb-3"},T=s("label",{for:"password"},"密碼",-1),U=s("div",{class:"d-grid gap-2"},[s("button",{class:"btn btn-primary",type:"submit"},"登入")],-1);function B(l,e,D,F,t,m){const n=i("VField"),r=i("error-message"),u=i("VForm");return f(),h("div",g,[s("div",w,[s("div",k,[x,o(u,{onSubmit:m.login},{default:V(({errors:d})=>[s("div",y,[o(n,{type:"email",class:c(["form-control",{"is-invalid":d.email}]),id:"email",placeholder:"請輸入帳號",modelValue:t.user.username,"onUpdate:modelValue":e[0]||(e[0]=a=>t.user.username=a),modelModifiers:{trim:!0},name:"email",rules:"email|required"},null,8,["modelValue","class"]),E,o(r,{name:"email",class:"invalid-feedback"})]),s("div",S,[o(n,{type:"password",class:c(["form-control",{"is-invalid":d.密碼}]),id:"password",placeholder:"請輸入密碼",modelValue:t.user.password,"onUpdate:modelValue":e[1]||(e[1]=a=>t.user.password=a),rules:"required",name:"密碼"},null,8,["modelValue","class"]),T,o(r,{name:"密碼",class:"invalid-feedback"})]),U]),_:1},8,["onSubmit"])])])])}const $=_(b,[["render",B]]);export{$ as default};
