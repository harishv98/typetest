(this.webpackJsonptypetest=this.webpackJsonptypetest||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(4),r=n.n(s),i=(n(9),n(10),n(0));function u(){return Object(i.jsx)("header",{className:"app-header",children:Object(i.jsx)("div",{className:"app-header__text",children:"TypeTest"})})}var o=n(2);n(12);function j(t){var e=t.text.split(" "),n=t.wordState;return Object(i.jsx)(i.Fragment,{children:e.map((function(e,c){var a=c===t.currIndx?"word--current ":"",s=n[c]?"word--success ":"",r=!1===n[c]?"word--failure ":"";return Object(i.jsx)("span",{className:"test-word "+a+s+r,children:e},"word"+c)}))})}function l(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=Object(c.useState)(t),n=Object(o.a)(e,2),a=n[0],s=n[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),u=i[0],j=i[1],l=Object(c.useRef)(null),h=Object(c.useCallback)((function(){j(!0),l.current=setInterval((function(){s((function(t){return t-1}))}),1e3)}),[s,j]),b=Object(c.useCallback)((function(){j(!1),clearInterval(l.current),s(t)}),[j,s,t]);return Object(c.useEffect)((function(){0===a&&b()})),{start:h,stop:b,isRunning:u,seconds:a,setTime:s}}(60),n=e.start,a=e.stop,s=e.isRunning,r=e.seconds,u=(e.setTime,Object(c.useState)("")),l=Object(o.a)(u,2),h=l[0],b=l[1],f=Object(c.useState)(0),p=Object(o.a)(f,2),d=p[0],O=p[1],x=Object(c.useState)(0),g=Object(o.a)(x,2),m=g[0],v=g[1],w=Object(c.useState)(t.textData.split(" ")),N=Object(o.a)(w,2),S=N[0],T=N[1],_=t.textData.split(" "),y=Object(c.useState)(new Array(_.length)),C=Object(o.a)(y,2),D=C[0],E=C[1];Object(c.useEffect)((function(){T(t.textData.split(" ")),D.length!==S.length&&E(new Array(S.length))}),[t.textData,D,T,S.length]),Object(c.useEffect)((function(){var t=60-r,e=D.filter((function(t){return t})).length;s&&O(Math.floor(e/(t/60)))}),[s,r,D]);return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)("div",{className:"test-paragraph",children:Object(i.jsx)(j,{text:t.textData,word:h,currIndx:m,setWordState:E,wordState:D})}),Object(i.jsxs)("div",{className:"flex-content test-option__groupings",children:[Object(i.jsx)("input",{className:"test-option__input",type:"text",value:h,onChange:function(t){var e=t.target.value;" "===e.charAt(e.length-1)&&(e.length>1&&" "===e.charAt(e.length-1)&&(E((function(t){return t[m]=S[m]===h.slice(0,h.length),t})),v((function(t){return t+1}))),e=""),b(e),s||n()}}),Object(i.jsxs)("div",{className:"test-option__wpm",children:[d," WPM"]}),Object(i.jsx)("button",{className:"test-option__reset",onClick:function(){O(0),v(0),a(),t.setNewText()},children:"Reset"}),s?r:"Not started"]})]})}function h(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){fetch("http://metaphorpsum.com/paragraphs/1/4",{method:"GET"}).then((function(t){return t.text()})).then((function(t){a(t)}))}),[]),Object(i.jsx)("main",{className:"app-main",children:Object(i.jsx)("section",{className:"typing-container",children:Object(i.jsx)(l,{textData:n,setNewText:function(){fetch("http://metaphorpsum.com/paragraphs/1/4",{method:"GET"}).then((function(t){return t.text()})).then((function(t){a(t)}))}})})})}var b=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{}),Object(i.jsx)(h,{})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),f()}],[[13,1,2]]]);
//# sourceMappingURL=main.925cb432.chunk.js.map