/*! For license information please see Dashboard.1660236076509.4eec5ba6dc3160168658.js.LICENSE.txt */
"use strict";(self.webpackChunksed_frontend=self.webpackChunksed_frontend||[]).push([[6362],{96132:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ie});var r=n(50008),o=n.n(r),a=n(48926),i=n.n(a),c=n(63038),l=n.n(c),s=n(76430),u=n(50470),d=n(83215),h=n(80123),f=n(39173),p=n(97522),m=n.n(p),g=n(37703),y=n(16530),v=n(4147),b=n(45697),E=n.n(b),w=n(94962),O=n(1401);function C(){C=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d={};function h(){}function f(){}function p(){}var m={};l(m,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(x([])));y&&y!==t&&n.call(y,a)&&(m=y);var v=p.prototype=h.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(a,i,c,l){var s=u(e[a],e,i);if("throw"!==s.type){var d=s.arg,h=d.value;return h&&"object"==o()(h)&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):t.resolve(h).then((function(e){d.value=e,c(d)}),(function(e){return r("throw",e,c,l)}))}l(s.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return f.prototype=p,l(v,"constructor",p),l(p,"constructor",f),f.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(v),l(v,c,"Generator"),l(v,a,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var _=function(e){var t=e.isOpen,n=void 0!==t&&t,r=e.handleCancel,o=e.handleConfirm,a=e.systemsCount,c=e.data;return m().createElement(s.Modal,{variant:"small",title:"Confirm changes",isOpen:n,onClose:r,actions:[m().createElement(s.Button,{key:"confirm",variant:"primary",type:"button",onClick:o},"Confirm changes"),m().createElement(s.Button,{key:"cancel",variant:"link",type:"button",onClick:r},"Cancel")]},m().createElement(s.TextContent,null,m().createElement(s.Text,{component:"p"},"Your changes applies to"," ",m().createElement("b",null,a," connected ",(0,O._)(a,"system")),". Selected settings will also be applied to ",m().createElement("b",null,"all future systems")," ","that are connected through remote host configuration (rhc)."),m().createElement(s.Text,{component:"p",className:"pf-u-mb-sm"},"Upon confirmation, an Ansible Playbook will be pushed to"," ",a," ",(0,O._)(a,"system")," to apply changes.")),m().createElement(s.Button,{variant:"link",onClick:function(){i()(C().mark((function e(){var t;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.dx.getPlaybookPreview({compliance_openscap:c.useOpenSCAP?"enabled":"disabled",insights:c.hasInsights?"enabled":"disabled",remediations:c.enableCloudConnector?"enabled":"disabled"});case 2:t=e.sent,(0,O.S)(t);case 4:case"end":return e.stop()}}),e)})))()},style:{paddingLeft:0}},"View playbook"))};_.propTypes={isOpen:E().bool,handleConfirm:E().func.isRequired,handleCancel:E().func.isRequired,systemsCount:E().number.isRequired,data:E().shape({useOpenSCAP:E().bool,enableCloudConnector:E().bool,hasInsights:E().bool})};const S=_;var x=n(59713),P=n.n(x),k=n(35451),L=n(80516),I=n(63529),j=n(43707),T=[{id:"enableCloudConnector",name:"Allow Insights users to use “Remediations” to send Ansible Playbooks to fix issues on your systems",description:"Users can create Ansible Playbooks using the “Remediate” function in Insights and then execute these playbooks on systems in inventory. Playbooks are sent to systems to fix issues using the Cloud Connector technology.",links:[{name:"About Cloud Connector",link:"https://access.redhat.com/documentation/en-us/red_hat_insights/2022/html-single/red_hat_connector_configuration_guide/index"}]},{id:"hasInsights",name:"Allow remote host configuration to manage the configuration of Red Hat services",description:"Based on changes users make in this settings area, the remote host configuration tool can push Ansible Playbooks to connected systems to update their configutaions. This includes turning these configurations on and off, based on selections.",links:[{name:"View configuration manager playbooks",link:"https://access.redhat.com/documentation/en-us/red_hat_insights/2022/html/assessing_and_monitoring_rhel_resource_optimization_with_insights_for_red_hat_enterprise_linux/index"}]},{id:"useOpenSCAP",secondary:!0,name:"Service: Use OpenSCAP for Compliance policies",additionalInfo:"Requires Insights; Configuration management",description:"This setting installs OpenSCAP for connected systems and ensures that systems are using the most current versions of profiles and policies. OpenSCAP is required for systems to use the compliance service.",links:[{name:"About Insights for RHEL Compliance",link:"https://access.redhat.com/documentation/en-us/red_hat_insights/2022/html/assessing_and_monitoring_security_policy_compliance_of_rhel_systems/index"},{name:"View configuration playbook",link:"https://github.com/RedHatInsights/config-manager/tree/master/playbooks"}]}];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e,t,n){return m().createElement(s.Button,{ouiaId:"secondary-edit-button",onClick:function(){return n(!0)},variant:"secondary",isAriaDisabled:e||!t},"Change settings")},N=function(e){var t=e.defaults,n=e.setConfirmChangesOpen,r=e.onChange,o=e.isEditing,a=e.setIsEditing,i={enableCloudConnector:{value:t.enableCloudConnector,isDisabled:!1},useOpenSCAP:{value:t.useOpenSCAP,isDisabled:!1},hasInsights:{value:t.hasInsights,isDisabled:!1}},c=(0,p.useState)(i),d=l()(c,2),h=d[0],f=d[1],g=(0,p.useState)(!1),y=l()(g,2),v=y[0],b=y[1],E=(0,j.T)("",["config-manager:activation_keys:*","config-manager:state:read","config-manager:state:write","config-manager:state-changes:read","inventory:*:read","playbook-dispatcher:run:read"],!1,!0),w=E.hasAccess,O=E.isLoading;return(0,p.useEffect)((function(){b(h.useOpenSCAP.value!==t.useOpenSCAP||h.enableCloudConnector.value!==t.enableCloudConnector||h.hasInsights.value!==t.hasInsights),r({useOpenSCAP:h.useOpenSCAP.value,enableCloudConnector:h.enableCloudConnector.value,hasInsights:h.hasInsights.value})}),[h]),m().createElement(s.Stack,{hasGutter:!0,className:"pf-u-p-md"},m().createElement(s.StackItem,null,m().createElement(s.Toolbar,{id:"toolbar-items"},m().createElement(s.ToolbarContent,null,!o&&m().createElement(s.ToolbarItem,null,w?D(O,w,a):m().createElement(s.Tooltip,{content:m().createElement("div",null,'To perform this action, you must be granted the "System Administrator" role by your Organization Administrator in your Setting\'s User Access area.')},D(O,w,a))),o&&m().createElement(m().Fragment,null,m().createElement(s.ToolbarItem,null,m().createElement(s.Button,{ouiaId:"primary-save-button",onClick:function(){return n(!0)},isDisabled:!v},"Save changes")),m().createElement(s.ToolbarItem,null,m().createElement(s.Button,{ouiaId:"secondary-cancel-button",onClick:function(){return f(i),void a(!1)},variant:"secondary"},"Cancel")),m().createElement(s.ToolbarItem,null,m().createElement(s.Alert,{variant:"info",isInline:!0,isPlain:!0,title:"Changes will affect all systems connected with Red Hat connector"})))))),m().createElement(s.StackItem,null,m().createElement(I.TableComposable,{"aria-label":"Settings table"},m().createElement(I.Thead,null,m().createElement(I.Tr,null,m().createElement(I.Th,null,"Permission"),m().createElement(I.Th,null,"Status"))),m().createElement(I.Tbody,null,T.map((function(e){return m().createElement(I.Tr,{key:e.name},m().createElement(I.Td,{dataLabel:"Permission",width:80,style:e.secondary&&{paddingLeft:70,fontSize:14}},m().createElement(s.Stack,null,m().createElement(s.StackItem,null,m().createElement(s.Flex,null,m().createElement(s.FlexItem,null,m().createElement("b",null,e.name)),e.additionalInfo&&m().createElement(s.FlexItem,{style:{color:"var(--pf-global--Color--100)"}},m().createElement("i",null,e.additionalInfo)))),m().createElement(s.StackItem,{style:{fontSize:14}},e.description),e.links&&m().createElement(s.StackItem,{className:"stack-item"},m().createElement(s.Flex,null,e.links.map((function(e){return m().createElement(s.FlexItem,{key:e.name},m().createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.name,m().createElement(u.ZP,{className:"pf-u-ml-sm"})))})))))),!o&&m().createElement(I.Td,{dataLabel:"Status"},function(e){return h[e.id].value?m().createElement(s.Flex,{style:{color:"var(--pf-global--success-color--200)"}},m().createElement(s.FlexItem,{spacer:{default:"spacerXs"}},m().createElement(k.ZP,null)),m().createElement(s.FlexItem,{className:"status"},m().createElement("b",null,"Enabled"))):m().createElement(s.Flex,{style:{color:"var(--pf-global--default-color--300)"}},m().createElement(s.FlexItem,{spacer:{default:"spacerXs"}},m().createElement(L.ZP,null)),m().createElement(s.FlexItem,{className:"status"},m().createElement("b",null,"Disabled")))}(e)),o&&m().createElement(I.Td,{dataLabel:"Status"},m().createElement(s.ToggleGroup,{"aria-label":"Default with single selectable"},m().createElement(s.ToggleGroupItem,{text:"Enabled",isSelected:h[e.id].value,onChange:function(){return f(R(R({},h),{},P()({},e.id,R(R({},h[e.id]),{},{value:!0}))))},isDisabled:h[e.id].isDisabled}),m().createElement(s.ToggleGroupItem,{text:"Disabled",isSelected:!h[e.id].value,onChange:function(){return f(R(R({},h),{},P()({},e.id,R(R({},h[e.id]),{},{value:!1}))))},isDisabled:h[e.id].isDisabled}))))}))))))};N.propTypes={setMadeChanges:E().func.isRequired,defaults:E().shape({useOpenSCAP:E().bool,hasInsights:E().bool,enableCloudConnector:E().bool}),onChange:E().func.isRequired,madeChanges:E().bool,setConfirmChangesOpen:E().func.isRequired,isEditing:E().bool.isRequired,setIsEditing:E().func.isRequired},N.defaultProps={defaults:{useOpenSCAP:!1,hasInsights:!1,enableCloudConnector:!1}};const F=N;var G,U=n(30319),H=n(94778),B=n(18546),q=n(49120);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const M=(0,B.Gg)((G={},P()(G,"".concat(q.o9,"_PENDING"),(function(e){return z(z({},e),{},{loaded:!1})})),P()(G,"".concat(q.o9,"_FULFILLED"),(function(e,t){var n=t.payload;return z(z({},e),{},{loaded:!0,hosts:(null==n?void 0:n.results)||[],total:(null==n?void 0:n.count)||0,page:(null==n?void 0:n.page)||0,perPage:(null==n?void 0:n.per_page)||0})})),P()(G,"".concat(q.o9,"_ERROR"),(function(){return{error:!0}})),G),{loaded:!1,values:{}});var Y;function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(e){return V(V({},e),{},{loaded:!1})},X=function(e,t){var n,r,o,a=t.payload;return V(V({},e),{},{loaded:!0,values:{useOpenSCAP:"enabled"===(null==a||null===(n=a.state)||void 0===n?void 0:n.compliance_openscap),enableCloudConnector:"enabled"===(null==a||null===(r=a.state)||void 0===r?void 0:r.remediations),hasInsights:"enabled"===(null==a||null===(o=a.state)||void 0===o?void 0:o.insights)}})};const $=(0,B.Gg)((Y={},P()(Y,"".concat(q.If,"_PENDING"),Q),P()(Y,"".concat(q.K8,"_PENDING"),Q),P()(Y,"".concat(q.K8,"_FULFILLED"),X),P()(Y,"".concat(q.If,"_FULFILLED"),X),P()(Y,"".concat(q.K8,"_ERROR"),(function(){return{error:!0}})),Y),{loaded:!1,values:{}});var J;function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const te=(0,B.Gg)((J={},P()(J,"".concat(q.tj,"_PENDING"),(function(e){return ee(ee({},e),{},{loaded:!1})})),P()(J,"".concat(q.tj,"_FULFILLED"),(function(e,t){var n=t.payload;return ee(ee({},e),{},{loaded:!0},n||{})})),P()(J,"".concat(q.tj,"_ERROR"),(function(){return{error:!0}})),J),{loaded:!1,results:[]});function ne(){ne=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),i=new _(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d={};function h(){}function f(){}function p(){}var m={};l(m,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(S([])));y&&y!==t&&n.call(y,a)&&(m=y);var v=p.prototype=h.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(a,i,c,l){var s=u(e[a],e,i);if("throw"!==s.type){var d=s.arg,h=d.value;return h&&"object"==o()(h)&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):t.resolve(h).then((function(e){d.value=e,c(d)}),(function(e){return r("throw",e,c,l)}))}l(s.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return f.prototype=p,l(v,"constructor",p),l(p,"constructor",f),f.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(v),l(v,c,"Generator"),l(v,a,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var re=v._j,oe=(0,p.lazy)((function(){return n.e(9767).then(n.bind(n,98356))})),ae=(0,p.lazy)((function(){return Promise.all([n.e(2696),n.e(8239)]).then(n.bind(n,34003))}));const ie=function(){var e=(0,y.useHistory)(),t=(0,p.useContext)(U.gE).getRegistry,n=(0,p.useState)(!1),r=l()(n,2),o=r[0],a=r[1],c=(0,p.useState)(!1),v=l()(c,2),b=v[0],E=v[1],w=(0,p.useState)(!1),O=l()(w,2),C=O[0],_=O[1],x=(0,p.useRef)(),P=(0,g.I0)(),k=(0,g.v9)((function(e){var t=e.activeStateReducer;return null==t?void 0:t.loaded})),L=(0,g.v9)((function(e){var t,n,r,o=e.activeStateReducer;return{useOpenSCAP:null==o||null===(t=o.values)||void 0===t?void 0:t.useOpenSCAP,enableCloudConnector:null==o||null===(n=o.values)||void 0===n?void 0:n.enableCloudConnector,hasInsights:null==o||null===(r=o.values)||void 0===r?void 0:r.hasInsights}}),g.wU),I=L.useOpenSCAP,j=L.enableCloudConnector,T=L.hasInsights,A=(0,g.v9)((function(e){var t=e.connectedSystemsReducer;return{systemsLoaded:null==t?void 0:t.loaded,systemsCount:null==t?void 0:t.total}}),g.wU).systemsCount;return(0,p.useEffect)((function(){t().register({activeStateReducer:$,logReducer:te,connectedSystemsReducer:M}),P((0,H.Qe)()),P((0,H.j$)())}),[t]),(0,p.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appAction)||void 0===n||n.call(t,"cloud-connector-dashboard")}),[]),m().createElement(m().Fragment,null,m().createElement(y.Route,{exact:!0,path:re.logModal,render:function(){return m().createElement(p.Suspense,{fallback:m().createElement(s.Bullseye,null,m().createElement(s.Spinner,null))},m().createElement(ae,null))}}),m().createElement(h.Z,{className:"page-header"},m().createElement(s.Split,{hasGutter:!0,className:"page-title"},m().createElement(s.SplitItem,{isFilled:!0},m().createElement(s.Flex,null,m().createElement(s.FlexItem,{spacer:{default:"spacerSm"}},m().createElement(f.Z,{title:"Remote Host Configuration Manager"})),m().createElement(s.FlexItem,null,m().createElement(oe,null)))),m().createElement(s.SplitItem,null,m().createElement(s.Button,{onClick:function(){return e.push(re.logModal)},variant:"link"},"View log"))),m().createElement(s.Stack,{hasGutter:!0},m().createElement(s.StackItem,null,"Selections here affect Red Hat Enterprise Linux (RHEL) systems connected to Red Hat with remote host configuration (rhc). Upon saving changes, Ansible Playbooks are automatically pushed to connected systems to update the configuration of the connection to Red Hat."),m().createElement(s.StackItem,null,m().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://access.redhat.com/documentation/en-us/red_hat_insights/2022/html-single/red_hat_connector_configuration_guide/index"},"Connecting with Red Hat",m().createElement(u.ZP,{className:"pf-u-ml-sm"}))))),m().createElement(s.Page,null,m().createElement("div",{className:"dashboard__content"},k||void 0!==I&&void 0!==j?m().createElement(F,{madeChanges:b,setConfirmChangesOpen:a,setMadeChanges:E,setIsEditing:_,isEditing:C,defaults:{useOpenSCAP:I,enableCloudConnector:j,hasInsights:T},onChange:function(e){x.current=e}}):m().createElement(s.Bullseye,null,m().createElement(s.Spinner,{className:"pf-u-p-lg",size:"xl"})))),m().createElement(S,{isOpen:o,handleCancel:function(){return a(!1)},systemsCount:A,data:x.current,handleConfirm:function(){a(!1),i()(ne().mark((function e(){var t;return ne().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,H.mt)(x.current),P(t),e.next=4,t.payload;case 4:P((0,d.wN)({variant:"success",title:"Changes saved",description:"Your service enablement changes were applied to connected systems"})),E(!1),_(!1);case 7:case"end":return e.stop()}}),e)})))()}}))}},94962:(e,t,n)=>{n.d(t,{dx:()=>i,TQ:()=>a,ok:()=>c});var r=n(33366),o=n(91571),a=function(){return r.ZP.get("".concat("/api/inventory/v1","/hosts?filter[system_profile][rhc_client_id]=not_nil&fields[system_profile]=rhc_client_id,rhc_config_state&staleness=fresh&staleness=stale&&registered_with=insights"))},i=new o.DefaultApi(void 0,"/api/config-manager/v1",r.ZP),c=function(e){var t=e.useOpenSCAP,n=e.enableCloudConnector,r=e.hasInsights;return i.updateStates({compliance_openscap:t?"enabled":"disabled",insights:t||n||r?"enabled":"disabled",remediations:n?"enabled":"disabled"})}},49120:(e,t,n)=>{n.d(t,{If:()=>o,K8:()=>r,o9:()=>i,tj:()=>a});var r="GET_CURR_STATE",o="SET_CURR_STATE",a="GET_LOG",i="GET_CONNECTED_HOSTS"},94778:(e,t,n)=>{n.d(t,{Qe:()=>a,VU:()=>c,j$:()=>l,mt:()=>i});var r=n(94962),o=n(49120),a=function(){return{type:o.K8,payload:r.dx.getCurrentState()}},i=function(e){return{type:o.If,payload:(0,r.ok)(e)}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.perPage,n=void 0===t?50:t,a=e.page,i=void 0===a?1:a;return{type:o.tj,payload:r.dx.getStates(n,(i-1)*n)}},l=function(){return{type:o.o9,payload:(0,r.TQ)()}}},1401:(e,t,n)=>{n.d(t,{S:()=>o,_:()=>r});var r=function(e,t,n){return e>1?n||t+"s":t},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"".concat((new Date).toISOString()),n="data:text/plain;charset=utf-8,",r=new Blob([e],{type:n}),o=document.createElement("a");o.setAttribute("href",URL.createObjectURL(r)),o.setAttribute("download","".concat(t,".yml")),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)}}}]);