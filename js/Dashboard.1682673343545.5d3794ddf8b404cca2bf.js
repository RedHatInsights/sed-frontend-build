/*! For license information please see Dashboard.1682673343545.5d3794ddf8b404cca2bf.js.LICENSE.txt */
"use strict";(self.webpackChunksed_frontend=self.webpackChunksed_frontend||[]).push([[362],{96132:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ce});var r=n(50008),o=n.n(r),a=n(48926),i=n.n(a),c=n(63038),l=n.n(c),s=n(54785),u=n(50470),f=n(83215),d=n(89376),h=n(39173),m=n(97522),p=n.n(m),v=n(46458),y=n(16530),g=n(55140),b=n(4147),E=n(45697),w=n.n(E),O=n(94962),_=n(1401);function x(){x=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new k(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f={};function d(){}function h(){}function m(){}var p={};l(p,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&n.call(y,a)&&(p=y);var g=m.prototype=d.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(a,i,c,l){var s=u(e[a],e,i);if("throw"!==s.type){var f=s.arg,d=f.value;return d&&"object"==o()(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):t.resolve(d).then((function(e){f.value=e,c(f)}),(function(e){return r("throw",e,c,l)}))}l(s.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=m,l(g,"constructor",m),l(m,"constructor",h),h.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),l(g,c,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var k=function(e){var t=e.isOpen,n=void 0!==t&&t,r=e.handleCancel,o=e.handleConfirm,a=e.systemsCount,c=e.data,l=(0,O._D)();return p().createElement(s.Modal,{variant:"small",title:"Confirm changes",isOpen:n,onClose:r,actions:[p().createElement(s.Button,{key:"confirm",variant:"primary",type:"button",onClick:o},"Confirm changes"),p().createElement(s.Button,{key:"cancel",variant:"link",type:"button",onClick:r},"Cancel")]},p().createElement(s.TextContent,null,p().createElement(s.Text,{component:"p"},"Your changes applies to"," ",p().createElement("b",null,a," connected ",(0,_._)(a,"system")),". Selected settings will also be applied to ",p().createElement("b",null,"all future systems")," ","that are connected through remote host configuration (rhc)."),p().createElement(s.Text,{component:"p",className:"pf-u-mb-sm"},"Upon confirmation, an Ansible Playbook will be pushed to"," ",a," ",(0,_._)(a,"system")," to apply changes.")),p().createElement(s.Button,{variant:"link",onClick:function(){i()(x().mark((function e(){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getPlaybookPreview({compliance:c.compliance,insights:c.insights,remediations:c.remediations});case 2:t=e.sent,(0,_.S)(t);case 4:case"end":return e.stop()}}),e)})))()},style:{paddingLeft:0}},"View playbook"))};k.propTypes={isOpen:w().bool,handleConfirm:w().func.isRequired,handleCancel:w().func.isRequired,systemsCount:w().number.isRequired,data:w().shape({compliance:w().bool,remediations:w().bool,insights:w().bool})};const L=k;var S=n(59713),C=n.n(S),P=n(35451),j=n(80516),I=n(63133),T=n(43707),R=[{id:"remediations",name:"Allow Insights users to use “Remediations” to send Ansible Playbooks to fix issues on your systems",description:"Users can create Ansible Playbooks using the “Remediate” function in Insights and then execute these playbooks on systems in inventory. Playbooks are sent to systems to fix issues using the Cloud Connector technology.",links:[{name:"About Cloud Connector",link:"https://access.redhat.com/documentation/en-us/red_hat_insights/2023/html/remote_host_configuration_and_management/index"}]},{id:"active",name:"Allow remote host configuration to manage the configuration of Red Hat services",description:"Based on changes users make in this settings area, the remote host configuration tool can push Ansible Playbooks to connected systems to update their configurations. This includes turning these configurations on and off, based on selections.",links:[{name:"View configuration manager playbooks",link:"https://github.com/RedHatInsights/config-manager/tree/master/playbooks"}]},{id:"compliance",secondary:!0,name:"Service: Use OpenSCAP for Compliance policies",additionalInfo:"Requires Insights; Configuration management",description:"This setting installs OpenSCAP for connected systems and ensures that systems are using the most current versions of profiles and policies. OpenSCAP is required for systems to use the compliance service.",links:[{name:"About Insights for RHEL Compliance",link:"https://access.redhat.com/documentation/en-us/red_hat_insights/2023/html/assessing_and_monitoring_security_policy_compliance_of_rhel_systems/index"},{name:"View configuration playbook",link:"https://github.com/RedHatInsights/config-manager/tree/master/playbooks"}]}];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e,t,n){return p().createElement(s.Button,{ouiaId:"secondary-edit-button",onClick:function(){return n(!0)},variant:"secondary",isAriaDisabled:e||!t},"Change settings")},G=function(e){var t=e.defaults,n=e.setConfirmChangesOpen,r=e.onChange,o=e.isEditing,a=e.setIsEditing,i={remediations:{value:t.remediations,isDisabled:!1},compliance:{value:t.compliance,isDisabled:!1},active:{value:t.active,isDisabled:!1}},c=(0,m.useState)(i),f=l()(c,2),d=f[0],h=f[1],v=(0,m.useState)(!1),y=l()(v,2),g=y[0],b=y[1],E=(0,T.TE)("",["config-manager:activation_keys:*","config-manager:state:read","config-manager:state:write","config-manager:state-changes:read","inventory:*:read","playbook-dispatcher:run:read"],!1,!0),w=E.hasAccess,O=E.isLoading;return(0,m.useEffect)((function(){b(d.compliance.value!==t.compliance||d.remediations.value!==t.remediations||d.active.value!==t.active),r({compliance:d.compliance.value,remediations:d.remediations.value,active:d.active.value})}),[d]),p().createElement(s.Stack,{hasGutter:!0,className:"pf-u-p-md"},p().createElement(s.StackItem,null,p().createElement(s.Toolbar,{id:"toolbar-items"},p().createElement(s.ToolbarContent,null,!o&&p().createElement(s.ToolbarItem,null,w?F(O,w,a):p().createElement(s.Tooltip,{content:p().createElement("div",null,'To perform this action, you must be granted the "System Administrator" role by your Organization Administrator in your Setting\'s User Access area.')},F(O,w,a))),o&&p().createElement(p().Fragment,null,p().createElement(s.ToolbarItem,null,p().createElement(s.Button,{ouiaId:"primary-save-button",onClick:function(){return n(!0)},isDisabled:!g},"Save changes")),p().createElement(s.ToolbarItem,null,p().createElement(s.Button,{ouiaId:"secondary-cancel-button",onClick:function(){return h(i),void a(!1)},variant:"secondary"},"Cancel")),p().createElement(s.ToolbarItem,null,p().createElement(s.Alert,{variant:"info",isInline:!0,isPlain:!0,title:"Changes will affect all systems connected with Red Hat connector"})))))),p().createElement(s.StackItem,null,p().createElement(I.TableComposable,{"aria-label":"Settings table"},p().createElement(I.Thead,null,p().createElement(I.Tr,null,p().createElement(I.Th,null,"Permission"),p().createElement(I.Th,null,"Status"))),p().createElement(I.Tbody,null,R.map((function(e){return p().createElement(I.Tr,{key:e.name},p().createElement(I.Td,{dataLabel:"Permission",width:80,style:e.secondary&&{paddingLeft:70,fontSize:14}},p().createElement(s.Stack,null,p().createElement(s.StackItem,null,p().createElement(s.Flex,null,p().createElement(s.FlexItem,null,p().createElement("b",null,e.name)),e.additionalInfo&&p().createElement(s.FlexItem,{style:{color:"var(--pf-global--Color--100)"}},p().createElement("i",null,e.additionalInfo)))),p().createElement(s.StackItem,{style:{fontSize:14}},e.description),e.links&&p().createElement(s.StackItem,{className:"stack-item"},p().createElement(s.Flex,null,e.links.map((function(e){return p().createElement(s.FlexItem,{key:e.name},p().createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.name,p().createElement(u.ZP,{className:"pf-u-ml-sm"})))})))))),!o&&p().createElement(I.Td,{dataLabel:"Status"},function(e){return d[e.id].value?p().createElement(s.Flex,{style:{color:"var(--pf-global--success-color--200)"}},p().createElement(s.FlexItem,{spacer:{default:"spacerXs"}},p().createElement(P.ZP,null)),p().createElement(s.FlexItem,{className:"status"},p().createElement("b",null,"Enabled"))):p().createElement(s.Flex,{style:{color:"var(--pf-global--default-color--300)"}},p().createElement(s.FlexItem,{spacer:{default:"spacerXs"}},p().createElement(j.ZP,null)),p().createElement(s.FlexItem,{className:"status"},p().createElement("b",null,"Disabled")))}(e)),o&&p().createElement(I.Td,{dataLabel:"Status"},p().createElement(s.ToggleGroup,{"aria-label":"Default with single selectable"},p().createElement(s.ToggleGroupItem,{text:"Enabled",isSelected:d[e.id].value,onChange:function(){return h(N(N({},d),{},C()({},e.id,N(N({},d[e.id]),{},{value:!0}))))},isDisabled:d[e.id].isDisabled}),p().createElement(s.ToggleGroupItem,{text:"Disabled",isSelected:!d[e.id].value,onChange:function(){return h(N(N({},d),{},C()({},e.id,N(N({},d[e.id]),{},{value:!1}))))},isDisabled:d[e.id].isDisabled}))))}))))))};G.propTypes={setMadeChanges:w().func.isRequired,defaults:w().shape({compliance:w().bool,active:w().bool,remediations:w().bool}),onChange:w().func.isRequired,madeChanges:w().bool,setConfirmChangesOpen:w().func.isRequired,isEditing:w().bool.isRequired,setIsEditing:w().func.isRequired},G.defaultProps={defaults:{compliance:!1,active:!1,remediations:!1}};const A=G;var H,U=n(30319),B=n(94778),q=n(21507),M=n(49120);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const V=(0,q.Gg)((H={},C()(H,"".concat(M.o9,"_PENDING"),(function(e){return z(z({},e),{},{loaded:!1})})),C()(H,"".concat(M.o9,"_FULFILLED"),(function(e,t){var n=t.payload;return z(z({},e),{},{loaded:!0,hosts:(null==n?void 0:n.results)||[],total:(null==n?void 0:n.count)||0,page:(null==n?void 0:n.page)||0,perPage:(null==n?void 0:n.per_page)||0})})),C()(H,"".concat(M.o9,"_ERROR"),(function(){return{error:!0}})),H),{loaded:!1,values:{}});var Y;function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(e){return X(X({},e),{},{loaded:!1})},Q=function(e,t){var n=t.payload;return X(X({},e),{},{loaded:!0,values:{compliance:null==n?void 0:n.compliance,remediations:null==n?void 0:n.remediations,insights:null==n?void 0:n.insights,active:null==n?void 0:n.active}})};const W=(0,q.Gg)((Y={},C()(Y,"".concat(M.If,"_PENDING"),J),C()(Y,"".concat(M.K8,"_PENDING"),J),C()(Y,"".concat(M.K8,"_FULFILLED"),Q),C()(Y,"".concat(M.If,"_FULFILLED"),Q),C()(Y,"".concat(M.K8,"_ERROR"),(function(){return{error:!0}})),Y),{loaded:!1,values:{}});var $;function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ne=(0,q.Gg)(($={},C()($,"".concat(M.tj,"_PENDING"),(function(e){return te(te({},e),{},{loaded:!1})})),C()($,"".concat(M.tj,"_FULFILLED"),(function(e,t){var n=t.payload;return te(te({},e),{},{loaded:!0},n||{})})),C()($,"".concat(M.tj,"_ERROR"),(function(){return{error:!0}})),$),{loaded:!1,results:[]});function re(){re=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new x(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f={};function d(){}function h(){}function m(){}var p={};l(p,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(k([])));y&&y!==t&&n.call(y,a)&&(p=y);var g=m.prototype=d.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(a,i,c,l){var s=u(e[a],e,i);if("throw"!==s.type){var f=s.arg,d=f.value;return d&&"object"==o()(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):t.resolve(d).then((function(e){f.value=e,c(f)}),(function(e){return r("throw",e,c,l)}))}l(s.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=m,l(g,"constructor",m),l(m,"constructor",h),h.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),l(g,c,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var oe=b._j,ae=(0,m.lazy)((function(){return n.e(767).then(n.bind(n,98356))})),ie=(0,m.lazy)((function(){return Promise.all([n.e(696),n.e(239)]).then(n.bind(n,34003))}));const ce=function(){var e=(0,g.Z)().updateDocumentTitle;null==e||e("Manage Configuration - Remote Host Configuration");var t=(0,y.useHistory)(),n=(0,m.useContext)(U.gE).getRegistry,r=(0,m.useState)(!1),o=l()(r,2),a=o[0],c=o[1],b=(0,m.useState)(!1),E=l()(b,2),w=E[0],O=E[1],_=(0,m.useState)(!1),x=l()(_,2),k=x[0],S=x[1],C=(0,m.useRef)(),P=(0,v.I0)(),j=(0,B.o)(),I=j.fetchConnectedHosts,T=j.fetchCurrState,R=j.saveCurrState,D=(0,v.v9)((function(e){var t=e.activeStateReducer;return null==t?void 0:t.loaded})),N=(0,v.v9)((function(e){var t,n,r,o=e.activeStateReducer;return{compliance:null==o||null===(t=o.values)||void 0===t?void 0:t.compliance,remediations:null==o||null===(n=o.values)||void 0===n?void 0:n.remediations,active:null==o||null===(r=o.values)||void 0===r?void 0:r.active}}),v.wU),F=N.compliance,G=N.remediations,H=N.active,q=(0,v.v9)((function(e){var t=e.connectedSystemsReducer;return{systemsLoaded:null==t?void 0:t.loaded,systemsCount:null==t?void 0:t.total}}),v.wU).systemsCount;return(0,m.useEffect)((function(){n().register({activeStateReducer:W,logReducer:ne,connectedSystemsReducer:V}),P(T()),P(I())}),[n]),(0,m.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appAction)||void 0===n||n.call(t,"cloud-connector-dashboard")}),[]),p().createElement(p().Fragment,null,p().createElement(y.Route,{exact:!0,path:oe.logModal,render:function(){return p().createElement(m.Suspense,{fallback:p().createElement(s.Bullseye,null,p().createElement(s.Spinner,null))},p().createElement(ie,null))}}),p().createElement(d.Z,{className:"page-header"},p().createElement(s.Split,{hasGutter:!0,className:"page-title"},p().createElement(s.SplitItem,{isFilled:!0},p().createElement(s.Flex,null,p().createElement(s.FlexItem,{spacer:{default:"spacerSm"}},p().createElement(h.Z,{title:"Remote Host Configuration Manager"})),p().createElement(s.FlexItem,null,p().createElement(ae,null)))),p().createElement(s.SplitItem,null,p().createElement(s.Button,{onClick:function(){return t.push(oe.logModal)},variant:"link"},"View log"))),p().createElement(s.Stack,{hasGutter:!0},p().createElement(s.StackItem,null,"Selections here affect Red Hat Enterprise Linux (RHEL) systems connected to Red Hat with remote host configuration (rhc). Upon saving changes, Ansible Playbooks are automatically pushed to connected systems to update the configuration of the connection to Red Hat."),p().createElement(s.StackItem,null,p().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://access.redhat.com/documentation/en-us/red_hat_insights/2023/html/remote_host_configuration_and_management/index"},"Connecting with Red Hat",p().createElement(u.ZP,{className:"pf-u-ml-sm"}))))),p().createElement(s.Page,null,p().createElement("div",{className:"dashboard__content"},D||void 0!==F&&void 0!==G?p().createElement(A,{madeChanges:w,setConfirmChangesOpen:c,setMadeChanges:O,setIsEditing:S,isEditing:k,defaults:{compliance:F,remediations:G,active:H},onChange:function(e){C.current=e}}):p().createElement(s.Bullseye,null,p().createElement(s.Spinner,{className:"pf-u-p-lg",size:"xl"})))),p().createElement(L,{isOpen:a,handleCancel:function(){return c(!1)},systemsCount:q,data:C.current,handleConfirm:function(){c(!1),i()(re().mark((function e(){var t;return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R(C.current),P(t),e.next=4,t.payload;case 4:P((0,f.wN)({variant:"success",title:"Changes saved",description:"Your service enablement changes were applied to connected systems"})),O(!1),S(!1);case 7:case"end":return e.stop()}}),e)})))()}}))}},94962:(e,t,n)=>{n.d(t,{_D:()=>i,EH:()=>a});var r=n(33366),o=n(91571),a=function(){var e,t=(0,r.Vk)();return{getConnectedHosts:(e=t,function(){return e.get("".concat("/api/inventory/v1","/hosts?filter[system_profile][rhc_client_id]=not_nil&fields[system_profile]=rhc_client_id,rhc_config_state&staleness=fresh&staleness=stale&&registered_with=insights"))})}},i=function(){var e=(0,r.Vk)();return new o.DefaultApi(void 0,"/api/config-manager/v2",e)}},49120:(e,t,n)=>{n.d(t,{If:()=>o,K8:()=>r,o9:()=>i,tj:()=>a});var r="GET_CURR_STATE",o="SET_CURR_STATE",a="GET_LOG",i="GET_CONNECTED_HOSTS"},94778:(e,t,n)=>{n.d(t,{o:()=>s});var r=n(94962),o=n(49120),a=function(e){return function(){return{type:o.K8,payload:e.getProfile("current")}}},i=function(e){return function(t){var n=t.compliance,r=t.remediations,a=t.active;return{type:o.If,payload:e.createProfile({compliance:n,insights:!0,remediations:r,active:a})}}},c=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.perPage,r=void 0===n?50:n,a=t.page,i=void 0===a?1:a;return{type:o.tj,payload:e.getProfiles(r,(i-1)*r)}}},l=function(e){return function(){return{type:o.o9,payload:e.getConnectedHosts()}}},s=function(){var e=(0,r._D)(),t=(0,r.EH)();return{fetchConnectedHosts:l(t),fetchLog:c(e),saveCurrState:i(e),fetchCurrState:a(e)}}},1401:(e,t,n)=>{n.d(t,{S:()=>o,_:()=>r});var r=function(e,t,n){return e>1?n||t+"s":t},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"".concat((new Date).toISOString()),n="data:text/plain;charset=utf-8,",r=new Blob([e],{type:n}),o=document.createElement("a");o.setAttribute("href",URL.createObjectURL(r)),o.setAttribute("download","".concat(t,".yml")),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)}}}]);
//# sourceMappingURL=../sourcemaps/Dashboard.0dcd310f2c0c3453a14a11825f10c123.js.map