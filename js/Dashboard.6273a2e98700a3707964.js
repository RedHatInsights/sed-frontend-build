"use strict";(self.webpackChunksed_frontend=self.webpackChunksed_frontend||[]).push([[362],{85226:(e,t,n)=>{n.d(t,{i:()=>d,Z:()=>u});var a=n(58740),r=n(55795),l=n(50470),o=n(97522),c=n.n(o),s=n(10141);const i=function(){return c().createElement(a.FormHelperText,{isHidden:!1,className:"pf-u-mt-sm"},"Click the ",c().createElement(s.ZP,null)," icon on a row to copy the command")},u=function(){return c().createElement(a.FormGroup,{label:c().createElement("span",null,"Register with a username and password ",c().createElement(a.Popover,{position:"right",bodyContent:c().createElement(a.TextContent,null,c().createElement(a.Text,null,"Recommended for users with accounts with Simple Content Access (SCA) enabled. If SCA is not enabled for your account, subscriptions will be auto-attached. ",c().createElement(a.Text,{href:"https://access.redhat.com/articles/simple-content-access",component:"a",target:"_blank",rel:"noopener noreferrer"},"Learn about Simple Content Access ",c().createElement(l.ZP,null))),c().createElement(a.Text,null,"Any credentials of a user with a valid subscription can be used."))},c().createElement(r.ZP,null))),helperText:c().createElement(i,null)},c().createElement(a.ClipboardCopy,null,"rhc connect -u <username> -p <password>"))},d=function(){return c().createElement(a.FormGroup,{label:c().createElement("span",null,"Register with an activation key ",c().createElement(a.Popover,{position:"right",bodyContent:c().createElement(a.TextContent,null,c().createElement(a.Text,null,"Recommended for most users, and accounts who do not have Simple Content Access (SCA) enabled. Activation keys allow systems to be associated with specific subscriptions and service levels."),c().createElement(a.Text,{className:"pf-u-mb-0"},"Activation key: Organization administrators can view, create, and edit activation keys through ",c().createElement(a.Text,{href:"https://access.redhat.com/management/activation_keys",component:"a",target:"_blank",rel:"noopener noreferrer"},"Red Hat Subscription Management ",c().createElement(l.ZP,null)),"on the Customer Portal."),c().createElement(a.Text,null,"Organization ID: The organization ID is a Candlepin-specific identifier, and can be accessed through the Customer Portal on the ",c().createElement(a.Text,{href:"https://access.redhat.com/management/activation_keys",component:"a",target:"_blank",rel:"noopener noreferrer"},"activation keys ",c().createElement(l.ZP,null))," page."))},c().createElement(r.ZP,null))),helperText:c().createElement(i,null)},c().createElement(a.ClipboardCopy,null,"rhc connect -a <activation-key> -o  <organization-id>"))}},45139:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ae});var a=n(87757),r=n.n(a),l=n(48926),o=n.n(l),c=n(63038),s=n.n(c),i=n(97522),u=n.n(i),d=n(58740),m=n(18802),p=n(86350),h=n(48716),f=n(39173),E=n(45697),b=n.n(E),g=n(94962),v=n(1401),C=function(e){var t=e.isOpen,n=void 0!==t&&t,a=e.handleCancel,l=e.handleConfirm,c=e.systemsCount,s=e.data;return u().createElement(d.Modal,{variant:"small",title:"Confirm changes",isOpen:n,onClose:a,actions:[u().createElement(d.Button,{key:"confirm",variant:"primary",type:"button",onClick:l},"Confirm changes"),u().createElement(d.Button,{key:"cancel",variant:"link",type:"button",onClick:a},"Cancel")]},u().createElement(d.TextContent,null,u().createElement(d.Text,{component:"p"},"Your changes applies to"," ",u().createElement("b",null,c," connected ",(0,v._)(c,"system")),". Selected settings will also be applied to ",u().createElement("b",null,"all future systems")," ","that are connect through Red Hat Connect (rhc)."),u().createElement(d.Text,{component:"p",className:"pf-u-mb-sm"},"Upon confirmation, an Ansible Playbook will be pushed to"," ",c," ",(0,v._)(c,"system")," to apply changes.")),u().createElement(d.Button,{variant:"link",onClick:function(){o()(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.dx.getPlaybookPreview({compliance_openscap:s.useOpenSCAP?"enabled":"disabled",insights:s.hasInsights?"enabled":"disabled",remediations:s.enableCloudConnector?"enabled":"disabled"});case 2:t=e.sent,(0,v.S)(t);case 4:case"end":return e.stop()}}),e)})))()}},"View playbook"))};C.propTypes={isOpen:b().bool,handleConfirm:b().func.isRequired,handleCancel:b().func.isRequired,systemsCount:b().number.isRequired,data:b().shape({useOpenSCAP:b().bool,enableCloudConnector:b().bool,hasInsights:b().bool})};const y=C;var S,O=n(43476),P=n(83215),k=n(59713),w=n.n(k),T=n(18546),I=n(49120);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){return x(x({},e),{},{loaded:!1})},j=function(e,t){var n,a,r,l=t.payload;return x(x({},e),{},{loaded:!0,values:{useOpenSCAP:"enabled"===(null==l||null===(n=l.state)||void 0===n?void 0:n.compliance_openscap),enableCloudConnector:"enabled"===(null==l||null===(a=l.state)||void 0===a?void 0:a.remediations),hasInsights:"enabled"===(null==l||null===(r=l.state)||void 0===r?void 0:r.insights)}})};const A=(0,T.Gg)((S={},w()(S,"".concat(I.If,"_PENDING"),_),w()(S,"".concat(I.K8,"_PENDING"),_),w()(S,"".concat(I.K8,"_FULFILLED"),j),w()(S,"".concat(I.If,"_FULFILLED"),j),w()(S,"".concat(I.K8,"_ERROR"),(function(){return{error:!0}})),S),{loaded:!1,values:{}});var L;function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const H=(0,T.Gg)((L={},w()(L,"".concat(I.tj,"_PENDING"),(function(e){return N(N({},e),{},{loaded:!1})})),w()(L,"".concat(I.tj,"_FULFILLED"),(function(e,t){var n=t.payload;return N(N({},e),{},{loaded:!0},n||{})})),w()(L,"".concat(I.tj,"_ERROR"),(function(){return{error:!0}})),L),{loaded:!1,results:[]});var F;function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Z=(0,T.Gg)((F={},w()(F,"".concat(I.o9,"_PENDING"),(function(e){return z(z({},e),{},{loaded:!1})})),w()(F,"".concat(I.o9,"_FULFILLED"),(function(e,t){var n=t.payload;return z(z({},e),{},{loaded:!0,hosts:(null==n?void 0:n.results)||[],total:(null==n?void 0:n.count)||0,page:(null==n?void 0:n.page)||0,perPage:(null==n?void 0:n.per_page)||0})})),w()(F,"".concat(I.o9,"_ERROR"),(function(){return{error:!0}})),F),{loaded:!1,values:{}});var B=n(94778),q=n(16530),M=n(4147),U=n(85226),K=function(e){var t=e.handleClose;return u().createElement(d.Alert,{title:u().createElement(d.Title,{headingLevel:"h2",size:"xl"},"Red Hat connector (RHC)"),actionClose:u().createElement(d.AlertActionCloseButton,{onClick:t}),isInline:!0,customIcon:u().createElement(i.Fragment,null),className:"pf-u-mb-lg"},u().createElement(d.TextContent,null,u().createElement(d.Text,null,"Red Hat connector allows you to register with Red Hat Subscription Management (RHSM), connect to Red Hat Insights, and manage your Insights connections with one command."),u().createElement(d.Text,null,"Red Hat connector connects RHEL 7.9+ and 8.4+ systems. To register other systems with RHSM or Insights, check out the ",u().createElement("a",{target:"_blank",rel:"noreferer noopener",href:"./insights/registration"},"Registration Assistant"),"."),u().createElement(d.Form,{onSubmit:function(e){return e.preventDefault()}},u().createElement(d.Grid,{hasGutter:!0},u().createElement(d.GridItem,{sm:12,md:6,lg:4},u().createElement(U.i,null)),u().createElement(d.GridItem,{sm:12,md:6,lg:4},u().createElement(U.Z,null))))))};K.propTypes={handleClose:b().func.isRequired};const V=K;var Q=n(75663);const Y=function(){return u().createElement(d.Bullseye,null,u().createElement(d.EmptyState,null,u().createElement(d.EmptyStateIcon,{icon:Q.ZP}),u().createElement(d.Title,{headingLevel:"h4",size:"lg"},"This feature is not currently supported"),u().createElement(d.Button,{component:"a",variant:"link",href:"https://access.redhat.com/articles/simple-content-access",target:"_blank",rel:"noreferrer noopener"},"Customer portal")))};n(5190);var $=M._j,J=function(e){var t=e.setMadeChanges,n=e.defaults,a=e.onChange,r=e.madeChanges,l=e.setConfirmChangesOpen,o=(0,q.useHistory)().push,c=(0,O.useSelector)((function(e){var t=e.connectedSystemsReducer;return{systemsLoaded:null==t?void 0:t.loaded}}),O.shallowEqual).systemsLoaded,m=(0,i.useState)(n.hasInsights||n.useOpenSCAP||n.enableCloudConnector),p=s()(m,2),h=p[0],f=p[1],E=(0,i.useState)(n.useOpenSCAP),b=s()(E,2),g=b[0],v=b[1],C=(0,i.useState)(n.enableCloudConnector),y=s()(C,2),S=y[0],P=y[1];return(0,i.useEffect)((function(){t(h!==n.hasInsights||g!==n.useOpenSCAP||S!=n.enableCloudConnector),a({useOpenSCAP:g,enableCloudConnector:S})}),[g,S,h]),u().createElement(d.Stack,{hasGutter:!0,className:"pf-u-p-md"},u().createElement(d.StackItem,null,u().createElement(d.Level,null,u().createElement(d.LevelItem,null,u().createElement(d.Title,{headingLevel:"h2",size:"2xl"},"Red Hat Insights")),u().createElement(d.LevelItem,null,u().createElement(d.Button,{ouiaId:"primary-save-button",isDisabled:!c||!r,onClick:function(){return l(!0)}},"Save changes"),u().createElement(d.Button,{onClick:function(){return o($.logModal)},variant:"link"},"View log"))),u().createElement(d.TextContent,{className:"pf-u-mt-md"},u().createElement(d.Text,{component:"p"},"Red Hat Insights is a proactive operational efficiency and security risk management solution in Red Hat Enterprise Linux (RHEL) subscriptions for versions 6.4 and higher, as well as public cloud versions of RHEL. It helps identify, prioritize, and resolve risks to security, compliance, performance, availability, and stability before they become urgent issues. Insights also enables users to monitor for adherence to internal policies and understand configuration changes over time."))),u().createElement(d.StackItem,null,u().createElement(d.Title,{headingLevel:"h3",size:"xl"},"Settings"),u().createElement(d.Stack,{hasGutter:!0,className:"pf-u-mt-lg"},u().createElement(d.StackItem,null,u().createElement(d.Switch,{id:"connect-to-insights",ouiaId:"connect-to-insights","aria-label":"Connect to Red Hat Insights",isChecked:h,onChange:function(){var e=!h;f((function(){return e})),e||(v((function(){return!1})),P((function(){return!1})))},label:u().createElement(i.Fragment,null,u().createElement(d.Title,{headingLevel:"h4",size:"md"},"Connect to Red Hat Insights"),u().createElement(d.TextContent,null,u().createElement(d.Text,{component:"small"},"Required to use Insights applications. Enables Advisor, Drift, Patch, Vulnerability and Policies applications.")))}),u().createElement("div",{className:"pf-u-pl-3xl"},u().createElement(d.Stack,null,u().createElement(d.StackItem,null,u().createElement(d.Switch,{className:"pf-u-mt-md",key:"use-openscap",id:"use-openscap",ouiaId:"use-openscap","aria-label":"Use OpenSCAP for Compliance policies",isChecked:g,onChange:function(){v((function(e){var t=!e;return f((function(){return!0})),t}))},label:u().createElement(i.Fragment,null,u().createElement(d.Title,{headingLevel:"h4",size:"md"},"Use OpenSCAP for Compliance policies"),u().createElement(d.TextContent,null,u().createElement(d.Text,{component:"small"},"Required to use Compliance application")))})),u().createElement(d.StackItem,null,u().createElement(d.Switch,{className:"pf-u-mt-md",key:"enable-cloud-connector",id:"enable-cloud-connector",ouiaId:"enable-cloud-connector","aria-label":"Enable Cloud Connector",isChecked:S,onChange:function(){P((function(e){var t=!e;return t&&f((function(){return!0})),t}))},label:u().createElement(i.Fragment,null,u().createElement(d.Title,{headingLevel:"h4",size:"md"},"Enable Cloud Connector to fix issues directly from Insights"),u().createElement(d.TextContent,null,u().createElement(d.Text,{component:"small"},"Cloud Connector allows you to push Remediation Ansible Playbooks directly from Insights to your systems.")))}))))))))};J.propTypes={setMadeChanges:b().func.isRequired,defaults:b().shape({useOpenSCAP:b().bool,hasInsights:b().bool,enableCloudConnector:b().bool}),onChange:b().func.isRequired,madeChanges:b().bool,setConfirmChangesOpen:b().func.isRequired},J.defaultProps={defaults:{useOpenSCAP:!1,hasInsights:!1,enableCloudConnector:!1}};const W=J;var X=n(30319),ee=M._j,te=(0,i.lazy)((function(){return n.e(245).then(n.bind(n,65170))})),ne=(0,i.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(239)]).then(n.bind(n,34003))}));const ae=function(){var e=(0,q.useHistory)(),t=(0,i.useContext)(X.gE).getRegistry,n=(0,i.useState)("services"),a=s()(n,2),l=a[0],c=a[1],E=(0,i.useState)(!1),b=s()(E,2),g=b[0],v=b[1],C=(0,i.useState)(!0),S=s()(C,2),k=S[0],w=S[1],T=(0,i.useState)(!1),I=s()(T,2),R=I[0],x=I[1],_=(0,i.useRef)(),j=(0,O.useDispatch)(),L=(0,O.useSelector)((function(e){var t=e.activeStateReducer;return null==t?void 0:t.loaded})),D=(0,O.useSelector)((function(e){var t,n,a,r=e.activeStateReducer;return{useOpenSCAP:null==r||null===(t=r.values)||void 0===t?void 0:t.useOpenSCAP,enableCloudConnector:null==r||null===(n=r.values)||void 0===n?void 0:n.enableCloudConnector,hasInsights:null==r||null===(a=r.values)||void 0===a?void 0:a.hasInsights}}),O.shallowEqual),N=D.useOpenSCAP,F=D.enableCloudConnector,G=D.hasInsights,z=(0,O.useSelector)((function(e){var t=e.connectedSystemsReducer;return{systemsLoaded:null==t?void 0:t.loaded,systemsCount:null==t?void 0:t.total}}),O.shallowEqual),M=z.systemsLoaded,U=z.systemsCount;return(0,i.useEffect)((function(){t().register({activeStateReducer:A,logReducer:H,connectedSystemsReducer:Z}),j((0,B.Qe)()),j((0,B.j$)())}),[t]),(0,i.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appAction)||void 0===n||n.call(t,"cloud-connector-dashboard")}),[]),u().createElement(u().Fragment,null,u().createElement(q.Route,{exact:!0,path:ee.connectSystemsModal,render:function(){return u().createElement(i.Suspense,{fallback:u().createElement(d.Bullseye,null,u().createElement(d.Spinner,null))},u().createElement(te,null))}}),u().createElement(q.Route,{exact:!0,path:ee.logModal,render:function(){return u().createElement(i.Suspense,{fallback:u().createElement(d.Bullseye,null,u().createElement(d.Spinner,null))},u().createElement(ne,null))}}),u().createElement(h.Z,null,u().createElement(f.Z,{title:u().createElement(d.Split,{hasGutter:!0},u().createElement(d.SplitItem,null,"Red Hat connector Dashboard"),u().createElement(d.SplitItem,{isFilled:!0},u().createElement(d.Label,{color:"cyan"},"Tech preview")),u().createElement(d.SplitItem,null,u().createElement(d.Button,{variant:"primary",onClick:function(){return e.push(ee.connectSystemsModal)}},"Connect systems")))})),u().createElement(p.Z,null,u().createElement(i.Fragment,null,M&&0===U&&k&&u().createElement(V,{handleClose:function(){return w(!1)}})),u().createElement("div",{className:"dashboard__content"},u().createElement(d.Stack,{className:"pf-u-p-md"},u().createElement(d.StackItem,null,u().createElement(d.Level,null,u().createElement(d.LevelItem,null,u().createElement(d.Title,{headingLevel:"h3",size:"md"},"Systems connected with Red Hat connector"),u().createElement(d.Flex,{alignContent:{default:"alignContentCenter"},alignItems:{default:"alignItemsCenter"}},M?u().createElement(d.Title,{headingLevel:"h3",size:"2xl"},U):u().createElement(d.Skeleton,{width:"33%"}),!L&&void 0!==N&&void 0!==F&&u().createElement(d.Text,{className:"dashboard__in-progress-text",component:"small"},u().createElement(m.ZP,null)," Changes being applied")),u().createElement("a",{href:"./insights/inventory"},"View in Inventory"))))),u().createElement(d.Tabs,{activeKey:l,onSelect:function(e,t){return c(t)}},u().createElement(d.Tab,{title:u().createElement(d.TabTitleText,null,"Services"),eventKey:"services"},L||void 0!==N&&void 0!==F?u().createElement(W,{madeChanges:R,setConfirmChangesOpen:v,setMadeChanges:x,defaults:{useOpenSCAP:N,enableCloudConnector:F,hasInsights:G},onChange:function(e){_.current=e}}):u().createElement(d.Bullseye,null,u().createElement(d.Spinner,{className:"pf-u-p-lg",size:"xl"}))),u().createElement(d.Tab,{eventKey:"activation-keys",title:u().createElement(d.TabTitleText,null,"Activation keys")},u().createElement("div",{className:"pf-u-m-md"},u().createElement(Y,null)))))),u().createElement(y,{isOpen:g,handleCancel:function(){return v(!1)},systemsCount:U,data:_.current,handleConfirm:function(){v(!1),o()(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,B.mt)(_.current),j(t),e.next=4,t.payload;case 4:j((0,P.wN)({variant:"success",title:"Changes saved",description:"Your service enablement changes were applied to connected systems"})),x(!1);case 6:case"end":return e.stop()}}),e)})))()}}))}},94962:(e,t,n)=>{n.d(t,{dx:()=>o,TQ:()=>l,ok:()=>c});var a=n(77460),r=n(91571),l=function(){return a.ZP.get("".concat("/api/inventory/v1","/hosts?filter[system_profile][rhc_client_id]=not_nil&fields[system_profile]=rhc_client_id,rhc_config_state&staleness=fresh&staleness=stale&&registered_with=insights"))},o=new r.DefaultApi(void 0,"/api/config-manager/v1",a.ZP),c=function(e){var t=e.useOpenSCAP,n=e.enableCloudConnector,a=e.hasInsights;return o.updateStates({compliance_openscap:t?"enabled":"disabled",insights:t||n||a?"enabled":"disabled",remediations:n?"enabled":"disabled"})}},49120:(e,t,n)=>{n.d(t,{K8:()=>a,If:()=>r,tj:()=>l,o9:()=>o});var a="GET_CURR_STATE",r="SET_CURR_STATE",l="GET_LOG",o="GET_CONNECTED_HOSTS"},94778:(e,t,n)=>{n.d(t,{Qe:()=>l,mt:()=>o,VU:()=>c,j$:()=>s});var a=n(94962),r=n(49120),l=function(){return{type:r.K8,payload:a.dx.getCurrentState()}},o=function(e){return{type:r.If,payload:(0,a.ok)(e)}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.perPage,n=void 0===t?50:t,l=e.page,o=void 0===l?1:l;return{type:r.tj,payload:a.dx.getStates(n,(o-1)*n)}},s=function(){return{type:r.o9,payload:(0,a.TQ)()}}},1401:(e,t,n)=>{n.d(t,{_:()=>a,S:()=>r});var a=function(e,t,n){return e>1?n||t+"s":t},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"".concat((new Date).toISOString()),n="data:text/plain;charset=utf-8,",a=new Blob([e],{type:n}),r=document.createElement("a");r.setAttribute("href",URL.createObjectURL(a)),r.setAttribute("download","".concat(t,".yml")),r.style.visibility="hidden",document.body.appendChild(r),r.click(),document.body.removeChild(r)}}}]);
//# sourceMappingURL=../sourcemaps/Dashboard.340acd4c149c842c2d4983bb2ae0f822.js.map