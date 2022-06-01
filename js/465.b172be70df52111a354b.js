"use strict";(self.webpackChunksed_frontend=self.webpackChunksed_frontend||[]).push([[465],{9465:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var a=n(63038),r=n.n(a),o=n(97522),i=n.n(o),l=n(16530),c=n(76430),s=n(14748),u=n(80123),m=n(39173),d=n(63529),p=n(87757),h=n.n(p),y=n(48926),v=n.n(y),g=n(88767),E=function(){var e=v()(h().mark((function e(){var t,n,a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getToken();case 2:return t=e.sent,e.next=5,fetch("/api/rhsm/v2/activation_keys",{headers:{Authorization:"Bearer ".concat(t)}});case 5:return n=e.sent,e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a.body);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=v()(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){return(0,g.useQuery)("activation_keys",(function(){return f()}))},b=n(28455),k=n(15984),S=n(45697),x=n.n(S),w=function(e){var t=e.actions,n="Key Name",a="Role",r="Usage",o=T(),l=o.isLoading,s=o.error,u=o.data,m=(0,g.useQueryClient)().getQueryData("user"),p=function(e){return i().createElement(c.KebabToggle,{onToggle:e.onToggle,isDisabled:e.isDisabled,className:e.isDisabled?"pf-m-disabled":""},"Actions")},h=function(){return i().createElement(d.TableComposable,{"aria-label":"ActivationKeys"},i().createElement(d.Thead,null,i().createElement(d.Tr,{ouiaSafe:!0},i().createElement(d.Th,{width:40},n),i().createElement(d.Th,null,a),i().createElement(d.Th,null,"SLA"),i().createElement(d.Th,null,r),i().createElement(d.Td,null))),i().createElement(d.Tbody,null,u.map((function(e){var o=t(e.name);return i().createElement(d.Tr,{key:e.name,ouiaSafe:!0},i().createElement(d.Td,{modifier:"breakWord",dataLabel:n},e.name),i().createElement(d.Td,{dataLabel:a},e.role),i().createElement(d.Td,{dataLabel:"SLA"},e.serviceLevel),i().createElement(d.Td,{dataLabel:r},e.usage),i().createElement(d.Td,{isActionCell:!0},i().createElement(d.ActionsColumn,{items:o,isDisabled:!m.rbacPermissions.canWriteActivationKeys,actionsToggle:p})))}))))};return l&&!s?i().createElement(b.Z,null):l||s?i().createElement(k.Z,null):i().createElement(h,null)};w.propTypes={actions:x().func};const C=w;var A=n(75663);const L=function(){return i().createElement(c.Bullseye,null,i().createElement(c.EmptyState,null,i().createElement(c.EmptyStateIcon,{icon:A.ZP}),i().createElement(c.Title,{headingLevel:"h4",size:"lg"},"Activation keys can only be accessed by organization administrators."),i().createElement(c.EmptyStateBody,null,"If you already know your organization ID and activation key, you can register systems with RHC.")))};var P=n(25811),R=function(e){var t=e.onClick,n=(0,g.useQueryClient)().getQueryData("user");return i().createElement(c.Button,{variant:"primary",onClick:t,isDisabled:!n.rbacPermissions.canWriteActivationKeys},"Create activation key")};R.propTypes={onClick:x().func.isRequired};const q=R;var M=function(e){var t=e.handleModalToggle;return i().createElement(i().Fragment,null,i().createElement(c.EmptyState,null,i().createElement(c.EmptyStateIcon,{icon:P.ZP}),i().createElement(c.Title,{headingLevel:"h5",size:"lg"},"No activation keys"),i().createElement(c.EmptyStateBody,null,"You currently have no activation keys to display. Activation keys allow you to register a system with system purpose, role and usage attached."),i().createElement(q,{onClick:t})))};M.propTypes={handleModalToggle:x().func.isRequired};const D=M;var F=n(34046),Z=function(){var e=v()(h().mark((function e(){var t,n,a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getToken();case 2:return t=e.sent,e.next=5,fetch("/api/rhsm/v2/organization?include=system_purpose_attributes",{headers:{Authorization:"Bearer ".concat(t)}});case 5:return n=e.sent,e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a.body);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=v()(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:return t=e.sent,e.abrupt("return",t.systemPurposeAttributes);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){var t=e.label,n=e.popover,a=e.data,l=e.onSelect,s=e.helperText,u=e.name,m=e.placeholderValue,d=(0,o.useState)(""),p=r()(d,2),h=p[0],y=p[1],v=a.map((function(e){return i().createElement(c.FormSelectOption,{key:e,value:e,label:e})}));return i().createElement(c.FormGroup,{label:t,labelIcon:n,helperText:s},i().createElement(c.FormSelect,{onChange:function(e){y(e),l(e)},value:h,name:u,"aria-label":m},i().createElement(c.FormSelectOption,{label:m,isPlaceholder:!0}),v))};V.propTypes={label:x().string.isRequired,popover:x().element.isRequired,helperText:x().string,data:x().array.isRequired,onSelect:x().func.isRequired,name:x().string,placeholderValue:x().string};const z=V;var _=n(55091),B=function(e){var t=e.handleModalToggle,n=e.submitForm,a=e.isSuccess,l=e.isError,s=(0,_.Z)(),u=s.addSuccessNotification,m=s.addErrorNotification,d=(0,g.useQuery)("organization_system_purpose_attributes",(function(){return I()})),p=d.isLoading,h=d.error,y=d.data,v=(0,o.useState)(""),E=r()(v,2),f=E[0],T=E[1],b=(0,o.useState)(""),k=r()(b,2),S=k[0],x=k[1],w=(0,o.useState)(""),C=r()(w,2),A=C[0],L=C[1],P=(0,o.useState)(""),R=r()(P,2),q=R[0],M=R[1],D=(0,o.useState)("default"),Z=r()(D,2),V=Z[0],B=Z[1],O="^[a-zA-Z0-9-_]*$";return a?(u("Activation Key was created successfully",{timeout:!1}),t()):l&&(m("Activation Key was not created, please try again",{timeout:8e3}),t()),i().createElement(c.Form,{id:"create-activation-key-form",onSubmit:function(e){e.preventDefault(),"success"===V?n(f,S,A,q):B("error")}},i().createElement(c.FormGroup,{label:"Name",isRequired:!0,helperText:"Provide a name to be used when registering the activation key. Your activation key name must be unique, may contain only numbers, letters, underscores, and hyphens, and less than 256 characters."},i().createElement(c.TextInput,{id:"activation-key-name",label:"Name",isRequired:!0,type:"text",validated:V,onChange:function(e){0===e.length||e.length>255?B("error"):e.match(O)?(B("success"),T(e)):B("error")},name:"name"})),!p&&!h&&i().createElement(z,{data:y.roles,onSelect:x,label:"Role",name:"role",placeholderValue:"Select role",popover:i().createElement(c.Popover,{bodyContent:i().createElement(c.TextContent,null,i().createElement(c.Text,{component:c.TextVariants.p},"Role is used to categorize systems by the workload on the system"),i().createElement(c.Text,{component:c.TextVariants.p},"Subscription Watch can help you filter and report by these items."),i().createElement(c.Text,{component:c.TextVariants.p},"Only roles available to your account are shown."))},i().createElement(F.ZP,null)),helperText:"Select the required role from the list. The list only contains roles available to the activation key."}),!p&&!h&&i().createElement(z,{data:y.serviceLevel,onSelect:L,label:"Service Level Agreement (SLA)",name:"serviceLevel",placeholderValue:"Select a service level agreement",popover:i().createElement(c.Popover,{bodyContent:i().createElement(c.TextContent,null,i().createElement(c.Text,{component:c.TextVariants.p},"Service Level Agreement (SLA) determines the level of support for systems registered with this activation key."))},i().createElement(F.ZP,null)),helperText:"Select the required service level from the list. The list only contains service levels available to the activation key."}),!p&&!h&&i().createElement(z,{data:y.usage,onSelect:M,label:"Usage",name:"usage",placeholderValue:"Select usage",popover:i().createElement(c.Popover,{bodyContent:i().createElement(c.TextContent,null,i().createElement(c.Text,{component:c.TextVariants.p},"Usage is used to categorize systems by how they are meant to be used, and therefore supported."),i().createElement(c.Text,{component:c.TextVariants.p},"Subscription Watch can help you filter and report by these items."))},i().createElement(F.ZP,null)),helperText:"Select the required usage from the list. The list only contains usages available to the activation key."}),i().createElement(c.ActionGroup,null,i().createElement(c.Button,{key:"create",id:"create-activation-key-button",variant:"primary",type:"submit",isDisabled:"error"===V||0===f.length||!f.match(O)},"Save"),i().createElement(c.Button,{key:"cancel",id:"cancel-create-activation-key-button",variant:"link",onClick:t},"Cancel")))};B.propTypes={handleModalToggle:x().func.isRequired,submitForm:x().func.isRequired,isSuccess:x().bool,isError:x().bool};const O=B;var K=function(){var e=v()(h().mark((function e(t){var n,a,r,o,i,l;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.role,r=t.serviceLevel,o=t.usage,e.next=3,window.insights.chrome.auth.getToken();case 3:return i=e.sent,e.next=6,fetch("/api/rhsm/v2/activation_keys",{method:"POST",headers:{Authorization:"Bearer ".concat(i),"Content-Type":"application/json"},body:JSON.stringify({name:n,role:a,serviceLevel:r,usage:o})});case 6:if((l=e.sent).ok){e.next=9;break}throw new Error("Status Code ".concat(l.status,".  Error creating activation key: ").concat(l.statusText,"."));case 9:return e.abrupt("return",l.json());case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(e){var t=(0,g.useQueryClient)(),n=o.useState(!1),a=r()(n,2),i=a[0],l=a[1],s=o.useState(!1),u=r()(s,2),m=u[0],d=u[1],p=e.handleModalToggle,h=e.isOpen,y=(0,g.useMutation)(K),v=y.mutate,E=y.isLoading;return o.createElement(c.Modal,{variant:c.ModalVariant.large,title:"Create new activation key",description:"",isOpen:h,onClose:p},E?o.createElement(b.Z,null):o.createElement(O,{handleModalToggle:p,submitForm:function(e,n,a,r){v({name:e,role:n,serviceLevel:a,usage:r},{onSuccess:function(){d(!1),l(!0),t.invalidateQueries("activation_keys")},onError:function(){d(!0),l(!1)}})},isSuccess:i,isError:m}))};Q.propTypes={handleModalToggle:x().func.isRequired,isOpen:x().bool.isRequired};const N=Q;var W=n(19694),j=function(){var e=v()(h().mark((function e(t){var n,a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getToken();case 2:return n=e.sent,e.next=5,fetch("/api/rhsm/v2/activation_keys/".concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"}});case 5:if((a=e.sent).ok){e.next=8;break}throw new Error("Status Code ".concat(a.status,".  Error deleting activation key: ").concat(a.statusText,"."));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){var t=e.isOpen,n=e.handleModalToggle,a=e.name,r=(0,_.Z)(),i=r.addSuccessNotification,l=r.addErrorNotification,s=(0,g.useMutation)(j),u=s.mutate,m=s.isLoading,d=(0,g.useQueryClient)(),p=[o.createElement(c.Button,{key:"confirm",variant:"danger",onClick:function(){return function(e){u(e,{onSuccess:function(e,t){d.setQueryData("activation_keys",(function(e){return e.filter((function(e){return e.name!=t}))})),i("Activation Key ".concat(t," deleted")),n()},onError:function(){l("Something went wrong. Please try again"),n()}})}(a)},"data-testid":"delete-activation-key-confirmation-modal-confirm-button"},"Delete"),o.createElement(c.Button,{key:"cancel",variant:"link",onClick:n},"Cancel")],h=o.createElement(o.Fragment,null,o.createElement(c.TextContent,null,o.createElement(c.Text,{component:c.TextVariants.h2},o.createElement(W.ZP,{size:"md",color:"#F0AB00"})," Delete Activation Key?")));return o.createElement(c.Modal,{title:h,isOpen:t,onClose:n,variant:c.ModalVariant.small,actions:p},m?o.createElement(b.Z,null):o.createElement(c.TextContent,null,o.createElement(c.Text,{component:c.TextVariants.p},o.createElement("b",null,a)," will no longer be available for use. This operation cannot be undone.")))};G.propTypes={isOpen:x().bool.isRequired,handleModalToggle:x().func.isRequired,name:x().string.isRequired};const U=G;var Y=n(55795),H=function(e){var t=e.orgId;return i().createElement(c.Popover,{headerContent:"Activation Keys",position:c.PopoverPosition.rightStart,bodyContent:i().createElement(c.TextContent,null,i().createElement(c.Text,null,"Activation keys assist you in registering systems. Metadata such as role, system purpose, and usage can be automatically attached to systems via an activation key, and monitored with",i().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://console.redhat.com/insights/subscriptions/rhel"}," ","Subscription Watch.")),i().createElement(c.Text,null,"To register with an activation key, you will need your organization ID: ",i().createElement("b",null,t)))},i().createElement(c.Button,{variant:"plain",isInline:!0,style:{padding:0}},i().createElement(Y.ZP,null)))};const J=H;H.propTypes={orgId:x().string.isRequired};const $=(0,l.withRouter)((function(){var e,t=(0,g.useQueryClient)().getQueryData("user"),n=T(),a=n.isLoading,l=n.error,d=n.data,p=(0,o.useState)(!1),h=r()(p,2),y=h[0],v=h[1],E=(0,o.useState)(""),f=r()(E,2),k=f[0],S=f[1],x=(0,o.useState)(!1),w=r()(x,2),A=w[0],P=w[1],R=function(){v(!y)};a?e=i().createElement(b.Z,null):a||l||d.length?a||l||!d.length||(e=i().createElement(i().Fragment,null,i().createElement(c.ActionGroup,null,i().createElement(q,{onClick:R})),i().createElement(C,{actions:function(e){return[{title:"Delete",onClick:function(){return M(e)}}]}}))):e=i().createElement(D,{handleModalToggle:R});var M=function(e){S(e),P(!A)},F=function(){return i().createElement(i().Fragment,null,i().createElement(u.Z,null,i().createElement(c.Split,{hasGutter:!0,className:"page-title"},i().createElement(c.SplitItem,{isFilled:!0},i().createElement(c.Flex,null,i().createElement(c.FlexItem,{spacer:{default:"spacerSm"}},i().createElement(m.Z,{title:"Activation Keys"})),i().createElement(c.FlexItem,null,i().createElement(J,{orgId:t.orgId}))))),i().createElement(c.TextContent,null,i().createElement(c.Text,{component:c.TextVariants.p},"Organization ID: ",t.orgId))),i().createElement(s.Z,null,i().createElement(c.PageSection,{variant:c.PageSectionVariants.light},e)),i().createElement(N,{isOpen:y,handleModalToggle:R}),i().createElement(U,{handleModalToggle:M,isOpen:A,name:k}))};return t.rbacPermissions.canReadActivationKeys?i().createElement(F,null):i().createElement(L,null)}))}}]);
//# sourceMappingURL=../sourcemaps/465.46794d56aecd928cad4f76350f8c82e3.js.map