(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{425:function(e,t,n){"use strict";n.d(t,{F:function(){return i},f:function(){return s}});var r=n(7294),o=n(9008);const a=(0,r.createContext)({setTheme:e=>{},themes:[]}),i=()=>(0,r.useContext)(a),c=["light","dark"],l="(prefers-color-scheme: dark)",s=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:i="theme",themes:s=["light","dark"],defaultTheme:p=(n?"system":"light"),attribute:h="data-theme",value:y,children:g})=>{const[b,v]=(0,r.useState)((()=>d(i,p))),[x,j]=(0,r.useState)((()=>d(i))),w=y?Object.values(y):s,k=(0,r.useCallback)((t=>{const n=m(t);j(n),"system"!==b||e||T(n,!1)}),[b,e]),O=(0,r.useRef)(k);O.current=k;const T=(0,r.useCallback)(((e,r=!0,o=!0)=>{let a=(null==y?void 0:y[e])||e;const c=t&&o?f():null;if(r)try{localStorage.setItem(i,e)}catch(e){}if("system"===e&&n){const e=m();a=(null==y?void 0:y[e])||e}if(o){const e=document.documentElement;"class"===h?(e.classList.remove(...w),e.classList.add(a)):e.setAttribute(h,a),null==c||c()}}),[]);(0,r.useEffect)((()=>{const e=function(){return O.current(...[].slice.call(arguments))},t=window.matchMedia(l);return t.addListener(e),e(t),()=>t.removeListener(e)}),[]);const C=(0,r.useCallback)((t=>{e?T(t,!0,!1):T(t),v(t)}),[e]);return(0,r.useEffect)((()=>{const e=e=>{e.key===i&&C(e.newValue||p)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[C]),(0,r.useEffect)((()=>{if(!o)return;let t=e&&c.includes(e)?e:b&&c.includes(b)?b:"system"===b&&x||null;document.documentElement.style.setProperty("color-scheme",t)}),[o,b,x,e]),r.createElement(a.Provider,{value:{theme:b,setTheme:C,forcedTheme:e,resolvedTheme:"system"===b?x:b,themes:n?[...s,"system"]:s,systemTheme:n?x:void 0}},r.createElement(u,{forcedTheme:e,storageKey:i,attribute:h,value:y,enableSystem:n,defaultTheme:p,attrs:w}),g)},u=(0,r.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,defaultTheme:i,value:c,attrs:s})=>{const u="class"===n?`var d=document.documentElement.classList;d.remove(${s.map((e=>`'${e}'`)).join(",")});`:"var d=document.documentElement;",d=(e,t)=>{e=(null==c?void 0:c[e])||e;const r=t?e:`'${e}'`;return"class"===n?`d.add(${r})`:`d.setAttribute('${n}', ${r})`},f="system"===i;return r.createElement(o.default,null,r.createElement("script",e?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${u}${d(e)}}()`}}:a?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${u}var e=localStorage.getItem('${t}');${f?"":d(i)+";"}if("system"===e||(!e&&${f})){var t="${l}",m=window.matchMedia(t);m.media!==t||m.matches?${d("dark")}:${d("light")}}else if(e) ${c?`var x=${JSON.stringify(c)};`:""}${d(c?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${u}var e=localStorage.getItem("${t}");if(e){${c?`var x=${JSON.stringify(c)};`:""}${d(c?"x[e]":"e",!0)}}else{${d(i)};}}catch(t){}}();`}}))}),((e,t)=>e.forcedTheme===t.forcedTheme)),d=(e,t)=>{if("undefined"==typeof window)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},f=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},m=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8484)}])},8578:function(e,t,n){"use strict";n.d(t,{qx:function(){return b},h4:function(){return h},Ar:function(){return u}});var r=n(5893),o=n(5697),a=n.n(o),i=n(9008),c=n(1163);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e){var t=e.children,n=s(e,["children"]),o=(0,c.useRouter)(),a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({title:"Full-Stack Web Developer Portfolio, React/Node.js specialist",description:"I\u2019m a full-stack software engineer specialising in React/Node and I create interactive user experiences on the web.",image:"/og.png",type:"website"},n);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:a.title}),(0,r.jsx)("meta",{name:"robots",content:"follow, index"}),(0,r.jsx)("meta",{content:a.description,name:"description"}),(0,r.jsx)("meta",{property:"og:url",content:"https://gouldie.github.io".concat(o.asPath)}),(0,r.jsx)("link",{rel:"canonical",href:"https://gouldie.github.io".concat(o.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:a.type}),(0,r.jsx)("meta",{property:"og:site_name",content:"Matthew Gould"}),(0,r.jsx)("meta",{property:"og:description",content:a.description}),(0,r.jsx)("meta",{property:"og:title",content:a.title}),(0,r.jsx)("meta",{property:"og:image",content:a.image}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@gouldieweb"}),(0,r.jsx)("meta",{name:"twitter:title",content:a.title}),(0,r.jsx)("meta",{name:"twitter:description",content:a.description}),(0,r.jsx)("meta",{name:"twitter:image",content:a.image})]}),(0,r.jsx)("main",{id:"skip",className:"my-container pb-8",children:t})]})}u.propTypes={children:a().node.isRequired};var d=n(7294),f=n(1664),m=n.n(f),p=n(425);function h(){var e=(0,d.useState)(!1),t=e[0],n=e[1],o=(0,p.F)(),a=o.resolvedTheme,i=(o.setTheme,function(){n(!1)});return(0,r.jsx)("header",{className:"my-container pt-8 pb-16",children:(0,r.jsx)("nav",{className:"border-gray-200 px-2 sm:px-4 py-2.5 rounded",children:(0,r.jsxs)("div",{className:"flex flex-wrap justify-between items-center mx-auto",children:[(0,r.jsx)(m(),{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:"w-20 h-8",children:(0,r.jsx)(b,{children:(0,r.jsx)("img",{className:"w-full",src:"/logo-".concat("dark"===a?"dark":"light",".png"),alt:""})})})})}),(0,r.jsxs)("div",{className:"md:hidden flex items-center",children:[(0,r.jsx)(b,{children:(0,r.jsx)(g,{})}),(0,r.jsxs)("button",{"data-collapse-toggle":"mobile-menu-4",type:"button",className:"inline-flex items-center ml-5 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"mobile-menu-4","aria-expanded":"false",onClick:function(){return n((function(e){return!e}))},children:[(0,r.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,r.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})}),(0,r.jsx)("svg",{className:"hidden w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})]}),(0,r.jsx)("div",{className:"".concat(t?"":"hidden"," justify-between items-center w-full md:flex md:w-auto"),id:"mobile-menu-4",children:(0,r.jsxs)("div",{className:"flex flex-col mt-6 md:mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium",children:[(0,r.jsx)(y,{href:"/",label:"Home",onClick:i}),(0,r.jsx)(y,{href:"/projects",label:"Projects",onClick:i}),(0,r.jsx)(y,{href:"/contact",label:"Contact",onClick:i})]})}),(0,r.jsx)("div",{className:"hidden md:block",children:(0,r.jsx)(b,{children:(0,r.jsx)(g,{})})})]})})})}function y(e){var t=e.href,n=e.label,o=e.onClick,a=(0,c.useRouter)().asPath===t;return(0,r.jsx)(m(),{passHref:!0,href:t,children:(0,r.jsx)("a",{onClick:o,children:(0,r.jsx)("span",{className:a?"block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white":"block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",children:n})})})}function g(){var e=(0,p.F)(),t=e.resolvedTheme,n=e.setTheme;return(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"checkbox",className:"checkbox",id:"checkbox",onChange:function(){n("dark"!==t?"dark":"light")},checked:"dark"===t}),(0,r.jsxs)("label",{htmlFor:"checkbox",className:"label cursor-pointer",children:[(0,r.jsx)("img",{className:"sun",src:"/sun.svg",alt:""}),(0,r.jsx)("img",{className:"moon",src:"/moon.svg",alt:""}),(0,r.jsx)("div",{className:"ball"})]})]})}function b(e){var t=e.children,n=(0,d.useState)(!1),r=n[0],o=n[1];return(0,d.useEffect)((function(){o(!0)}),[]),r?t:null}y.propTypes={href:a().string.isRequired,label:a().string.isRequired}},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},c=n(1003),l=n(880),s=n(9246);var u={};function d(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),a=i.default.useMemo((function(){var t=o(c.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),f=a.href,m=a.as,p=i.default.useRef(f),h=i.default.useRef(m),y=e.children,g=e.replace,b=e.shallow,v=e.scroll,x=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var j=(t=i.default.Children.only(y))&&"object"===typeof t&&t.ref,w=o(s.useIntersection({rootMargin:"200px"}),3),k=w[0],O=w[1],T=w[2],C=i.default.useCallback((function(e){h.current===m&&p.current===f||(T(),h.current=m,p.current=f),k(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[m,j,f,T,k]);i.default.useEffect((function(){var e=O&&n&&c.isLocalURL(f),t="undefined"!==typeof x?x:r&&r.locale,o=u[f+"%"+m+(t?"%"+t:"")];e&&!o&&d(r,f,m,{locale:t})}),[m,f,O,x,n,r]);var E={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:i}))}(e,r,f,m,g,b,v,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(f)&&d(r,f,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof x?x:r&&r.locale,_=r&&r.isLocaleDomain&&c.getDomainLocale(m,S,r&&r.locales,r&&r.domainLocales);E.href=_||c.addBasePath(c.addLocale(m,S,r&&r.defaultLocale))}return i.default.cloneElement(t,E)};t.default=f,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,u=a.useRef(),d=o(a.useState(!1),2),f=d[0],m=d[1],p=o(a.useState(t?t.current:null),2),h=p[0],y=p[1],g=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),s.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:h,rootMargin:n}))}),[r,h,n,f]),b=a.useCallback((function(){m(!1)}),[]);return a.useEffect((function(){if(!c&&!f){var e=i.requestIdleCallback((function(){return m(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&y(t.current)}),[t]),[g,f,b]};var a=n(7294),i=n(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8484:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=(n(632),n(5697)),a=n.n(o),i=n(425),c=n(8578),l=n(1163);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function d(e){var t=e.Component,n=e.pageProps,o=(0,l.useRouter)();return(0,r.jsxs)(i.f,{attribute:"class",children:[!o.pathname.includes("quizapp")&&(0,r.jsx)(c.h4,{}),(0,r.jsx)(t,u({},n))]})}d.propTypes={Component:a().any.isRequired,pageProps:a().object},t.default=d},632:function(){},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(880)}));var n=e.O();_N_E=n}]);