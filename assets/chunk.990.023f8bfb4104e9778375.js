"use strict";(self.webpackChunk_ember_auto_import_=self.webpackChunk_ember_auto_import_||[]).push([[990],{67990:function(e,t,n){n.r(t),n.d(t,{ClickstreamProcessor:function(){return we}})
var r=n(24178),i=n(32722),o=n(76588),s=function(){}
s.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},s.prototype.localStorageObject=r.tO.localStorageObject,s.prototype.sessionStorageObject=r.tO.sessionStorageObject
var a=function(){this.environment=new s,this.logger=(0,o.RG)("mt-client-constraints")},c={nonEmpty:function(e,t){return!!r.SC.isObject(t)&&t.hasOwnProperty(e)&&r.SC.isDefinedNonNullNonEmpty(t[e])},valueMatches:function(e,t,n){if(!r.SC.isObject(t))return!1
var i=t[e]
return t.hasOwnProperty(e)&&n.indexOf(i)>-1}},p="overrideFieldValue",u=function(){}
u.prototype.constrainedValue=function(e,t,n){var r=e&&e.hasOwnProperty(n)?e[n]:null
return this.applyConstraintRules(r,t)},u.prototype.applyConstraintRules=function(e,t){var n=e
return t&&t.blacklisted?n=null:t&&t.hasOwnProperty(p)&&(n=t.overrideFieldValue),n}
var l=r.Z_.exceptionString,h=function(e){this._constraintsInstance=e}
function d(e){var t,n=f(e=e||"").split("/")
return(t=-1===e.indexOf("//")?n[0]:n[2]).substring(t.indexOf("@")+1).split(":")[0]}function f(e){return(e=e||"").split("?")[0]}function y(e,t,n,i){var o=this.storageKey(i,n,t),s=this._constraintsInstance.system.environment,a=r.tO.objectFromStorage(s.localStorageObject(),o)||{}
return a.value=this.idString(a,t),!this.rulesHaveLifespan(t)||r.SC.isNumber(a.expirationTime)&&!this.timeExpired(a.expirationTime)||(a.expirationTime=this.expirationTime(t.lifespan)),r.tO.saveObjectToStorage(s.localStorageObject(),o,a),a.value}h.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},h.prototype.constrainedValue=function(e,t,n,r){throw l("field_actions.Base","constrainedValue")},h.prototype.performAction=function(e,t,n){var i=t&&r.SC.isDefined(t[e])?t[e]:null
return r.SC.isDefinedNonNull(n)&&!r.SC.isEmptyObject(n)&&(i=this.constrainedValue(i,n,t,e)),i}
var m={}
function v(e,t,n,r){var i=this.storageKey(r,n,t),o=m[i]
return o||(o=y.apply(this,arguments),m[i]=o),o}var g=function(){h.apply(this,arguments)};(g.prototype=Object.create(h.prototype)).constructor=g,g.prototype.SCOPE_STRATEGIES={ALL:"all",MAIN_DOMAIN:"mainDomain"},g.prototype.rulesHaveLifespan=function(e){return e=e||{},r.SC.isNumber(e.lifespan)},g.prototype.expirationTime=function(e){return e?Date.now()+e:null},g.prototype.storageKey=function(e,t,n){var r=this.scope(t,n)
return this.storageKeyPrefix(n,e)+(r?"_"+r:"")},g.prototype.storageKeyPrefix=function(e,t){return e&&r.SC.isString(e.storageKeyPrefix)&&e.storageKeyPrefix.length>0?e.storageKeyPrefix:"mtId_"+t},g.prototype.scope=function(e,t){var n,r,i,o,s=""
if(t&&(t.namespace&&(s+=t.namespace),t.scopeStrategy)){var a
switch(t.scopeStrategy){case this.SCOPE_STRATEGIES.MAIN_DOMAIN:r=(n=d(e[t.scopeFieldName]).split("."))[n.length-1],i=n[n.length-2],o=2,r&&2===r.length&&i&&(2===i.length||i in{com:!0,org:!0,net:!0,edu:!0,gov:!0})&&(o=3),a=n.slice(-1*o).join(".")||"unknownDomain"
break
case this.SCOPE_STRATEGIES.ALL:default:a=this.SCOPE_STRATEGIES.ALL}s.length&&(s+="_"),s+=a}return s},g.prototype.idString=function(e,t){var n=e?e.value:null,i=n
return(!n||r.SC.isNumber(e.expirationTime)&&this.timeExpired(e.expirationTime))&&(i=this.generateId(t)),i},g.prototype.generateId=function(e){var t=this.rawUUID(),n=null,i=null
return e&&(n=this.expirationTime(e.lifespan),i=e.tokenSeparator),(this.generatedIdMetadata(n)+this.idTokenSeparator()+t||"").split(this.idTokenSeparator()).map((function(e){var t=parseInt(e,16)
return r.Z_.convertNumberToBaseAlphabet(t,r.Z_.base61Alphabet)})).join(this.generatedIdSeparator(i))||"0"},g.prototype.rawUUID=function(){return r.Z_.uuid()},g.prototype.generatedIdMetadata=function(e){var t=[this.generatedIdVersion()]
return e&&t.push(e),t.map((function(e){return e.toString(16)})).join(this.idTokenSeparator())},g.prototype.generatedIdVersion=function(){return 4},g.prototype.idTokenSeparator=function(){return"-"},g.prototype.generatedIdSeparator=function(e){return e||"z"},g.prototype.timeExpired=function(e){return e<=Date.now()},g.prototype.constrainedValue=function(e,t,n,i){return n&&t&&!r.SC.isEmptyObject(t)&&(e=!0===t.persistIdForSession?v.apply(this,arguments):y.apply(this,arguments)),e}
var _=function(e,t){this._base=e,this._idAction=new g(t),this._idAction.setDelegate({storageKey:function(e,t,n){return this.storageKeyPrefix()+"_"+this.scope(t,n)}.bind(this._idAction),storageKeyPrefix:function(){return"mtClientId"}})}
_.prototype.constrainedValue=function(e,t){var n=t
t&&r.SC.isNumber(t.expirationPeriod)&&((n=r.SC.extend({},t)).lifespan=n.expirationPeriod,delete n.expirationPeriod)
var i=this._idAction.performAction("clientId",e,n)
return this._base.applyConstraintRules(i,t)}
var S=function(){h.apply(this,arguments)};(S.prototype=Object.create(h.prototype)).constructor=S,S.prototype.SCOPES={HOSTNAME:"hostname",FULL:"full",FULL_WITHOUT_PARAMS:"fullWithoutParams"},S.prototype.constrainedValue=function(e,t){if(e&&t&&t.scope)switch(t.scope){case this.SCOPES.HOSTNAME:e=d(e)
break
case this.SCOPES.FULL_WITHOUT_PARAMS:e=f(e)
case this.SCOPES.FULL:}return e}
var b=function(e){this._base=e,this._urlAction=new S}
b.prototype.constrainedValue=function(e,t){var n=this._urlAction.performAction("parentPageUrl",e,t)
return this._base.applyConstraintRules(n,t)}
var C=function(e){this.base=new u(e),this.clientId=new _(this.base,e),this.parentPageUrl=new b(this.base,e)},I=function(e){this._fieldHandlers=new C(e)}
function w(e,t,n,r){var i=e||{}
if(r=r||function(e,t,n){return e[n]||{}},t&&t[n]){var o,s,a=i[n]||{}
for(o in i[n]=a,t[n]){var c=r(a,t[n],o)
for(s in a[o]=c,t[n][o])c[s]=t[n][o][s]}}return i}I.prototype.applyConstraints=function(e,t){return t&&t.fieldConstraints&&(e=this.applyFieldConstraints(e,t.fieldConstraints)),e},I.prototype.applyFieldConstraints=function(e,t){if(t){var n,i,o,s={}
for(o in t)i=t[o],(e.hasOwnProperty(o)||!0===i.generateValue||i.hasOwnProperty(p))&&(n=o in this._fieldHandlers?this._fieldHandlers[o].constrainedValue(e,i):this._fieldHandlers.base.constrainedValue(e,i,o),s[o]=n)
for(o in s)e[o]=s[o]
e=r.BU.mergeAndCleanEventFields(e)}return e}
var D=function(e){this.treatment=new I(e)}
D.prototype.constraintsForEvent=function(e,t,n){if(!t)return null
var r="constraints.profiles."+t.constraintProfile(n),i=t.value(r,n),o=null
if(i&&i.precedenceOrderedRules){var s=this
o=i.precedenceOrderedRules.reduce((function(t,n){return s.eventMatchesRule(e,n)&&(t=s.updateRules(t,n)),t}),{})}return o},D.prototype.eventMatchesRule=function(e,t){var n=!1
return e&&t.filters&&("any"===t.filters?n=!0:r.SC.isObject(t.filters)&&(n=this.eventMatchesNonEmptyFields(e,t.filters.nonEmptyFields)&&this.eventMatchesFieldValues(e,t.filters.valueMatches))),n},D.prototype.eventMatchesNonEmptyFields=function(e,t){var n=!1
return e&&(n=!t||!r.SC.isArray(t)||t.every((function(t){return c.nonEmpty(t,e)}))),n},D.prototype.eventMatchesFieldValues=function(e,t){var n=!1
return e&&(n=!(t&&r.SC.isObject(t)&&!r.SC.isEmptyObject(t))||Object.keys(t).every((function(n){var r=t[n]
return c.valueMatches(n,e,r)}))),n},D.prototype.updateRules=function(e,t){return w(e,t,"fieldConstraints")}
var T=function(){}
T.prototype.performAction=function(e,t){return!0!==t?e:null}
var A=function(){}
A.prototype.performAction=function(e,t){return e&&r.SC.isArray(t)&&!r.SC.isEmptyArray(t)?(e=r.SC.extend({},e),t.forEach((function(t){delete e[t]})),r.SC.isEmptyObject(e)?null:e):e}
var O=function(){}
O.prototype.performAction=function(e,t){if(!e||!r.SC.isArray(t)||r.SC.isEmptyArray(t))return e
var n={}
return Object.keys(e).forEach((function(r){t.indexOf(r)>-1&&(n[r]=e[r])})),r.SC.isEmptyObject(n)?null:n}
var N=function(){this._actions={},this._actions.blacklisted=new T,this._actions.blacklistedFields=new A,this._actions.whitelistedFields=new O}
N.prototype.getAction=function(e){return this._actions[e]}
var P=function(){h.apply(this,arguments)};(P.prototype=Object.create(h.prototype)).constructor=P,P.prototype.constrainedValue=function(e,t){var n=t?t.precision:0,i=t?t.buckets:null
if(r.SC.isDefinedNonNullNonEmpty(i)){var o=(i=i.slice().sort((function(e,t){return e.start-t.start})))[function(e,t){var n=-1
if(!r.SC.isDefinedNonNull(t)||0===e.length||r.SC.isDefinedNonNull(e[0])&&t<e[0].start)return-1
if(e[e.length-1].start<t)n=e.length-1
else for(var i=0;i<e.length;i++){var o=e[i].start
if(o===t){n=i
break}if(o>t){n=i-1
break}}return n}(i,e)]
r.SC.isDefinedNonNull(o)&&(e=o.value)}else r.SC.isNumber(e)&&r.SC.isNumber(n)&&n>0&&(e=Math.floor(e/n)*n)
return e}
var K=function(e){e=e||{},this._nextRotationTime=e.nextRotationTime||Number.POSITIVE_INFINITY,this._storageKey=e.namespace||"mt_serial_number",this._initialSerialNumber=e.initialSerialNumber||0,this._rotationPeriod=e.rotationPeriod||Number.POSITIVE_INFINITY}
K.prototype.setDelegate=function(e){r.SC.attachDelegate(this,e)},K.prototype.localStorageObject=function(){return r.tO.localStorageObject()},K.prototype.getNextSerialNumber=function(e){var t=this._storageKey,n=this._getCurrentSerialNumberData(t),i=n.sn
return e=r.SC.isNumber(e)?e:1,i=parseInt(i,10),isNaN(i)&&(i=this._initialSerialNumber),i=this._increaseSerialNumber(i,e),n.sn=i,r.tO.saveObjectToStorage(this.localStorageObject(),this._storageKey,n),i},K.prototype.resetSerialNumber=function(){var e=r.tO.objectFromStorage(this.localStorageObject(),this._storageKey)
r.SC.isDefinedNonNull(e)&&this._resetSerialNumber(e.exp)},K.prototype.getTime=function(){return Date.now()},K.prototype._increaseSerialNumber=function(e,t){return e+t},K.prototype._getCurrentSerialNumberData=function(e){var t,n,i=r.tO.objectFromStorage(this.localStorageObject(),e)
for(i?(t=i.exp,t=parseInt(t,10),i.exp=t=isNaN(t)?this._nextRotationTime:t):t=this._nextRotationTime-this._rotationPeriod;!i||this.getTime()>=t;)t=n=t+this._rotationPeriod,i=this._resetSerialNumber(n)
return i},K.prototype._resetSerialNumber=function(e){var t={}
return t.exp=e,t.sn=this._initialSerialNumber,r.tO.saveObjectToStorage(this.localStorageObject(),this._storageKey,t),t}
var E=function(){h.apply(this,arguments),this._storage=this._constraintsInstance.system.environment.localStorageObject(),this._precisionEndTimeCache={},this._serialNumberGenerator=null};(E.prototype=Object.create(h.prototype)).constructor=E,E.prototype.constrainedValue=function(e,t,n,i){var o=e
if(r.SC.isNumber(e)&&r.SC.isObject(t)&&r.SC.isNumber(t.precision)&&t.precision>0){var s=this._computePrecisionStartTime(e,t)
this._serialNumberGenerator=new K({namespace:this._persistentStorageKey(t,i),nextRotationTime:s+t.precision,rotationPeriod:t.precision}),this._serialNumberGenerator.setDelegate(this._constraintsInstance.system.environment),this._serialNumberGenerator.setDelegate({getTime:function(){return e}})
var a=this._serialNumberGenerator.getNextSerialNumber()
o=this._computeTimestamp(s,a),this._serialNumberGenerator=null}return o},E.prototype._computeTimestamp=function(e,t){return e+t},E.prototype._persistentStorageKey=function(e,t){var n=e.namespace?"_"+e.namespace:""
return(e.storageKeyPrefix||"mtTimestamp")+n+"_"+t},E.prototype._computePrecisionStartTime=function(e,t){var n=t.precision
return Math.floor(e/n)*n}
var F=function(e){this.actions={},this.actions.idGenerator=new g(e),this.actions.numberDeres=new P(e),this.actions.timeDeres=new E(e),this.actions.urlDeres=new S(e)}
F.prototype.getAction=function(e){return this.actions[e]}
var x=function(e){this._eventActions=new N,this._fieldActions=new F(e)}
x.prototype.applyConstraints=function(e,t){var n=e
if(t&&!r.SC.isEmptyObject(t)){if(t.fieldActions&&!r.SC.isEmptyObject(t.fieldActions)){var i=this,o=Object.keys(t.fieldActions).reduce((function(e,r){var o=t.fieldActions[r]
if(o){var s=o.treatmentType,a=i._fieldActions.getAction(s)
if(o.blacklisted)e[r]=null
else if(o.hasOwnProperty(p))e[r]=o.overrideFieldValue
else if(a){var c=a.performAction(r,n,o)
e[r]=c}}return e}),{})
if(!r.SC.isEmptyObject(o)){var s=r.SC.extend({},n,o)
n=r.BU.mergeAndCleanEventFields(s)}}t.eventActions&&!r.SC.isEmptyObject(t.eventActions)&&Object.keys(t.eventActions).forEach((function(e){var r=this._eventActions.getAction(e)
if(r){var i=t.eventActions[e]
n=r.performAction(n,i)}}),this)}return n}
var M=function(e){this._constraintsInstance=e,this.treatment=new x(e)}
M.prototype._combineTreatments=function(e,t,n){var i=[]
return r.SC.isArray(e)&&e.forEach((function(e){var r="treatmentProfiles."+e,o=t.value(r,n)
o&&o.treatments&&(i=i.concat(o.treatments))})),i},M.prototype.constraintsForEvent=function(e,t,n){if(!t)return null
var i=this,o=t.constraintProfiles(n)
if(!r.SC.isDefinedNonNull(o)){var s=t.constraintProfile(n)
r.SC.isDefinedNonNull(s)&&(o=[s])}if(!r.SC.isDefinedNonNull(o))return null
if(!r.SC.isArray(o))throw new TypeError('"constraintProfiles" should be an Array, but got: '+(o?o.constructor:o))
var a=this._combineTreatments(o,t,n)
if(0===a.length)throw new SyntaxError("The constraintProfiles: "+o.join(", ")+" are not found in the topic config")
return a.reduce((function(t,n){return i.eventMatchesTreatment(e,n)&&(t=function(e,t){var n,i,o=e||{}
return function(e,t){e.eventActions||(e.eventActions={})
var n=e.eventActions,i=t.eventActions
i&&Object.keys(i).reduce((function(e,t){var n=e[t],o=i[t]
return r.SC.isArray(n)?r.SC.isArray(o)&&o.forEach((function(e){-1===n.indexOf(e)&&n.push(e)})):r.SC.isArray(o)?e[t]=o.slice():r.SC.isObject(o)||r.SC.isFunction(o)||(e[t]=o),e}),n)}(o,t),i=t,(n=o).fieldActions||(n.fieldActions={}),w(n,i,"fieldActions",(function(e,t,n){return e[n]&&e[n].treatmentType===t[n].treatmentType?e[n]:{}})),o}(t,n)),t}),null)},M.prototype.eventMatchesTreatment=function(e,t){var n=t.filters
if(n&&r.SC.isString(n))return"any"===n
if(!r.SC.isDefinedNonNull(n)||0===n.length)throw new SyntaxError("Unable to find the filter in \n"+JSON.stringify(t))
return Object.keys(n).every((function(i){var o=n[i]
if(o&&r.SC.isString(o))return!1
if(!o||!r.SC.isObject(o)||r.SC.isEmptyObject(o))throw new SyntaxError("Invalid filter object for field ("+i+") in \n"+JSON.stringify(t))
return Object.keys(o).every((function(n){var r=o[n]
if(c[n])return c[n](i,e,r)
throw new SyntaxError("Unable to find the filter ("+n+") for field ("+i+")in \n"+JSON.stringify(t))}))}))}
var k={constraintProfile:function(e){return this.value("constraints.defaultProfile",e)},constraintProfiles:function(e){return this.value("defaultTreatmentProfiles",e)}},V=function(e,t){if(n=e,i=!0,(i&=r.SC.isDefinedNonNull(n))&&(i&=!r.SC.isEmptyObject(n),i&=r.SC.isFunction(n.initialized),i&=r.SC.isFunction(n.value),i&=r.SC.isFunction(n.constraintProfile)),!i)throw new Error('The topic config is not a valid instance of "mt-client-config".')
var n,i
this._isInitialized=!1,this._topicConfig=e,this._constraintGenerator=null,this.system=new a,r.SC.setDelegates(this.system,t||{})}
V.prototype._getConstraintGenerator=function(){var e=this._topicConfig
return this._constraintGenerator&&this._isInitialized||(this._isInitialized=e.initialized(),function(e){return r.SC.isDefinedNonNull(e.value("treatmentProfiles"))}(e)?this._constraintGenerator=new M(this):this._constraintGenerator=new D(this)),this._constraintGenerator},V.prototype.constraintsForEvent=function(e,t){return this._getConstraintGenerator().constraintsForEvent(e,this._topicConfig,t)},V.prototype.applyConstraintTreatments=function(e,t){if(void 0===t)try{t=this.constraintsForEvent(e)}catch(e){return this.system.logger.warn("An error occupied while applying constraints: "+e.message||0),null}return this._getConstraintGenerator().treatment.applyConstraints(e,t)}
var H=V,j="7.3.5",R={mtName:function(){return"mt-metricskit"},mtVersion:function(){return j}},B={attachDelegateInfo:function(e){r.SC.extend(e,R)}},U={treatmentProfiles:{AMPWeb:{treatments:[{filters:"any",fieldActions:{clientId:{treatmentType:"idGenerator",storageKeyPrefix:"mtClientId",namespace:"AMPWeb_isSignedOut",lifespan:864e5}}},{filters:{isSignedIn:{valueMatches:[!0]}},fieldActions:{clientId:{treatmentType:"idGenerator",storageKeyPrefix:"mtClientId",namespace:"AMPWeb_isSignedIn",lifespan:15552e6}}}]},AMPFunnel:{treatments:[{filters:"any",eventActions:{blacklistedFields:["mtClientId","mtRequestId","pliIds","userAgent","screenHeight","screenWidth","windowInnerHeight","windowInnerWidth","windowOuterHeight","windowOuterWidth"]},fieldActions:{eventTime:{treatmentType:"timeDeres",precision:864e5},clientId:{treatmentType:"idGenerator",storageKeyPrefix:"mtId_clientId_unidentified",lifespan:15552e6}}}]},strict:{treatments:[{filters:"any",fieldActions:{consumerId:{blacklisted:!0},dsId:{blacklisted:!0},clientId:{treatmentType:"idGenerator",storageKeyPrefix:"mtClientId",scopeFieldName:"parentPageUrl",scopeStrategy:"mainDomain",lifespan:864e5},parentPageUrl:{treatmentType:"urlDeres",scope:"hostname"}}},{filters:{eventType:{valueMatches:["click"]},actionType:{valueMatches:["signUp"]}},fieldActions:{parentPageUrl:{treatmentType:"urlDeres",scope:"fullWithoutParams"}}},{filters:{eventType:{valueMatches:["dialog"]},dialogType:{valueMatches:["upsell"]},result:{valueMatches:["upsell"]}},fieldActions:{parentPageUrl:{treatmentType:"urlDeres",scope:"fullWithoutParams"}}},{filters:{userType:{valueMatches:["signedIn"]}},fieldActions:{clientId:{treatmentType:"idGenerator",storageKeyPrefix:"mtClientId",scopeStrategy:"all"}}},{filters:{userType:{valueMatches:["signedIn"]},eventType:{valueMatches:["click","dialog","media","search"]}},fieldActions:{clientId:{blacklisted:!0},consumerId:{blacklisted:!1},dsId:{blacklisted:!1}}},{filters:{userType:{valueMatches:["signedIn"]},eventType:{valueMatches:["page","impressions"]},pageHistory:{nonEmpty:!0}},fieldActions:{clientId:{blacklisted:!0},consumerId:{blacklisted:!1},dsId:{blacklisted:!1}}}]}}},G={xp_its_music_main:{treatmentProfiles:{AMPWeb:{treatments:[{filters:"any",fieldActions:{clientId:{treatmentType:"idGenerator",storageKeyPrefix:"mtClientId",namespace:"AMPWeb_isSignedOut",lifespan:864e5,persistIdForSession:!0},analyticsClientId:{treatmentType:"idGenerator",namespace:"AMPWeb_isSignedOut",lifespan:864e5,persistIdForSession:!0}}},{filters:{isSignedIn:{valueMatches:[!0]}},fieldActions:{clientId:{treatmentType:"idGenerator",storageKeyPrefix:"mtClientId",namespace:"AMPWeb_isSignedIn",lifespan:15552e6,persistIdForSession:!0},analyticsClientId:{treatmentType:"idGenerator",namespace:"AMPWeb_isSignedIn",lifespan:15552e6,persistIdForSession:!0}}}]}}},xp_amp_tv_main:{treatmentProfiles:{AMPWeb:{treatments:[{filters:"any",fieldActions:{clientId:{blacklisted:!0}}},{filters:{isSignedIn:{valueMatches:[!1]}},fieldActions:{clientId:{treatmentType:"idGenerator",namespace:"AMPWeb_isSignedOut",lifespan:864e5}}}]}}},xp_amp_tv_unidentified:r.SC.extend({},U,{blacklistedFields:["consumerId"]}),default_constraints:U}
r.SC.attachMethods(i.Z,r.vc,i.Z)
var W={CLIENT_EVENT_ID:"clientEventId",CONSUMER_ID:"consumerId",CONSUMER_NS:"consumerNs",DELEGATE_APP:"delegateApp",EVENT_VERSION:"eventVersion",STOREFRONT_COUNTRY_CODE:"storeFrontCountryCode"},L=r.Z_.exceptionString,Z=["app","appVersion","capacityData","capacityDataAvailable","capacityDisk","capacitySystem","capacitySystemAvailable","connectionType","dsId","hostApp","osVersion","pageUrl","pixelRatio","resourceRevNum","screenHeight","screenWidth","storeFrontHeader","userAgent","userType","windowInnerHeight","windowInnerWidth","windowOuterHeight","windowOuterWidth"],z=["consumerId","consumerNs","cookie","delegateApp","environmentInstance","hardwareBrand","hardwareFamily","hardwareModel","hostAppVersion","os","osBuildNumber","osLanguages","parentPageUrl","storeFrontCountryCode"],q=!1,J=function(){},Y=function e(){q||(q=!0,Z.forEach((function(t){e.prototype[t]=function(){throw L("metrics.system.environment",t)}})),z.forEach((function(t){e.prototype[t]=J})))}
Y.prototype.setDelegate=function(e){return r.Qk.setDelegate(e),r.SC.attachDelegate(this,e)},Y.prototype.localStorageObject=r.tO.localStorageObject,Y.prototype.sessionStorageObject=r.tO.sessionStorageObject
var Q=function(){}
Q.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},Q.prototype.recordEvent=function(e,t){throw r.Z_.exceptionString("metrics.system.event_recorder","recordEvent")},Q.prototype.sendMethod=function(){throw r.Z_.exceptionString("metrics.system.event_recorder","sendMethod")},Q.prototype.flushUnreportedEvents=function(e){}
var X=(0,o.RG)("mt-metricskit"),$=function(){for(var e in this.environment=new Y,this.eventRecorder=new Q,this.logger=X,this)B.attachDelegateInfo(this[e])},ee=function(e){this._metricsKit=e}
ee.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},ee.prototype.metricsData=function(e,t,n){return this._metricsKit.eventHandlers.base.processMetricsData.apply(this,arguments)},ee.prototype.knownFields=function(){return["eventType","eventVersion","type"]},ee.prototype.eventType=function(e){return"account"},ee.prototype.eventVersion=function(e){return e&&e.eventVersion||1}
var te=W,ne=function(e){this._metricsKit=e}
ne.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},ne.prototype.metricsData=function(e,t,n){var r=Array.prototype.slice.call(arguments),i=this._metricsKit.config.value("metricsBase")
return i&&r.push(i),this.processMetricsData.apply(this,r)},ne.prototype.processMetricsData=function(e,t,n){var r=null,i="function"==typeof this.eventType?this.eventType():null,o=this._metricsKit.config,s=this._metricsKit.eventHandlers.base,a=this._metricsKit.utils,c=this._metricsKit._constraints
if(!o.metricsDisabledOrBlacklistedEvent(i)){var p=this!==s,u="function"!=typeof this.mtIncludeBaseFields||this.mtIncludeBaseFields(),l=Array.prototype.slice.call(arguments,3)
if(p&&u){var h=s.metricsData.apply(s,arguments)
l=[h].concat(l)}r=a.eventFields.processMetricsData(this,this.knownFields(),e,t,n,l),p&&(r=c.applyConstraintTreatments(r),o.removeBlacklistedFields(r),o.applyDeRes(r))}return r},ne.prototype.knownFields=function(){return["app","appVersion","baseVersion","capacityData","capacityDataAvailable","capacityDisk","capacitySystem","capacitySystemAvailable","connection","constraintProfile","constraintProfiles",te.CONSUMER_ID,te.CONSUMER_NS,te.CLIENT_EVENT_ID,"clientId",te.DELEGATE_APP,"dsId","environmentInstance","eventTime","isSignedIn","hardwareBrand","hardwareFamily","hardwareModel","hostApp","hostAppVersion","os","osBuildNumber","osVersion","page","pageContext","pageDetails","pageId","pageType","pageUrl","parentPageUrl","pixelRatio","resourceRevNum","screenHeight","screenWidth",te.STOREFRONT_COUNTRY_CODE,"storeFrontHeader","timezoneOffset","userAgent","userType","windowInnerHeight","windowInnerWidth","windowOuterHeight","windowOuterWidth","xpPostFrequency","xpSendMethod","xpVersionMetricsKit","xpDelegatesInfo"]},ne.prototype.app=function(e){var t=this._metricsKit.system.environment
return e&&e.app||t.app()},ne.prototype.appVersion=function(e){var t=this._metricsKit.system.environment
return e&&e.appVersion||t.appVersion()},ne.prototype.baseVersion=function(e){return 1},ne.prototype.capacityData=function(e){var t=this._metricsKit.system.environment
return e&&e.capacityData||t.capacityData()},ne.prototype.capacityDataAvailable=function(e){var t=this._metricsKit.system.environment
return e&&e.capacityDataAvailable||t.capacityDataAvailable()},ne.prototype.capacityDisk=function(e){var t=this._metricsKit.system.environment
return e&&e.capacityDisk||t.capacityDisk()},ne.prototype.capacitySystem=function(e){var t=this._metricsKit.system.environment
return e&&e.capacitySystem||t.capacitySystem()},ne.prototype.capacitySystemAvailable=function(e){var t=this._metricsKit.system.environment
return e&&e.capacitySystemAvailable||t.capacitySystemAvailable()},ne.prototype.connection=function(e){var t=this._metricsKit.system.environment
return e&&e.connection||t.connectionType()},ne.prototype.constraintProfile=function(e){var t=this._metricsKit.config
return e&&e.constraintProfile||t.constraintProfile()},ne.prototype.constraintProfiles=function(e){var t=this._metricsKit.config
return e&&e.constraintProfiles||t.constraintProfiles()},ne.prototype.consumerId=function(e){var t=this._metricsKit.system.environment
return e&&e[te.CONSUMER_ID]||t.consumerId()},ne.prototype.consumerNs=function(e){var t=this._metricsKit.system.environment
return e&&e[te.CONSUMER_NS]||t.consumerNs()},ne.prototype.clientEventId=function(e){var t=e&&e[te.CLIENT_EVENT_ID]
return t||(r.Z_.cryptoRandomBase62String&&(t=r.Z_.cryptoRandomBase62String(!0)),t||(t=r.Z_.uuid())),t},ne.prototype.clientId=function(e){var t,n=this._metricsKit.config
return e&&e.clientId?t=e.clientId:n.value("ignoreClientIdCookie")||(t=r.Qk.get("xp_ci")),t},ne.prototype.delegateApp=function(e){var t=this._metricsKit.system.environment
return e&&e[te.DELEGATE_APP]||t.delegateApp()},ne.prototype.dsId=function(e){var t=this._metricsKit.system.environment
return e&&e.dsId||t.dsId()},ne.prototype.isSignedIn=function(e){return e&&"isSignedIn"in e?e.isSignedIn:!!this.dsId(e)},ne.prototype.eventTime=function(e){return e&&e.eventTime||Date.now()},ne.prototype.hardwareBrand=function(e){var t=this._metricsKit.system.environment
return e&&e.hardwareBrand||t.hardwareBrand()},ne.prototype.hardwareFamily=function(e){var t=this._metricsKit.system.environment
return e&&e.hardwareFamily||t.hardwareFamily()},ne.prototype.hardwareModel=function(e){var t=this._metricsKit.system.environment
return e&&e.hardwareModel||t.hardwareModel()},ne.prototype.hostApp=function(e){var t=this._metricsKit.system.environment
return e&&e.hostApp||t.hostApp()},ne.prototype.hostAppVersion=function(e){var t=this._metricsKit.system.environment
return e&&e.hostAppVersion||t.hostAppVersion()},ne.prototype.os=function(e){var t=this._metricsKit.system.environment
return e&&e.os||t.os()},ne.prototype.osBuildNumber=function(e){var t=this._metricsKit.system.environment
return e&&e.osBuildNumber||t.osBuildNumber()},ne.prototype.osVersion=function(e){var t=this._metricsKit.system.environment
return e&&e.osVersion||t.osVersion()},ne.prototype.page=function(e){if(!e)throw"No data provided to event_handlers/base page function"
if(e.page)return e.page
if(this.pageType(e)&&this.pageId(e)){var t=this._metricsKit.config
return this.pageType(e)+t.value("compoundSeparator")+this.pageId(e)}},ne.prototype.pageContext=function(e){return e&&e.pageContext},ne.prototype.pageDetails=function(e){return e&&e.pageDetails},ne.prototype.pageId=function(e){return e&&e.pageId},ne.prototype.pageType=function(e){return e&&e.pageType},ne.prototype.pageUrl=function(e){var t=this._metricsKit.system.environment
return e&&e.pageUrl||t.pageUrl()},ne.prototype.parentPageUrl=function(e){var t=this._metricsKit.system.environment
return e&&e.parentPageUrl||t.parentPageUrl()},ne.prototype.pixelRatio=function(e){var t=this._metricsKit.system.environment
return e&&e.pixelRatio||t.pixelRatio()},ne.prototype.resourceRevNum=function(e){var t=this._metricsKit.system.environment
return e&&e.resourceRevNum||t.resourceRevNum()},ne.prototype.screenHeight=function(e){var t=this._metricsKit.system.environment
return e&&e.screenHeight||t.screenHeight()},ne.prototype.screenWidth=function(e){var t=this._metricsKit.system.environment
return e&&e.screenWidth||t.screenWidth()},ne.prototype.storeFrontCountryCode=function(e){var t=this._metricsKit.system.environment
return e&&e[te.STOREFRONT_COUNTRY_CODE]||t.storeFrontCountryCode()},ne.prototype.storeFrontHeader=function(e){var t=this._metricsKit.system.environment
return e&&e.storeFrontHeader||t.storeFrontHeader()},ne.prototype.timezoneOffset=function(e){return e&&e.timezoneOffset||(new Date).getTimezoneOffset()},ne.prototype.userAgent=function(e){var t=this._metricsKit.system.environment
return e&&e.userAgent||t.userAgent()},ne.prototype.userType=function(e){var t=this._metricsKit.system.environment
return e&&e.userType||t.userType()},ne.prototype.windowInnerHeight=function(e){var t=this._metricsKit.system.environment
return e&&e.windowInnerHeight||t.windowInnerHeight()},ne.prototype.windowInnerWidth=function(e){var t=this._metricsKit.system.environment
return e&&e.windowInnerWidth||t.windowInnerWidth()},ne.prototype.windowOuterHeight=function(e){var t=this._metricsKit.system.environment
return e&&e.windowOuterHeight||t.windowOuterHeight()},ne.prototype.windowOuterWidth=function(e){var t=this._metricsKit.system.environment
return e&&e.windowOuterWidth||t.windowOuterWidth()},ne.prototype.xpPostFrequency=function(e){var t=this._metricsKit.config
return e&&e.xpPostFrequency||t.value("postFrequency")},ne.prototype.xpViewablePercentage=function(e){var t=this._metricsKit.config
return e&&e.xpViewablePercentage||t.value("impressions.viewablePercentage")},ne.prototype.xpSendMethod=function(e){var t=this._metricsKit.system
return e&&e.xpSendMethod||t.eventRecorder.sendMethod()},ne.prototype.xpVersionMetricsKit=function(){return j},ne.prototype.xpDelegatesInfo=function(){var e=r.GP.getStoredDelegateObject(this)
return e&&e.delegates||void 0}
var re=function(e){this._metricsKit=e}
re.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},re.prototype.metricsData=function(e,t,n){var r=this._metricsKit.eventHandlers.base
return r.processMetricsData.apply(this,arguments)},re.prototype.knownFields=function(){return["eventType","eventVersion"]},re.prototype.eventType=function(e){return"buyConfirmed"},re.prototype.eventVersion=function(e){return e&&e.eventVersion||1},re.prototype.createClientBuyId=function(){var e=null,t=this._metricsKit.system.environment,n=t.sessionStorageObject().getItem("mtMetricsKit_previousClientBuyId")
return e=++n,n||(this._metricsKit.system.logger.warn("Metrics: buyConfirmed.createClientBuyId: clientBuyId did not exist or was of incorrect type, reset to 1."),e=1),t.sessionStorageObject().setItem("mtMetricsKit_previousClientBuyId",e),e},re.prototype.clientBuyIdQueryParamString=function(e){return"&clientBuyId="+e},re.prototype.metricsBuyParamsString=function(e,t,n,i){var o,s,a=this._metricsKit.eventHandlers.base,c=this._metricsKit.eventHandlers.page,p=Array.prototype.slice.call(arguments,4),u=c.pageHistory(),l=a.clientId()
return Array.isArray(u)?u.length>=2&&(o=u[u.length-2]):this._metricsKit.system.logger.warn("MetricsKit: metricsBuyParamsString: pageHistory is not an Array"),s={mtApp:a.app(),mtEventTime:Date.now(),mtHardwareBrand:a.hardwareBrand(),mtHardwareFamily:a.hardwareFamily(),mtHardwareModel:a.hardwareModel(),mtHostApp:a.hostApp(),mtHostAppVersion:a.hostAppVersion(),mtOs:a.os(),mtOsBuildNumber:a.osBuildNumber(),mtOsVersion:a.osVersion(),mtPageId:e,mtPageType:t,mtPageContext:n,mtTopic:i||"xp_its_main",mtPrevPage:o,mtRequestId:r.Z_.uuid(),mtClientId:l},r.SC.extend.apply(r.SC,[s].concat(p)),r.Z_.paramString(s)},re.prototype.cacheMetricsBuyData=function(e,t){var n=this._metricsKit.system.environment
if(2!=arguments.length)this._metricsKit.system.logger.error("buyConfirmed.cacheMetricsBuyData(): function invoked with incorrect number of parameters. Perhaps you meant to retrieve cached data instead of setting it, which would be a call to uncacheMetricsBuyData(clientBuyId)?")
else{var r=JSON.stringify(t)
n.sessionStorageObject().setItem("mtMetricsKit_metricsBuyData_for_clientBuyId_"+e,r)}},re.prototype.uncacheMetricsBuyData=function(e){var t=null,n=this._metricsKit.system.environment
if(1!=arguments.length)this._metricsKit.system.logger.error("buyConfirmed.uncacheMetricsBuyData(): function invoked with incorrect number of parameters. Perhaps you meant to set cached data instead of retrieving it, which would be a call to cacheMetricsBuyData(clientBuyId, metricsBuyData)?")
else{var r=n.sessionStorageObject().getItem("mtMetricsKit_metricsBuyData_for_clientBuyId_"+e)
r&&(t=JSON.parse(r),n.sessionStorageObject().removeItem("mtMetricsKit_metricsBuyData_for_clientBuyId_"+e))}return t},re.prototype.buyFailureOccurred=function(e){var t=this.uncacheMetricsBuyData(e)
t&&(t.detoured=!0,this.cacheMetricsBuyData(e,t))}
var ie=function(e){var t=null
try{t=JSON.parse(e)}catch(e){X.error("MetricsKit: error parsing click data - "+e)}return t},oe=function(e){this._metricsKit=e}
oe.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},oe.prototype.metricsData=function(e,t,n,r){var i=[e,t,n],o=this._metricsKit.eventHandlers.base,s=this._metricsKit.utils
return r&&(i.push({location:s.eventFields.buildLocationStructure(r,this.locationDataForElement)}),i.push(this.dataForElement(r)||{})),i=i.concat(Array.prototype.slice.call(arguments,4)),o.processMetricsData.apply(this,i)},oe.prototype.knownFields=function(){return["actionContext","actionDetails","actionType","actionUrl","eventType","eventVersion","impressions","location","targetId","targetType","positionX","positionY","xpViewablePercentage"]},oe.prototype.dataForElement=function(e){var t=null
if(e&&r.SC.isFunction(e.hasAttribute)&&r.SC.isFunction(e.getAttribute)){var n=this.dataAttribute()
e.hasAttribute(n)&&(t=ie(e.getAttribute(n)))}return t},oe.prototype.dataAttribute=function(){return"data-metrics-click"},oe.prototype.locationDataForElement=function(e){var t,n,r,i=e.parentNode,o=0,s=null
if(e.hasAttribute&&e.hasAttribute("data-metrics-location")&&(s=ie(e.getAttribute("data-metrics-location"))).locationType){if(i){t=i.childNodes
for(var a=0;a<t.length;a++)if((r=(n="function"==typeof t.item&&t.item(a)||t[a]).hasAttribute&&n.hasAttribute("data-metrics-location")?ie(n.getAttribute("data-metrics-location")):void 0)?r.locationType:void 0){if(n===e)break
o++}}s.locationPosition=o}return s},oe.prototype.eventType=function(e){return"click"},oe.prototype.eventVersion=function(e){return e&&e.eventVersion||4},oe.prototype.impressions=function(e){return e?e.impressions:void 0},oe.prototype.xpViewablePercentage=function(e){return this._metricsKit.eventHandlers.base.xpViewablePercentage(e)}
var se=function(e){this._metricsKit=e}
se.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},se.prototype.metricsData=function(e,t,n){var r=this._metricsKit.eventHandlers.base
return r.processMetricsData.apply(this,arguments)},se.prototype.knownFields=function(){return["buttons","code","details","message","type","eventType","eventVersion","type"]},se.prototype.eventType=function(e){return"dialog"},se.prototype.eventVersion=function(e){return e&&e.eventVersion||2}
var ae=function(e){this._metricsKit=e}
ae.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},ae.prototype.metricsData=function(e,t,n){var r=this._metricsKit.eventHandlers.base
return r.processMetricsData.apply(this,arguments)},ae.prototype.knownFields=function(){return["eventType","eventVersion","extRefUrl","osLanguages","refApp","type"]},ae.prototype.eventType=function(e){return"enter"},ae.prototype.eventVersion=function(e){return e&&e.eventVersion||1},ae.prototype.osLanguages=function(e){return e&&e.osLanguages||this._metricsKit.system.environment.osLanguages()}
var ce=function(e){this._metricsKit=e}
ce.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},ce.prototype.metricsData=function(e,t,n){var r=this._metricsKit.eventHandlers.base
return r.processMetricsData.apply(this,arguments)},ce.prototype.knownFields=function(){return["destinationUrl","eventType","eventVersion","type"]},ce.prototype.eventType=function(e){return"exit"},ce.prototype.eventVersion=function(e){return e&&e.eventVersion||1}
var pe=function(e){this._metricsKit=e}
pe.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},pe.prototype.metricsData=function(e){var t=[void 0,void 0,void 0],n=this._metricsKit.eventHandlers.base
t.push({eventType:e})
var r=Array.prototype.slice.call(arguments,1)
return t=t.concat(r),n.processMetricsData.apply(this,t)},pe.prototype.knownFields=function(){return["eventTime","eventType"]},pe.prototype.mtIncludeBaseFields=function(){return!1},pe.prototype.eventTime=function(e){return e&&e.eventTime||Date.now()},pe.prototype.eventType=function(e){return e&&e.eventType||void 0}
var ue=function(e){this._metricsKit=e}
ue.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},ue.prototype.metricsData=function(e,t,n){var r=this._metricsKit.eventHandlers.base
return r.processMetricsData.apply(this,arguments)},ue.prototype.knownFields=function(){return["eventType","eventVersion","impressions","xpViewablePercentage","xpViewableThreshold"]},ue.prototype.eventType=function(e){return"impressions"},ue.prototype.eventVersion=function(e){return e&&e.eventVersion||3},ue.prototype.impressions=function(e){return e?e.impressions:void 0},ue.prototype.xpViewablePercentage=function(e){return this._metricsKit.eventHandlers.base.xpViewablePercentage(e)},ue.prototype.xpViewableThreshold=function(e){var t=this._metricsKit.config
return e&&e.xpViewableThreshold||t.value("impressions.viewableThreshold")}
var le=W,he=function(e){this._metricsKit=e}
he.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},he.prototype.metricsData=function(e,t,n){var r=this._metricsKit.eventHandlers.base
return r.processMetricsData.apply(this,arguments)},he.prototype.knownFields=function(){return["eventType",le.EVENT_VERSION,"id","idType","type","typeDetails","actionType","actionDetails","url","duration","position"]},he.prototype.eventType=function(e){return"media"},he.prototype.eventVersion=function(e){return e&&e.eventVersion||1}
var de=function(e){this._metricsKit=e,this.pageHistoryCache=[]}
de.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},de.prototype.metricsData=function(e,t,n){var r=this._metricsKit.eventHandlers.base
return r.processMetricsData.apply(this,arguments)},de.prototype.knownFields=function(){return["eventType","eventVersion","extRefUrl","hostApp","refApp","refUrl","requestStartTime","responseStartTime","responseEndTime","pageHistory","pageLoadTime","pageRenderTime","searchFilters","searchTerm"]},de.prototype.eventType=function(e){return"page"},de.prototype.eventVersion=function(e){return e&&e.eventVersion||1},de.prototype.pageHistory=function(e){var t
if((e=e||{}).pageHistory)t=e.pageHistory
else{t=this.pageHistoryCache.slice(0)
var n=e.page
n&&(this.pageHistoryCache.length>=5&&this.pageHistoryCache.shift(),this.pageHistoryCache.push(n))}return t}
var fe=function(e){this._metricsKit=e}
fe.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},fe.prototype.metricsData=function(e,t,n){var r=this._metricsKit.eventHandlers.base
return r.processMetricsData.apply(this,arguments)},fe.prototype.knownFields=function(){return["actionDetails","actionType","actionUrl","eventType","eventVersion","filters","location","targetId","targetType","term"]},fe.prototype.eventType=function(e){return"search"},fe.prototype.eventVersion=function(e){return e&&e.eventVersion||2}
var ye=function(e){this._metricsKit=e}
ye.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},ye.prototype.metricsData=function(e){var t=[null,null,null].concat(Array.prototype.slice.call(arguments))
return this._metricsKit.eventHandlers.base.processMetricsData.apply(this,t)},ye.prototype.knownFields=function(){return["eventType","eventVersion"]},ye.prototype.eventType=function(e){return"transaction"},ye.prototype.eventVersion=function(e){return e&&e.eventVersion||1}
var me=function(e){this.account=new ee(e),this.base=new ne(e),this.buyConfirmed=new re(e),this.click=new oe(e),this.dialog=new se(e),this.enter=new ae(e),this.exit=new ce(e),this.flexible=new pe(e),this.impressions=new ue(e),this.media=new he(e),this.page=new de(e),this.search=new fe(e),this.transaction=new ye(e),B.attachDelegateInfo(this.account),B.attachDelegateInfo(this.base),B.attachDelegateInfo(this.buyConfirmed),B.attachDelegateInfo(this.click),B.attachDelegateInfo(this.enter),B.attachDelegateInfo(this.exit),B.attachDelegateInfo(this.flexible),B.attachDelegateInfo(this.impressions),B.attachDelegateInfo(this.media),B.attachDelegateInfo(this.page),B.attachDelegateInfo(this.search),B.attachDelegateInfo(this.transaction)},ve=function(e){this._metricsKit=e}
ve.prototype.getIdType=function(e){var t=this._metricsKit.config,n=e.indexOf("."),r=t.value("compoundSeparator")
return(-1!==n?e.substring(0,n):"its")+r+"id"},ve.prototype.processMetricsData=function(e,t,n,i,o,s){var a=[{pageId:n,pageType:i,pageContext:o}]
return r.SC.isArray(s)&&(a=a.concat(s)),r.BU.processMetricsData(e,t,!0,a)},ve.prototype.applyFieldsMap=function(e,t){var n,i,o,s,a=this._metricsKit.config
if(e&&t)if(o={},n=a.value("fieldsMap")||{},i=r.EE.valueForKeyPath(t,n,n.custom))if(Array.isArray(i))for(s=0;s<i.length;++s)e[i[s]]&&(o[i[s]]=e[i[s]])
else if("object"==typeof i)for(var c in i)for(s=0;s<i[c].length;++s){var p=r.EE.valueForKeyPath(i[c][s],e)
if(p){o[c]=p
break}}else this._metricsKit.system.logger.error("mt-metricskit: incorrect data type provided to applyFieldsMap (only accepts objects and Arrays)")
else this._metricsKit.system.logger.error("mt-metricskit: unable to get fieldsMap from config-source")
else e||this._metricsKit.system.logger.error("mt-metricskit: No data provided to applyFieldsMap"),t||this._metricsKit.system.logger.error("mt-metricskit: No sectionName provided to applyFieldsMap")
return o},ve.prototype.flattenImpressions=function(e,t){var n,i,o,s,a=[],c=t||1
if(e){e=function(e){var t,n={},r=[]
if(e&&e[0]&&void 0!==e[0].index)for(var i=0;i<e.length;++i)n[t=e[i].index]||(n[t]=!0,r.push(e[i]))
return r}(e)
for(var p=0;p<e.length;p++){if("string"==typeof(n=e[p]).data)try{i=JSON.parse(n.data)}catch(e){s=decodeURIComponent(n.data)
try{i=JSON.parse(s)}catch(t){this._metricsKit.system.logger.error("mt-metricskit: non-JSON serialized data found on impression object. Cannot parse.",e)}}else i=n
if(i){if(i.impressionTimes=n.timestamps,i.impressionIndex=n.index,i.id&&!i.idType)if("genre"===n.kind){var u=this._metricsKit.config
i.idType="label"+u.value("compoundSeparator")+"id"}else i.idType=this.getIdType(i.id.toString())
n.parent&&void 0!==n.parent.impressionId&&(i.impressionParentId=n.parent.impressionId),i.impressionId=c,n.impressionId=c,++c,a.push(i),r.EE.valueForKeyPath("children.length",n)>0&&(o=this.flattenImpressions(n.children,c),a=a.concat(o),c+=o.length)}}}else this._metricsKit.system.logger.warn("Fuse-Metrics: No impressions provided to to flattenImpressions")
return a},ve.prototype.buildLocationStructure=function(e,t){for(var n,r=e,i=[];r;)(n=t.call(t,r))&&i.push(n),r=r.parentNode
return i}
var ge=function(){}
ge.prototype.setDelegate=function(e){return r.SC.attachDelegate(this,e)},ge.prototype.makeAjaxRequest=r.L5.makeAjaxRequest
var _e={attachDelegate:function(e,t){return r.SC.attachDelegate(e,t)},extend:function(e){return r.SC.extend.apply(r.SC,arguments)},bindFunctionsContext:function(e){if(e)for(var t in e)"function"==typeof e[t]&&(e[t]=e[t].bind(e))}},Se={versionStringFromUserAgent:function(e,t){return r.Z_.versionStringFromUserAgent(e,t)}},be=function(e){this.delegateExtension=B,this.eventFields=new ve(e),_e.bindFunctionsContext(this.eventFields),this.keyValue=r.EE,this.network=new ge,this.reflect=_e,this.string=Se},Ce=function(e){this._metricsKit=e,this._baseEventHandler=Object.create(this._metricsKit.eventHandlers.base)}
Ce.prototype.clientId=function(e){if(!this._metricsKit.config.initialized())return this._metricsKit.system.logger.error("Unable to load topic config, please invoke clientId() after MetricsKit is initialized."),null
var t=this._baseEventHandler.metricsData(null,null,null,e)
return t?t.clientId:null}
var Ie=function(e){this.base=new Ce(e)},we=function(e,t){this._initCalled=!1,this._delegatePackage=t,this.system=new $,this.config=i.Z.getConfig(e),this.eventHandlers=new me(this),this.eventFields=new Ie(this),this.utils=new be(this),this._constraints=null,r.SC.isDefined(e)||this.system.logger.error("No topic is provided to ClickstreamProcessor."),r.SC.isDefinedNonNull(t)||this.system.logger.error("No delegate is provided to ClickstreamProcessor")}
we.prototype.init=function(e){this._initCalled||(this._initCalled=!0,e=function(e,t){t=t||{}
var n={onSuccessHandler:null,onFailureHandler:null,configSourcesFn:null}
return n.configSourcesFn=t.configSourcesFn,n.onSuccessHandler=t.onSuccessHandler,n.onFailureHandler=t.onFailureHandler,n}(0,e),function(e,t){var n=(t=t||{}).delegates||{},o=t.configSourcesFn,s=t.onSuccessHandler,a=t.onFailureHandler,c=n.environment,p=n.network,u=n.logger
r.SC.isFunction(o)||function(e){if(!e.cachedSource()){var t=function(e){var t=G[e]
return r.SC.isDefinedNonNull(t)||(t=U),t}(e.topic())
e.setCachedSource(t)}}(e),i.Z.environment.setDelegate(c),i.Z.logger.setDelegate(u),i.Z.network.setDelegate(p),function(e){var t
r.SC.attachMethods(e,r.vc,e),t=e,r.SC.isFunction(t.constraintProfile)&&r.SC.isFunction(t.constraintProfiles)||r.SC.attachMethods(t,k,t),B.attachDelegateInfo(e)}(e),e.init(o,s,a)}(this.config,{configSourcesFn:e.configSourcesFn,onSuccessHandler:e.onSuccessHandler,onFailureHandler:e.onFailureHandler,delegates:{environment:this.system.environment,logger:this.system.logger,network:this.utils.network}}),this._constraints=new H(this.config,{environment:this.system.environment}),this._delegatePackage&&(r.SC.setDelegates(this.eventHandlers,this._delegatePackage),r.SC.setDelegates(this.system,this._delegatePackage),r.SC.setDelegates(this.utils,this._delegatePackage)))},we.prototype.cleanup=function(){var e
this._delegatePackage&&r.SC.isFunction(this._delegatePackage.cleanup)&&this._delegatePackage.cleanup(),e=this.config,i.Z.cleanupConfig(e.topic()),r.SC.detachMethods(i.Z.environment),r.SC.detachMethods(i.Z.logger),r.SC.detachMethods(i.Z.network),r.SC.resetDelegates(this.eventHandlers),r.SC.resetDelegates(this.system),r.SC.resetDelegates(this.utils),this.config=null,this.system=null,this.eventHandlers=null,this.utils=null,this._delegatePackage=null,this._constraints=null,this._initCalled=!1}}}])
