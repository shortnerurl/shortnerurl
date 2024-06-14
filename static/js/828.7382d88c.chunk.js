"use strict";(self.webpackChunkurlshortner_frontend=self.webpackChunkurlshortner_frontend||[]).push([[828],{828:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(43),a=r(543),s=r(96),i=r(216),l=r(25),o=r(579);const c=function(e){let{placeholder:t,button:r,errorEnterUrl:a,errorValidUrl:s,description:c}=e;const[d,h]=(0,n.useState)(""),[u,p]=(0,n.useState)(""),[f,U]=(0,n.useState)(!1),b=(0,i.Zp)(),y=e=>{try{return new URL(e),!0}catch(t){return!1}},v=async e=>{try{const t=await(0,l.Y)(e);if(!t)return void p("Unable to create shortId. Please try again later.");b("/shortener?shortId=".concat(t.shortId,"&url=").concat(encodeURIComponent(e)))}catch(u){return void p("Unable to create shortId. Please try again later.")}};return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"input-container",children:[(0,o.jsx)("input",{type:"text",placeholder:t,value:d,className:"url-input",onChange:e=>h(e.target.value)}),(0,o.jsx)("button",{onClick:async()=>{d?y(d)?(p(""),U(!0),await v(d),U(!1)):p(s):p(a)},disabled:f,children:r})]}),u&&(0,o.jsx)("p",{className:"error",children:u}),f&&(0,o.jsx)("p",{children:"shortId is creating..."}),(0,o.jsx)("p",{style:{width:"67%",alignSelf:"center",display:"inline-block",textAlign:"center"},children:c})]})};const d=function(e){let{features:t}=e;return(0,o.jsx)("section",{className:"features",children:Object.keys(t).map((e=>(0,o.jsxs)("div",{className:"feature",children:[(0,o.jsx)("h3",{children:t[e].title}),(0,o.jsx)("p",{children:t[e].description})]},e)))})};const h=function(){return(0,o.jsxs)("div",{className:"App",children:[(0,o.jsx)(s.A,{title:a.n.title}),(0,o.jsx)(c,{placeholder:a.n.placeholder,button:a.n.button,errorEnterUrl:a.n.errorEnterUrl,errorValidUrl:a.n.errorValidUrl,description:a.n.description}),(0,o.jsx)(d,{features:a.n.features})]})}},96:(e,t,r)=>{r.d(t,{A:()=>a});r(43);var n=r(579);const a=function(e){let{title:t}=e;return(0,n.jsx)("header",{className:"App-header",children:(0,n.jsx)("h1",{children:t})})}},25:(e,t,r)=>{r.d(t,{E:()=>i,Y:()=>s});var n=r(213);const a="https://f35c46a5-f3ab-406f-b150-03bb8fc1b8af.e1-us-east-azure.choreoapps.dev",s=async e=>{try{return(await n.A.post("".concat(a,"/").concat("url-shortener"),{uri:e})).data}catch(t){return null}},i=async e=>{try{const t=await n.A.get("".concat(a,"/").concat(e));return t.data&&t.data.data.redirectURL?(window.location.href=t.data.data.redirectURL,!0):null}catch(t){return null}}},543:(e,t,r)=>{r.d(t,{n:()=>n});const n={title:"URL Shortener by Shivam",placeholder:"Enter the link here",button:"Shorten URL",errorEnterUrl:"Please enter a URL",errorValidUrl:"Please enter a valid URL",description:"ShortURL is a free tool to shorten URLs and generate short links. URL shortener allows to create a shortened link making it easy to share.",features:{easy:{title:"Easy",description:"ShortURL is easy and fast, enter the long link to get your shortened link"},shortened:{title:"Shortened",description:"Use any link, no matter what size, ShortURL always shortens"},secure:{title:"Secure",description:"It is fast and secure, our service has HTTPS protocol and data encryption"},statistics:{title:"Statistics",description:"Check the number of clicks that your shortened URL received"},reliable:{title:"Reliable",description:"All links that try to disseminate spam, viruses and malware are deleted"},devices:{title:"Devices",description:"Compatible with smartphones, tablets and desktop"}},invalidShortId:"Invalid shortId. please provide a valid shortId.",we_are_unable_to_find_shortUrl:"We are unable to find the requested shortUrl"}}}]);
//# sourceMappingURL=828.7382d88c.chunk.js.map