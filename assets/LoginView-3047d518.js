import{_ as B,T as C,U as I,x as F,a3 as U,W as $,X as L,Y as n,a2 as M,c as s,Z as a,$ as N,a0 as p,ax as d,J as T,a1 as q,ay as P,az as z}from"./index-4712e515.js";import{u as A,a as _}from"./vee-validate.esm-d7e2001b.js";import{c as D,a as f}from"./index.esm-639fe0e0.js";import{a as J,V as g}from"./VCol-37fbc867.js";import{V as R}from"./VDivider-808ddadf.js";import{V as W}from"./VForm-894b783c.js";const v=r=>(P("data-v-5535e5bf"),r=r(),z(),r),X=v(()=>d("h1",null,"登入",-1)),Y={class:"link"},Z=v(()=>d("a",{href:"#/register"},"還不是會員嗎?",-1)),j={__name:"LoginView",setup(r){const V=C(),m=I(),{api:b}=M(),l=F(!1),h=U(),w=D({account:f().required("帳號為必填欄位").min(4,"使用者帳號長度不符").max(20,"使用者帳號長度不符"),password:f().required("密碼為必填欄位").min(4,"密碼長度不符").max(20,"密碼長度不符")}),{handleSubmit:x,isSubmitting:y}=A({validationSchema:w}),i=_("account"),u=_("password"),S=x(async c=>{var e,o;try{const{data:t}=await b.post("/users/login",{account:c.account,password:c.password});h.login(t.result),m({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),V.push("/")}catch(t){console.log(t);const k=((o=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";m({text:k,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(c,e)=>($(),L(J,null,{default:n(()=>[s(g,{cols:"12"},{default:n(()=>[X,s(R)]),_:1}),s(g,{cols:"12"},{default:n(()=>[s(W,{disabled:a(y),onSubmit:N(a(S),["prevent"])},{default:n(()=>[s(p,{label:"帳號",minlength:"4",maxlength:"20",counter:"","prepend-inner-icon":"mdi-account",modelValue:a(i).value.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a(i).value.value=o),"error-messages":a(i).errorMessage.value},null,8,["modelValue","error-messages"]),s(p,{label:"密碼",type:l.value?"text":"password","append-inner-icon":l.value?"mdi-eye":"mdi-eye-off","onClick:appendInner":e[1]||(e[1]=o=>l.value=!l.value),minlength:"4",maxlength:"20",counter:"","prepend-inner-icon":"mdi-lock",modelValue:a(u).value.value,"onUpdate:modelValue":e[2]||(e[2]=o=>a(u).value.value=o),"error-messages":a(u).errorMessage.value},null,8,["type","append-inner-icon","modelValue","error-messages"]),d("div",Y,[s(T,{type:"submit",color:"green"},{default:n(()=>[q("登入")]),_:1}),Z])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1}))}},ee=B(j,[["__scopeId","data-v-5535e5bf"]]);export{ee as default};
