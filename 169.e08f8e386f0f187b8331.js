(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{swaW:function(e,t,n){"use strict";n.r(t),n.d(t,"startTapClick",function(){return i});var o=n("TJRR");function i(e){var t,n,i=10*-s,d=0,u=!1,f=!1,v=new WeakMap;function l(e){i=Object(o.c)(e),w(e)}function p(){clearTimeout(n),n=void 0,t&&(m(!1),t=void 0),u=!0}function b(e){t||f||(u=!1,L(function(e){if(!e.composedPath)return e.target.closest("[ion-activatable]");for(var t=e.composedPath(),n=0;n<t.length-2;n++){var o=t[n];if(o.hasAttribute&&o.hasAttribute("ion-activatable"))return o}}(e),e))}function w(e){f||(L(void 0,e),u&&e.cancelable&&e.preventDefault())}function L(e,i){if(!e||e!==t){clearTimeout(n),n=void 0;var c=Object(o.l)(i),s=c.x,d=c.y;if(t){if(v.has(t))throw new Error("internal error");t.classList.contains(a)||h(t,s,d),m(!0)}if(e){var u=v.get(e);u&&(clearTimeout(u),v.delete(e)),e.classList.remove(a),n=setTimeout(function(){h(e,s,d),n=void 0},r)}t=e}}function h(e,t,n){d=Date.now(),e.classList.add(a);var o=function(e){if(e.shadowRoot){var t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")}(e);o&&o.addRipple&&o.addRipple(t,n)}function m(e){var n=t;if(n){var o=c-Date.now()+d;if(e&&o>0){var i=setTimeout(function(){n.classList.remove(a),v.delete(n)},c);v.set(n,i)}else n.classList.remove(a)}}e.body.addEventListener("click",function(e){(u||f)&&(e.preventDefault(),e.stopPropagation())},!0),e.body.addEventListener("ionScrollStart",function(){f=!0,p()}),e.body.addEventListener("ionScrollEnd",function(){f=!1}),e.body.addEventListener("ionGestureCaptured",p),e.addEventListener("touchstart",function(e){i=Object(o.c)(e),b(e)},!0),e.addEventListener("touchcancel",l,!0),e.addEventListener("touchend",l,!0),e.addEventListener("mousedown",function(e){var t=Object(o.c)(e)-s;i<t&&b(e)},!0),e.addEventListener("mouseup",function(e){var t=Object(o.c)(e)-s;i<t&&w(e)},!0)}var a="activated",r=200,c=200,s=2500}}]);