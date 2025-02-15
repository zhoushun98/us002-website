"use strict";(self.webpackChunk_ember_auto_import_=self.webpackChunk_ember_auto_import_||[]).push([[26],{71026:function(e,t,n){n.r(t),n.d(t,{environment:function(){return a},eventRecorder:function(){return F},immediateEventRecorder:function(){return q},logger:function(){return D},network:function(){return E},setEventQueuePostIntervalEnabled:function(){return N}})
var s=n(76588),r=n(24178),u=n(32722),o=r.SC.attachDelegate,a={setDelegate:function(e){return o(this,e)},globalScope:function(){return window}},i={AJAX:"ajax",AJAX_SYNCHRONOUS:"ajaxSynchronous",IMAGE:"image",BEACON:"beacon"},v=r.vc.metricsDisabledOrDenylistedEvent,c=r.vc.removeDenylistedFields,l={},p=["dsId","consumerId"]
function f(e,t,n){var s=null
return n&&!v.call(u.Z,n.eventType,t)&&(c.call(u.Z,n,t),m(t,n),e.apply(null,Array.prototype.slice.call(arguments,1)),s=n),s}function d(e,t){l[e]=l[e]||{},l[e]=t}function Q(){l={}}function m(e,t){l[e]=l[e]||{},l[e].anonymous&&p.forEach((function(e){delete t[e]}))}var y=r.SC.attachDelegate,E={setDelegate:function(e){return y(this,e)},makeAjaxRequest:r.L5.makeAjaxRequest},g=r.SC.isString,h=r.SC.isFunction,A=r.vc.disabled
function I(){var e=navigator.userAgent
return/iPad|iPhone|iPod/.test(e)&&-1==e.indexOf("IEMobile")}function T(){return(0,s.RG)("mt-event-queue")}var S=i,b={eventQueues:{},postIntervalEnabled:!0,enqueueEvent:function(e,t){var n=null
if(e&&t){b.eventQueues=b.eventQueues||{},b.eventQueues[e]=b.eventQueues[e]||{},b.eventQueues[e].events=b.eventQueues[e].events||[],b.eventQueues[e].events.push(t),n=t
var s=u.Z.value("maxPersistentQueueSize",e)||100
b.trimEventQueues(b.eventQueues,s)}return n},trimEventQueues:function(e,t){var n=Object.keys(e)
n.length&&n.forEach((function(n){var s=e[n].events
s&&s.length&&s.length>t&&(T().warn("eventQueue overflow, deleting LRU events: size is: "+s.length+" which is over max size: "+t),e[n].events=s.slice(-t))}))},resetTopicQueue:function(e){b.eventQueues[e]&&(b.eventQueues[e].events=null)},resetTopicRetryAttempts:function(e){b.eventQueues[e]&&(b.eventQueues[e].retryAttempts=0)},scheduleNextTopicRetryAttempt:function(e){if(b.eventQueues[e]&&this.postIntervalEnabled){b.eventQueues[e].retryAttempts=b.eventQueues[e].retryAttempts||0,b.eventQueues[e].retryAttempts++
var t=Math.pow(2,b.eventQueues[e].retryAttempts)*u.Z.value("postFrequency",e)
b.resetTopicPostInterval(e),b.setTopicPostInterval(e,t)}},sendEvents:function(e,t){for(var n in b.eventQueues)b.sendEventsForTopic(n,e,t)},sendEventsForTopic:function(e,t,n){var s=b.eventQueues[e],r=u.Z.value("testExponentialBackoff",e),o=u.Z.value("metricsUrl",e),a=A.call(u.Z,e)
if(s&&o&&!a&&!r&&(!s.retryAttempts||!n))switch(b.resetTopicPostInterval(e),b.setTopicPostInterval(e,u.Z.value("postFrequency",e)),t){case S.IMAGE:b.sendEventsViaImage(e)
break
case S.BEACON:b.sendEventsViaBeacon(e)
break
case S.AJAX_SYNCHRONOUS:b.sendEventsViaAjax(e,!1)
break
default:b.sendEventsViaAjax(e,!0)}r&&b.scheduleNextTopicRetryAttempt(e)},sendEventsViaImage:function(e){if(b.eventQueues[e]){var t=k(e),n=-1==t.indexOf("?")?"?":"&",s=t+n+"responseType=image",r=b.eventQueues[e].events
r&&r.length&&r.forEach((function(t){var n=b.createQueryParams(t)
if(n){var r=s+"&"+n,u=new Image,o=b.eventQueues[e].properties
o&&o.anonymous&&u.setAttribute("crossOrigin","anonymous"),u.src=r}})),b.resetTopicQueue(e)}},createQueryParams:function(e){var t,n,s=""
return Object.keys(e).forEach((function(r,u,o){t=e[r],n=g(t)?t:JSON.stringify(t),s+=r+"="+encodeURIComponent(n),u<o.length-1&&(s+="&")})),s.length?s:null},sendEventsViaAjax:function(e,t){if(b.eventQueues[e]&&b.eventQueues[e].events){var n=C(b.eventQueues[e].events)
if(n){var s=k(e),r=O(e),u=function(){b.resetTopicQueue(e),b.resetTopicRetryAttempts(e)},o={async:t,timeout:r};(b.eventQueues[e].properties||{}).anonymous&&(o.withCredentials=!1),E.makeAjaxRequest(s,"POST",n,u,(function(t,n){n>=400&&n<500?u():b.scheduleNextTopicRetryAttempt(e)}),o)}}},sendEventsViaBeacon:function(e){if(r.SC.isFunction(navigator.sendBeacon)){var t=b.eventQueues[e]
if(t){var n=t.properties
if(n&&n.anonymous)return void(r.SC.isFunction(a.globalScope().fetch)&&!/Firefox/.test(navigator.userAgent)?b.sendEventsViaFetch(e,{keepalive:!0}):I()?b.sendEventsViaAjax(e,!1):b.sendEventsViaImage(e))
var s=C(t.events)
if(s){var u=k(e)
navigator.sendBeacon(u,s)||T().error("navigator.sendBeacon() was unable to queue the data for transfer"),b.resetTopicQueue(e)}}}else T().error("navigator.sendBeacon() is not available in the environment")},sendEventsViaFetch:function(e,t){var n=r.SC.isDefinedNonNull(t)?t.keepalive:null,s=b.eventQueues[e]
if(r.SC.isDefinedNonNull(s)){var u=C(s.events)
if(u){var o=s.properties||{},i=k(e)
a.globalScope().fetch(i,{method:"POST",body:u,credentials:!0===o.anonymous?"omit":"same-origin",keepalive:!r.SC.isDefinedNonNull(n)||n}),b.resetTopicQueue(e)}}},setTopicPostInterval:function(e,t){b.eventQueues[e]&&t&&this.postIntervalEnabled&&(this.resetTopicPostInterval(e),b.eventQueues[e].postIntervalToken=a.globalScope().setInterval((function(){T().debug("MetricsKit: triggering postIntervalTimer for "+e+" at "+(new Date).toString()),b.sendEventsForTopic.call(b,e)}),t))},resetTopicPostInterval:function(e){b.eventQueues[e]&&(a.globalScope().clearInterval(b.eventQueues[e].postIntervalToken),b.eventQueues[e].postIntervalToken=null)},resetQueuePostIntervals:function(){for(var e in b.eventQueues)b.resetTopicPostInterval(e)},setQueuePostIntervals:function(){for(var e in b.eventQueues){var t=b.eventQueues[e].events
t&&t.length&&b.setTopicPostInterval(e,u.Z.value("postFrequency",e))}},objectContainsValue:function(e,t){var n=!1
for(var s in e){var r=e[s]
if(e.hasOwnProperty(s)&&!h(r)&&r===t){n=!0
break}}return n},setProperties:function(e,t){b.eventQueues=b.eventQueues||{},b.eventQueues[e]=b.eventQueues[e]||{},b.eventQueues[e].properties=t}}
function P(){return b}function C(e){var t=null
if(e&&e.length){var n={deliveryVersion:"1.0"}
n.postTime=Date.now(),n.events=e
try{t=JSON.stringify(n)}catch(e){T().error("Error stringifying events as JSON: "+e)}}return t}function k(e){return u.Z.value("metricsUrl",e)+"/2/"+e}function O(e){var t=u.Z.value("requestTimeout",e)||1e4
return Math.min(t,u.Z.value("postFrequency",e))}function N(e){b.postIntervalEnabled=e,e?b.setQueuePostIntervals():b.resetQueuePostIntervals()}function R(e,t,n){A.call(u.Z,e)||(0===u.Z.value("postFrequency",e)&&(n=!0),b.enqueueEvent(e,t),n?b.sendEvents(S.AJAX,!0):!b.eventQueues[e].postIntervalToken&&b.postIntervalEnabled&&b.setTopicPostInterval(e,u.Z.value("postFrequency",e)))}function x(e,t){e?g(t)&&b.objectContainsValue(i,t)?b.sendEvents(t,!0):r.SC.isFunction(navigator.sendBeacon)?b.sendEvents(S.BEACON,!0):I()?b.sendEvents(S.AJAX_SYNCHRONOUS,!0):b.sendEvents(S.IMAGE,!0):b.sendEvents(S.AJAX,!0)}var w=r.SC.attachDelegate,F={_utResetQueue:function(){for(var e in P().eventQueues)P().resetTopicPostInterval(e)
P().eventQueues={}},SEND_METHOD:i,setDelegate:function(e){return w(this,e)},recordEvent:function(e,t,n){return f.apply(null,[R].concat(Array.prototype.slice.call(arguments)))},sendMethod:function(){return"javascript"},flushUnreportedEvents:function(e,t){x.apply(null,Array.prototype.slice.call(arguments))},setProperties:function(e,t){d(e,t),P().setProperties(e,t)},cleanup:function(){Q(),F._utResetQueue()}}
function j(e,t){var n=C([t])
if(n){var s=k(e),r={timeout:O(e)}
l[e]&&l[e].anonymous&&(r.withCredentials=!1),E.makeAjaxRequest(s,"POST",n,null,null,r)}}var q={recordEvent:function(e,t){return f.apply(null,[j].concat(Array.prototype.slice.call(arguments)))},sendMethod:function(){return"javascript"},setProperties:d,cleanup:Q},D=(0,s.RG)("mt-event-queue")}}])
