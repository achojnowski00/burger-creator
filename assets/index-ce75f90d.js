import{j as e,c as u,u as x,r as j,a as C,R as m,M as f}from"./index-b86ae710.js";import{A as h}from"./AppHeader-e3ec852c.js";const B="/burger-creator/assets/plus-icon-4ffdced5.svg",I="/burger-creator/assets/minus-icon-d2948dcc.svg";const R=({className:s,count:n,title:t,imgUrl:r,onAdd:a,onRemove:o})=>e.jsxs("div",{className:u("ingredient-input",s),children:[e.jsxs("div",{className:"ingredient-input__header",children:[e.jsx("button",{onClick:o,className:"ingredient-input__button ingredient-input__button--red",children:e.jsx("img",{src:I,alt:"Remove"})}),e.jsx("div",{children:n}),e.jsx("button",{onClick:a,className:"ingredient-input__button ingredient-input__button--green",children:e.jsx("img",{src:B,alt:"Remove"})})]}),e.jsx("div",{className:"ingredient-input__image",children:e.jsx("img",{src:r,alt:t})}),e.jsx("div",{className:"ingredient-input__title",children:t})]});const S=()=>{const{ingridientsState:s,onAddIngridient:n,onRemoveIngridient:t}=x(),r=j.useCallback(o=>()=>{n(o)},[n]),a=j.useCallback(o=>()=>{t(o)},[t]);return e.jsx("div",{className:"controll-panel",children:s.map(o=>{const{name:c,count:i,url:l,alternativeUrl:d}=o;return e.jsx(R,{className:"controll-panel__ingredient-input",count:i,title:c,imgUrl:d||l,onAdd:r(o),onRemove:a(o)},c)})})};function A(){const{onAddBurger:s}=C(),{onResetBurger:n,burgerState:t,error:r}=x(),[a,o]=m.useState(""),[c,i]=m.useState(""),[l,d]=m.useState("");m.useEffect(()=>{(t.length>0||r!=null&&r.length)&&l!==""&&d("")},[t,r,l]);const b=m.useCallback(g=>{i(""),o(g.target.value)},[o]),v=m.useCallback(g=>{if(g.preventDefault(),a.trim()===""){i("Burger name cannot be empty");return}s({name:a,ingredients:t.map(({url:N,name:_})=>({name:_,url:N}))}).then(()=>{n(),o(""),i(""),d("Burger added to favourites")}).catch(()=>{i("Couldn't add burger to favourites")})},[t,a,s,n]);return{inputValue:a,successMessage:l,formError:c,onInputChange:b,onSubmit:v}}const p=({text:s,className:n,type:t="ERROR"})=>e.jsx("p",{className:u("app-info",`app-info--${t.toLocaleLowerCase()}`,n),children:s});const y=({value:s,onChange:n,className:t,placeholder:r,disabled:a})=>e.jsx("input",{className:u("app-input",t),type:"text",value:s,placeholder:r,disabled:a,onChange:n});const F=({className:s,disabled:n,text:t,onClick:r})=>e.jsx("button",{className:u("app-button",s),onClick:r,disabled:n,children:t});const E=({className:s,onChange:n,formError:t,value:r,onSubmit:a})=>e.jsxs("form",{className:u("burger-name-form",s),action:"submit",onSubmit:a,children:[e.jsx(y,{className:"burger-name-form__input",value:r,onChange:n,placeholder:"input space"}),t&&e.jsx(p,{text:t}),e.jsx(F,{text:"save"})]}),k=({className:s,burger:n})=>e.jsx("div",{className:u("burger-construction",s),children:n.map(({url:t,name:r,additionalStyles:a},o)=>e.jsx("div",{className:"burger__ingridient",style:{...a,zIndex:f-o},children:e.jsx("img",{src:t,alt:"burger"})},`${r}_${o}`))});const P=({className:s,isCompleted:n,burger:t,burgerError:r,formError:a,inputValue:o,successMessage:c,onInputChange:i,onSubmit:l})=>e.jsxs("div",{className:u("burger",s),children:[e.jsx(h,{text:"Your Burger"}),r&&!c&&e.jsx(p,{text:r}),c&&e.jsx(p,{type:"SUCCESS",text:c}),t.length===0&&!c&&!r&&e.jsx(p,{type:"INFO",text:"Add items to create your burger. First item must be bottom bun. To finish your burger choose top bun"}),e.jsx(k,{burger:t}),n&&e.jsx(E,{formError:a,value:o,onChange:i,onSubmit:l})]}),W=({className:s})=>{const{burgerState:n,error:t}=x(),r=A(),a=m.useMemo(()=>n.some(o=>o.isTop),[n]);return e.jsx(P,{className:s,isCompleted:a,burger:n,burgerError:t,...r})};const M=({className:s,children:n,maxWidth:t=1920})=>{const r={maxWidth:t};return e.jsx("div",{style:r,className:u("max-width-content-wrapper",s),children:n})};const $=()=>e.jsx("div",{className:"home-page",children:e.jsxs(M,{maxWidth:1280,children:[e.jsx(h,{text:"Burger Creator",className:"home-page__header"}),e.jsxs("div",{className:"home-page__creator",children:[e.jsx(S,{}),e.jsx(W,{})]})]})}),T=$;export{T as default};