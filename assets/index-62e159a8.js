import{j as e,c as m,u as x,r as j,a as N,R as l,M as B}from"./index-47e12974.js";import{A as I,a as h,B as R,M as S}from"./MaxWidthContentWrapper-598f9817.js";const A="/burger-creator/assets/plus-icon-4ffdced5.svg",F="/burger-creator/assets/minus-icon-d2948dcc.svg";const P=({className:o,count:n,title:t,imgUrl:r,onAdd:a,onRemove:s})=>e.jsxs("div",{className:m("ingredient-input",o),children:[e.jsxs("div",{className:"ingredient-input__header",children:[e.jsx("button",{onClick:s,className:"ingredient-input__button ingredient-input__button--red",children:e.jsx("img",{src:F,alt:"Remove"})}),e.jsx("div",{children:n}),e.jsx("button",{onClick:a,className:"ingredient-input__button ingredient-input__button--green",children:e.jsx("img",{src:A,alt:"Remove"})})]}),e.jsx("div",{className:"ingredient-input__image",children:e.jsx("img",{src:r,alt:t})}),e.jsx("div",{className:"ingredient-input__title",children:t})]});const k=()=>{const{ingridientsState:o,onAddIngridient:n,onRemoveIngridient:t}=x(),r=j.useCallback(s=>()=>{n(s)},[n]),a=j.useCallback(s=>()=>{t(s)},[t]);return e.jsx("div",{className:"controll-panel",children:o.map(s=>{const{name:i,count:u,url:c,alternativeUrl:d}=s;return e.jsx(P,{className:"controll-panel__ingredient-input",count:u,title:i,imgUrl:d||c,onAdd:r(s),onRemove:a(s)},i)})})};function y(){const{onAddBurger:o}=N(),{onResetBurger:n,burgerState:t,error:r}=x(),[a,s]=l.useState(""),[i,u]=l.useState(""),[c,d]=l.useState("");l.useEffect(()=>{(t.length>0||r!=null&&r.length)&&c!==""&&d("")},[t,r,c]);const b=l.useCallback(g=>{u(""),s(g.target.value)},[s]),v=l.useCallback(g=>{if(g.preventDefault(),a.trim()===""){u("Burger name cannot be empty");return}o({name:a,ingredients:t.map(({url:_,name:f,additionalStyles:C})=>({name:f,url:_,additionalStyles:C}))}).then(()=>{n(),s(""),u(""),d("Burger added to favourites")}).catch(()=>{u("Couldn't add burger to favourites")})},[t,a,o,n]);return{inputValue:a,successMessage:c,formError:i,onInputChange:b,onSubmit:v}}const p=({text:o,className:n,type:t="ERROR"})=>e.jsx("p",{className:m("app-info",`app-info--${t.toLowerCase()}`,n),children:o});const E=({value:o,onChange:n,className:t,placeholder:r,disabled:a})=>e.jsx("input",{className:m("app-input",t),type:"text",value:o,placeholder:r,disabled:a,onChange:n});const M=({className:o,onChange:n,formError:t,value:r,onSubmit:a})=>e.jsxs("form",{className:m("burger-name-form",o),action:"submit",onSubmit:a,children:[e.jsx(E,{className:"burger-name-form__input",value:r,onChange:n,placeholder:"input space"}),t&&e.jsx(p,{text:t}),e.jsx(I,{children:"save"})]});const H=({className:o,isCompleted:n,burger:t,burgerError:r,formError:a,inputValue:s,successMessage:i,onInputChange:u,onSubmit:c})=>e.jsxs("div",{className:m("burger",o),children:[e.jsx(h,{text:"Your Burger"}),r&&!i&&e.jsx(p,{text:r}),i&&e.jsx(p,{type:"SUCCESS",text:i}),t.length===0&&!i&&!r&&e.jsx(p,{type:"INFO",text:"Add items to create your burger. First item must be bottom bun. To finish your burger choose top bun"}),e.jsx(R,{burger:t}),n&&e.jsx(M,{formError:a,value:s,onChange:u,onSubmit:c})]}),W=({className:o})=>{const{burgerState:n,error:t}=x(),r=y(),a=l.useMemo(()=>n.some(s=>s.isTop),[n]);return e.jsx(H,{className:o,isCompleted:a,burger:n,burgerError:t,...r})};const T=()=>e.jsx("div",{className:"home-page",children:e.jsxs(S,{maxWidth:B,children:[e.jsx(h,{text:"Burger Creator",className:"home-page__header"}),e.jsxs("div",{className:"home-page__creator",children:[e.jsx(k,{}),e.jsx(W,{})]})]})}),O=T;export{O as default};
