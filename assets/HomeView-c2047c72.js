import{_ as J,a3 as L,x as V,o as W,U as Y,a5 as Z,W as g,a6 as _,c as a,Y as l,aa as G,M as w,a2 as K,ab as I,V as O,Z as o,aS as D,a1 as u,a8 as R,$ as Q,aA as X,a9 as x,ac as h,a0 as S,ad as ee,aR as ae,J as z,ay as le,az as te,ax as oe}from"./index-4712e515.js";import{c as se,a as C}from"./index.esm-639fe0e0.js";import{u as ue,a as k}from"./vee-validate.esm-d7e2001b.js";import{a as ne,V as n}from"./VCol-37fbc867.js";import{V as F}from"./VRow-86761ee5.js";import{V as re}from"./VForm-894b783c.js";const de=r=>(le("data-v-83c3e1ec"),r=r(),te(),r),ie=de(()=>oe("h1",{class:"text-center"},"個人資料",-1)),ce={__name:"HomeView",setup(r){const s=L(),d=V(!1),T=[{icon:"mdi-account",text:"帳號"},{icon:"mdi-email",text:"信箱"},{icon:"mdi-cellphone",text:"手機"}],j=W(()=>[{value:s.account},{value:s.email},{value:s.phone}]),{apiAuth:q}=K(),A=Y(),B=V(null),E=()=>{i.value.value=s.account,c.value.value=s.email,m.value.value=s.phone,d.value=!0},M=()=>{d.value=!1,P(),B.value.deleteFileRecord()},H=se({account:C().required("帳號為必填"),email:C().email("信箱格式不正確").required("信箱為必填"),phone:C().required("手機為必填")}),{handleSubmit:N,isSubmitting:y,resetForm:P}=ue({validationSchema:H}),i=k("account"),c=k("email"),m=k("phone"),p=V([]),U=V([]),$=N(async b=>{var t,f;try{const e=new FormData;for(const v in b)e.append(v,b[v]);p.value.length>0&&e.append("image",p.value[0].file),console.log(e),await q.patch("/users/"+s._id,e),A({text:"編輯成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),s.getProfile(),M()}catch(e){console.log(e);const v=((f=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:f.message)||"發生錯誤，請稍後再試";A({text:v,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(b,t)=>{const f=Z("VueFileAgent");return g(),_(w,null,[a(ne,null,{default:l(()=>[a(F,{style:{display:"flex","justify-content":"center"}},{default:l(()=>[a(n,{cols:"12"},{default:l(()=>[ie]),_:1}),a(I,{width:"800px",style:{"padding-left":"30px","padding-top":"15px"}},{default:l(()=>[a(F,null,{default:l(()=>[a(n,{cols:"4"},{default:l(()=>[a(O,{class:"avatar",src:o(s).avatar,style:{height:"150px",width:"150px"}},null,8,["src"])]),_:1}),a(n,{cols:"8",style:{display:"flex","justify-content":"end"}},{default:l(()=>[a(D,{color:"primary",size:"40px",style:{"margin-right":"20px"},onClick:E},{default:l(()=>[u("mdi-pencil")]),_:1})]),_:1})]),_:1}),a(F,null,{default:l(()=>[a(n,{cols:"4"},{default:l(()=>[(g(),_(w,null,R(T,e=>a(h,{key:e.text},{default:l(()=>[a(D,null,{default:l(()=>[u(x(e.icon),1)]),_:2},1024),u(" "+x(e.text),1)]),_:2},1024)),64))]),_:1}),a(n,{cols:"6"},{default:l(()=>[(g(!0),_(w,null,R(j.value,e=>(g(),_("span",{key:e.value},[a(h,null,{default:l(()=>[u(x(e.value),1)]),_:2},1024)]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(G,{modelValue:d.value,"onUpdate:modelValue":t[5]||(t[5]=e=>d.value=e)},{default:l(()=>[a(re,{disabled:o(y),onSubmit:Q(o($),["prevent"])},{default:l(()=>[a(I,null,{default:l(()=>[a(X,null,{default:l(()=>[u(x("編輯個人資料"))]),_:1}),a(h,null,{default:l(()=>[a(S,{label:"帳號",modelValue:o(i).value.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o(i).value.value=e),"error-messages":o(i).errorMessage.value},null,8,["modelValue","error-messages"]),a(S,{label:"信箱",modelValue:o(c).value.value,"onUpdate:modelValue":t[1]||(t[1]=e=>o(c).value.value=e),"error-messages":o(c).errorMessage.value},null,8,["modelValue","error-messages"]),a(S,{label:"手機",modelValue:o(m).value.value,"onUpdate:modelValue":t[2]||(t[2]=e=>o(m).value.value=e),"error-messages":o(m).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),a(f,{modelValue:p.value,"onUpdate:modelValue":t[3]||(t[3]=e=>p.value=e),"raw-model-value":U.value,"onUpdate:rawModelValue":t[4]||(t[4]=e=>U.value=e),accept:"image/jpg,image/png",deletable:"","error-text":{type:"檔案格式不支援",size:"檔案超過 1MB 大小限制"},"help-text":"選擇檔案或拖曳到這裡","max-files":1,"max-size":"1MB",ref_key:"fileAgent",ref:B},null,8,["modelValue","raw-model-value"]),a(ee,null,{default:l(()=>[a(ae),a(z,{color:"secondary",rounded:"",disabled:o(y),onClick:M},{default:l(()=>[u("取消")]),_:1},8,["disabled"]),a(z,{color:"primary",rounded:"",type:"submit",loading:o(y)},{default:l(()=>[u("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}},_e=J(ce,[["__scopeId","data-v-83c3e1ec"]]);export{_e as default};
