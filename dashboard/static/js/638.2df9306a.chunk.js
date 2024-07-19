"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[638],{7441:function(e,s,a){a(2791);var r=a(9126),t=a(184);s.Z=function(e){var s=e.pageNumber,a=e.setPageNumber,c=e.totalItem,n=e.parPage,o=e.showItem,d=Math.ceil(c/n),l=s;d-s<=o&&(l=d-o);var i=l<0?o:o+l;l<=0&&(l=1);return(0,t.jsxs)("ul",{className:"flex gap-3",children:[s>1&&(0,t.jsx)("li",{onClick:function(){return a(s-1)},className:"w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer",children:(0,t.jsx)(r.URD,{})}),function(){for(var e=[],r=function(r){e.push((0,t.jsx)("li",{onClick:function(){return a(r)},className:"\n                    ".concat(s===r?"bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white":"bg-slate-700 hover:bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-[#d0d2d6]"," w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer"),children:r}))},c=l;c<i;c++)r(c);return e}(),s<d&&(0,t.jsx)("li",{onClick:function(){return a(s+1)},className:"w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer",children:(0,t.jsx)(r.ZC5,{})})]})}},8714:function(e,s,a){a(2791);var r=a(184);s.Z=function(e){var s=e.setParPage,a=e.setSearchValue,t=e.searchValue;return(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("select",{onChange:function(e){return s(parseInt(e.target.value))},className:"px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]",children:[(0,r.jsx)("option",{value:"5",children:"5"}),(0,r.jsx)("option",{value:"15",children:"15"}),(0,r.jsx)("option",{value:"25",children:"25"})]}),(0,r.jsx)("input",{onChange:function(e){return a(e.target.value)},value:t,className:"px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]",type:"text",placeholder:"search"})]})}},7638:function(e,s,a){a.r(s);var r=a(9439),t=a(2791),c=a(6355),n=a(1087),o=a(8014),d=a(9434),l=a(7441),i=a(8714),p=a(1246),h=a(184);s.default=function(){var e=(0,d.I0)(),s=(0,d.v9)((function(e){return e.product})),a=s.products,x=s.totalProduct,u=(0,t.useState)(1),m=(0,r.Z)(u,2),j=m[0],w=m[1],f=(0,t.useState)(""),g=(0,r.Z)(f,2),N=g[0],v=g[1],b=(0,t.useState)(5),y=(0,r.Z)(b,2),P=y[0],k=y[1];return(0,t.useEffect)((function(){var s={parPage:parseInt(P),page:parseInt(j),searchValue:N};e((0,p.Rq)(s))}),[N,j,P]),(0,h.jsx)("div",{className:"px-2 lg:px-7 pt-5 ",children:(0,h.jsxs)("div",{className:"w-full p-4  bg-[#283046] rounded-md",children:[(0,h.jsx)(i.Z,{setParPage:k,setSearchValue:v,searchValue:N}),(0,h.jsx)("div",{className:"relative overflow-x-auto mt-5",children:(0,h.jsxs)("table",{className:"w-full text-sm text-left text-[#d0d2d6]",children:[(0,h.jsx)("thead",{className:"text-sm text-[#d0d2d6] uppercase border-b border-slate-700",children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"col",className:"py-3 px-4",children:"No"}),(0,h.jsx)("th",{scope:"col",className:"py-3 px-4",children:"Image"}),(0,h.jsx)("th",{scope:"col",className:"py-3 px-4",children:"Name"}),(0,h.jsx)("th",{scope:"col",className:"py-3 px-4",children:"Category"}),(0,h.jsx)("th",{scope:"col",className:"py-3 px-4",children:"Brand"}),(0,h.jsx)("th",{scope:"col",className:"py-3 px-4",children:"Price"}),(0,h.jsx)("th",{scope:"col",className:"py-3 px-4",children:"Discount"}),(0,h.jsx)("th",{scope:"col",className:"py-3 px-4",children:"Stock"}),(0,h.jsx)("th",{scope:"col",className:"py-3 px-4",children:"Action"})]})}),(0,h.jsx)("tbody",{children:a.map((function(e,s){var a;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{scope:"row",className:"py-1 px-4 font-medium whitespace-nowrap",children:s+1}),(0,h.jsx)("td",{scope:"row",className:"py-1 px-4 font-medium whitespace-nowrap",children:(0,h.jsx)("img",{className:"w-[45px] h-[45px]",src:e.images[0],alt:""})}),(0,h.jsx)("td",{scope:"row",className:"py-1 px-4 font-medium whitespace-nowrap",children:(0,h.jsxs)("span",{children:[null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a.slice(0,16),"..."]})}),(0,h.jsx)("td",{scope:"row",className:"py-1 px-4 font-medium whitespace-nowrap",children:(0,h.jsx)("span",{children:e.category})}),(0,h.jsx)("td",{scope:"row",className:"py-1 px-4 font-medium whitespace-nowrap",children:(0,h.jsx)("span",{children:e.brand})}),(0,h.jsx)("td",{scope:"row",className:"py-1 px-4 font-medium whitespace-nowrap",children:(0,h.jsxs)("span",{children:["$",e.price]})}),(0,h.jsx)("td",{scope:"row",className:"py-1 px-4 font-medium whitespace-nowrap",children:0===e.discount?(0,h.jsx)("span",{children:"no discount"}):(0,h.jsxs)("span",{children:["$",e.discount,"%"]})}),(0,h.jsx)("td",{scope:"row",className:"py-1 px-4 font-medium whitespace-nowrap",children:(0,h.jsx)("span",{children:e.stock})}),(0,h.jsx)("td",{scope:"row",className:"py-1 px-4 font-medium whitespace-nowrap",children:(0,h.jsxs)("div",{className:"flex justify-start items-center gap-4",children:[(0,h.jsx)(n.rU,{to:"/seller/dashboard/edit-product/".concat(e._id),className:"p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50",children:(0,h.jsx)(c.fmQ,{})}),(0,h.jsx)(n.rU,{className:"p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50",children:(0,h.jsx)(c.dSq,{})}),(0,h.jsx)("button",{className:"p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50",children:(0,h.jsx)(c.Xm5,{})}),(0,h.jsx)(n.rU,{to:"/seller/dashboard/add-banner/".concat(e._id),className:"p-[6px] bg-cyan-500 rounded hover:shadow-lg hover:shadow-cyan-500/50",children:(0,h.jsx)(o.Dxt,{})})]})})]},s)}))})]})}),x<=P?"":(0,h.jsx)("div",{className:"w-full flex justify-end mt-4 bottom-4 right-4",children:(0,h.jsx)(l.Z,{pageNumber:j,setPageNumber:w,totalItem:50,parPage:P,showItem:4})})]})})}}}]);
//# sourceMappingURL=638.2df9306a.chunk.js.map