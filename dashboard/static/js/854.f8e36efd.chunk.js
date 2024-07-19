"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[854],{2854:function(e,s,l){l.r(s);var t=l(2791),d=l(9126),a=l(7425),r=l(6355),c=l(1087),i=l(8820),n=l(3496),x=l(2426),o=l.n(x),m=l(9434),h=l(7727),p=l(7394),f=l(184);s.default=function(){var e=(0,m.v9)((function(e){return e.auth})),s=e.userInfo,l=(0,m.v9)((function(e){return e.dashboardIndex})),x=l.totalSale,u=l.totalOrder,j=l.totalProduct,N=l.totalSeller,b=l.recentOrders,g=l.recentMessage,w=(0,m.I0)();(0,t.useEffect)((function(){w((0,p.A0)())}),[]);var v={series:[{name:"Orders",data:[34,65,34,65,34,34,34,56,23,67,23,45]},{name:"Revenue",data:[34,32,45,32,34,34,43,56,65,67,45,78]},{name:"Sellers",data:[78,32,34,54,65,34,54,21,54,43,45,43]}],options:{color:["#181ee8","#181ee8"],plotOptions:{radius:30},chart:{background:"transparent",foreColor:"#d0d2d6"},dataLabels:{enabled:!1},stroke:{show:!0,curve:["smooth","straight","stepline"],lineCap:"butt",colors:"#f0f0f0",width:.5,dashArray:0},xaxis:{categories:["Jan","Feb","Mar","Apl","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},legend:{position:"top"},responsive:[{breakpoint:565,yaxis:{categories:["Jan","Feb","Mar","Apl","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},options:{plotOptions:{bar:{horizontal:!0}},chart:{height:"550px"}}}]}};return(0,f.jsxs)("div",{className:"px-2 md:px-7 py-5",children:[(0,f.jsxs)("div",{className:"w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7",children:[(0,f.jsxs)("div",{className:"flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3",children:[(0,f.jsxs)("div",{className:"flex flex-col justify-start items-start text-[#d0d2d6]",children:[(0,f.jsxs)("h2",{className:"text-3xl font-bold",children:["$",x]}),(0,f.jsx)("span",{className:"text-md font-medium",children:"Total Sales"})]}),(0,f.jsx)("div",{className:"w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl",children:(0,f.jsx)(d.KTD,{className:"text-[#28c76f] shadow-lg"})})]}),(0,f.jsxs)("div",{className:"flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3",children:[(0,f.jsxs)("div",{className:"flex flex-col justify-start items-start text-[#d0d2d6]",children:[(0,f.jsx)("h2",{className:"text-3xl font-bold",children:j}),(0,f.jsx)("span",{className:"text-md font-medium",children:"Products"})]}),(0,f.jsx)("div",{className:"w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl",children:(0,f.jsx)(a.k1o,{className:"text-[#cd00e8] shadow-lg"})})]}),(0,f.jsxs)("div",{className:"flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3",children:[(0,f.jsxs)("div",{className:"flex flex-col justify-start items-start text-[#d0d2d6]",children:[(0,f.jsx)("h2",{className:"text-3xl font-bold",children:N}),(0,f.jsx)("span",{className:"text-md font-medium",children:"Sellers"})]}),(0,f.jsx)("div",{className:"w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl",children:(0,f.jsx)(r.I$,{className:"text-[#00cfe8] shadow-lg"})})]}),(0,f.jsxs)("div",{className:"flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3",children:[(0,f.jsxs)("div",{className:"flex flex-col justify-start items-start text-[#d0d2d6]",children:[(0,f.jsx)("h2",{className:"text-3xl font-bold",children:u}),(0,f.jsx)("span",{className:"text-md font-medium",children:"Orders"})]}),(0,f.jsx)("div",{className:"w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl",children:(0,f.jsx)(i.nxQ,{className:"text-[#7367f0] shadow-lg"})})]})]}),(0,f.jsxs)("div",{className:"w-full flex flex-wrap mt-7",children:[(0,f.jsx)("div",{className:"w-full lg:w-7/12 lg:pr-3",children:(0,f.jsx)("div",{className:"w-full bg-[#283046] p-4 rounded-md",children:(0,f.jsx)(n.Z,{options:v.options,series:v.series,type:"bar",height:350})})}),(0,f.jsx)("div",{className:"w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0",children:(0,f.jsxs)("div",{className:"w-full bg-[#283046] p-4 rounded-md text-[#d0d2d6]",children:[(0,f.jsxs)("div",{className:"flex justify-between items-center",children:[(0,f.jsx)("h2",{className:"font-semibold text-lg text-[#d0d2d6] pb-3",children:"Recent seller message"}),(0,f.jsx)(c.rU,{className:"font-semibold text-sm text-[#d0d2d6]",children:"View All"})]}),(0,f.jsx)("div",{className:"flex flex-col gap-2 pt-6 text-[#d0d2d6]",children:(0,f.jsx)("ol",{className:"relative border-1 border-slate-600 ml-4",children:g.map((function(e,l){return(0,f.jsxs)("li",{className:"mb-3 ml-6",children:[(0,f.jsx)("div",{className:"flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10",children:e.senderId===s._id?(0,f.jsx)("img",{className:"w-full rounded-full h-full shadow-lg",src:s.image,alt:""}):(0,f.jsx)("img",{className:"w-full rounded-full h-full shadow-lg",src:h,alt:""})}),(0,f.jsxs)("div",{className:"p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm",children:[(0,f.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,f.jsx)(c.rU,{className:"text-md font-normal",children:e.senderName}),(0,f.jsx)("time",{className:"mb-1 text-sm font-normal sm:order-last sm:mb-0",children:o()(e.createdAt).startOf("hour").fromNow()})]}),(0,f.jsx)("div",{className:"p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800",children:e.message})]})]})}))})})]})})]}),(0,f.jsxs)("div",{className:"w-full p-4  bg-[#283046] rounded-md mt-6",children:[(0,f.jsxs)("div",{className:"flex justify-between items-center",children:[(0,f.jsx)("h2",{className:"font-semibold text-lg text-[#d0d2d6] pb-3",children:"Recent Orders"}),(0,f.jsx)(c.rU,{className:"font-semibold text-sm text-[#d0d2d6]",children:"View All"})]}),(0,f.jsx)("div",{className:"relative overflow-x-auto",children:(0,f.jsxs)("table",{className:"w-full text-sm text-left text-[#d0d2d6]",children:[(0,f.jsx)("thead",{className:"text-sm text-[#d0d2d6] uppercase border-b border-slate-700",children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{scope:"col",className:"py-3 px-4",children:"Order Id"}),(0,f.jsx)("th",{scope:"col",className:"py-3 px-4",children:"Price"}),(0,f.jsx)("th",{scope:"col",className:"py-3 px-4",children:"Payment Status"}),(0,f.jsx)("th",{scope:"col",className:"py-3 px-4",children:"Order Status"}),(0,f.jsx)("th",{scope:"col",className:"py-3 px-4",children:"Active"})]})}),(0,f.jsx)("tbody",{children:b.map((function(e,s){return(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{scope:"row",className:"py-3 px-4 font-medium whitespace-nowrap",children:["#",e._id]}),(0,f.jsxs)("td",{scope:"row",className:"py-3 px-4 font-medium whitespace-nowrap",children:["$",e.price]}),(0,f.jsx)("td",{scope:"row",className:"py-3 px-4 font-medium whitespace-nowrap",children:(0,f.jsx)("span",{children:e.delivery_status})}),(0,f.jsx)("td",{scope:"row",className:"py-3 px-4 font-medium whitespace-nowrap",children:(0,f.jsx)("span",{children:e.payment_status})}),(0,f.jsx)("td",{scope:"row",className:"py-3 px-4 font-medium whitespace-nowrap",children:(0,f.jsx)(c.rU,{to:"/admin/dashboard/order/details/".concat(e._id),children:"view"})})]},s)}))})]})})]})]})}},7727:function(e,s,l){e.exports=l.p+"static/media/seller.a80923620306e6eeadcb.png"}}]);
//# sourceMappingURL=854.f8e36efd.chunk.js.map