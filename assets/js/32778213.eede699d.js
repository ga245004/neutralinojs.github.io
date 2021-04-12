(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(96)),o={title:"Neutralino.app"},p={unversionedId:"api/app",id:"api/app",isDocsHomePage:!1,title:"Neutralino.app",description:"Neutralino.app namespace contains methods related to the current application instance.",source:"@site/docs/api/app.md",slug:"/api/app",permalink:"/docs/api/app",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/app.md",version:"current",sidebar:"docs",previous:{title:"Your First Neutralinojs App",permalink:"/docs/getting-started/your-first-neutralinojs-app"},next:{title:"Neutralino.filesystem",permalink:"/docs/api/filesystem"}},c=[{value:"app.exit()",id:"appexit",children:[]},{value:"app.keepAlive()",id:"appkeepalive",children:[]},{value:"app.getConfig()",id:"appgetconfig",children:[{value:"Return object (awaited):",id:"return-object-awaited",children:[]}]},{value:"app.open(OpenActionOptions)",id:"appopenopenactionoptions",children:[{value:"OpenActionOptions",id:"openactionoptions",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Neutralino.app namespace contains methods related to the current application instance."),Object(i.b)("h2",{id:"appexit"},"app.exit()"),Object(i.b)("p",null,"Terminates the running application."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"await Neutralino.app.exit();\n")),Object(i.b)("h2",{id:"appkeepalive"},"app.keepAlive()"),Object(i.b)("p",null,"The keepAlive method is responsible for saving the Neutralinojs server instance from the automatic termination.\nThis method is called automatically from the client library for the browser mode."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"await Neutralino.app.keepAlive();\n")),Object(i.b)("h2",{id:"appgetconfig"},"app.getConfig()"),Object(i.b)("p",null,"Returns the current application configuration as a JSON object."),Object(i.b)("h3",{id:"return-object-awaited"},"Return object (awaited):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config"),": Application configuration")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"await Neutralino.app.getConfig();\n")),Object(i.b)("h2",{id:"appopenopenactionoptions"},"app.open(OpenActionOptions)"),Object(i.b)("p",null,"Opens a URL with the default web browser.\xa0"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If your application is running the default web browser, this method will open a new tab."))),Object(i.b)("h3",{id:"openactionoptions"},"OpenActionOptions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url"),": URL to be opened (required).")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"await Neutralino.app.open({\n  url: 'https://neutralino.js.org'\n});\n")))}u.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?r.a.createElement(m,p(p({ref:t},l),{},{components:n})):r.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);