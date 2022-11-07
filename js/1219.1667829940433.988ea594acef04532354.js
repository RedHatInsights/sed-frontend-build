/*! For license information please see 1219.1667829940433.988ea594acef04532354.js.LICENSE.txt */
"use strict";(self.webpackChunksed_frontend=self.webpackChunksed_frontend||[]).push([[1219],{81219:(t,e,r)=>{r.r(e),r.d(e,{default:()=>Y});var n=r(63038),o=r.n(n),a=r(97522),i=r.n(a),c=r(16530),u=r(76430),l=r(14748),s=r(80123),h=r(39173),f=r(63529),p=r(50008),d=r.n(p),v=r(48926),y=r.n(v),m=r(88767);function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var v={};c(v,o,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==e&&r.call(m,o)&&(v=m);var E=p.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==d()(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=p,c(E,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(E),c(E,i,"Generator"),c(E,o,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var E=function(){var t=y()(g().mark((function t(){var e,r,n;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.insights.chrome.auth.getToken();case 2:return e=t.sent,t.next=5,fetch("/api/rhsm/v2/activation_keys",{headers:{Authorization:"Bearer ".concat(e)}});case 5:return r=t.sent,t.next=8,r.json();case 8:return n=t.sent,t.abrupt("return",n.body);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=y()(g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){return(0,m.useQuery)("activation_keys",(function(){return w()}))},x=r(28455),L=r(15984),T=r(45697),k=r.n(T),S=r(79003),_=function(t){return i().createElement(u.KebabToggle,{onToggle:t.onToggle,isDisabled:t.isDisabled,className:t.isDisabled?"pf-m-disabled":""},"Actions")},O=function(t){var e=t.actions,r="Key Name",n="Role",o="Usage",a=b(),u=a.isLoading,l=a.error,s=a.data,h=(0,m.useQueryClient)().getQueryData("user"),p=(0,c.useRouteMatch)().url,d=(0,S.Z)("sed-frontend.activationKeysDetailsPage"),v=function(){return i().createElement(f.TableComposable,{"aria-label":"ActivationKeys"},i().createElement(f.Thead,null,i().createElement(f.Tr,{ouiaSafe:!0},i().createElement(f.Th,{width:40},r),i().createElement(f.Th,null,n),i().createElement(f.Th,null,"SLA"),i().createElement(f.Th,null,o),i().createElement(f.Td,null))),i().createElement(f.Tbody,null,s.map((function(t){var a=e(t.name);return i().createElement(f.Tr,{key:t.name,ouiaSafe:!0},i().createElement(f.Td,{modifier:"breakWord",dataLabel:r},d?i().createElement(c.Link,{to:"".concat(p,"/").concat(t.name)}," ",t.name):t.name),i().createElement(f.Td,{dataLabel:n},t.role),i().createElement(f.Td,{dataLabel:"SLA"},t.serviceLevel),i().createElement(f.Td,{dataLabel:o},t.usage),i().createElement(f.Td,{isActionCell:!0},i().createElement(f.ActionsColumn,{items:a,isDisabled:!h.rbacPermissions.canWriteActivationKeys,actionsToggle:_})))}))))};return u&&!l?i().createElement(x.Z,null):u||l?i().createElement(L.Z,null):i().createElement(v,null)};O.propTypes={actions:k().func},_.propTypes={onToggle:k().func,isDisabled:k().bool};const j=O;var C=r(48675),N=r(25811),A=function(t){var e=t.onClick,r=(0,m.useQueryClient)().getQueryData("user");return i().createElement(u.Button,{variant:"primary",onClick:e,isDisabled:!r.rbacPermissions.canWriteActivationKeys},"Create activation key")};A.propTypes={onClick:k().func.isRequired};const P=A;var F=function(t){var e=t.handleModalToggle;return i().createElement(i().Fragment,null,i().createElement(u.EmptyState,null,i().createElement(u.EmptyStateIcon,{icon:N.ZP}),i().createElement(u.Title,{headingLevel:"h5",size:"lg"},"No activation keys"),i().createElement(u.EmptyStateBody,null,"You currently have no activation keys to display. Activation keys allow you to register a system with system purpose, role and usage attached."),i().createElement(P,{onClick:e})))};F.propTypes={handleModalToggle:k().func.isRequired};const G=F;var I=r(39030);function M(){M=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var v={};c(v,o,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(k([])));m&&m!==e&&r.call(m,o)&&(v=m);var g=p.prototype=h.prototype=Object.create(v);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==d()(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var Z=function(){var t=y()(M().mark((function t(e){var r,n,o,a,i,c;return M().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.name,n=e.role,o=e.serviceLevel,a=e.usage,t.next=3,window.insights.chrome.auth.getToken();case 3:return i=t.sent,t.next=6,fetch("/api/rhsm/v2/activation_keys",{method:"POST",headers:{Authorization:"Bearer ".concat(i),"Content-Type":"application/json"},body:JSON.stringify({name:r,role:n,serviceLevel:o,usage:a})});case 6:if((c=t.sent).ok){t.next=9;break}throw new Error("Status Code ".concat(c.status,".  Error creating activation key: ").concat(c.statusText,"."));case 9:return t.abrupt("return",c.json());case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(t){var e=(0,m.useQueryClient)(),r=a.useState(!1),n=o()(r,2),i=n[0],c=n[1],l=a.useState(!1),s=o()(l,2),h=s[0],f=s[1],p=t.handleModalToggle,d=t.isOpen,v=(0,m.useMutation)(Z),y=v.mutate,g=v.isLoading;return a.createElement(u.Modal,{variant:u.ModalVariant.large,title:"Create new activation key",description:"",isOpen:d,onClose:p},g?a.createElement(x.Z,null):a.createElement(I.Z,{handleModalToggle:p,submitForm:function(t){var r=t.name,n=t.role,o=t.serviceLevel,a=t.usage;y({name:r,role:n,serviceLevel:o,usage:a},{onSuccess:function(){f(!1),c(!0),e.invalidateQueries("activation_keys")},onError:function(){f(!0),c(!1)}})},isSuccess:i,isError:h}))};D.propTypes={handleModalToggle:k().func.isRequired,isOpen:k().bool.isRequired,activationKeyName:k().string};const K=D;var Q=r(52281),R=r(37603),z=r(38221);const Y=(0,c.withRouter)((function(){var t,e=(0,m.useQueryClient)().getQueryData("user"),r=b(),n=r.isLoading,c=r.error,f=r.data,p=(0,a.useState)(!1),d=o()(p,2),v=d[0],y=d[1],g=(0,a.useState)(""),E=o()(g,2),w=E[0],L=E[1],T=(0,a.useState)(!1),k=o()(T,2),S=k[0],_=k[1],O=(0,a.useState)(!1),N=o()(O,2),A=N[0],F=N[1],I=function(){y(!v)},M=i().createElement(u.TextContent,{className:"pf-u-font-size-sm"},i().createElement(u.Text,null,"Activation keys assist you in registering systems. Metadata such as role, system purpose, and usage can be automatically attached to systems via an activation key, and monitored with  ",i().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://console.redhat.com/insights/subscriptions/rhel"},"Subscription Watch.")),i().createElement(u.Text,null,"To register with an activation key, you will need your organization ID:"," ",i().createElement("b",null,e.orgId)));n?t=i().createElement(x.Z,null):n||c||f.length?n||c||!f.length||(t=i().createElement(i().Fragment,null,i().createElement(u.ActionGroup,null,i().createElement(P,{onClick:I})),i().createElement(j,{actions:function(t){return[{title:"Edit",onClick:function(){return Y(t)}},{title:"Delete",onClick:function(){return D(t)}}]}}))):t=i().createElement(G,{handleModalToggle:I});var Z=function(t,e){L(t?"":e)},D=function(t){Z(S,t),_(!S)},Y=function(t){Z(A,t),F(!A)},q=function(){return i().createElement(i().Fragment,null,i().createElement(s.Z,null,i().createElement(u.Split,{hasGutter:!0,className:"page-title"},i().createElement(u.SplitItem,{isFilled:!0},i().createElement(u.Flex,null,i().createElement(u.FlexItem,{spacer:{default:"spacerSm"}},i().createElement(h.Z,{title:"Activation Keys"})),i().createElement(u.FlexItem,null,i().createElement(z.Z,{popoverContent:M,title:"Activation Keys",position:"right"}))))),i().createElement(u.TextContent,null,i().createElement(u.Text,{component:u.TextVariants.p},"Organization ID: ",e.orgId))),i().createElement(l.Z,null,i().createElement(u.PageSection,{variant:u.PageSectionVariants.light},t)),i().createElement(K,{isOpen:v,handleModalToggle:I}),i().createElement(Q.Z,{title:"Edit activation key",isOpen:A,handleModalToggle:Y,activationKeyName:w,modalSize:"large"}),i().createElement(R.Z,{handleModalToggle:D,isOpen:S,name:w}))};return e.rbacPermissions.canReadActivationKeys?i().createElement(q,null):i().createElement(C.Z,null)}))}}]);
//# sourceMappingURL=../sourcemaps/1219.624d7e57e617be4ee2062efe991b43b7.js.map