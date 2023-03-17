(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(8),r=(n(0),n(117)),o=n(130),l=n(131),c={title:"Your First Neutralinojs App"},s={unversionedId:"getting-started/your-first-neutralinojs-app",id:"getting-started/your-first-neutralinojs-app",isDocsHomePage:!1,title:"Your First Neutralinojs App",description:"Introduction",source:"@site/docs/getting-started/your-first-neutralinojs-app.mdx",slug:"/getting-started/your-first-neutralinojs-app",permalink:"/docs/getting-started/your-first-neutralinojs-app",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/getting-started/your-first-neutralinojs-app.mdx",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Using Frontend Libraries",permalink:"/docs/getting-started/using-frontend-libraries"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Step 0: Installing neu CLI",id:"step-0-installing-neu-cli",children:[]},{value:"Step 1: Creating a new app",id:"step-1-creating-a-new-app",children:[]},{value:"Step 2: Writing JavaScript, HTML, and CSS",id:"step-2-writing-javascript-html-and-css",children:[]},{value:"Step 3: Running your application",id:"step-3-running-your-application",children:[]},{value:"Step 4: Building your application\xa0",id:"step-4-building-your-application",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],u={toc:p};function b(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"We are going to create a simple application using Neutralinojs. This sample application will display Hello with the\ncurrent username of your operating system. For example, if the current username is John, it will show, Hello John."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This tutorial uses Vanilla JavaScript for building the app. If you would like to use a frontend library,\ncheck ",Object(r.b)("a",{parentName:"p",href:"/docs/getting-started/using-frontend-libraries"},"this guide"),"."))),Object(r.b)("h2",{id:"step-0-installing-neu-cli"},"Step 0: Installing neu CLI"),Object(r.b)("p",null,"You need to install neu CLI to create Neutralinojs applications. However, you can develop applications without CLI as well.\nBut, the CLI will make some hard stuff easy. Run the following command on your terminal to install neu CLI globally."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install -g @neutralinojs/neu\n")),Object(r.b)("p",null,"If you don't want a global installation, use neu CLI with npx."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npx @neutralinojs/neu <command>\n")),Object(r.b)("h2",{id:"step-1-creating-a-new-app"},"Step 1: Creating a new app"),Object(r.b)("p",null,"Enter the following command to scaffold a new app."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"neu create myapp\n")),Object(r.b)("p",null,"The above command will create a new app inside myapp directory. To make sure whether everything is fine,\nrun your application."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cd myapp\nneu run\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you are on Windows, you might get a blank white screen.\nThe reason for this is, accessing localhost from a UWP context is disabled by default.\nRun the following command with administrative privileges on the command prompt to fix this."),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre"},'CheckNetIsolation.exe LoopbackExempt -a -n="Microsoft.Win32WebViewHost_cw5n1h2txyewy"\n')),Object(r.b)("p",{parentName:"div"},"You may include this in your Windows setup files (with the user's consent) because users also may get an empty white screen on Windows."),Object(r.b)("p",{parentName:"div"},"For better developer experience, we recommend you to install the ",Object(r.b)("a",{parentName:"p",href:"https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section"},"WebView2 runtime")," on Windows."))),Object(r.b)("h2",{id:"step-2-writing-javascript-html-and-css"},"Step 2: Writing JavaScript, HTML, and CSS"),Object(r.b)("p",null,"Insert the following content into your application resource files."),Object(r.b)(o.a,{defaultValue:"index.html",values:[{label:"index.html",value:"index.html"},{label:"styles.css",value:"styles.css"},{label:"main.js",value:"main.js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"index.html",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>NeutralinoJs</title>\n    <link rel="stylesheet" href="styles.css">\n  </head>\n  <body>\n    <div id="neutralinoapp">\n      <h1 id="name"></h1>\n    </div>\n    <script src="js/neutralino.js"><\/script>\n    <script src="js/main.js"><\/script>\n  </body>\n</html>\n'))),Object(r.b)(l.a,{value:"styles.css",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"html, body{\n    margin: 0px;\n    padding: 0px;\n}\n\n#neutralinoapp {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #FFD700;\n}\n\n#neutralinoapp h1 {\n    position: relative;\n    float: left;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-family: Arial;\n    font-size: 48px;\n    padding: 0px;\n    margin: 0px;\n}\n"))),Object(r.b)(l.a,{value:"main.js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let getUsername = async () => {\n  const key = NL_OS == 'Windows' ? 'USERNAME' : 'USER';\n  let value = '';\n  try {\n      value = await Neutralino.os.getEnv(key);\n  }\n  catch(err) {\n      console.error(err);\n  }\n  document.getElementById('name').innerText = `Hello ${value}`;\n}\n\nNeutralino.init();\ngetUsername();\n")))),Object(r.b)("p",null,"Neutralinojs prevents arbitary native API function execution unlike Node.js environments.\nHere we used the ",Object(r.b)("inlineCode",{parentName:"p"},"os.getEnv")," native function, so check whether your application configuration allows\nthe application frontend to execute it. The default configuration already allows the entire ",Object(r.b)("inlineCode",{parentName:"p"},"os")," namespace\nwith the following ",Object(r.b)("inlineCode",{parentName:"p"},"nativeAllowList")," permission setup:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'"nativeAllowList": [\n    "app.*",\n    "os.*",\n    "debug.log"\n],\n')),Object(r.b)("p",null,"We don't need to update anything in the permission setup since it already allows ",Object(r.b)("inlineCode",{parentName:"p"},"os.getEnv")," native function\ncalls."),Object(r.b)("h2",{id:"step-3-running-your-application"},"Step 3: Running your application"),Object(r.b)("p",null,"As mentioned above, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"run")," command to start your application."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"neu run\n")),Object(r.b)("p",null,"Congrats! your application works."),Object(r.b)("p",null,Object(r.b)("img",{alt:"mypp is running on Linux",src:n(168).default})),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"neu run")," command will reload your application when there is a change in application resources.\nTry to change your ",Object(r.b)("inlineCode",{parentName:"p"},"index.html")," while the application is running."))),Object(r.b)("h2",{id:"step-4-building-your-application"},"Step 4: Building your application\xa0"),Object(r.b)("p",null,"To make portable binaries for your application, we can use the ",Object(r.b)("inlineCode",{parentName:"p"},"build")," command.\nEnter the following command on your terminal to make final binaries for all supported platforms.\xa0"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"neu build --release\n")),Object(r.b)("p",null,"The above command will produce binaries for all platforms into the ",Object(r.b)("inlineCode",{parentName:"p"},"dist")," directory and the ",Object(r.b)("inlineCode",{parentName:"p"},"--release")," flag will also package your binaries into a .zip file.\nThis command will do the work blazing fast because there is no compilation process behind."),Object(r.b)("h2",{id:"whats-next"},"What's next?"),Object(r.b)("p",null,"Now you know how to create Neutralinojs applications. We will suggest you to look into the\nfollowing topics next."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../configuration/neutralino.config.json"},"neutralino.config.json")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../configuration/project-structure"},"Project structure")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../cli/neu-cli"},"neu CLI")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../api/global-variables"},"Global variables")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../configuration/modes"},"Application modes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../api/overview"},"Native API overview"))),Object(r.b)("p",null,"We've built the above example application with vanilla JavaScript. However, you can use your favorite frontend\nframework to build Neutralinojs apps."),Object(r.b)("p",null,"Check more details about frontend framework support ",Object(r.b)("a",{parentName:"p",href:"../configuration/project-structure#developing-apps-with-frontend-frameworks"},"here"),"."))}b.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},118:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},124:function(e,t,n){"use strict";var a=n(0),i=n(125);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},125:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},130:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(124),o=n(118),l=n(58),c=n.n(l);var s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,u=e.values,b=e.groupId,d=e.className,m=Object(r.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(a.useState)(l),g=v[0],j=v[1],O=a.Children.toArray(e.children),y=[];if(null!=b){var w=h[b];null!=w&&w!==g&&u.some((function(e){return e.value===w}))&&j(w)}var N=function(e){var t=e.target,n=y.indexOf(t),a=O[n].props.value;j(a),null!=b&&(f(b,a),setTimeout((function(){var e,n,a,i,r,o,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&r<=s&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case p:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case s:var i=y.indexOf(e.target)-1;n=y[i]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},131:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},168:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/myapp-running-linux-6b64836102a03dea98022af84f9b189c.png"}}]);