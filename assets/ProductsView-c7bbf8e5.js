import{p as se,aE as ne,K as Ve,g as re,D as ue,aF as ie,aG as pe,o as O,u as ce,aH as de,aI as J,c as t,G as q,aJ as xe,aK as be,x as v,s as ye,H as ke,A as he,z,B as we,aL as Ce,aM as Pe,M as j,an as te,ao as Fe,aN as Be,aO as Se,N as Ie,aw as W,aP as Ae,v as Ue,y as Me,U as Re,a5 as De,W as le,a6 as Ne,Y as i,aa as Te,a2 as $e,J as E,a1 as L,a0 as X,aQ as He,V as _e,X as ze,a7 as Ee,Z as c,$ as Ge,ab as Oe,aA as qe,a9 as Ke,ac as Le,ad as je,aR as Je,ax as Qe,aS as We}from"./index-4712e515.js";import{c as Xe,a as Y,d as Ye,e as Ze}from"./index.esm-639fe0e0.js";import{u as ea,a as G}from"./vee-validate.esm-d7e2001b.js";import{a as aa,V as Z}from"./VCol-37fbc867.js";import{V as ta}from"./VRow-86761ee5.js";import{V as la}from"./VDivider-808ddadf.js";import{V as oa}from"./VDataTableServer-0e469776.js";import{V as sa}from"./VForm-894b783c.js";import{m as na,a as oe,b as ra}from"./VDataTable-4de18687.js";import"./VList-6d490b48.js";import"./ssrBoot-291bb583.js";import"./VMenu-1a09bab4.js";const ua=se({...ne(),...Ve(na(),["inline"])},"VCheckbox"),ia=re()({name:"VCheckbox",inheritAttrs:!1,props:ua(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,B){let{attrs:V,slots:S}=B;const d=ue(e,"modelValue"),{isFocused:r,focus:b,blur:N}=ie(e),$=pe(),T=O(()=>e.id||`checkbox-${$}`);return ce(()=>{const[H,_]=de(V),I=J.filterProps(e),A=oe.filterProps(e);return t(J,q({class:["v-checkbox",e.class]},H,I,{modelValue:d.value,"onUpdate:modelValue":p=>d.value=p,id:T.value,focused:r.value,style:e.style}),{...S,default:p=>{let{id:x,messagesId:U,isDisabled:y,isReadonly:M}=p;return t(oe,q(A,{id:x.value,"aria-describedby":U.value,disabled:y.value,readonly:M.value},_,{modelValue:d.value,"onUpdate:modelValue":k=>d.value=k,onFocus:b,onBlur:N}),S)}})}),{}}});const ca=se({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ne(),...xe()},"VTextarea"),da=re()({name:"VTextarea",directives:{Intersect:be},inheritAttrs:!1,props:ca(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,B){let{attrs:V,emit:S,slots:d}=B;const r=ue(e,"modelValue"),{isFocused:b,focus:N,blur:$}=ie(e),T=O(()=>typeof e.counterValue=="function"?e.counterValue(r.value):(r.value||"").toString().length),H=O(()=>{if(V.maxlength)return V.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function _(o,g){var m,f;!e.autofocus||!o||(f=(m=g[0].target)==null?void 0:m.focus)==null||f.call(m)}const I=v(),A=v(),p=ye(""),x=v(),U=O(()=>e.persistentPlaceholder||b.value||e.active);function y(){var o;x.value!==document.activeElement&&((o=x.value)==null||o.focus()),b.value||N()}function M(o){y(),S("click:control",o)}function k(o){S("mousedown:control",o)}function K(o){o.stopPropagation(),y(),W(()=>{r.value="",Ae(e["onClick:clear"],o)})}function Q(o){var m;const g=o.target;if(r.value=g.value,(m=e.modelModifiers)!=null&&m.trim){const f=[g.selectionStart,g.selectionEnd];W(()=>{g.selectionStart=f[0],g.selectionEnd=f[1]})}}const h=v(),P=v(+e.rows),R=O(()=>["plain","underlined"].includes(e.variant));ke(()=>{e.autoGrow||(P.value=+e.rows)});function w(){e.autoGrow&&W(()=>{if(!h.value||!A.value)return;const o=getComputedStyle(h.value),g=getComputedStyle(A.value.$el),m=parseFloat(o.getPropertyValue("--v-field-padding-top"))+parseFloat(o.getPropertyValue("--v-input-padding-top"))+parseFloat(o.getPropertyValue("--v-field-padding-bottom")),f=h.value.scrollHeight,D=parseFloat(o.lineHeight),n=Math.max(parseFloat(e.rows)*D+m,parseFloat(g.getPropertyValue("--v-input-control-height"))),l=parseFloat(e.maxRows)*D+m||1/0,u=Me(f??0,n,l);P.value=Math.floor((u-m)/D),p.value=Ue(u)})}he(w),z(r,w),z(()=>e.rows,w),z(()=>e.maxRows,w),z(()=>e.density,w);let C;return z(h,o=>{o?(C=new ResizeObserver(w),C.observe(h.value)):C==null||C.disconnect()}),we(()=>{C==null||C.disconnect()}),ce(()=>{const o=!!(d.counter||e.counter||e.counterValue),g=!!(o||d.details),[m,f]=de(V),{modelValue:D,...n}=J.filterProps(e),l=Ce(e);return t(J,q({ref:I,modelValue:r.value,"onUpdate:modelValue":u=>r.value=u,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":R.value},e.class],style:e.style},m,n,{centerAffix:P.value===1&&!R.value,focused:b.value}),{...d,default:u=>{let{id:a,isDisabled:s,isDirty:F,isReadonly:me,isValid:ve}=u;return t(Pe,q({ref:A,style:{"--v-textarea-control-height":p.value},onClick:M,onMousedown:k,"onClick:clear":K,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},l,{id:a.value,active:U.value||F.value,centerAffix:P.value===1&&!R.value,dirty:F.value||e.dirty,disabled:s.value,focused:b.value,error:ve.value===!1}),{...d,default:fe=>{let{props:{class:ee,...ae}}=fe;return t(j,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),te(t("textarea",q({ref:x,class:ee,value:r.value,onInput:Q,autofocus:e.autofocus,readonly:me.value,disabled:s.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:y,onBlur:$},ae,f),null),[[Fe("intersect"),{handler:_},null,{once:!0}]]),e.autoGrow&&te(t("textarea",{class:[ee,"v-textarea__sizer"],id:`${ae.id}-sizer`,"onUpdate:modelValue":ge=>r.value=ge,ref:h,readonly:!0,"aria-hidden":"true"},null),[[Be,r.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:g?u=>{var a;return t(j,null,[(a=d.details)==null?void 0:a.call(d,u),o&&t(j,null,[t("span",null,null),t(Se,{active:e.persistentCounter||b.value,value:T.value,max:H.value},d.counter)])])}:void 0})}),Ie({},I,A,x)}}),ma=Qe("h1",{class:"text-center"},"商品管理",-1),Pa={__name:"ProductsView",setup(e){const{apiAuth:B}=$e(),V=Re(),S=v(null),d=v(!1),r=v(""),b=n=>{n?(r.value=n._id,p.value.value=n.name,x.value.value=n.price,U.value.value=n.description,y.value.value=n.category,M.value.value=n.sell,console.log(r.value)):r.value="",d.value=!0},N=()=>{d.value=!1,A(),S.value.deleteFileRecord()},$=async n=>{var l,u;try{await B.delete("/products/"+n._id),V({text:"刪除成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),f()}catch(a){console.log(a);const s=((u=(l=a==null?void 0:a.response)==null?void 0:l.data)==null?void 0:u.message)||"發生錯誤，請稍後再試";V({text:s,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},T=["食品","衣服","3C","遊戲"],H=Xe({name:Y().required("缺少商品名稱"),price:Ye().typeError("商品價格格式錯誤").required("缺少商品價格").min(0,"商品價格不能小於 0"),description:Y().required("缺少商品說明"),category:Y().required("缺少商品分類").test("isCategory","商品分類錯誤",n=>T.includes(n)),sell:Ze()}),{handleSubmit:_,isSubmitting:I,resetForm:A}=ea({validationSchema:H,initialValues:{name:"",price:0,description:"",category:"",sell:!1}}),p=G("name"),x=G("price"),U=G("description"),y=G("category"),M=G("sell"),k=v([]),K=v([]),Q=_(async n=>{var l,u,a;if(!((l=k.value[0])!=null&&l.error)&&!(r.value===""&&k.value.length===0))try{const s=new FormData;for(const F in n)s.append(F,n[F]);k.value.length>0&&s.append("image",k.value[0].file),r.value===""?await B.post("/products",s):await B.patch("/products/"+r.value,s),V({text:r.value===""?"新增成功":"編輯成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),N(),D()}catch(s){console.log(s);const F=((a=(u=s==null?void 0:s.response)==null?void 0:u.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";V({text:F,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),h=v(10),P=v([{key:"createdAt",order:"desc"}]),R=v(1),w=v([]),C=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"價格",align:"center",sortable:!0,key:"price"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"編輯",align:"center",sortable:!1,key:"edit"},{title:"刪除",align:"center",sortable:!1,key:"delete"}],o=v(!0),g=v(0),m=v(""),f=async()=>{var n,l,u,a;o.value=!0;try{const{data:s}=await B.get("/products/all",{params:{page:R.value,itemsPerPage:h.value,sortBy:((n=P.value[0])==null?void 0:n.key)||"createdAt",sortOrder:((l=P.value[0])==null?void 0:l.order)==="asc"?1:-1,search:m.value}});w.value.splice(0,w.value.length,...s.result.data),g.value=s.result.total}catch(s){console.log(s);const F=((a=(u=s==null?void 0:s.response)==null?void 0:u.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";V({text:F,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}o.value=!1};f();const D=()=>{R.value=1,f()};return(n,l)=>{const u=De("VueFileAgent");return le(),Ne(j,null,[t(aa,null,{default:i(()=>[t(ta,null,{default:i(()=>[t(Z,{cols:"12"},{default:i(()=>[ma]),_:1}),t(la),t(Z,{cols:"12"},{default:i(()=>[t(E,{color:"green",onClick:l[0]||(l[0]=a=>b())},{default:i(()=>[L(" 新增商品 ")]),_:1})]),_:1}),t(Z,{cols:"12"},{default:i(()=>[t(oa,{"items-per-page":h.value,"onUpdate:itemsPerPage":[l[2]||(l[2]=a=>h.value=a),f],"sort-by":P.value,"onUpdate:sortBy":[l[3]||(l[3]=a=>P.value=a),f],page:R.value,"onUpdate:page":[l[4]||(l[4]=a=>R.value=a),f],items:w.value,headers:C,loading:o.value,"items-length":g.value,search:m.value,hover:""},{top:i(()=>[t(X,{label:"搜尋","append-icon":"mdi-magnify",modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=a=>m.value=a),"onClick:append":D,onKeydown:He(D,["enter"])},null,8,["modelValue"])]),"item.image":i(({item:a})=>[t(_e,{src:a.image},null,8,["src"])]),"item.sell":i(({item:a})=>[a.sell?(le(),ze(We,{key:0,icon:"mdi-check"})):Ee("",!0)]),"item.edit":i(({item:a})=>[t(E,{icon:"mdi-pencil",variant:"text",color:"blue",onClick:s=>b(a)},null,8,["onClick"])]),"item.delete":i(({item:a})=>[t(E,{icon:"mdi-delete",variant:"text",color:"red",onClick:s=>$(a)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),t(Te,{modelValue:d.value,"onUpdate:modelValue":l[12]||(l[12]=a=>d.value=a),persistent:"",width:"500px"},{default:i(()=>[t(sa,{disabled:c(I),onSubmit:Ge(c(Q),["prevent"])},{default:i(()=>[t(Oe,null,{default:i(()=>[t(qe,null,{default:i(()=>[L(Ke(r.value===""?"新增商品":"編輯商品"),1)]),_:1}),t(Le,null,{default:i(()=>[t(X,{label:"名稱",modelValue:c(p).value.value,"onUpdate:modelValue":l[5]||(l[5]=a=>c(p).value.value=a),"error-messages":c(p).errorMessage.value},null,8,["modelValue","error-messages"]),t(X,{label:"價格",type:"number",min:"0",modelValue:c(x).value.value,"onUpdate:modelValue":l[6]||(l[6]=a=>c(x).value.value=a),"error-messages":c(x).errorMessage.value},null,8,["modelValue","error-messages"]),t(ra,{label:"分類",items:T,modelValue:c(y).value.value,"onUpdate:modelValue":l[7]||(l[7]=a=>c(y).value.value=a),"error-messages":c(y).errorMessage.value},null,8,["modelValue","error-messages"]),t(ia,{label:"上架",modelValue:c(M).value.value,"onUpdate:modelValue":l[8]||(l[8]=a=>c(M).value.value=a),"error-messages":c(M).errorMessage.value},null,8,["modelValue","error-messages"]),t(da,{label:"說明",modelValue:c(U).value.value,"onUpdate:modelValue":l[9]||(l[9]=a=>c(U).value.value=a),"error-messages":c(U).errorMessage.value},null,8,["modelValue","error-messages"]),t(u,{modelValue:k.value,"onUpdate:modelValue":l[10]||(l[10]=a=>k.value=a),"raw-model-value":K.value,"onUpdate:rawModelValue":l[11]||(l[11]=a=>K.value=a),accept:"image/jpg,image/png",deletable:"","error-text":{type:"檔案格式不支援",size:"檔案超過 1MB 大小限制"},"help-text":"選擇檔案或拖曳到這裡","max-files":1,"max-size":"1MB",ref_key:"fileAgent",ref:S},null,8,["modelValue","raw-model-value"])]),_:1}),t(je,null,{default:i(()=>[t(Je),t(E,{color:"red",disabled:c(I),onClick:N},{default:i(()=>[L("取消")]),_:1},8,["disabled"]),t(E,{color:"green",type:"submit",loading:c(I)},{default:i(()=>[L("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};export{Pa as default};