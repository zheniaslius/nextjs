(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{9551:function(e,s,t){Promise.resolve().then(t.bind(t,5310))},5310:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return b}});var a=t(3827),i=t(4090),l=t(703),r={src:"/_next/static/media/iconmonstr-star-3.5e69a887.svg",height:24,width:24,blurWidth:0,blurHeight:0};let n=e=>{if(!e)return;let s=[];for(let t=0;t<e;t++)s.push((0,a.jsx)(l.default,{src:r,alt:"star",className:"mr-1 text-cyan-700"},t));return s};var u=e=>{let{rating:s}=e;return(0,a.jsx)("div",{className:"flex mb-4 size-4",children:n(s)})},d=e=>{let{name:s,rating:t,description:i,date:l}=e.data;return(0,a.jsxs)("div",{className:"flex flex-col items-start",children:[(0,a.jsx)("h3",{className:"text-xl mb-2",children:s}),(0,a.jsx)("time",{className:"text-sm mb-2",suppressHydrationWarning:!0,children:l}),(0,a.jsx)(u,{rating:t}),(0,a.jsx)("p",{className:"mb-3 text-left",children:i}),(0,a.jsx)("button",{className:"uppercase underline font-semibold text-sm",children:"Read more"}),(0,a.jsx)("hr",{className:"my-5 w-full"})]})},c=e=>{let{data:s}=e;return(0,a.jsxs)("div",{children:[s.map(e=>(0,a.jsx)(d,{data:e},e.id)),(0,a.jsx)("div",{className:"flex justify-start",children:(0,a.jsx)("button",{className:"uppercase underline font-semibold text-sm mb-16",children:"Read all reviews"})})]})},m=t(2670);let o=()=>(0,a.jsx)("span",{className:"text-red-500",children:"This field is required"});var p=e=>{let{register:s,handleSubmit:t,reset:i,formState:{errors:l}}=(0,m.cI)(),{onAdd:r}=e;return(0,a.jsxs)("div",{className:"text-left",children:[(0,a.jsx)("h3",{className:"text-2xl mb-3",children:"Leave a Review"}),(0,a.jsx)("span",{className:"mb-3 inline-block",children:"Your email address will not be published. Required fields are marked *"}),(0,a.jsxs)("form",{onSubmit:t(e=>{r({id:Math.random().toString(),date:new Date("2024-01-26").toLocaleDateString(),...e}),i()}),children:[(0,a.jsxs)("div",{className:"mb-5 ",children:[(0,a.jsx)("textarea",{rows:3,placeholder:"Comment *",className:"w-full p-2 border-2 border-cyan-900 border-opacity-25",...s("description",{required:!0})}),l.description&&(0,a.jsx)(o,{})]}),(0,a.jsxs)("div",{className:"flex mb-5",children:[(0,a.jsxs)("div",{className:"w-full mr-6",children:[(0,a.jsx)("input",{type:"text",placeholder:"Name *",className:"p-2 h-12 w-full border-2 border-cyan-900 border-opacity-25",...s("name",{required:!0})}),l.name&&(0,a.jsx)(o,{})]}),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("input",{type:"text",placeholder:"Email *",className:"w-full p-2 h-12 border-2 border-cyan-900 border-opacity-25",...s("email",{required:!0})}),l.email&&(0,a.jsx)(o,{})]})]}),(0,a.jsx)("input",{type:"text",placeholder:"Phone(optional)",className:"w-full p-2 h-12 border-2 border-cyan-900 border-opacity-25",...s("phone")}),(0,a.jsxs)("label",{className:"text-gray-400 mt-2 inline-block",children:[(0,a.jsx)("input",{type:"checkbox",className:"mr-2"}),"Save my name, email"]}),(0,a.jsx)("div",{className:"mt-8",children:(0,a.jsx)("button",{type:"submit",className:"bg-cyan-800 text-sm uppercase text-white py-2 min-w-[200px] rounded-full ",children:"Post review"})})]})]})},x=e=>{let{reviews:s,addReview:t}=e;return(0,a.jsxs)("div",{className:"bg-slate-100 p-10",children:[(0,a.jsx)(c,{data:s}),(0,a.jsx)(p,{onAdd:t})]})};let h=[{id:"1",name:"John Doe",date:new Date("2024-01-26").toLocaleDateString(),rating:5,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dui in elit gravida bibendum. Donec vitae eleifend eros. Praesent scelerisque urna in tincidunt cursus. Aenean dictum sed lectus sed pulvinar. Sed sed vulputate ipsum. In neque tellus, vehicula a laoreet sed, tempor eget tellus. Nulla fermentum, risus et semper facilisis, ipsum justo pharetra odio, vel malesuada nisi purus eget augue. Nullam ut elit semper, consequat augue in, sollicitudin ex. Pellentesque quis leo gravida, convallis mi eu, feugiat orci. Donec dictum lorem lacinia ipsum feugiat, vitae viverra justo pellentesque. Maecenas ex sem, hendrerit et posuere at, auctor at metus."},{id:"2",name:"John Doe",date:new Date("2024-01-26").toLocaleDateString(),rating:3,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dui in elit gravida bibendum. Donec vitae eleifend eros. Praesent scelerisque urna in tincidunt cursus. Aenean dictum sed lectus sed pulvinar. Sed sed vulputate ipsum. In neque tellus, vehicula a laoreet sed, tempor eget tellus. Nulla fermentum, risus et semper facilisis, ipsum justo pharetra odio, vel malesuada nisi purus eget augue. Nullam ut elit semper, consequat augue in, sollicitudin ex. Pellentesque quis leo gravida, convallis mi eu, feugiat orci. Donec dictum lorem lacinia ipsum feugiat, vitae viverra justo pellentesque. Maecenas ex sem, hendrerit et posuere at, auctor at metus."}];function b(){let[e,s]=(0,i.useState)(h);return(0,a.jsx)(x,{reviews:e,addReview:e=>s(s=>[...s,e])})}}},function(e){e.O(0,[749,31,971,69,744],function(){return e(e.s=9551)}),_N_E=e.O()}]);