"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[593],{4593:function(e,a,r){r.r(a);var t=r(9439),n=r(2791),s=r(7689),o=r(1087),c=r(6355),l=r(7577),i=r(3879),d=r(6022),m=r(9434),u=r(3402),p=r(184);a.default=function(){var e=(0,m.I0)(),a=(0,n.useState)(!1),r=(0,t.Z)(a,2),f=(r[0],r[1],(0,s.UO)().productId),h=(0,n.useState)(""),x=(0,t.Z)(h,2),v=x[0],b=x[1],g=(0,n.useState)(""),j=(0,t.Z)(g,2),w=j[0],y=j[1],X=(0,m.v9)((function(e){return e.banner})),N=X.loader,O=X.successMessage,E=X.errorMessage,P=X.banner,S=function(e){var a=e.target.files;a.length>0&&(y(a[0]),b(URL.createObjectURL(a[0])))};return(0,n.useEffect)((function(){E&&(u.ZP.error(E),e((0,d.od)())),O&&(u.ZP.success(O),e((0,d.od)()),b(""),y(""))}),[O,E]),(0,n.useEffect)((function(){e((0,d.rQ)(f))}),[f]),(0,p.jsx)("div",{className:"px-2 lg:px-7 pt-5 ",children:(0,p.jsxs)("div",{className:"w-full p-4  bg-[#283046] rounded-md",children:[(0,p.jsxs)("div",{className:"flex justify-between items-center pb-4",children:[(0,p.jsx)("h1",{className:"text-[#d0d2d6] text-xl font-semibold",children:"Add banner"}),(0,p.jsx)(o.rU,{className:"bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2 ",to:"/seller/dashboard/banners",children:"Banners"})]}),!P&&(0,p.jsx)("div",{children:(0,p.jsxs)("form",{onSubmit:function(a){a.preventDefault();var r=new FormData;r.append("productId",f),r.append("image",w),e((0,d.d_)(r))},children:[(0,p.jsxs)("div",{className:"mb-6",children:[(0,p.jsxs)("label",{className:"flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 w-full text-[#d0d2d6]",htmlFor:"image",children:[(0,p.jsx)("span",{className:"text-4xl",children:(0,p.jsx)(c.Qvc,{})}),(0,p.jsx)("span",{children:"select banner image"})]}),(0,p.jsx)("input",{required:!0,onChange:S,className:"hidden",type:"file",id:"image"})]}),v&&(0,p.jsx)("div",{className:"mb-4",children:(0,p.jsx)("img",{className:"w-full h-auto",src:v,alt:"image"})}),(0,p.jsx)("button",{disabled:!!N,className:"bg-blue-500 w-[190px] hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3",children:N?(0,p.jsx)(i.Z,{color:"#fff",cssOverride:l.E}):"Add banner"})]})}),P&&(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"mb-4",children:(0,p.jsx)("img",{className:"w-full h-auto",src:P.banner,alt:"image"})}),(0,p.jsxs)("form",{onSubmit:function(a){a.preventDefault();var r=new FormData;r.append("image",w),e((0,d.HS)({info:r,bannerId:P._id}))},children:[(0,p.jsxs)("div",{className:"mb-6",children:[(0,p.jsxs)("label",{className:"flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 w-full text-[#d0d2d6]",htmlFor:"image",children:[(0,p.jsx)("span",{className:"text-4xl",children:(0,p.jsx)(c.Qvc,{})}),(0,p.jsx)("span",{children:"select banner image"})]}),(0,p.jsx)("input",{required:!0,onChange:S,className:"hidden",type:"file",id:"image"})]}),v&&(0,p.jsx)("div",{className:"mb-4",children:(0,p.jsx)("image",{className:"w-full h-auto",src:v,alt:"image"})}),(0,p.jsx)("button",{disabled:!!N,className:"bg-blue-500 w-[190px] hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3",children:N?(0,p.jsx)(i.Z,{color:"#fff",cssOverride:l.E}):"update banner"})]})]})]})})}},3879:function(e,a,r){var t=r(2791),n=r(5617),s=r(6707),o=function(){return o=Object.assign||function(e){for(var a,r=1,t=arguments.length;r<t;r++)for(var n in a=arguments[r])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e},o.apply(this,arguments)},c=function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]])}return r},l=[1,3,5],i=[(0,s.i)("PropagateLoader","25% {transform: translateX(-".concat(l[0],"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(l[1],"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(l[2],"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-0"),(0,s.i)("PropagateLoader","25% {transform: translateX(-".concat(l[0],"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(l[1],"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(l[1],"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-1"),(0,s.i)("PropagateLoader","25% {transform: translateX(-".concat(l[0],"rem) scale(0.75)}\n    75% {transform: translateX(-").concat(l[0],"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-2"),(0,s.i)("PropagateLoader","25% {transform: translateX(".concat(l[0],"rem) scale(0.75)}\n    75% {transform: translateX(").concat(l[0],"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-3"),(0,s.i)("PropagateLoader","25% {transform: translateX(".concat(l[0],"rem) scale(0.75)}\n    50% {transform: translateX(").concat(l[1],"rem) scale(0.6)}\n    75% {transform: translateX(").concat(l[1],"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-4"),(0,s.i)("PropagateLoader","25% {transform: translateX(".concat(l[0],"rem) scale(0.75)}\n    50% {transform: translateX(").concat(l[1],"rem) scale(0.6)}\n    75% {transform: translateX(").concat(l[2],"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-5")];a.Z=function(e){var a=e.loading,r=void 0===a||a,s=e.color,l=void 0===s?"#000000":s,d=e.speedMultiplier,m=void 0===d?1:d,u=e.cssOverride,p=void 0===u?{}:u,f=e.size,h=void 0===f?15:f,x=c(e,["loading","color","speedMultiplier","cssOverride","size"]),v=(0,n.h)(h),b=v.value,g=v.unit,j=o({display:"inherit",position:"relative"},p),w=function(e){return{position:"absolute",fontSize:"".concat(b/3).concat(g),width:"".concat(b).concat(g),height:"".concat(b).concat(g),background:l,borderRadius:"50%",animation:"".concat(i[e]," ").concat(1.5/m,"s infinite"),animationFillMode:"forwards"}};return r?t.createElement("span",o({style:j},x),t.createElement("span",{style:w(0)}),t.createElement("span",{style:w(1)}),t.createElement("span",{style:w(2)}),t.createElement("span",{style:w(3)}),t.createElement("span",{style:w(4)}),t.createElement("span",{style:w(5)})):null}},6707:function(e,a,r){r.d(a,{i:function(){return t}});var t=function(e,a,r){var t="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return t;var n=document.createElement("style");document.head.appendChild(n);var s=n.sheet,o="\n    @keyframes ".concat(t," {\n      ").concat(a,"\n    }\n  ");return s&&s.insertRule(o,0),t}},5617:function(e,a,r){r.d(a,{E:function(){return s},h:function(){return n}});var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"===typeof e)return{value:e,unit:"px"};var a,r=(e.match(/^[0-9.]*/)||"").toString();a=r.includes(".")?parseFloat(r):parseInt(r,10);var n=(e.match(/[^0-9]*$/)||"").toString();return t[n]?{value:a,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(a,"px.")),{value:a,unit:"px"})}function s(e){var a=n(e);return"".concat(a.value).concat(a.unit)}}}]);
//# sourceMappingURL=593.594527ef.chunk.js.map