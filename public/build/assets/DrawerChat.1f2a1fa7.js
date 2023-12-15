import{g as v}from"./assets.9f321430.js";import{d as c,aC as h,_ as d,f as l,j as e,n as u,k as o,m as b,o as i,r as $,p as t,F as _,I as g}from"./app.6cf530fe.js";const w=c({name:"card-4",components:{},props:{cardClasses:String,avatar:String,online:Boolean,initials:String,color:String,name:String,position:String,avgEarnings:String,totalSales:String},setup(){return{openDrawer:()=>{var n,r;(r=(n=h)==null?void 0:n.getInstance("kt_drawer_chat"))==null||r.toggle()}}}}),y={class:"col-md-6 col-xxl-4"},x={class:"card"},k={class:"card-body d-flex flex-center flex-column p-9"},S={class:"mb-5"},C={class:"symbol symbol-75px symbol-circle"},A=["src"],D={key:2,class:"symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3"},M={href:"#",class:"fs-4 text-gray-800 text-hover-primary fw-bold mb-0"},P={class:"fw-semobold text-gray-400 mb-6"},j={class:"d-flex flex-center flex-wrap mb-5"},E={class:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"},B={class:"fs-6 fw-bold text-gray-700"},N=e("div",{class:"fw-semobold text-gray-400"},"Avg. Earnings",-1),O={class:"border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3"},F={class:"fs-6 fw-bold text-gray-700"},V=e("div",{class:"fw-semobold text-gray-400"},"Total Sales",-1);function W(a,n,r,p,m,f){return i(),l("div",y,[e("div",x,[e("div",k,[e("div",S,[e("div",C,[a.avatar?(i(),l("img",{key:0,src:a.avatar,alt:""},null,8,A)):(i(),l("span",{key:1,class:u([`bg-light-${a.color} text-${a.color}`,"symbol-label fs-5 fw-bold"])},o(a.initials),3)),a.online?(i(),l("div",D)):b("",!0)])]),e("a",M,o(a.name),1),e("div",P,o(a.position),1),e("div",j,[e("div",E,[e("div",B,o(a.avgEarnings),1),N]),e("div",O,[e("div",F,o(a.totalSales),1),V])]),e("button",{class:"btn btn-sm btn-light-primary fw-bold","data-kt-drawer-toggle":"true","data-kt-drawer-target":"#kt_drawer_chat",onClick:n[0]||(n[0]=s=>a.openDrawer())}," Send Message ")])])])}const I=d(w,[["render",W]]),U=c({name:"drawer-chat",components:{Card4:I},setup(){return{getAssetPath:v}}}),z=g('<div class="d-flex flex-wrap flex-stack mb-6"><h3 class="fw-bold my-2"> My Contacts <span class="fs-6 text-gray-400 fw-semobold ms-1">(59)</span></h3><div class="d-flex my-2"><select name="status" data-control="select2" data-hide-search="true" class="form-select form-select-white form-select-sm w-125px"><option value="Online" selected>Online</option><option value="Pending">Pending</option><option value="Declined">Declined</option><option value="Accepted">Accepted</option></select></div></div>',1),H={class:"row g-6 g-xl-9"},R=g('<div class="d-flex flex-stack flex-wrap pt-10"><div class="fs-6 fw-semobold text-gray-700"> Showing 1 to 10 of 50 entries </div><ul class="pagination"><li class="page-item previous"><a href="#" class="page-link"><i class="previous"></i></a></li><li class="page-item active"><a href="#" class="page-link">1</a></li><li class="page-item"><a href="#" class="page-link">2</a></li><li class="page-item"><a href="#" class="page-link">3</a></li><li class="page-item"><a href="#" class="page-link">4</a></li><li class="page-item"><a href="#" class="page-link">5</a></li><li class="page-item"><a href="#" class="page-link">6</a></li><li class="page-item next"><a href="#" class="page-link"><i class="next"></i></a></li></ul></div>',1);function T(a,n,r,p,m,f){const s=$("Card4");return i(),l(_,null,[z,e("div",H,[t(s,{name:"Emma Smith",position:"Art Director",online:!1,avatar:a.getAssetPath("media/avatars/300-6.jpg"),connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"]),t(s,{name:"Melody Macy",position:"Marketing Analytic",online:!0,initials:"M",color:"danger",connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"}),t(s,{name:"Max Smith",position:"Software Enginer",online:!1,avatar:a.getAssetPath("media/avatars/300-1.jpg"),connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"]),t(s,{name:"Sean Bean",position:"Web Developer",online:!1,avatar:a.getAssetPath("media/avatars/300-5.jpg"),connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"]),t(s,{name:"Brian Cox",position:"UI/UX Designer",online:!1,avatar:a.getAssetPath("media/avatars/300-25.jpg"),connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"]),t(s,{name:"Mikaela Collins",position:"Head Of Marketing",online:!0,initials:"M",color:"warning",connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"}),t(s,{name:"Francis Mitcham",position:"Software Arcitect",online:!1,avatar:a.getAssetPath("media/avatars/300-9.jpg"),connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"]),t(s,{name:"Olivia Wild",position:"System Admin",online:!0,initials:"O",color:"danger",connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"}),t(s,{name:"Neil Owen",position:"Account Manager",online:!0,initials:"N",color:"primary",connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"}),t(s,{name:"Dan Wilson",position:"Web Desinger",online:!1,avatar:a.getAssetPath("media/avatars/300-23.jpg"),connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"]),t(s,{name:"Emma Bold",position:"Corporate Finance",online:!0,initials:"E",color:"danger",connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"}),t(s,{name:"Ana Crown",position:"Customer Relationship",online:!1,avatar:a.getAssetPath("media/avatars/300-12.jpg"),connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"])]),R],64)}const G=d(U,[["render",T]]);export{G as default};
