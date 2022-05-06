"use strict";(self.webpackChunksed_frontend=self.webpackChunksed_frontend||[]).push([[106],{10106:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var a=n(63038),r=n.n(a),o=n(97522),l=n.n(o),i=n(16530),c=n(76430),s=n(14748),u=n(80123),m=n(39173),d=n(63529),p=n(87757),h=n.n(p),v=n(48926),y=n.n(v),E=n(88767),f=function(){var e=y()(h().mark((function e(){var t,n,a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getToken();case 2:return t=e.sent,e.next=5,fetch("/api/rhsm/v2/activation_keys",{headers:{Authorization:"Bearer ".concat(t)}});case 5:return n=e.sent,e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a.body);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=y()(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){return(0,E.useQuery)("activation_keys",(function(){return g()}))},b=n(28455),k=n(15984),S=n(45697),x=n.n(S),w=function(e){var t=e.actions,n="Key Name",a="Role",r="Usage",o=T(),i=o.isLoading,c=o.error,s=o.data,u=(0,E.useQueryClient)().getQueryData("user"),m=function(){return l().createElement(d.TableComposable,{"aria-label":"ActivationKeys"},l().createElement(d.Thead,null,l().createElement(d.Tr,{ouiaSafe:!0},l().createElement(d.Th,null,n),l().createElement(d.Th,null,a),l().createElement(d.Th,null,"SLA"),l().createElement(d.Th,null,r),l().createElement(d.Td,null))),l().createElement(d.Tbody,null,s.map((function(e){var o=t(e.name);return l().createElement(d.Tr,{key:e.name,ouiaSafe:!0},l().createElement(d.Td,{dataLabel:n},e.name),l().createElement(d.Td,{dataLabel:a},e.role),l().createElement(d.Td,{dataLabel:"SLA"},e.serviceLevel),l().createElement(d.Td,{dataLabel:r},e.usage),l().createElement(d.Td,{isActionCell:!0},l().createElement(d.ActionsColumn,{items:o,isDisabled:!u.rbacPermissions.canWriteActivationKeys})))}))))};return i&&!c?l().createElement(b.Z,null):i||c?l().createElement(k.Z,null):l().createElement(m,null)};w.propTypes={actions:x().func};const C=w;var A=n(75663);const L=function(){return l().createElement(c.Bullseye,null,l().createElement(c.EmptyState,null,l().createElement(c.EmptyStateIcon,{icon:A.ZP}),l().createElement(c.Title,{headingLevel:"h4",size:"lg"},"Activation keys can only be accessed by organization administrators."),l().createElement(c.EmptyStateBody,null,"If you already know your organization ID and activation key, you can register systems with RHC.")))};var R=n(25811),M=function(e){var t=e.onClick,n=(0,E.useQueryClient)().getQueryData("user");return l().createElement(c.Button,{variant:"primary",onClick:t,isDisabled:!n.rbacPermissions.canWriteActivationKeys},"Create activation key")};M.propTypes={onClick:x().func.isRequired};const q=M;var P=function(e){var t=e.handleModalToggle;return l().createElement(l().Fragment,null,l().createElement(c.EmptyState,null,l().createElement(c.EmptyStateIcon,{icon:R.ZP}),l().createElement(c.Title,{headingLevel:"h5",size:"lg"},"No activation keys"),l().createElement(c.EmptyStateBody,null,"You currently have no activation keys to display. Activation keys allow you to register a system with system purpose, role and usage attached."),l().createElement(q,{onClick:t})))};P.propTypes={handleModalToggle:x().func.isRequired};const V=P;var z=n(34046),Z=function(){var e=y()(h().mark((function e(){var t,n,a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getToken();case 2:return t=e.sent,e.next=5,fetch("/api/rhsm/v2/organization?include=system_purpose_attributes",{headers:{Authorization:"Bearer ".concat(t)}});case 5:return n=e.sent,e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a.body);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=y()(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:return t=e.sent,e.abrupt("return",t.systemPurposeAttributes);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(e){var t=e.label,n=e.popover,a=e.data,i=e.onSelect,s=e.helperText,u=e.name,m=e.placeholderValue,d=(0,o.useState)(""),p=r()(d,2),h=p[0],v=p[1],y=a.map((function(e){return l().createElement(c.FormSelectOption,{key:e,value:e,label:e})}));return l().createElement(c.FormGroup,{label:t,labelIcon:n,helperText:s},l().createElement(c.FormSelect,{onChange:function(e){v(e),i(e)},value:h,name:u,"aria-label":m},l().createElement(c.FormSelectOption,{label:m,isPlaceholder:!0}),y))};F.propTypes={label:x().string.isRequired,popover:x().element.isRequired,helperText:x().string,data:x().array.isRequired,onSelect:x().func.isRequired,name:x().string,placeholderValue:x().string};const O=F;var B=n(55091),_=function(e){var t=e.handleModalToggle,n=e.submitForm,a=e.isSuccess,i=e.isError,s=(0,B.Z)(),u=s.addSuccessNotification,m=s.addErrorNotification,d=(0,E.useQuery)("organization_system_puprose_attributes",(function(){return D()})),p=d.isLoading,h=d.error,v=d.data,y=(0,o.useState)(""),f=r()(y,2),g=f[0],T=f[1],b=(0,o.useState)(""),k=r()(b,2),S=k[0],x=k[1],w=(0,o.useState)(""),C=r()(w,2),A=C[0],L=C[1],R=(0,o.useState)(""),M=r()(R,2),q=M[0],P=M[1],V=(0,o.useState)("default"),Z=r()(V,2),F=Z[0],_=Z[1],Q="^[a-z][a-z0-9-]*$";return a?(u("Activation Key was created successfully",{timeout:!1}),t()):i&&(m("Activation Key was not created, please try again",{timeout:8e3}),t()),l().createElement(c.Form,{id:"create-activation-key-form",onSubmit:function(e){e.preventDefault(),"success"===F?n(g,S,A,q):_("error")}},l().createElement(c.FormGroup,{label:"Name",isRequired:!0,helperText:"Enter the name of the activation key. Must start with a letter and end with a letter or number. Valid characters include lowercase letters from a to z, numbers from 0 to 9, and hyphens ( - )."},l().createElement(c.TextInput,{id:"activation-key-name",label:"Name",isRequired:!0,type:"text",validated:F,onChange:function(e){0===e.length?_("error"):e.match(Q)?(_("success"),T(e)):_("error")},name:"name"})),!p&&!h&&l().createElement(O,{data:v.roles,onSelect:x,label:"Role",name:"role",placeholderValue:"Select role",popover:l().createElement(c.Popover,{bodyContent:l().createElement(c.TextContent,null,l().createElement(c.Text,{component:c.TextVariants.p},"Role is used to categorize systems by the workload on the system"),l().createElement(c.Text,{component:c.TextVariants.p},"Subscription Watch can help you filter and report by these items."),l().createElement(c.Text,{component:c.TextVariants.p},"Only roles available to your account are shown."))},l().createElement(z.ZP,null)),helperText:"Select the required role from the list. The list only contains roles available to the activation key."}),!p&&!h&&l().createElement(O,{data:v.serviceLevel,onSelect:L,label:"Service Level Agreement (SLA)",name:"serviceLevel",placeholderValue:"Select a service level agreement",popover:l().createElement(c.Popover,{bodyContent:l().createElement(c.TextContent,null,l().createElement(c.Text,{component:c.TextVariants.p},"Service Level Agreement (SLA) determines the level of support for systems registered with this activation key."))},l().createElement(z.ZP,null)),helperText:"Select the required service level from the list. The list only contains service levels available to the activation key."}),!p&&!h&&l().createElement(O,{data:v.usage,onSelect:P,label:"Usage",name:"usage",placeholderValue:"Select usage",popover:l().createElement(c.Popover,{bodyContent:l().createElement(c.TextContent,null,l().createElement(c.Text,{component:c.TextVariants.p},"Usage is used to categorize systems by how they are meant to be used, and therefore supported."),l().createElement(c.Text,{component:c.TextVariants.p},"Subscription Watch can help you filter and report by these items."))},l().createElement(z.ZP,null)),helperText:"Select the required usage from the list. The list only contains usages available to the activation key."}),l().createElement(c.ActionGroup,null,l().createElement(c.Button,{key:"create",id:"create-activation-key-button",variant:"primary",type:"submit",isDisabled:"error"===F||0===g.length||!g.match(Q)},"Save"),l().createElement(c.Button,{key:"cancel",id:"cancel-create-activation-key-button",variant:"link",onClick:t},"Cancel")))};_.propTypes={handleModalToggle:x().func.isRequired,submitForm:x().func.isRequired,isSuccess:x().bool,isError:x().bool};const Q=_;var K=function(){var e=y()(h().mark((function e(t){var n,a,r,o,l,i;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.role,r=t.serviceLevel,o=t.usage,e.next=3,window.insights.chrome.auth.getToken();case 3:return l=e.sent,e.next=6,fetch("/api/rhsm/v2/activation_keys",{method:"POST",headers:{Authorization:"Bearer ".concat(l),"Content-Type":"application/json"},body:JSON.stringify({name:n,role:a,serviceLevel:r,usage:o})});case 6:if((i=e.sent).ok){e.next=9;break}throw new Error("Status Code ".concat(i.status,".  Error creating activation key: ").concat(i.statusText,"."));case 9:return e.abrupt("return",i.json());case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=(0,E.useQueryClient)(),n=o.useState(!1),a=r()(n,2),l=a[0],i=a[1],s=o.useState(!1),u=r()(s,2),m=u[0],d=u[1],p=e.handleModalToggle,h=e.isOpen,v=(0,E.useMutation)(K),y=v.mutate,f=v.isLoading;return o.createElement(c.Modal,{variant:c.ModalVariant.large,title:"Create new activation key",description:"",isOpen:h,onClose:p},f?o.createElement(b.Z,null):o.createElement(Q,{handleModalToggle:p,submitForm:function(e,n,a,r){y({name:e,role:n,serviceLevel:a,usage:r},{onSuccess:function(){d(!1),i(!0),t.invalidateQueries("activation_keys")},onError:function(){d(!0),i(!1)}})},isSuccess:l,isError:m}))};N.propTypes={handleModalToggle:x().func.isRequired,isOpen:x().bool.isRequired};const I=N;var j=n(19694),G=function(){var e=y()(h().mark((function e(t){var n,a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getToken();case 2:return n=e.sent,e.next=5,fetch("/api/rhsm/v2/activation_keys/".concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"}});case 5:if((a=e.sent).ok){e.next=8;break}throw new Error("Status Code ".concat(a.status,".  Error deleting activation key: ").concat(a.statusText,"."));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e){var t=e.isOpen,n=e.handleModalToggle,a=e.name,r=(0,B.Z)(),l=r.addSuccessNotification,i=r.addErrorNotification,s=(0,E.useMutation)(G),u=s.mutate,m=s.isLoading,d=(0,E.useQueryClient)(),p=[o.createElement(c.Button,{key:"confirm",variant:"danger",onClick:function(){return function(e){u(e,{onSuccess:function(e,t){d.setQueryData("activation_keys",(function(e){return e.filter((function(e){return e.name!=t}))})),l("Activation Key ".concat(t," deleted")),n()},onError:function(){i("Something went wrong. Please try again"),n()}})}(a)},"data-testid":"delete-activation-key-confirmation-modal-confirm-button"},"Delete"),o.createElement(c.Button,{key:"cancel",variant:"link",onClick:n},"Cancel")],h=o.createElement(o.Fragment,null,o.createElement(c.TextContent,null,o.createElement(c.Text,{component:c.TextVariants.h2},o.createElement(j.ZP,{size:"md",color:"#F0AB00"})," Delete Activtivation Key?")));return o.createElement(c.Modal,{title:h,isOpen:t,onClose:n,variant:c.ModalVariant.small,actions:p},m?o.createElement(b.Z,null):o.createElement(c.TextContent,null,o.createElement(c.Text,{component:c.TextVariants.p},o.createElement("b",null,a)," will no longer be available for use. This operation cannot be undone.")))};W.propTypes={isOpen:x().bool.isRequired,handleModalToggle:x().func.isRequired,name:x().string.isRequired};const U=W,H=(0,i.withRouter)((function(){var e,t=(0,E.useQueryClient)().getQueryData("user"),n=T(),a=n.isLoading,i=n.error,d=n.data,p=(0,o.useState)(!1),h=r()(p,2),v=h[0],y=h[1],f=(0,o.useState)(""),g=r()(f,2),k=g[0],S=g[1],x=(0,o.useState)(!1),w=r()(x,2),A=w[0],R=w[1],M=function(){y(!v)};a?e=l().createElement(b.Z,null):a||i||d.length?a||i||!d.length||(e=l().createElement(l().Fragment,null,l().createElement(c.ActionGroup,null,l().createElement(q,{onClick:M})),l().createElement(C,{actions:function(e){return[{title:"Delete",onClick:function(){return P(e)}}]}}))):e=l().createElement(V,{handleModalToggle:M});var P=function(e){S(e),R(!A)},z=function(){return l().createElement(l().Fragment,null,l().createElement(u.Z,null,l().createElement(m.Z,{title:"Activation Keys"}),l().createElement(c.TextContent,null,l().createElement(c.Text,{component:c.TextVariants.p},"Organization ID: ",t.orgId))),l().createElement(s.Z,null,l().createElement(c.PageSection,{variant:c.PageSectionVariants.light},e)),l().createElement(I,{isOpen:v,handleModalToggle:M}),l().createElement(U,{handleModalToggle:P,isOpen:A,name:k}))};return t.rbacPermissions.canReadActivationKeys?l().createElement(z,null):l().createElement(L,null)}))}}]);
//# sourceMappingURL=../sourcemaps/106.31b881122de147bdb4dcb45d070e2a0a.js.map