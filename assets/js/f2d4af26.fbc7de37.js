(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(3),i=n(8),a=(n(0),n(96)),r={title:"Neutralino.os"},l={unversionedId:"api/os",id:"api/os",isDocsHomePage:!1,title:"Neutralino.os",description:"Neutralino.os namespace contains methods related to the user's operating system.",source:"@site/docs/api/os.md",slug:"/api/os",permalink:"/docs/api/os",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/os.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.filesystem",permalink:"/docs/api/filesystem"},next:{title:"Neutralino.computer",permalink:"/docs/api/computer"}},c=[{value:"os.execCommand(ExecCommandOptions)",id:"osexeccommandexeccommandoptions",children:[{value:"ExecCommandOptions",id:"execcommandoptions",children:[]},{value:"Return object (awaited):",id:"return-object-awaited",children:[]}]},{value:"os.getEnvar(GetEnvarOptions)",id:"osgetenvargetenvaroptions",children:[{value:"GetEnvarOptions",id:"getenvaroptions",children:[]},{value:"Return object (awaited):",id:"return-object-awaited-1",children:[]}]},{value:"os.showDialogOpen(DialogOpenOptions)",id:"osshowdialogopendialogopenoptions",children:[{value:"DialogOpenOptions",id:"dialogopenoptions",children:[]},{value:"Return object (awaited):",id:"return-object-awaited-2",children:[]}]},{value:"os.showDialogSave(DialogSaveOptions)",id:"osshowdialogsavedialogsaveoptions",children:[{value:"DialogOpenOptions",id:"dialogopenoptions-1",children:[]},{value:"Return object (awaited):",id:"return-object-awaited-3",children:[]}]},{value:"os.showNotification(NotificationOptions)",id:"osshownotificationnotificationoptions",children:[{value:"NotificationOptions",id:"notificationoptions",children:[]}]},{value:"os.showMessageBox(MessageBoxOptions)",id:"osshowmessageboxmessageboxoptions",children:[{value:"MessageBoxOptions",id:"messageboxoptions",children:[]},{value:"Return object (awaited):",id:"return-object-awaited-4",children:[]}]}],s={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Neutralino.os namespace contains methods related to the user's operating system."),Object(a.b)("h2",{id:"osexeccommandexeccommandoptions"},"os.execCommand(ExecCommandOptions)"),Object(a.b)("p",null,"Executes a command and returns the output."),Object(a.b)("h3",{id:"execcommandoptions"},"ExecCommandOptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"command"),": The command needs to be executed.")),Object(a.b)("h3",{id:"return-object-awaited"},"Return object (awaited):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"stdout"),": String data taken from the standard output (STDOUT) of the command's process.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"let response = await Neutralino.os.execCommand({\n  command: 'python --version'\n});\nconsole.log(`Your Python version: ${response.stdout}`);\n")),Object(a.b)("h2",{id:"osgetenvargetenvaroptions"},"os.getEnvar(GetEnvarOptions)"),Object(a.b)("p",null,"Provides the value of a given environment variable."),Object(a.b)("h3",{id:"getenvaroptions"},"GetEnvarOptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"key"),": The name of the environment variable.")),Object(a.b)("h3",{id:"return-object-awaited-1"},"Return object (awaited):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"value"),": Value of the given environment variable.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"let response = await Neutralino.os.getEnvar({\n  command: 'USER'\n});\nconsole.log(`USER = ${response.value}`);\n")),Object(a.b)("h2",{id:"osshowdialogopendialogopenoptions"},"os.showDialogOpen(DialogOpenOptions)"),Object(a.b)("p",null,"Shows the file open dialog."),Object(a.b)("h3",{id:"dialogopenoptions"},"DialogOpenOptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"title"),": Title of the dialog."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"isDirectoryMode"),": A boolean value to allow directories to be selected. The\ndefault value is ",Object(a.b)("inlineCode",{parentName:"li"},"false"),".")),Object(a.b)("h3",{id:"return-object-awaited-2"},"Return object (awaited):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"selectedEntry"),": The selected value (a folder or directory).")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"let response = await Neutralino.os.showDialogOpen({\n  title: 'Select a folder',\n  isDirectoryMode: true\n});\nconsole.log(`You've selected: ${response.selectedEntry}`);\n")),Object(a.b)("h2",{id:"osshowdialogsavedialogsaveoptions"},"os.showDialogSave(DialogSaveOptions)"),Object(a.b)("p",null,"Shows the file save dialog."),Object(a.b)("h3",{id:"dialogopenoptions-1"},"DialogOpenOptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"title"),": Title of the dialog.")),Object(a.b)("h3",{id:"return-object-awaited-3"},"Return object (awaited):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"selectedEntry"),": The selected value (a folder or directory).")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"let response = await Neutralino.os.showDialogSave({\n  title: 'Save to a file'\n});\nconsole.log(`You've selected: ${response.selectedEntry}`);\n")),Object(a.b)("h2",{id:"osshownotificationnotificationoptions"},"os.showNotification(NotificationOptions)"),Object(a.b)("p",null,"Displays a notification message."),Object(a.b)("h3",{id:"notificationoptions"},"NotificationOptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"summary"),": Caption of the notification message."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"body"),": Content of the notification.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"await Neutralino.os.showNotification({\n  summary: 'Hello world',\n  body: 'It works!. Have a nice day'\n});\n")),Object(a.b)("h2",{id:"osshowmessageboxmessageboxoptions"},"os.showMessageBox(MessageBoxOptions)"),Object(a.b)("p",null,"Displays a message box."),Object(a.b)("h3",{id:"messageboxoptions"},"MessageBoxOptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"title"),": Title of the message box."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"content"),": Content of the message box."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"type"),": Message box type. Accepted values are ",Object(a.b)("inlineCode",{parentName:"li"},"WARN"),", ",Object(a.b)("inlineCode",{parentName:"li"},"ERROR"),", ",Object(a.b)("inlineCode",{parentName:"li"},"INFO"),", and ",Object(a.b)("inlineCode",{parentName:"li"},"QUESTION"),".")),Object(a.b)("h3",{id:"return-object-awaited-4"},"Return object (awaited):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"yesButtonClicked"),": A boolean values to indentify whether ",Object(a.b)("inlineCode",{parentName:"li"},"Yes")," button clicked in the ",Object(a.b)("inlineCode",{parentName:"li"},"QUESTION")," type messages.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"let response = await Neutralino.os.showDialogSave({\n  title: 'Save to a file'\n});\nconsole.log(`You've selected: ${response.selectedEntry}`);\n\n")))}b.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=o,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||a;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);