(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{109:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return r?a.a.createElement(f,l(l({ref:t},s),{},{components:r})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=(r(0),r(109));const i={title:"Native API Overview"},o={unversionedId:"api/overview",id:"api/overview",isDocsHomePage:!1,title:"Native API Overview",description:"Neutralinojs offers a JavaScript client library (also known as Neutralino.js) for developers to interact",source:"@site/docs/api/overview.md",slug:"/api/overview",permalink:"/docs/api/overview",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/overview.md",version:"current",sidebar:"docs",previous:{title:"Your First Neutralinojs App",permalink:"/docs/getting-started/your-first-neutralinojs-app"},next:{title:"Neutralino.init",permalink:"/docs/api/init"}},l=[{value:"Native API namespaces",id:"native-api-namespaces",children:[]}],c={toc:l};function s({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Neutralinojs offers a JavaScript client library (also known as Neutralino.js) for developers to interact\nwith native operations via the Neutralinojs server.\nThe JavaScript client's implementation resides inside the neutralino.js JavaScript file.\nIt is therefore required to have the client library in your Neutralinojs projects.\xa0"),Object(a.b)("p",null,"The client library exposes its JavaScript APIs to the browser's window scope, and you can access them\nvia ",Object(a.b)("inlineCode",{parentName:"p"},"Neutralino")," or ",Object(a.b)("inlineCode",{parentName:"p"},"window.Neutralino")," from vanilla JavaScript or any frontend framework."),Object(a.b)("p",null,"Assume that you need to get an environment variable value from the operating system. You can call the\n",Object(a.b)("a",{parentName:"p",href:"../api/os#osgetenvkey"},Object(a.b)("inlineCode",{parentName:"a"},"Neutralino.os.getEnv")),"\nJavaScript method. The client library will call the Neutralinojs server with a WebSocket message once you invoke\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"getEnv")," method. After that, the Neutralinojs server will execute the native operation to fetch the given\nenvironment variable.\nOnce the Neutralinojs server finishes the task, it sends a WebSocket message with the value of the environment variable.\nFinally, the client library resolves a promise with the results received from the server."),Object(a.b)("p",null,"The client library maintains a task pool to map the server messages to the matching request via an UUID string."),Object(a.b)("p",null,"Neutralinojs offers many native operations for you by using this communication mechanism for all ",Object(a.b)("a",{parentName:"p",href:"../configuration/modes"},"modes"),"."),Object(a.b)("h2",{id:"native-api-namespaces"},"Native API namespaces"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"init"},"Neutralino.init")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"app"},"Neutralino.app")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"computer"},"Neutralino.computer")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"debug"},"Neutralino.debug")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"filesystem"},"Neutralino.filesystem")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"os"},"Neutralino.os")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"storage"},"Neutralino.storage")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"window"},"Neutralino.window")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"events"},"Neutralino.events")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"extensions"},"Neutralino.extensions")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"updater"},"Neutralino.updater"))))}s.isMDXComponent=!0}}]);