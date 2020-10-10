__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t={copy:r(d[0]).default,delete:r(d[1]).default,embed:r(d[2]).default,options:r(d[3]).default,report:r(d[4]).default,share:r(d[5]).default,unfollow:r(d[6]).default};e.default=function({onClose:o,openModal:l,postId:u}){const n=t[l];return a(d[7]).createElement(n,{onClose:o,postId:u})}},17235968,[17235969,13631490,17235970,17235971,17235972,17235973,17235974,3]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:o}){const n=r(d[0]).usePost(t,r(d[1]).getCopyUrl);return a(d[2]).createElement(i(d[3]),{onClose:o,postUrl:n})}},17235969,[15925260,15925261,3,15925255]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(t){const n=i(d[0])(t.code);return t.productType===r(d[1]).PRODUCT_TYPE_IGTV?r(d[2]).buildFelixMediaLink(n):r(d[2]).buildMediaLink(n)}Object.defineProperty(e,'__esModule',{value:!0}),e.getIsShareable=function(t,n){return!0!==(null===n||void 0===n?void 0:n.isPrivate)&&!0===t.viewerCanReshare},e.getShareURL=t,e.getCopyUrl=function(n){var o;const u=(null===(o=n.shareIds)||void 0===o?void 0:o.copy)||'',s=window.location.origin+t(n);return u.length>0?`${s}?utm_source=ig_web_copy_link&igshid=${u}`:`${s}?utm_source=ig_web_copy_link`},e.useShareWithNative=function(n,o){const u=r(d[3]).usePost(n,r(d[4]).getPostType),s=r(d[3]).usePost(n,t=>{var n;const o=(null===(n=t.owner)||void 0===n?void 0:n.username)||'';return r(d[5]).getShareDescription(o,u)}),c=r(d[3]).usePost(n,t);return()=>r(d[5]).shareWithNative(s,c,o)}},15925261,[9699335,9961488,9699353,15925260,15925262,14483464]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.getPostType=function(t){return!0===t.isVideo?'video':t.sidecarChildren&&t.sidecarChildren.length>0?'sidecar':'photo'}},15925262,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(3152);e.default=function({onClose:o,postId:l}){const c=r(d[1]).useDispatch();return a(d[3]).createElement(r(d[4]).Dialog,{body:r(d[0])(3020),title:t},a(d[3]).createElement(r(d[4]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{c(r(d[2]).deletePost(l)),o()}},r(d[5]).DELETE_TEXT),a(d[3]).createElement(r(d[4]).DialogItem,{onClick:o},r(d[5]).CANCEL_TEXT))},e.DELETE_POST_PROMPT=t},13631490,[9699332,5,9961663,3,9699357,9699347]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var o=function({onClose:o,postId:s}){const t=i(d[0])(),u=r(d[1]).usePost(s,o=>o.code)||'',n=r(d[1]).usePost(s,o=>o.productType===r(d[2]).PRODUCT_TYPE_CLIPS),P=r(d[1]).usePost(s,o=>o.productType===r(d[2]).PRODUCT_TYPE_IGTV),c=r(d[1]).usePost(s,o=>!!o.isVideo),l=r(d[1]).usePost(s,o=>{var s;return i(d[3])(null===(s=o.owner)||void 0===s?void 0:s.id)});return a(d[4]).createElement(i(d[5]),{analyticsContext:t,code:u,id:s,isClipsPost:n,isGuide:!1,isIGTVPost:P,isVideo:c,onClose:o,ownerId:l})};e.default=o},17235970,[9961960,15925260,9961488,9699335,3,15925256]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:o}){return a(d[0]).createElement(r(d[1]).Dialog,{onModalClose:o},a(d[0]).createElement(i(d[2]),{onClose:o,postId:t}),a(d[0]).createElement(i(d[3]),{onClose:o,postId:t}),a(d[0]).createElement(i(d[4]),{onClose:o,postId:t}),a(d[0]).createElement(i(d[5]),{onClose:o,postId:t}),a(d[0]).createElement(i(d[6]),{onClose:o,postId:t}),a(d[0]).createElement(i(d[7]),{onClose:o,postId:t}),a(d[0]).createElement(i(d[8]),{onClose:o,postId:t}),a(d[0]).createElement(r(d[1]).DialogItem,{onClick:o},r(d[9]).CANCEL_TEXT))}},17235971,[3,9699357,17235975,17235976,17235977,17235978,17235979,15925259,17235980,9699347]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:o}){const s=r(d[0]).usePost(t,r(d[1]).getPostOwnedByViewer),l=r(d[0]).usePost(t,r(d[2]).getPostType),u=i(d[3])(),c=r(d[0]).usePost(t,t=>t.productType===r(d[4]).PRODUCT_TYPE_IGTV),n=r(d[5]).useSetPostModal(),P=r(d[6]).isMobile()||c;return s&&P?a(d[8]).createElement(r(d[9]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[7]).logAction_DEPRECATED('delete_post_click',{source:u,type:l}),n('delete')}},r(d[10])(2217)):null}},17235975,[15925260,17235981,15925262,9961960,9961488,13107216,9699340,9699365,3,9699357,9699332]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.getPostOwnedByViewer=function(t){var n;return(null===(n=t.owner)||void 0===n?void 0:n.id)===r(d[0]).getViewerId()}},17235981,[9699343]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const o=r(d[0])(388);e.default=function({onClose:t,postId:n}){const s=r(d[1]).usePost(n,r(d[2]).getPostOwnedByViewer),c=r(d[3]).useSetPostModal();return s?null:a(d[7]).createElement(r(d[8]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[4]).isUserLoggedIn()?c('report'):r(d[5]).redirect(r(d[6]).buildLoginLink(window.location.href,{source:'logged_out_post_report_redirect'}))}},o)}},17235976,[9699332,15925260,17235981,13107216,9961565,9699333,9699353,3,9699357]);
__d(function(g,r,i,a,m,e,d){"use strict";function o(o,t){const n=r(d[1]).getPostById(o,t),{owner:l}=n;if(!l)return!1;const u=r(d[2]).getRelationship(o.relationships,l.id);return r(d[2]).followedByViewer(u)}Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(1661);e.default=function({postId:n,onClose:l}){const u=r(d[3]).useSelector(t=>o(t,n)),s=r(d[4]).useSetPostModal(),c=r(d[5]).usePost(n,o=>{var t;return null===(t=o.owner)||void 0===t?void 0:t.id}),f=i(d[6])();return u?a(d[8]).createElement(r(d[9]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[7]).logConnectionAction({eventName:'unfollow_button_tapped',containerModule:f,targetId:c}),s('unfollow')}},t):null}},17235977,[9699332,9961657,9961480,5,13107216,15925260,9961960,9961611,3,9699357]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:o}){const n=r(d[0]).useSelector(r(d[1]).selectPageIdentifier),l=r(d[2]).usePost(o,t=>{var o;return!!(null===(o=t.code)||void 0===o?void 0:o.length)})&&n!==i(d[3]).postPage,s=r(d[2]).usePost(o,r(d[4]).getShareURL);return l?a(d[6]).createElement(r(d[7]).DialogItem,{onClick:()=>{i(d[5]).push(s)}},r(d[8])(764)):null}},17235978,[5,9699364,15925260,9699345,15925261,9699333,3,9699357,9699332]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:n}){const o=r(d[0]).usePostAndOwner(t,r(d[1]).getIsShareable),s=r(d[2]).useSetPostModal();return o?a(d[3]).createElement(r(d[4]).DialogItem,{onClick:()=>s('share')},r(d[5])(1174)):null}},17235979,[15925260,15925261,13107216,3,9699357,9699332]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(2828),o=r(d[0])(2438);e.default=function({onClose:s,postId:n}){const c=r(d[1]).usePostAndOwner(n,r(d[2]).getIsShareable),u=r(d[3]).useSetPostModal(),l=i(d[4])(),p=i(d[5])(),P=r(d[1]).usePost(n,r(d[6]).getPostType),y=r(d[1]).usePost(n,r(d[2]).getCopyUrl);return c?a(d[9]).createElement(r(d[10]).DialogItem,{onClick:()=>{if(!r(d[7]).canCopy())return void u('copy');const o=r(d[7]).copy(y);r(d[8]).logAction_DEPRECATED('postLinkCopy',{source:p,type:P}),o?(l({text:t}),s()):u('copy')}},o):null},e.LINK_COPIED_PROMPT=t,e.COPY_LINK_TEXT=o},15925259,[9699332,15925260,15925261,13107216,15925258,9961960,15925262,9961854,9699365,3,9699357]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function(){const t=r(d[0]).useDispatch();return s=>{t(r(d[1]).showToast(s))}}},15925258,[5,9961702]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:o,onClose:t}){const n=r(d[0]).usePostAndOwner(o,r(d[1]).getIsShareable),s=r(d[2]).useSetPostModal(),l=i(d[3])(),u=r(d[0]).usePost(o,r(d[4]).getPostType),c=r(d[0]).usePost(o,o=>{var t;return null===(t=o.owner)||void 0===t?void 0:t.id});return n?a(d[6]).createElement(r(d[7]).DialogItem,{onClick:()=>{r(d[5]).logAction_DEPRECATED('embedCodeClick',{mediaId:o,ownerId:c,source:l,type:u}),s('embed')}},r(d[8])(797)):null}},17235980,[15925260,15925261,13107216,9961960,15925262,9699365,3,9699357,9699332]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:n,postId:o}){const t=r(d[0]).usePostAndOwner(o,(n,o)=>o.id),s=r(d[0]).usePostAndOwner(o,(n,o)=>o.username),u=r(d[0]).usePostAndOwner(o,(n,o)=>o.profilePictureUrl),l=i(d[1])();return a(d[2]).createElement(i(d[3]),{analyticsContext:l,onClose:n,ownerID:t,ownerProfilePicURL:u,ownerUsername:s,postID:o})}},17235972,[15925260,9961960,3,17235982]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:n}){const s=r(d[0]).useDispatch(),o=i(d[1])(),u=r(d[2]).usePost(t,r(d[3]).getPostType),l=r(d[2]).usePost(t,t=>{var n;const s=(null===(n=t.owner)||void 0===n?void 0:n.username)||'';return r(d[4]).getShareDescription(s,u)}),c=r(d[2]).usePostAndOwner(t,r(d[5]).getIsShareable),_=r(d[2]).usePost(t,t=>t.shareIds),E=r(d[2]).usePost(t,r(d[5]).getShareURL);return r(d[6]).useEffect(()=>{r(d[7]).startFunnel(),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_BUTTON_CLICK),r(d[8]).logAction_DEPRECATED('shareClick',{source:o,type:u}),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_SHARE_SHEET),s(r(d[9]).loadPostShareIds(t))},[o,s,t,u]),a(d[6]).createElement(i(d[10]),{analyticsContext:o,description:l,onClose:()=>{r(d[7]).endFunnel(),n()},onNativeShare:()=>{r(d[8]).logAction_DEPRECATED('nativeShareClick',{source:o,type:u}),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_NATIVE),n(),r(d[4]).shareWithNative(l,E,'ig_web_button_native_share').then(r(d[7]).endFunnel)},postId:t,postType:u,shareEnabled:c,shareIds:_,url:E,utmSource:"ig_web_button_share_sheet"})}},17235973,[5,9961960,15925260,15925262,14483464,15925261,3,14483465,9699365,9961663,14483467]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:n}){const o=i(d[0])(),s=r(d[1]).usePost(t,t=>{var n;return null===(n=t.owner)||void 0===n?void 0:n.id});return a(d[2]).createElement(i(d[3]),{analyticsContext:o,analyticsExtra:{},onClose:n,userId:s})}},17235974,[9961960,15925260,3,9961967]);