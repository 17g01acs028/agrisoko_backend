"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[969],{1969:function(e,s,d){d.r(s);var i=d(9439),a=d(1413),n=d(2791),l=d(4821),t=d(3402),r=d(2426),c=d.n(r),o=d(9434),u=d(9208),h=d(184);function p(e){var s=e.deltaY;console.log("handleOnWheel",s)}var x=(0,n.forwardRef)((function(e,s){return(0,h.jsx)("div",(0,a.Z)({ref:s,onWheel:p},e))}));s.default=function(){var e=(0,o.I0)(),s=(0,o.v9)((function(e){return e.payment})),d=s.successMessage,a=s.errorMessage,r=s.loader,p=s.pendingWithdrows;(0,n.useEffect)((function(){e((0,u.qS)())}),[]);var v=(0,n.useState)(""),m=(0,i.Z)(v,2),w=m[0],f=m[1];(0,n.useEffect)((function(){d&&(t.ZP.success(d),e((0,u.od)())),a&&(t.ZP.error(a),e((0,u.od)()))}),[a,d]);return(0,h.jsx)("div",{className:"px-2 lg:px-7 pt-5",children:(0,h.jsxs)("div",{className:"w-full p-4  bg-[#283046] rounded-md text-[#d0d2d6]",children:[(0,h.jsx)("h2",{className:"text-xl font-medium pb-5",children:"Withdrawal request"}),(0,h.jsx)("div",{className:"w-full",children:(0,h.jsxs)("div",{className:"w-full overflow-x-auto",children:[(0,h.jsxs)("div",{className:"flex bg-[#161d31] uppercase text-xs min-w-[340px]",children:[(0,h.jsx)("div",{className:"w-[25%] p-2",children:"No"}),(0,h.jsx)("div",{className:"w-[25%] p-2",children:"Amount"}),(0,h.jsx)("div",{className:"w-[25%] p-2",children:"status"}),(0,h.jsx)("div",{className:"w-[25%] p-2",children:"date"}),(0,h.jsx)("div",{className:"w-[25%] p-2",children:"action"})]}),(0,h.jsx)(l.t7,{style:{minWidth:"340px",overflowX:"hidden"},className:"List",height:350,itemCount:p.length,itemSize:35,outerElementType:x,children:function(s){var d,i,a,n,l=s.index,t=s.style;return(0,h.jsxs)("div",{style:t,className:"flex text-sm",children:[(0,h.jsx)("div",{className:"w-[25%] p-2 whitespace-nowrap",children:l+1}),(0,h.jsxs)("div",{className:"w-[25%] p-2 whitespace-nowrap",children:["$",null===(d=p[l])||void 0===d?void 0:d.amount]}),(0,h.jsx)("div",{className:"w-[25%] p-2 whitespace-nowrap",children:(0,h.jsx)("span",{className:"py-[1px] px-[5px] bg-slate-700 text-blue-500 rounded-md text-xs",children:null===(i=p[l])||void 0===i?void 0:i.status})}),(0,h.jsx)("div",{className:"w-[25%] p-2 whitespace-nowrap",children:c()(null===(a=p[l])||void 0===a?void 0:a.createdAt).format("LL")}),(0,h.jsx)("div",{className:"w-[25%] p-2 whitespace-nowrap",children:(0,h.jsx)("button",{disabled:r,onClick:function(){var s,d;return d=null===(s=p[l])||void 0===s?void 0:s._id,f(d),void e((0,u.Zp)(d))},className:"bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-3 py-[2px] cursor-pointer text-white rounded-sm text-sm",children:r&&w===(null===(n=p[l])||void 0===n?void 0:n._id)?"loading..":"Confirm"})})]})}})]})})]})})}}}]);
//# sourceMappingURL=969.2a1d4823.chunk.js.map