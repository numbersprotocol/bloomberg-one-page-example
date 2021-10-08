!function(){"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=/^(impression|click)$/,c=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),i(this,"queue",new Set),i(this,"defaultProperties",{}),this.defaultProperties=o,r.forEach((function(e){return t.push(e)}))}return o(e,[{key:"size",get:function(){return this.queue.size}}]),o(e,[{key:"push",value:function(e){this._assertType(e)&&this.queue.add(t(t({},e),this.defaultProperties))}},{key:"flush",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=-1*Math.min(Math.abs(t),this.queue.size),r=Array.from(this.queue),o=r.slice(n);return n?(o.forEach((function(t){return e.queue.delete(t)})),new Set(o)):(this.queue.clear(),new Set(r))}},{key:"_assertType",value:function(e){var t=e.eventType;return u.test(t)}}]),e}(),a={interval:500,timer:null,stopped:!1,start:function(e,t){if("function"!=typeof e)return null;this.interval=isNaN(t)?this.interval:t,this.stopped=!1,this._onTick=e,this.timer=setTimeout(this._tick.bind(this),this.interval)},stop:function(){this.stopped=!0,clearTimeout(this.timer),this.timer=null},_tick:function(){this.stopped||(this._onTick(),this.timer=setTimeout(this._tick.bind(this),this.interval))}};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),l(this,"maxUrlLength",2e3),l(this,"decorators",[]),l(this,"fields",[]),this.fields=t.fields||[]}var t,n,r;return t=e,(n=[{key:"addDecorator",value:function(e){"function"==typeof e&&this.decorators.push(e)}},{key:"getFields",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.fields.reduce((function(t,n){return n in e&&(t[n]=e[n]),t}),{})}},{key:"prepare",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.getFields(e);return this.decorators.length?this.decorators.reduce((function(e,t){return t(e)}),t):t}},{key:"checkUrl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.length>this.maxUrlLength&&console.warn("Sputnik: Url exceeds maximum recommended length")}},{key:"send",value:function(){throw new Error("Unimplemented method")}}])&&f(t.prototype,n),r&&f(t,r),e}();function y(e,t){return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t))}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(n,r){var o=t[r]?t[r]:r,i=e[r];return h(i)&&n.push(y(o,i)),n}),[])}function h(e){return null!=e&&""!==e}function d(e,t){return b(e,t).join(",")}var v="abbaExperiments,abbaId,count,id,parentId,positionX,positionY,timezoneOffset,trackingTitle,type,viewportHeight,viewportWidth,pageviewId".split(","),g="action,category,pageviewId,data".split(","),m=JSON.parse('{"abbaId":"abba-id","moduleId":"module","moduleTitle":"module-title","storyId":"story","pageviewId":"pageview-id"}');function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=I(e);if(t){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R={transport:"beacon"},U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(i,e);var t,n,r,o=E(i);function i(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return S(this,i),(e=o.call(this,P({fields:g},t))).opt=P(P({},R),t),e.ga=window.ga,e.addDecorator(i._decorator),e}return t=i,r=[{key:"_decorator",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.data,o=w(e,["category","action","data"]),i=d(P(P({},r),o),m);if(!t||!n)throw new Error("Sputnik: Required parameters category and action are not specified");return i.length>500&&console.warn("Sputnik: eventLabel limit is exceeded!"),{eventCategory:t,eventAction:n,eventLabel:i}}}],(n=[{key:"send",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ga)return null;var n=this.prepare(t);this.ga((function(){var t=e.ga.getAll()[0].get("trackingId")||"UA-11413116-1";(e.ga.getByName("sputnik")||e.ga.create(t,"auto","sputnik")).send("event",P(P({},e.opt),n))}))}}])&&_(t.prototype,n),r&&_(t,r),i}(p),x=JSON.parse('{"abbaExperiments":"abex","abbaId":"abid","count":"cnt","pageviewId":"pvid","parentId":"pid","positionX":"px","positionY":"py","timezoneOffset":"tzo","trackingTitle":"mttl","type":"ty","viewportHeight":"vh","viewportWidth":"vw"}');function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Q(e);if(t){var o=Q(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return L(this,n)}}function L(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(i,e);var t,n,r,o=A(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({fields:v},e))).baseUrl=e.baseUrl,t.addDecorator((function(e){return function(e,t){return b(e,t).join("&")}(e,x)})),t}return t=i,(n=[{key:"send",value:function(e){var t=this.prepare(e),n="".concat(this.baseUrl,"?").concat(t);this.checkUrl(n),this._isBeaconSupported()?navigator.sendBeacon(n):(new Image).src=n}},{key:"_isBeaconSupported",value:function(){return navigator&&"function"==typeof navigator.sendBeacon}}])&&q(t.prototype,n),r&&q(t,r),i}(p);function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H,J,M,W=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"sendBulk",value:function(t){t.forEach((function(t){var n=t.eventType,r="click"===n?e.transports[n]:e.transports.default;r&&r.send(t)}))}}])&&F(t.prototype,n),r&&F(t,r),e}();H=W,J="transports",M={default:new V({baseUrl:"https://tracking.bloomberg.com/imp/pixel.gif"}),click:new U},J in H?Object.defineProperty(H,J,{value:M,enumerable:!0,configurable:!0,writable:!0}):H[J]=M;var X="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),Y=new Uint8Array(16);function $(){if(!X)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return X(Y)}var G=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var K=function(e){return"string"==typeof e&&G.test(e)},Z=[],ee=0;ee<256;++ee)Z.push((ee+256).toString(16).substr(1));var te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(Z[e[t+0]]+Z[e[t+1]]+Z[e[t+2]]+Z[e[t+3]]+"-"+Z[e[t+4]]+Z[e[t+5]]+"-"+Z[e[t+6]]+Z[e[t+7]]+"-"+Z[e[t+8]]+Z[e[t+9]]+"-"+Z[e[t+10]]+Z[e[t+11]]+Z[e[t+12]]+Z[e[t+13]]+Z[e[t+14]]+Z[e[t+15]]).toLowerCase();if(!K(n))throw TypeError("Stringified UUID is invalid");return n};var ne=function(e,t,n){var r=(e=e||{}).random||(e.rng||$)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return te(r)};function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("object"!==re(e)||Array.isArray(e))return null;var t=Object.getPrototypeOf(e);return Object.getOwnPropertyNames(t).sort().join(":")}function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){ae(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var se=function(){function e(t,n,r){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ae(this,"eventQueue",null),ae(this,"transmitter",null),ae(this,"pageviewId",ne()),ae(this,"timezoneOffset",60*(new Date).getTimezoneOffset()*1e3),ae(this,"version","1.5.0"),oe(r)===oe(this)?r:(o=navigator.doNotTrack||window.doNotTrack||navigator.msDoNotTrack||null,1===parseInt(o)||"yes"===o?(console.warn("Tracking is disabled due to user request (DNT)"),this):(this.eventQueue=new c(r,{pageviewId:this.pageviewId,timezoneOffset:this.timezoneOffset}),this.transmitter=new W(t),this._onDocumentUnload=this._onDocumentUnload.bind(this),this._onPeriodicSync=this._onPeriodicSync.bind(this),t.addEventListener("beforeunload",this._onDocumentUnload),a.start(this._onPeriodicSync),void(n.cookie="__sppvid=".concat(this.pageviewId,";domain=.bloomberg.com;"))))}var t,n,r;return t=e,(n=[{key:"push",value:function(e){this.eventQueue&&e&&this.eventQueue.push(ue({},e))}},{key:"trackClick",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.push(ue(ue({},e),{},{eventType:"click"}))}},{key:"trackImpression",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.push(ue(ue({},e),{},{eventType:"impression"}))}},{key:"_onDocumentUnload",value:function(){a.stop(),this.transmitter.sendBulk(this.eventQueue.flush())}},{key:"_onPeriodicSync",value:function(){this.transmitter.sendBulk(this.eventQueue.flush(20))}}])&&ce(t.prototype,n),r&&ce(t,r),e}();window.bbeep=new se(window,document,window.bbeep)}();