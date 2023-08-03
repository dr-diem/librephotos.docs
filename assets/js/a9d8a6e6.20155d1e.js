"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[7973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=d(n),m=o,h=s["".concat(p,".").concat(m)]||s[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[s]="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={title:" \ud83d\udcc1 Upload",excerpt:"How to uploading photos works as a developer",sidebar_position:6},l=void 0,r={unversionedId:"development/contribution/backend/upload",id:"development/contribution/backend/upload",title:" \ud83d\udcc1 Upload",description:"Endpoints:",source:"@site/docs/development/contribution/backend/upload.md",sourceDirName:"development/contribution/backend",slug:"/development/contribution/backend/upload",permalink:"/docs/development/contribution/backend/upload",draft:!1,editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/docs/development/contribution/backend/upload.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:" \ud83d\udcc1 Upload",excerpt:"How to uploading photos works as a developer",sidebar_position:6},sidebar:"userguide",previous:{title:" \ud83d\uddbc Photo List",permalink:"/docs/development/contribution/backend/photo-list"},next:{title:"\ud83d\udc0b Docker",permalink:"/docs/development/contribution/docker"}},p={},d=[{value:"Endpoints:",id:"endpoints",level:2},{value:"<code>GET /api/exists/&lt;hash&gt;</code>",id:"get-apiexistshash",level:3},{value:"Headers:",id:"headers",level:4},{value:"<code>POST /api/upload/</code>",id:"post-apiupload",level:3},{value:"Form Data:",id:"form-data",level:4},{value:"Headers:",id:"headers-1",level:4},{value:"<code>POST /api/upload/complete/</code>",id:"post-apiuploadcomplete",level:3},{value:"Form Data:",id:"form-data-1",level:4},{value:"Headers:",id:"headers-2",level:4},{value:"<code>GET /api/scanuploadedphotos/</code>",id:"get-apiscanuploadedphotos",level:3}],u={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"endpoints"},"Endpoints:"),(0,o.kt)("h3",{id:"get-apiexistshash"},(0,o.kt)("inlineCode",{parentName:"h3"},"GET /api/exists/<hash>")),(0,o.kt)("p",null,"Checks if a file exists on the server.\nThe hash is calculated by ",(0,o.kt)("inlineCode",{parentName:"p"},"md5 + user_id")),(0,o.kt)("h4",{id:"headers"},"Headers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"Bearer <token>"))),(0,o.kt)("h3",{id:"post-apiupload"},(0,o.kt)("inlineCode",{parentName:"h3"},"POST /api/upload/")),(0,o.kt)("p",null,"Uploads a file in chunks.\nOn the first chunk leave ",(0,o.kt)("inlineCode",{parentName:"p"},"upload_id")," empty, you will get a response with the ",(0,o.kt)("inlineCode",{parentName:"p"},"upload_id")," in the body, which you need to send with the next chunk"),(0,o.kt)("h4",{id:"form-data"},"Form Data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"file")," - The chunk of the file, name is blob"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"upload_id")," - The id of the upload"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user")," - The user id"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"offset")," - The offset of the chunk"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"md5")," - The md5 hash of the chunk (not used yet, you can leave it empty)")),(0,o.kt)("h4",{id:"headers-1"},"Headers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Content-Type")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"multipart/form-data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"Bearer <token>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Content-Range")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"bytes <start>-<end>/<total>"))),(0,o.kt)("h3",{id:"post-apiuploadcomplete"},(0,o.kt)("inlineCode",{parentName:"h3"},"POST /api/upload/complete/")),(0,o.kt)("p",null,"Combines the chunks of a file into a single file and moves it to the upload folder"),(0,o.kt)("h4",{id:"form-data-1"},"Form Data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"upload_id")," - The id of the upload"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user")," - The user id"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"md5")," - Just the md5 hash of whole file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filename")," - The original filename")),(0,o.kt)("h4",{id:"headers-2"},"Headers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Content-Type")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"multipart/form-data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"Bearer <token>"))),(0,o.kt)("h3",{id:"get-apiscanuploadedphotos"},(0,o.kt)("inlineCode",{parentName:"h3"},"GET /api/scanuploadedphotos/")),(0,o.kt)("p",null,"Start a new job to scan all photos in the upload folder"))}c.isMDXComponent=!0}}]);