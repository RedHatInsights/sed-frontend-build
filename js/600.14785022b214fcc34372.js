"use strict";(self.webpackChunksed_frontend=self.webpackChunksed_frontend||[]).push([[600],{90600:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var r=n(63038),a=n.n(r),o=n(97522),l=n.n(o),i=n(16530),c=n(76430),s=n(14748),u=n(80123),m=n(39173),p=n(63529),d=n(87757),h=n.n(d),v=n(48926),y=n.n(v),f=n(88767),E=function(){var e=y()(h().mark((function e(){var t,n,r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getToken();case 2:return t=e.sent,e.next=5,fetch("/api/rhsm/v2/activation_keys",{headers:{Authorization:"Bearer ".concat(t)}});case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r.body);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=y()(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=n(28455),T=n(15984);const S=function(){var e="Key Name",t="Role",n="Usage",r=(0,f.useQuery)("activation_keys",(function(){return b()})),a=r.isLoading,o=r.error,i=r.data,c=function(){return l().createElement(p.TableComposable,{"aria-label":"ActivationKeys"},l().createElement(p.Thead,null,l().createElement(p.Tr,{ouiaSafe:!0},l().createElement(p.Th,null,e),l().createElement(p.Th,null,t),l().createElement(p.Th,null,"SLA"),l().createElement(p.Th,null,n))),l().createElement(p.Tbody,null,i.map((function(r){return l().createElement(p.Tr,{key:r.name,ouiaSafe:!0},l().createElement(p.Td,{dataLabel:e},r.name),l().createElement(p.Td,{dataLabel:t},r.role),l().createElement(p.Td,{dataLabel:"SLA"},r.serviceLevel),l().createElement(p.Td,{dataLabel:n},r.usage))}))))};return a&&!o?l().createElement(g.Z,null):a||o?l().createElement(T.Z,null):l().createElement(c,null)};var x=n(75663);const k=function(){return l().createElement(c.Bullseye,null,l().createElement(c.EmptyState,null,l().createElement(c.EmptyStateIcon,{icon:x.ZP}),l().createElement(c.Title,{headingLevel:"h4",size:"lg"},"Activation keys can only be accessed by organization administrators."),l().createElement(c.EmptyStateBody,null,"If you already know your organization ID and activation key, you can register systems with RHC.")))};var w=n(34046),C=function(){var e=y()(h().mark((function e(){var t,n,r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getToken();case 2:return t=e.sent,e.next=5,fetch("/api/rhsm/v2/organization?include=system_purpose_attributes",{headers:{Authorization:"Bearer ".concat(t)}});case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r.body);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=y()(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return t=e.sent,e.abrupt("return",t.systemPurposeAttributes);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=n(45697),R=n.n(A),V=function(e){var t=e.label,n=e.popover,r=e.data,i=e.onSelect,s=e.helperText,u=e.name,m=e.placeholderValue,p=(0,o.useState)(""),d=a()(p,2),h=d[0],v=d[1],y=r.map((function(e){return l().createElement(c.FormSelectOption,{key:e,value:e,label:e})}));return l().createElement(c.FormGroup,{label:t,labelIcon:n,helperText:s},l().createElement(c.FormSelect,{onChange:function(e){v(e),i(e)},value:h,name:u,"aria-label":m},l().createElement(c.FormSelectOption,{label:m,isPlaceholder:!0}),y))};V.propTypes={label:R().string.isRequired,popover:R().element.isRequired,helperText:R().string,data:R().array.isRequired,onSelect:R().func.isRequired,name:R().string,placeholderValue:R().string};const z=V;var P=n(55091),q=function(e){var t=e.handleModalToggle,n=e.submitForm,r=e.isSuccess,i=e.isError,s=(0,P.Z)(),u=s.addSuccessNotification,m=s.addErrorNotification,p=(0,f.useQuery)("organization_system_puprose_attributes",(function(){return L()})),d=p.isLoading,h=p.error,v=p.data,y=(0,o.useState)(""),E=a()(y,2),b=E[0],g=E[1],T=(0,o.useState)(""),S=a()(T,2),x=S[0],k=S[1],C=(0,o.useState)(""),A=a()(C,2),R=A[0],V=A[1],q=(0,o.useState)(""),Z=a()(q,2),_=Z[0],F=Z[1],M=(0,o.useState)("default"),O=a()(M,2),B=O[0],I=O[1],K="^[a-z][a-z0-9-]*$";return r?(u("Activation Key was created successfully",{timeout:!1}),t()):i&&(m("Activation Key was not created, please try again",{timeout:8e3}),t()),l().createElement(c.Form,{id:"create-activation-key-form",onSubmit:function(e){e.preventDefault(),"success"===B?n(b,x,R,_):I("error")}},l().createElement(c.FormGroup,{label:"Name",isRequired:!0,helperText:"Enter the name of the activation key. Must start with a letter and end with a letter or number. Valid characters include lowercase letters from a to z, numbers from 0 to 9, and hyphens ( - )."},l().createElement(c.TextInput,{id:"activation-key-name",label:"Name",isRequired:!0,type:"text",validated:B,onChange:function(e){0===e.length?I("error"):e.match(K)?(I("success"),g(e)):I("error")},name:"name"})),!d&&!h&&l().createElement(z,{data:v.roles,onSelect:k,label:"Role",name:"role",placeholderValue:"Select role",popover:l().createElement(c.Popover,{bodyContent:l().createElement(c.TextContent,null,l().createElement(c.Text,{component:c.TextVariants.p},"Role is used to categorize systems by the workload on the system"),l().createElement(c.Text,{component:c.TextVariants.p},"Subscription Watch can help you filter and report by these items."),l().createElement(c.Text,{component:c.TextVariants.p},"Only roles available to your account are shown."))},l().createElement(w.ZP,null)),helperText:"Select the required role from the list. The list only contains roles available to the activation key."}),!d&&!h&&l().createElement(z,{data:v.serviceLevel,onSelect:V,label:"Service Level Agreement (SLA)",name:"serviceLevel",placeholderValue:"Select a service level agreement",popover:l().createElement(c.Popover,{bodyContent:l().createElement(c.TextContent,null,l().createElement(c.Text,{component:c.TextVariants.p},"Service Level Agreement (SLA) determines the level of support for systems registered with this activation key."))},l().createElement(w.ZP,null)),helperText:"Select the required service level from the list. The list only contains service levels available to the activation key."}),!d&&!h&&l().createElement(z,{data:v.usage,onSelect:F,label:"Usage",name:"usage",placeholderValue:"Select usage",popover:l().createElement(c.Popover,{bodyContent:l().createElement(c.TextContent,null,l().createElement(c.Text,{component:c.TextVariants.p},"Usage is used to categorize systems by how they are meant to be used, and therefore supported."),l().createElement(c.Text,{component:c.TextVariants.p},"Subscription Watch can help you filter and report by these items."))},l().createElement(w.ZP,null)),helperText:"Select the required usage from the list. The list only contains usages available to the activation key."}),l().createElement(c.ActionGroup,null,l().createElement(c.Button,{key:"create",id:"create-activation-key-button",variant:"primary",type:"submit",isDisabled:"error"===B||0===b.length||!b.match(K)},"Save"),l().createElement(c.Button,{key:"cancel",id:"cancel-create-activation-key-button",variant:"link",onClick:t},"Cancel")))};q.propTypes={handleModalToggle:R().func.isRequired,submitForm:R().func.isRequired,isSuccess:R().bool,isError:R().bool};const Z=q;var _=function(){var e=y()(h().mark((function e(t){var n,r,a,o,l,i;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.role,a=t.serviceLevel,o=t.usage,e.next=3,window.insights.chrome.auth.getToken();case 3:return l=e.sent,e.next=6,fetch("/api/rhsm/v2/activation_keys",{method:"POST",headers:{Authorization:"Bearer ".concat(l),"Content-Type":"application/json"},body:JSON.stringify({name:n,role:r,serviceLevel:a,usage:o})});case 6:if((i=e.sent).ok){e.next=9;break}throw new Error("Status Code ".concat(i.status,".  Error creating activation key: ").concat(i.statusText,"."));case 9:return e.abrupt("return",i.json());case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){var t,n=e.handleModalToggle,r=e.isOpen,a=(t=(0,f.useQueryClient)(),(0,f.useMutation)(_,{onSuccess:function(){t.resetQueries("activation_keys")}})),l=a.mutate,i=a.isSuccess,s=a.isError,u=a.isLoading;return o.createElement(c.Modal,{variant:c.ModalVariant.large,title:"Create new activation key",description:"",isOpen:r,onClose:n},u?o.createElement(g.Z,null):o.createElement(Z,{handleModalToggle:n,submitForm:function(e,t,n,r){l({name:e,role:t,serviceLevel:n,usage:r})},isSuccess:i,isError:s}))};F.propTypes={handleModalToggle:R().func.isRequired,isOpen:R().bool.isRequired};const M=F,O=(0,i.withRouter)((function(){var e=(0,f.useQueryClient)().getQueryData("user"),t=(0,o.useState)(!1),n=a()(t,2),r=n[0],i=n[1],p=function(){i(!r)},d=function(){return l().createElement(l().Fragment,null,l().createElement(u.Z,null,l().createElement(m.Z,{title:"Activation Keys"}),l().createElement(c.TextContent,null,l().createElement(c.Text,{component:c.TextVariants.p},"Organization ID: ",e.orgId))),l().createElement(s.Z,null,l().createElement(c.PageSection,{variant:c.PageSectionVariants.light},l().createElement(c.ActionGroup,null,l().createElement(c.Button,{variant:"primary",onClick:p,isDisabled:!e.rbacPermissions.canWriteActivationKeys},"Create activation key")),l().createElement(S,null))),l().createElement(M,{isOpen:r,handleModalToggle:p}))};return e.rbacPermissions.canReadActivationKeys?l().createElement(d,null):l().createElement(k,null)}))}}]);
//# sourceMappingURL=../sourcemaps/600.7d96800bb080dfadfe9dcf2f89b1e8b5.js.map