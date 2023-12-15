import{g as f}from"./assets.9f321430.js";import{U as $}from"./UserAccountMenu.8372cf34.js";import{d as _,_ as h,r as d,f as v,j as t,p as o,w as a,I as y,o as x,H as r,z as p,n as c,k as n}from"./app.6cf530fe.js";import{D as P}from"./KTDataTable.3a6a2305.js";const S=_({name:"kt-details",components:{UserMenu:$},setup(){return{getAssetPath:f}}}),D={class:"card card-flush pt-3 mb-5 mb-xl-10"},I={class:"card-header"},A=t("div",{class:"card-title"},[t("h2",{class:"fw-bold"},"Product Details")],-1),M={class:"card-toolbar"},N={class:"card-body pt-3"},B={class:"mb-10"},V=t("h5",{class:"mb-4"},"Billing Address:",-1),E={class:"d-flex flex-wrap py-5"},F={class:"flex-equal me-5"},C={class:"table fs-6 fw-semobold gs-0 gy-2 gx-2 m-0"},O=t("td",{class:"text-gray-400 min-w-175px w-175px"},"Bill to:",-1),T={class:"text-gray-800 min-w-200px"},U=t("tr",null,[t("td",{class:"text-gray-400"},"Customer Name:"),t("td",{class:"text-gray-800"},"Emma Smith")],-1),j=t("tr",null,[t("td",{class:"text-gray-400"},"Address:"),t("td",{class:"text-gray-800"}," Floor 10, 101 Avenue of the Light Square, New York, NY, 10050. ")],-1),Y=t("tr",null,[t("td",{class:"text-gray-400"},"Phone:"),t("td",{class:"text-gray-800"},"(555) 555-1234")],-1),H=y('<div class="flex-equal"><table class="table fs-6 fw-semobold gs-0 gy-2 gx-2 m-0"><tr><td class="text-gray-400 min-w-175px w-175px"> Subscribed Product: </td><td class="text-gray-800 min-w-200px"><a href="#" class="text-gray-800 text-hover-primary">Basic Bundle</a></td></tr><tr><td class="text-gray-400">Subscription Fees:</td><td class="text-gray-800">$149.99 / Year</td></tr><tr><td class="text-gray-400">Billing method:</td><td class="text-gray-800">Annually</td></tr><tr><td class="text-gray-400">Currency:</td><td class="text-gray-800">USD - US Dollar</td></tr></table></div>',1),L={class:"mb-0"},J=t("h5",{class:"mb-4"},"Subscribed Products:",-1),z={class:"table-responsive"},K={class:"table align-middle table-row-dashed fs-6 gy-4 mb-0"},q=t("thead",null,[t("tr",{class:"border-bottom border-gray-200 text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0"},[t("th",{class:"min-w-150px"},"Product"),t("th",{class:"min-w-125px"},"Subscription ID"),t("th",{class:"min-w-125px"},"Qty"),t("th",{class:"min-w-125px"},"Total"),t("th",{class:"text-end min-w-70px"},"Actions")])],-1),Q={class:"fw-semobold text-gray-800"},R=t("td",null,[t("label",{class:"w-150px"},"Basic Bundle"),t("div",{class:"fw-normal text-gray-600"},"Basic yearly bundle")],-1),G=t("td",null,[t("span",{class:"badge badge-light-danger"},"sub_4567_8765")],-1),W=t("td",null,"1",-1),X=t("td",null,"$149.99 / Year",-1),Z={class:"text-end"},tt={href:"#",class:"btn btn-icon btn-active-light-primary w-30px h-30px","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end"},et=t("td",null,[t("label",{class:"w-150px"},"Pro Bundle"),t("div",{class:"fw-normal text-gray-400"},"Basic yearly bundle")],-1),at=t("td",null,[t("span",{class:"badge badge-light-danger"},"sub_4567_3433")],-1),st=t("td",null,"5",-1),ot=t("td",null,"$949.99 / Year",-1),nt={class:"text-end"},rt={href:"#",class:"btn btn-icon btn-active-light-primary w-30px h-30px","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end"};function lt(s,i,m,u,b,w){const l=d("router-link"),e=d("KTIcon"),g=d("UserMenu");return x(),v("div",D,[t("div",I,[A,t("div",M,[o(l,{to:"/subscriptions/add",class:"btn btn-light-primary"},{default:a(()=>[r("Update Product")]),_:1})])]),t("div",N,[t("div",B,[V,t("div",E,[t("div",F,[t("table",C,[t("tr",null,[O,t("td",T,[o(l,{to:"/subscriptions/view",class:"text-gray-800 text-hover-primary"},{default:a(()=>[r(" e.smith@kpmg.com.au")]),_:1})])]),U,j,Y])]),H])]),t("div",L,[J,t("div",z,[t("table",K,[q,t("tbody",Q,[t("tr",null,[R,G,W,X,t("td",Z,[t("a",tt,[o(e,{"icon-name":"switch","icon-class":"fs-3"})]),o(g)])]),t("tr",null,[et,at,st,ot,t("td",nt,[t("a",rt,[o(e,{"icon-name":"switch","icon-class":"fs-3"})]),o(g)])])])])])])])])}const dt=h(S,[["render",lt]]),ct=_({name:"kt-events",components:{},setup(){return{getAssetPath:f}}}),it={class:"card card-flush pt-3 mb-5 mb-xl-10"},mt=y('<div class="card-header"><div class="card-title"><h2>Recent Events</h2></div><div class="card-toolbar"><a href="#" class="btn btn-light-primary">View All Events</a></div></div><div class="card-body pt-0"><div class="table-responsive"><table class="table align-middle table-row-dashed fs-6 text-gray-600 fw-semobold gy-5" id="kt_table_customers_events"><tbody><tr><td class="min-w-400px"> Invoice <a href="#" class="fw-bold text-gray-800 text-hover-primary me-1">7786-3830</a>status has changed from <span class="badge badge-light-primary me-1">In Transit</span>to <span class="badge badge-light-success">Approved</span></td><td class="pe-0 text-gray-600 text-end min-w-200px"> 25 Oct 2021, 9:23 pm </td></tr><tr><td class="min-w-400px"> Invoice <a href="#" class="fw-bold text-gray-800 text-hover-primary me-1">9357-7929</a>status has changed from <span class="badge badge-light-info me-1">In Progress</span>to <span class="badge badge-light-primary">In Transit</span></td><td class="pe-0 text-gray-600 text-end min-w-200px"> 10 Mar 2021, 5:20 pm </td></tr><tr><td class="min-w-400px"><a href="#" class="fw-bold text-gray-800 text-hover-primary me-1">Brian Cox</a>has made payment to <a href="#" class="fw-bold text-gray-800 text-hover-primary">7277-8716</a></td><td class="pe-0 text-gray-600 text-end min-w-200px"> 10 Mar 2021, 5:20 pm </td></tr><tr><td class="min-w-400px"><a href="#" class="fw-bold text-gray-800 text-hover-primary me-1">Melody Macy</a>has made payment to <a href="#" class="fw-bold text-gray-800 text-hover-primary">2516-2975</a></td><td class="pe-0 text-gray-600 text-end min-w-200px"> 24 Jun 2021, 5:30 pm </td></tr><tr><td class="min-w-400px"> Invoice <a href="#" class="fw-bold text-gray-800 text-hover-primary me-1">4464-4371</a>is <span class="badge badge-light-info">In Progress</span></td><td class="pe-0 text-gray-600 text-end min-w-200px"> 21 Feb 2021, 5:30 pm </td></tr></tbody></table></div></div>',2),ut=[mt];function bt(s,i,m,u,b,w){return x(),v("div",it,ut)}const gt=h(ct,[["render",bt]]),pt=_({name:"kt-invoices",props:{cardClasses:String},components:{Datatable:P},setup(){const s=p([{columnName:"Order id",columnLabel:"order",sortEnabled:!1},{columnName:"Amount",columnLabel:"amount",sortEnabled:!1},{columnName:"Status",columnLabel:"status",sortEnabled:!1},{columnName:"Date",columnLabel:"date",sortEnabled:!1},{columnName:"Invoice",columnLabel:"invoice",sortEnabled:!1}]),i=p([{date:"Nov 01, 2020",order:"102445788",details:"Darknight transparency  36 Icons Pack",color:"success",amount:"$38.00",status:{label:"Pending",state:"warning"}},{date:"Oct 24, 2020",order:"423445721",details:"Seller Fee",color:"danger",amount:"$-2.60",status:{label:"Pending",state:"warning"}},{date:"Oct 08, 2020",order:"312445984",details:"Cartoon Mobile Emoji Phone Pack",color:"success",amount:"$76.00",status:{label:"Pending",state:"warning"}},{date:"Sep 15, 2020",order:"312445984",details:"Iphone 12 Pro Mockup  Mega Bundle",color:"success",amount:"$5.00",status:{label:"Pending",state:"warning"}},{date:"May 30, 2020",order:"523445943",details:"Seller Fee",color:"danger",amount:"$-1.30",status:{label:"Pending",state:"warning"}},{date:"Apr 22, 2020",order:"231445943",details:"Parcel Shipping / Delivery Service App",color:"success",amount:"$204.00",status:{label:"Pending",state:"warning"}},{date:"Feb 09, 2020",order:"426445943",details:"Visual Design Illustration",color:"success",amount:"$31.00",status:{label:"Pending",state:"warning"}},{date:"Nov 01, 2020",order:"984445943",details:"Abstract Vusial Pack",color:"success",amount:"$52.00",status:{label:"Pending",state:"warning"}},{date:"Jan 04, 2020",order:"324442313",details:"Seller Fee",color:"danger",amount:"$-0.80",status:{label:"Pending",state:"warning"}}]),m=p([{date:"May 30, 2020",order:"523445943",details:"Seller Fee",color:"danger",amount:"$-1.30",status:{label:"Pending",state:"warning"}},{date:"Apr 22, 2020",order:"231445943",details:"Parcel Shipping / Delivery Service App",color:"success",amount:"$204.00",status:{label:"Pending",state:"warning"}},{date:"Feb 09, 2020",order:"426445943",details:"Visual Design Illustration",color:"success",amount:"$31.00",status:{label:"Pending",state:"warning"}},{date:"Nov 01, 2020",order:"984445943",details:"Abstract Vusial Pack",color:"success",amount:"$52.00",status:{label:"Pending",state:"warning"}},{date:"Jan 04, 2020",order:"324442313",details:"Seller Fee",color:"danger",amount:"$-0.80",status:{label:"Pending",state:"warning"}},{date:"Nov 01, 2020",order:"102445788",details:"Darknight transparency  36 Icons Pack",color:"success",amount:"$38.00",status:{label:"Pending",state:"warning"}},{date:"Oct 24, 2020",order:"423445721",details:"Seller Fee",color:"danger",amount:"$-2.60",status:{label:"Pending",state:"warning"}},{date:"Oct 08, 2020",order:"312445984",details:"Cartoon Mobile Emoji Phone Pack",color:"success",amount:"$76.00",status:{label:"Pending",state:"warning"}},{date:"Sep 15, 2020",order:"312445984",details:"Iphone 12 Pro Mockup  Mega Bundle",color:"success",amount:"$5.00",status:{label:"Pending",state:"warning"}}]),u=p([{date:"Feb 09, 2020",order:"426445943",details:"Visual Design Illustration",color:"success",amount:"$31.00",status:{label:"Successful",state:"success"}},{date:"Nov 01, 2020",order:"984445943",details:"Abstract Vusial Pack",color:"success",amount:"$52.00",status:{label:"Pending",state:"warning"}},{date:"Jan 04, 2020",order:"324442313",details:"Seller Fee",color:"danger",amount:"$-0.80",status:{label:"Pending",state:"warning"}},{date:"Sep 15, 2020",order:"312445984",details:"Iphone 12 Pro Mockup  Mega Bundle",color:"success",amount:"$5.00",status:{label:"Pending",state:"warning"}},{date:"Nov 01, 2020",order:"102445788",details:"Darknight transparency  36 Icons Pack",color:"success",amount:"$38.00",status:{label:"Pending",state:"warning"}},{date:"Oct 24, 2020",order:"423445721",details:"Seller Fee",color:"danger",amount:"$-2.60",status:{label:"Pending",state:"warning"}},{date:"Oct 08, 2020",order:"312445984",details:"Cartoon Mobile Emoji Phone Pack",color:"success",amount:"$76.00",status:{label:"Pending",state:"warning"}},{date:"May 30, 2020",order:"523445943",details:"Seller Fee",color:"danger",amount:"$-1.30",status:{label:"Pending",state:"warning"}},{date:"Apr 22, 2020",order:"231445943",details:"Parcel Shipping / Delivery Service App",color:"success",amount:"$204.00",status:{label:"Pending",state:"warning"}}]),b=p([{date:"Nov 01, 2020",order:"102445788",details:"Darknight transparency  36 Icons Pack",color:"success",amount:"$38.00",status:{label:"Pending",state:"warning"}},{date:"Oct 24, 2020",order:"423445721",details:"Seller Fee",color:"danger",amount:"$-2.60",status:{label:"Pending",state:"warning"}},{date:"Nov 01, 2020",order:"102445788",details:"Darknight transparency  36 Icons Pack",color:"success",amount:"$38.00",status:{label:"Pending",state:"warning"}},{date:"Oct 24, 2020",order:"423445721",details:"Seller Fee",color:"danger",amount:"$-2.60",status:{label:"Pending",state:"warning"}},{date:"Feb 09, 2020",order:"426445943",details:"Visual Design Illustration",color:"success",amount:"$31.00",status:{label:"Pending",state:"warning"}},{date:"Nov 01, 2020",order:"984445943",details:"Abstract Vusial Pack",color:"success",amount:"$52.00",status:{label:"Pending",state:"warning"}},{date:"Jan 04, 2020",order:"324442313",details:"Seller Fee",color:"danger",amount:"$-0.80",status:{label:"Pending",state:"warning"}},{date:"Oct 08, 2020",order:"312445984",details:"Cartoon Mobile Emoji Phone Pack",color:"success",amount:"$76.00",status:{label:"Pending",state:"warning"}},{date:"Oct 08, 2020",order:"312445984",details:"Cartoon Mobile Emoji Phone Pack",color:"success",amount:"$76.00",status:{label:"Pending",state:"warning"}}]);return{tableHeader:s,tableData1:i,tableData2:m,tableData3:u,tableData4:b}}}),_t=t("div",{class:"card-header border-0"},[t("div",{class:"card-title"},[t("h2",null,"Invoices")]),t("div",{class:"card-toolbar m-0"},[t("ul",{class:"nav nav-stretch fs-5 fw-semobold nav-line-tabs nav-line-tabs-2x border-transparent",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("a",{id:"kt_referrals_year_tab",class:"nav-link text-active-primary active","data-bs-toggle":"tab",role:"tab",href:"#kt_customer_details_invoices_1"}," This Year ")]),t("li",{class:"nav-item",role:"presentation"},[t("a",{id:"kt_referrals_2019_tab",class:"nav-link text-active-primary ms-3","data-bs-toggle":"tab",role:"tab",href:"#kt_customer_details_invoices_2"}," 2020 ")]),t("li",{class:"nav-item",role:"presentation"},[t("a",{id:"kt_referrals_2018_tab",class:"nav-link text-active-primary ms-3","data-bs-toggle":"tab",role:"tab",href:"#kt_customer_details_invoices_3"}," 2019 ")]),t("li",{class:"nav-item",role:"presentation"},[t("a",{id:"kt_referrals_2017_tab",class:"nav-link text-active-primary ms-3","data-bs-toggle":"tab",role:"tab",href:"#kt_customer_details_invoices_4"}," 2018 ")])])])],-1),ht={class:"card-body pt-0"},vt={id:"kt_referred_users_tab_content",class:"tab-content"},xt={id:"kt_customer_details_invoices_1",class:"py-0 tab-pane fade active show",role:"tabpanel"},wt=t("button",{class:"btn btn-sm btn-light btn-active-light-primary"}," Download ",-1),yt={id:"kt_customer_details_invoices_2",class:"py-0 tab-pane fade",role:"tabpanel"},ft=t("button",{class:"btn btn-sm btn-light btn-active-light-primary"}," Download ",-1),$t={id:"kt_customer_details_invoices_3",class:"py-0 tab-pane fade",role:"tabpanel"},kt=t("button",{class:"btn btn-sm btn-light btn-active-light-primary"}," Download ",-1),Pt={id:"kt_customer_details_invoices_4",class:"py-0 tab-pane fade",role:"tabpanel"},St=t("button",{class:"btn btn-sm btn-light btn-active-light-primary"}," Download ",-1);function Dt(s,i,m,u,b,w){const l=d("Datatable");return x(),v("div",{class:c(`card pt-2 ${s.cardClasses}`)},[_t,t("div",ht,[t("div",vt,[t("div",xt,[o(l,{header:s.tableHeader,data:s.tableData1,"items-per-page":5,"items-per-page-dropdown-enabled":!1},{order:a(({row:e})=>[r(n(e.order),1)]),amount:a(({row:e})=>[t("span",{class:c(`text-${e.color}`)},n(e.amount),3)]),status:a(({row:e})=>[t("span",{class:c(`badge badge-light-${e.status.state}`)},n(e.status.label),3)]),date:a(({row:e})=>[r(n(e.date),1)]),invoice:a(()=>[wt]),_:1},8,["header","data"])]),t("div",yt,[o(l,{header:s.tableHeader,data:s.tableData2,"items-per-page":5,"items-per-page-dropdown-enabled":!1},{order:a(({row:e})=>[r(n(e.order),1)]),amount:a(({row:e})=>[t("span",{class:c(`text-${e.color}`)},n(e.amount),3)]),status:a(({row:e})=>[t("span",{class:c(`badge badge-light-${e.status.state}`)},n(e.status.label),3)]),date:a(({row:e})=>[r(n(e.date),1)]),invoice:a(()=>[ft]),_:1},8,["header","data"])]),t("div",$t,[o(l,{header:s.tableHeader,data:s.tableData3,"items-per-page":5,"items-per-page-dropdown-enabled":!1},{order:a(({row:e})=>[r(n(e.order),1)]),amount:a(({row:e})=>[t("span",{class:c(`text-${e.color}`)},n(e.amount),3)]),status:a(({row:e})=>[t("span",{class:c(`badge badge-light-${e.status.state}`)},n(e.status.label),3)]),date:a(({row:e})=>[r(n(e.date),1)]),invoice:a(()=>[kt]),_:1},8,["header","data"])]),t("div",Pt,[o(l,{header:s.tableHeader,data:s.tableData4,"items-per-page":5,"items-per-page-dropdown-enabled":!1},{order:a(({row:e})=>[r(n(e.order),1)]),amount:a(({row:e})=>[t("span",{class:c(`text-${e.color}`)},n(e.amount),3)]),status:a(({row:e})=>[t("span",{class:c(`badge badge-light-${e.status.state}`)},n(e.status.label),3)]),date:a(({row:e})=>[r(n(e.date),1)]),invoice:a(()=>[St]),_:1},8,["header","data"])])])])],2)}const It=h(pt,[["render",Dt]]),At=_({name:"kt-summary",components:{UserMenu:$},setup(){return{getAssetPath:f}}}),Mt={class:"card card-flush mb-0",id:"kt_view_summary","data-kt-sticky":"true","data-kt-sticky-name":"view-subscription-summary","data-kt-sticky-offset":"{default: false, lg: '200px'}","data-kt-sticky-width":"{lg: '250px', xl: '300px'}","data-kt-sticky-left":"auto","data-kt-sticky-top":"150px","data-kt-sticky-animation":"false","data-kt-sticky-zindex":"95"},Nt={class:"card-header"},Bt=t("div",{class:"card-title"},[t("h2",null,"Summary")],-1),Vt={class:"card-toolbar"},Et={href:"#",class:"btn btn-sm btn-light btn-icon","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end"},Ft={class:"card-body pt-0 fs-6"},Ct={class:"mb-7"},Ot={class:"d-flex align-items-center"},Tt={class:"symbol symbol-60px symbol-circle me-3"},Ut=["src"],jt=t("div",{class:"d-flex flex-column"},[t("a",{href:"#",class:"fs-4 fw-bold text-gray-900 text-hover-primary me-2"},"Sean Bean"),t("a",{href:"#",class:"fw-semobold text-gray-600 text-hover-primary"},"sean@dellito.com")],-1),Yt=y('<div class="separator separator-dashed mb-7"></div><div class="mb-7"><h5 class="mb-4">Product details</h5><div class="mb-0"><span class="badge badge-light-info me-2">Basic Bundle</span><span class="fw-semobold text-gray-600">$149.99 / Year</span></div></div><div class="separator separator-dashed mb-7"></div>',3),Ht={class:"mb-10"},Lt=t("h5",{class:"mb-4"},"Payment Details",-1),Jt={class:"mb-0"},zt={class:"fw-semobold text-gray-600 d-flex align-items-center"},Kt=["src"],qt=t("div",{class:"fw-semobold text-gray-600"},"Expires Dec 2024",-1),Qt=y('<div class="separator separator-dashed mb-7"></div><div class="mb-10"><h5 class="mb-4">Subscription Details</h5><table class="table fs-6 fw-semobold gs-0 gy-2 gx-2"><tr class=""><td class="text-gray-400">Subscription ID:</td><td class="text-gray-800">sub_4567_8765</td></tr><tr class=""><td class="text-gray-400">Started:</td><td class="text-gray-800">15 Apr 2021</td></tr><tr class=""><td class="text-gray-400">Status:</td><td><span class="badge badge-light-success">Active</span></td></tr><tr class=""><td class="text-gray-400">Next Invoice:</td><td class="text-gray-800">15 Apr 2022</td></tr></table></div>',2),Rt={class:"mb-0"};function Gt(s,i,m,u,b,w){const l=d("KTIcon"),e=d("UserMenu"),g=d("router-link");return x(),v("div",Mt,[t("div",Nt,[Bt,t("div",Vt,[t("a",Et,[o(l,{"icon-name":"dots-horizontal","icon-class":"fs-3"})]),o(e)])]),t("div",Ft,[t("div",Ct,[t("div",Ot,[t("div",Tt,[t("img",{alt:"Pic",src:s.getAssetPath("media/avatars/300-5.jpg")},null,8,Ut)]),jt])]),Yt,t("div",Ht,[Lt,t("div",Jt,[t("div",zt,[r(" Mastercard "),t("img",{src:s.getAssetPath("media/svg/card-logos/mastercard.svg"),class:"w-35px ms-2",alt:""},null,8,Kt)]),qt])]),Qt,t("div",Rt,[o(g,{to:"/subscriptions/add",class:"btn btn-primary",id:"kt_subscriptions_create_button"},{default:a(()=>[r(" Edit Subscription ")]),_:1})])])])}const Wt=h(At,[["render",Gt]]),Xt=_({name:"kt-view-subscription",components:{ViewDetails:dt,Events:gt,Invoices:It,ViewSummary:Wt}}),Zt={class:"d-flex flex-column flex-lg-row"},te={class:"flex-lg-row-fluid me-lg-15 order-2 order-lg-1 mb-10 mb-lg-0"},ee={class:"flex-column flex-lg-row-auto w-lg-250px w-xl-300px mb-10 order-1 order-lg-2"};function ae(s,i,m,u,b,w){const l=d("ViewDetails"),e=d("Events"),g=d("Invoices"),k=d("ViewSummary");return x(),v("div",Zt,[t("div",te,[o(l),o(e),o(g)]),t("div",ee,[o(k)])])}const le=h(Xt,[["render",ae]]);export{le as default};
