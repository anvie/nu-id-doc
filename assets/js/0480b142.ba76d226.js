"use strict";(self.webpackChunknu_iam_doc=self.webpackChunknu_iam_doc||[]).push([[836],{3905:(a,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>k});var t=e(7294);function i(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function r(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function s(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){i(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function l(a,n){if(null==a)return{};var e,t,i=function(a,n){if(null==a)return{};var e,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||(i[e]=a[e]);return i}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(i[e]=a[e])}return i}var u=t.createContext({}),o=function(a){var n=t.useContext(u),e=n;return a&&(e="function"==typeof a?a(n):s(s({},n),a)),e},d=function(a){var n=o(a.components);return t.createElement(u.Provider,{value:n},a.children)},g="mdxType",p={inlineCode:"code",wrapper:function(a){var n=a.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(a,n){var e=a.components,i=a.mdxType,r=a.originalType,u=a.parentName,d=l(a,["components","mdxType","originalType","parentName"]),g=o(e),m=i,k=g["".concat(u,".").concat(m)]||g[m]||p[m]||r;return e?t.createElement(k,s(s({ref:n},d),{},{components:e})):t.createElement(k,s({ref:n},d))}));function k(a,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof a||i){var r=e.length,s=new Array(r);s[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=a,l[g]="string"==typeof a?a:i,s[1]=l;for(var o=2;o<r;o++)s[o]=e[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,e)}m.displayName="MDXCreateElement"},3584:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=e(7462),i=(e(7294),e(3905));const r={sidebar_position:5,title:"FAQ"},s=void 0,l={unversionedId:"faq",id:"faq",title:"FAQ",description:"Apa itu IAM?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/anvie/nu-id-doc/blob/main/docs/faq.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/integration/Siskader/api-index"}},u={},o=[{value:"Apa itu IAM?",id:"apa-itu-iam",level:2},{value:"Apa bedanya IAM dengan Single Identity?",id:"apa-bedanya-iam-dengan-single-identity",level:2}],d={toc:o};function g(a){let{components:n,...e}=a;return(0,i.kt)("wrapper",(0,t.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"apa-itu-iam"},"Apa itu IAM?"),(0,i.kt)("p",null,"IAM atau ",(0,i.kt)("em",{parentName:"p"},"Identity and Access Management"),", adalah konsep yang digunakan untuk mengelola akses dan identitas pengguna pada suatu sistem atau aplikasi. "),(0,i.kt)("p",null,"IAM adalah tentang pengaturan hak akses yang diberikan kepada pengguna agar hanya bisa mengakses informasi atau sumber daya dalam sistem sesuai dengan wewenangnya masing-masing. Dalam konsep IAM, identitas pengguna dapat dikelola, dipantau, dan dikontrol, sehingga hanya pengguna yang sah yang memiliki hak akses pada sistem atau aplikasi tersebut. "),(0,i.kt)("p",null,"Dengan IAM, organisasi dapat memastikan keamanan dan keandalan sistem informasi dan mengurangi risiko pelanggaran atau kebocoran data yang tidak terduga. Dalam bahasa Indonesia, konsep IAM dapat dijelaskan sebagai manajemen identitas dan akses."),(0,i.kt)("h2",{id:"apa-bedanya-iam-dengan-single-identity"},"Apa bedanya IAM dengan Single Identity?"),(0,i.kt)("p",null,"Konsep IAM memiliki kaitan erat dengan single identity dan integrasi ke berbagai macam layanan digital. Single identity atau identitas tunggal adalah konsep yang memungkinkan pengguna untuk menggunakan satu akun atau identitas yang sama untuk mengakses berbagai macam layanan digital yang berbeda. Hal ini membuat pengguna tidak perlu mengingat banyak username dan password untuk setiap layanan. Dengan konsep IAM, identitas pengguna dapat dikelola secara efisien dan terpusat, sehingga memungkinkan pengguna untuk memiliki single identity yang dapat diintegrasikan ke berbagai macam layanan digital yang berbeda."),(0,i.kt)("p",null,"Dalam praktiknya, integrasi ke berbagai macam layanan merupakan hal yang sangat kompleks, IAM merupakan solusi untuk menjembatani masalah ini. Dengan menggunakan layanan IAM yang terpusat, pengguna hanya perlu mengakses satu aplikasi untuk mengelola identitas mereka dan dapat menambahkan layanan digital baru dengan mudah. Hal ini memungkinkan pengguna untuk mengakses berbagai macam aplikasi dan layanan digital yang berbeda dengan melakukan otentikasi hanya satu kali saja. Dengan demikian, konsep IAM menjadi penting dalam konteks integrasi ke berbagai macam layanan digital."))}g.isMDXComponent=!0}}]);