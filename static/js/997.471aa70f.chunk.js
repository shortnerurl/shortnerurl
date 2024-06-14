"use strict";(self.webpackChunkurlshortner_frontend=self.webpackChunkurlshortner_frontend||[]).push([[997],{997:(t,e,r)=>{r.r(e),r.d(e,{default:()=>A});var o=r(43);const n={App:"CreateShort_App__fAnQO","App-header":"CreateShort_App-header__hES9P","url-shortener":"CreateShort_url-shortener__EsPNO","input-container":"CreateShort_input-container__9Qg-W","url-details":"CreateShort_url-details__j+0Hx","url-actions":"CreateShort_url-actions__3aVHH",actionbutton:"CreateShort_actionbutton__OLJx6"},s="URL Shortener by Shivam",i="Your shortened URL",l="https://shorturl.at/wEZ2Z",a="Copy URL",c="Total of clicks of your short URL",h="Shorten another URL",d="https://www.cm.dfd",u="Copy the short link and share it in messages, texts, posts, websites, and other locations.",p="* Short URLs that do not have at least one click per month are disabled";var x=r(475),b=r(316),g=r(450);const j=o.createRef();var y=r(973),_=r(720),f=r(579);const m=function(t){let{shortenedUrlTitle:e,placeholder:r,buttonCopyUrl:o,longUrl:s,description:i}=t;const[l]=(0,x.ok)(),a=l.get("shortId"),c=l.get("url"),h=window.location.origin,d="".concat(h,"/").concat(a);return(0,f.jsxs)("div",{className:n.urlShortener,children:[(0,f.jsx)("h2",{children:e}),(0,f.jsx)("p",{children:i}),(0,f.jsxs)("div",{className:n.inputContainer,children:[(0,f.jsx)("input",{type:"text",value:d,readOnly:!0}),(0,f.jsx)("button",{onClick:()=>{(async t=>{try{await navigator.clipboard.writeText(t),alert("Copied to clipboard!")}catch(e){console.error("Failed to copy:",e)}})(d)},id:n.actionbutton,style:{borderRight:"1px solid black"},children:(0,f.jsx)(y.I8d,{color:"#000"})}),(0,f.jsx)("button",{onClick:()=>{(async t=>{const e=document.getElementById(t);if(null!==e)try{const t=await(0,b.$E)(e),r=(new Date).toISOString().replace(/[:.-]/g,""),o="shortnerUrl-".concat(r,".png");(0,g.saveAs)(t,o)}catch(r){console.error("Failed to convert div to image",r)}})("myQRCOde-123456")},id:n.actionbutton,style:{borderTopRightRadius:"4px",borderBottomRightRadius:"4px"},children:(0,f.jsx)(_.mCe,{})})]}),(0,f.jsxs)("p",{children:["Long URL: ",(0,f.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",style:{color:"#a7b8eb"},children:c})]})]})};const C=function(t){let{note:e}=t;return(0,f.jsx)("div",{className:n.urlDetails,children:(0,f.jsx)("p",{children:e})})};var v=r(216);function w(t){let{buttonClicks:e,buttonShortenAnother:r}=t;const o=(0,v.Zp)();return(0,f.jsxs)("div",{className:n.urlActions,children:[(0,f.jsx)("button",{children:e}),(0,f.jsx)("button",{onClick:()=>{o("/")},style:{marginLeft:"1%"},children:r})]})}const k=o.memo(w);var S=r(96),U=r(245);const R=t=>{let{shortIdUrl:e}=t;return(0,f.jsx)("div",{style:{background:"white",padding:"16px",display:"inline-block",margin:"10px",height:"auto",maxWidth:180,width:"100%"},id:"myQRCOde-123456",children:(0,f.jsx)(U.Ay,{size:256,style:{height:"auto",maxWidth:"100%",width:"100%"},value:e,viewBox:"0 0 256 256",ref:j})})};const A=function(){const[t]=(0,x.ok)(),e=t.get("shortId"),r=t.get("url");(0,o.useEffect)((()=>{e&&r||(window.location.href="/")}),[e,r]);const b=window.location.origin,g="".concat(b,"/").concat(e);return(0,f.jsxs)("div",{className:n.App,children:[(0,f.jsx)(S.A,{title:s}),(0,f.jsx)(R,{shortIdUrl:g}),(0,f.jsx)(m,{shortenedUrlTitle:i,placeholder:l,buttonCopyUrl:a,longUrl:d,description:u}),(0,f.jsx)(C,{note:p}),(0,f.jsx)(k,{buttonClicks:c,buttonShortenAnother:h})]})}},96:(t,e,r)=>{r.d(e,{A:()=>n});r(43);var o=r(579);const n=function(t){let{title:e}=t;return(0,o.jsx)("header",{className:"App-header",children:(0,o.jsx)("h1",{children:e})})}}}]);
//# sourceMappingURL=997.471aa70f.chunk.js.map