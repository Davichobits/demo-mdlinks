"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[412],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},i="Hito 3",s={unversionedId:"hitos/hito-3",id:"hitos/hito-3",title:"Hito 3",description:"Buscando dentro de una carpeta",source:"@site/docs/hitos/hito-3.md",sourceDirName:"hitos",slug:"/hitos/hito-3",permalink:"/demo-mdlinks/docs/hitos/hito-3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hitos/hito-3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hito 2",permalink:"/demo-mdlinks/docs/hitos/hito-2"},next:{title:"Hito 4",permalink:"/demo-mdlinks/docs/hitos/hito-4"}},l={},c=[{value:"Buscando dentro de una carpeta",id:"buscando-dentro-de-una-carpeta",level:2},{value:"Tareas de este hito:",id:"tareas-de-este-hito",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hito-3"},"Hito 3"),(0,a.kt)("h2",{id:"buscando-dentro-de-una-carpeta"},"Buscando dentro de una carpeta"),(0,a.kt)("p",null,"Para este hito vas a trabajar con la misma funci\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},"mdLinks")," pero esta vez la usuaria ser\xe1 capaz de pasar una carpeta como ruta. "),(0,a.kt)("p",null,"El La funci\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},"mdLinks(path, validate)")," debe recorrer todos los archivos existentes en la carpeta y por cada archivo ",(0,a.kt)("inlineCode",{parentName:"p"},".md")," que encuentre deber\xe1 extraer los links para mostrarlos en pantalla. "),(0,a.kt)("p",null,"Debes tener en cuenta que la carpeta puede contener archivos con extensiones que no sean md. En este caso debes la funci\xf3n debe ignorarlos. (Crea una carpeta con archivos de diferentes extensiones para probar tu funci\xf3n)"),(0,a.kt)("p",null,"Ejemplo:"),(0,a.kt)("p",null,"(resultados como comentarios)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mdLinks = require("md-links");\n\n\nmdLinks("./some/dir")\n  .then(links => {\n    // => [{ href, text, file }, ...]\n  })\n  .catch(console.error);\n\n\nmdLinks("./some/dir", true )\n  .then(links => {\n    // => [{ href, text, file, status, ok }, ...]\n  })\n  .catch(console.error);\n\n\nmdLinks("./some/dir", false)\n  .then(links => {\n    // => [{ href, text, file }, ...]\n  })\n  .catch(console.error);\n\n')),(0,a.kt)("h2",{id:"tareas-de-este-hito"},"Tareas de este hito:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Obt\xe9n el contenido de un directorio"),(0,a.kt)("p",{parentName:"li"},"Este hito consiste en buscar archivos en un directorio (o carpeta). Para eso, hay que leer el directorio, osea ver que est\xe1 dentro. "),(0,a.kt)("p",{parentName:"li"},"El m\xf3dulo de ",(0,a.kt)("inlineCode",{parentName:"p"},"fs")," tambi\xe9n te ser\xe1 \xfatil aqu\xed. Recomendamos ",(0,a.kt)("inlineCode",{parentName:"p"},"readdirSync"),"."),(0,a.kt)("p",{parentName:"li"},"Intenta imprimir en consola la lista de archivos en una carpeta para probar como funciona.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Une dos rutas"),(0,a.kt)("p",{parentName:"li"},"Para poder acceder a carpetas y archivos ser\xe1 necesario que indiques en qu\xe9 lugar de tu computadora se encuentran, a esto le llamamos rutas."),(0,a.kt)("p",{parentName:"li"},"Usa el m\xf3dulo path para unir dos segmentos de ruta a una ruta completa, por ejemplo, si queremos unir:"),(0,a.kt)("p",{parentName:"li"},"/home/Laboratoria/"),(0,a.kt)("p",{parentName:"li"},"./test"),(0,a.kt)("p",{parentName:"li"},"El resultado ser\xeda: /home/Laboratoria/test"))),(0,a.kt)("admonition",{title:"No olvides los tests",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Antes de pasar al siguiente hito, aseg\xfarate de escribir los tests correspondientes al c\xf3digo del hito actual.")))}d.isMDXComponent=!0}}]);