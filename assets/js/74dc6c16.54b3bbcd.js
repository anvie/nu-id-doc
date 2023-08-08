"use strict";(self.webpackChunknu_iam_doc=self.webpackChunknu_iam_doc||[]).push([[8808],{3905:(t,a,e)=>{e.d(a,{Zo:()=>k,kt:()=>g});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),u=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},k=function(t){var a=u(t.components);return n.createElement(d.Provider,{value:a},t.children)},o="mdxType",m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),o=u(e),s=r,g=o["".concat(d,".").concat(s)]||o[s]||m[s]||l;return e?n.createElement(g,i(i({ref:a},k),{},{components:e})):n.createElement(g,i({ref:a},k))}));function g(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=s;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=t,p[o]="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=e[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}s.displayName="MDXCreateElement"},491:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=e(7462),r=(e(7294),e(3905));const l={id:"qrauth",hide_title:!0,sidebar_label:"QRAuth",sidebar_position:3},i="QRAuth",p={unversionedId:"API/qrauth",id:"API/qrauth",title:"QRAuth",description:"QRAuth adalah metode otentikasi yang menggunakan QR Code. Metode ini memungkinkan pengguna untuk melakukan login ke berbagai layanan secara cepat dan mudah dengan cukup memindai QR Code yang ditampilkan di layar layanan menggunakan aplikasi NU Online.",source:"@site/docs/API/QRAuth.md",sourceDirName:"API",slug:"/API/qrauth",permalink:"/docs/API/qrauth",draft:!1,editUrl:"https://github.com/anvie/nu-id-doc/blob/main/docs/API/QRAuth.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"qrauth",hide_title:!0,sidebar_label:"QRAuth",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"OAuth",permalink:"/docs/API/oauth"},next:{title:"User",permalink:"/docs/API/user"}},d={},u=[{value:"API Endpoint",id:"api-endpoint",level:2},{value:"QR Auth",id:"qr-auth",level:3},{value:"Authenticate",id:"authenticate",level:3}],k={toc:u};function o(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"qrauth"},"QRAuth"),(0,r.kt)("p",null,"QRAuth adalah metode otentikasi yang menggunakan QR Code. Metode ini memungkinkan pengguna untuk melakukan login ke berbagai layanan secara cepat dan mudah dengan cukup memindai QR Code yang ditampilkan di layar layanan menggunakan aplikasi ",(0,r.kt)("a",{parentName:"p",href:"https://app.nu.or.id/"},"NU Online"),"."),(0,r.kt)("h2",{id:"api-endpoint"},"API Endpoint"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Semua endpoint API berikut dapat diakses menggunakan base URL ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.nu.id"),", NU.ID menggunakan versioning API dengan format ",(0,r.kt)("inlineCode",{parentName:"p"},"v{version-number}"),". Saat ini versi API yang digunakan adalah ",(0,r.kt)("inlineCode",{parentName:"p"},"v1"),". Sehingga base URL untuk API adalah ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.nu.id/v1"),". Contoh untuk mengakses ",(0,r.kt)("inlineCode",{parentName:"p"},"/qrAuth")," adalah ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.nu.id/v1/qrAuth"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Deskripsi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#/qr-auth"},"/qrAuth")),(0,r.kt)("td",{parentName:"tr",align:null},"Mendapatkan ID sesi untuk QR-code authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#authenticate"},"/authenticate")),(0,r.kt)("td",{parentName:"tr",align:null},"Mendapatkan access token dan refresh token menggunakan kunci privat pengguna")))),(0,r.kt)("h3",{id:"qr-auth"},"QR Auth"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"/qrAuth")),(0,r.kt)("p",null,"Endpoint ini digunakan untuk mendapatkan ID sesi, biasanya digunakan untuk mengotentikasi pengguna menggunakan kode QR."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method:")," POST"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameter:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Deskripsi"),(0,r.kt)("th",{parentName:"tr",align:null},"Diperlukan"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientId"),(0,r.kt)("td",{parentName:"tr",align:null},"ID aplikasi client"),(0,r.kt)("td",{parentName:"tr",align:null},"Ya")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonce"),(0,r.kt)("td",{parentName:"tr",align:null},"String acak untuk menjaga dari penggunaan dobel"),(0,r.kt)("td",{parentName:"tr",align:null},"Ya")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"returnQrCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Jika bernilai ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", maka endpoint akan mengembalikan QR code dalam bentuk base64"),(0,r.kt)("td",{parentName:"tr",align:null},"Opsional, default: false")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Respons:")),(0,r.kt)("p",null,"Contoh respon sukses:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "client-1",\n  "sessionId": "nu.id:1:client-1:YgWIexz3YJwtqD8WQcoBdkDkGsNo5obz:1678550057",\n  "expires": 1678550057\n}\n')),(0,r.kt)("p",null,"Contoh respon sukses apabila parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"returnQrCode")," diset ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "client-1",\n  "sessionId": "nu.id:1:client-1:YgWIexz3YJwtqD8WQcoBdkDkGsNo5obz:1678550057",\n  "expires": 1678550057,\n  "qrcode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA....."\n}\n')),(0,r.kt)("h3",{id:"authenticate"},"Authenticate"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"/authenticate")),(0,r.kt)("p",null,"Endpoint ini digunakan untuk mengotentikasi pengguna menggunakan ID sesi dan tanda tangan digital pengguna.\nID sesi adalah pengenal unik yang dihasilkan oleh endpoint API ",(0,r.kt)("a",{parentName:"p",href:"#qr-auth"},"qrAuth"),"."),(0,r.kt)("p",null,"Tanda tangan digital adalah tanda tangan yang dihasilkan oleh pengguna dengan menggunakan kunci pribadi dan ID sesi. Algoritma yang digunakan adalah ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm"},"ECDSA")," dengan kurva eliptik secp256k1. Untuk demo atau uji coba silahkan gunakan tool ",(0,r.kt)("a",{parentName:"p",href:"http://kjur.github.io/jsrsasign/sample/sample-ecdsa.html"},"jsrsasign"),"."),(0,r.kt)("p",null,"Berikut beberapa library yg bisa digunakan untuk menghasilkan tanda tangan digital berbasis ECDSA dengan kurva eliptik secp256k1:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Bahasa Pemrograman"),(0,r.kt)("th",{parentName:"tr",align:null},"Nama Library"),(0,r.kt)("th",{parentName:"tr",align:null},"Link Download"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C/C++"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenSSL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.openssl.org/"},"https://www.openssl.org/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"PyECC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pypi.org/project/pyecc/"},"https://pypi.org/project/pyecc/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Java / C#"),(0,r.kt)("td",{parentName:"tr",align:null},"Bouncy Castle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.bouncycastle.org/latest_releases.html"},"https://www.bouncycastle.org/latest_releases.html"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"Botan"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://botan.randombit.net/download.html"},"https://botan.randombit.net/download.html"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Golang"),(0,r.kt)("td",{parentName:"tr",align:null},"Golang crypto/ecdsa"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://golang.org/pkg/crypto/ecdsa/"},"https://golang.org/pkg/crypto/ecdsa/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ruby"),(0,r.kt)("td",{parentName:"tr",align:null},"openssl-ecdsa"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/DavidEGrayson/ruby_ecdsa"},"https://github.com/DavidEGrayson/ruby_ecdsa"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("td",{parentName:"tr",align:null},"elliptic"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/elliptic"},"https://www.npmjs.com/package/elliptic"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rust"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust-secp256k1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/RustCrypto/signatures"},"https://github.com/RustCrypto/signatures"))))),(0,r.kt)("p",null,"Endpoint ini akan mengembalikan token akses (",(0,r.kt)("inlineCode",{parentName:"p"},"accessToken"),") dan token penyegar (",(0,r.kt)("inlineCode",{parentName:"p"},"refreshToken"),") seperti yang didapatkan dari endpoint standar ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749#section-4.1.4"},"OAuth2"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Method: ")," POST"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Parameter: ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Deskripsi"),(0,r.kt)("th",{parentName:"tr",align:null},"Diperlukan"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sessionId"),(0,r.kt)("td",{parentName:"tr",align:null},"ID sesi pengguna yang akan di-sign"),(0,r.kt)("td",{parentName:"tr",align:null},"Ya")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"signature"),(0,r.kt)("td",{parentName:"tr",align:null},"Tanda tangan sessionId untuk mengotentikasi pengguna"),(0,r.kt)("td",{parentName:"tr",align:null},"Ya")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey pengguna"),(0,r.kt)("td",{parentName:"tr",align:null},"Ya")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonce"),(0,r.kt)("td",{parentName:"tr",align:null},"String acak yang dihasilkan oleh klien yang digunakan untuk memverifikasi respons"),(0,r.kt)("td",{parentName:"tr",align:null},"Ya")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Kode Respons: ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Kode Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Deskripsi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200 OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Otentikasi Berhasil")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400 Permintaan Buruk"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter Tidak Valid atau ID Sesinya Tidak Ditemukan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"405 Metode Tidak Diizinkan"),(0,r.kt)("td",{parentName:"tr",align:null},"Hanya permintaan POST yang diizinkan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500 Kesalahan Server Internal"),(0,r.kt)("td",{parentName:"tr",align:null},"Terjadi kesalahan internal")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Contoh Permintaan: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sessionId": "nu.id:1:client-1:YgWIexz3YJwtqD8WQcoBdkDkGsNo5obz:1678550057",\n    "signature": "30460221008bf8d481763303cd260472f38fa2b3232a14f5cbea5414c54d42e8cc868a4c1b022100b5d7b8d09413649f5adf494c30488f7c0bf97b20de4f32c9065ae20f023fe50d",\n    "publicKey": "04c5e4e387c76ada73c8a7fc7c613aac1ed455a87e8bcd72b74506d3ad8dcef0c06a644449be6d7e529cc6b4f2abe2be65c5197aa40464756e78e3da78f2bb82a8",\n    "nonce": "XZSZPSA6yBVqfKj8fCgO2WZDamSQPPhS",\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Contoh Respon Apabila Sukses: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0\xa0\xa0\xa0"data": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6ImFiYyIsImVtYWlsIjoiYWJjQGV4YW1wbGUuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.zT8XV1DfUW9uUjwWcJ9sJxjyR40A1XHyxdKbPtLIFRE",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"refreshToken": "nPhyyUSTo3C4UBStqr8SwJBrE1WzRH3vYaGFy6oRFD4SqXFXXI9nczjNKTL3lxZ3E1mBXEEtoSumMtT6m7LTJQJfYrgjtnm0OOo0DMpztB0THjTQE7AUJmQGTvQv3UcS6keJwxZRhufJTyQl5cNWtkUy7IFvYzH6lJvR0DrU"\n\xa0\xa0\xa0\xa0}\n}\n')))}o.isMDXComponent=!0}}]);