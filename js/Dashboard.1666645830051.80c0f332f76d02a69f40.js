/*! For license information please see Dashboard.1666645830051.80c0f332f76d02a69f40.js.LICENSE.txt */
"use strict";(self.webpackChunksed_frontend=self.webpackChunksed_frontend||[]).push([[6362],{96132:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ie});var r=n(50008),o=n.n(r),a=n(48926),i=n.n(a),l=n(63038),c=n.n(l),s=n(76430),u=n(50470),d=n(83215),f=n(80123),p=n(39173),h=n(97522),m=n.n(h),y=n(37703),v=n(16530),g=n(4147),b=n(45697),E=n.n(b),w=n(94962),O=n(1401);function C(){C=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=w(i,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d={};function f(){}function p(){}function h(){}var m={};c(m,a,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(P([])));v&&v!==t&&n.call(v,a)&&(m=v);var g=h.prototype=f.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(a,i,l,c){var s=u(e[a],e,i);if("throw"!==s.type){var d=s.arg,f=d.value;return f&&"object"==o()(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,l,c)}),(function(e){r("throw",e,l,c)})):t.resolve(f).then((function(e){d.value=e,l(d)}),(function(e){return r("throw",e,l,c)}))}c(s.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function P(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return p.prototype=h,c(g,"constructor",h),c(h,"constructor",p),p.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),c(g,l,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=P,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var _=function(e){var t=e.isOpen,n=void 0!==t&&t,r=e.handleCancel,o=e.handleConfirm,a=e.systemsCount,l=e.data;return m().createElement(s.Modal,{variant:"small",title:"Confirm changes",isOpen:n,onClose:r,actions:[m().createElement(s.Button,{key:"confirm",variant:"primary",type:"button",onClick:o},"Confirm changes"),m().createElement(s.Button,{key:"cancel",variant:"link",type:"button",onClick:r},"Cancel")]},m().createElement(s.TextContent,null,m().createElement(s.Text,{component:"p"},"Your changes applies to"," ",m().createElement("b",null,a," connected ",(0,O._)(a,"system")),". Selected settings will also be applied to ",m().createElement("b",null,"all future systems")," ","that are connected through remote host configuration (rhc)."),m().createElement(s.Text,{component:"p",className:"pf-u-mb-sm"},"Upon confirmation, an Ansible Playbook will be pushed to"," ",a," ",(0,O._)(a,"system")," to apply changes.")),m().createElement(s.Button,{variant:"link",onClick:function(){i()(C().mark((function e(){var t;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.dx.getPlaybookPreview({compliance_openscap:l.useOpenSCAP?"enabled":"disabled",insights:l.hasInsights?"enabled":"disabled",remediations:l.enableCloudConnector?"enabled":"disabled"});case 2:t=e.sent,(0,O.S)(t);case 4:case"end":return e.stop()}}),e)})))()},style:{paddingLeft:0}},"View playbook"))};_.propTypes={isOpen:E().bool,handleConfirm:E().func.isRequired,handleCancel:E().func.isRequired,systemsCount:E().number.isRequired,data:E().shape({useOpenSCAP:E().bool,enableCloudConnector:E().bool,hasInsights:E().bool})};const S=_;var P=n(59713),x=n.n(P),k=n(35451),L=n(80516),j=n(63529),I=n(43707),T=[{id:"enableCloudConnector",name:"Allow Insights users to use “Remediations” to send Ansible Playbooks to fix issues on your systems",description:"Users can create Ansible Playbooks using the “Remediate” function in Insights and then execute these playbooks on systems in inventory. Playbooks are sent to systems to fix issues using the Cloud Connector technology.",links:[{name:"About Cloud Connector",link:"https://access.redhat.com/documentation/en-us/red_hat_insights/2022/html/remote_host_configuration_and_management/index"}]},{id:"apply_state",name:"Allow remote host configuration to manage the configuration of Red Hat services",description:"Based on changes users make in this settings area, the remote host configuration tool can push Ansible Playbooks to connected systems to update their configurations. This includes turning these configurations on and off, based on selections.",links:[{name:"View configuration manager playbooks",link:"https://github.com/RedHatInsights/config-manager/tree/master/playbooks"}]},{id:"useOpenSCAP",secondary:!0,name:"Service: Use OpenSCAP for Compliance policies",additionalInfo:"Requires Insights; Configuration management",description:"This setting installs OpenSCAP for connected systems and ensures that systems are using the most current versions of profiles and policies. OpenSCAP is required for systems to use the compliance service.",links:[{name:"About Insights for RHEL Compliance",link:"https://access.redhat.com/documentation/en-us/red_hat_insights/2022/html/assessing_and_monitoring_security_policy_compliance_of_rhel_systems/index"},{name:"View configuration playbook",link:"https://github.com/RedHatInsights/config-manager/tree/master/playbooks"}]}];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){x()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e,t,n){return m().createElement(s.Button,{ouiaId:"secondary-edit-button",onClick:function(){return n(!0)},variant:"secondary",isAriaDisabled:e||!t},"Change settings")},N=function(e){var t=e.defaults,n=e.setConfirmChangesOpen,r=e.onChange,o=e.isEditing,a=e.setIsEditing,i={enableCloudConnector:{value:t.enableCloudConnector,isDisabled:!1},useOpenSCAP:{value:t.useOpenSCAP,isDisabled:!1},apply_state:{value:t.apply_state,isDisabled:!1}},l=(0,h.useState)(i),d=c()(l,2),f=d[0],p=d[1],y=(0,h.useState)(!1),v=c()(y,2),g=v[0],b=v[1],E=(0,I.T)("",["config-manager:activation_keys:*","config-manager:state:read","config-manager:state:write","config-manager:state-changes:read","inventory:*:read","playbook-dispatcher:run:read"],!1,!0),w=E.hasAccess,O=E.isLoading;return(0,h.useEffect)((function(){b(f.useOpenSCAP.value!==t.useOpenSCAP||f.enableCloudConnector.value!==t.enableCloudConnector||f.apply_state.value!==t.apply_state),r({useOpenSCAP:f.useOpenSCAP.value,enableCloudConnector:f.enableCloudConnector.value,apply_state:f.apply_state.value})}),[f]),m().createElement(s.Stack,{hasGutter:!0,className:"pf-u-p-md"},m().createElement(s.StackItem,null,m().createElement(s.Toolbar,{id:"toolbar-items"},m().createElement(s.ToolbarContent,null,!o&&m().createElement(s.ToolbarItem,null,w?D(O,w,a):m().createElement(s.Tooltip,{content:m().createElement("div",null,'To perform this action, you must be granted the "System Administrator" role by your Organization Administrator in your Setting\'s User Access area.')},D(O,w,a))),o&&m().createElement(m().Fragment,null,m().createElement(s.ToolbarItem,null,m().createElement(s.Button,{ouiaId:"primary-save-button",onClick:function(){return n(!0)},isDisabled:!g},"Save changes")),m().createElement(s.ToolbarItem,null,m().createElement(s.Button,{ouiaId:"secondary-cancel-button",onClick:function(){return p(i),void a(!1)},variant:"secondary"},"Cancel")),m().createElement(s.ToolbarItem,null,m().createElement(s.Alert,{variant:"info",isInline:!0,isPlain:!0,title:"Changes will affect all systems connected with Red Hat connector"})))))),m().createElement(s.StackItem,null,m().createElement(j.TableComposable,{"aria-label":"Settings table"},m().createElement(j.Thead,null,m().createElement(j.Tr,null,m().createElement(j.Th,null,"Permission"),m().createElement(j.Th,null,"Status"))),m().createElement(j.Tbody,null,T.map((function(e){return m().createElement(j.Tr,{key:e.name},m().createElement(j.Td,{dataLabel:"Permission",width:80,style:e.secondary&&{paddingLeft:70,fontSize:14}},m().createElement(s.Stack,null,m().createElement(s.StackItem,null,m().createElement(s.Flex,null,m().createElement(s.FlexItem,null,m().createElement("b",null,e.name)),e.additionalInfo&&m().createElement(s.FlexItem,{style:{color:"var(--pf-global--Color--100)"}},m().createElement("i",null,e.additionalInfo)))),m().createElement(s.StackItem,{style:{fontSize:14}},e.description),e.links&&m().createElement(s.StackItem,{className:"stack-item"},m().createElement(s.Flex,null,e.links.map((function(e){return m().createElement(s.FlexItem,{key:e.name},m().createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.name,m().createElement(u.ZP,{className:"pf-u-ml-sm"})))})))))),!o&&m().createElement(j.Td,{dataLabel:"Status"},function(e){return f[e.id].value?m().createElement(s.Flex,{style:{color:"var(--pf-global--success-color--200)"}},m().createElement(s.FlexItem,{spacer:{default:"spacerXs"}},m().createElement(k.ZP,null)),m().createElement(s.FlexItem,{className:"status"},m().createElement("b",null,"Enabled"))):m().createElement(s.Flex,{style:{color:"var(--pf-global--default-color--300)"}},m().createElement(s.FlexItem,{spacer:{default:"spacerXs"}},m().createElement(L.ZP,null)),m().createElement(s.FlexItem,{className:"status"},m().createElement("b",null,"Disabled")))}(e)),o&&m().createElement(j.Td,{dataLabel:"Status"},m().createElement(s.ToggleGroup,{"aria-label":"Default with single selectable"},m().createElement(s.ToggleGroupItem,{text:"Enabled",isSelected:f[e.id].value,onChange:function(){return p(A(A({},f),{},x()({},e.id,A(A({},f[e.id]),{},{value:!0}))))},isDisabled:f[e.id].isDisabled}),m().createElement(s.ToggleGroupItem,{text:"Disabled",isSelected:!f[e.id].value,onChange:function(){return p(A(A({},f),{},x()({},e.id,A(A({},f[e.id]),{},{value:!1}))))},isDisabled:f[e.id].isDisabled}))))}))))))};N.propTypes={setMadeChanges:E().func.isRequired,defaults:E().shape({useOpenSCAP:E().bool,apply_state:E().bool,enableCloudConnector:E().bool}),onChange:E().func.isRequired,madeChanges:E().bool,setConfirmChangesOpen:E().func.isRequired,isEditing:E().bool.isRequired,setIsEditing:E().func.isRequired},N.defaultProps={defaults:{useOpenSCAP:!1,apply_state:!1,enableCloudConnector:!1}};const F=N;var G,U=n(30319),H=n(94778),B=n(18546),q=n(49120);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){x()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const M=(0,B.Gg)((G={},x()(G,"".concat(q.o9,"_PENDING"),(function(e){return z(z({},e),{},{loaded:!1})})),x()(G,"".concat(q.o9,"_FULFILLED"),(function(e,t){var n=t.payload;return z(z({},e),{},{loaded:!0,hosts:(null==n?void 0:n.results)||[],total:(null==n?void 0:n.count)||0,page:(null==n?void 0:n.page)||0,perPage:(null==n?void 0:n.per_page)||0})})),x()(G,"".concat(q.o9,"_ERROR"),(function(){return{error:!0}})),G),{loaded:!1,values:{}});var Y;function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){x()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(e){return V(V({},e),{},{loaded:!1})},X=function(e,t){var n,r,o,a=t.payload;return V(V({},e),{},{loaded:!0,values:{useOpenSCAP:"enabled"===(null==a||null===(n=a.state)||void 0===n?void 0:n.compliance_openscap),enableCloudConnector:"enabled"===(null==a||null===(r=a.state)||void 0===r?void 0:r.remediations),hasInsights:"enabled"===(null==a||null===(o=a.state)||void 0===o?void 0:o.insights),apply_state:null==a?void 0:a.apply_state}})};const $=(0,B.Gg)((Y={},x()(Y,"".concat(q.If,"_PENDING"),Q),x()(Y,"".concat(q.K8,"_PENDING"),Q),x()(Y,"".concat(q.K8,"_FULFILLED"),X),x()(Y,"".concat(q.If,"_FULFILLED"),X),x()(Y,"".concat(q.K8,"_ERROR"),(function(){return{error:!0}})),Y),{loaded:!1,values:{}});var J;function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){x()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const te=(0,B.Gg)((J={},x()(J,"".concat(q.tj,"_PENDING"),(function(e){return ee(ee({},e),{},{loaded:!1})})),x()(J,"".concat(q.tj,"_FULFILLED"),(function(e,t){var n=t.payload;return ee(ee({},e),{},{loaded:!0},n||{})})),x()(J,"".concat(q.tj,"_ERROR"),(function(){return{error:!0}})),J),{loaded:!1,results:[]});function ne(){ne=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new _(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=w(i,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d={};function f(){}function p(){}function h(){}var m={};c(m,a,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(S([])));v&&v!==t&&n.call(v,a)&&(m=v);var g=h.prototype=f.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(a,i,l,c){var s=u(e[a],e,i);if("throw"!==s.type){var d=s.arg,f=d.value;return f&&"object"==o()(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,l,c)}),(function(e){r("throw",e,l,c)})):t.resolve(f).then((function(e){d.value=e,l(d)}),(function(e){return r("throw",e,l,c)}))}c(s.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=h,c(g,"constructor",h),c(h,"constructor",p),p.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),c(g,l,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var re=g._j,oe=(0,h.lazy)((function(){return n.e(9767).then(n.bind(n,98356))})),ae=(0,h.lazy)((function(){return Promise.all([n.e(2696),n.e(8239)]).then(n.bind(n,34003))}));const ie=function(){var e=(0,v.useHistory)(),t=(0,h.useContext)(U.gE).getRegistry,n=(0,h.useState)(!1),r=c()(n,2),o=r[0],a=r[1],l=(0,h.useState)(!1),g=c()(l,2),b=g[0],E=g[1],w=(0,h.useState)(!1),O=c()(w,2),C=O[0],_=O[1],P=(0,h.useRef)(),x=(0,y.I0)(),k=(0,y.v9)((function(e){var t=e.activeStateReducer;return null==t?void 0:t.loaded})),L=(0,y.v9)((function(e){var t,n,r,o=e.activeStateReducer;return{useOpenSCAP:null==o||null===(t=o.values)||void 0===t?void 0:t.useOpenSCAP,enableCloudConnector:null==o||null===(n=o.values)||void 0===n?void 0:n.enableCloudConnector,apply_state:null==o||null===(r=o.values)||void 0===r?void 0:r.apply_state}}),y.wU),j=L.useOpenSCAP,I=L.enableCloudConnector,T=L.apply_state,R=(0,y.v9)((function(e){var t=e.connectedSystemsReducer;return{systemsLoaded:null==t?void 0:t.loaded,systemsCount:null==t?void 0:t.total}}),y.wU).systemsCount;return(0,h.useEffect)((function(){t().register({activeStateReducer:$,logReducer:te,connectedSystemsReducer:M}),x((0,H.Qe)()),x((0,H.j$)())}),[t]),(0,h.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appAction)||void 0===n||n.call(t,"cloud-connector-dashboard")}),[]),m().createElement(m().Fragment,null,m().createElement(v.Route,{exact:!0,path:re.logModal,render:function(){return m().createElement(h.Suspense,{fallback:m().createElement(s.Bullseye,null,m().createElement(s.Spinner,null))},m().createElement(ae,null))}}),m().createElement(f.Z,{className:"page-header"},m().createElement(s.Split,{hasGutter:!0,className:"page-title"},m().createElement(s.SplitItem,{isFilled:!0},m().createElement(s.Flex,null,m().createElement(s.FlexItem,{spacer:{default:"spacerSm"}},m().createElement(p.Z,{title:"Remote Host Configuration Manager"})),m().createElement(s.FlexItem,null,m().createElement(oe,null)))),m().createElement(s.SplitItem,null,m().createElement(s.Button,{onClick:function(){return e.push(re.logModal)},variant:"link"},"View log"))),m().createElement(s.Stack,{hasGutter:!0},m().createElement(s.StackItem,null,"Selections here affect Red Hat Enterprise Linux (RHEL) systems connected to Red Hat with remote host configuration (rhc). Upon saving changes, Ansible Playbooks are automatically pushed to connected systems to update the configuration of the connection to Red Hat."),m().createElement(s.StackItem,null,m().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://access.redhat.com/documentation/en-us/red_hat_insights/2022/html/remote_host_configuration_and_management/index"},"Connecting with Red Hat",m().createElement(u.ZP,{className:"pf-u-ml-sm"}))))),m().createElement(s.Page,null,m().createElement("div",{className:"dashboard__content"},k||void 0!==j&&void 0!==I?m().createElement(F,{madeChanges:b,setConfirmChangesOpen:a,setMadeChanges:E,setIsEditing:_,isEditing:C,defaults:{useOpenSCAP:j,enableCloudConnector:I,apply_state:T},onChange:function(e){P.current=e}}):m().createElement(s.Bullseye,null,m().createElement(s.Spinner,{className:"pf-u-p-lg",size:"xl"})))),m().createElement(S,{isOpen:o,handleCancel:function(){return a(!1)},systemsCount:R,data:P.current,handleConfirm:function(){a(!1),i()(ne().mark((function e(){var t;return ne().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,H.mt)(P.current),x(t),e.next=4,t.payload;case 4:x((0,d.wN)({variant:"success",title:"Changes saved",description:"Your service enablement changes were applied to connected systems"})),E(!1),_(!1);case 7:case"end":return e.stop()}}),e)})))()}}))}},94962:(e,t,n)=>{n.d(t,{dx:()=>l,TQ:()=>a,ok:()=>s});var r=n(33366),o=n(91571),a=function(){return r.ZP.get("".concat("/api/inventory/v1","/hosts?filter[system_profile][rhc_client_id]=not_nil&fields[system_profile]=rhc_client_id,rhc_config_state&staleness=fresh&staleness=stale&&registered_with=insights"))},i="/api/config-manager/v1",l=new o.DefaultApi(void 0,i,r.ZP),c=function(e){return r.ZP.post("".concat(i,"/manage"),e,{headers:{"Content-Type":"application/json"}})},s=function(e){var t=e.useOpenSCAP,n=e.enableCloudConnector,r=e.apply_state;return Promise.all([l.updateStates({compliance_openscap:t?"enabled":"disabled",insights:"enabled",remediations:n?"enabled":"disabled"}),c(r)])}},49120:(e,t,n)=>{n.d(t,{If:()=>o,K8:()=>r,o9:()=>i,tj:()=>a});var r="GET_CURR_STATE",o="SET_CURR_STATE",a="GET_LOG",i="GET_CONNECTED_HOSTS"},94778:(e,t,n)=>{n.d(t,{Qe:()=>a,VU:()=>l,j$:()=>c,mt:()=>i});var r=n(94962),o=n(49120),a=function(){return{type:o.K8,payload:r.dx.getCurrentState()}},i=function(e){return{type:o.If,payload:(0,r.ok)(e)}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.perPage,n=void 0===t?50:t,a=e.page,i=void 0===a?1:a;return{type:o.tj,payload:r.dx.getStates(n,(i-1)*n)}},c=function(){return{type:o.o9,payload:(0,r.TQ)()}}},1401:(e,t,n)=>{n.d(t,{S:()=>o,_:()=>r});var r=function(e,t,n){return e>1?n||t+"s":t},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"".concat((new Date).toISOString()),n="data:text/plain;charset=utf-8,",r=new Blob([e],{type:n}),o=document.createElement("a");o.setAttribute("href",URL.createObjectURL(r)),o.setAttribute("download","".concat(t,".yml")),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)}}}]);