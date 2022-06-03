/*! For license information please see 7550.1654284398948.f1dafa299acc9fb34b75.js.LICENSE.txt */
"use strict";(self.webpackChunksed_frontend=self.webpackChunksed_frontend||[]).push([[7550],{97568:(t,e,n)=>{n.d(e,{Z:()=>I});var r=n(97522),o=n.n(r),i=n(16530),a=n(76430),c=n(4147),u=n(88767),l=n(63038),s=n.n(l),f=n(50008),h=n.n(f),d=n(48926),v=n.n(d);function p(){p=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new x(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function f(){}function d(){}function v(){}var y={};c(y,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(j([])));g&&g!==e&&n.call(g,o)&&(y=g);var w=v.prototype=f.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==h()(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=v,c(w,"constructor",v),c(v,"constructor",d),d.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),c(w,a,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var y=function(){var t=v()(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.resolve(window.insights.chrome.getUserPermissions("config-manager")).then((function(t){var e=t.map((function(t){return t.permission}));return{canReadActivationKeys:e.includes("config-manager:activation_keys:read")||e.includes("config-manager:activation_keys:*"),canWriteActivationKeys:e.includes("config-manager:activation_keys:write")||e.includes("config-manager:activation_keys:*")}})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){try{return window.insights.chrome.auth.getUser()}catch(t){throw new Error("Error authenticating user: ".concat(t.message))}},g=n(28455),w=n(15984),E=n(45697),b=function(t){var e,n,a=t.children,c=(0,u.useQueryClient)(),l=(0,i.useLocation)(),f=(0,u.useQuery)("user",(function(){return Promise.all([m(),y()]).then((function(t){var e,n,r=s()(t,2),o=r[0],i=r[1];return{accountNumber:o.identity.account_number,orgId:null==o||null===(e=o.identity)||void 0===e||null===(n=e.internal)||void 0===n?void 0:n.org_id,rbacPermissions:i}}))})),h=f.isLoading,d=f.isFetching,v=f.isSuccess,p=f.isError;return(0,r.useEffect)((function(){c.invalidateQueries("user")}),[l.pathname]),v&&(null===(e=window.insights)||void 0===e||null===(n=e.chrome)||void 0===n||n.hideGlobalFilter()),!0===p?o().createElement(w.Z,null):!0===h||!0===d?o().createElement(g.Z,null):!0===v?o().createElement(o().Fragment,null,a):void 0};b.propTypes={children:n.n(E)().object};const L=b;var k=c._j,O=(0,r.lazy)((function(){return Promise.all([n.e(6213),n.e(3529),n.e(6362)]).then(n.bind(n,96132))})),x=(0,r.lazy)((function(){return Promise.all([n.e(3529),n.e(2475)]).then(n.bind(n,2475))})),j=function(){return o().createElement(r.Suspense,{fallback:o().createElement(a.Bullseye,null,o().createElement(a.Spinner,null))},o().createElement(L,null,o().createElement(i.Switch,null,o().createElement(i.Route,{path:k.activationKeys,component:x}),o().createElement(i.Route,{path:k.connector,component:O}))))},P=n(51344),_=n(83215),N=n(30319),S=n(1627),A=n(55091);const T=function(){var t=(0,A.Z)(),e=t.notifications,n=t.removeNotification;return o().createElement(a.AlertGroup,{isToast:!0},e.map((function(t,e){return o().createElement(a.Alert,{isLiveRegion:!0,timeout:t.timeout,title:t.message,variant:t.variant,key:t.key,actionClose:o().createElement(a.AlertActionCloseButton,{"data-testid":"notification-close-btn-".concat(e),title:t.message,variantLabel:"".concat(t.variant," alert"),onClose:function(){n(t.key),null!=t&&t.downloadHref&&window.URL.revokeObjectURL(t.downloadHref)}})})})))};var C=new u.QueryClient({defaultOptions:{queries:{retry:3,retryDelay:1e4,staleTime:1/0,refetchOnWindowFocus:!1,refetchOnMount:!1}}});const I=function(){var t=(0,r.useContext)(N.gE).getRegistry,e=(0,i.useHistory)();(0,r.useEffect)((function(){t().register({notifications:_.ee})}),[t]);var n=(0,r.useMemo)((function(){return{settings:function(t){var e,n;null===(e=insights)||void 0===e||null===(n=e.chrome)||void 0===n||n.appNavClick({id:"settings",redirect:t})},activationKeys:function(t){var e,n;null===(e=insights)||void 0===e||null===(n=e.chrome)||void 0===n||n.appNavClick({id:"activationKeys",redirect:t})}}}),[]);return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("connector");var t=insights.chrome.on("APP_NAVIGATION",(function(t){t.domEvent&&(e.push("/".concat(t.navId)),void 0!==n[t.navId]?n[t.navId](!0):n.settings(!0))}));return function(){return t()}}),[]),o().createElement(u.QueryClientProvider,{client:C},o().createElement(P.ZP,null),o().createElement(S.Z,null,o().createElement(T,null),o().createElement(j,null)))}},28455:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(97522),o=n.n(r),i=n(76430);const a=function(){return o().createElement(i.Bullseye,null,o().createElement(i.Spinner,null))}},1627:(t,e,n)=>{n.d(e,{Z:()=>E,u:()=>w});var r=n(59713),o=n.n(r),i=n(319),a=n.n(i),c=n(67154),u=n.n(c),l=n(63038),s=n.n(l),f=n(97522),h=n.n(f),d=n(76430),v=n(44586),p=n(45697),y=n.n(p);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w=h().createContext({notifications:[],addNotification:function(){return null},removeNotification:function(){return null}}),E=function(t){var e=t.children,n=(0,f.useState)([]),r=s()(n,2),o=r[0],i=r[1],c={notifications:o,addNotification:function(t,e,n){return function(t,e,n){var r=function(t,e,n){var r,o={variant:t,message:e,key:(0,v.Z)(),timeout:null===(r=null==n?void 0:n.hasTimeout)||void 0===r||r};if(n&&n.alertLinkText&&n.alertLinkHref){var i=n.alertLinkIsDownload?{download:""}:{},a=h().createElement(h().Fragment,null,h().createElement(d.AlertActionLink,null,h().createElement("a",u()({href:n.alertLinkHref},i),n.alertLinkText)));o.actionLinks=a}return n&&n.alertLinkIsDownload&&n.alertLinkHref&&(o.downloadHref=n.alertLinkHref),o}(t,e,n),c=[].concat(a()(o),[g({},r)]);return n&&n.keyOfAlertToReplace&&(c=c.filter((function(t){return t.key!==n.keyOfAlertToReplace}))),i(c),r.key}(t,e,n)},removeNotification:function(t){return function(t){i(o.filter((function(e){return e.key!==t})))}(t)}};return h().createElement(w.Provider,{value:c},e)};E.propTypes={children:y().node}},55091:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(97522),o=n(1627);const i=function(){var t=(0,r.useContext)(o.u),e=t.notifications,n=t.addNotification;return{notifications:e,addSuccessNotification:function(t,e){return n("success",t,e)},addErrorNotification:function(t,e){return n("danger",t,e)},addInfoNotification:function(t,e){return n("info",t,e)},removeNotification:t.removeNotification}}},30319:(t,e,n)=>{n.d(e,{S1:()=>l,gE:()=>u});var r=n(97522),o=n(67336),i=n(68573),a=n.n(i),c=n(84885),u=(0,r.createContext)({getRegistry:function(){}});function l(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,o.JH)({},[a(),(0,c.ZP)({errorDescriptionKey:["detail","stack"]})].concat(e))}},4147:t=>{t.exports=JSON.parse('{"_j":{"connector":"/","connectSystemsModal":"/connect-systems","logModal":"/log","activationKeys":"/activation-keys"}}')}}]);
//# sourceMappingURL=../sourcemaps/7550.e5a30e46fa04a994548eff367e80b3a1.js.map