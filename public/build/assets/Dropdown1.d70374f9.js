import{d as l,z as n,_ as d,f as i,j as s,A as a,ag as r,au as c,o as m}from"./app.6cf530fe.js";const u=l({name:"dropdown-1",components:{},setup(){return{data:n({status:"1",author:!0,customer:!0,notifications:!0})}}}),p={class:"menu menu-sub menu-sub-dropdown w-250px w-md-300px","data-kt-menu":"true"},h=s("div",{class:"px-7 py-5"},[s("div",{class:"fs-5 text-dark fw-bold"},"Filter Options")],-1),f=s("div",{class:"separator border-gray-200"},null,-1),b={class:"px-7 py-5"},_={class:"mb-10"},k=s("label",{class:"form-label fw-semobold"},"Status:",-1),v=s("option",{label:"Approved",value:"1"},"Approved",-1),y=s("option",{label:"Pending",value:"2"},"Pending",-1),w=s("option",{label:"In Process",value:"3"},"In Process",-1),g=s("option",{label:"Rejected",value:"4"},"Rejected",-1),x=[v,y,w,g],A={class:"mb-10"},V=s("label",{class:"form-label fw-semobold"},"Member Type:",-1),j={class:"d-flex"},P={class:"form-check form-check-sm form-check-custom form-check-solid me-5"},U=s("span",{class:"form-check-label user-select-none"}," Author ",-1),$={class:"form-check form-check-sm form-check-custom form-check-solid"},B=s("span",{class:"form-check-label user-select-none"}," Customer ",-1),C={class:"mb-10"},D=s("label",{class:"form-label fw-semobold"},"Notifications:",-1),M={class:"form-check form-switch form-switch-sm form-check-custom form-check-solid"},R={class:"form-check-label"},E=s("span",{class:"form-check-label user-select-none"},"Enabled",-1),I=s("div",{class:"d-flex justify-content-end"},[s("button",{type:"reset",class:"btn btn-sm btn-light btn-active-light-primary me-2","data-kt-menu-dismiss":"true"}," Reset "),s("button",{type:"submit",class:"btn btn-sm btn-primary","data-kt-menu-dismiss":"true"}," Apply ")],-1);function N(e,t,S,z,F,O){return m(),i("div",p,[h,f,s("div",b,[s("div",_,[k,s("div",null,[a(s("select",{class:"form-select form-select-solid select2-hidden-accessible","onUpdate:modelValue":t[0]||(t[0]=o=>e.data.status=o)},x,512),[[r,e.data.status]])])]),s("div",A,[V,s("div",j,[s("label",P,[a(s("input",{class:"form-check-input",type:"checkbox",value:"1","onUpdate:modelValue":t[1]||(t[1]=o=>e.data.author=o)},null,512),[[c,e.data.author]]),U]),s("label",$,[a(s("input",{class:"form-check-input",type:"checkbox",value:"2","onUpdate:modelValue":t[2]||(t[2]=o=>e.data.customer=o)},null,512),[[c,e.data.customer]]),B])])]),s("div",C,[D,s("div",M,[s("label",R,[a(s("input",{class:"form-check-input",type:"checkbox",name:"notifications","onUpdate:modelValue":t[3]||(t[3]=o=>e.data.notifications=o)},null,512),[[c,e.data.notifications]]),E])])]),I])])}const q=d(u,[["render",N]]);export{q as D};
