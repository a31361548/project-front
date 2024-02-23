import{_ as I,U as P,a3 as A,T as N,x,o as C,A as T,W as v,X as $,Y as c,a2 as U,c as n,ax as f,a6 as b,a9 as d,J as p,a1 as V,ay as z,az as E}from"./index-4712e515.js";import{a as J,V as y}from"./VCol-37fbc867.js";import{V as L}from"./VDivider-808ddadf.js";import{V as M}from"./VDataTable-4de18687.js";import"./VList-6d490b48.js";import"./ssrBoot-291bb583.js";import"./VMenu-1a09bab4.js";const R=u=>(z("data-v-464c3ae8"),u=u(),E(),u),W=R(()=>f("h1",null,"購物車",-1)),X=["src"],Y={key:0},j={key:1,class:"text-red text-decoration-line-through"},F={__name:"Drunk4View",setup(u){const{apiAuth:m}=U(),r=P(),_=A(),g=N(),a=x([]),w=[{title:"商品圖片",key:"product.image"},{title:"商品名稱",key:"product.name"},{title:"單價",key:"product.price"},{title:"數量",key:"quantity"},{title:"總價",key:"total",value:e=>e.product.price*e.quantity},{title:"操作",key:"action"}],B=C(()=>a.value.reduce((e,o)=>e+o.quantity*o.product.price,0)),q=C(()=>a.value.length>0&&!a.value.some(e=>!e.product.sell)),h=async(e,o)=>{var t,s;if(!_.isLogin){g.push("/login");return}try{const{data:l}=await m.patch("/users/cart",{product:e,quantity:o});_.cart=l.result,r({text:"修改成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}});const i=a.value.findIndex(D=>D.product._id===e);a.value[i].quantity+=o,a.value[i].quantity<=0&&a.value.splice(i,1)}catch(l){const i=((s=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";r({text:i,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},k=x(!1),S=async()=>{var e,o;k.value=!0;try{await m.post("/orders"),_.cart=0,g.push("/orders"),r({text:"結帳成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(t){const s=((o=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";r({text:s,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"blue",location:"bottom"}})}k.value=!1};return T(async()=>{var e,o;try{const{data:t}=await m.get("/users/cart");a.value.push(...t.result)}catch(t){const s=((o=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";r({text:s,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(e,o)=>(v(),$(J,null,{default:c(()=>[n(y,{cols:"12"},{default:c(()=>[W]),_:1}),n(L),n(y,{cols:"12"},{default:c(()=>[n(M,{items:a.value,headers:w},{"item.product.image":c(({item:t})=>[f("img",{src:t.product.image,height:"50px"},null,8,X)]),"item.product.name":c(({item:t})=>[t.product.sell?(v(),b("span",Y,d(t.product.name),1)):(v(),b("span",j,d(t.product.name)+" (已下架)",1))]),"item.quantity":c(({item:t})=>[n(p,{variant:"text",icon:"mdi-minus",color:"red",onClick:s=>h(t.product._id,-1)},null,8,["onClick"]),V(" "+d(t.quantity)+" ",1),n(p,{variant:"text",icon:"mdi-plus",color:"green",onClick:s=>h(t.product._id,1)},null,8,["onClick"])]),"item.action":c(({item:t})=>[n(p,{variant:"text",icon:"mdi-delete",color:"red",onClick:s=>h(t.product._id,t.quantity*-1)},null,8,["onClick"])]),_:2},1032,["items"])]),_:1}),n(y,{class:"text-center",cols:"12"},{default:c(()=>[f("p",null,"總金額: "+d(B.value),1),n(p,{color:"green",disabled:!q.value,loading:k.value,onClick:S},{default:c(()=>[V("結帳")]),_:1},8,["disabled","loading"])]),_:1})]),_:1}))}},et=I(F,[["__scopeId","data-v-464c3ae8"]]);export{et as default};