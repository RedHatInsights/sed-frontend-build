/*! For license information please see ConnectLog.1674576266084.5f20af8ff5510434afc8.js.LICENSE.txt */
(self.webpackChunksed_frontend=self.webpackChunksed_frontend||[]).push([[239],{68439:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>Ot});var n=r(63038),o=r.n(n),i=r(97522),a=r.n(i),c=r(54785),l=r(50008),u=r.n(l),s=r(67154),f=r.n(s),h=r(59713),p=r.n(h),d=r(319),v=r.n(d),y=r(48926),m=r.n(y),g=r(63133),b=r(45697),w=r.n(b),x=r(46458),O=r(94778),j=r(85893),E=function(){return E=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},E.apply(this,arguments)},S=36e5,P=24*S,L=30*P,k=365*P,_=function(t,e){return"".concat(t," ").concat(t>1?"".concat(e,"s"):e," ago")},T=[{rightBound:1/0,description:function(t){return _(Math.round(t/k),"year")}},{rightBound:k,description:function(t){return _(Math.round(t/L),"month")}},{rightBound:L,description:function(t){return _(Math.round(t/P),"day")}},{rightBound:P,description:function(t){return _(Math.round(t/S),"hour")}},{rightBound:S,description:function(t){return _(Math.round(t/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],N=function(t){return t.toUTCString().split(",")[1].slice(0,-7).trim()},I=function(t){return{exact:function(t){return N(t)+" UTC"},onlyDate:function(t){return N(t).slice(0,-6)},relative:function(t){return T.reduce((function(e,r){return r.rightBound>Date.now()-t.getTime()?r.description(Date.now()-t.getTime()):e}),N(t))},invalid:function(){return"Invalid date"}}[t]},R=function(t,e,r){return{exact:function(e){return I(t)(e)},onlyDate:function(e){return I(t)(e)},relative:function(n){return function(t,e,r,n){return void 0===n&&(n=""),(0,j.jsx)(c.Tooltip,E({},r,{content:(0,j.jsxs)("div",{children:[n,t]})},{children:e}))}(I("exact")(n),(0,j.jsx)("span",{children:I(t)(n)}),e,r)},invalid:function(){return"Invalid date"}}[t]};const F=function(t){var e=t.date,r=t.type,n=void 0===r?"relative":r,o=t.extraTitle,i=t.tooltipProps,c=e instanceof Date?e:new Date(e),l=null==e||"Invalid Date"===c.toString()?"invalid":n;return(0,j.jsx)(a().Fragment,{children:R(l,i,o)(c)})};var D=r(94184),C=r.n(D),A=function(){return A=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},A.apply(this,arguments)};const G=function(t){var e,r=t.size,n=void 0===r?"md":r,o=t.isDark,i=void 0!==o&&o,a=t.className,l=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["size","isDark","className"]);return(0,j.jsx)(c.Skeleton,A({className:C()("ins-c-skeleton","ins-c-skeleton__".concat(n),(e={},e["ins-m-dark"]=i,e),a)},l))};var B=function(){return B=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},B.apply(this,arguments)},z=function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};const U=function(t){var e,r=t.canSelectAll,n=void 0!==r&&r,o=t.isSelectable,i=void 0!==o&&o,a=t.sortBy,c=t.variant,l=t.isDark,u=void 0!==l&&l,s=t.colSize,f=void 0===s?0:s,h=t.columns,p=t.paddingColumnSize,d=void 0===p?0:p,v=t.hasRadio,y=void 0!==v&&v,m=t.rowSize,b=void 0===m?0:m,w=function(t){return z([],Array(t),!0)};return(0,j.jsxs)(g.Table,B({className:C()({"ins-c-skeleton-table__dark":u}),cells:w(d).map((function(){return""})).concat(h||z([],Array(f),!0).map((function(){return{title:(0,j.jsx)(G,{isDark:u,size:"sm"})}}))),rows:(e=h?h.length:f,w(b).map((function(){return{disableSelection:!0,cells:w(d).map((function(){return""})).concat(w(e).map((function(){return{title:(0,j.jsx)(G,{isDark:u,size:"md"})}})))}}))),sortBy:a,"aria-label":"Loading",onSelect:i?function(){}:void 0,selectVariant:i?y?(null===g.RowSelectVariant||void 0===g.RowSelectVariant?void 0:g.RowSelectVariant.radio)||"radio":(null===g.RowSelectVariant||void 0===g.RowSelectVariant?void 0:g.RowSelectVariant.checkbox)||"checkbox":void 0,canSelectAll:n,variant:c},{children:[(0,j.jsx)(g.TableHeader,{}),(0,j.jsx)(g.TableBody,{})]}))};var V=function(){return V=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},V.apply(this,arguments)};function H(t){return"".concat(t,t>1||t<1?" Results":" Result")}const M=function(t){var e,r=t.isFooter,n=void 0!==r&&r,o=t.results,a=t.className,l=t.selected,u=t.children,s=t.ouiaId,f=t.ouiaSafe,h=void 0===f||f,p=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["isFooter","results","className","selected","children","ouiaId","ouiaSafe"]),d=C()("ins-c-table__toolbar",((e={})["ins-m-footer"]=n,e),a),v="RHI/TableToolbar",y=(0,c.useOUIAId)(v,s,h);return(0,j.jsxs)(i.Fragment,{children:[(0,j.jsx)(c.Toolbar,V({className:d,"data-ouia-component-type":v,"data-ouia-component-id":y,"data-ouia-safe":h},p,{children:u})),(o&&o>=0||l&&l>=0)&&(0,j.jsxs)("div",V({className:"ins-c-table__toolbar-results"},{children:[o&&o>=0&&(0,j.jsxs)("span",V({className:"ins-c-table__toolbar-results-count"},{children:[" ",H(o)," "]})),l&&l>=0&&(0,j.jsxs)("span",V({className:"ins-c-table__toolbar-results-selected"},{children:[" ",l," Selected "]}))]}))]})};var Y=r(7887),K=r(94654),q=r.n(K),W=[{title:"Service"},{title:"State"}],J={compliance:"Use OpenSCAP for Compliance policies",remediations:"Enable Cloud Connector to fix issues directly from Insights"},Z=function(t){var e=t.services,r=t.isInsights;return a().createElement(c.Stack,null,a().createElement(c.StackItem,null,a().createElement(c.TextContent,null,a().createElement(c.Text,{component:c.TextVariants.h3},"State pushed to systems"))),a().createElement(g.Table,{"aria-label":"Active services Table",className:"sed-c-services__table",cells:W,rows:[{noPadding:!0,cells:["Connected to Red Hat Insighsts",r?"on":"off"]}].concat(v()(Object.entries(e).map((function(t){var e=o()(t,2),r=e[0],n=e[1];return[J[r],"enabled"===n?"on":"off"]})))),variant:"compact"},a().createElement(g.TableHeader,null),a().createElement(g.TableBody,null)))};Z.propTypes={services:w().shape({compliance:w().bool,remediations:w().bool}).isRequired,isInsights:w().bool.isRequired};const Q=Z;var X=r(1401),$=r(94962);function tt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function et(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(r),!0).forEach((function(e){p()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function rt(){rt=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var v={};c(v,o,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==e&&r.call(m,o)&&(v=m);var g=d.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(o,i,a,c){var l=s(t[o],t,i);if("throw"!==l.type){var f=l.arg,h=f.value;return h&&"object"==u()(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var nt=[{title:"Initiated date/time",cellFormatters:[g.expandable]},"Initiator",{title:"Playbook",transforms:[(0,g.cellWidth)(20)]}],ot=function(t,e){return q()(t.map((function(t,r){var n=t.account_id,o=t.created_at,l=t.id,u=t.compliance,s=t.remediations,f=t.insights;return[{id:l,isOpen:e.includes(l),cells:[a().createElement(i.Fragment,{key:"date"},a().createElement(F,{date:new Date(o),extraTitle:"Created at: "})),n,a().createElement(i.Fragment,{key:"download file-".concat(l)},a().createElement(c.Button,{variant:"link",isInline:!0,onClick:function(){m()(rt().mark((function t(){var e;return rt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.dx.getPlaybook(l);case 2:e=t.sent,(0,X.S)(e);case 4:case"end":return t.stop()}}),t)})))()}},"Download"))]},{parent:2*r,cells:[a().createElement(i.Fragment,{key:"nested-table"},a().createElement(Q,{services:{compliance:u,remediations:s},isInsights:f}))]}]})))},it=function(){var t=(0,i.useState)([]),e=o()(t,2),r=e[0],n=e[1],l=(0,x.I0)(),u=(0,x.v9)((function(t){var e=t.logReducer;return(null==e?void 0:e.loaded)||!1})),s=(0,x.v9)((function(t){var e=t.logReducer;return(null==e?void 0:e.results)||[]})),h=(0,x.v9)((function(t){var e=t.logReducer;return{itemCount:null==e?void 0:e.total,perPage:null==e?void 0:e.limit,page:Math.floor(((null==e?void 0:e.offset)||0)/((null==e?void 0:e.limit)||0))+1}}),x.wU);(0,i.useEffect)((function(){l((0,O.VU)())}),[]);var p=(0,i.useCallback)((function(t,e){return l((0,O.VU)({page:e,perPage:h.perPage}))}),[l,h.perPage]),d=(0,i.useCallback)((function(t,e){return l((0,O.VU)({page:1,perPage:e}))}),[l]);return a().createElement(i.Fragment,null,a().createElement(Y.Z,{pagination:u?et(et({},h),{},{onSetPage:p,onPerPageSelect:d}):a().createElement(c.Skeleton,{width:"33%"})}),u?a().createElement(g.Table,{"aria-label":"Logs table",variant:g.TableVariant.compact,rows:ot(s,r),cells:nt,onCollapse:function(t,e,o,i){var a=i.id;n((function(){return o?[].concat(v()(r),[a]):r.filter((function(t){return t!==a}))}))}},a().createElement(g.TableHeader,null),a().createElement(g.TableBody,null)):a().createElement(U,{colSize:3,rowSize:10}),a().createElement(M,{isFooter:!0},u?a().createElement(c.Pagination,f()({},h,{variant:c.PaginationVariant.bottom,onSetPage:p,onPerPageSelect:d})):a().createElement(c.Skeleton,{width:"33%"})))};it.propTypes={isActive:w().bool},it.defaultProps={isActive:!1};const at=it;var ct=r(59823),lt=r(16530);const ut=function(t){var e=t.component,r=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["component"]);return(0,i.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(e,"."),r)}),[]),(0,j.jsxs)("div",{children:[(0,j.jsx)("h1",{children:"Unable to load inventory component"}),(0,j.jsxs)("h2",{children:["Failed to load ",e]}),(0,j.jsx)("code",{children:"More info can be found in browser console output."})]})};var st=function(){return st=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},st.apply(this,arguments)},ft=function(t){var e=(0,lt.useHistory)(),r=(0,x.oR)(),n=t.component;return(0,j.jsx)(n,st({className:C()(t.className,"inventory")},{children:(0,j.jsx)(i.Suspense,st({fallback:t.fallback},{children:(0,j.jsx)(ct.ScalprumComponent,st({history:e,store:r,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:(0,j.jsx)(ut,st({component:"InventoryDetailHead",history:e,store:r},t)),ref:t.innerRef},t))}))}))};ft.propTypes={fallback:w().node,innerRef:w().object,component:w().string,className:w().string};var ht=a().forwardRef((function(t,e){return(0,j.jsx)(ft,st({innerRef:e},t))}));ht.propTypes={fallback:w().node,component:w().string,className:w().string},ht.defaultProps={fallback:(0,j.jsx)(c.Bullseye,st({className:"pf-u-p-lg"},{children:(0,j.jsx)(c.Spinner,{size:"xl"})})),component:"section"};const pt=ht;var dt=r(30319);function vt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function yt(){yt=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var v={};c(v,o,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==e&&r.call(m,o)&&(v=m);var g=d.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(o,i,a,c){var l=s(t[o],t,i);if("throw"!==l.type){var f=l.arg,h=f.value;return h&&"object"==u()(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}const mt=function(){return a().createElement(pt,{variant:"compact",showTags:!0,hasCheckbox:!1,columns:function(t){return t},getEntities:function(){var t=m()(yt().mark((function t(e,r,n,o){return yt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(void 0,r,n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,r,n,o){return t.apply(this,arguments)}}(),onRowClick:function(t,e){return window.location.href="./insights/inventory/".concat(e)},customFilters:{filters:[{rhcdFilter:["not_nil"]}]},onLoad:function(t){var e=t.mergeWithEntities;null===dt.z2||void 0===dt.z2||(0,dt.z2)(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(r),!0).forEach((function(e){p()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):vt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e()))}})};var gt=r(4147),bt=r(83215),wt=gt._j,xt=["runs","systems"];const Ot=function(){var t=(0,i.useState)(0),e=o()(t,2),r=e[0],n=e[1],l=(0,x.I0)(),u=(0,lt.useHistory)(),s=u.push,f=u.location;return(0,i.useEffect)((function(){l((0,bt.L1)());var t=new URLSearchParams(f.search),e=xt.findIndex((function(e){return e===t.get("active_tab")}));-1!==e?n(e):s({pathname:f.pathname,search:new URLSearchParams({active_tab:xt[0]}).toString()})}),[]),a().createElement(c.Modal,{title:"Red Hat connect log",variant:"medium",isOpen:!0,onClose:function(){return s(wt.connector)}},a().createElement(c.Tabs,{activeKey:r,onSelect:function(t,e){s({pathname:f.pathname,search:new URLSearchParams({active_tab:xt[e]}).toString()}),n(e)}},a().createElement(c.Tab,{eventKey:0,title:a().createElement(c.TabTitleText,null,"Runs")},a().createElement(at,null)),a().createElement(c.Tab,{eventKey:1,title:a().createElement(c.TabTitleText,null,"Systems")},a().createElement(mt,null))))}},89881:(t,e,r)=>{var n=r(47816),o=r(99291)(n);t.exports=o},69199:(t,e,r)=>{var n=r(89881),o=r(98612);t.exports=function(t,e){var r=-1,i=o(t)?Array(t.length):[];return n(t,(function(t,n,o){i[++r]=e(t,n,o)})),i}},99291:(t,e,r)=>{var n=r(98612);t.exports=function(t,e){return function(r,o){if(null==r)return r;if(!n(r))return t(r,o);for(var i=r.length,a=e?i:-1,c=Object(r);(e?a--:++a<i)&&!1!==o(c[a],a,c););return r}}},94654:(t,e,r)=>{var n=r(21078),o=r(35161);t.exports=function(t,e){return n(o(t,e),1)}},35161:(t,e,r)=>{var n=r(29932),o=r(67206),i=r(69199),a=r(1469);t.exports=function(t,e){return(a(t)?n:i)(t,o(e,3))}}}]);