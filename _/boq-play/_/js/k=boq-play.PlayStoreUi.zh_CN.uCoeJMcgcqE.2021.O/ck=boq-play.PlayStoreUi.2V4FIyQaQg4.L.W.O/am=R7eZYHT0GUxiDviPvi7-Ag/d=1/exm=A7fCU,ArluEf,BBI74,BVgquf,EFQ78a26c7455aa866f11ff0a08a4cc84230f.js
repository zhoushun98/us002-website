"use strict";this.default_PlayStoreUi=this.default_PlayStoreUi||{};(function(_){var window=this;
try{
_.xza=_.B("vGCTM",[_.cn,_.Al,_.ol]);
_.u("vGCTM");
var Jzb,Kzb,Lzb;Jzb=/[?&](PAffiliateId)=/i;Kzb=/[?&](PCamRefId)=/i;
Lzb=function(a){if(_.hj()&&a.H!=null){var b=a.H.get("GPAS");if(b){var c=b.afId,d=b.afIdParamName,e=b.ts,f=b.afCampaignId;b=b.afCampaignIdParamName;if(c&&e&&!(Date.now()-e>2592E5)){e=_.Co("/");_.yo(e,d,c);f&&f.length!=0&&_.yo(e,b,f);c=a.ka;d=c.Wt;e=e.toString();b=(12).toString();f=new _.iU;_.yi(f,1,e);b!=null?_.Ai(f,2,parseInt(b,10)):_.Ai(f,2,0);b=a.N.get().document.referrer;b!=null&&_.yi(f,9,b);e=_.Ao(_.Co(e),"referrer");e!=null&&_.yi(f,8,e);e=new _.sn;_.I(e,_.iU,6,f);const g=
new _.mn;f=g;b=Date.now().toString();_.xi(f,1,b);f=g;_.ln(f,e.kc());d.call(c,f);a.H.remove("GPAS")}}}};
_.Mzb=class extends _.er{static Ka(){return{service:{wg:_.gU,view:_.xM,window:_.Zr}}}constructor(a){super();this.ka=a.service.wg;this.V=a.service.view;this.N=a.service.window;this.H=(a=_.hNa("GPAS"))?new _.wg(a):null;var b=this.N.get().location.href;if(a=Jzb.exec(b)){a=a[1];var c=_.Co(b,!0),d=_.Ao(c,a);if(d.length!=0){b=Kzb.exec(b);var e=null,f=null;b&&(f=b[1],e=_.Ao(c,f));var g=Date.now();this.H!=null&&this.H.set("GPAS",{afId:d,afIdParamName:a,ts:g,afCampaignId:e,afCampaignIdParamName:f},g+2592E5);
_.Bo(c,a);b&&_.Bo(c,f);_.wM(this.V,this.V.Ji().ma(),c.toString());Lzb(this)}}else Lzb(this)}};_.fr(_.xza,_.Mzb);
_.w();
_.u("qxhHpe");
_.ppc=_.bm("tGMTLb");
_.w();
_.ADa=_.B("oEJvKc",[_.xza,_.Bl,_.Al,_.ol]);
_.u("oEJvKc");
var qpc=class extends _.ht{static Ka(){return{service:{hfa:_.Mzb,focus:_.zQ,view:_.xM,window:_.Zr}}}constructor(a){super(a.Aa);this.zj=a.service.focus;this.Pd=a.service.view;this.window=a.service.window.get();a=_.ok(5,this.Pd.N());if(a?.startsWith("/web/")){var b=a.substring(4);a=this.Pd.N();_.cb(b,"/")||(b="/"+b);a=a.match(_.mk);_.wM(this.Pd,this,_.lk(a[1],a[2],a[3],a[4],b,a[6],a[7]))}}NR(a,b){_.Zf(this.window.document.body,_.ppc,b.Of.getMetadata());this.ma().Bb("xsXTx");this.N()||_.vQ(this.zj,new _.Jm(this.window.document.body));
return null}OR(){this.ma().ub("xsXTx");return null}H(){return!1}N(){const a=_.fg(this.ma().el(),"savedfocusid");return a&&this.ma().el().querySelector('[data-focusid="'+a+'"]')||_.wQ(this.zj,this.ma()).filter(b=>b.hasAttribute("autofocus")).el()?!0:!1}};_.W(qpc.prototype,"rFrphd",function(){return this.N});_.W(qpc.prototype,"Q6GLuf",function(){return this.H});_.jt(_.ADa,qpc);_.vwb(qpc);
_.w();
}catch(e){_._DumpException(e)}
}).call(this,this.default_PlayStoreUi);
// Google Inc.
