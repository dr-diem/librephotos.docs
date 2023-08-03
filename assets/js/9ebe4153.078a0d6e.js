"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[3943],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(r),c=n,b=h["".concat(s,".").concat(c)]||h[c]||m[c]||a;return r?o.createElement(b,i(i({ref:t},u),{},{components:r})):o.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={slug:"2023w31",title:"Development: 2023 - July",authors:["niaz"],tags:["release"]},i=void 0,l={permalink:"/blog/2023w31",editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/blog/2023-08-01-2023w31.md",source:"@site/blog/2023-08-01-2023w31.md",title:"Development: 2023 - July",description:"Upstream:",date:"2023-08-01T00:00:00.000Z",formattedDate:"August 1, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:2.325,hasTruncateMarker:!1,authors:[{name:"Niaz Faridani-Rad",title:"Maintainer of LibrePhotos",url:"https://github.com/derneuere",imageURL:"https://github.com/derneuere.png",key:"niaz"}],frontMatter:{slug:"2023w31",title:"Development: 2023 - July",authors:["niaz"],tags:["release"]},nextItem:{title:"Development: 2023 - June",permalink:"/blog/2023w26"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Upstream:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude80 LibrePhotos: Deprecated redis and redis-rq with django-q2")),(0,n.kt)("p",null,"django-q2 will give us a lot of new possibilities. The most important one is, that the queue will actually be remembered. In the future the queue can be modified and has native options for cron jobs."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude80 LibrePhotos: More settings for face detection and face clustering")),(0,n.kt)("p",null,"There are five new settings, which you can tweak, to make it better fit your dataset. I hope that there will be a couple of people who will try out all the different settings, so that we can find better defaults :)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude80 LibrePhotos: Scanning uploaded photos happens automatically when completed"),(0,n.kt)("li",{parentName:"ul"},"\u2728 Frontend: Load top groups first in PhotoListView"),(0,n.kt)("li",{parentName:"ul"},"\u2728 Frontend: Fetching photoDetails was refactored to RTK"),(0,n.kt)("li",{parentName:"ul"},"\u2728 LibrePhotos: Upgraded all dependencies"),(0,n.kt)("li",{parentName:"ul"},"\u2728 Frontend: Upgraded alot of dependencies"),(0,n.kt)("li",{parentName:"ul"},"\u2728 LibrePhotos: A lot of new and improved translations from the community"),(0,n.kt)("li",{parentName:"ul"},'\ud83d\udd28 Frontend: Fixed videos don\'t play when navigating to "Sharing" - "Shared with you" (...)'),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd28 Frontend: Fixed videos as cover_photos in sharing"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd28 Frontend: Fixed scrolling down leaves empty spaces and invalid page"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd28 Frontend: Fixed bad album alignment on mobile view"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd28 Frontend: Fixed nextcloud import"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd28 LibrePhotos: Fixed people thumbnails"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd28 LibrePhotos: Fixed long running jobs not starting"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd28 LibrePhotos: Fixed reading of exif data from .jxl files")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"New Issues:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc1b Video previews hangs when listing a huge amount of videos (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/970"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc1b Drop-down menu judders (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/965"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc1b Error creating Matpotlib cache (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/907"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc1b Documentation Website Update (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/976"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc1b Sharing high amounts of pictures with other user(s) fails (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/880"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc1b Face training is ineffective (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/879"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Optimize counter tiles on library page for mobile view (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/973"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Add scan progress to library page (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/972"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Allow to upload photos directly to user albums (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/969"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Add Folders as an Photos view (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/968"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Allow remembering credentials on login page (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/924"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Add birthdate and other info for a face (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/922"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Make faces be a possibility in more than one person in case of mistake (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/921"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Remove face when looking at a photo if wrongfully assigned (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/919"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Filter by Video/Photos on main screen (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/918"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Switch to maplibre-gl and map provider (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/912"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Allow users to upload media to shared albums (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/911"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Increase max number of heavyweight workers (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/904"},"Link"),")")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"If you are interested on how I develop this application, you can watch me develop features live on ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.youtube.com/channel/UCZJ2pk2BPKxwbuCV9LWDR0w"},"my channel"))),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sponsoring development:")),(0,n.kt)("p",null,"My work is sponsored by ",(0,n.kt)("strong",{parentName:"p"},"8")," awesome people!"),(0,n.kt)("p",null,"If you like the work I do, then you can support me via ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/sponsors/derneuere"},"GitHub sponsors"))," or via ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.paypal.com/donate/?hosted_button_id=5JWVM2UR4LM96"},"PayPal"))))}m.isMDXComponent=!0}}]);