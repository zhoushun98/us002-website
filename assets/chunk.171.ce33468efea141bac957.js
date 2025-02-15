/*! For license information please see chunk.171.ce33468efea141bac957.js.LICENSE.txt */
"use strict";(self.webpackChunk_ember_auto_import_=self.webpackChunk_ember_auto_import_||[]).push([[171],{70171:function(t,e,n){function r(t,e){(null==e||e>t.length)&&(e=t.length)
for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n]
return r}n.r(e),t=n.hmd(t)
var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)}
function i(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a,s,c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])
return t}).apply(this,arguments)}
function u(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var r,o,i=n.call(t),a=[]
try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function p(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(u(arguments[e]))
return t}!function(t){t.Fatal="fatal",t.Error="error",t.Warning="warning",t.Log="log",t.Info="info",t.Debug="debug",t.Critical="critical"}(a||(a={})),function(t){t.fromString=function(e){switch(e){case"debug":return t.Debug
case"info":return t.Info
case"warn":case"warning":return t.Warning
case"error":return t.Error
case"fatal":return t.Fatal
case"critical":return t.Critical
default:return t.Log}}}(a||(a={})),function(t){t.Unknown="unknown",t.Skipped="skipped",t.Success="success",t.RateLimit="rate_limit",t.Invalid="invalid",t.Failed="failed"}(s||(s={})),function(t){t.fromHttpCode=function(e){return e>=200&&e<300?t.Success:429===e?t.RateLimit:e>=400&&e<500?t.Invalid:e>=500?t.Failed:t.Unknown}}(s||(s={}))
var l=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){return t.__proto__=e,t}:function(t,e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])
return t}),f=function(t){function e(e){var n=this.constructor,r=t.call(this,e)||this
return r.message=e,r.name=n.prototype.constructor.name,l(r,n.prototype),r}return i(e,t),e}(Error)
function h(t){switch(Object.prototype.toString.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0
default:return x(t,Error)}}function d(t){return"[object ErrorEvent]"===Object.prototype.toString.call(t)}function v(t){return"[object DOMError]"===Object.prototype.toString.call(t)}function _(t){return"[object String]"===Object.prototype.toString.call(t)}function y(t){return null===t||"object"!=typeof t&&"function"!=typeof t}function g(t){return"[object Object]"===Object.prototype.toString.call(t)}function m(t){return"undefined"!=typeof Event&&x(t,Event)}function b(t){return"undefined"!=typeof Element&&x(t,Element)}function E(t){return Boolean(t&&t.then&&"function"==typeof t.then)}function x(t,e){try{return t instanceof e}catch(t){return!1}}function w(t,e){return void 0===e&&(e=0),"string"!=typeof t||0===e||t.length<=e?t:t.substr(0,e)+"..."}function S(t,e){if(!Array.isArray(t))return""
for(var n=[],r=0;r<t.length;r++){var o=t[r]
try{n.push(String(o))}catch(t){n.push("[value cannot be serialized]")}}return n.join(e)}function k(t,e){return!!_(t)&&(n=e,"[object RegExp]"===Object.prototype.toString.call(n)?e.test(t):"string"==typeof e&&-1!==t.indexOf(e))
var n}function O(){return"[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0)}var j={}
function T(){return O()||"undefined"!=typeof window?window:"undefined"!=typeof self?self:j}function R(){var t=T(),e=t.crypto||t.msCrypto
if(void 0!==e&&e.getRandomValues){var n=new Uint16Array(8)
e.getRandomValues(n),n[3]=4095&n[3]|16384,n[4]=16383&n[4]|32768
var r=function(t){for(var e=t.toString(16);e.length<4;)e="0"+e
return e}
return r(n[0])+r(n[1])+r(n[2])+r(n[3])+r(n[4])+r(n[5])+r(n[6])+r(n[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0
return("x"===t?e:3&e|8).toString(16)}))}function I(t){if(!t)return{}
var e=t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)
if(!e)return{}
var n=e[6]||"",r=e[8]||""
return{host:e[4],path:e[5],protocol:e[2],relative:e[5]+n+r}}function U(t){if(t.message)return t.message
if(t.exception&&t.exception.values&&t.exception.values[0]){var e=t.exception.values[0]
return e.type&&e.value?e.type+": "+e.value:e.type||e.value||t.event_id||"<unknown>"}return t.event_id||"<unknown>"}function N(t){var e=T()
if(!("console"in e))return t()
var n=e.console,r={};["debug","info","warn","error","log","assert"].forEach((function(t){t in e.console&&n[t].__sentry_original__&&(r[t]=n[t],n[t]=n[t].__sentry_original__)}))
var o=t()
return Object.keys(r).forEach((function(t){n[t]=r[t]})),o}function D(t,e,n){t.exception=t.exception||{},t.exception.values=t.exception.values||[],t.exception.values[0]=t.exception.values[0]||{},t.exception.values[0].value=t.exception.values[0].value||e||"",t.exception.values[0].type=t.exception.values[0].type||n||"Error"}function C(t,e){void 0===e&&(e={})
try{t.exception.values[0].mechanism=t.exception.values[0].mechanism||{},Object.keys(e).forEach((function(n){t.exception.values[0].mechanism[n]=e[n]}))}catch(t){}}function L(t){try{for(var e=t,n=[],r=0,o=0,i=" > ".length,a=void 0;e&&r++<5&&!("html"===(a=P(e))||r>1&&o+n.length*i+a.length>=80);)n.push(a),o+=a.length,e=e.parentNode
return n.reverse().join(" > ")}catch(t){return"<unknown>"}}function P(t){var e,n,r,o,i,a=t,s=[]
if(!a||!a.tagName)return""
if(s.push(a.tagName.toLowerCase()),a.id&&s.push("#"+a.id),(e=a.className)&&_(e))for(n=e.split(/\s+/),i=0;i<n.length;i++)s.push("."+n[i])
var c=["type","name","title","alt"]
for(i=0;i<c.length;i++)r=c[i],(o=a.getAttribute(r))&&s.push("["+r+'="'+o+'"]')
return s.join("")}var F=Date.now(),A=0,B={now:function(){var t=Date.now()-F
return t<A&&(t=A),A=t,t},timeOrigin:F},H=function(){if(O())try{return t.require("perf_hooks").performance}catch(t){return B}return T().performance&&void 0===performance.timeOrigin&&(performance.timeOrigin=performance.timing&&performance.timing.navigationStart||F),T().performance||B}()
function M(){return(H.timeOrigin+H.now())/1e3}function q(t,e){if(!e)return 6e4
var n=parseInt(""+e,10)
if(!isNaN(n))return 1e3*n
var r=Date.parse(""+e)
return isNaN(r)?6e4:r-t}var W="<anonymous>"
function Y(t){try{return t&&"function"==typeof t&&t.name||W}catch(t){return W}}var G=T(),J="Sentry Logger ",z=function(){function t(){this._enabled=!1}return t.prototype.disable=function(){this._enabled=!1},t.prototype.enable=function(){this._enabled=!0},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
this._enabled&&N((function(){G.console.log(J+"[Log]: "+t.join(" "))}))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
this._enabled&&N((function(){G.console.warn(J+"[Warn]: "+t.join(" "))}))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
this._enabled&&N((function(){G.console.error(J+"[Error]: "+t.join(" "))}))},t}()
G.__SENTRY__=G.__SENTRY__||{}
var X,$=G.__SENTRY__.logger||(G.__SENTRY__.logger=new z),V=function(){function t(){this._hasWeakSet="function"==typeof WeakSet,this._inner=this._hasWeakSet?new WeakSet:[]}return t.prototype.memoize=function(t){if(this._hasWeakSet)return!!this._inner.has(t)||(this._inner.add(t),!1)
for(var e=0;e<this._inner.length;e++)if(this._inner[e]===t)return!0
return this._inner.push(t),!1},t.prototype.unmemoize=function(t){if(this._hasWeakSet)this._inner.delete(t)
else for(var e=0;e<this._inner.length;e++)if(this._inner[e]===t){this._inner.splice(e,1)
break}},t}()
function K(t,e,n){if(e in t){var r=t[e],o=n(r)
if("function"==typeof o)try{o.prototype=o.prototype||{},Object.defineProperties(o,{__sentry_original__:{enumerable:!1,value:r}})}catch(t){}t[e]=o}}function Q(t){if(h(t)){var e=t,n={message:e.message,name:e.name,stack:e.stack}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])
return n}if(m(t)){var o=t,i={}
i.type=o.type
try{i.target=b(o.target)?L(o.target):Object.prototype.toString.call(o.target)}catch(t){i.target="<unknown>"}try{i.currentTarget=b(o.currentTarget)?L(o.currentTarget):Object.prototype.toString.call(o.currentTarget)}catch(t){i.currentTarget="<unknown>"}for(var r in"undefined"!=typeof CustomEvent&&x(t,CustomEvent)&&(i.detail=o.detail),o)Object.prototype.hasOwnProperty.call(o,r)&&(i[r]=o)
return i}return t}function Z(t,e,n){void 0===e&&(e=3),void 0===n&&(n=102400)
var r,o=nt(t,e)
return r=o,function(t){return~-encodeURI(t).split(/%..|./).length}(JSON.stringify(r))>n?Z(t,e-1,n):o}function tt(t,e){return"domain"===e&&t&&"object"==typeof t&&t._events?"[Domain]":"domainEmitter"===e?"[DomainEmitter]":"undefined"!=typeof window&&t===window?"[Global]":"undefined"!=typeof window&&t===window?"[Window]":"undefined"!=typeof document&&t===document?"[Document]":g(n=t)&&"nativeEvent"in n&&"preventDefault"in n&&"stopPropagation"in n?"[SyntheticEvent]":"number"==typeof t&&t!=t?"[NaN]":void 0===t?"[undefined]":"function"==typeof t?"[Function: "+Y(t)+"]":t
var n}function et(t,e,n,r){if(void 0===n&&(n=1/0),void 0===r&&(r=new V),0===n)return function(t){var e=Object.prototype.toString.call(t)
if("string"==typeof t)return t
if("[object Object]"===e)return"[Object]"
if("[object Array]"===e)return"[Array]"
var n=tt(t)
return y(n)?n:e}(e)
if(null!=e&&"function"==typeof e.toJSON)return e.toJSON()
var o=tt(e,t)
if(y(o))return o
var i=Q(e),a=Array.isArray(e)?[]:{}
if(r.memoize(e))return"[Circular ~]"
for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(a[s]=et(s,i[s],n-1,r))
return r.unmemoize(e),a}function nt(t,e){try{return JSON.parse(JSON.stringify(t,(function(t,n){return et(t,n,e)})))}catch(t){return"**non-serializable**"}}function rt(t,e){void 0===e&&(e=40)
var n=Object.keys(Q(t))
if(n.sort(),!n.length)return"[object has no keys]"
if(n[0].length>=e)return w(n[0],e)
for(var r=n.length;r>0;r--){var o=n.slice(0,r).join(", ")
if(!(o.length>e))return r===n.length?o:w(o,e)}return""}!function(t){t.PENDING="PENDING",t.RESOLVED="RESOLVED",t.REJECTED="REJECTED"}(X||(X={}))
var ot=function(){function t(t){var e=this
this._state=X.PENDING,this._handlers=[],this._resolve=function(t){e._setResult(X.RESOLVED,t)},this._reject=function(t){e._setResult(X.REJECTED,t)},this._setResult=function(t,n){e._state===X.PENDING&&(E(n)?n.then(e._resolve,e._reject):(e._state=t,e._value=n,e._executeHandlers()))},this._attachHandler=function(t){e._handlers=e._handlers.concat(t),e._executeHandlers()},this._executeHandlers=function(){if(e._state!==X.PENDING){var t=e._handlers.slice()
e._handlers=[],t.forEach((function(t){t.done||(e._state===X.RESOLVED&&t.onfulfilled&&t.onfulfilled(e._value),e._state===X.REJECTED&&t.onrejected&&t.onrejected(e._value),t.done=!0)}))}}
try{t(this._resolve,this._reject)}catch(t){this._reject(t)}}return t.prototype.toString=function(){return"[object SyncPromise]"},t.resolve=function(e){return new t((function(t){t(e)}))},t.reject=function(e){return new t((function(t,n){n(e)}))},t.all=function(e){return new t((function(n,r){if(Array.isArray(e))if(0!==e.length){var o=e.length,i=[]
e.forEach((function(e,a){t.resolve(e).then((function(t){i[a]=t,0==(o-=1)&&n(i)})).then(null,r)}))}else n([])
else r(new TypeError("Promise.all requires an array as input."))}))},t.prototype.then=function(e,n){var r=this
return new t((function(t,o){r._attachHandler({done:!1,onfulfilled:function(n){if(e)try{return void t(e(n))}catch(t){return void o(t)}else t(n)},onrejected:function(e){if(n)try{return void t(n(e))}catch(t){return void o(t)}else o(e)}})}))},t.prototype.catch=function(t){return this.then((function(t){return t}),t)},t.prototype.finally=function(e){var n=this
return new t((function(t,r){var o,i
return n.then((function(t){i=!1,o=t,e&&e()}),(function(t){i=!0,o=t,e&&e()})).then((function(){i?r(o):t(o)}))}))},t}(),it=function(){function t(t){this._limit=t,this._buffer=[]}return t.prototype.isReady=function(){return void 0===this._limit||this.length()<this._limit},t.prototype.add=function(t){var e=this
return this.isReady()?(-1===this._buffer.indexOf(t)&&this._buffer.push(t),t.then((function(){return e.remove(t)})).then(null,(function(){return e.remove(t).then(null,(function(){}))})),t):ot.reject(new f("Not adding Promise due to buffer limit reached."))},t.prototype.remove=function(t){return this._buffer.splice(this._buffer.indexOf(t),1)[0]},t.prototype.length=function(){return this._buffer.length},t.prototype.drain=function(t){var e=this
return new ot((function(n){var r=setTimeout((function(){t&&t>0&&n(!1)}),t)
ot.all(e._buffer).then((function(){clearTimeout(r),n(!0)})).then(null,(function(){n(!0)}))}))},t}()
function at(){if(!("fetch"in T()))return!1
try{return new Headers,new Request(""),new Response,!0}catch(t){return!1}}function st(t){return t&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())}function ct(){if(!at())return!1
try{return new Request("_",{referrerPolicy:"origin"}),!0}catch(t){return!1}}var ut,pt=T(),lt={},ft={}
function ht(t){t&&"string"==typeof t.type&&"function"==typeof t.callback&&(lt[t.type]=lt[t.type]||[],lt[t.type].push(t.callback),function(t){if(!ft[t])switch(ft[t]=!0,t){case"console":"console"in pt&&["debug","info","warn","error","log","assert"].forEach((function(t){t in pt.console&&K(pt.console,t,(function(e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
dt("console",{args:n,level:t}),e&&Function.prototype.apply.call(e,pt.console,n)}}))}))
break
case"dom":"document"in pt&&(pt.document.addEventListener("click",bt("click",dt.bind(null,"dom")),!1),pt.document.addEventListener("keypress",Et(dt.bind(null,"dom")),!1),["EventTarget","Node"].forEach((function(t){var e=pt[t]&&pt[t].prototype
e&&e.hasOwnProperty&&e.hasOwnProperty("addEventListener")&&(K(e,"addEventListener",(function(t){return function(e,n,r){return n&&n.handleEvent?("click"===e&&K(n,"handleEvent",(function(t){return function(e){return bt("click",dt.bind(null,"dom"))(e),t.call(this,e)}})),"keypress"===e&&K(n,"handleEvent",(function(t){return function(e){return Et(dt.bind(null,"dom"))(e),t.call(this,e)}}))):("click"===e&&bt("click",dt.bind(null,"dom"),!0)(this),"keypress"===e&&Et(dt.bind(null,"dom"))(this)),t.call(this,e,n,r)}})),K(e,"removeEventListener",(function(t){return function(e,n,r){var o=n
try{o=o&&(o.__sentry_wrapped__||o)}catch(t){}return t.call(this,e,o,r)}})))})))
break
case"xhr":!function(){if("XMLHttpRequest"in pt){var t=XMLHttpRequest.prototype
K(t,"open",(function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
var r=e[1]
return this.__sentry_xhr__={method:_(e[0])?e[0].toUpperCase():e[0],url:e[1]},_(r)&&"POST"===this.__sentry_xhr__.method&&r.match(/sentry_key/)&&(this.__sentry_own_request__=!0),t.apply(this,e)}})),K(t,"send",(function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
var r=this,o={args:e,startTimestamp:Date.now(),xhr:r}
return dt("xhr",c({},o)),r.addEventListener("readystatechange",(function(){if(4===r.readyState){try{r.__sentry_xhr__&&(r.__sentry_xhr__.status_code=r.status)}catch(t){}dt("xhr",c({},o,{endTimestamp:Date.now()}))}})),t.apply(this,e)}}))}}()
break
case"fetch":(function(){if(!at())return!1
var t=T()
if(st(t.fetch))return!0
var e=!1,n=t.document
if(n&&"function"==typeof n.createElement)try{var r=n.createElement("iframe")
r.hidden=!0,n.head.appendChild(r),r.contentWindow&&r.contentWindow.fetch&&(e=st(r.contentWindow.fetch)),n.head.removeChild(r)}catch(t){$.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",t)}return e})()&&K(pt,"fetch",(function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
var r={args:e,fetchData:{method:vt(e),url:_t(e)},startTimestamp:Date.now()}
return dt("fetch",c({},r)),t.apply(pt,e).then((function(t){return dt("fetch",c({},r,{endTimestamp:Date.now(),response:t})),t}),(function(t){throw dt("fetch",c({},r,{endTimestamp:Date.now(),error:t})),t}))}}))
break
case"history":!function(){if(function(){var t=T(),e=t.chrome,n=e&&e.app&&e.app.runtime,r="history"in t&&!!t.history.pushState&&!!t.history.replaceState
return!n&&r}()){var t=pt.onpopstate
pt.onpopstate=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
var r=pt.location.href,o=ut
if(ut=r,dt("history",{from:o,to:r}),t)return t.apply(this,e)},K(pt.history,"pushState",e),K(pt.history,"replaceState",e)}function e(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
var r=e.length>2?e[2]:void 0
if(r){var o=ut,i=String(r)
ut=i,dt("history",{from:o,to:i})}return t.apply(this,e)}}}()
break
case"error":xt=pt.onerror,pt.onerror=function(t,e,n,r,o){return dt("error",{column:r,error:o,line:n,msg:t,url:e}),!!xt&&xt.apply(this,arguments)}
break
case"unhandledrejection":wt=pt.onunhandledrejection,pt.onunhandledrejection=function(t){return dt("unhandledrejection",t),!wt||wt.apply(this,arguments)}
break
default:$.warn("unknown instrumentation type:",t)}}(t.type))}function dt(t,e){var n,r
if(t&&lt[t])try{for(var o=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0
if(n)return n.call(t)
if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}
throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(lt[t]||[]),i=o.next();!i.done;i=o.next()){var a=i.value
try{a(e)}catch(e){$.error("Error while triggering instrumentation handler.\nType: "+t+"\nName: "+Y(a)+"\nError: "+e)}}}catch(t){n={error:t}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function vt(t){return void 0===t&&(t=[]),"Request"in pt&&x(t[0],Request)&&t[0].method?String(t[0].method).toUpperCase():t[1]&&t[1].method?String(t[1].method).toUpperCase():"GET"}function _t(t){return void 0===t&&(t=[]),"string"==typeof t[0]?t[0]:"Request"in pt&&x(t[0],Request)?t[0].url:String(t[0])}var yt,gt,mt=0
function bt(t,e,n){return void 0===n&&(n=!1),function(r){yt=void 0,r&&gt!==r&&(gt=r,mt&&clearTimeout(mt),n?mt=setTimeout((function(){e({event:r,name:t})})):e({event:r,name:t}))}}function Et(t){return function(e){var n
try{n=e.target}catch(t){return}var r=n&&n.tagName
r&&("INPUT"===r||"TEXTAREA"===r||n.isContentEditable)&&(yt||bt("input",t)(e),clearTimeout(yt),yt=setTimeout((function(){yt=void 0}),1e3))}}var xt=null,wt=null,St=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,kt="Invalid Dsn",Ot=function(){function t(t){"string"==typeof t?this._fromString(t):this._fromComponents(t),this._validate()}return t.prototype.toString=function(t){void 0===t&&(t=!1)
var e=this,n=e.host,r=e.path,o=e.pass,i=e.port,a=e.projectId
return e.protocol+"://"+e.user+(t&&o?":"+o:"")+"@"+n+(i?":"+i:"")+"/"+(r?r+"/":r)+a},t.prototype._fromString=function(t){var e=St.exec(t)
if(!e)throw new f(kt)
var n=u(e.slice(1),6),r=n[0],o=n[1],i=n[2],a=void 0===i?"":i,s=n[3],c=n[4],p=void 0===c?"":c,l="",h=n[5],d=h.split("/")
d.length>1&&(l=d.slice(0,-1).join("/"),h=d.pop()),this._fromComponents({host:s,pass:a,path:l,projectId:h,port:p,protocol:r,user:o})},t.prototype._fromComponents=function(t){this.protocol=t.protocol,this.user=t.user,this.pass=t.pass||"",this.host=t.host,this.port=t.port||"",this.path=t.path||"",this.projectId=t.projectId},t.prototype._validate=function(){var t=this
if(["protocol","user","host","projectId"].forEach((function(e){if(!t[e])throw new f(kt)})),"http"!==this.protocol&&"https"!==this.protocol)throw new f(kt)
if(this.port&&isNaN(parseInt(this.port,10)))throw new f(kt)},t}(),jt=function(){function t(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._user={},this._tags={},this._extra={},this._context={}}return t.prototype.addScopeListener=function(t){this._scopeListeners.push(t)},t.prototype.addEventProcessor=function(t){return this._eventProcessors.push(t),this},t.prototype._notifyScopeListeners=function(){var t=this
this._notifyingListeners||(this._notifyingListeners=!0,setTimeout((function(){t._scopeListeners.forEach((function(e){e(t)})),t._notifyingListeners=!1})))},t.prototype._notifyEventProcessors=function(t,e,n,r){var o=this
return void 0===r&&(r=0),new ot((function(i,a){var s=t[r]
if(null===e||"function"!=typeof s)i(e)
else{var u=s(c({},e),n)
E(u)?u.then((function(e){return o._notifyEventProcessors(t,e,n,r+1).then(i)})).then(null,a):o._notifyEventProcessors(t,u,n,r+1).then(i).then(null,a)}}))},t.prototype.setUser=function(t){return this._user=t||{},this._notifyScopeListeners(),this},t.prototype.setTags=function(t){return this._tags=c({},this._tags,t),this._notifyScopeListeners(),this},t.prototype.setTag=function(t,e){var n
return this._tags=c({},this._tags,((n={})[t]=e,n)),this._notifyScopeListeners(),this},t.prototype.setExtras=function(t){return this._extra=c({},this._extra,t),this._notifyScopeListeners(),this},t.prototype.setExtra=function(t,e){var n
return this._extra=c({},this._extra,((n={})[t]=e,n)),this._notifyScopeListeners(),this},t.prototype.setFingerprint=function(t){return this._fingerprint=t,this._notifyScopeListeners(),this},t.prototype.setLevel=function(t){return this._level=t,this._notifyScopeListeners(),this},t.prototype.setTransaction=function(t){return this._transaction=t,this._span&&(this._span.transaction=t),this._notifyScopeListeners(),this},t.prototype.setContext=function(t,e){var n
return this._context=c({},this._context,((n={})[t]=e,n)),this._notifyScopeListeners(),this},t.prototype.setSpan=function(t){return this._span=t,this._notifyScopeListeners(),this},t.prototype.getSpan=function(){return this._span},t.clone=function(e){var n=new t
return e&&(n._breadcrumbs=p(e._breadcrumbs),n._tags=c({},e._tags),n._extra=c({},e._extra),n._context=c({},e._context),n._user=e._user,n._level=e._level,n._span=e._span,n._transaction=e._transaction,n._fingerprint=e._fingerprint,n._eventProcessors=p(e._eventProcessors)),n},t.prototype.clear=function(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._context={},this._level=void 0,this._transaction=void 0,this._fingerprint=void 0,this._span=void 0,this._notifyScopeListeners(),this},t.prototype.addBreadcrumb=function(t,e){var n=c({timestamp:M()},t)
return this._breadcrumbs=void 0!==e&&e>=0?p(this._breadcrumbs,[n]).slice(-e):p(this._breadcrumbs,[n]),this._notifyScopeListeners(),this},t.prototype.clearBreadcrumbs=function(){return this._breadcrumbs=[],this._notifyScopeListeners(),this},t.prototype._applyFingerprint=function(t){t.fingerprint=t.fingerprint?Array.isArray(t.fingerprint)?t.fingerprint:[t.fingerprint]:[],this._fingerprint&&(t.fingerprint=t.fingerprint.concat(this._fingerprint)),t.fingerprint&&!t.fingerprint.length&&delete t.fingerprint},t.prototype.applyToEvent=function(t,e){return this._extra&&Object.keys(this._extra).length&&(t.extra=c({},this._extra,t.extra)),this._tags&&Object.keys(this._tags).length&&(t.tags=c({},this._tags,t.tags)),this._user&&Object.keys(this._user).length&&(t.user=c({},this._user,t.user)),this._context&&Object.keys(this._context).length&&(t.contexts=c({},this._context,t.contexts)),this._level&&(t.level=this._level),this._transaction&&(t.transaction=this._transaction),this._span&&(t.contexts=c({trace:this._span.getTraceContext()},t.contexts)),this._applyFingerprint(t),t.breadcrumbs=p(t.breadcrumbs||[],this._breadcrumbs),t.breadcrumbs=t.breadcrumbs.length>0?t.breadcrumbs:void 0,this._notifyEventProcessors(p(Tt(),this._eventProcessors),t,e)},t}()
function Tt(){var t=T()
return t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.globalEventProcessors=t.__SENTRY__.globalEventProcessors||[],t.__SENTRY__.globalEventProcessors}function Rt(t){Tt().push(t)}var It=function(){function t(t,e,n){void 0===e&&(e=new jt),void 0===n&&(n=3),this._version=n,this._stack=[],this._stack.push({client:t,scope:e})}return t.prototype._invokeClient=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
var o=this.getStackTop()
o&&o.client&&o.client[t]&&(e=o.client)[t].apply(e,p(n,[o.scope]))},t.prototype.isOlderThan=function(t){return this._version<t},t.prototype.bindClient=function(t){this.getStackTop().client=t,t&&t.setupIntegrations&&t.setupIntegrations()},t.prototype.pushScope=function(){var t=this.getStack(),e=t.length>0?t[t.length-1].scope:void 0,n=jt.clone(e)
return this.getStack().push({client:this.getClient(),scope:n}),n},t.prototype.popScope=function(){return void 0!==this.getStack().pop()},t.prototype.withScope=function(t){var e=this.pushScope()
try{t(e)}finally{this.popScope()}},t.prototype.getClient=function(){return this.getStackTop().client},t.prototype.getScope=function(){return this.getStackTop().scope},t.prototype.getStack=function(){return this._stack},t.prototype.getStackTop=function(){return this._stack[this._stack.length-1]},t.prototype.captureException=function(t,e){var n=this._lastEventId=R(),r=e
if(!e){var o=void 0
try{throw new Error("Sentry syntheticException")}catch(t){o=t}r={originalException:t,syntheticException:o}}return this._invokeClient("captureException",t,c({},r,{event_id:n})),n},t.prototype.captureMessage=function(t,e,n){var r=this._lastEventId=R(),o=n
if(!n){var i=void 0
try{throw new Error(t)}catch(t){i=t}o={originalException:t,syntheticException:i}}return this._invokeClient("captureMessage",t,e,c({},o,{event_id:r})),r},t.prototype.captureEvent=function(t,e){var n=this._lastEventId=R()
return this._invokeClient("captureEvent",t,c({},e,{event_id:n})),n},t.prototype.lastEventId=function(){return this._lastEventId},t.prototype.addBreadcrumb=function(t,e){var n=this.getStackTop()
if(n.scope&&n.client){var r=n.client.getOptions&&n.client.getOptions()||{},o=r.beforeBreadcrumb,i=void 0===o?null:o,a=r.maxBreadcrumbs,s=void 0===a?100:a
if(!(s<=0)){var u=M(),p=c({timestamp:u},t),l=i?N((function(){return i(p,e)})):p
null!==l&&n.scope.addBreadcrumb(l,Math.min(s,100))}}},t.prototype.setUser=function(t){var e=this.getStackTop()
e.scope&&e.scope.setUser(t)},t.prototype.setTags=function(t){var e=this.getStackTop()
e.scope&&e.scope.setTags(t)},t.prototype.setExtras=function(t){var e=this.getStackTop()
e.scope&&e.scope.setExtras(t)},t.prototype.setTag=function(t,e){var n=this.getStackTop()
n.scope&&n.scope.setTag(t,e)},t.prototype.setExtra=function(t,e){var n=this.getStackTop()
n.scope&&n.scope.setExtra(t,e)},t.prototype.setContext=function(t,e){var n=this.getStackTop()
n.scope&&n.scope.setContext(t,e)},t.prototype.configureScope=function(t){var e=this.getStackTop()
e.scope&&e.client&&t(e.scope)},t.prototype.run=function(t){var e=Nt(this)
try{t(this)}finally{Nt(e)}},t.prototype.getIntegration=function(t){var e=this.getClient()
if(!e)return null
try{return e.getIntegration(t)}catch(e){return $.warn("Cannot retrieve integration "+t.id+" from the current Hub"),null}},t.prototype.startSpan=function(t,e){return void 0===e&&(e=!1),this._callExtensionMethod("startSpan",t,e)},t.prototype.traceHeaders=function(){return this._callExtensionMethod("traceHeaders")},t.prototype._callExtensionMethod=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
var r=Ut(),o=r.__SENTRY__
if(o&&o.extensions&&"function"==typeof o.extensions[t])return o.extensions[t].apply(this,e)
$.warn("Extension method "+t+" couldn't be found, doing nothing.")},t}()
function Ut(){var t=T()
return t.__SENTRY__=t.__SENTRY__||{extensions:{},hub:void 0},t}function Nt(t){var e=Ut(),n=Lt(e)
return Pt(e,t),n}function Dt(){var t=Ut()
return Ct(t)&&!Lt(t).isOlderThan(3)||Pt(t,new It),O()?function(t){try{var e=Ut().__SENTRY__
if(!e||!e.extensions||!e.extensions.domain)return Lt(t)
var n=e.extensions.domain.active
if(!n)return Lt(t)
if(!Ct(n)||Lt(n).isOlderThan(3)){var r=Lt(t).getStackTop()
Pt(n,new It(r.client,jt.clone(r.scope)))}return Lt(n)}catch(e){return Lt(t)}}(t):Lt(t)}function Ct(t){return!!(t&&t.__SENTRY__&&t.__SENTRY__.hub)}function Lt(t){return t&&t.__SENTRY__&&t.__SENTRY__.hub||(t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.hub=new It),t.__SENTRY__.hub}function Pt(t,e){return!!t&&(t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.hub=e,!0)}function Ft(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
var r=Dt()
if(r&&r[t])return r[t].apply(r,p(e))
throw new Error("No hub defined or "+t+" was not found on the hub, please open a bug report.")}function At(t){var e
try{throw new Error("Sentry syntheticException")}catch(t){e=t}return Ft("captureException",t,{originalException:t,syntheticException:e})}function Bt(t){Ft("withScope",t)}var Ht,Mt=function(){function t(t){this.dsn=t,this._dsnObject=new Ot(t)}return t.prototype.getDsn=function(){return this._dsnObject},t.prototype.getStoreEndpoint=function(){return""+this._getBaseUrl()+this.getStoreEndpointPath()},t.prototype.getStoreEndpointWithUrlEncodedAuth=function(){var t,e={sentry_key:this._dsnObject.user,sentry_version:"7"}
return this.getStoreEndpoint()+"?"+(t=e,Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))},t.prototype._getBaseUrl=function(){var t=this._dsnObject,e=t.protocol?t.protocol+":":"",n=t.port?":"+t.port:""
return e+"//"+t.host+n},t.prototype.getStoreEndpointPath=function(){var t=this._dsnObject
return(t.path?"/"+t.path:"")+"/api/"+t.projectId+"/store/"},t.prototype.getRequestHeaders=function(t,e){var n=this._dsnObject,r=["Sentry sentry_version=7"]
return r.push("sentry_client="+t+"/"+e),r.push("sentry_key="+n.user),n.pass&&r.push("sentry_secret="+n.pass),{"Content-Type":"application/json","X-Sentry-Auth":r.join(", ")}},t.prototype.getReportDialogEndpoint=function(t){void 0===t&&(t={})
var e=this._dsnObject,n=this._getBaseUrl()+(e.path?"/"+e.path:"")+"/api/embed/error-page/",r=[]
for(var o in r.push("dsn="+e.toString()),t)if("user"===o){if(!t.user)continue
t.user.name&&r.push("name="+encodeURIComponent(t.user.name)),t.user.email&&r.push("email="+encodeURIComponent(t.user.email))}else r.push(encodeURIComponent(o)+"="+encodeURIComponent(t[o]))
return r.length?n+"?"+r.join("&"):n},t}(),qt=[],Wt=function(){function t(t,e){this._integrations={},this._processing=!1,this._backend=new t(e),this._options=e,e.dsn&&(this._dsn=new Ot(e.dsn))}return t.prototype.captureException=function(t,e,n){var r=this,o=e&&e.event_id
return this._processing=!0,this._getBackend().eventFromException(t,e).then((function(t){return r._processEvent(t,e,n)})).then((function(t){o=t&&t.event_id,r._processing=!1})).then(null,(function(t){$.error(t),r._processing=!1})),o},t.prototype.captureMessage=function(t,e,n,r){var o=this,i=n&&n.event_id
return this._processing=!0,(y(t)?this._getBackend().eventFromMessage(""+t,e,n):this._getBackend().eventFromException(t,n)).then((function(t){return o._processEvent(t,n,r)})).then((function(t){i=t&&t.event_id,o._processing=!1})).then(null,(function(t){$.error(t),o._processing=!1})),i},t.prototype.captureEvent=function(t,e,n){var r=this,o=e&&e.event_id
return this._processing=!0,this._processEvent(t,e,n).then((function(t){o=t&&t.event_id,r._processing=!1})).then(null,(function(t){$.error(t),r._processing=!1})),o},t.prototype.getDsn=function(){return this._dsn},t.prototype.getOptions=function(){return this._options},t.prototype.flush=function(t){var e=this
return this._isClientProcessing(t).then((function(n){return clearInterval(n.interval),e._getBackend().getTransport().close(t).then((function(t){return n.ready&&t}))}))},t.prototype.close=function(t){var e=this
return this.flush(t).then((function(t){return e.getOptions().enabled=!1,t}))},t.prototype.setupIntegrations=function(){var t,e
this._isEnabled()&&(this._integrations=(t=this._options,e={},function(t){var e=t.defaultIntegrations&&p(t.defaultIntegrations)||[],n=t.integrations,r=[]
if(Array.isArray(n)){var o=n.map((function(t){return t.name})),i=[]
e.forEach((function(t){-1===o.indexOf(t.name)&&-1===i.indexOf(t.name)&&(r.push(t),i.push(t.name))})),n.forEach((function(t){-1===i.indexOf(t.name)&&(r.push(t),i.push(t.name))}))}else"function"==typeof n?(r=n(e),r=Array.isArray(r)?r:[r]):r=p(e)
var a=r.map((function(t){return t.name})),s="Debug"
return-1!==a.indexOf(s)&&r.push.apply(r,p(r.splice(a.indexOf(s),1))),r}(t).forEach((function(t){e[t.name]=t,function(t){-1===qt.indexOf(t.name)&&(t.setupOnce(Rt,Dt),qt.push(t.name),$.log("Integration installed: "+t.name))}(t)})),e))},t.prototype.getIntegration=function(t){try{return this._integrations[t.id]||null}catch(e){return $.warn("Cannot retrieve integration "+t.id+" from the current Client"),null}},t.prototype._isClientProcessing=function(t){var e=this
return new ot((function(n){var r=0,o=0
clearInterval(o),o=setInterval((function(){e._processing?(r+=1,t&&r>=t&&n({interval:o,ready:!1})):n({interval:o,ready:!0})}),1)}))},t.prototype._getBackend=function(){return this._backend},t.prototype._isEnabled=function(){return!1!==this.getOptions().enabled&&void 0!==this._dsn},t.prototype._prepareEvent=function(t,e,n){var r=this,o=this.getOptions(),i=o.environment,a=o.release,s=o.dist,u=o.maxValueLength,p=void 0===u?250:u,l=o.normalizeDepth,f=void 0===l?3:l,h=c({},t)
void 0===h.environment&&void 0!==i&&(h.environment=i),void 0===h.release&&void 0!==a&&(h.release=a),void 0===h.dist&&void 0!==s&&(h.dist=s),h.message&&(h.message=w(h.message,p))
var d=h.exception&&h.exception.values&&h.exception.values[0]
d&&d.value&&(d.value=w(d.value,p))
var v=h.request
v&&v.url&&(v.url=w(v.url,p)),void 0===h.event_id&&(h.event_id=n&&n.event_id?n.event_id:R()),this._addIntegrations(h.sdk)
var _=ot.resolve(h)
return e&&(_=e.applyToEvent(h,n)),_.then((function(t){return"number"==typeof f&&f>0?r._normalizeEvent(t,f):t}))},t.prototype._normalizeEvent=function(t,e){return t?c({},t,t.breadcrumbs&&{breadcrumbs:t.breadcrumbs.map((function(t){return c({},t,t.data&&{data:nt(t.data,e)})}))},t.user&&{user:nt(t.user,e)},t.contexts&&{contexts:nt(t.contexts,e)},t.extra&&{extra:nt(t.extra,e)}):null},t.prototype._addIntegrations=function(t){var e=Object.keys(this._integrations)
t&&e.length>0&&(t.integrations=e)},t.prototype._processEvent=function(t,e,n){var r=this,o=this.getOptions(),i=o.beforeSend,a=o.sampleRate
return this._isEnabled()?"number"==typeof a&&Math.random()>a?ot.reject("This event has been sampled, will not send event."):new ot((function(o,a){r._prepareEvent(t,n,e).then((function(t){if(null!==t){var n=t
if(e&&e.data&&!0===e.data.__sentry__||!i)return r._getBackend().sendEvent(n),void o(n)
var s=i(t,e)
if(void 0===s)$.error("`beforeSend` method has to return `null` or a valid event.")
else if(E(s))r._handleAsyncBeforeSend(s,o,a)
else{if(null===(n=s))return $.log("`beforeSend` returned `null`, will not send event."),void o(null)
r._getBackend().sendEvent(n),o(n)}}else a("An event processor returned null, will not send event.")})).then(null,(function(t){r.captureException(t,{data:{__sentry__:!0},originalException:t}),a("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: "+t)}))})):ot.reject("SDK not enabled, will not send event.")},t.prototype._handleAsyncBeforeSend=function(t,e,n){var r=this
t.then((function(t){null!==t?(r._getBackend().sendEvent(t),e(t)):n("`beforeSend` returned `null`, will not send event.")})).then(null,(function(t){n("beforeSend rejected with "+t)}))},t}(),Yt=function(){function t(){}return t.prototype.sendEvent=function(t){return ot.resolve({reason:"NoopTransport: Event has been skipped because no Dsn is configured.",status:s.Skipped})},t.prototype.close=function(t){return ot.resolve(!0)},t}(),Gt=function(){function t(t){this._options=t,this._options.dsn||$.warn("No DSN provided, backend will not do anything."),this._transport=this._setupTransport()}return t.prototype._setupTransport=function(){return new Yt},t.prototype.eventFromException=function(t,e){throw new f("Backend has to implement `eventFromException` method")},t.prototype.eventFromMessage=function(t,e,n){throw new f("Backend has to implement `eventFromMessage` method")},t.prototype.sendEvent=function(t){this._transport.sendEvent(t).then(null,(function(t){$.error("Error while sending event: "+t)}))},t.prototype.getTransport=function(){return this._transport},t}(),Jt=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(){Ht=Function.prototype.toString,Function.prototype.toString=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n=this.__sentry_original__||this
return Ht.apply(n,t)}},t.id="FunctionToString",t}(),zt=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],Xt=function(){function t(e){void 0===e&&(e={}),this._options=e,this.name=t.id}return t.prototype.setupOnce=function(){Rt((function(e){var n=Dt()
if(!n)return e
var r=n.getIntegration(t)
if(r){var o=n.getClient(),i=o?o.getOptions():{},a=r._mergeOptions(i)
if(r._shouldDropEvent(e,a))return null}return e}))},t.prototype._shouldDropEvent=function(t,e){return this._isSentryError(t,e)?($.warn("Event dropped due to being internal Sentry Error.\nEvent: "+U(t)),!0):this._isIgnoredError(t,e)?($.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: "+U(t)),!0):this._isBlacklistedUrl(t,e)?($.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: "+U(t)+".\nUrl: "+this._getEventFilterUrl(t)),!0):!this._isWhitelistedUrl(t,e)&&($.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: "+U(t)+".\nUrl: "+this._getEventFilterUrl(t)),!0)},t.prototype._isSentryError=function(t,e){if(void 0===e&&(e={}),!e.ignoreInternal)return!1
try{return t&&t.exception&&t.exception.values&&t.exception.values[0]&&"SentryError"===t.exception.values[0].type||!1}catch(t){return!1}},t.prototype._isIgnoredError=function(t,e){return void 0===e&&(e={}),!(!e.ignoreErrors||!e.ignoreErrors.length)&&this._getPossibleEventMessages(t).some((function(t){return e.ignoreErrors.some((function(e){return k(t,e)}))}))},t.prototype._isBlacklistedUrl=function(t,e){if(void 0===e&&(e={}),!e.blacklistUrls||!e.blacklistUrls.length)return!1
var n=this._getEventFilterUrl(t)
return!!n&&e.blacklistUrls.some((function(t){return k(n,t)}))},t.prototype._isWhitelistedUrl=function(t,e){if(void 0===e&&(e={}),!e.whitelistUrls||!e.whitelistUrls.length)return!0
var n=this._getEventFilterUrl(t)
return!n||e.whitelistUrls.some((function(t){return k(n,t)}))},t.prototype._mergeOptions=function(t){return void 0===t&&(t={}),{blacklistUrls:p(this._options.blacklistUrls||[],t.blacklistUrls||[]),ignoreErrors:p(this._options.ignoreErrors||[],t.ignoreErrors||[],zt),ignoreInternal:void 0===this._options.ignoreInternal||this._options.ignoreInternal,whitelistUrls:p(this._options.whitelistUrls||[],t.whitelistUrls||[])}},t.prototype._getPossibleEventMessages=function(t){if(t.message)return[t.message]
if(t.exception)try{var e=t.exception.values&&t.exception.values[0]||{},n=e.type,r=void 0===n?"":n,o=e.value,i=void 0===o?"":o
return[""+i,r+": "+i]}catch(e){return $.error("Cannot extract message for event "+U(t)),[]}return[]},t.prototype._getEventFilterUrl=function(t){try{if(t.stacktrace){var e=t.stacktrace.frames
return e&&e[e.length-1].filename||null}if(t.exception){var n=t.exception.values&&t.exception.values[0].stacktrace&&t.exception.values[0].stacktrace.frames
return n&&n[n.length-1].filename||null}return null}catch(e){return $.error("Cannot extract url for event "+U(t)),null}},t.id="InboundFilters",t}(),$t="?",Vt=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Kt=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,Qt=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,Zt=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,te=/\((\S*)(?::(\d+))(?::(\d+))\)/
function ee(t){var e=null,n=t&&t.framesToPop
try{if(e=function(t){if(!t||!t.stacktrace)return null
for(var e,n=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,r=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,o=t.stacktrace.split("\n"),i=[],a=0;a<o.length;a+=2){var s=null;(e=n.exec(o[a]))?s={url:e[2],func:e[3],args:[],line:+e[1],column:null}:(e=r.exec(o[a]))&&(s={url:e[6],func:e[3]||e[4],args:e[5]?e[5].split(","):[],line:+e[1],column:+e[2]}),s&&(!s.func&&s.line&&(s.func=$t),i.push(s))}return i.length?{message:re(t),name:t.name,stack:i}:null}(t))return ne(e,n)}catch(t){}try{if(e=function(t){if(!t||!t.stack)return null
for(var e,n,r,o=[],i=t.stack.split("\n"),a=0;a<i.length;++a){if(n=Vt.exec(i[a])){var s=n[2]&&0===n[2].indexOf("native")
n[2]&&0===n[2].indexOf("eval")&&(e=te.exec(n[2]))&&(n[2]=e[1],n[3]=e[2],n[4]=e[3]),r={url:n[2]&&0===n[2].indexOf("address at ")?n[2].substr("address at ".length):n[2],func:n[1]||$t,args:s?[n[2]]:[],line:n[3]?+n[3]:null,column:n[4]?+n[4]:null}}else if(n=Qt.exec(i[a]))r={url:n[2],func:n[1]||$t,args:[],line:+n[3],column:n[4]?+n[4]:null}
else{if(!(n=Kt.exec(i[a])))continue
n[3]&&n[3].indexOf(" > eval")>-1&&(e=Zt.exec(n[3]))?(n[1]=n[1]||"eval",n[3]=e[1],n[4]=e[2],n[5]=""):0!==a||n[5]||void 0===t.columnNumber||(o[0].column=t.columnNumber+1),r={url:n[3],func:n[1]||$t,args:n[2]?n[2].split(","):[],line:n[4]?+n[4]:null,column:n[5]?+n[5]:null}}!r.func&&r.line&&(r.func=$t),o.push(r)}return o.length?{message:re(t),name:t.name,stack:o}:null}(t))return ne(e,n)}catch(t){}return{message:re(t),name:t&&t.name,stack:[],failed:!0}}function ne(t,e){try{return c({},t,{stack:t.stack.slice(e)})}catch(e){return t}}function re(t){var e=t&&t.message
return e?e.error&&"string"==typeof e.error.message?e.error.message:e:"No error message"}function oe(t){var e=ae(t.stack),n={type:t.name,value:t.message}
return e&&e.length&&(n.stacktrace={frames:e}),void 0===n.type&&""===n.value&&(n.value="Unrecoverable error caught"),n}function ie(t){return{exception:{values:[oe(t)]}}}function ae(t){if(!t||!t.length)return[]
var e=t,n=e[0].func||"",r=e[e.length-1].func||""
return-1===n.indexOf("captureMessage")&&-1===n.indexOf("captureException")||(e=e.slice(1)),-1!==r.indexOf("sentryWrapped")&&(e=e.slice(0,-1)),e.map((function(t){return{colno:null===t.column?void 0:t.column,filename:t.url||e[0].url,function:t.func||"?",in_app:!0,lineno:null===t.line?void 0:t.line}})).slice(0,50).reverse()}function se(t,e,n){var r,o
if(void 0===n&&(n={}),d(t)&&t.error)return ie(ee(t=t.error))
if(v(t)||(o=t,"[object DOMException]"===Object.prototype.toString.call(o))){var i=t,a=i.name||(v(i)?"DOMError":"DOMException"),s=i.message?a+": "+i.message:a
return D(r=ce(s,e,n),s),r}return h(t)?r=ie(ee(t)):g(t)||m(t)?(C(r=function(t,e,n){var r={exception:{values:[{type:m(t)?t.constructor.name:n?"UnhandledRejection":"Error",value:"Non-Error "+(n?"promise rejection":"exception")+" captured with keys: "+rt(t)}]},extra:{__serialized__:Z(t)}}
if(e){var o=ae(ee(e).stack)
r.stacktrace={frames:o}}return r}(t,e,n.rejection),{synthetic:!0}),r):(D(r=ce(t,e,n),""+t,void 0),C(r,{synthetic:!0}),r)}function ce(t,e,n){void 0===n&&(n={})
var r={message:t}
if(n.attachStacktrace&&e){var o=ae(ee(e).stack)
r.stacktrace={frames:o}}return r}var ue=function(){function t(t){this.options=t,this._buffer=new it(30),this.url=new Mt(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()}return t.prototype.sendEvent=function(t){throw new f("Transport Class has to implement `sendEvent` method")},t.prototype.close=function(t){return this._buffer.drain(t)},t}(),pe=T(),le=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e._disabledUntil=new Date(Date.now()),e}return i(e,t),e.prototype.sendEvent=function(t){var e=this
if(new Date(Date.now())<this._disabledUntil)return Promise.reject({event:t,reason:"Transport locked till "+this._disabledUntil+" due to too many requests.",status:429})
var n={body:JSON.stringify(t),method:"POST",referrerPolicy:ct()?"origin":""}
return void 0!==this.options.headers&&(n.headers=this.options.headers),this._buffer.add(new ot((function(t,r){pe.fetch(e.url,n).then((function(n){var o=s.fromHttpCode(n.status)
if(o!==s.Success){if(o===s.RateLimit){var i=Date.now()
e._disabledUntil=new Date(i+q(i,n.headers.get("Retry-After"))),$.warn("Too many requests, backing off till: "+e._disabledUntil)}r(n)}else t({status:o})})).catch(r)})))},e}(ue),fe=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this
return e._disabledUntil=new Date(Date.now()),e}return i(e,t),e.prototype.sendEvent=function(t){var e=this
return new Date(Date.now())<this._disabledUntil?Promise.reject({event:t,reason:"Transport locked till "+this._disabledUntil+" due to too many requests.",status:429}):this._buffer.add(new ot((function(n,r){var o=new XMLHttpRequest
for(var i in o.onreadystatechange=function(){if(4===o.readyState){var t=s.fromHttpCode(o.status)
if(t!==s.Success){if(t===s.RateLimit){var i=Date.now()
e._disabledUntil=new Date(i+q(i,o.getResponseHeader("Retry-After"))),$.warn("Too many requests, backing off till: "+e._disabledUntil)}r(o)}else n({status:t})}},o.open("POST",e.url),e.options.headers)e.options.headers.hasOwnProperty(i)&&o.setRequestHeader(i,e.options.headers[i])
o.send(JSON.stringify(t))})))},e}(ue),he=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype._setupTransport=function(){if(!this._options.dsn)return t.prototype._setupTransport.call(this)
var e=c({},this._options.transportOptions,{dsn:this._options.dsn})
return this._options.transport?new this._options.transport(e):at()?new le(e):new fe(e)},e.prototype.eventFromException=function(t,e){var n=se(t,e&&e.syntheticException||void 0,{attachStacktrace:this._options.attachStacktrace})
return C(n,{handled:!0,type:"generic"}),n.level=a.Error,e&&e.event_id&&(n.event_id=e.event_id),ot.resolve(n)},e.prototype.eventFromMessage=function(t,e,n){void 0===e&&(e=a.Info)
var r=ce(t,n&&n.syntheticException||void 0,{attachStacktrace:this._options.attachStacktrace})
return r.level=e,n&&n.event_id&&(r.event_id=n.event_id),ot.resolve(r)},e}(Gt),de="5.15.5",ve=function(t){function e(e){return void 0===e&&(e={}),t.call(this,he,e)||this}return i(e,t),e.prototype._prepareEvent=function(e,n,r){return e.platform=e.platform||"javascript",e.sdk=c({},e.sdk,{name:"sentry.javascript.browser",packages:p(e.sdk&&e.sdk.packages||[],[{name:"npm:@sentry/browser",version:de}]),version:de}),t.prototype._prepareEvent.call(this,e,n,r)},e.prototype.showReportDialog=function(t){void 0===t&&(t={})
var e=T().document
if(e)if(this._isEnabled()){var n=t.dsn||this.getDsn()
if(t.eventId)if(n){var r=e.createElement("script")
r.async=!0,r.src=new Mt(n).getReportDialogEndpoint(t),t.onLoad&&(r.onload=t.onLoad),(e.head||e.body).appendChild(r)}else $.error("Missing `Dsn` option in showReportDialog call")
else $.error("Missing `eventId` option in showReportDialog call")}else $.error("Trying to call showReportDialog with Sentry Client is disabled")},e}(Wt),_e=0
function ye(){return _e>0}function ge(){_e+=1,setTimeout((function(){_e-=1}))}function me(t,e,n){if(void 0===e&&(e={}),"function"!=typeof t)return t
try{if(t.__sentry__)return t
if(t.__sentry_wrapped__)return t.__sentry_wrapped__}catch(e){return t}var r=function(){var r=Array.prototype.slice.call(arguments)
try{n&&"function"==typeof n&&n.apply(this,arguments)
var o=r.map((function(t){return me(t,e)}))
return t.handleEvent?t.handleEvent.apply(this,o):t.apply(this,o)}catch(t){throw ge(),Bt((function(o){o.addEventProcessor((function(t){var n=c({},t)
return e.mechanism&&(D(n,void 0,void 0),C(n,e.mechanism)),n.extra=c({},n.extra,{arguments:r}),n})),At(t)})),t}}
try{for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}catch(t){}t.prototype=t.prototype||{},r.prototype=t.prototype,Object.defineProperty(t,"__sentry_wrapped__",{enumerable:!1,value:r}),Object.defineProperties(r,{__sentry__:{enumerable:!1,value:!0},__sentry_original__:{enumerable:!1,value:t}})
try{Object.getOwnPropertyDescriptor(r,"name").configurable&&Object.defineProperty(r,"name",{get:function(){return t.name}})}catch(t){}return r}var be=function(){function t(e){this.name=t.id,this._onErrorHandlerInstalled=!1,this._onUnhandledRejectionHandlerInstalled=!1,this._options=c({onerror:!0,onunhandledrejection:!0},e)}return t.prototype.setupOnce=function(){Error.stackTraceLimit=50,this._options.onerror&&($.log("Global Handler attached: onerror"),this._installGlobalOnErrorHandler()),this._options.onunhandledrejection&&($.log("Global Handler attached: onunhandledrejection"),this._installGlobalOnUnhandledRejectionHandler())},t.prototype._installGlobalOnErrorHandler=function(){var e=this
this._onErrorHandlerInstalled||(ht({callback:function(n){var r=n.error,o=Dt(),i=o.getIntegration(t),a=r&&!0===r.__sentry_own_request__
if(i&&!ye()&&!a){var s=o.getClient(),c=y(r)?e._eventFromIncompleteOnError(n.msg,n.url,n.line,n.column):e._enhanceEventWithInitialFrame(se(r,void 0,{attachStacktrace:s&&s.getOptions().attachStacktrace,rejection:!1}),n.url,n.line,n.column)
C(c,{handled:!1,type:"onerror"}),o.captureEvent(c,{originalException:r})}},type:"error"}),this._onErrorHandlerInstalled=!0)},t.prototype._installGlobalOnUnhandledRejectionHandler=function(){var e=this
this._onUnhandledRejectionHandlerInstalled||(ht({callback:function(n){var r=n
try{"reason"in n?r=n.reason:"detail"in n&&"reason"in n.detail&&(r=n.detail.reason)}catch(t){}var o=Dt(),i=o.getIntegration(t),s=r&&!0===r.__sentry_own_request__
if(!i||ye()||s)return!0
var c=o.getClient(),u=y(r)?e._eventFromIncompleteRejection(r):se(r,void 0,{attachStacktrace:c&&c.getOptions().attachStacktrace,rejection:!0})
u.level=a.Error,C(u,{handled:!1,type:"onunhandledrejection"}),o.captureEvent(u,{originalException:r})},type:"unhandledrejection"}),this._onUnhandledRejectionHandlerInstalled=!0)},t.prototype._eventFromIncompleteOnError=function(t,e,n,r){var o,i=d(t)?t.message:t
if(_(i)){var a=i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i)
a&&(o=a[1],i=a[2])}var s={exception:{values:[{type:o||"Error",value:i}]}}
return this._enhanceEventWithInitialFrame(s,e,n,r)},t.prototype._eventFromIncompleteRejection=function(t){return{exception:{values:[{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+t}]}}},t.prototype._enhanceEventWithInitialFrame=function(t,e,n,r){t.exception=t.exception||{},t.exception.values=t.exception.values||[],t.exception.values[0]=t.exception.values[0]||{},t.exception.values[0].stacktrace=t.exception.values[0].stacktrace||{},t.exception.values[0].stacktrace.frames=t.exception.values[0].stacktrace.frames||[]
var o=isNaN(parseInt(r,10))?void 0:r,i=isNaN(parseInt(n,10))?void 0:n,a=_(e)&&e.length>0?e:function(){try{return document.location.href}catch(t){return""}}()
return 0===t.exception.values[0].stacktrace.frames.length&&t.exception.values[0].stacktrace.frames.push({colno:o,filename:a,function:"?",in_app:!0,lineno:i}),t},t.id="GlobalHandlers",t}(),Ee=function(){function t(){this._ignoreOnError=0,this.name=t.id}return t.prototype._wrapTimeFunction=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
var r=e[0]
return e[0]=me(r,{mechanism:{data:{function:Y(t)},handled:!0,type:"instrument"}}),t.apply(this,e)}},t.prototype._wrapRAF=function(t){return function(e){return t(me(e,{mechanism:{data:{function:"requestAnimationFrame",handler:Y(t)},handled:!0,type:"instrument"}}))}},t.prototype._wrapEventTarget=function(t){var e=T(),n=e[t]&&e[t].prototype
n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&(K(n,"addEventListener",(function(e){return function(n,r,o){try{"function"==typeof r.handleEvent&&(r.handleEvent=me(r.handleEvent.bind(r),{mechanism:{data:{function:"handleEvent",handler:Y(r),target:t},handled:!0,type:"instrument"}}))}catch(t){}return e.call(this,n,me(r,{mechanism:{data:{function:"addEventListener",handler:Y(r),target:t},handled:!0,type:"instrument"}}),o)}})),K(n,"removeEventListener",(function(t){return function(e,n,r){var o=n
try{o=o&&(o.__sentry_wrapped__||o)}catch(t){}return t.call(this,e,o,r)}})))},t.prototype._wrapXHR=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
var r=this,o=["onload","onerror","onprogress","onreadystatechange"]
return o.forEach((function(t){t in r&&"function"==typeof r[t]&&K(r,t,(function(e){var n={mechanism:{data:{function:t,handler:Y(e)},handled:!0,type:"instrument"}}
return e.__sentry_original__&&(n.mechanism.data.handler=Y(e.__sentry_original__)),me(e,n)}))})),t.apply(this,e)}},t.prototype.setupOnce=function(){this._ignoreOnError=this._ignoreOnError
var t=T()
K(t,"setTimeout",this._wrapTimeFunction.bind(this)),K(t,"setInterval",this._wrapTimeFunction.bind(this)),K(t,"requestAnimationFrame",this._wrapRAF.bind(this)),"XMLHttpRequest"in t&&K(XMLHttpRequest.prototype,"send",this._wrapXHR.bind(this)),["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach(this._wrapEventTarget.bind(this))},t.id="TryCatch",t}(),xe=function(){function t(e){this.name=t.id,this._options=c({console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0},e)}return t.prototype._consoleBreadcrumb=function(t){var e={category:"console",data:{arguments:t.args,logger:"console"},level:a.fromString(t.level),message:S(t.args," ")}
if("assert"===t.level){if(!1!==t.args[0])return
e.message="Assertion failed: "+(S(t.args.slice(1)," ")||"console.assert"),e.data.arguments=t.args.slice(1)}Dt().addBreadcrumb(e,{input:t.args,level:t.level})},t.prototype._domBreadcrumb=function(t){var e
try{e=t.event.target?L(t.event.target):L(t.event)}catch(t){e="<unknown>"}0!==e.length&&Dt().addBreadcrumb({category:"ui."+t.name,message:e},{event:t.event,name:t.name})},t.prototype._xhrBreadcrumb=function(t){if(t.endTimestamp){if(t.xhr.__sentry_own_request__)return
Dt().addBreadcrumb({category:"xhr",data:t.xhr.__sentry_xhr__,type:"http"},{xhr:t.xhr})}else this._options.sentry&&t.xhr.__sentry_own_request__&&we(t.args[0])},t.prototype._fetchBreadcrumb=function(t){if(t.endTimestamp){var e=Dt().getClient(),n=e&&e.getDsn()
if(this._options.sentry&&n){var r=new Mt(n).getStoreEndpoint()
if(r&&-1!==t.fetchData.url.indexOf(r)&&"POST"===t.fetchData.method&&t.args[1]&&t.args[1].body)return void we(t.args[1].body)}t.error?Dt().addBreadcrumb({category:"fetch",data:c({},t.fetchData,{status_code:t.response.status}),level:a.Error,type:"http"},{data:t.error,input:t.args}):Dt().addBreadcrumb({category:"fetch",data:c({},t.fetchData,{status_code:t.response.status}),type:"http"},{input:t.args,response:t.response})}},t.prototype._historyBreadcrumb=function(t){var e=T(),n=t.from,r=t.to,o=I(e.location.href),i=I(n),a=I(r)
i.path||(i=o),o.protocol===a.protocol&&o.host===a.host&&(r=a.relative),o.protocol===i.protocol&&o.host===i.host&&(n=i.relative),Dt().addBreadcrumb({category:"navigation",data:{from:n,to:r}})},t.prototype.setupOnce=function(){var t=this
this._options.console&&ht({callback:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
t._consoleBreadcrumb.apply(t,p(e))},type:"console"}),this._options.dom&&ht({callback:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
t._domBreadcrumb.apply(t,p(e))},type:"dom"}),this._options.xhr&&ht({callback:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
t._xhrBreadcrumb.apply(t,p(e))},type:"xhr"}),this._options.fetch&&ht({callback:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
t._fetchBreadcrumb.apply(t,p(e))},type:"fetch"}),this._options.history&&ht({callback:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
t._historyBreadcrumb.apply(t,p(e))},type:"history"})},t.id="Breadcrumbs",t}()
function we(t){try{var e=JSON.parse(t)
Dt().addBreadcrumb({category:"sentry."+("transaction"===e.type?"transaction":"event"),event_id:e.event_id,level:e.level||a.fromString("error"),message:U(e)},{event:e})}catch(t){$.error("Error while adding sentry type breadcrumb")}}var Se=function(){function t(e){void 0===e&&(e={}),this.name=t.id,this._key=e.key||"cause",this._limit=e.limit||5}return t.prototype.setupOnce=function(){Rt((function(e,n){var r=Dt().getIntegration(t)
return r?r._handler(e,n):e}))},t.prototype._handler=function(t,e){if(!(t.exception&&t.exception.values&&e&&x(e.originalException,Error)))return t
var n=this._walkErrorTree(e.originalException,this._key)
return t.exception.values=p(n,t.exception.values),t},t.prototype._walkErrorTree=function(t,e,n){if(void 0===n&&(n=[]),!x(t[e],Error)||n.length+1>=this._limit)return n
var r=oe(ee(t[e]))
return this._walkErrorTree(t[e],e,p([r],n))},t.id="LinkedErrors",t}(),ke=T(),Oe=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(){Rt((function(e){if(Dt().getIntegration(t)){if(!ke.navigator||!ke.location)return e
var n=e.request||{}
return n.url=n.url||ke.location.href,n.headers=n.headers||{},n.headers["User-Agent"]=ke.navigator.userAgent,c({},e,{request:n})}return e}))},t.id="UserAgent",t}(),je=[new Xt,new Jt,new Ee,new xe,new be,new Se,new Oe],Te=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(e,n){e((function(e){var r=n().getIntegration(t)
if(r){try{if(r._shouldDropEvent(e,r._previousEvent))return null}catch(t){return r._previousEvent=e}return r._previousEvent=e}return e}))},t.prototype._shouldDropEvent=function(t,e){return!(!e||!this._isSameMessageEvent(t,e)&&!this._isSameExceptionEvent(t,e))},t.prototype._isSameMessageEvent=function(t,e){var n=t.message,r=e.message
return!(!n&&!r||n&&!r||!n&&r||n!==r||!this._isSameFingerprint(t,e)||!this._isSameStacktrace(t,e))},t.prototype._getFramesFromEvent=function(t){var e=t.exception
if(e)try{return e.values[0].stacktrace.frames}catch(t){return}else if(t.stacktrace)return t.stacktrace.frames},t.prototype._isSameStacktrace=function(t,e){var n=this._getFramesFromEvent(t),r=this._getFramesFromEvent(e)
if(!n&&!r)return!0
if(n&&!r||!n&&r)return!1
if(n=n,(r=r).length!==n.length)return!1
for(var o=0;o<r.length;o++){var i=r[o],a=n[o]
if(i.filename!==a.filename||i.lineno!==a.lineno||i.colno!==a.colno||i.function!==a.function)return!1}return!0},t.prototype._getExceptionFromEvent=function(t){return t.exception&&t.exception.values&&t.exception.values[0]},t.prototype._isSameExceptionEvent=function(t,e){var n=this._getExceptionFromEvent(e),r=this._getExceptionFromEvent(t)
return!!(n&&r&&n.type===r.type&&n.value===r.value&&this._isSameFingerprint(t,e)&&this._isSameStacktrace(t,e))},t.prototype._isSameFingerprint=function(t,e){var n=t.fingerprint,r=e.fingerprint
if(!n&&!r)return!0
if(n&&!r||!n&&r)return!1
n=n,r=r
try{return!(n.join("")!==r.join(""))}catch(t){return!1}},t.id="Dedupe",t}()
function Re(t){var e,n
return this._options={dsn:t.dsn,headers:{"Content-Type":"application/json"}},void 0!==window.fetch?this._transport=new le(this._options):this._transport=new fe(this._options),this._transport.url=(e=this._options.dsn,(n=new URL(e)).username="",n.toString()),this}Re.prototype.close=function(t){},Re.prototype.sendEvent=function(t){var e
return t.project=(e=this._options.dsn,new URL(e).username),this._transport.sendEvent({events:[t]})}
var Ie="prod",Ue={transport:Re,ingestUrl:"",ingestBasePath:"/report/2/",topic:"xp_amp_web_error_log",environment:"qa",debug:!1,integrations:[],ignoreErrors:[],sampleRate:1,filterHeadless:!0}
function Ne(t){var e=new URL(t.ingestUrl)
return e.pathname=t.ingestBasePath+t.topic,e.username=t.projectId,e.toString()}var De={init(t){var e,n=function(t){var e,n,r,o=(n=Ue,r=e=t,Object.keys(n).forEach((function(t){void 0===e[t]&&(r[t]=n[t])})),r)
return void 0===o.projectId&&(void 0!==o.project?o.projectId=o.project:console.warn("mt-errorkit project key is not set. Errors will be discarded.")),o.ingestUrl||(o.ingestUrl="https://xp-qa.apple.com",o.environment===Ie&&(o.ingestUrl="")),o}(t||{}),o=[].concat(je,function(t){if(Array.isArray(t))return r(t)}(e=n.integrations)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return r(t,e)
var n=Object.prototype.toString.call(t).slice(8,-1)
return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())
!1!==n.dedupe&&o.push(new Te),function(t){if(void 0===t&&(t={}),void 0===t.defaultIntegrations&&(t.defaultIntegrations=je),void 0===t.release){var e=T()
e.SENTRY_RELEASE&&e.SENTRY_RELEASE.id&&(t.release=e.SENTRY_RELEASE.id)}!function(t,e){!0===e.debug&&$.enable()
var n=Dt(),r=new t(e)
n.bindClient(r)}(ve,t)}({dsn:Ne(n),debug:n.debug,beforeSend:function(t){return function(t){return t.environment===Ie&&t.filterHeadless&&(void 0===navigator.userAgent||void 0===navigator.appVersion||void 0===navigator.plugins||void 0===navigator.languages||!0===navigator.webdriver||""===navigator.languages||0===navigator.plugins.length||/HeadlessChrome/.test(navigator.userAgent)||/headless/i.test(navigator.appVersion))}(n)?null:(t=function(t){return t.v=3,t.request&&t.request.headers&&(t.request.headers={}),t.breadcrumbs=t.breadcrumbs.filter((function(t){return"console"!==t.category})).slice(0,10),t}(t),n.beforeSend?n.beforeSend(t):t)},transport:n.transport,environment:n.environment,attachStacktrace:n.attachStacktrace,integrations:o,release:n.release,sampleRate:n.sampleRate,allowUrls:n.allowUrls,denyUrls:n.denyUrls,ignoreErrors:n.ignoreErrors})}}
e.default=De}}])
