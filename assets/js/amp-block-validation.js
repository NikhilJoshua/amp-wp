!function(){var e={11:function(e,t,r){var n={"./amp-block-validation.js":93,"./amp-document-setting-panel.js":877,"./amp-pre-publish-panel.js":327};function i(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=11},44:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(307),i=(r(196),r(736)),o=r(609),a=r(818),l=r(883),s=r(201),c=r(361),u=r(504),d=r(590),m=r(93);function E(){const{isAMPEnabled:e,toggleAMP:t}=(0,u.c)(),r=(0,n.useRef)(`amp-toggle-${Math.random().toString(32).substr(-4)}`);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("label",{htmlFor:r.current},(0,i.__)("Enable AMP","amp")),(0,n.createElement)(o.FormToggle,{checked:e,onChange:t,id:r.current}))}var p=function(e){return(0,n.createElement)("svg",e,(0,n.createElement)("g",{clipPath:"url(#clip-amp-validation-errors-kept)",fill:"#BB522E"},(0,n.createElement)("path",{d:"M10.762 2.541c4.4 0 8 3.6 8 8 0 1.6-.5 3-1.2 4.2l1.4 1.5c1.1-1.6 1.8-3.6 1.8-5.7 0-5.5-4.5-10-10-10-2 0-3.9.6-5.5 1.7l1.4 1.5c1.2-.8 2.6-1.2 4.1-1.2ZM.762 10.541c0 5.5 4.5 10 10 10 2.7 0 5.1-1.1 6.9-2.8l-14-14.2c-1.8 1.8-2.9 4.3-2.9 7Zm10 8c-4.4 0-8-3.6-8-8 0-1.5.4-2.8 1.1-4l10.9 10.9c-1.2.7-2.5 1.1-4 1.1Z"}),(0,n.createElement)("path",{d:"M14.262 9.74c.1 0 .1-.1.1-.2 0-.2-.2-.4-.4-.4h-2l1.6 1.6.7-1ZM12.461 4.541h-.8l-1.6 2.6 1.7 1.7.7-4.3ZM7.462 11.541s-.1.1-.1.2c0 .2.2.4.4.4h2.3l-.8 4.5h.7l2.6-4.1-3.5-3.6-1.6 2.6Z"})),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:"clip-amp-validation-errors-kept"},(0,n.createElement)("path",{fill:"#fff",transform:"translate(.762 .541)",d:"M0 0h20v20H0z"}))))};p.defaultProps={width:"21",height:"21",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var f=function(e){return(0,n.createElement)("svg",e,(0,n.createElement)("path",{fill:"#707070",d:"M8 20c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2C9.5 1.17 8.83.5 8 .5S6.5 1.17 6.5 2v.68C3.64 3.36 2 5.92 2 9v5l-2 2v1h16v-1l-2-2zm-2 1H4V9c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}))};function g(){const{isAMPEnabled:e}=(0,u.c)(),{isFetchingErrors:t,fetchingErrorsMessage:r}=(0,d.P)(),{openGeneralSidebar:g,closePublishSidebar:v}=(0,a.useDispatch)("core/edit-post"),{isPostDirty:h,maybeIsPostDirty:_,keptMarkupValidationErrorCount:w,reviewedValidationErrorCount:P,unreviewedValidationErrorCount:k}=(0,a.useSelect)((e=>({isPostDirty:e(l.jd).getIsPostDirty(),maybeIsPostDirty:e(l.jd).getMaybeIsPostDirty(),keptMarkupValidationErrorCount:e(l.jd).getKeptMarkupValidationErrors().length,reviewedValidationErrorCount:e(l.jd).getReviewedValidationErrors().length,unreviewedValidationErrorCount:e(l.jd).getUnreviewedValidationErrors().length})),[]);if(!e)return(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(E,null));if(t)return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(E,null)),(0,n.createElement)(c.H,{message:r,isLoading:!0,isSmall:!0}));const b=()=>{v(),g(`${m.PLUGIN_NAME}/${m.SIDEBAR_NAME}`)};return h||_?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(E,null)),(0,n.createElement)(c.H,{icon:(0,n.createElement)(f,null),message:_?(0,i.__)("Content may have changed. Trigger validation in the AMP Validation sidebar.","amp"):(0,i.__)("Content has changed. Trigger validation in the AMP Validation sidebar.","amp"),isSmall:!0}),(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(o.Button,{onClick:b,isSecondary:!0,isSmall:!0},(0,i.__)("Open AMP Validation","amp")))):w>0?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(E,null)),(0,n.createElement)(c.H,{icon:(0,n.createElement)(p,null),message:(0,i.sprintf)(
/* translators: %d is count of validation errors whose invalid markup is kept */
(0,i._n)("AMP is blocked due to %d validation issue marked as kept.","AMP is blocked due to %d validation issues marked as kept.",w,"amp"),w),isSmall:!0}),(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(o.Button,{onClick:b,isSecondary:!0,isSmall:!0},(0,i._n)("Review issue","Review issues",w,"amp")))):k>0?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(E,null)),(0,n.createElement)(c.H,{icon:(0,n.createElement)(s.Jj,{broken:!0}),message:(0,i.sprintf)(
/* translators: %d is count of unreviewed validation error */
(0,i._n)("AMP is valid, but %d issue needs review.","AMP is valid, but %d issues need review.",k,"amp"),k),isSmall:!0}),(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(o.Button,{onClick:b,isSecondary:!0,isSmall:!0},(0,i._n)("Review issue","Review issues",k,"amp")))):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(E,null)),(0,n.createElement)(c.H,{icon:(0,n.createElement)(s.Jj,null),message:P>0?(0,i.sprintf)(
/* translators: %d is count of unreviewed validation error */
(0,i._n)("AMP is valid. %d issue was reviewed.","AMP is valid. %d issues were reviewed.",P,"amp"),P):(0,i.__)("No AMP validation issues detected.","amp"),isSmall:!0}),P>0&&(0,n.createElement)(o.PanelRow,null,(0,n.createElement)(o.Button,{onClick:b,isSecondary:!0,isSmall:!0},(0,i.__)("Open AMP Validation","amp"))))}f.defaultProps={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 20"}},201:function(e,t,r){"use strict";r.d(t,{_4:function(){return c},mE:function(){return u},Jj:function(){return d}});var n=r(307),i=(r(196),r(697),function(e){return(0,n.createElement)("svg",e,(0,n.createElement)("path",{fill:"#0075C2",d:"m13.3 9.1-4 6.6h-.8l.7-4.3H7c-.2 0-.4-.2-.4-.4 0-.1.1-.2.1-.2l4-6.6h.7l-.7 4.3h2.2c.2 0 .4.2.4.4.1.1 0 .2 0 .2zM10 .5C4.7.5.4 4.8.4 10c0 5.3 4.3 9.5 9.6 9.5s9.6-4.3 9.6-9.5c0-5.3-4.3-9.5-9.6-9.5z"}))});i.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"};var o=function(e){return(0,n.createElement)("svg",e,(0,n.createElement)("path",{d:"M9.863 16.815h-.7l.8-4.5h-2.3c-.2 0-.4-.2-.4-.4 0-.1.1-.2.1-.2l4.2-7h.8l-.8 4.6h2.3c.2 0 .4.2.4.4 0 .1 0 .2-.1.2l-4.3 6.9Zm.8-16.1c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10Z"}))};o.defaultProps={width:"21",height:"21",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=function(e){return(0,n.createElement)("svg",e,(0,n.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M.913 10.283c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10Z",fill:"#fff"}),(0,n.createElement)("path",{d:"M10.113 16.383h-.7l.8-4.5h-2.3c-.2 0-.4-.2-.4-.4 0-.1.1-.2.1-.2l4.2-7h.8l-.8 4.6h2.3c.2 0 .4.2.4.4 0 .1 0 .2-.1.2l-4.3 6.9Zm.8-16.1c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10Z",fill:"#37414B"}),(0,n.createElement)("circle",{cx:"10.913",cy:"10.283",r:"9",stroke:"#BB522E",strokeWidth:"2"}),(0,n.createElement)("path",{stroke:"#BB522E",strokeWidth:"2",d:"M16.518 17.346 3.791 4.618"}),(0,n.createElement)("path",{stroke:"#fff",strokeWidth:"2",d:"M19.805 18.118 3.282 1.249"}))};function l(e){let{hasBadge:t}=e;return(0,n.createElement)("span",{className:"amp-toolbar-icon components-menu-items__item-icon"+(t?" amp-toolbar-icon--has-badge":"")},(0,n.createElement)(o,null))}function s(e){let{hasBadge:t}=e;return(0,n.createElement)("span",{className:"amp-toolbar-broken-icon"+(t?" amp-toolbar-broken-icon--has-badge":"")},(0,n.createElement)(a,null))}function c(e){let{broken:t=!1,count:r}=e;return(0,n.createElement)("div",{className:"amp-plugin-icon "+(t?"amp-plugin-icon--broken":"")},t?(0,n.createElement)(s,{hasBadge:Boolean(r)}):(0,n.createElement)(l,{hasBadge:Boolean(r)}),0<r&&(0,n.createElement)("div",{className:"amp-error-count-badge"},r))}function u(){return(0,n.createElement)(l,{hasBadge:!1})}function d(e){let{broken:t=!1}=e;return(0,n.createElement)("div",{className:"amp-status-icon "+(t?"amp-status-icon--broken":"")},(0,n.createElement)(i,null))}a.defaultProps={width:"21",height:"21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},361:function(e,t,r){"use strict";r.d(t,{H:function(){return s},Z:function(){return c}});var n=r(307),i=r(184),o=r.n(i),a=(r(697),r(609));function l(e){let{inline:t=!1}=e;const r=t?"span":"div";return(0,n.createElement)(r,{className:o()("amp-spinner-container",{"amp-spinner-container--inline":t})},(0,n.createElement)(a.Spinner,null))}function s(e){let{action:t,icon:r,isLoading:i=!1,isSmall:a=!1,message:s}=e;const c=i?(0,n.createElement)(l,null):r;return(0,n.createElement)("div",{className:o()("sidebar-notification",{"is-loading":i,"is-small":a})},c&&(0,n.createElement)("div",{className:"sidebar-notification__icon"},c),(0,n.createElement)("div",{className:"sidebar-notification__content"},(0,n.createElement)("p",null,s),t&&(0,n.createElement)("div",{className:"sidebar-notification__action"},t)))}function c(e){let{children:t,isShady:r}=e;return(0,n.createElement)("div",{className:o()("sidebar-notifications-container",{"is-shady":r})},t)}},504:function(e,t,r){"use strict";r.d(t,{c:function(){return i}});var n=r(818);function i(){const e=(0,n.useSelect)((e=>e("core/editor").getEditedPostAttribute("amp_enabled")||!1),[]),{editPost:t}=(0,n.useDispatch)("core/editor");return{isAMPEnabled:e,toggleAMP:()=>t({amp_enabled:!e})}}},590:function(e,t,r){"use strict";r.d(t,{P:function(){return s}});var n=r(307),i=r(818),o=r(333),a=r(736),l=r(883);function s(){const[e,t]=(0,n.useState)(!1),[r,s]=(0,n.useState)(""),{isEditedPostNew:c,isFetchingErrors:u}=(0,i.useSelect)((e=>({isEditedPostNew:e("core/editor").isEditedPostNew(),isFetchingErrors:e(l.jd).getIsFetchingErrors()})),[]),d=(0,o.usePrevious)(c),m=(0,o.usePrevious)(u);return(0,n.useEffect)((()=>{e||!u&&m&&t(!0)}),[e,u,m]),(0,n.useEffect)((()=>{s(e?(0,a.__)("Re-validating content.","amp"):c||d?(0,a.__)("Validating content.","amp"):u?(0,a.__)("Loading…","amp"):"")}),[e,c,u,d]),{isFetchingErrors:u,fetchingErrorsMessage:r}}},93:function(e,t,r){"use strict";r.r(t),r.d(t,{PLUGIN_ICON:function(){return J},PLUGIN_NAME:function(){return Z},PLUGIN_TITLE:function(){return G},SIDEBAR_NAME:function(){return W},default:function(){return $}});var n=r(307),i=r(736),o=r(67),a=r(818),l=r(883),s=r(201),c=r(609),u=r(361),d=(r(196),r(590)),m=function(e){return(0,n.createElement)("svg",e,(0,n.createElement)("path",{fill:"#707070",d:"M8 20c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2C9.5 1.17 8.83.5 8 .5S6.5 1.17 6.5 2v.68C3.64 3.36 2 5.92 2 9v5l-2 2v1h16v-1l-2-2zm-2 1H4V9c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}))};function E(){const{autosave:e,savePost:t}=(0,a.useDispatch)("core/editor"),{isFetchingErrors:r,fetchingErrorsMessage:o}=(0,d.P)(),{isDraft:s,isPostDirty:E,maybeIsPostDirty:p}=(0,a.useSelect)((e=>({isDraft:-1!==["draft","auto-draft"].indexOf(e("core/editor").getEditedPostAttribute("status")),isPostDirty:e(l.jd).getIsPostDirty(),maybeIsPostDirty:e(l.jd).getMaybeIsPostDirty()})),[]);return r?(0,n.createElement)(u.H,{message:o,isLoading:!0}):E||p?(0,n.createElement)(u.H,{icon:(0,n.createElement)(m,null),message:p?(0,i.__)("Content may have changed.","amp"):(0,i.__)("Content has changed.","amp"),action:s?(0,n.createElement)(c.Button,{isLink:!0,onClick:()=>t({isPreview:!0})},(0,i.__)("Save draft and validate","amp")):(0,n.createElement)(c.Button,{isLink:!0,onClick:()=>e({isPreview:!0})},(0,i.__)("Re-validate","amp"))}):null}m.defaultProps={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 20"};var p=function(e){return(0,n.createElement)("svg",e,(0,n.createElement)("g",{clipPath:"url(#clip-amp-validation-errors-kept)",fill:"#BB522E"},(0,n.createElement)("path",{d:"M10.762 2.541c4.4 0 8 3.6 8 8 0 1.6-.5 3-1.2 4.2l1.4 1.5c1.1-1.6 1.8-3.6 1.8-5.7 0-5.5-4.5-10-10-10-2 0-3.9.6-5.5 1.7l1.4 1.5c1.2-.8 2.6-1.2 4.1-1.2ZM.762 10.541c0 5.5 4.5 10 10 10 2.7 0 5.1-1.1 6.9-2.8l-14-14.2c-1.8 1.8-2.9 4.3-2.9 7Zm10 8c-4.4 0-8-3.6-8-8 0-1.5.4-2.8 1.1-4l10.9 10.9c-1.2.7-2.5 1.1-4 1.1Z"}),(0,n.createElement)("path",{d:"M14.262 9.74c.1 0 .1-.1.1-.2 0-.2-.2-.4-.4-.4h-2l1.6 1.6.7-1ZM12.461 4.541h-.8l-1.6 2.6 1.7 1.7.7-4.3ZM7.462 11.541s-.1.1-.1.2c0 .2.2.4.4.4h2.3l-.8 4.5h.7l2.6-4.1-3.5-3.6-1.6 2.6Z"})),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:"clip-amp-validation-errors-kept"},(0,n.createElement)("path",{fill:"#fff",transform:"translate(.762 .541)",d:"M0 0h20v20H0z"}))))};function f(){const{autosave:e,savePost:t}=(0,a.useDispatch)("core/editor"),{isFetchingErrors:r}=(0,d.P)(),{fetchingErrorsRequestErrorMessage:o,isDraft:m,isEditedPostNew:E,keptMarkupValidationErrorCount:f,reviewLink:g,supportLink:v,unreviewedValidationErrorCount:h,validationErrorCount:_}=(0,a.useSelect)((e=>({fetchingErrorsRequestErrorMessage:e(l.jd).getFetchingErrorsRequestErrorMessage(),isDraft:-1!==["draft","auto-draft"].indexOf(e("core/editor").getEditedPostAttribute("status")),isEditedPostNew:e("core/editor").isEditedPostNew(),keptMarkupValidationErrorCount:e(l.jd).getKeptMarkupValidationErrors().length,reviewLink:e(l.jd).getReviewLink(),supportLink:e(l.jd).getSupportLink(),unreviewedValidationErrorCount:e(l.jd).getUnreviewedValidationErrors().length,validationErrorCount:e(l.jd).getValidationErrors().length})),[]);if(r)return null;if(E)return(0,n.createElement)(u.H,{icon:(0,n.createElement)(s.Jj,null),message:(0,i.__)("Validation will be checked upon saving.","amp")});const w=g&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(c.ExternalLink,{href:g},(0,i.__)("View technical details","amp")),(0,n.createElement)("br",null),v&&(0,n.createElement)(c.ExternalLink,{href:v},(0,i.__)("Get Support","amp")));return o?(0,n.createElement)(u.H,{icon:(0,n.createElement)(p,null),message:o,action:(0,n.createElement)(c.Button,{isLink:!0,onClick:m?()=>t({isPreview:!0}):()=>e({isPreview:!0})},(0,i.__)("Try again","amp"))}):f>0?(0,n.createElement)(u.H,{icon:(0,n.createElement)(p,null),message:(0,i.sprintf)(
/* translators: %d is count of validation errors whose invalid markup is kept */
(0,i._n)("AMP is disabled due to invalid markup being kept for %d issue.","AMP is disabled due to invalid markup being kept for %d issues.",f,"amp"),f),action:w}):h>0?(0,n.createElement)(u.H,{icon:(0,n.createElement)(s.Jj,{broken:!0}),message:(0,i.sprintf)(
/* translators: %d is count of unreviewed validation error */
(0,i._n)("AMP is valid, but %d issue needs review.","AMP is valid, but %d issues need review.",h,"amp"),h),action:w}):_>0?(0,n.createElement)(u.H,{icon:(0,n.createElement)(s.Jj,null),message:(0,i.sprintf)(
/* translators: %d is count of unreviewed validation error */
(0,i._n)("AMP is valid. %d issue was reviewed.","AMP is valid. %d issues were reviewed.",_,"amp"),_),action:w}):(0,n.createElement)(u.H,{icon:(0,n.createElement)(s.Jj,null),message:(0,i.__)("No AMP validation issues detected.","amp")})}function g(){return(0,n.createElement)(u.Z,{isShady:!0},(0,n.createElement)(E,null),(0,n.createElement)(f,null))}p.defaultProps={width:"21",height:"21",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var v=r(184),h=r.n(v),_=(r(697),r(422)),w=function(e){return(0,n.createElement)("svg",e,(0,n.createElement)("path",{d:"m2.45 3.068 3.34 1.178v1.64L.743 3.749V2.365L5.79.227v1.64L2.45 3.068Zm8.19-.017L7.237 1.86V.232l5.104 2.14v1.376L7.236 5.893V4.258l3.405-1.207Z",fill:"#fff"}))};w.defaultProps={width:"13",height:"6",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var P=function(e){return(0,n.createElement)("svg",e,(0,n.createElement)("path",{d:"M3.675.959h1.5v4.9c0 .5-.1.9-.3 1.2-.2.3-.5.6-.8.8-.4.2-.8.3-1.2.3-.8 0-1.3-.2-1.8-.6-.4-.4-.6-.9-.6-1.6h1.5c0 .3.1.6.2.8.1.2.4.2.7.2.3 0 .5-.1.7-.3.2-.2.2-.5.2-.8v-4.9h-.1ZM10.075 6.26c0-.3-.1-.5-.3-.6-.2-.1-.5-.3-1.1-.5-.5-.2-.9-.3-1.2-.5-.8-.4-1.2-1-1.2-1.8 0-.4.1-.7.3-1 .2-.3.5-.5.9-.7.5-.2 1-.3 1.5-.3s1 .1 1.4.3c.4.2.7.4.9.8.2.3.3.7.3 1.1h-1.5c0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.9-.3s-.6.1-.8.2c-.2.2-.3.3-.3.6 0 .2.1.4.3.6.2.2.6.3 1 .4.8.3 1.4.6 1.8.9.4.3.6.8.6 1.4 0 .6-.2 1.1-.7 1.4-.5.4-1.1.5-1.9.5-.5 0-1-.1-1.5-.3-.4-.2-.8-.5-1-.8-.2-.3-.4-.8-.4-1.2h1.5c0 .8.5 1.2 1.4 1.2.3 0 .6-.1.8-.2.3 0 .4-.2.4-.4Z",fill:"#fff"}))};P.defaultProps={width:"12",height:"9",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var k=function(e){return(0,n.createElement)("svg",e,(0,n.createElement)("path",{d:"M4.13 6.46h-1.2l-.4 2.4h-1.1l.4-2.4H.53v-1h1.5l.3-1.7h-1.3v-1h1.5l.4-2.4h1.1l-.4 2.4h1.1l.4-2.4h1.1l-.4 2.4h1.3v1h-1.5l-.3 1.7h1.3v1h-1.5l-.4 2.4h-1.1l.5-2.4Zm-1-1h1.1l.3-1.7h-1.1l-.3 1.7Z",fill:"#fff"}))};function b(e){let{type:t}=e;switch(t){case _.HTML_ATTRIBUTE_ERROR_TYPE:case _.HTML_ELEMENT_ERROR_TYPE:return(0,n.createElement)(w,null);case _.JS_ERROR_TYPE:return(0,n.createElement)(P,null);case _.CSS_ERROR_TYPE:return(0,n.createElement)(k,null);default:return null}}function S(e){let{kept:t,title:r,error:{type:o}}=e;return(0,n.createElement)("div",{className:"amp-error__panel-title",title:t?(0,i.__)("This error has been kept, making this URL not AMP-compatible.","amp"):""},(0,n.createElement)("div",{className:"amp-error__icons"},o&&(0,n.createElement)("div",{className:`amp-error__error-type-icon amp-error__error-type-icon--${null==o?void 0:o.replace(/_/g,"-")}`},(0,n.createElement)(b,{type:o}))),(0,n.createElement)("div",{className:"amp-error__title",dangerouslySetInnerHTML:{__html:r}}))}k.defaultProps={width:"8",height:"9",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var R=r(175);function y(e){const t={theme:[],plugin:[],"mu-plugin":[],embed:[],core:[],blocks:[]};for(const r of e)r.type&&r.type in t?t[r.type].push(r):"block_name"in r&&t.blocks.push(r);return t}var T=function(e){return(0,n.createElement)("svg",e,(0,n.createElement)("path",{d:"m10.075 4.055 6.275 10.842H3.8l6.275-10.842Zm0-3.325L.908 16.564h18.333L10.075.73Zm.833 11.667H9.242v1.667h1.666v-1.667Zm0-5H9.242v3.333h1.666V7.397Z",fill:"#BE2C23"}))};T.defaultProps={width:"20",height:"17",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var A=function(e){return(0,n.createElement)("svg",e,(0,n.createElement)("path",{d:"M12.258 9.043 10.49 10.81 8.716 9.043l-1.175 1.175 1.775 1.767-1.767 1.767 1.175 1.175 1.767-1.767 1.767 1.767 1.175-1.175-1.767-1.767 1.767-1.767-1.175-1.175Zm1.15-5.391-.834-.834H8.408l-.834.834H4.658v1.666h11.666V3.652h-2.916Zm-7.917 12.5c0 .916.75 1.666 1.667 1.666h6.666c.917 0 1.667-.75 1.667-1.666v-10h-10v10Zm1.667-8.334h6.666v8.334H7.158V7.818Z",fill:"#479696"}))};function I(e){let t,{clientId:r,blockTypeName:o,sources:a}=e;const l=null===_.blockSources||void 0===_.blockSources?void 0:_.blockSources[o];if(r&&"core/shortcode"!==o)switch(null==l?void 0:l.type){case"plugin":t=(0,i.sprintf)(
/* translators: %s: plugin name. */
(0,i.__)("%s (plugin)","amp"),l.title);break;case"mu-plugin":t=(0,i.sprintf)(
/* translators: %s: plugin name. */
(0,i.__)("%s (must-use plugin)","amp"),l.title);break;case"theme":t=(0,i.sprintf)(
/* translators: %s: theme name. */
(0,i.__)("%s (theme)","amp"),l.title);break;default:t=null==l?void 0:l.title}return t||(t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=y(e),r=[],n=new Set(t.plugin.map((e=>{let{name:t}=e;return t}))),o=new Set(t["mu-plugin"].map((e=>{let{name:t}=e;return t})));let a=[...n,...o];if(a.length>1&&(a=a.filter((e=>"gutenberg"!==e))),1===a.length)r.push(_.pluginNames[a[0]]||a[0]);else{const e=n.size,t=o.size;0<e&&r.push((0,i.sprintf)("%1$s (%2$d)",(0,i.__)("Plugins","amp"),e)),0<t&&r.push((0,i.sprintf)("%1$s (%2$d)",(0,i.__)("Must-use plugins","amp"),t))}if(0===t.embed.length){const e=t.theme.filter((e=>{let{name:t}=e;return _.themeSlug===t})),n=t.theme.filter((e=>{let{name:t}=e;return _.themeSlug!==t}));0<e.length&&r.push(_.themeName),0<n.length&&
/* translators: placeholder is the slug of an inactive WordPress theme. */
r.push((0,i.__)("Inactive theme(s)","amp"))}return 0===r.length&&0<t.blocks.length&&r.push(t.blocks[0].block_name),0===r.length&&0<t.embed.length&&r.push((0,i.__)("Embed","amp")),0===r.length&&0<t.core.length&&r.push((0,i.__)("Core","amp")),0===r.length&&0<e.length&&r.push((0,i.__)("Unknown","amp")),r.join(", ")}(a)),(0,n.createElement)(n.Fragment,null,(0,n.createElement)("dt",null,(0,i.__)("Source","amp")),(0,n.createElement)("dd",null,t))}function M(e){let t,r,{status:o}=e;return t=[_.VALIDATION_ERROR_NEW_ACCEPTED_STATUS,_.VALIDATION_ERROR_ACK_ACCEPTED_STATUS].includes(o)?(0,n.createElement)("span",{className:"amp-error__kept-removed amp-error__kept-removed--removed"},(0,i.__)("Removed","amp"),(0,n.createElement)("span",null,(0,n.createElement)(A,null))):(0,n.createElement)("span",{className:"amp-error__kept-removed amp-error__kept-removed--kept"},(0,i.__)("Kept","amp"),(0,n.createElement)("span",null,(0,n.createElement)(T,null))),r=[_.VALIDATION_ERROR_ACK_ACCEPTED_STATUS,_.VALIDATION_ERROR_ACK_REJECTED_STATUS].includes(o)?(0,i.__)("Yes","amp"):(0,i.__)("No","amp"),(0,n.createElement)(n.Fragment,null,(0,n.createElement)("dt",null,(0,i.__)("Markup status","amp")),(0,n.createElement)("dd",null,t),(0,n.createElement)("dt",null,(0,i.__)("Reviewed","amp")),(0,n.createElement)("dd",null,r))}function N(e){let{blockTypeIcon:t,blockTypeTitle:r}=e;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("dt",null,(0,i.__)("Block type","amp")),(0,n.createElement)("dd",null,(0,n.createElement)("span",{className:"amp-error__block-type-description"},r||(0,i.__)("unknown","amp"),t&&(0,n.createElement)("span",{className:"amp-error__block-type-icon"},(0,n.createElement)(R.BlockIcon,{icon:t})))))}function C(e){let{blockType:t,clientId:r,error:{sources:o},isExternal:a,removed:l,status:s}=e;const c=null==t?void 0:t.title,u=null==t?void 0:t.name,d=null==t?void 0:t.icon;return(0,n.createElement)(n.Fragment,null,l&&(0,n.createElement)("p",null,(0,i.__)("This error is no longer detected, either because the block was removed or the editor mode was switched.","amp")),a&&(0,n.createElement)("p",null,(0,i.__)("This error comes from outside the content (e.g. header or footer).","amp")),(0,n.createElement)("dl",{className:"amp-error__details"},!(l||a)&&(0,n.createElement)(N,{blockTypeIcon:d,blockTypeTitle:c}),(0,n.createElement)(I,{blockTypeName:u,clientId:r,sources:o}),(0,n.createElement)(M,{status:s})))}function D(e){let{clientId:t,error:r,status:o,term_id:s,title:u}=e;const{selectBlock:d}=(0,a.useDispatch)("core/block-editor"),m=(0,a.useSelect)((e=>e(l.jd).getReviewLink()),[]),E=o===_.VALIDATION_ERROR_ACK_ACCEPTED_STATUS||o===_.VALIDATION_ERROR_ACK_REJECTED_STATUS,p=o===_.VALIDATION_ERROR_ACK_REJECTED_STATUS||o===_.VALIDATION_ERROR_NEW_REJECTED_STATUS,f=!Boolean(t),{blockType:g,removed:v}=(0,a.useSelect)((e=>{const r=e("core/block-editor").getBlockName(t);return{removed:t&&!r,blockType:e("core/blocks").getBlockType(r)}}),[t]);let w=null;m&&(w=new URL(m),w.hash=`#tag-${s}`);const P=h()("amp-error",{"amp-error--reviewed":E,"amp-error--new":!E,"amp-error--removed":v,"amp-error--kept":p,[`error-${t}`]:t});return(0,n.createElement)(c.PanelBody,{className:P,title:(0,n.createElement)(S,{error:r,kept:p,title:u}),initialOpen:!1},(0,n.createElement)(C,{blockType:g,clientId:t,error:r,isExternal:f,removed:v,status:o}),(0,n.createElement)("div",{className:"amp-error__actions"},!(v||f)&&(0,n.createElement)(c.Button,{className:"amp-error__select-block",isSecondary:!0,onClick:()=>{d(t)}},(0,i.__)("Select block","amp")),w&&(0,n.createElement)(c.ExternalLink,{href:w.href,className:"amp-error__details-link"},(0,i.__)("View details","amp"))))}function V(){const{setIsShowingReviewed:e}=(0,a.useDispatch)(l.jd),{displayedErrors:t,hasReviewedValidationErrors:r,isShowingReviewed:o}=(0,a.useSelect)((e=>{var t;const r=e(l.jd).getIsShowingReviewed();return{displayedErrors:r?e(l.jd).getValidationErrors():e(l.jd).getUnreviewedValidationErrors(),hasReviewedValidationErrors:(null===(t=e(l.jd).getReviewedValidationErrors())||void 0===t?void 0:t.length)>0,isShowingReviewed:r}}),[]);return(0,n.useEffect)((()=>{const e=document.querySelector(".amp-sidebar a, .amp-sidebar button, .amp-sidebar input");e&&e.focus()}),[]),(0,n.createElement)("div",{className:"amp-sidebar"},(0,n.createElement)(g,null),0<t.length&&(0,n.createElement)("ul",{className:"amp-sidebar__errors-list"},t.map(((e,t)=>(0,n.createElement)("li",{key:`${e.clientId}${t}`,className:"amp-sidebar__errors-list-item"},(0,n.createElement)(D,e))))),r&&(0,n.createElement)("div",{className:"amp-sidebar__options"},(0,n.createElement)(c.Button,{isLink:!0,onClick:()=>e(!o)},o?(0,i.__)("Hide reviewed issues","amp"):(0,i.__)("Show reviewed issues","amp"))))}function L(){const e=(0,a.useSelect)((e=>e(l.jd).getUnreviewedValidationErrors()),[]),t=(0,n.useMemo)((()=>e.map((e=>{let{clientId:t}=e;return t})).filter((e=>e)).map((e=>`#block-${e}::before`))),[e]);return(0,n.createElement)("style",null,`${t.join(",")} {\n\t\t\t\t\tborder-radius: 9px;\n\t\t\t\t\tbottom: -3px;\n\t\t\t\t\tbox-shadow: 0 0 0 2px #bb522e;\n\t\t\t\t\tcontent: '';\n\t\t\t\t\tleft: -3px;\n\t\t\t\t\tpointer-events: none;\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tright: -3px;\n\t\t\t\t\ttop: -3px;\n\t\t\t\t}`)}A.defaultProps={width:"21",height:"21",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var O=r(333),B=window.lodash,x=window.wp.apiFetch,j=r.n(x),U=window.wp.url;function F(e){let{validationError:t,source:r,currentPostId:n,blockOrder:i,getBlock:o}=e;if(!r.block_name||void 0===r.block_content_index)return;if(n!==r.post_id)return;const a=i[r.block_content_index];if(!a)return;const l=o(a);l&&l.name===r.block_name&&(t.clientId=a)}var H=r(504);const Z="amp-block-validation",W="amp-editor-sidebar",G=(0,i.__)("AMP Validation","amp"),J=s.mE;function $(){const{broken:e,errorCount:t}=(0,a.useSelect)((e=>{var t;return{broken:e(l.jd).getAMPCompatibilityBroken(),errorCount:(null===(t=e(l.jd).getUnreviewedValidationErrors())||void 0===t?void 0:t.length)||0}}),[]),{isAMPEnabled:r}=(0,H.c)();return function(){const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)(!1),[s,c]=(0,n.useState)([]),[u,d]=(0,n.useState)(!1),{setIsFetchingErrors:m,setFetchingErrorsRequestErrorMessage:E,setReviewLink:p,setSupportLink:f,setValidationErrors:g}=(0,a.useDispatch)(l.jd),{currentPostId:v,getBlock:h,getClientIdsWithDescendants:_,isAutosavingPost:w,isEditedPostNew:P,isPreviewingPost:k,isSavingPost:b,previewLink:S,validationErrors:R}=(0,a.useSelect)((e=>({currentPostId:e("core/editor").getCurrentPostId(),getBlock:e("core/block-editor").getBlock,getClientIdsWithDescendants:e("core/block-editor").getClientIdsWithDescendants,isAutosavingPost:e("core/editor").isAutosavingPost(),isEditedPostNew:e("core/editor").isEditedPostNew(),isPreviewingPost:e("core/editor").isPreviewingPost(),isSavingPost:e("core/editor").isSavingPost(),previewLink:e("core/editor").getEditedPostPreviewLink(),validationErrors:e(l.jd).getValidationErrors()})),[]),y=(0,O.usePrevious)(P);(0,n.useEffect)((()=>{P||y||d(!0)}),[P,y]),(0,n.useEffect)((()=>{if(b)return k?(d(!0),void o(!0)):void(w||d(!0))}),[w,k,b]),(0,n.useEffect)((()=>{if(!u)return;if(b)return void m(!0);if(r&&!(0,U.isURL)(S))return;const e={id:v};r&&(e.preview_nonce=(0,U.getQueryArg)(S,"preview_nonce")),m(!0),d(!1),o(!1),E(""),t(_()),j()({path:"/amp/v1/validate-post-url/",method:"POST",data:e}).then((e=>{g(e.results),p(e.review_link),f(e.support_link)})).catch((e=>{E((null==e?void 0:e.message)||(0,i.__)("Whoops! Something went wrong.","amp"))})).finally((()=>{m(!1)}))}),[v,_,r,b,S,E,m,p,f,g,u]),(0,n.useEffect)((()=>{R&&!(0,B.isEqual)(s,R)&&c(R)}),[s,R]),(0,n.useEffect)((()=>{const t=s.map((t=>{if(!t.error.sources)return t;for(const r of t.error.sources){if("clientId"in t)break;F({validationError:t,source:r,getBlock:h,blockOrder:0<e.length?e:_(),currentPostId:v})}return t}));g(t)}),[e,v,h,_,g,s])}(),function(){const[e,t]=(0,n.useState)(null),[r,i]=(0,n.useState)(),o=(0,n.useRef)(null),{setIsPostDirty:s,setMaybeIsPostDirty:c}=(0,a.useDispatch)(l.jd),{getEditedPostContent:u,hasErrorsFromRemovedBlocks:d,hasActiveMetaboxes:m,isPostDirty:E,isSavingOrPreviewingPost:p}=(0,a.useSelect)((e=>({getEditedPostContent:e("core/editor").getEditedPostContent,hasErrorsFromRemovedBlocks:Boolean(e(l.jd).getValidationErrors().find((t=>{let{clientId:r}=t;return r&&!e("core/block-editor").getBlockName(r)}))),hasActiveMetaboxes:e("core/edit-post").hasMetaBoxes(),isPostDirty:e(l.jd).getIsPostDirty(),isSavingOrPreviewingPost:e("core/editor").isSavingPost()&&!e("core/editor").isAutosavingPost()||e("core/editor").isPreviewingPost()})),[]);(0,n.useEffect)((()=>()=>{o.current&&o.current()}),[]),(0,n.useEffect)((()=>{E&&p&&(s(!1),t(null))}),[E,p,s]),(0,n.useEffect)((()=>{if(null===e){const e=u();return t(e),void i(e)}r!==e&&s(!0)}),[e,u,s,r]),(0,n.useEffect)((()=>{c(!E&&(m||d))}),[m,d,E,c]);const f=(0,n.useCallback)((()=>{i(u())}),[u]),g=(0,O.useDebounce)(f,500);(0,n.useEffect)((()=>{E&&o.current?(o.current(),o.current=null):p||E||o.current||(o.current=(0,a.subscribe)(g))}),[g,E,p])}(),r?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.PluginSidebarMoreMenuItem,{icon:(0,n.createElement)(J,null),target:W},G),(0,n.createElement)(o.PluginSidebar,{className:`${Z}-sidebar`,icon:(0,n.createElement)(s._4,{count:t,broken:e}),name:W,title:G},(0,n.createElement)(V,null),(0,n.createElement)(L,null))):null}},877:function(e,t,r){"use strict";r.r(t),r.d(t,{PLUGIN_NAME:function(){return l},PLUGIN_ICON:function(){return s},default:function(){return c}});var n=r(307),i=r(736),o=r(67),a=r(44);const l="amp-block-validation-document-setting-panel",s="";function c(){return(0,n.createElement)(o.PluginDocumentSettingPanel,{name:l,title:(0,i.__)("AMP","amp"),initialOpen:!0},(0,n.createElement)(a.Z,null))}},327:function(e,t,r){"use strict";r.r(t),r.d(t,{PLUGIN_NAME:function(){return l},PLUGIN_ICON:function(){return s},default:function(){return c}});var n=r(307),i=r(736),o=r(67),a=r(44);const l="amp-block-validation-pre-publish-panel",s="";function c(){return(0,n.createElement)(o.PluginPrePublishPanel,{title:(0,i.__)("AMP","amp"),initialOpen:!0},(0,n.createElement)(a.Z,null))}},883:function(e,t,r){"use strict";r.d(t,{jd:function(){return o},Y6:function(){return p},MT:function(){return f}});var n=r(818),i=r(422);const o="amp/block-validation",a="SET_FETCHING_ERRORS_REQUEST_ERROR_MESSAGE",l="SET_IS_FETCHING_ERRORS",s="SET_IS_POST_DIRTY",c="SET_IS_SHOWING_REVIEWED",u="SET_MAYBE_IS_POST_DIRTY",d="SET_REVIEW_LINK",m="SET_SUPPORT_LINK",E="SET_VALIDATION_ERRORS",p={ampCompatibilityBroken:!1,fetchingErrorsRequestErrorMessage:"",isPostDirty:!1,isFetchingErrors:!1,isShowingReviewed:!1,keptMarkupValidationErrors:[],maybeIsPostDirty:!1,rawValidationErrors:[],reviewLink:null,supportLink:null,reviewedValidationErrors:[],unreviewedValidationErrors:[],validationErrors:[]};function f(e){(0,n.registerStore)(o,function(e){return{reducer:function(){var t;let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a:return{...r,fetchingErrorsRequestErrorMessage:n.fetchingErrorsRequestErrorMessage};case l:return{...r,isFetchingErrors:n.isFetchingErrors};case s:return{...r,isPostDirty:n.isPostDirty};case c:return{...r,isShowingReviewed:n.isShowingReviewed};case u:return{...r,maybeIsPostDirty:n.maybeIsPostDirty};case d:return{...r,reviewLink:n.reviewLink};case m:return{...r,supportLink:n.supportLink};case E:return{...r,ampCompatibilityBroken:Boolean(null===(t=n.validationErrors.filter((e=>{let{status:t}=e;return t===i.VALIDATION_ERROR_NEW_REJECTED_STATUS||t===i.VALIDATION_ERROR_ACK_REJECTED_STATUS})))||void 0===t?void 0:t.length),reviewedValidationErrors:n.validationErrors.filter((e=>{let{status:t}=e;return t===i.VALIDATION_ERROR_ACK_ACCEPTED_STATUS||t===i.VALIDATION_ERROR_ACK_REJECTED_STATUS})),unreviewedValidationErrors:n.validationErrors.filter((e=>{let{status:t}=e;return t===i.VALIDATION_ERROR_NEW_ACCEPTED_STATUS||t===i.VALIDATION_ERROR_NEW_REJECTED_STATUS})),keptMarkupValidationErrors:n.validationErrors.filter((e=>{let{status:t}=e;return t===i.VALIDATION_ERROR_NEW_REJECTED_STATUS||t===i.VALIDATION_ERROR_ACK_REJECTED_STATUS})),validationErrors:n.validationErrors};default:return r}},actions:{setFetchingErrorsRequestErrorMessage:e=>({type:a,fetchingErrorsRequestErrorMessage:e}),setIsFetchingErrors:e=>({type:l,isFetchingErrors:e}),setIsPostDirty:e=>({type:s,isPostDirty:e}),setIsShowingReviewed:e=>({type:c,isShowingReviewed:e}),setMaybeIsPostDirty:e=>({type:u,maybeIsPostDirty:e}),setReviewLink:e=>({type:d,reviewLink:e}),setSupportLink:e=>({type:m,supportLink:e}),setValidationErrors:e=>({type:E,validationErrors:e})},selectors:{getAMPCompatibilityBroken:e=>{let{ampCompatibilityBroken:t}=e;return t},getFetchingErrorsRequestErrorMessage:e=>{let{fetchingErrorsRequestErrorMessage:t}=e;return t},getIsFetchingErrors:e=>{let{isFetchingErrors:t}=e;return t},getIsPostDirty:e=>{let{isPostDirty:t}=e;return t},getIsShowingReviewed:e=>{let{isShowingReviewed:t}=e;return t},getMaybeIsPostDirty:e=>{let{maybeIsPostDirty:t}=e;return t},getReviewLink:e=>{let{reviewLink:t}=e;return t},getSupportLink:e=>{let{supportLink:t}=e;return t},getReviewedValidationErrors:e=>{let{reviewedValidationErrors:t}=e;return t},getUnreviewedValidationErrors:e=>{let{unreviewedValidationErrors:t}=e;return t},getKeptMarkupValidationErrors:e=>{let{keptMarkupValidationErrors:t}=e;return t},getValidationErrors:e=>{let{validationErrors:t}=e;return t}},initialState:e}}(e))}},184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&e.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},703:function(e,t,r){"use strict";var n=r(414);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,a){if(a!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},697:function(e,t,r){e.exports=r(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},422:function(e){"use strict";e.exports=ampBlockValidation},196:function(e){"use strict";e.exports=window.React},175:function(e){"use strict";e.exports=window.wp.blockEditor},609:function(e){"use strict";e.exports=window.wp.components},333:function(e){"use strict";e.exports=window.wp.compose},818:function(e){"use strict";e.exports=window.wp.data},67:function(e){"use strict";e.exports=window.wp.editPost},307:function(e){"use strict";e.exports=window.wp.element},736:function(e){"use strict";e.exports=window.wp.i18n}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e=window.wp.hooks,t=window.wp.plugins,n=r(883);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var o=r(307),a=(r(697),r(818)),l=r(333),s=r(175),c=r(609),u=r(201),d=r(93),m=r(504);function E(e){let{clientId:t,count:r}=e;const{openGeneralSidebar:n}=(0,a.useDispatch)("core/edit-post"),{isAMPEnabled:i}=(0,m.c)();return i?(0,o.createElement)(s.BlockControls,null,(0,o.createElement)(c.ToolbarButton,{onClick:()=>{n(`${d.PLUGIN_NAME}/${d.SIDEBAR_NAME}`),setTimeout((()=>{const e=Array.from(document.querySelectorAll(`.error-${t} button`)),r=e[0];e.reverse();for(const t of e)"false"===t.getAttribute("aria-expanded")&&t.click();r&&r.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})}))}},(0,o.createElement)(u._4,{count:r}))):null}function p(e){const{BlockEdit:t,clientId:r}=e,i=(0,a.useSelect)((e=>(e(n.jd).getUnreviewedValidationErrors()||[]).filter((e=>{let{clientId:t}=e;return r===t})).length||0),[r]);return(0,o.createElement)(o.Fragment,null,0<i&&(0,o.createElement)(E,{clientId:r,count:i}),(0,o.createElement)(t,e))}const f=(0,l.createHigherOrderComponent)((e=>t=>(0,o.createElement)(p,i({},t,{BlockEdit:e}))),"BlockEditWithAMPToolbar");(0,n.MT)(n.Y6);const g=r(11);g.keys().forEach((e=>{const{default:r,PLUGIN_NAME:n,PLUGIN_ICON:i}=g(e);(0,t.registerPlugin)(n,{icon:i,render:r})})),(0,e.addFilter)("editor.BlockEdit","ampBlockValidation/filterEdit",f,-99)}()}();