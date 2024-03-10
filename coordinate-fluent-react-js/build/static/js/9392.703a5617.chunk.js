/*! For license information please see 9392.703a5617.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcoordinate=self.webpackChunkcoordinate||[]).push([[9392],{90373:(e,t,n)=>{n.d(t,{a:()=>g,c:()=>E,d:()=>O,u:()=>N});var o=n(39879);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var o=e.indexOf(t);-1===o||e.splice(o,1),e.push(t)},u=function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()},c=function(e){return"Tab"===(null===e||void 0===e?void 0:e.key)||9===(null===e||void 0===e?void 0:e.keyCode)},l=function(e){return c(e)&&!e.shiftKey},d=function(e){return c(e)&&e.shiftKey},v=function(e){return setTimeout(e,0)},f=function(e,t){var n=-1;return e.every((function(e,o){return!t(e)||(n=o,!1)})),n},b=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"===typeof e?e.apply(void 0,n):e},p=function(e){return e.target.shadowRoot&&"function"===typeof e.composedPath?e.composedPath()[0]:e.target},m=[],h=function(e,t){var n,r=(null===t||void 0===t?void 0:t.document)||document,a=(null===t||void 0===t?void 0:t.trapStack)||m,h=i({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:l,isKeyBackward:d},t),y={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},w=function(e,t,n){return e&&void 0!==e[t]?e[t]:h[n||t]},E=function(e,t){var n="function"===typeof(null===t||void 0===t?void 0:t.composedPath)?t.composedPath():void 0;return y.containerGroups.findIndex((function(t){var o=t.container,r=t.tabbableNodes;return o.contains(e)||(null===n||void 0===n?void 0:n.includes(o))||r.find((function(t){return t===e}))}))},g=function(e){var t=h[e];if("function"===typeof t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];t=t.apply(void 0,o)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var a=t;if("string"===typeof t&&!(a=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return a},O=function(){var e=g("initialFocus");if(!1===e)return!1;if(void 0===e||!(0,o.m)(e,h.tabbableOptions))if(E(r.activeElement)>=0)e=r.activeElement;else{var t=y.tabbableGroups[0];e=t&&t.firstTabbableNode||g("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},N=function(){if(y.containerGroups=y.containers.map((function(e){var t=(0,o.h)(e,h.tabbableOptions),n=(0,o.j)(e,h.tabbableOptions),r=t.length>0?t[0]:void 0,i=t.length>0?t[t.length-1]:void 0,a=n.find((function(e){return(0,o.k)(e)})),s=n.slice().reverse().find((function(e){return(0,o.k)(e)})),u=!!t.find((function(e){return(0,o.l)(e)>0}));return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:u,firstTabbableNode:r,lastTabbableNode:i,firstDomTabbableNode:a,lastDomTabbableNode:s,nextTabbableNode:function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=t.indexOf(e);return i<0?r?n.slice(n.indexOf(e)+1).find((function(e){return(0,o.k)(e)})):n.slice(0,n.indexOf(e)).reverse().find((function(e){return(0,o.k)(e)})):t[i+(r?1:-1)]}}})),y.tabbableGroups=y.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),y.tabbableGroups.length<=0&&!g("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(y.containerGroups.find((function(e){return e.posTabIndexesFound}))&&y.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},k=function e(t){var n=t.activeElement;if(n)return n.shadowRoot&&null!==n.shadowRoot.activeElement?e(n.shadowRoot):n},T=function e(t){!1!==t&&t!==k(document)&&(t&&t.focus?(t.focus({preventScroll:!!h.preventScroll}),y.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"===typeof e.select}(t)&&t.select()):e(O()))},F=function(e){var t=g("setReturnFocus",e);return t||!1!==t&&e},P=function(e){var t=e.target,n=e.event,r=e.isBackward,i=void 0!==r&&r;t=t||p(n),N();var a=null;if(y.tabbableGroups.length>0){var s=E(t,n),u=s>=0?y.containerGroups[s]:void 0;if(s<0)a=i?y.tabbableGroups[y.tabbableGroups.length-1].lastTabbableNode:y.tabbableGroups[0].firstTabbableNode;else if(i){var l=f(y.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(l<0&&(u.container===t||(0,o.m)(t,h.tabbableOptions)&&!(0,o.k)(t,h.tabbableOptions)&&!u.nextTabbableNode(t,!1))&&(l=s),l>=0){var d=0===l?y.tabbableGroups.length-1:l-1,v=y.tabbableGroups[d];a=(0,o.l)(t)>=0?v.lastTabbableNode:v.lastDomTabbableNode}else c(n)||(a=u.nextTabbableNode(t,!1))}else{var b=f(y.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(b<0&&(u.container===t||(0,o.m)(t,h.tabbableOptions)&&!(0,o.k)(t,h.tabbableOptions)&&!u.nextTabbableNode(t))&&(b=s),b>=0){var m=b===y.tabbableGroups.length-1?0:b+1,w=y.tabbableGroups[m];a=(0,o.l)(t)>=0?w.firstTabbableNode:w.firstDomTabbableNode}else c(n)||(a=u.nextTabbableNode(t))}}else a=g("fallbackFocus");return a},D=function(e){var t=p(e);E(t,e)>=0||(b(h.clickOutsideDeactivates,e)?n.deactivate({returnFocus:h.returnFocusOnDeactivate}):b(h.allowOutsideClick,e)||e.preventDefault())},G=function(e){var t=p(e),n=E(t,e)>=0;if(n||t instanceof Document)n&&(y.mostRecentlyFocusedNode=t);else{var r;e.stopImmediatePropagation();var i=!0;if(y.mostRecentlyFocusedNode)if((0,o.l)(y.mostRecentlyFocusedNode)>0){var a=E(y.mostRecentlyFocusedNode),s=y.containerGroups[a].tabbableNodes;if(s.length>0){var u=s.findIndex((function(e){return e===y.mostRecentlyFocusedNode}));u>=0&&(h.isKeyForward(y.recentNavEvent)?u+1<s.length&&(r=s[u+1],i=!1):u-1>=0&&(r=s[u-1],i=!1))}}else y.containerGroups.some((function(e){return e.tabbableNodes.some((function(e){return(0,o.l)(e)>0}))}))||(i=!1);else i=!1;i&&(r=P({target:y.mostRecentlyFocusedNode,isBackward:h.isKeyBackward(y.recentNavEvent)})),T(r||(y.mostRecentlyFocusedNode||O()))}y.recentNavEvent=void 0},L=function(e){if(("Escape"===(null===(t=e)||void 0===t?void 0:t.key)||"Esc"===(null===t||void 0===t?void 0:t.key)||27===(null===t||void 0===t?void 0:t.keyCode))&&!1!==b(h.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();var t;(h.isKeyForward(e)||h.isKeyBackward(e))&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];y.recentNavEvent=e;var n=P({event:e,isBackward:t});n&&(c(e)&&e.preventDefault(),T(n))}(e,h.isKeyBackward(e))},C=function(e){var t=p(e);E(t,e)>=0||b(h.clickOutsideDeactivates,e)||b(h.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},R=function(){if(y.active)return s(a,n),y.delayInitialFocusTimer=h.delayInitialFocus?v((function(){T(O())})):T(O()),r.addEventListener("focusin",G,!0),r.addEventListener("mousedown",D,{capture:!0,passive:!1}),r.addEventListener("touchstart",D,{capture:!0,passive:!1}),r.addEventListener("click",C,{capture:!0,passive:!1}),r.addEventListener("keydown",L,{capture:!0,passive:!1}),n},x=function(){if(y.active)return r.removeEventListener("focusin",G,!0),r.removeEventListener("mousedown",D,!0),r.removeEventListener("touchstart",D,!0),r.removeEventListener("click",C,!0),r.removeEventListener("keydown",L,!0),n},B="undefined"!==typeof window&&"MutationObserver"in window?new MutationObserver((function(e){e.some((function(e){return Array.from(e.removedNodes).some((function(e){return e===y.mostRecentlyFocusedNode}))}))&&T(O())})):void 0,j=function(){B&&(B.disconnect(),y.active&&!y.paused&&y.containers.map((function(e){B.observe(e,{subtree:!0,childList:!0})})))};return(n={get active(){return y.active},get paused(){return y.paused},activate:function(e){if(y.active)return this;var t=w(e,"onActivate"),n=w(e,"onPostActivate"),o=w(e,"checkCanFocusTrap");o||N(),y.active=!0,y.paused=!1,y.nodeFocusedBeforeActivation=r.activeElement,null===t||void 0===t||t();var i=function(){o&&N(),R(),j(),null===n||void 0===n||n()};return o?(o(y.containers.concat()).then(i,i),this):(i(),this)},deactivate:function(e){if(!y.active)return this;var t=i({onDeactivate:h.onDeactivate,onPostDeactivate:h.onPostDeactivate,checkCanReturnFocus:h.checkCanReturnFocus},e);clearTimeout(y.delayInitialFocusTimer),y.delayInitialFocusTimer=void 0,x(),y.active=!1,y.paused=!1,j(),u(a,n);var o=w(t,"onDeactivate"),r=w(t,"onPostDeactivate"),s=w(t,"checkCanReturnFocus"),c=w(t,"returnFocus","returnFocusOnDeactivate");null===o||void 0===o||o();var l=function(){v((function(){c&&T(F(y.nodeFocusedBeforeActivation)),null===r||void 0===r||r()}))};return c&&s?(s(F(y.nodeFocusedBeforeActivation)).then(l,l),this):(l(),this)},pause:function(e){if(y.paused||!y.active)return this;var t=w(e,"onPause"),n=w(e,"onPostPause");return y.paused=!0,null===t||void 0===t||t(),x(),j(),null===n||void 0===n||n(),this},unpause:function(e){if(!y.paused||!y.active)return this;var t=w(e,"onUnpause"),n=w(e,"onPostUnpause");return y.paused=!1,null===t||void 0===t||t(),N(),R(),j(),null===n||void 0===n||n(),this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return y.containers=t.map((function(e){return"string"===typeof e?r.querySelector(e):e})),y.active&&N(),j(),this}}).updateContainerElements(e),n};const y=globalThis.calciteConfig,w=(null===y||void 0===y?void 0:y.focusTrapStack)||[];function E(e,t){const{el:n}=e,r=(null===t||void 0===t?void 0:t.focusTrapEl)||n;if(!r)return;const i={clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:r,setReturnFocus:e=>((0,o.e)(e),!1),...null===t||void 0===t?void 0:t.focusTrapOptions,document:n.ownerDocument,tabbableOptions:o.n,trapStack:w};e.focusTrap=h(r,i)}function g(e,t){var n;e.focusTrapDisabled||(null===(n=e.focusTrap)||void 0===n||n.activate(t))}function O(e,t){var n;null===(n=e.focusTrap)||void 0===n||n.deactivate(t)}function N(e){var t;null===(t=e.focusTrap)||void 0===t||t.updateContainerElements(e.el)}},37268:(e,t,n)=>{n.d(t,{o:()=>a});var o=n(82108);function r(e){return"opened"in e?e.opened:e.open}function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(t?e[e.transitionProp]:r(e))?e.onBeforeOpen():e.onBeforeClose(),(t?e[e.transitionProp]:r(e))?e.onOpen():e.onClose()}function a(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,o.gv)((()=>{if(e.transitionEl){var n;const{transitionDuration:o,transitionProperty:a}=getComputedStyle(e.transitionEl),s=o.split(","),u=null!==(n=s[a.split(",").indexOf(e.openTransitionProp)])&&void 0!==n?n:s[0];if("0s"===u)return void i(e,t);const c=setTimeout((()=>{e.transitionEl.removeEventListener("transitionstart",l),e.transitionEl.removeEventListener("transitionend",d),e.transitionEl.removeEventListener("transitioncancel",d),i(e,t)}),1e3*parseFloat(u));function l(n){n.propertyName===e.openTransitionProp&&n.target===e.transitionEl&&(clearTimeout(c),e.transitionEl.removeEventListener("transitionstart",l),(t?e[e.transitionProp]:r(e))?e.onBeforeOpen():e.onBeforeClose())}function d(n){n.propertyName===e.openTransitionProp&&n.target===e.transitionEl&&((t?e[e.transitionProp]:r(e))?e.onOpen():e.onClose(),e.transitionEl.removeEventListener("transitionend",d),e.transitionEl.removeEventListener("transitioncancel",d))}e.transitionEl.addEventListener("transitionstart",l),e.transitionEl.addEventListener("transitionend",d),e.transitionEl.addEventListener("transitioncancel",d)}}))}}}]);
//# sourceMappingURL=9392.703a5617.chunk.js.map