"use strict";(self.webpackChunknu_iam_doc=self.webpackChunknu_iam_doc||[]).push([[8082],{3905:(a,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var t=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function u(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var m=t.createContext({}),o=function(a){var e=t.useContext(m),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},d=function(a){var e=o(a.components);return t.createElement(m.Provider,{value:e},a.children)},p="mdxType",k={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},s=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,r=a.originalType,m=a.parentName,d=u(a,["components","mdxType","originalType","parentName"]),p=o(n),s=i,c=p["".concat(m,".").concat(s)]||p[s]||k[s]||r;return n?t.createElement(c,l(l({ref:e},d),{},{components:n})):t.createElement(c,l({ref:e},d))}));function c(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=n.length,l=new Array(r);l[0]=s;var u={};for(var m in e)hasOwnProperty.call(e,m)&&(u[m]=e[m]);u.originalType=a,u[p]="string"==typeof a?a:i,l[1]=u;for(var o=2;o<r;o++)l[o]=n[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3783:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var t=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3,title:"Email"},l=void 0,u={unversionedId:"email",id:"email",title:"Email",description:"Fitur email ini sementara hanya tersedia untuk anggota dan kader NU yang telah terdaftar di Siskader.",source:"@site/docs/email.md",sourceDirName:".",slug:"/email",permalink:"/docs/email",draft:!1,editUrl:"https://github.com/anvie/nu-id-doc/blob/main/docs/email.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Email"},sidebar:"tutorialSidebar",previous:{title:"Gateway",permalink:"/docs/NUSA/nusa-gateway"},next:{title:"API",permalink:"/docs/API/"}},m={},o=[{value:"Alamat Email",id:"alamat-email",level:2},{value:"Mail Client",id:"mail-client",level:2},{value:"Pengaturan Email Client",id:"pengaturan-email-client",level:2}],d={toc:o};function p(a){let{components:e,...n}=a;return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Fitur email ini sementara hanya tersedia untuk anggota dan kader NU yang telah terdaftar di ",(0,i.kt)("a",{parentName:"p",href:"https://siskader.nu.id/"},"Siskader"),".")),(0,i.kt)("p",null,"Setiap pengguna yg terdaftar di NU.ID memiliki identitas yang unik. Identitas ini dapat digunakan untuk mengakses berbagai layanan NU.ID yang sudah terintegrasi."),(0,i.kt)("p",null,"Selain itu NU.ID juga menyediakan sarana untuk komunikasi melalui alamat email dengan domain ",(0,i.kt)("inlineCode",{parentName:"p"},"nu.id"),", alamat email ini merupakan alamat email khusus untuk pengguna NU.ID yang dapat digunakan untuk berkomunikasi, menerima informasi, serta menerima notifikasi khusus dari berbagai layanan yang terintegrasi dengan NU.ID."),(0,i.kt)("h2",{id:"alamat-email"},"Alamat Email"),(0,i.kt)("p",null,"Format alamat email dibagi menjadi beberapa tipe domain:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Untuk pengurus pusat NU (PBNU), domain email yang digunakan adalah ",(0,i.kt)("inlineCode",{parentName:"li"},"pb.nu.id"),", contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"fulan@pb.nu.id"),"."),(0,i.kt)("li",{parentName:"ol"},"Untuk pengurus wilayah NU (PWNU), domain email yang digunakan adalah ",(0,i.kt)("inlineCode",{parentName:"li"},"pw.nu.id"),", contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"fulan@pw.nu.id"),"."),(0,i.kt)("li",{parentName:"ol"},"Untuk pengurus cabang NU (PCNU), domain email yang digunakan adalah ",(0,i.kt)("inlineCode",{parentName:"li"},"pc.nu.id"),", contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"fulan@pc.nu.id"),"."),(0,i.kt)("li",{parentName:"ol"},"Untuk warga NU, domain email yang digunakan adalah ",(0,i.kt)("inlineCode",{parentName:"li"},"mail.nu.id"),", contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"fulan@mail.nu.id"),".")),(0,i.kt)("p",null,"Untuk mendapatkan alamat email khusus ini, pengguna harus memiliki akun NU.ID. Setiap pengguna NU.ID akan mendapatkan alamat email dengan cara terlebih dahulu mengaktifkan fitur tersebut di halaman ",(0,i.kt)("a",{parentName:"p",href:"https://nu.id/dashboard/inbox"},"Akun")," dan klik tombol ",(0,i.kt)("inlineCode",{parentName:"p"},"Aktifkan Email"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Alamat email ini bisa juga digunakan untuk login di NU.ID.")),(0,i.kt)("h2",{id:"mail-client"},"Mail Client"),(0,i.kt)("p",null,"Ada beberapa cara untuk mengakses email NU.ID, yaitu:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Melalui webmail di ",(0,i.kt)("a",{parentName:"li",href:"https://webmail.nu.id"},"https://webmail.nu.id"),"."),(0,i.kt)("li",{parentName:"ol"},"Melalui aplikasi email di perangkat mobile atau desktop.")),(0,i.kt)("h2",{id:"pengaturan-email-client"},"Pengaturan Email Client"),(0,i.kt)("p",null,"Apabila Anda ingin mengakses email melalui perangkat mobile atau desktop, Anda dapat mengatur email client Anda menggunakan informasi berikut:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Server Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Server Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Port"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Incoming Mail Server (IMAP)"),(0,i.kt)("td",{parentName:"tr",align:null},"mailsrv.nu.id"),(0,i.kt)("td",{parentName:"tr",align:null},"993")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Outgoing Mail Server (SMTP)"),(0,i.kt)("td",{parentName:"tr",align:null},"mailsrv.nu.id"),(0,i.kt)("td",{parentName:"tr",align:null},"465")))))}p.isMDXComponent=!0}}]);