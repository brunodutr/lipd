(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{SyRx:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",function(){return p});var o=n("TJRR"),r="$ionRelocated";function i(t,e,n,o){void 0===o&&(o=0),t[r]!==n&&(console.debug("native-input, hideCaret, shouldHideCaret: "+n+", input value: "+e.value),n?(function(t,e){var n,o,r=t.parentElement,i=t.ownerDocument;if(t&&r){var a=t.offsetTop,u=t.offsetLeft,l=t.offsetWidth,s=t.offsetHeight,c=i.createElement("div"),d=c.style;(n=c.classList).add.apply(n,Array.from(t.classList)),c.classList.add("cloned-input"),c.setAttribute("aria-hidden","true"),d.pointerEvents="none",d.position="absolute",d.top=a+"px",d.left=u+"px",d.width=l+"px",d.height=s+"px";var f=i.createElement("input");(o=f.classList).add.apply(o,Array.from(e.classList)),f.value=e.value,f.type=e.type,f.placeholder=e.placeholder,f.tabIndex=-1,c.appendChild(f),r.appendChild(c),t.style.pointerEvents="none"}e.style.transform="scale(0)"}(t,e),e.style.transform="translate3d("+("rtl"===t.ownerDocument.dir?9999:-9999)+"px,"+o+"px,0)"):function(t,e){t&&t.parentElement&&(Array.from(t.parentElement.querySelectorAll(".cloned-input")).forEach(function(t){return t.remove()}),t.style.pointerEvents=""),e.style.transform="",e.style.opacity=""}(t,e),t[r]=n)}function a(t){return t===t.ownerDocument.activeElement}var u="input, textarea, [no-blur]",l=.3;var s="$ionPaddingTimer";function c(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var o=n[s];o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n[s]=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}}var d=!0,f=!0;function p(t,e){var n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),s=e.getBoolean("hideCaretOnScroll",!0),p=e.getBoolean("inputBlurring",!0),v=e.getBoolean("scrollPadding",!0),m=new WeakMap,g=new WeakMap;function h(t){var e=(t.shadowRoot||t).querySelector("input"),u=t.closest("ion-content");if(e){if(u&&s&&!m.has(t)){var c=function(t,e,n){if(!n||!e)return function(){};console.debug("Input: enableHideCaretOnScroll");var o=function(n){a(e)&&i(t,e,n)},r=function(){return i(t,e,!1)},u=function(){return o(!0)},l=function(){return o(!1)};return n.addEventListener("ionScrollStart",u),n.addEventListener("ionScrollEnd",l),e.addEventListener("blur",r),function(){n.removeEventListener("ionScrollStart",u),n.removeEventListener("ionScrollEnd",l),e.addEventListener("ionBlur",r)}}(t,e,u);m.set(t,c)}u&&r&&!g.has(t)&&(c=function(t,e,n,r){var u,s=function(t){u=Object(o.l)(t),console.debug("input-base, pointerStart, type: "+t.type)},c=function(s){console.debug("input-base, pointerEnd, type: "+s.type),u&&(function(t,e,n){if(u&&n){var o=u.x-n.x,r=u.y-n.y;return o*o+r*r>36}return!1}(0,0,Object(o.l)(s))||a(e)||(s.preventDefault(),s.stopPropagation(),function(t,e,n,o){var r=function(t,e,n){return function(t,e,n,o){var r=t.top,i=t.bottom,a=e.top+10,u=Math.min(e.bottom,o-n)/2-i,s=a-r,c=Math.round(u<0?-u:s>0?-s:0),d=Math.abs(c);return{scrollAmount:c,scrollDuration:Math.min(400,Math.max(150,d/l)),scrollPadding:n,inputSafeY:4-(r-a)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n,window.innerHeight)}(t,n,o);Math.abs(r.scrollAmount)<4?e.focus():(i(t,e,!0,r.inputSafeY),e.focus(),n.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then(function(){i(t,e,!1,r.inputSafeY),e.focus()}))}(t,e,n,r)))};return t.addEventListener("touchstart",s,!0),t.addEventListener("touchend",c,!0),function(){t.removeEventListener("touchstart",s,!0),t.removeEventListener("touchend",c,!0)}}(t,e,u,n),g.set(t,c))}}p&&d&&function(t){console.debug("Input: enableInputBlurring");var e=!0,n=!1;t.addEventListener("ionScrollStart",function(){n=!0}),t.addEventListener("focusin",function(){e=!0},!0),t.addEventListener("touchend",function(o){if(n)n=!1;else{var r=t.activeElement;if(r&&!r.matches(u)){var i=o.target;i!==r&&(i.matches(u)||i.closest(u)||i.classList.contains("input-cover")||(e=!1,setTimeout(function(){e||r.blur()},50)))}}},!1)}(t),v&&f&&function(t,e){console.debug("Input: enableScrollPadding"),t.addEventListener("focusin",function(t){c(t.target,e)}),t.addEventListener("focusout",function(t){c(t.target,0)})}(t,n);for(var y=0,E=Array.from(t.querySelectorAll("ion-input"));y<E.length;y++)h(E[y]);t.body.addEventListener("ionInputDidLoad",function(t){h(t.target)}),t.body.addEventListener("ionInputDidUnload",function(t){var e,n;e=t.target,s&&((n=m.get(e))&&n(),m.delete(e)),r&&((n=g.get(e))&&n(),g.delete(e))})}}}]);